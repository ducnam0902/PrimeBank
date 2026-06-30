import Greeting from "@/components/Greetings"
import TopBar from "@/components/TopBar"



const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
      <TopBar/>
      <Greeting/>
    </div>)
}

export default DashboardPage
