import GameCircle from "./GameCircle";

interface Circle {
  id: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  isStable: boolean;
  animationType?: string;
}

interface CircleLayoutProps {
  circles: Circle[];
  onCircleClick: (position: string, isStable: boolean) => void;
}

// Phase offsets for desync effect - each circle has different timing
const PHASE_OFFSETS: Record<string, number> = {
  top: 0,
  right: 1.5,
  bottom: 3,
  left: 4.5,
  center: 6,
};

const CircleLayout = ({ circles, onCircleClick }: CircleLayoutProps) => {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80">
      {circles.map((circle) => {
        const positionClasses = {
          top: "absolute top-0 left-1/2 -translate-x-1/2",
          bottom: "absolute bottom-0 left-1/2 -translate-x-1/2",
          left: "absolute left-0 top-1/2 -translate-y-1/2",
          right: "absolute right-0 top-1/2 -translate-y-1/2",
          center: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        };

        return (
          <div key={circle.id} className={positionClasses[circle.position]}>
            <GameCircle
              isStable={circle.isStable}
              phaseOffset={PHASE_OFFSETS[circle.position]}
              animationType={circle.animationType}
              onClick={() => onCircleClick(circle.position, circle.isStable)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CircleLayout;
