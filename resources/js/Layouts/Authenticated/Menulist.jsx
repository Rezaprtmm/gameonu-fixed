import { Link } from "@inertiajs/react";

export default function Menulist({ link, text, isActive, method = "get" }) {
    return (
        <li>
            <Link href={link ? route(link) : null} method={method} as="button">
                {text}
            </Link>
        </li>
    );
}
