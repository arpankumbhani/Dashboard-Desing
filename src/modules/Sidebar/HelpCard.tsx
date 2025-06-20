import { HelpCircle } from 'lucide-react'
import Image from 'next/image'
import backgroundImg from '../../../public/images/backgroundImg/helpCard-bg-img.png'

export default function HelpCard() {
    return (
        <div className="relative text-white rounded-2xl p-4 mt-6 overflow-hidden bg-gradient-to-br from-[#2A3A74] to-[#060B27]">
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImg}
                    alt="Background"
                    fill
                    className="object-cover opacity-100 "
                    priority
                />
            </div>
            <div className="relative z-10 bg-white rounded-xl w-10 h-10 flex items-center justify-center mb-4">
                <HelpCircle className="text-blue-500 w-5 h-5" />
            </div>
            <div className="relative z-10">
                <h3 className="text-base font-semibold mb-1">Need help?</h3>
                <p className="text-sm text-blue-100 mb-4">Please check our docs</p>
                <button className="w-full bg-gradient-to-br from-[#060B28BD] to-[#0A0E23B5] text-white py-2 rounded-xl text-xs font-bold shadow-inner backdrop-blur-md">
                    DOCUMENTATION
                </button>
            </div>
        </div>
    )
}
