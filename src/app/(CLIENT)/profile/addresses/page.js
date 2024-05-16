'use server'
import Contact from "@/components/profile/Contact"
import {deleteAddress, getAddress,putAddress} from "@/util/serverActions";

export default async function AddressesPage() {
    const displayAddress = await getAddress();
    return (
        <div className="mr-80 mt-24">
            <Contact deleteAddress={deleteAddress} displayAddress={displayAddress} putAddress={putAddress}/>
        </div>
    )
}