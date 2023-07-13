import Authenticated from "@/Layouts/Authenticated/Index";
import Footer from "../../Footer/Index";
import Topbar from "../Topbar";
import DetailDashboard from "./DetailDashboard";

export default function DashboardPage() {
    return (
        <div>
            <Authenticated />
            <Topbar />
            <DetailDashboard />
            <Footer />
        </div>
    );
}
