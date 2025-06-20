'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from "apexcharts";
import { Dots } from '@/icons';


const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

export default function ReferralCard() {
    const actualValue = 9.3;
    const totalValue = 10;
    const percentage = (actualValue / totalValue) * 100;

    const chartOptions: ApexOptions = {
        chart: {
            type: 'radialBar',
            offsetY: 0,
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: 'transparent',
                },
                track: {
                    background: '#1e2b42',
                    strokeWidth: '100%',
                },
                dataLabels: {
                    name: {
                        offsetY: -25,
                        color: '#cbd5e1',
                        fontSize: '10px',
                        show: true,
                    },
                    value: {
                        offsetY: 5,
                        color: '#fff',
                        fontSize: '45px',
                        fontFamily: 'Leaner',
                        fontWeight: 600,
                        show: true,
                        formatter: () => `${actualValue} `,
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'radial',
                gradientToColors: ['#0fd4c9'],
                inverseColors: true,
                opacityFrom: 1,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: "rgba(5, 205, 153, 0)",
                        opacity: 0,
                    },
                    {
                        offset: 100,
                        color: "#0fd4c9",
                        opacity: 1,
                    }
                ]
            },
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['Safety',],
    };

    return (
        <div className="referral-gradient rounded-xl p-4 col-span-3 text-white shadow-lg backdrop-blur-[120px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[18px] font-semibold text-gray-200">
                    Referral Tracking
                </h2>
                <button className="dropdown-toggle rounded-lg">
                    <Dots
                        className=""
                        size={18}

                    />
                </button>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-[15px]">
                <div className="space-y-4 ml-3">
                    <div className="invited-bonus-gradient rounded-lg p-4 w-40">
                        <p className="text-xs text-gray-400">Invited</p>
                        <p className="text-white font-bold">
                            145 <span className="font-normal">people</span>
                        </p>
                    </div>
                    <div className="invited-bonus-gradient rounded-lg p-4 w-40">
                        <p className="text-xs text-gray-400">Bonus</p>
                        <p className="text-white font-bold">1,465</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <ReactApexChart
                        options={chartOptions}
                        series={[percentage]}
                        type="radialBar"
                        height={210}
                        width={210}
                    />
                    <p className="text-sm text-gray-400 -mt-7">Total Score</p>
                </div>
            </div>
        </div>
    );
};


