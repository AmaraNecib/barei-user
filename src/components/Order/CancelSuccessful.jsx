import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
function ThanksPage() {
    return (
        <>
            <div className="container shadow-xl rounded-xl flex justify-between  my-32 ">
                <div className="flex flex-col mx-auto ">
                    <CheckCircleIcon className="text-[12rem] text-green-700" />
                    <h1 className="text-xl font-semibold my-2"> تم إلغاء طلبك بنجاح </h1>
                    <p className="text-lg font-thin my-2"> رقم الطلبية :<span> 234234234 </span></p>
                </div>
            </div>
        </>
    )
}
export default ThanksPage;