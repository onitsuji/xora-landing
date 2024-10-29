import clsx from "clsx";

type ButtonProps = {
  icon: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  icon,
  children,
  href,
  className,
  onClick,
}: ButtonProps) {
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        className
      )}
      href={href}
    ></a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
