import Authenticated from "@/Layouts/Authenticated/Index";
import Footer from "../../Footer/Index";
import DetailIntermediate from "./DetailIntermediate";
import Topbar from "../Topbar";

export default function Intermediate() {
    return (
        <div>
            <Authenticated />
            <Topbar />
            <DetailIntermediate />
            <Footer />
        </div>
    );
}
