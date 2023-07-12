export default function Checkbox({
    className = "",
    checked = false,
    ...props
}) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-primary text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
            defaultChecked={checked}
        />
    );
}
