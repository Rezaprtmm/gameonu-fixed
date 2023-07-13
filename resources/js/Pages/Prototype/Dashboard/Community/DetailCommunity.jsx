import { Link } from "@inertiajs/react";
import CardComunity from "./CardComunity";

export default function DetailCommunity() {
    return (
        <div className="max-w-screen mt-[70px]">
            <div className="container px-[100px]">
                <div className="flex flex-col justify-center">
                    <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                        My Community
                    </h1>
                    <div className="mt-[24px] grid grid-cols-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <CardComunity
                                title={
                                    'Community Class "Introduction to GameDevelopment"'
                                }
                                linktele={"/"}
                                linkwa={"/"}
                                className="mb-[30px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
