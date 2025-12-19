import GameTile from "./GameTile";

interface Tile {
  id: string;
  isStable: boolean;
}

interface GameGridProps {
  tiles: Tile[];
  patternType: 'rotation' | 'scale' | 'opacity';
  onTileClick: (index: number, isStable: boolean) => void;
}

const GameGrid = ({ tiles, patternType, onTileClick }: GameGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm mx-auto">
      {tiles.map((tile, index) => (
        <GameTile
          key={tile.id}
          isStable={tile.isStable}
          patternType={patternType}
          onClick={() => onTileClick(index, tile.isStable)}
        />
      ))}
    </div>
  );
};

export default GameGrid;
