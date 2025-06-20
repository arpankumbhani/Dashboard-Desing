import Footer from "@/modules/Footer/Footer";
import ActiveUsers from "@/modules/MainContent/ActiveUsers";
import DashboardCards from "@/modules/MainContent/DashboardCards";
import OrdersOverview from "@/modules/MainContent/OrdersOverview";
import ProjectsTable from "@/modules/MainContent/ProjectsTable";
import ReferralCard from "@/modules/MainContent/ReferralCard";
import SalesChart from "@/modules/MainContent/SalesChart";
import SatisfactionChart from "@/modules/MainContent/SatisfactionChart";
import WelcomeCard from "@/modules/MainContent/WelcomeCard";


export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardCards />
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
        <WelcomeCard />
        <SatisfactionChart />
        <ReferralCard />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <SalesChart />
        <ActiveUsers />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ProjectsTable />
        <OrdersOverview />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  )
}