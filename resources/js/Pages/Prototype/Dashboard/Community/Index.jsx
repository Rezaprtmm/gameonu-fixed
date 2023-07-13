import Authenticated from "@/Layouts/Authenticated/Index";
import Footer from "../../Footer/Index";
import Topbar from "../Topbar";
import DetailCommunity from "./DetailCommunity";

export default function Community() {
    return (
        <div>
            <Authenticated />
            <Topbar />
            <DetailCommunity />
            <Footer />
        </div>
    );
}
