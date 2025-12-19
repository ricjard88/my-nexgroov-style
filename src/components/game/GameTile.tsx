import { cn } from "@/lib/utils";

interface GameTileProps {
  isStable: boolean;
  patternType: 'rotation' | 'scale' | 'glow' | 'drift' | 'sway' | 'breathe' | 
               'rotation-fast' | 'scale-fast' | 'glow-fast' | 'drift-fast' | 'sway-fast' | 'breathe-fast';
  onClick: () => void;
}

const GameTile = ({ isStable, patternType, onClick }: GameTileProps) => {
  const getAnimationClass = () => {
    if (isStable) return '';
    
    switch (patternType) {
      case 'rotation':
        return 'animate-tile-rotate';
      case 'rotation-fast':
        return 'animate-tile-rotate-fast';
      case 'scale':
        return 'animate-tile-scale';
      case 'scale-fast':
        return 'animate-tile-scale-fast';
      case 'glow':
        return 'animate-tile-glow';
      case 'glow-fast':
        return 'animate-tile-glow-fast';
      case 'drift':
        return 'animate-tile-drift';
      case 'drift-fast':
        return 'animate-tile-drift-fast';
      case 'sway':
        return 'animate-tile-sway';
      case 'sway-fast':
        return 'animate-tile-sway-fast';
      case 'breathe':
        return 'animate-tile-breathe';
      case 'breathe-fast':
        return 'animate-tile-breathe-fast';
      default:
        return 'animate-tile-rotate';
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-square w-full rounded-lg border border-[hsl(270_40%_50%/0.3)] bg-[hsl(0_0%_22%)] transition-all duration-200",
        "hover:border-[hsl(270_40%_60%)] hover:shadow-lg hover:shadow-[hsl(270_40%_60%/0.2)] cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-[hsl(270_40%_60%)] focus:ring-offset-2 focus:ring-offset-[hsl(0_0%_18%)]",
        getAnimationClass()
      )}
      aria-label="Game tile"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-[hsl(270_40%_70%)] rounded-full shadow-lg shadow-[hsl(270_40%_60%/0.4)]" />
      </div>
    </button>
  );
};

export default GameTile;
