'use client'

import {
    X,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HelpCard from './HelpCard'
import {
    Dashboard,
    Billing,
    Table,
    RTL,
    Profile,
    SignIn,
    SignUp,
} from '@/icons'
import { NavItem } from '@/types'

const mainNav: NavItem[] = [
    { label: 'Dashboard', icon: Dashboard, href: '/dashboard' },
    { label: 'Tables', icon: Table, href: '/tables' },
    { label: 'Billing', icon: Billing, href: '/billing' },
    { label: 'RTL', icon: RTL, href: '/rtl' },
]

const accountNav = [
    { label: 'Profile', icon: Profile, href: '/profile' },
    { label: 'Sign In', icon: SignIn, href: '/signin' },
    { label: 'Sign Up', icon: SignUp, href: '/signup' },
]

export default function Sidebar({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) {
    const pathname = usePathname()
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose}></div>
            )}
            <aside
                className={`sidebar-gradient w-[264px] border-0 rounded-2xl min-h-screen m-3 p-6 shadow-inner transition-transform duration-300 z-50
                          ${isOpen ? 'fixed left-0 top-0' : 'hidden'} md:flex flex-col justify-between`}
            >
                <div className="md:hidden flex justify-end mb-4">
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>
                <div>
                    <div className="text-[14px] font-bold leading-[1] tracking-[0.18em] text-center bg-gradient-to-r from-white to-[#757A8C00] bg-clip-text text-transparent">
                        VISION UI FREE
                    </div>
                    <div className="h-px w-full mt-6 bg-gradient-to-r from-[rgba(224,225,226,0)] via-[#E0E1E2] to-[rgba(224,225,226,0.15)]" ></div>

                    <nav className="space-y-1 pt-4">
                        {mainNav.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[#1A1F37] hover:bg-opacity-30 text-white ${isActive
                                        ? 'bg-[#1A1F37] '
                                        : ''
                                        }`}
                                >
                                    <div className={isActive ? 'bg-[#0075FF] p-2 rounded-lg' : 'bg-[#1A1F37] p-2 rounded-lg'}>
                                        <item.icon size={18} className={isActive ? 'text-white' : 'text-blue-400'} />
                                    </div>
                                    <span className='text-[14px]'>{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="px-3 py-4 text-xs text-white font-medium tracking-widest">ACCOUNT PAGES</div>
                    <nav className="space-y-1">
                        {accountNav.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                        ? 'bg-blue-600 text-white'
                                        : 'text-white hover:bg-[#1A1F37] hover:bg-opacity-30'
                                        }`}
                                >
                                    <div className={isActive ? 'bg-[#0075FF] p-2 rounded-lg' : 'bg-[#1A1F37] p-2 rounded-lg'}>
                                        <item.icon size={18} className={isActive ? 'text-white' : 'text-blue-400'} />
                                    </div>
                                    <span className='text-[14px]'>{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                <HelpCard />
            </aside>
        </>
    )
}