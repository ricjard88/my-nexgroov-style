import { useEffect, useState, useRef, useCallback } from 'react';
import CircleLayout from '@/components/game/CircleLayout';
import TimerBar from '@/components/game/TimerBar';
import { cn } from '@/lib/utils';

const INITIAL_TIME = 25;
const MAX_LEVEL = 11;
const CAN_ENTER_FROM_LEVEL = 3;

const POSITIONS = ['top', 'bottom', 'left', 'right', 'center'] as const;
type Position = typeof POSITIONS[number];

const ANIMATION_TYPES = [
  'animate-orbital-drift',
  'animate-pendulum-sway',
  'animate-vertical-float',
  'animate-diagonal-wander',
  'animate-figure-eight',
  'animate-lazy-spiral',
  'animate-breath-drift',
];

interface GamePreloadProps {
  onEnter: () => void;
}

interface Circle {
  id: string;
  position: Position;
  isStable: boolean;
  animationType?: string;
}

const GamePreload = ({ onEnter }: GamePreloadProps) => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [level, setLevel] = useState(1);
  const [showIntro, setShowIntro] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const generateCircles = useCallback((): Circle[] => {
    const stableIndex = Math.floor(Math.random() * POSITIONS.length);

    return POSITIONS.map((position, i) => ({
      id: crypto.randomUUID(),
      position,
      isStable: i === stableIndex,
      animationType: i === stableIndex ? undefined : ANIMATION_TYPES[Math.floor(Math.random() * ANIMATION_TYPES.length)]
    }));
  }, []);

  // Auto start
  useEffect(() => {
    setCircles(generateCircles());
    const timer = setTimeout(() => setShowIntro(false), 1400);
    return () => clearTimeout(timer);
  }, [generateCircles]);

  // Timer starts after first click
  useEffect(() => {
    if (!hasInteracted || gameOver) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 0.1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setGameOver(true);
          return 0;
        }
        return t - 0.1;
      });
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasInteracted, gameOver]);

  const handleCircleClick = (position: string, isStable: boolean) => {
    if (gameOver) return;
    if (!hasInteracted) setHasInteracted(true);
    if (!isStable) return;

    const nextLevel = level + 1;
    
    if (nextLevel > MAX_LEVEL) {
      if (timerRef.current) clearInterval(timerRef.current);
      setLevel(nextLevel);
      return;
    }

    setLevel(nextLevel);
    
    // Time bonus for completing a level
    const timeBonus = Math.max(1, 4 - Math.floor(nextLevel / 3));
    setTimeLeft(t => Math.min(t + timeBonus, INITIAL_TIME));
    
    setCircles(generateCircles());
  };

  const handleRestart = () => {
    setCircles(generateCircles());
    setTimeLeft(INITIAL_TIME);
    setLevel(1);
    setHasInteracted(false);
    setGameOver(false);
  };

  const isComplete = level > MAX_LEVEL;
  const canEnterSite = level >= CAN_ENTER_FROM_LEVEL;

  return (
    <div className="min-h-screen bg-[hsl(40_30%_96%)] flex flex-col items-center justify-center px-4 py-8">
      {/* Intro text */}
      <div className="h-16 flex items-center justify-center mb-8">
        {showIntro && (
          <h1 
            className="font-serif text-xl sm:text-2xl text-[hsl(270_20%_30%)] animate-fade-in text-center"
          >
            One circle does not move.
          </h1>
        )}
      </div>

      {/* Timer - hide when complete */}
      {!isComplete && (
        <div className="w-full max-w-xs sm:max-w-sm mb-8 px-4">
          <TimerBar timeLeft={timeLeft} maxTime={INITIAL_TIME} />
        </div>
      )}

      {/* Circles - hide when complete */}
      {!isComplete && (
        <div className="mb-8">
          <CircleLayout 
            circles={circles} 
            onCircleClick={handleCircleClick}
          />
        </div>
      )}

      {/* Level indicator - hide when complete */}
      {!isComplete && (
        <p className="text-[hsl(270_15%_50%)] text-sm mb-6">
          {gameOver ? 'Time\'s up!' : `Level ${level} of ${MAX_LEVEL}`}
        </p>
      )}

      {/* Game over - restart button */}
      {gameOver && (
        <button
          onClick={handleRestart}
          className={cn(
            "px-6 py-3 rounded-md bg-[hsl(270_25%_72%)] text-[hsl(270_20%_25%)]",
            "transition-all duration-200",
            "font-sans text-sm animate-fade-in"
          )}
        >
          Try Again
        </button>
      )}

      {/* Completion state */}
      {isComplete && !gameOver && (
        <div className="flex flex-col items-center animate-fade-in">
          <p className="text-[hsl(270_15%_50%)] text-lg sm:text-xl mb-6 font-serif italic">
            Noise fades. Patterns remain.
          </p>
          <button
            onClick={onEnter}
            className={cn(
              "px-8 py-3 rounded-md bg-black text-white",
              "transition-all duration-200 hover:bg-[hsl(0_0%_15%)]",
              "font-sans text-sm font-medium"
            )}
          >
            Get to Know Richard Graystone →
          </button>
        </div>
      )}

      {/* Enter Site button - appears from level 3+ */}
      {canEnterSite && !isComplete && !gameOver && (
        <button
          onClick={onEnter}
          className={cn(
            "px-8 py-3 rounded-md bg-black text-white",
            "transition-all duration-200 hover:bg-[hsl(0_0%_15%)]",
            "font-sans text-sm font-medium animate-fade-in"
          )}
        >
          Get to Know Richard Graystone →
        </button>
      )}

      {/* Skip option - only before level 3 */}
      {!canEnterSite && !gameOver && (
        <button
          onClick={onEnter}
          className="mt-8 text-[hsl(270_15%_60%)] text-xs transition-colors"
        >
          Skip
        </button>
      )}
    </div>
  );
};

export default GamePreload;
