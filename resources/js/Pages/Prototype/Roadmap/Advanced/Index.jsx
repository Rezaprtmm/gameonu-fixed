import Authenticated from "@/Layouts/Authenticated/Index";
import Topbar from "../Topbar";
import Footer from "../../Footer/Index";
import DetailAdvanced from "./DetailAdvanced";

export default function Advanced() {
    return (
        <div>
            <Authenticated />
            <Topbar />
            <DetailAdvanced />
            <Footer />
        </div>
    );
}
