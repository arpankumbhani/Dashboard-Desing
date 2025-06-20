'use client'

import Header from '@/modules/Header/Header'
import Sidebar from '@/modules/Sidebar/Sidebar'
import Image from 'next/image'
import { useState } from 'react'
import bgImg from '../../assets/background-img.jpg'

interface ClientLayoutShellProps {
    children: React.ReactNode
}

export default function ClientLayoutShell({ children }: ClientLayoutShellProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(159.02deg,#0F123B_14.25%,#090D2E_56.45%,#020515_86.14%)] opacity-80" />
            <div className="absolute left-1/2 top-0 w-[180%] bg-[linear-gradient(159.02deg,#0F123B_14.25%,#090D2E_56.45%,#020515_86.14%)] max-w-none h-[150%] -translate-x-1/2 -z-10 pointer-events-none overflow-hidden">
                <Image
                    src={bgImg}
                    alt="background"
                    className="w-full h-full object-cover blur-[200px]"
                    priority
                />
            </div>
            <div className="flex flex-col md:flex-row h-screen overflow-hidden">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1 overflow-y-auto p-4 md:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
