import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Checkout({ auth }) {
    let title = window.location.pathname.split("/");
    let user = auth.user;
    let id = user.id;
    title = title[3].replace(/-/g, " ");
    let date = new Date();
    let cut, tax, sum, courseAdd;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const cod = `${day}-${month}-${year}`;

    const hrs = String(date.getHours()).padStart(2, "0");
    const mnt = String(date.getMinutes()).padStart(2, "0");
    const scd = String(date.getSeconds()).padStart(2, "0");
    const cot = `${hrs}:${mnt}:${scd}`;
    const [courses, setCourses] = useState([]);
    const url = "http://localhost:8000/api/users/{id}";

    const fetchCourses = async () => {
        const response = await fetch("http://localhost:8000/api/courses");
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
            if (title === data[i].title) {
                setCourses(data[i]);
            }
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    if (courses.length != 0) {
        cut = courses.price;
        cut = cut.toString();
        cut = cut.slice(0, -3);
        cut = parseInt(cut);
        tax = cut * 0.11;
        sum = cut + tax;
        courseAdd = user.course + "," + courses.cid;
    }

    const handlePayNow = async (e) => {
        e.preventDefault();
        const data = {
            course: courseAdd,
        };

        fetch(url.replace("{id}", id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    // Redirect ke halaman sukses
                    window.location.href = "/prototype/success";
                } else {
                    // Menangani respons lainnya jika diperlukan
                    // ...
                }
            })
            .catch((error) => {
                console.error("Terjadi kesalahan:", error);
            });
        // try {
        //     const response = await fetch("http://localhost:8000/api/users", {
        //         method: "PUT",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             course: courseAdd,
        //         }),
        //     });

        //     if (response.ok) {
        //         console.log("Course data sent successfully");
        //     } else {
        //         throw new Error("Failed to send course data");
        //     }
        // } catch (error) {
        //     console.error(error);
        // }
    };

    return (
        <div className="max-w-screen bg-checkout h-screen flex">
            <div className="container flex flex-row items-center justify-center">
                <div className="w-[820px] bg-white">
                    <div className="px-[110px] py-[92px]">
                        <h1 className="font-sans text-[32px] font-bold leading-normal">
                            Checkout Details
                        </h1>
                        <div className="flex flex-row mt-[24px]">
                            <div className="mr-[176px]">
                                <div>
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Course Name
                                    </h1>
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        {title}
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Course Level
                                    </h1>
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        {courses.levels}
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Checkout Date
                                    </h1>
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        {cod}
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Checkout Time
                                    </h1>
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        {cot}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Course Price
                                    </h1>
                                    <p className="font-text text-[16px] font-bold leading-normal text-[#269B40]">
                                        IDR {cut}K
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Tax / PPN 11%
                                    </h1>
                                    <p className="font-text text-[16px] font-bold leading-normal text-[#269B40]">
                                        IDR {tax}K
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Total
                                    </h1>
                                    <p className="font-text text-[16px] font-bold leading-normal text-[#269B40]">
                                        IDR {sum}K
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[24px]">
                            <Link onClick={handlePayNow}>
                                <PrimaryButton className="w-full">
                                    Pay Now
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
