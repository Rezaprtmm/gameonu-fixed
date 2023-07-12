import Authenticated from "@/Layouts/Authenticated/Index";
import Topbar from "../Topbar";
import Footer from "../../Footer/Index";
import DetailNewbie from "./DetailNewbie";

export default function Newbie() {
    return (
        <div>
            <Authenticated />
            <Topbar />
            <DetailNewbie />
            <Footer />
        </div>
    );
}
