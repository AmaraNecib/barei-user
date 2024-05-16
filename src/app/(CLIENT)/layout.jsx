import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import GoToTopButton from "@/components/GoToUp/GoToUp";
import dynamic from "next/dynamic";
import ProudectLoading from "@/components/skeletons/ProudectLoading";
import {Suspense} from "react";

 function ClientLayout({ children, showNavbar = true }) {
  return (
          <>
              <Suspense fallback={<ProudectLoading/>}>
                  {children}
                  <GoToTopButton/>
              </Suspense>
          </>
  );
}
export default  dynamic (() => Promise.resolve(ClientLayout), { ssr: false })