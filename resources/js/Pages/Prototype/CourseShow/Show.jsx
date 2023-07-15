import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";
import Footer from "../Footer/Index";
import ShowDetail from "./ShowDetail";

export default function Show({ auth }) {
    return (
        <div>
            <Authenticated user={auth.user} />
            <ShowDetail user={auth.user} />
            <Footer />
        </div>
    );
}
