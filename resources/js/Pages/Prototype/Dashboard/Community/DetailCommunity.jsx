import CardComunity from "./CardComunity";
import React, { useEffect, useState } from "react";

export default function DetailCommunity({ user }) {
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
        <div className="max-w-screen mt-[70px] border-secondary border-b-[3px]">
            <div className="container px-[100px]">
                <div className="flex flex-col justify-center">
                    <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                        My Community
                    </h1>
                    <div className="mt-[24px] grid grid-cols-4">
                        {courses.map((row) => (
                            <CardComunity
                                title={"Community Class, " + row.title}
                                linktele={"/"}
                                linkwa={"/"}
                                className="mb-[30px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
