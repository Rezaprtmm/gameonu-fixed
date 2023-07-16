import React from "react";
import CardCourse from "@/Components/CardCourse";
import PrimaryButton from "@/Components/PrimaryButton";
import Flickity from "react-flickity-component";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Popular() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true, // Add the contain property
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/courses");
            if (response.ok) {
                const data = await response.json();
                setCourses(data);
            } else {
                throw new Error("Gagal mengambil data");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div className="max-w-screen flex bg-white w-full mt-[146px]">
                <div className="container mx-auto flex w-full">
                    <div className="pl-[110px] w-1/4">
                        <h1 className="font-sans text-[36px] font-bold text-secondary leading-normal">
                            Most <br />
                            Popular Courses
                        </h1>
                        <p className="font-text text-[16px] font-normal leading-normal mt-[16px]">
                            Start an incredible{" "}
                            <span className="text-primary">
                                Game Development
                            </span>{" "}
                            course with us. You can learn the most requested
                            courses.
                        </p>
                        <div className="mt-[36px]">
                            <Link href={route("prototype.courses")}>
                                <PrimaryButton type="button">
                                    Choose Course
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                    <div className="w-3/4 pl-[75px]">
                        <Flickity
                            className="gap-[30px]"
                            options={flickityOptions}
                        >
                            {courses.map((row) => (
                                <CardCourse
                                    key={row.id}
                                    name={row.title}
                                    slug={row.title.replace(/\s/g, "-")}
                                    rating={row.rating}
                                    price={row.price}
                                    level={row.levels}
                                    thumbnail={row.image}
                                    className="absolute w-[343px]"
                                />
                            ))}
                        </Flickity>
                    </div>
                </div>
            </div>
        </>
    );
}
