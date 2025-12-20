import { useEffect, useState, useRef, useCallback } from 'react';
import CircleLayout from '@/components/game/CircleLayout';
import TimerBar from '@/components/game/TimerBar';
import { cn } from '@/lib/utils';

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

const ENCOURAGING_QUOTES = [
  "Keep looking.",
  "Stillness reveals itself.",
  "Trust your instincts.",
  "Patience is power.",
  "Almost there.",
  "Focus softens the noise.",
  "You're closer than you think.",
  "Breathe. Observe.",
  "The still one waits for you.",
  "Clarity comes with calm.",
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
  const [level, setLevel] = useState(1);
  const [showIntro, setShowIntro] = useState(true);
  const [encourageQuote, setEncourageQuote] = useState<string | null>(null);
  const quoteTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleCircleClick = (position: string, isStable: boolean) => {
    if (!isStable) {
      // Show random encouraging quote
      if (quoteTimeoutRef.current) clearTimeout(quoteTimeoutRef.current);
      const quote = ENCOURAGING_QUOTES[Math.floor(Math.random() * ENCOURAGING_QUOTES.length)];
      setEncourageQuote(quote);
      quoteTimeoutRef.current = setTimeout(() => setEncourageQuote(null), 1500);
      return;
    }

    const nextLevel = level + 1;
    
    if (nextLevel > MAX_LEVEL) {
      setLevel(nextLevel);
      return;
    }

    setLevel(nextLevel);
    setCircles(generateCircles());
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

      {/* Encouraging quote - shown on wrong click */}
      {!isComplete && (
        <div className="h-6 flex items-center justify-center mb-2">
          {encourageQuote && (
            <p className="text-[hsl(270_25%_72%)] text-sm font-serif italic animate-fade-in">
              {encourageQuote}
            </p>
          )}
        </div>
      )}

      {/* Progress bar - hide when complete */}
      {!isComplete && (
        <div className="w-full max-w-xs sm:max-w-sm mb-8 px-4">
          <TimerBar currentLevel={level} maxLevel={MAX_LEVEL} />
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
          Level {level} of {MAX_LEVEL}
        </p>
      )}

      {/* Completion state */}
      {isComplete && (
        <div className="flex flex-col items-center animate-fade-in">
          <p className="text-[hsl(270_15%_50%)] text-lg sm:text-xl mb-6 font-serif italic">
            Noise fades. Patterns remain.
          </p>
          <button
            onClick={onEnter}
            className={cn(
              "px-8 py-3 rounded-md bg-[hsl(270_25%_72%)] text-black",
              "transition-all duration-200 hover:bg-[hsl(270_25%_65%)]",
              "font-sans text-sm font-bold"
            )}
          >
            Get to Know Richard Graystone →
          </button>
        </div>
      )}

      {/* Enter Site button - appears from level 3+ */}
      {canEnterSite && !isComplete && (
        <button
          onClick={onEnter}
          className={cn(
            "px-8 py-3 rounded-md bg-[hsl(270_25%_72%)] text-black",
            "transition-all duration-200 hover:bg-[hsl(270_25%_65%)]",
            "font-sans text-sm font-bold animate-fade-in"
          )}
        >
          Get to Know Richard Graystone →
        </button>
      )}

      {/* Skip option - only before level 3 */}
      {!canEnterSite && (
        <button
          onClick={onEnter}
          className="mt-8 text-[hsl(45_90%_40%)] text-xs transition-colors hover:text-[hsl(45_90%_35%)]"
        >
          Skip
        </button>
      )}
    </div>
  );
};

export default GamePreload;
