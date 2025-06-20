import { Notification, Profile, Setting } from '@/icons'
import { Search, Menu } from 'lucide-react'

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <>
            <header className="flex justify-between items-center px-4 md:px-6 py-4">
                <div className="flex items-center gap-4">
                    <button className="md:hidden text-gray-400 hover:text-white" onClick={onMenuClick}>
                        <Menu size={20} />
                    </button>
                    <div className="hidden md:block">
                        <p className="text-[12px] text-gray-400">
                            Pages / <span className="text-white font-medium text-[14px]">Dashboard</span>
                        </p>
                        <h1 className="text-white text-xl font-semibold">Dashboard</h1>
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative w-full max-w-[180px] md:max-w-[250px]">
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Type here..."
                            className="bg-[#0F1535] text-sm text-white placeholder-gray-400 pl-9 pr-4 py-2 rounded-xl border border-[#2d356e] focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
                        />
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <span className="hover:text-white cursor-pointer flex items-center gap-1">
                            <Profile size={18} />
                            <span className="hidden md:inline text-[10px] whitespace-nowrap">Sign In</span>
                        </span>
                        <Setting size={18} className="hover:text-white cursor-pointer" />
                        <Notification size={18} className="hover:text-white cursor-pointer" />
                    </div>
                </div>
            </header>
        </>

    )
}

