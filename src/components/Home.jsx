import React from "react";

export const Home = ({ setActiveView }) => (
    <div> {/* Changed from text-center to a neutral parent */}
        {/* This container now breaks out to full screen width */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 bg-gray-900 shadow-xl overflow-hidden mb-8">
            <img
                src="https://people.iitism.ac.in/~download/images/defalutimage/HeritageBuilding.jpg"
                alt="IIT ISM Dhanbad Heritage Building"
                className="w-full h-auto object-cover opacity-40"
                style={{ minHeight: '300px', maxHeight: '550px' }} // Adjusted max-height for better aesthetics
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <h2 className="text-4xl md:text-8xl font-extrabold mb-2">Welcome to IIT (ISM) Dhanbad</h2>
                <p className="text-lg md:text-4xl font-light">Vehicle Entry & Exit Monitoring System</p>
            </div>
        </div>

        {/* The content below remains centered on the page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="bg-cyan-200/40 p-6 rounded-lg shadow-lg shadow-black hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={() => setActiveView('dashboard')}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Live Dashboard</h3>
                <p className="text-gray-600">View real-time vehicle entry and exit data, search records, and see campus traffic statistics at a glance.</p>
            </div>
            <div className="bg-cyan-200/40 p-6 rounded-lg shadow-lg shadow-black hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={() => setActiveView('reports')}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Generate Reports</h3>
                <p className="text-gray-600">Create detailed reports for specific date ranges, analyze peak hours, and export data for official use.</p>
            </div>
            <div className="bg-cyan-200/40 p-6 rounded-lg shadow-lg shadow-black hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={() => setActiveView('contact')}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Security</h3>
                <p className="text-gray-600">Find contact details for the campus security office and other important administrative contacts.</p>
            </div>
        </div>
    </div>
);