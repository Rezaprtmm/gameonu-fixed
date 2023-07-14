import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";
import Footer from "../Footer/Index";
import CoursePage from "./CoursePage";

export default function Courses({ auth }) {
    return (
        <div>
            <Authenticated user={auth.user} />
            <CoursePage />
            <Footer />
        </div>
    );
}
