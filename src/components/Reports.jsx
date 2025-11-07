import React from "react";

export const Reports = () => (
    <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Reports</h2>
        <p className="text-gray-600 mb-6">This section will allow for the generation of detailed vehicle movement reports. Functionality to filter by date range, vehicle type, and export to CSV/PDF will be available in a future update.</p>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-semibold text-gray-700">Upcoming Features:</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Daily/Weekly/Monthly Entry & Exit Summaries</li>
                    <li>Peak Hour Traffic Analysis</li>
                    <li>Average Vehicle Stay Duration</li>
                    <li>Searchable Historical Data Archive</li>
                </ul>
            </div>
        </div>
    </div>
);