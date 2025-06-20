import Image from 'next/image'
import jellyfish from '../../../assets/background.png'

export default function WelcomeCard() {
    return (
        <div className="relative rounded-xl p-6 shadow-md w-full col-span-3 flex flex-col md:flex-row items-start justify-start gap-4 overflow-hidden min-h-[230px]">
            <Image
                src={jellyfish}
                alt="background jellyfish"
                fill
                className="absolute top-0 left-0 z-0"
                priority
            />
            <div className="relative h-full flex flex-col z-10 max-w-[300px]">
                <h3 className="text-[12px] text-[#A0AEC0] font-medium">Welcome back,</h3>
                <p className="text-[25px] font-semibold text-white">Mark Johnson</p>
                <p className="text-[12px] mt-3 text-[#A0AEC0] w-[8rem]">Glad to see you again! Ask me anything.</p>
                <p className="text-sm text-white mt-auto">Tap to record →</p>
            </div>
        </div>
    )
}
