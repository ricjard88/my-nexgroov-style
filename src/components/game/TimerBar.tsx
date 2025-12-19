interface TimerBarProps {
  timeLeft: number;
  maxTime: number;
}

const TimerBar = ({ timeLeft, maxTime }: TimerBarProps) => {
  const percentage = (timeLeft / maxTime) * 100;
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500 transition-all duration-100 ease-linear rounded-full shadow-lg shadow-purple-500/50"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default TimerBar;
