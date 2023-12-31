import * as React from "react";

type TimerProps = {
  raid: string;
  region?: string;
};

export default function Timer({ raid, region }: TimerProps) {
  const [timeLeft, setTimeLeft] = React.useState<undefined | number>(undefined);

  const rightNow = Date.now();
  let nextReset = Date.parse("21 Dec 2023 10:00:00 EST");

  // Once rightNow is equal or lower than nextReset, nextReset gains 72 hours
  if (rightNow >= nextReset) {
    nextReset = nextReset + 72 * 3600000;
  }

  const nextDate = new Date(nextReset).toLocaleDateString();

  let totalSeconds = timeLeft && Math.floor(timeLeft / 1000);

  const daysLeft = totalSeconds && Math.floor(totalSeconds / 86400);
  totalSeconds = daysLeft && Math.floor(totalSeconds! - daysLeft * 86400);

  const hoursLeft = totalSeconds && Math.floor(totalSeconds / 3600);
  totalSeconds = hoursLeft && Math.floor(totalSeconds! - hoursLeft * 3600);

  const minutesLeft = totalSeconds && Math.floor(totalSeconds / 60);
  totalSeconds = minutesLeft && Math.floor(totalSeconds! - minutesLeft * 60);

  setTimeout(() => {
    setTimeLeft(nextReset - rightNow);
  }, 1000);

  return (
    <div className="flex flex-col gap-2 text-stone-100 text-xl border-2 border-rose-200 rounded p-2">
      <h3 className="text-3xl text-rose-500">{region}</h3>
      <p>
        {raid} next reset:{" "}
        <span className="text-rose-300 text-xl">{nextDate}</span>
      </p>
      <p className="text-rose-200 text-xl">
        {daysLeft}d {hoursLeft}h {minutesLeft}m {totalSeconds}s
      </p>
    </div>
  );
}
