import { cn } from "@/lib/utils";

interface GameTileProps {
  isStable: boolean;
  patternType: 'rotation' | 'scale' | 'opacity';
  onClick: () => void;
}

const GameTile = ({ isStable, patternType, onClick }: GameTileProps) => {
  const getAnimationClass = () => {
    if (isStable) return '';
    
    switch (patternType) {
      case 'rotation':
        return 'animate-tile-rotate';
      case 'scale':
        return 'animate-tile-scale';
      case 'opacity':
        return 'animate-tile-opacity';
      default:
        return 'animate-tile-rotate';
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-square w-full rounded-sm border border-border/40 bg-card transition-all duration-200",
        "hover:border-accent hover:shadow-sm cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background",
        getAnimationClass()
      )}
      aria-label="Game tile"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-foreground/10 rounded-sm" />
      </div>
    </button>
  );
};

export default GameTile;
