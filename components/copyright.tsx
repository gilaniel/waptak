"use client";

export const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <span className="text-[12px]">{year} ООО «ВапТак». Все права защищены</span>
  );
};
