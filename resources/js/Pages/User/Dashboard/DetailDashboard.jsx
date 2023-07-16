import React, { useState, useEffect } from "react";
import CardCourse from "@/Components/CardCourse";
import Chart from "react-apexcharts";

export default function DetailDashboard({ user }) {
    let data;
    if (user.course) {
        data = user.course.split(",");
    }

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

    const [options, setOptions] = useState({
        chart: {
            type: "bar",
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        xaxis: {
            categories: [
                "Introduction to Game Development",
                "Basic Programming for Game Development",
                "Game Design and Level Design",
                "Creating Graphics and Animations for Games",
            ],
        },
        fill: {
            colors: ["#661ED6", "#E1D2F9"],
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ["#E1D2F9", "#661ED6"],
            },
        },
        legend: {
            show: true,
            markers: {
                fillColors: ["#661ED6", "#E1D2F9"],
            },
        },
    });
    const [series, setSeries] = useState([
        {
            name: "Progress",
            data: [1, 2, 3, 4, 5],
        },
        {
            name: "Available",
            data: [5, 5, 5, 5, 5],
        },
    ]);

    return (
        <div className="max-w-screen mt-[60px] border-secondary border-b-[3px]">
            <div className="container px-[100px] pb-[60px]">
                <div className="flex flex-col justify-center">
                    <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                        My Course
                    </h1>
                    <div className="grid grid-cols-4 mt-[24px]">
                        {courses.map((row) => (
                            <CardCourse
                                key={row.id}
                                name={row.title}
                                slug={row.title.replace(/\s/g, "-")}
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
                        Analytics
                    </h1>
                    <div className="w-full mt-[24px]" id="chart">
                        <Chart options={options} series={series} type="bar" />
                    </div>
                </div>
            </div>
        </div>
    );
}
