import CardCourse from "@/Components/CardCourse";
import React, { useEffect, useState } from "react";

export default function DetailDashboard({ user }) {
    const data = user.course.split(",");

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const response = await fetch("http://localhost:8000/api/courses");
        const datas = await response.json();
        const sort = [];
        for (let i = 0; i < data.length; i++) {
            for (let a = 0; a < datas.length; a++) {
                if (data[i] === datas[a].cid) {
                    sort[i] = datas[a];
                    break;
                }
            }
        }
        setCourses(sort);
    };

    return (
        <div className="max-w-screen mt-[60px] border-secondary border-b-[3px]">
            <div className="container px-[100px] pb-[60px]">
                <div className="flex flex-col justify-center">
                    <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                        My Course
                    </h1>
                    <div className="grid grid-cols-4 mt-[24px]">
                        {courses.map((row, key) => (
                            <CardCourse
                                key={key}
                                name={row.title}
                                slug="csharp-course"
                                rating={row.rating}
                                price={row.price}
                                level={row.levels}
                                thumbnail={row.image}
                                className="mb-[30px] w-[295px] relative"
                            />
                        ))}
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
