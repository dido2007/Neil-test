import { isUserAuthenticated } from "@/lib/auth";


export const DashboardSales = async () => {
    const session = await isUserAuthenticated();
  return (
    <div>
      <h1>Dashboard Sales</h1>
      <div className="flex items-center w-full">
        <button  className="btn btn-primary">
            Primary
        </button>
      </div>
    </div>
  );
};

export default DashboardSales;
