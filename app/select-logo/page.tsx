'use client';

import { useState } from 'react';
import Image from 'next/image';

const logos = [
    'aga_construction_logo_1771453920372.png',
    'aga_construction_logo_1771453973387.png',
    'aga_construction_logo_1771453998467.png',
    'aga_construction_logo_1771454026910.png',
    'aga_construction_logo_1771454055042.png',
    'aga_construction_logo_1771454084335.png',
    'aga_construction_logo_1771454107612.png',
    'aga_construction_logo_1771454161395.png',
    'aga_construction_logo_1771454185630.png',
    'aga_construction_logo_1771454218804.png',
];

export default function LogoSelection() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12">Select Your Preferred Logo</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {logos.map((logo) => (
                        <div key={logo} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <div className="bg-gray-200 p-4 rounded mb-4 w-full flex justify-center">
                                <Image
                                    src={`/logos/${logo}`}
                                    alt={logo}
                                    width={300}
                                    height={300}
                                    className="object-contain h-48 w-auto"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mb-2 break-all">{logo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
