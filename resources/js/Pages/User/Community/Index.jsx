import Authenticated from "@/Layouts/Authenticated/Index";
import DetailCommunity from "./DetailCommunity";
import Footer from "@/Pages/Prototype/Footer/Index";
import Topbar from "../Topbar";

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
