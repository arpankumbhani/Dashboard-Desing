import { OrderItem } from "@/types";
import { Check } from "lucide-react";
import Image from "next/image";

const orders: OrderItem[] = [
    { icon: '/images/orderImgs/Icon-01.png', title: "$2400, Design changes", date: "22 DEC 7:20 PM" },
    { icon: '/images/orderImgs/Icon-02.png', title: "New order #4219423", date: "21 DEC 11:21 PM" },
    { icon: '/images/orderImgs/Icon-03.png', title: "Server Payments for April", date: "21 DEC 9:28 PM" },
    { icon: '/images/orderImgs/Icon-05.png', title: "New card added for order #3210145", date: "20 DEC 3:52 PM" },
    { icon: '/images/orderImgs/Icon-01.png', title: "Unlock packages for Development", date: "19 DEC 11:35 PM" },
    { icon: '/images/orderImgs/Icon-02.png', title: "New order #9851258", date: "18 DEC 4:41 PM" },
    { icon: '/images/orderImgs/Icon-03.png', title: "New order #9851258", date: "18 DEC 4:41 PM" },
    { icon: '/images/orderImgs/Icon-04.png', title: "New order #9851258", date: "18 DEC 4:41 PM" },
];

export default function OrdersOverview() {
    return (
        <div className="rounded-2xl card-gradient p-6 shadow-lg overflow-y-auto text-white md:col-span-1 ">
            <div className="mb-8">
                <h2 className="text-[18px] font-semibold">Orders overview</h2>
                <div className="flex items-center mt-1">
                    <Check className="w-4 h-4 p-[2px] bg-[#01B574] text-black rounded-full mr-2" />
                    <span className='text-[14px] text-gray-400'>+30% this month</span>
                </div>
            </div>
            <div className="overflow-x-auto max-w-full">
                <div className="space-y-5 min-w-[300px] max-h-[400px] overflow-y-auto">
                    {orders.map((order, index) => (
                        <div key={index} className="flex gap-3 items-start">
                            <div className="col-span-5 flex items-center gap-3">
                                <Image src={order.icon} alt="icon" width={24} height={24} />
                            </div>
                            <div>
                                <p className="text-white font-medium text-[14px]">{order.title}</p>
                                <p className="text-[#A0AEC0] text-[12px] mt-1">{order.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
