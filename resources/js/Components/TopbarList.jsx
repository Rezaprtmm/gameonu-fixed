import { Link } from "@inertiajs/react";
export default function TopbarList({ title, className = "", isActive, link }) {
    return (
        <div className="">
            <Link
                href={link}
                className={` px-[135px] py-[18px] font-sans text-[18px] font-bold leading-normal text-secondary ${
                    isActive
                        ? "text-white bg-secondary"
                        : "text-secondary bg-[#E1D2F9]"
                } `}
            >
                {title}
            </Link>
        </div>
    );
}
