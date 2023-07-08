import { Link } from "@inertiajs/react";
export default function Items({ link, text, icon }) {
    return (
        <Link
            href={link}
            className="flex items-center text-white font-text text-[16px] font-normal leading-normal gap-[8px] mt-[22px]"
        >
            {icon}
            {text}
        </Link>
    );
}
