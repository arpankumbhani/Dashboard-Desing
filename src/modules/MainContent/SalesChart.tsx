'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import React from 'react';


const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SalesChart() {
    const chartOptions: ApexOptions = {
        chart: {
            type: 'area',
            height: 350,
            toolbar: { show: false },
            zoom: { enabled: true },
            sparkline: {
                enabled: false,
            },
        },
        dataLabels: { enabled: false },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 90, 100],
            },
        },
        legend: { show: false },
        grid: {
            borderColor: '#56577A',
            strokeDashArray: 5,
        },
        xaxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
            ],
            labels: {
                style: {
                    colors: '#CBD5E0',
                    fontSize: '10px',
                },
            },
        },
        yaxis: {
            min: 0,
            labels: {
                style: {
                    colors: '#CBD5E0',
                },
            },
        },
        tooltip: {
            theme: 'dark',
        },
        colors: ['#2CD9FF', '#0075FF'],
    };



    const chartSeries = [
        {
            name: 'Sales A',
            data: [500, 150, 170, 280, 210, 230, 250, 205, 110, 140, 180, 120],
        },
        {
            name: 'Sales B',
            data: [180, 120, 250, 270, 310, 330, 300, 210, 180, 230, 290, 260],
        },
    ];

    return (
        <div className='sales-gradient text-white rounded-2xl p-6 shadow-xl w-full mx-auto col-span-3'>
            <div className="mb-3">
                <h2 className="text-[18px] font-semibold">Sales overview</h2>
                <div className='flex'>
                    <p className="text-[14px] text-[#01B574]">(+5) more</p>
                    <span className='text-[14px] text-[#A0AEC0] ml-1'>in 2021</span>
                </div>
            </div>
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="area"
                height={350}
            />
        </div>
    );
}
