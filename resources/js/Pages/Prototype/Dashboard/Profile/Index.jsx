import Authenticated from "@/Layouts/Authenticated/Index";
import Footer from "../../Footer/Index";
import Topbar from "../Topbar";
import DetailProfile from "./DetailProfile";

export default function Profile() {
    return (
        <div>
            <Authenticated />
            <Topbar />
            <DetailProfile />
            <Footer />
        </div>
    );
}
