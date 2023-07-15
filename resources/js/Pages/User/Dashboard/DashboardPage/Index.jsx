import Authenticated from "@/Layouts/Authenticated/Index";
import Topbar from "../Topbar";
import DetailDashboard from "./DetailDashboard";
import Footer from "@/Pages/Prototype/Footer/Index";

export default function DashboardPage({ auth }) {
    return (
        <div>
            <Authenticated user={auth.user} />
            <Topbar user={auth.user} />
            <DetailDashboard user={auth.user} />
            <Footer />
        </div>
    );
}
