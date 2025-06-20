'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { Cart2, RTL, SignUp, Wallet2 } from '@/icons';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const chartOptions: ApexOptions = {
    chart: {
        type: 'bar',
        toolbar: { show: false },
        sparkline: { enabled: false },
        foreColor: '#94a3b8',
    },
    plotOptions: {
        bar: {
            columnWidth: '10%',
            borderRadius: 2,
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: [
            '1', '2', '3', '4', '5', '6',
            '7', '8', '9',
        ],
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },

    },
    yaxis: {
        min: 0,
        max: 500,
    },

    tooltip: {
        theme: 'dark',
    },
    grid: {
        show: false,
        borderColor: '#1e293b',
    },
    colors: ['#ffffff'],
};

const chartSeries = [
    {
        name: 'Active Users',
        data: [350, 250, 100, 350, 500, 420, 470, 330, 180,],
    },
];

export default function ActiveUsersCard() {
    return (
        <div className="sales-gradient rounded-xl p-4 shadow-md col-span-2">
            <div className="mb-4 activeUsers-gradient rounded-xl">
                <Chart options={chartOptions} series={chartSeries} type="bar" height={250} />
            </div>
            <div className="px-4">
                <h3 className="text-[18px] font-semibold">Active Users</h3>
                <div className='flex'>
                    <p className="text-[14px] text-[#01B574] ">(+23)</p>
                    <span className='text-[14px] text-gray-300 ml-1'>than last week</span>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm px-4">
                {[
                    { icon: Wallet2, label: 'Users', value: '32,984', percent: 75 },
                    { icon: SignUp, label: 'Clicks', value: '2.42m', percent: 60 },
                    { icon: Cart2, label: 'Sales', value: '2,400$', percent: 40 },
                    { icon: RTL, label: 'Items', value: '320', percent: 90 },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col space-y-2 items-start w-full">
                        <div className="flex items-center justify-center gap-2">
                            <div className="p-2 bg-[#0075FF] rounded-xl">
                                <item.icon
                                    size={18}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[14px] text-[#A0AEC0]">{item.label}</p>
                        </div>
                        <p className="text-[16px] font-medium text-[#FFFFFF]">{item.value}</p>
                        <div className="w-full h-1 bg-gray-700 rounded-full">
                            <div
                                className="h-1 bg-[#0075FF] rounded-full"
                                style={{ width: `${item.percent}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
