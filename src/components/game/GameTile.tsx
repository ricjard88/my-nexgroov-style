import { cn } from "@/lib/utils";

interface GameTileProps {
  isStable: boolean;
  patternType: 'rotation' | 'scale' | 'opacity' | 'pulse' | 'wobble' | 'chaos' | 
               'rotation-fast' | 'scale-fast' | 'opacity-fast' | 'pulse-fast' | 'wobble-fast' | 'chaos-fast';
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
      case 'opacity':
        return 'animate-tile-opacity';
      case 'opacity-fast':
        return 'animate-tile-opacity-fast';
      case 'pulse':
        return 'animate-tile-pulse';
      case 'pulse-fast':
        return 'animate-tile-pulse-fast';
      case 'wobble':
        return 'animate-tile-wobble';
      case 'wobble-fast':
        return 'animate-tile-wobble-fast';
      case 'chaos':
        return 'animate-tile-chaos';
      case 'chaos-fast':
        return 'animate-tile-chaos-fast';
      default:
        return 'animate-tile-rotate';
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-square w-full rounded-lg border border-purple-500/30 bg-gray-800/50 transition-all duration-200",
        "hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900",
        getAnimationClass()
      )}
      aria-label="Game tile"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
      </div>
    </button>
  );
};

export default GameTile;
