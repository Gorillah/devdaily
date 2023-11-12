import React from "react";

const InsightRoll = ({ insights }: { insights: string[] }) => {
  return (
    <div className="w-full bg-accent text-light dark:border-light dark:bg-accentDark dark:text-dark whitespace-nowrap overflow-hidden py-2">
      <div className="animate-roll w-full py-1.5 flex items-center justify-center capitalize font-semibold tracking-wider text-lg">
        {insights.map((insight) => (
          <div key={insight}>
            {insight}
            <span className="px-4 dark:text-dark">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
