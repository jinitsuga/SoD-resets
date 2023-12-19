import * as React from "react";

type TimerProps = {
  raid: string;
  region: string;
};

export default function Timer({ raid, region }: TimerProps) {
  const [timeLeft, setTimeLeft] = React.useState<undefined | number>(undefined);

  const rightNow = Date.now();
  let nextReset = Date.parse("21 Dec 2023 10:00:00 EST");
  console.log(rightNow > nextReset);

  // Once rightNow is equal or lower than nextReset, nextReset gains 72 hours
  if (rightNow >= nextReset) {
    nextReset = nextReset + 72 * 3600000;
  }

  let totalSeconds = timeLeft && Math.floor(timeLeft / 1000);

  const daysLeft = totalSeconds && Math.floor(totalSeconds / 86400);
  totalSeconds = daysLeft && Math.floor(totalSeconds! - daysLeft * 86400);

  const hoursLeft = totalSeconds && Math.floor(totalSeconds / 3600);
  totalSeconds = hoursLeft && Math.floor(totalSeconds! - hoursLeft * 3600);

  const minutesLeft = totalSeconds && Math.floor(totalSeconds / 60);
  totalSeconds = minutesLeft && Math.floor(totalSeconds! - minutesLeft * 60);

  //   const seconds = timeLeft && Math.floor(timeLeft / 1000);
  //   const minutes = seconds && Math.floor(seconds / 60);
  //   const hours = minutes && Math.floor(minutes / 60);
  //   const days = hours && Math.floor(hours / 24);

  setTimeout(() => {
    setTimeLeft(nextReset - rightNow);
  }, 1000);

  return (
    <div className="text-stone-100 text-xl">
      <h3>{region}</h3>
      <span>{raid} next reset: </span>
      <p>
        Resets in {daysLeft}d {hoursLeft}h {minutesLeft}m {totalSeconds}s
      </p>
    </div>
  );
}
