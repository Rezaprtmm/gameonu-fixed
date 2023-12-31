import Authenticated from "@/Layouts/Authenticated/Index";
import Footer from "../../Footer/Index";
import DetailIntermediate from "./DetailIntermediate";
import Topbar from "../Topbar";

export default function Intermediate({ auth }) {
    return (
        <div>
            <Authenticated user={auth.user} />
            <Topbar user={auth.user} />
            <DetailIntermediate />
            <Footer />
        </div>
    );
}
