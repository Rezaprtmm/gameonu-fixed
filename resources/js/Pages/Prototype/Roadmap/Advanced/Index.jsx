import Authenticated from "@/Layouts/Authenticated/Index";
import Topbar from "../Topbar";
import Footer from "../../Footer/Index";
import DetailAdvanced from "./DetailAdvanced";

export default function Advanced({ auth }) {
    return (
        <div>
            <Authenticated user={auth.user} />
            <Topbar user={auth.user} />
            <DetailAdvanced />
            <Footer />
        </div>
    );
}
