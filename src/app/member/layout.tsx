import Navbar from "@/src/components/member/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div className="navbar-container">
      <Navbar />
      </div>
      <main className="dashboard-container">
        {children}
      </main>
    </>
  );
}
