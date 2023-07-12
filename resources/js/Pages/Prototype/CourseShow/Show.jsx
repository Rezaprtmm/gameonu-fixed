import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";
import Footer from "../Footer/Index";
import ShowDetail from "./ShowDetail";

export default function Show() {
    return (
        <div>
            <Authenticated />
            <ShowDetail />
            <Footer />
        </div>
    );
}
