import { Cart, SignIn, Wallet, World } from '@/icons'
import { StatItem } from '@/types'

const stats: StatItem[] = [
    { icon: Wallet, label: "Today's Money", value: '$53,000', change: '+55%', positive: true },
    { icon: World, label: "Today's Users", value: '2,300', change: '+3%', positive: true },
    { icon: SignIn, label: 'New Clients', value: '+3,052', change: '-24%', positive: false },
    { icon: Cart, label: 'Total Sales', value: '$173,000', change: '+8%', positive: true },
]

export default function DashboardCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {stats?.map((stat) => (
                <div
                    key={stat.label}
                    className="card-gradient rounded-xl p-4 shadow-md flex items-center justify-between border border-[#1e2a55]"
                >
                    <div>
                        <p className="text-[12px] text-gray-400">{stat.label}</p>
                        <div className="flex items-center gap-2">
                            <h3 className="text-[18px] font-semibold">{stat.value}</h3>
                            <p className={`text-[14px] ${stat.positive ? 'text-[#01B574]' : 'text-[#E31A1A]'}`}>
                                {stat.change}
                            </p>
                        </div>
                    </div>
                    <div className='p-2 bg-[#0075FF] rounded-xl'>
                        <stat.icon
                            size={18}
                            className="object-contain"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
