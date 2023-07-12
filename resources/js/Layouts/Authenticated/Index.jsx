import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import Menulist from "./Menulist";
import { List } from "./List";

export default function Authenticated() {
    return (
        <nav className="stick max-w-screen border-b-2 border-secondary bg-white">
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

                <div>
                    <Link href="#">
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
            </div>
        </nav>
    );
}
