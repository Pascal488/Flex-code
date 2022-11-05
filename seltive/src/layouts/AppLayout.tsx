import { Outlet } from "react-router-dom";
import Sidebar from "../pages/homepages/Sidebar";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen gap-5">
      <section className="w-[200px] bg-white ">
        <Sidebar />
      </section>
      {/* className="flex justify-items-center align-middle m-auto bg-gray-50 max-w-[50%]" */}
      <section >
        <Outlet/>
      </section>
    </main>
  );
}
