"use client"
import Link from "next/link"
import Image from "next/image";
import basket from "../../../public/images/avatar/img1.png"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const OrderDelivery = ({displayCart,displayAddresses}) => {

    return (
        <>
            <div className="container">
                <div className="m-3">
                   <p>  التوصيل إبتدء من (250 دج)</p>
                    <p> خلال 72 ساعة تكون الطلبية في مكتب البريد</p>
                </div>
                <div className="border-2 rounded-t-2xl px-3 mb-3">
                    <div className="flex justify-between border-b-2 p-2 mx-4 ">
                        <h5 className=" font-extrabold my-2 text-xl">محطة الإستلام</h5>
                    </div>
                    {displayAddresses && displayAddresses.address && displayAddresses.address[0] && (
                            <p className="font-thin mr-3 text-md my-2">
                                {displayAddresses.address[0].city} | {displayAddresses.address[0].address}
                            </p>
                        ) ||
                        <p className="font-thin mr-3 text-md my-2">
                            لا يوجد محطة استلام محددة .
                            <br/>
                            الرجاء إدخال عنوان لإتمام عملية الشراء
                        </p>
                    }
                </div>

                <div className="border-2 rounded-b-2xl px-3">
                    <div className="border-b-2 p-2 mx-4 ">
                        <h5 className=" font-extrabold my-2 text-xl"> عناصر الطلبية </h5>
                    </div>
                    {displayCart && displayCart.items && displayCart.items.map((item) => (
                        <div className="border-b flex p-3 my-4" key={item.cartItemId}>
                            <Image
                                width={50}
                                height={50}
                                src={item.product.image ? item.product.image : basket}
                                alt="image"
                                className="mx-4"
                            />
                            <div className="">
                                <p className="product">المنتج : {item.product.name}</p>
                                <p className="quantity"> الكمية : {item.quantity} </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}
export default OrderDelivery;