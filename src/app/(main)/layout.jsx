import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
