import { Phone } from 'lucide-react';

export default function Quote() {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-blue-600 py-8 px-6 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Request a Free Quote</h1>
                    <p className="text-blue-100">Tell us about your project, and we will provide a professional quote.</p>
                </div>

                <div className="p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" placeholder="Your Phone" required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" placeholder="your@email.com" required />
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed</label>
                            <select id="service" name="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2">
                                <option>Carpentry</option>
                                <option>Flooring Installation</option>
                                <option>Plumbing</option>
                                <option>Renovation</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
                            <textarea id="description" name="description" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2" placeholder="Describe your project..." required></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Upload Photos (optional)</label>
                            <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Request Quote
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-center text-gray-600 mb-4">You can also contact us directly on WhatsApp for faster assistance.</p>
                        <div className="flex justify-center">
                            <a
                                href="https://wa.me/2975555555"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
                            >
                                <Phone className="h-5 w-5 mr-2" /> Contact Us on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
