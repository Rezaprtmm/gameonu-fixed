import CardCourse from "@/Components/CardCourse";
import Sidebar from "./Sidebar";

export default function CoursePage() {
    return (
        <div className="max-w-screen w-full mt-[60px]">
            <div className="container mx-auto flex flex-col w-full">
                <div className="w-full flex flex-col items-center justify-center px-[415px] text-center">
                    <h1 className="font-sans text-secondary text-[48px] font-bold leading-normal">
                        Game Dev Courses
                    </h1>
                    <p className="font-text text-[16px] font-normal leading-normal">
                        Explore our comprehensive selection of courses designed
                        to help you master the art of game development. From
                        programming to design, animation, and project
                        management, we've got you covered.
                    </p>
                </div>
                <div className="mt-[61px] border-secondary border-y-[3px]">
                    <Sidebar />

                    <div className="px-[60px] ml-64 -mt-[475px] pt-[40px] border-secondary border-l-[3px]">
                        <div className="grid grid-cols-3">
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div
                                    className=" h-24 rounded mb-[280px]"
                                    key={i}
                                >
                                    <CardCourse
                                        key={i}
                                        name="C#"
                                        slug="csharp-course"
                                        rating={4.6}
                                        lessons={8}
                                        hours={3}
                                        level="Newbie"
                                        thumbnail="/images/placeholder.webp"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
