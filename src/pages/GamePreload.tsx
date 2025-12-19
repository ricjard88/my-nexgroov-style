import { useEffect, useState, useRef, useCallback } from 'react';
import GameGrid from '@/components/game/GameGrid';
import TimerBar from '@/components/game/TimerBar';
import { cn } from '@/lib/utils';

const INITIAL_TIME = 20;
const GRID_SIZE = 4;

interface GamePreloadProps {
  onEnter: () => void;
}

interface Tile {
  id: string;
  isStable: boolean;
}

type PatternType = 'rotation' | 'scale' | 'opacity';

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
    
    if (nextLevel > 3) {
      // Game completed
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setLevel(nextLevel);

    // Escalation
    if (nextLevel === 2) setPatternType('scale');
    if (nextLevel === 3) setPatternType('opacity');

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

  const isComplete = level > 3;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      {/* Intro text */}
      <div className="h-16 flex items-center justify-center mb-8">
        {showIntro && (
          <h1 
            className="font-serif text-xl sm:text-2xl text-foreground/80 animate-fade-in text-center"
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
      <p className="text-muted-foreground text-sm mb-6">
        {gameOver ? 'Time\'s up!' : isComplete ? 'Complete!' : `Level ${level} of 3`}
      </p>

      {/* Game over - restart button */}
      {gameOver && (
        <button
          onClick={handleRestart}
          className={cn(
            "px-6 py-3 rounded-md border border-border bg-card text-foreground",
            "hover:bg-muted transition-all duration-200",
            "font-sans text-sm animate-fade-in"
          )}
        >
          Try Again
        </button>
      )}

      {/* Enter Site button - appears after completing level 3 */}
      {isComplete && (
        <button
          onClick={onEnter}
          className={cn(
            "px-8 py-3 rounded-md bg-accent text-accent-foreground",
            "hover:bg-accent/90 transition-all duration-200",
            "font-sans text-sm font-medium animate-fade-in",
            "shadow-sm hover:shadow-md"
          )}
        >
          Enter Site →
        </button>
      )}

      {/* Skip option */}
      {!isComplete && !gameOver && (
        <button
          onClick={onEnter}
          className="mt-8 text-muted-foreground/60 text-xs hover:text-muted-foreground transition-colors"
        >
          Skip
        </button>
      )}
    </div>
  );
};

export default GamePreload;
