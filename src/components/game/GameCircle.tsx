import { cn } from "@/lib/utils";

interface GameCircleProps {
  isStable: boolean;
  phaseOffset: number;
  onClick: () => void;
}

const GameCircle = ({ isStable, phaseOffset, onClick }: GameCircleProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-16 h-16 sm:w-20 sm:h-20 rounded-full",
        "bg-[hsl(270_25%_72%)]",
        "cursor-pointer",
        "focus:outline-none",
        !isStable && "animate-orbital-drift"
      )}
      style={{
        animationDelay: isStable ? undefined : `${phaseOffset}s`
      }}
      aria-label="Circle"
    />
  );
};

export default GameCircle;
