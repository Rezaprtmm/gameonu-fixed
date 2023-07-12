import InputLabel from "@/Components/InputLabel";
import Checkbox from "@/Components/Checkbox";
export default function Sidebar() {
    return (
        <aside className="z-40 w-[300px] h-auto sticky top-0 pb-[60px] ">
            <div className="h-full px-[69px] overflow-hidden">
                <div className="flex flex-col mt-[60px] gap-[24px]">
                    <h1 className="font-sans text-secondary text-[20px] font-bold leading-normal">
                        Sort
                    </h1>
                    <div>
                        <div className="flex flex-row items-center gap-[8px] mb-[16px]">
                            <Checkbox name="new_release" />
                            <InputLabel
                                forInput="new_release"
                                value="New Release"
                            />
                        </div>
                        <div className="flex flex-row items-center gap-[8px] mb-[16px]">
                            <Checkbox name="most_popular" />
                            <InputLabel
                                forInput="most_popular"
                                value="Most Popular"
                            />
                        </div>
                        <div className="flex flex-row items-center gap-[8px]">
                            <Checkbox name="on_promo" />
                            <InputLabel forInput="on_promo" value="On Promo" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-[60px] h-full gap-[24px]">
                    <h1 className="font-sans text-secondary text-[20px] font-bold leading-normal">
                        Level
                    </h1>
                    <div>
                        <div className="flex flex-row items-center gap-[8px] mb-[16px]">
                            <Checkbox name="newbie" />
                            <InputLabel forInput="newbie" value="Newbie" />
                        </div>
                        <div className="flex flex-row items-center gap-[8px] mb-[16px]">
                            <Checkbox name="intermediate" />
                            <InputLabel
                                forInput="intermediate"
                                value="Intermediate"
                            />
                        </div>
                        <div className="flex flex-row items-center gap-[8px]">
                            <Checkbox name="advanced" />
                            <InputLabel forInput="advanced" value="Advanced" />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
