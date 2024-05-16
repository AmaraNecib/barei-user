import "bootstrap/dist/css/bootstrap.css";
import SupNavbar from "@/components/Navbar/supNavbar";

export default function ProductLayout({ children }) {
  return (
      <>
          <SupNavbar/>
          {children}
      </>
  );
}
