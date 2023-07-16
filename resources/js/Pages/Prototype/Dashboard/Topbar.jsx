import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import TopbarList from "./TopbarList";

export default function Topbar({ user }) {
    return (
        <div className="max-w-screen mt-[60px]">
            <div className="container w-full px-[100px] ">
                <div className="bg-[#E1D2F9]">
                    <div className="px-[60px] py-[48px]">
                        <h1 className="font-sans text-[36px] font-bold leading-normal">
                            Hallo, {user.uname}👋
                        </h1>
                        <p className="font-text text-[16px] font-normal leading-normal mt-[24px]">
                            Don't forget to learn today, don't waste your chance
                            to become a great Game Developer!
                        </p>
                        <div className="mt-[24px]">
                            <Link href={route("prototype.homepage")}>
                                <PrimaryButton
                                    type="button"
                                    className="flex gap-[10px] items-center"
                                >
                                    Back to Home{" "}
                                    <span>
                                        <img src="/svg/call_made.svg" alt="" />
                                    </span>
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row gap-[20px]">
                    <TopbarList
                        link={route("prototype.dashboard")}
                        title={"Dashboard"}
                    />
                    <TopbarList
                        link={route("prototype.community")}
                        title={"Community"}
                    />
                    <TopbarList
                        link={route("prototype.profile")}
                        title={"Profile"}
                    />
                </div>
            </div>
        </div>
    );
}
