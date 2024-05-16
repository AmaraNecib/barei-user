'use server'
import EditInfoForm from "@/components/profile/EditInfoForm"
import { getProfileInfo , putProfileInfo } from "@/util/serverActions";
const EditInfo = async () => {
    const profileInfo = await getProfileInfo();
    return (
        <>
            <EditInfoForm/>
        </>
    );
}

export default EditInfo;