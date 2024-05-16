import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// import "./globals.css";
// import dynamic from "next/dynamic";
import ProudectLoading from "@/components/skeletons/ProudectLoading";
import {Suspense} from "react";

function ClientLayoutFirst({ children}) {
    return (
        <>
            <Suspense fallback={<ProudectLoading/>}>
                <Navbar/>
                {children}
                <Footer/>
                {/*<GoToTopButton/>*/}
            </Suspense>
        </>
    );
}
export default ClientLayoutFirst;
// export default  dynamic (() => Promise.resolve(ClientLayoutFirst), { ssr: false })