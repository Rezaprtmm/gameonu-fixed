import CardTopRight from "../CardTopRight";
import CardLeft from "../CardLeft";
import CardRight from "../CardRight";

export default function DetailNewbie() {
    return (
        <div className="max-w-screen w-full mt-[60px]">
            <div className="container mx-auto flex flex-col items-center justify-between px-[205px] border-secondary border-y-[3px]">
                <h1 className="font-sans text-[40px] font-bold leading-normal text-secondary pt-[60px]">
                    Newbie Level Roadmap
                </h1>
                <CardTopRight
                    number={1}
                    step={"Introduction to Game Development"}
                    description={
                        "Learn the basics of game development, including its history, essential elements, and fundamental concepts that will help you understand the industry as a whole."
                    }
                    link={"/"}
                />
                <CardLeft
                    number={2}
                    step={"Basic Programming for Game Development"}
                    description={
                        "Learn the fundamentals of programming, including variables, data types, control structures, and the use of libraries and APIs to build simple yet interactive games."
                    }
                    link={"/"}
                    className="-mb-[70px]"
                />
                <CardRight
                    number={3}
                    step={"Game Design and Level Design"}
                    description={
                        "Learn the basic principles of game design, player understanding, and how to create your first level using available level design tools."
                    }
                    link={"/"}
                />
                <CardLeft
                    number={4}
                    step={"Creating Graphics and Animations for Games"}
                    description={
                        "Learn the basics of 2D graphics, using graphic tools, creating characters and objects in games, and animating to breathe life into your games."
                    }
                    link={"/"}
                    className2="mb-[300px]"
                />
            </div>
        </div>
    );
}
