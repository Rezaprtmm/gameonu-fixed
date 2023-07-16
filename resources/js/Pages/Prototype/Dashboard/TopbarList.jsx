import { Link } from "@inertiajs/react";
export default function TopbarList({ link, title, isActive }) {
    return (
        <Link
            className={`font-sans text-[16px] font-bold leading-normal  w-[160px] mt-[24px] text-secondary border-secondary border-[2px] h-[40px] flex items-center justify-center ${
                isActive
                    ? "bg-secondary text-white"
                    : "bg-white border-secondary border text-secondary"
            }}`}
            href={link}
        >
            {title}
        </Link>
    );
}
