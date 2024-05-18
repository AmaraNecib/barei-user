'use server'

import MyAccount from "@/components/profile/myAccount";
import { follow } from "@/util/serverActions";
import { unFollow } from "@/util/serverActions";
import { storeProfile } from "@/util/serverActions"

export default async function StoreProfile() {
  const storeprofile = await storeProfile();

  return (
    <div className="mt-28">
      <MyAccount follow={follow} unFollow={unFollow} storeprofile={storeprofile} />
    </div> 
  );
}
