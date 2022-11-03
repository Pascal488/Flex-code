import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen">
      <section className="w-[20%] bg-red-200">
        <p>Here will go an aside component</p>
      </section>

      <section>
        <Outlet />
      </section>
    </main>
  );
}
