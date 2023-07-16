import CardTopRight from "../CardTopRight";
import CardLeft from "../CardLeft";
import CardRight from "../CardRight";

export default function DetailIntermediate() {
    return (
        <div className="max-w-screen w-full mt-[60px]">
            <div className="container mx-auto flex flex-col items-center justify-between px-[205px] border-secondary border-y-[3px]">
                <h1 className="font-sans text-[40px] font-bold leading-normal text-secondary pt-[60px]">
                    Intermediate Level Roadmap
                </h1>
                <CardTopRight
                    number={1}
                    step={"Game Development with Unity"}
                    description={
                        "Learn how to use Unity as a popular game engine, including its user interface, working with GameObjects, scripting with C#, and creating interactive gameplay."
                    }
                    link={route(
                        "prototype.courseShow.show",
                        "Game-Development-with-Unity"
                    )}
                />
                <CardLeft
                    number={2}
                    step={"Artificial Intelligence (AI) in Game Development"}
                    description={
                        "Learn the basics of artificial intelligence in game development, including search algorithms, decision-making, and implementing AI for enemies and non-playable characters."
                    }
                    link={route(
                        "prototype.courseShow.show",
                        "Artificial-Intelligence-(AI)-in-Game-Development"
                    )}
                    className="-mb-[70px]"
                />
                <CardRight
                    number={3}
                    step={"Mobile Game Development"}
                    description={
                        "Learn the differences and considerations for mobile platforms, developing responsive touch controls, gyroscopic mechanics, and optimizing performance for mobile devices."
                    }
                    link={route(
                        "prototype.courseShow.show",
                        "Mobile-Game-Development"
                    )}
                    className2="mt-[20px]"
                />
                <CardLeft
                    number={4}
                    step={"Creating 2D Games with Sprites and Tilesets"}
                    description={
                        "Learn the fundamentals of 2D games using sprites and tilesets, creating maps, setting up the camera, and implementing collision detection and object interactions."
                    }
                    link={route(
                        "prototype.courseShow.show",
                        "Creating-2D-Games-with-Sprites-and-Tilesets"
                    )}
                    className="-mb-[70px]"
                />
                <CardRight
                    number={5}
                    step={"Create 3D Games with Models and Animations"}
                    description={
                        "Learn how to create 3D games using models and animations. In this course, you will learn the basic concepts of 3D games, create 3D character models, animate characters, create 3D environments with modeling and lighting, and perform performance optimizations for smooth 3D games."
                    }
                    link={route(
                        "prototype.courseShow.show",
                        "Create-3D-Games-with-Models-and-Animations"
                    )}
                    className2="-mb-[140px]"
                    className="mb-[300px]"
                />
            </div>
        </div>
    );
}
