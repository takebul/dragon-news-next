import Navbar from "@/components/shared/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
