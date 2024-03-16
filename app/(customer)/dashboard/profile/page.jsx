import { isUserAuthenticated } from "@/lib/auth";

export const DashboardProfilePage = async () => {
    const session = await isUserAuthenticated();

    return (
      <div>page</div>
    )
  }

export default DashboardProfilePage;