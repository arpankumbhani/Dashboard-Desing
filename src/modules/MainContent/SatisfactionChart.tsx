'use client'

import { Smile } from "lucide-react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

export default function SatisfactionChart() {
    const series = [95];

    const options: ApexOptions = {
        chart: {
            type: "radialBar",
            sparkline: { enabled: true },
        },
        colors: ["#2d426252"],
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "radial",
                gradientToColors: ["#0075FF"],
                inverseColors: true,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: "rgba(0, 117, 255, 0)",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "#0075FF",
                        opacity: 1,
                    }
                ]
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -100,
                endAngle: 100,
                hollow: {
                    size: "80%",
                },
                track: {
                    background: "#1e2b42",
                    strokeWidth: "100%",
                    margin: 0,
                },
                dataLabels: {
                    name: { show: false },
                    value: {
                        show: false,
                    },
                },
            },
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Progress"],
    };

    return (
        <div className="w-full col-span-2 satisfaction-gradient rounded-2xl p-5 text-white shadow-lg">
            <div className="mb-3">
                <h2 className="text-[18px] font-semibold">Satisfaction Rate</h2>
                <p className="text-[14px] text-[#A0AEC0]">From all projects</p>
            </div>
            <div className="flex flex-col">
                <div className="relative flex flex-col items-center">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="radialBar"
                        height={180}
                    />
                    <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-500">
                        <Smile className="text-white w-6 h-6" />
                    </div>
                </div>
                <div className=" bg-[linear-gradient(126.97deg,rgba(6,11,40,0.74)_28.26%,rgba(10,14,35,0.71)_91.2%)] rounded-xl px-4 py-3 flex justify-between items-start">
                    <span className="text-[12px] text-[#A0AEC0] ">0%</span>
                    <div className="text-center">
                        <div className="text-[28px] font-bold font-[Plus_Jakarta_Display] text-white">{series[0]}%</div>
                        <div className="text-[12px] text-[#A0AEC0]">Based on likes</div>
                    </div>
                    <span className="text-[12px] text-[#A0AEC0]">100%</span>
                </div>
            </div>
        </div>
    );
}
