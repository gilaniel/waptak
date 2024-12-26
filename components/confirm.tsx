import Link from "next/link";

export const Confirm = ({
  value,
  onChange,
  isError,
}: {
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}) => {
  return (
    <label className="container-confirm flex items-start xl:items-center gap-2">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        name="confirm"
      />
      <div
        className={`checkmark translate-y-[2px] xl:translate-y-0 ${
          isError ? "invalid" : ""
        }`}
      ></div>
      <span className="text-white flex-1 text-[14px]">
        Нажимая отправить вы соглашаетесь с{" "}
        <Link href="/privacy_policy" target="_blank">
          политикой обработки персональных
        </Link>
        данных.
      </span>
    </label>
  );
};
