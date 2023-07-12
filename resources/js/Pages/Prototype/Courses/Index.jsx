import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";
import Footer from "../Footer/Index";
import CoursePage from "./CoursePage";

export default function Courses() {
    return (
        <div>
            <Authenticated />
            <CoursePage />
            <Footer />
        </div>
    );
}
