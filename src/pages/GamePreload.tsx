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

type PatternType = 'rotation' | 'scale' | 'glow' | 'drift' | 'sway' | 'breathe' | 
                   'rotation-fast' | 'scale-fast' | 'glow-fast' | 'drift-fast' | 'sway-fast' | 'breathe-fast';

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
    // Gentle difficulty progression - no harsh flashing
    // 1-2: Easy (slow rotation, scale)
    // 3-4: Medium (glow, drift)
    // 5-6: Harder (sway, breathe)
    // 7-11: Fast versions
    switch (lvl) {
      case 1: return 'rotation';
      case 2: return 'scale';
      case 3: return 'glow';
      case 4: return 'drift';
      case 5: return 'sway';
      case 6: return 'breathe';
      case 7: return 'rotation-fast';
      case 8: return 'scale-fast';
      case 9: return 'glow-fast';
      case 10: return 'drift-fast';
      case 11: return 'breathe-fast';
      default: return 'breathe-fast';
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
      setLevel(nextLevel); // Set level to trigger isComplete
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
    <div className="dark min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      {/* Intro text */}
      <div className="h-16 flex items-center justify-center mb-8">
        {showIntro && (
          <h1 
            className="font-serif text-xl sm:text-2xl text-foreground animate-fade-in text-center"
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

      {/* Level indicator - hide when complete */}
      {!isComplete && (
        <p className="text-muted-foreground text-sm mb-6">
          {gameOver ? 'Time\'s up!' : `Level ${level} of ${MAX_LEVEL}`}
        </p>
      )}

      {/* Game over - restart button */}
      {gameOver && (
        <button
          onClick={handleRestart}
          className={cn(
            "px-6 py-3 rounded-md border border-[hsl(270_40%_50%/0.5)] bg-secondary text-foreground",
            "hover:bg-[hsl(270_40%_30%)] hover:border-[hsl(270_40%_60%)] transition-all duration-200",
            "font-sans text-sm animate-fade-in"
          )}
        >
          Try Again
        </button>
      )}

      {/* Completion state - centered with message */}
      {isComplete && !gameOver && (
        <div className="flex flex-col items-center animate-fade-in">
          <p className="text-muted-foreground/70 text-xs mb-4 font-serif italic">
            Noise fades. Patterns remain.
          </p>
          <button
            onClick={onEnter}
            className={cn(
              "px-8 py-3 rounded-md bg-[hsl(270_40%_55%)] text-white",
              "hover:bg-[hsl(270_40%_60%)] transition-all duration-200",
              "font-sans text-sm font-medium",
              "shadow-lg shadow-[hsl(270_40%_50%/0.3)] hover:shadow-[hsl(270_40%_55%/0.4)]"
            )}
          >
            Enter Site →
          </button>
        </div>
      )}

      {/* Enter Site button - appears from level 3+ but not when complete */}
      {canEnterSite && !isComplete && !gameOver && (
        <button
          onClick={onEnter}
          className={cn(
            "px-8 py-3 rounded-md bg-[hsl(270_40%_55%)] text-white",
            "hover:bg-[hsl(270_40%_60%)] transition-all duration-200",
            "font-sans text-sm font-medium animate-fade-in",
            "shadow-lg shadow-[hsl(270_40%_50%/0.3)] hover:shadow-[hsl(270_40%_55%/0.4)]"
          )}
        >
          Enter Site →
        </button>
      )}

      {/* Skip option - only before level 3 */}
      {!canEnterSite && !gameOver && (
        <button
          onClick={onEnter}
          className="mt-8 text-muted-foreground text-xs hover:text-foreground transition-colors"
        >
          Skip
        </button>
      )}
    </div>
  );
};

export default GamePreload;
