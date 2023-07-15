import CardCourse from "@/Components/CardCourse";

export default function DetailDashboard() {
    return (
        <div className="max-w-screen mt-[60px] border-secondary border-b-[3px]">
            <div className="container px-[100px] pb-[60px]">
                <div className="flex flex-col justify-center">
                    <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                        My Course
                    </h1>
                    <div className="grid grid-cols-4 mt-[24px]">
                        <CardCourse
                            name="Introduction to Game..."
                            slug="csharp-course"
                            rating={4.6}
                            price={499}
                            level="Newbie"
                            thumbnail="/images/bg-1.png"
                            className="mb-[30px] w-[343px] relative "
                        />
                    </div>
                </div>
                <div className="flex flex-col mt-[24px] w-full">
                    <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                        My Course
                    </h1>
                    <div className="w-full mt-[24px]">
                        <img
                            src="/images/analytics.png"
                            alt="analytics"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}