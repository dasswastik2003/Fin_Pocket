import DasboardFooter from "@/components/dashboardLayout/DasboardFooter";
import DashboardHeader from "@/components/dashboardLayout/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardHeader />
      {children}
      <DasboardFooter />
    </>
  );
}
