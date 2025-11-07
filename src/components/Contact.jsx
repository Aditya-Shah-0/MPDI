import React from "react";

export const Contact = () => (
    <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Main Security Office</h3>
                <p><span className="font-semibold">Phone:</span> +91-326-223-5296 (Security Officer)</p>
                <p><span className="font-semibold">Email:</span> security@iitism.ac.in</p>
                <p className="mt-4">For emergencies or to report suspicious activity, please contact the main gate security office directly.</p>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Institute Address</h3>
                <p>Indian Institute of Technology (Indian School of Mines)</p>
                <p>Dhanbad, Jharkhand</p>
                <p>India, 826004</p>
            </div>
        </div>
    </div>
);