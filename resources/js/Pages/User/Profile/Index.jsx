import Authenticated from "@/Layouts/Authenticated/Index";
import Topbar from "../Topbar";
import DetailProfile from "./DetailProfile";
import Footer from "@/Pages/Prototype/Footer/Index";

export default function Profile({ auth }) {
    return (
        <div>
            <Authenticated user={auth.user} />
            <Topbar user={auth.user} />
            <DetailProfile user={auth.user} />
            <Footer />
        </div>
    );
}
