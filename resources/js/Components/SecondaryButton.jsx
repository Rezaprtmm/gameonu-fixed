export default function SecondaryButton({
    type = "button",
    className = "",
    processing,
    disabled,
    children,
    ...props
}) {
    const buttonType = ["button", "submit", "reset"].includes(type)
        ? type
        : "button";
    return (
        <button
            {...props}
            type={buttonType}
            className={`bg-primary px-[30px] py-[10px] font-sans text-white text-[16px] font-bold leading-normal ${
                processing && "oppacity-20"
            } ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
