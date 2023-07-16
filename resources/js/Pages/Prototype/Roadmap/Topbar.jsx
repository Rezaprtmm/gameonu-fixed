import TopbarList from "@/Components/TopbarList";
import list from "./List";

export default function Topbar() {
    return (
        <div className="max-w-screen w-full mt-[60px]">
            <div className="container mx-auto flex flex-row w-full gap-[20px] px-[100px] items-center justify-center">
                {list.map((item, index) => (
                    <TopbarList
                        key={`${index}-${item.index}`}
                        link={item.link}
                        title={item.title}
                        isActive={item.link && route().current(item.link)}
                    />
                ))}
            </div>
        </div>
    );
}
