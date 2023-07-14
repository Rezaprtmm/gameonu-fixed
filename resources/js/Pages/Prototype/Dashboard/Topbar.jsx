import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

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
                    <Link
                        className="font-sans text-[16px] font-bold leading-normal text-secondary w-[160px] mt-[24px] border-secondary border-[2px] h-[40px] flex items-center justify-center"
                        href={route("prototype.dashboard")}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={route("prototype.community")}
                        className="font-sans text-[16px] font-bold leading-normal text-secondary w-[160px] mt-[24px] border-secondary border-[2px] h-[40px] flex items-center justify-center"
                    >
                        Community
                    </Link>
                    <Link
                        href={route("prototype.profile")}
                        className="font-sans text-[16px] font-bold leading-normal text-secondary w-[160px] mt-[24px] border-secondary border-[2px] h-[40px] flex items-center justify-center"
                    >
                        Profile
                    </Link>
                </div>
            </div>
        </div>
    );
}
