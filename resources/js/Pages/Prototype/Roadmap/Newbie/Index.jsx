import Authenticated from "@/Layouts/Authenticated/Index";
import Topbar from "../Topbar";
import Footer from "../../Footer/Index";
import DetailNewbie from "./DetailNewbie";

export default function Newbie({ auth }) {
    return (
        <div>
            <Authenticated user={auth.user} />
            <Topbar user={auth.user} />
            <DetailNewbie />
            <Footer />
        </div>
    );
}
