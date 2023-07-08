export default function PrimaryButton({
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
            className={`bg-secondary px-[30px] py-[10px] font-bold text-white ${
                processing && "oppacity-20"
            } ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
