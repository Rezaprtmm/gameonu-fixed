import { Link } from "@inertiajs/react";

export default function Menulist({
    link,
    text,
    isActive,
    method = "get",
    icon,
}) {
    return (
        <li>
            <Link
                href={link ? route(link) : null}
                method={method}
                as="button"
                className={`flex gap-[10px] ${isActive && "text-secondary"}`}
            >
                {icon}
                {text}
            </Link>
        </li>
    );
}
