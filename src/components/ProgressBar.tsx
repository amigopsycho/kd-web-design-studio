
interface ProgressBarProps {
  skill: string;
  percentage: number;
}

const ProgressBar = ({ skill, percentage }: ProgressBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-text">{skill}</span>
        <span className="text-sm font-medium text-text-light">{percentage}%</span>
      </div>
      <div className="w-full bg-secondary-light rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
