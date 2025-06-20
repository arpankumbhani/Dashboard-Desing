import { ProjectItem } from '@/types';
import { Check } from 'lucide-react';
import Image from 'next/image';

const projects: ProjectItem[] = [
    {
        icon: '/images/companies/icon-01.png',
        name: 'Chakra Soft UI Version',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg', '/images/members/member-03.jpg', '/images/members/member-04.jpg', '/images/members/member-05.jpg'],
        budget: '$14,000',
        completion: 60,
    },
    {
        icon: '/images/companies/icon-02.png',
        name: 'Add Progress Track',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg'],
        budget: '$3,000',
        completion: 10,
    },
    {
        icon: '/images/companies/icon-03.png',
        name: 'Fix Platform Errors',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg'],
        budget: 'Not set',
        completion: 100,
    },
    {
        icon: '/images/companies/icon-04.png',
        name: 'Launch our Mobile App',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg', '/images/members/member-03.jpg', '/images/members/member-04.jpg'],
        budget: '$32,000',
        completion: 100,
    },
    {
        icon: '/images/companies/icon-05.png',
        name: 'Add the New Pricing Page',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg', '/images/members/member-03.jpg', '/images/members/member-04.jpg', '/images/members/member-05.jpg'],
        budget: '$400',
        completion: 25,
    },
    {
        icon: '/images/companies/icon-06.png',
        name: 'Redesign New Online Shop',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg',],
        budget: '$7,600',
        completion: 40,
    },
    {
        icon: '/images/companies/icon-06.png',
        name: 'Redesign New Online Shop',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg',],
        budget: '$7,600',
        completion: 40,
    },
    {
        icon: '/images/companies/icon-06.png',
        name: 'Redesign New Online Shop',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg',],
        budget: '$7,600',
        completion: 40,
    },
    {
        icon: '/images/companies/icon-06.png',
        name: 'Redesign New Online Shop',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg',],
        budget: '$7,600',
        completion: 40,
    },
    {
        icon: '/images/companies/icon-06.png',
        name: 'Redesign New Online Shop',
        members: ['/images/members/member-01.jpg', '/images/members/member-02.jpg',],
        budget: '$7,600',
        completion: 40,
    },
];

export default function ProjectsTable() {
    return (
        <div className="sales-gradient overflow-hidden rounded-2xl p-6 shadow-md text-white md:col-span-2 col-span-2">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-[18px] font-semibold">Projects</h2>
                    <div className="flex items-center mt-1">
                        <Check className="w-4 h-4 p-[2px] bg-[#01B574] text-black rounded-full mr-2" />
                        <span className='text-[14px] text-gray-400'>30 done this month</span>
                    </div>
                </div>
                <div className="text-gray-400 text-xl cursor-pointer">⋮</div>
            </div>
            <div className="overflow-x-auto max-w-full">
                <div className="min-w-[600px] max-h-[400px] overflow-y-auto divide-y p-2 divide-slate-700">
                    <div className="grid grid-cols-12 gap-4 text-sm text-[#A0AEC0] font-medium border-b border-[#56577A] pb-2">
                        <div className="col-span-4">COMPANIES</div>
                        <div className="col-span-3">MEMBERS</div>
                        <div className="col-span-2">BUDGET</div>
                        <div className="col-span-3">COMPLETION</div>
                    </div>

                    <div className="divide-y divide-[#56577A]">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-12 gap-4 items-center py-4 text-sm"
                            >
                                <div className="col-span-4 flex items-center gap-3">
                                    <Image src={project.icon} alt="icon" width={24} height={24} />
                                    <span className="text-white truncate">{project.name}</span>
                                </div>
                                <div className="col-span-3 flex -space-x-2">
                                    {project.members.map((src, j) => (
                                        <Image
                                            key={j}
                                            src={src}
                                            alt="member"
                                            width={32}
                                            height={28}
                                            className="rounded-full ring-2 ring-gray-800 h-7 w-7"
                                        />
                                    ))}
                                </div>
                                <div className="col-span-2 text-white truncate">{project.budget}</div>
                                <div className="col-span-3 flex flex-col">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white">{project.completion}%</span>
                                    </div>
                                    <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
                                        <div
                                            className="h-1 bg-blue-500 rounded-full"
                                            style={{ width: `${project.completion}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


