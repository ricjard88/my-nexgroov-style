interface TimerBarProps {
  timeLeft: number;
  maxTime: number;
}

const TimerBar = ({ timeLeft, maxTime }: TimerBarProps) => {
  const percentage = (timeLeft / maxTime) * 100;
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="h-2 bg-[hsl(0_0%_25%)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[hsl(45_90%_50%)] transition-all duration-100 ease-linear rounded-full shadow-lg shadow-[hsl(45_90%_45%/0.4)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default TimerBar;
