import { Outlet } from "react-router-dom";
import Sidebar from "../pages/homepages/Sidebar";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen">
      <section className="w-[20%] bg-red-200">
        <Sidebar/>
      </section>

      <section>
        <Outlet />
      </section>
    </main>
  );
}
