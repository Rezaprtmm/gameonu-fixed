import { Link } from "@inertiajs/react";

export default function Authenticated() {
    return (
        <nav className="stick max-w-screen border-b-2 border-black bg-white">
            <div className="container mx-auto flex h-[100px] items-center justify-between px-[110px]  ">
                <div>
                    <img src="/images/GameOnU.png" alt="logo" />
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
                    <Link
                        href="#"
                        className="flex gap-[10px] bg-primary px-[30px] py-[10px] font-bold text-white"
                    >
                        Login
                        <span>
                            <img src="/svg/call_made.svg" alt="" />
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
