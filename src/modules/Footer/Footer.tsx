import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white px-4 py-6">
            <div className="flex flex-wrap justify-center md:justify-start items-center text-center">
                © 2021, Made with
                <span className="flex items-center mx-1 text-[#ff0000]">
                    <Heart fill="red" size={15} />
                </span>
                by Simple & Creative Tim for a better web.
            </div>
            <div className="flex gap-6 justify-center">
                <div className="text-white cursor-pointer">Marketplace</div>
                <div className="text-white cursor-pointer">Blog</div>
                <div className="text-white cursor-pointer">License</div>
            </div>
        </div>
    )
}
