import Image from 'next/image';

export default function LogosPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-12">
            <h1 className="text-3xl font-bold text-center mb-12">Logo Options</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                {/* Option 1: Original/Current */}
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-bold mb-4">Option 1 (Original)</h2>
                    <div className="bg-white border p-4 rounded flex justify-center items-center h-48">
                        <Image src="/logo.png" alt="Prop 1" width={300} height={100} className="object-contain" />
                    </div>
                    <p className="mt-4 text-gray-500">The current typographic logo.</p>
                </div>

                {/* Option 2: Hammer & Roof */}
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-bold mb-4">Option 2 (Hammer & Roof)</h2>
                    <div className="bg-white border p-4 rounded flex justify-center items-center h-48">
                        <Image src="/logo-hammer.svg" alt="Prop 2" width={300} height={100} className="object-contain" />
                    </div>
                    <p className="mt-4 text-gray-500">Integrated hammer with house roofline.</p>
                </div>

                {/* Option 3: Crossed Hammers */}
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-bold mb-4">Option 3 (Crossed Hammers)</h2>
                    <div className="bg-white border p-4 rounded flex justify-center items-center h-48">
                        <Image src="/logo-crossed.svg" alt="Prop 3" width={300} height={100} className="object-contain" />
                    </div>
                    <p className="mt-4 text-gray-500">Classic emblem style with crossed tools.</p>
                </div>

                {/* Option 4: Saw Blade */}
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-bold mb-4">Option 4 (Saw Blade)</h2>
                    <div className="bg-white border p-4 rounded flex justify-center items-center h-48">
                        <Image src="/logo-saw.svg" alt="Prop 4" width={300} height={100} className="object-contain" />
                    </div>
                    <p className="mt-4 text-gray-500">Minimalist saw blade icon.</p>
                </div>

                {/* Option 5: Roof & Ruler */}
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-bold mb-4">Option 5 (Roof & Ruler)</h2>
                    <div className="bg-white border p-4 rounded flex justify-center items-center h-48">
                        <Image src="/logo-roof-ruler.svg" alt="Prop 5" width={300} height={100} className="object-contain" />
                    </div>
                    <p className="mt-4 text-gray-500">Same roof design, but with a carpentry square.</p>
                </div>

                {/* Option 6: Roof & Plane */}
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-bold mb-4">Option 6 (Roof & Hand Plane)</h2>
                    <div className="bg-white border p-4 rounded flex justify-center items-center h-48">
                        <Image src="/logo-roof-plane.svg" alt="Prop 6" width={300} height={100} className="object-contain" />
                    </div>
                    <p className="mt-4 text-gray-500">Same roof design, with a traditional hand plane.</p>
                </div>

                {/* Option 7: Tool Cluster (Maximalist) */}
                <div className="bg-white p-8 rounded-lg shadow-md text-center md:col-span-2">
                    <h2 className="text-xl font-bold mb-4">Option 7 (Tool Cluster)</h2>
                    <div className="bg-white border p-4 rounded flex justify-center items-center h-64">
                        <Image src="/logo-cluster.svg" alt="Prop 7" width={400} height={150} className="object-contain" />
                    </div>
                    <p className="mt-4 text-gray-500">Inspired by your reference: A full cluster of tools (Saw, Hammer, Blade) behind the brand.</p>
                </div>
            </div>
        </div>
    );
}
