import React, { useEffect, useState } from "react";

const Clock = ({ duration, onComplete, isRunning }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [startClock, setStartClock] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timeoutId = setTimeout(() => {
      setStartClock(true);
    }, duration * 1000);

    return () => clearTimeout(timeoutId);
  }, [duration, isRunning]);

  useEffect(() => {
    if (!startClock) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [startClock]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      setStartClock(false);
    }
  }, [timeLeft, onComplete]);

  return (
    <div>
      <h2>
        {startClock ? `Time left: ${timeLeft}s` : `Starting in: ${duration}s`}
      </h2>
    </div>
  );
};

export default Clock;
