"use client";

declare global {
  interface Window {
    ym: any;
  }
}

export const Metr = () => {
  const handleEventClick = () => {
    window.ym(100072440, "reachGoal", "poll_completed", {
      question1: "answer",
      age: "25-30",
      rating: "5",
    });
  };

  return <div onClick={handleEventClick}>metr</div>;
};
