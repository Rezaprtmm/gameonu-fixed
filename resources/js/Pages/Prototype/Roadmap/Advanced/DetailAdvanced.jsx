import CardTopRight from "../CardTopRight";
import CardLeft from "../CardLeft";
import CardRight from "../CardRight";

export default function DetailAdvanced() {
    return (
        <div className="max-w-screen w-full mt-[60px]">
            <div className="container mx-auto flex flex-col items-center justify-between px-[205px] border-secondary border-y-[3px]">
                <h1 className="font-sans text-[40px] font-bold leading-normal text-secondary pt-[60px]">
                    Advanced Level Roadmap
                </h1>
                <CardTopRight
                    number={1}
                    step={"Multiplayer Game Development"}
                    description={
                        "Learn about multiplayer game development by studying network architecture, communication, synchronization, security, and performance optimization."
                    }
                    link={route(
                        "prototype.courseShow.show",
                        "Multiplayer-Game-Development"
                    )}
                />
                <CardLeft
                    number={2}
                    step={"Virtual Reality (VR) Game Development"}
                    description={
                        "Explore the development of games using virtual reality (VR) technology, including creating interactive VR experiences, utilizing motion controllers, and integrating with VR systems."
                    }
                    link={route(
                        "prototype.courseShow.show",
                        "Virtual-Reality-(VR)-Game-Development"
                    )}
                    className=""
                />
                <CardRight
                    number={3}
                    step={"Augmented Reality (AR) Game Development"}
                    description={
                        "Dive into the development of games using augmented reality (AR) technology, including using image recognition and object detection, marker-based tracking, and virtual object interactions with the real world."
                    }
                    className2="-mb-[92px]"
                    link={route(
                        "prototype.courseShow.show",
                        "Augmented-Reality-(AR)-Game-Development"
                    )}
                />
                <CardLeft
                    number={4}
                    step={"Game Development with Custom Game Engines"}
                    description={
                        "Learn game development with custom game engines, including preparing and designing the engine architecture, implementing core features, graphics setup and input handling, as well as optimization and debugging."
                    }
                    link={route(
                        "prototype.courseShow.show",
                        "Game-Development-with-Custom-Game-Engines"
                    )}
                    className2="mb-[300px]"
                    className="-mb-[92px]"
                />
            </div>
        </div>
    );
}
