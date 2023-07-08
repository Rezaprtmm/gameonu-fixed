import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";
import Hero from "./Hero";
import Popular from "./Popular";
import Choose from "./Choose";
import Work from "./Work";
import Footer from "../Footer/Index";

export default function Homepage() {
    return (
        <div>
            <Authenticated />
            <Hero />
            <Popular />
            <Choose />
            <Work />
            <Footer />
        </div>
    );
}
