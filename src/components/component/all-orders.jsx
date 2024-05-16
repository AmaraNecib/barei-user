/**

 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rvj1Ff3sKWq
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import InfoIcon from '@mui/icons-material/Info';
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { FilterIcon } from "@radix-ui/react-icons";
import { format } from 'date-fns';

export default  function allOrders({displayOrders}) {

  return (
    (<Card className="w-full h-full">
      <CardHeader className=" flex items-center gap-2 border-b border-fuchsia-800 mx-3 ">
        <Package2Icon className="h-10 w-10 text-fuchsia-800" />
        <CardTitle className={"pb-3 text-fuchsia-800"}>جميع الطلبيات</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto  mt-5  h-[600px]">

          <Table>
            <TableHeader className="bg-fuchsia-50 hover:bg-fuchsia-50">
              <TableRow >
                <TableHead className="w-[100px] mx-auto">الطلبية</TableHead>
                <TableHead className="text-center mx-auto">سعر الطلبية</TableHead>
                <TableHead className="hidden md:table-cell text-center">التاريخ</TableHead>
                <TableHead className="hidden sm:table-cell text-center">الحالة</TableHead>
                <TableHead className="hidden sm:table-cell text-center">تفاصيل</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
                {displayOrders && displayOrders.orders && displayOrders.orders.map((order) => (
                    <TableRow key={order.orderId}>
                    <TableCell className="font-medium text-center"># {order.orderId} </TableCell>
                    <TableCell className=" text-center"> دج {order.orderTotal} </TableCell>
                    <TableCell className="hidden md:table-cell text-center"> {format(new Date(order.createdAt), 'yyyy-MM-dd')}</TableCell>
                    <TableCell className="hidden sm:table-cell text-center">{order.status}</TableCell>
                    <TableCell className="hidden sm:table-cell text-center">
                      <Link href={`/orders/${order.orderId}`}> <InfoIcon className={"text-fuchsia-600"}/></Link>
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}