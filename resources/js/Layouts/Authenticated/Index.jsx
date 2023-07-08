import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import Menulist from "./Menulist";

export default function Authenticated() {
    return (
        <nav className="stick max-w-screen border-b-2 border-secondary bg-white">
            <div className="container mx-auto flex h-[100px] items-center justify-between px-[110px]  ">
                <div>
                    <img src="/images/GameOnU-v2.png" alt="logo" />
                </div>
                <div className="items-center ">
                    <ul className="flex gap-[30px] font-text text-[16px] font-medium">
                        <li>
                            <a href="#">Courses</a>
                        </li>
                        <li>
                            <a href="#">Roadmap</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#" className="flex gap-[10px]">
                                <span>
                                    <img src="/svg/ri_search-line.svg" alt="" />
                                </span>
                                Search
                            </a>
                        </li>
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
