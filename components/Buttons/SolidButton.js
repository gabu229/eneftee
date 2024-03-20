"use client"

const sizes = {
  xs: "px-3 py-1 rounded-full text-xs",
  sm: "px-4 py-2 rounded-full text-sm",
  md: "px-6 py-3 rounded-full text-base",
  lg: "px-7 py-4 rounded-full text-lg",
};

const colors = {
  primary:
    "bg-primary text-[white] hover:bg-primary/50 focus:ring-primary-300/50",
  light: "bg-white text-black hover:bg-primary/50 focus:ring-primary-300/50",
};

export default function SolidButton({
  content = "Custom Button",
  className = "",
  size = "md",
  theme = "primary",
  type = "button",
  block = false,
  disabled = false,
  icon = "",
  iconAlign = "left",
  customText = "",
  onClickEvent = () => {},
}) {
  let colorClasses = colors[theme];
  let sizeClasses = sizes[size];

  let width = block ? "w-full" : "w-fit";
  let iconAlignment = iconAlign == "left" ? "flex-row" : "flex-row-reverse";

  const clickEvent = () => {
    console.log("BTN clicked!");
    onClickEvent();
  };

  return (
    <>
      <button
        className={`${sizeClasses} ${colorClasses} ${className} ${width} disabled:opacity-75 focus:ring-2 transition focus:outline-none`}
        type={type}
        disabled={disabled}
        onClick={clickEvent}
      >
        <span
          className={`flex gap-2 items-center justify-center ${iconAlignment}`}
        >
          {icon}
          <span className={`${customText} text-nowrap`}>{content}</span>
        </span>
      </button>
    </>
  );
}
