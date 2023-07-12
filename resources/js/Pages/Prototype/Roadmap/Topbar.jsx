import TopbarList from "@/Components/TopbarList";
import { prototype } from "flickity";

export default function Topbar() {
    return (
        <div className="max-w-screen w-full mt-[60px]">
            <div className="container mx-auto flex flex-row w-full gap-[20px] px-[100px] items-center justify-center">
                <TopbarList
                    title={"Newbie Level"}
                    link={route("prototype.roadmap.newbie")}
                />
                <TopbarList
                    title={"Intermediate Level"}
                    link={route("prototype.roadmap.intermediate")}
                />
                <TopbarList
                    title={"Advanced Level"}
                    link={route("prototype.roadmap.advanced")}
                />
            </div>
        </div>
    );
}
