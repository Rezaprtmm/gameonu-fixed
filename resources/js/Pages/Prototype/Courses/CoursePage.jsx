import CardCourse from "@/Components/CardCourse";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";

export default function CoursePage() {
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
                            {courses.map((row) => (
                                <CardCourse
                                    key={row.id}
                                    name={row.title}
                                    slug={row.title.replace(/\s/g, "-")}
                                    rating={row.rating}
                                    price={row.price}
                                    level={row.levels}
                                    thumbnail={row.image}
                                    className="mb-[30px] w-[343px] relative"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
