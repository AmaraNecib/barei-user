'use server'

import OrderPage from "@/components/Order/OrderPage";
import EmptyOrder from "@/components/EmptyPage/EmptyOrder"
import AllOrders from "@/components/component/all-orders";
import {getOrders} from "@/util/serverActions"
import { Suspense } from "react";
import OrderSkeleton from "@/components/skeleton/orderSkeleton";

const Order = async () => {
    const displayOrders = await getOrders();
    console.log("displayOrders",displayOrders?.orders.length)
    return (
        <>
            <div className="container px-0 rounded-lg shadow-lg my-32">
                {displayOrders?.orders?.length <= 0 ?
                    <EmptyOrder/>
                    :
                    <Suspense  fallback={<OrderSkeleton/>}>
                        <AllOrders displayOrders={displayOrders} />
                    </Suspense>
                }
            </div>
        </>  
    );
}
export default Order;