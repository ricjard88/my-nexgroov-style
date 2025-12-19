import { useEffect, useState, useRef, useCallback } from 'react';
import GameGrid from '@/components/game/GameGrid';
import TimerBar from '@/components/game/TimerBar';
import { cn } from '@/lib/utils';

const INITIAL_TIME = 25;
const GRID_SIZE = 4;
const MAX_LEVEL = 11;
const CAN_ENTER_FROM_LEVEL = 3;

interface GamePreloadProps {
  onEnter: () => void;
}

interface Tile {
  id: string;
  isStable: boolean;
}

type PatternType = 'rotation' | 'scale' | 'opacity' | 'pulse' | 'wobble' | 'chaos' | 
                   'rotation-fast' | 'scale-fast' | 'opacity-fast' | 'pulse-fast' | 'wobble-fast' | 'chaos-fast';

const GamePreload = ({ onEnter }: GamePreloadProps) => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [patternType, setPatternType] = useState<PatternType>('rotation');
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [level, setLevel] = useState(1);
  const [showIntro, setShowIntro] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const generateTiles = useCallback((): Tile[] => {
    const total = GRID_SIZE * GRID_SIZE;
    const stableIndex = Math.floor(Math.random() * total);

    return Array.from({ length: total }, (_, i) => ({
      id: crypto.randomUUID(),
      isStable: i === stableIndex
    }));
  }, []);

  const getPatternForLevel = (lvl: number): PatternType => {
    // Difficulty escalation:
    // 1-2: Easy (slow rotation)
    // 3: Medium (scale)
    // 4: Medium (opacity) - Enter site available
    // 5-6: Hard (pulse, wobble - faster)
    // 7-8: Very hard (fast versions)
    // 9-10: Extreme (chaos)
    // 11: Maximum chaos
    switch (lvl) {
      case 1: return 'rotation';
      case 2: return 'scale';
      case 3: return 'opacity';
      case 4: return 'pulse';
      case 5: return 'wobble';
      case 6: return 'rotation-fast';
      case 7: return 'scale-fast';
      case 8: return 'opacity-fast';
      case 9: return 'pulse-fast';
      case 10: return 'wobble-fast';
      case 11: return 'chaos-fast';
      default: return 'chaos-fast';
    }
  };

  // Auto start
  useEffect(() => {
    setTiles(generateTiles());
    const timer = setTimeout(() => setShowIntro(false), 1400);
    return () => clearTimeout(timer);
  }, [generateTiles]);

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

  const handleTileClick = (index: number, isStable: boolean) => {
    if (gameOver) return;
    if (!hasInteracted) setHasInteracted(true);
    if (!isStable) return;

    const nextLevel = level + 1;
    
    if (nextLevel > MAX_LEVEL) {
      // Game completed - all 11 levels done
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setLevel(nextLevel);
    setPatternType(getPatternForLevel(nextLevel));
    
    // Time bonus for completing a level (decreases as levels get harder)
    const timeBonus = Math.max(1, 4 - Math.floor(nextLevel / 3));
    setTimeLeft(t => Math.min(t + timeBonus, INITIAL_TIME));
    
    setTiles(generateTiles());
  };

  const handleRestart = () => {
    setTiles(generateTiles());
    setPatternType('rotation');
    setTimeLeft(INITIAL_TIME);
    setLevel(1);
    setHasInteracted(false);
    setGameOver(false);
  };

  const isComplete = level > MAX_LEVEL;
  const canEnterSite = level >= CAN_ENTER_FROM_LEVEL;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-8">
      {/* Intro text */}
      <div className="h-16 flex items-center justify-center mb-8">
        {showIntro && (
          <h1 
            className="font-serif text-xl sm:text-2xl text-gray-200 animate-fade-in text-center"
          >
            One tile does not change.
          </h1>
        )}
      </div>

      {/* Timer */}
      <div className="w-full max-w-xs sm:max-w-sm mb-8 px-4">
        <TimerBar timeLeft={timeLeft} maxTime={INITIAL_TIME} />
      </div>

      {/* Grid */}
      <div className="mb-8 px-4 w-full">
        <GameGrid 
          tiles={tiles} 
          patternType={patternType} 
          onTileClick={handleTileClick}
        />
      </div>

      {/* Level indicator */}
      <p className="text-gray-400 text-sm mb-6">
        {gameOver ? 'Time\'s up!' : isComplete ? 'Complete! All 11 levels!' : `Level ${level} of ${MAX_LEVEL}`}
      </p>

      {/* Game over - restart button */}
      {gameOver && (
        <button
          onClick={handleRestart}
          className={cn(
            "px-6 py-3 rounded-md border border-purple-500/50 bg-gray-800 text-gray-200",
            "hover:bg-gray-700 hover:border-purple-400 transition-all duration-200",
            "font-sans text-sm animate-fade-in"
          )}
        >
          Try Again
        </button>
      )}

      {/* Enter Site button - appears from level 3+ or when complete */}
      {(canEnterSite || isComplete) && !gameOver && (
        <button
          onClick={onEnter}
          className={cn(
            "px-8 py-3 rounded-md bg-purple-600 text-white",
            "hover:bg-purple-500 transition-all duration-200",
            "font-sans text-sm font-medium animate-fade-in",
            "shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          )}
        >
          Enter Site →
        </button>
      )}

      {/* Skip option - only before level 3 */}
      {!canEnterSite && !gameOver && (
        <button
          onClick={onEnter}
          className="mt-8 text-gray-500 text-xs hover:text-gray-400 transition-colors"
        >
          Skip
        </button>
      )}
    </div>
  );
};

export default GamePreload;
