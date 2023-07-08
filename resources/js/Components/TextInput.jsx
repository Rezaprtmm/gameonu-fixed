import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        name,
        value,
        className = "",
        isFocused,
        isError,
        autoComplete,
        ...props
    },
    ref
) {
    const inputType = ["text", "email", "password", "number", "file"].includes(
        type
    )
        ? type
        : "text";
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={inputType}
            name={name}
            value={value}
            className={`bg-transparent border-white border-b-[1px] border-t-0 border-x-0 text-[#ccc] font-text text-[16px] font-normal leading-normal pb-[16px] pl-0 pr-[20px] ${
                isError && "border-red-500 border-b-[2px]"
            } ${className}`}
            ref={input}
            autoComplete={autoComplete}
        />
    );
});
