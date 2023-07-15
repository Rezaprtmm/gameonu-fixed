import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import Menulist from "./Menulist";
import { List } from "./List";
import { useState, useRef } from "react";

export default function Authenticated({ user }) {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
        setDropdownOpen(!dropdownOpen);
    };
    if (!user) {
        return (
            <nav className="stick max-w-screen border-b-[3px] border-secondary bg-white">
                <div className="container mx-auto flex h-[100px] items-center justify-between px-[110px]">
                    <div>
                        <Link href={route("prototype.homepage")}>
                            <img src="/images/GameOnU-v2.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="items-center ">
                        <ul className="flex gap-[30px] font-text text-[16px] font-medium">
                            {List.map((item, index) => (
                                <Menulist
                                    key={`${index}-${item.index}`}
                                    link={item.link}
                                    icon={item.icon}
                                    text={item.text}
                                    className="flex"
                                    isAactive={
                                        item.link && route().current(item.link)
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                    <Link href={route("login")}>
                        <PrimaryButton
                            type="button"
                            className="flex gap-[10px] items-center"
                        >
                            Login
                            <span>
                                <img src="/svg/call_made.svg" alt="" />
                            </span>
                        </PrimaryButton>
                    </Link>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="stick max-w-screen border-b-[3px] border-secondary bg-white">
                <div className="container mx-auto flex h-[100px] items-center justify-between px-[110px]">
                    <div>
                        <Link href={route("prototype.homepage")}>
                            <img src="/images/GameOnU-v2.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="items-center ">
                        <ul className="flex gap-[30px] font-text text-[16px] font-medium">
                            {List.map((item, index) => (
                                <Menulist
                                    key={`${index}-${item.index}`}
                                    link={item.link}
                                    icon={item.icon}
                                    text={item.text}
                                    className="flex"
                                    isAactive={
                                        item.link && route().current(item.link)
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                    <div
                        className="bg-secondary text-white flex flex-row items-center justify-center w-[130px] h-[40px] gap-[16px]"
                        onClick={triggerDropdown}
                    >
                        <div>
                            <h1 className="font-sans text-[16px] font-bold leading-normal">
                                {user.uname}
                            </h1>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M5.36248 15.6749C6.14165 15.0791 7.01248 14.6091 7.97498 14.2651C8.93748 13.921 9.94581 13.7493 11 13.7499C12.0541 13.7499 13.0625 13.9219 14.025 14.266C14.9875 14.6101 15.8583 15.0797 16.6375 15.6749C17.1722 15.0485 17.5887 14.3381 17.8869 13.5437C18.1851 12.7492 18.3339 11.9013 18.3333 10.9999C18.3333 8.96797 17.6192 7.23761 16.1911 5.80884C14.7629 4.38006 13.0325 3.66597 11 3.66659C8.96804 3.66659 7.23767 4.38067 5.8089 5.80884C4.38012 7.237 3.66604 8.96736 3.66665 10.9999C3.66665 11.9013 3.81576 12.7492 4.11398 13.5437C4.4122 14.3381 4.82837 15.0485 5.36248 15.6749ZM11 11.9166C10.0986 11.9166 9.33837 11.6074 8.71931 10.9889C8.10026 10.3705 7.79104 9.61025 7.79165 8.70825C7.79165 7.80686 8.10087 7.04664 8.71931 6.42759C9.33776 5.80853 10.098 5.49931 11 5.49992C11.9014 5.49992 12.6616 5.80914 13.2806 6.42759C13.8997 7.04603 14.2089 7.80625 14.2083 8.70825C14.2083 9.60964 13.8991 10.3699 13.2806 10.9889C12.6622 11.608 11.902 11.9172 11 11.9166ZM11 20.1666C9.73192 20.1666 8.54026 19.9258 7.42498 19.4443C6.3097 18.9627 5.33956 18.3097 4.51456 17.4853C3.68956 16.6603 3.03659 15.6902 2.55565 14.5749C2.0747 13.4596 1.83392 12.268 1.83331 10.9999C1.83331 9.73186 2.07409 8.5402 2.55565 7.42492C3.0372 6.30964 3.69017 5.3395 4.51456 4.5145C5.33956 3.6895 6.3097 3.03653 7.42498 2.55559C8.54026 2.07464 9.73192 1.83386 11 1.83325C12.268 1.83325 13.4597 2.07403 14.575 2.55559C15.6903 3.03714 16.6604 3.69011 17.4854 4.5145C18.3104 5.3395 18.9637 6.30964 19.4452 7.42492C19.9268 8.5402 20.1673 9.73186 20.1666 10.9999C20.1666 12.268 19.9259 13.4596 19.4443 14.5749C18.9628 15.6902 18.3098 16.6603 17.4854 17.4853C16.6604 18.3103 15.6903 18.9636 14.575 19.4452C13.4597 19.9267 12.268 20.1672 11 20.1666Z"
                                    fill="#fff"
                                />
                            </svg>
                            <div
                                className="bg-white rounded-2xl flex flex-col gap-1 absolute z-[999] right-[100px] top-[80px] min-w-[180px] hidden overflow-hidden border-secondary border-[1.5px]"
                                ref={dropdownTarget}
                            >
                                <Link
                                    href={route("dashboard")}
                                    className="transition-all hover:bg-sky-100 p-4 font-sans text-[16px] leading-normal text-secondary"
                                >
                                    Dashboard
                                </Link>
                                <hr className="bg-secondary h-[1.5px] mx-4" />
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    className="transition-all hover:bg-sky-100 p-4 font-sans text-[16px] leading-normal text-secondary"
                                >
                                    Sign Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
