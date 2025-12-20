import { cn } from "@/lib/utils";

interface GameCircleProps {
  isStable: boolean;
  phaseOffset: number;
  animationType?: string;
  onClick: () => void;
}

const GameCircle = ({ isStable, phaseOffset, animationType, onClick }: GameCircleProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-16 h-16 sm:w-20 sm:h-20 rounded-full",
        "bg-[hsl(270_25%_72%)]",
        "cursor-pointer",
        "focus:outline-none",
        !isStable && animationType
      )}
      style={{
        animationDelay: isStable ? undefined : `${phaseOffset}s`
      }}
      aria-label="Circle"
    />
  );
};

export default GameCircle;
