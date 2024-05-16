'use server'
import Profileinfo from '@/components/profile/Profileinfo'
import { getProfileInfo , putProfileInfo } from "@/util/serverActions";

export default async function ProfileInfo() {
    const profileInfo = await getProfileInfo();
    return (
        <>
            <div className="mr-80 mt-24">
                <Profileinfo putProfileInfo={putProfileInfo} profileInfo={profileInfo} />
            </div>
        </>
    )
}