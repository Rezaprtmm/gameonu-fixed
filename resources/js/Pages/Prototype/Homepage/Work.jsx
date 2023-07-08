import PrimaryButton from "@/Components/PrimaryButton";
import StepWork from "@/Components/StepWork";
import { Link } from "@inertiajs/react";

export default function Work() {
    return (
        <div className="max-w-screen flex bg-white w-full border-secondary border-b-[3px]">
            <div className="container mx-auto flex w-full px-[110px]">
                <div className="w-[40%] flex flex-col justify-center  border-secondary border-r-[3px] pt-[178px] pr-[100px] pb-[178px]">
                    <h1 className="font-sans text-[16px] font-bold leading-normal text-primary flex items-center gap-[16px]">
                        How it work
                        <hr className="w-[40px] h-[2px] bg-primary " />
                        <span></span>
                    </h1>
                    <h1 className="font-sans text-[36px] font-bold leading-normal text-secondary mt-[16px]">
                        An Easy Way to Start Learning and Get New Skills Here
                    </h1>
                    <p className="font-text text-[16px] font-normal leading-normal mt-[16px]">
                        Start your easy learning journey and quickly acquire new
                        skills here. Choose a suitable Game Development course,
                        sign up, study the material with structured steps, and
                        earn an industry recognition certificate upon completion
                        of the course.
                    </p>
                    <div className="mt-[36px]">
                        <Link href="#">
                            <PrimaryButton type="button">
                                Start Learning
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="w-[60%] flex flex-col items-center justify-center gap-[32px] pt-[105px] pl-[60px] pb-[105px]">
                    <StepWork
                        number={1}
                        title="Register and Create Your Account"
                        description="Register yourself and create an account to get
                                full access to the course content personalized
                                to you. There will be a discount on every first
                                purchase."
                    />
                    <StepWork
                        number={2}
                        title="Explore the course catalog"
                        description="Browse and choose from a wide range of Game
                        Development courses offered on our platform.
                        GameOnU groups courses by level, Newbie,
                        Intermediate, and Advanced."
                    />
                    <StepWork
                        number={3}
                        title="Check the course descriptions and pricing"
                        description="Dive into detailed course descriptions,
                        curriculum outlines, and pricing information to
                        make informed decisions about the courses you
                        want to enroll in."
                    />
                    <StepWork
                        number={4}
                        title="Enroll in the course"
                        description="Enroll your account to embark on an exciting
                        learning experience, gaining valuable skills in
                        the field of Game Development."
                    />
                </div>
            </div>
        </div>
    );
}
