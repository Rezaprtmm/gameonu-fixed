export default function Release({ title, icon }) {
    return (
        <p className="flex flex-row font-text text-[16px] font-normal leading-normal items-center gap-[10px] text-[#737373]">
            {icon}
            {title}
        </p>
    );
}
