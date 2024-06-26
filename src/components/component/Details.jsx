/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J0WqTPNZtiu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Component() {
    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link className="flex items-center gap-2 font-semibold" href="#">
                            <Package2Icon className="h-6 w-6" />
                            <span className="">Acme Inc</span>
                        </Link>
                        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                            <BellIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <HomeIcon className="h-4 w-4" />
                                Home
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                href="#"
                            >
                                <ShoppingCartIcon className="h-4 w-4" />
                                Orders
                                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <PackageIcon className="h-4 w-4" />
                                Products
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <UsersIcon className="h-4 w-4" />
                                Customers
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <LineChartIcon className="h-4 w-4" />
                                Analytics
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <Link className="lg:hidden" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <Input
                                    className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                                    placeholder="Search"
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                                size="icon"
                                variant="ghost"
                            >
                                <img
                                    alt="Avatar"
                                    className="rounded-full"
                                    height="32"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "32/32",
                                        objectFit: "cover",
                                    }}
                                    width="32"
                                />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center gap-4">
                        <Button size="icon" variant="outline">
                            <ArrowLeftIcon className="h-4 w-4" />
                            <span className="sr-only">Back</span>
                        </Button>
                        <h1 className="font-semibold text-lg md:text-xl">
                            #3102 -<span className="font-normal text-gray-500 dark:text-gray-400">Sophia Anderson</span>
                            <span className="font-normal text-gray-500 dark:text-gray-400"> on June 23, 2022</span>
                        </h1>
                        <div className="ml-auto flex items-center gap-2">
                            <Button size="icon" variant="outline">
                                <ChevronLeftIcon className="h-4 w-4" />
                                <span className="sr-only">Previous</span>
                            </Button>
                            <Button size="icon" variant="outline">
                                <ChevronRightIcon className="h-4 w-4" />
                                <span className="sr-only">Next</span>
                            </Button>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="grid gap-1">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Order #</div>
                                    <div className="font-medium">#3102</div>
                                </div>
                                <div className="grid gap-1">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Order Date</div>
                                    <div className="font-medium">June 23, 2022</div>
                                </div>
                                <Separator />
                                <div className="grid gap-1">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Shipping Address</div>
                                    <div>
                                        Sophia Anderson
                                        <br />
                                        1234 Main St.
                                        <br />
                                        Anytown, CA 12345
                                    </div>
                                </div>
                                <Separator />
                                <div className="grid gap-1">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Billing Address</div>
                                    <div>Same as shipping address</div>
                                </div>
                                <Separator />
                                <div className="grid gap-1">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Payment Method</div>
                                    <div>
                                        <CreditCardIcon className="w-5 h-5 mr-2 inline-block" />
                                        Visa ending in 1234
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Items Ordered</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="/placeholder.svg"
                                            width="64"
                                        />
                                        <div className="flex-1">
                                            <div className="font-medium">Glimmer Lamps</div>
                                            <div>Quantity: 2</div>
                                            <div>Price: $60.00</div>
                                            <div>Total: $120.00</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="/placeholder.svg"
                                            width="64"
                                        />
                                        <div className="flex-1">
                                            <div className="font-medium">Aqua Filters</div>
                                            <div>Quantity: 3</div>
                                            <div>Price: $16.33</div>
                                            <div>Total: $49.00</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Order Total</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="flex items-center">
                                    <div>Subtotal</div>
                                    <div className="ml-auto">$169.00</div>
                                </div>
                                <div className="flex items-center">
                                    <div>Shipping</div>
                                    <div className="ml-auto">$10.00</div>
                                </div>
                                <div className="flex items-center">
                                    <div>Taxes</div>
                                    <div className="ml-auto">$9.00</div>
                                </div>
                                <Separator />
                                <div className="flex items-center font-medium">
                                    <div>Total</div>
                                    <div className="ml-auto">$188.00</div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Order Status</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="flex items-center">
                                    <div>Status</div>
                                    <div className="ml-auto font-medium text-green-500">Shipped</div>
                                </div>
                                <div className="flex items-center">
                                    <div>Estimated Delivery</div>
                                    <div className="ml-auto font-medium">June 27, 2022</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}

function ArrowLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    )
}


function BellIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function CreditCardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LineChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    )
}


function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}


function PackageIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}