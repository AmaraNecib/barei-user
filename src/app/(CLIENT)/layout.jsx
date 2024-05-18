import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import GoToTopButton from "@/components/GoToUp/GoToUp";
import dynamic from "next/dynamic";


 function ClientLayout({ children }) {
  return (
    <>
        {children}
        <GoToTopButton/>
    </>
  );
}
export default dynamic(() => Promise.resolve(ClientLayout), { ssr: false })


// import { ProudectLoading as LoadingSkeleton } from '@/components/skeletons/ProudectLoading'
// export default function Loading() {
//     // You can add any UI inside ProudectLoading, including a Skeleton.
//     return <ProudectLoading />
// }