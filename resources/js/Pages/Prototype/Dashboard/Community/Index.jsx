import Authenticated from "@/Layouts/Authenticated/Index";
import Footer from "../../Footer/Index";
import Topbar from "../Topbar";
import DetailCommunity from "./DetailCommunity";

export default function Community({ auth }) {
    return (
        <div>
            <Authenticated user={auth.user} />
            <Topbar user={auth.user} />
            <DetailCommunity />
            <Footer />
        </div>
    );
}
