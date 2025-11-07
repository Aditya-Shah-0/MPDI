import React, { useState, useMemo } from "react";

import { updateVehicleExit } from "../services/firebaseService";

import { formatTimestamp } from "../assets/fuction";
import { StatCard } from "./StatCard";
import { SearchIcon } from "../assets/Icon";

export const Dashboard = ({ vehicles }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const VEHICLES_COLLECTION_PATH = import.meta.env.VITE_FIREBASE_COLLECTION_PATH;

    const handleExit = async (vehicleId) => {
        if (!vehicleId) return;
        try {
            // This is now a simple, clean function call
            await updateVehicleExit(vehicleId);
        } catch (error) {
            console.error("Error updating vehicle exit time: ", error);
            // Optionally, show an error message to the user here
        }
    };

    const filteredVehicles = useMemo(() => {
        return vehicles.filter(vehicle =>
            (vehicle.name && vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (vehicle.vehicleNumber && vehicle.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase()))
        ).sort((a,b) => (b.entryTime?.seconds || 0) - (a.entryTime?.seconds || 0));
    }, [vehicles, searchQuery]);
    
    const stats = useMemo(() => {
        const vehiclesInside = vehicles.filter(v => v.status === 'Inside').length;
        const vehiclesExitedToday = vehicles.filter(v => {
            if (v.status !== 'Exited' || !v.exitTime?.toDate) return false;
            const exitDate = v.exitTime.toDate();
            const today = new Date();
            return exitDate.getDate() === today.getDate() &&
                   exitDate.getMonth() === today.getMonth() &&
                   exitDate.getFullYear() === today.getFullYear();
        }).length;
        
        return { vehiclesInside, vehiclesExitedToday, total: vehicles.length };
    }, [vehicles]);

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-5">
            <StatCard title="Total Vehicles Recorded" value={stats.total} color="border-blue-500" />
            <StatCard title="Vehicles Currently Inside" value={stats.vehiclesInside} color="border-green-500" />
            <StatCard title="Vehicles Exited Today" value={stats.vehiclesExitedToday} color="border-red-500" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Vehicle Entry Records</h2>
                <div className="relative w-full md:w-auto">
                    <input 
                        type="text"
                        placeholder="Search by name or vehicle no..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
                  <tr>
                    <th className="py-3 px-4 text-left">Driver Name</th>
                    <th className="py-3 px-4 text-left">Vehicle Number</th>
                    <th className="py-3 px-4 text-left">Govt. ID Number</th>
                    <th className="py-3 px-4 text-left">Entry Time</th>
                    <th className="py-3 px-4 text-left">Exit Time</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {filteredVehicles.map((vehicle) => (
                    <tr key={vehicle.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-4">{vehicle.name}</td>
                      <td className="py-3 px-4 font-mono">{vehicle.vehicleNumber}</td>
                      <td className="py-3 px-4">{vehicle.idNumber}</td>
                      <td className="py-3 px-4">{formatTimestamp(vehicle.entryTime)}</td>
                      <td className="py-3 px-4">{formatTimestamp(vehicle.exitTime)}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          vehicle.status === 'Inside' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {vehicle.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {vehicle.status === 'Inside' && (
                             <button onClick={() => handleExit(vehicle.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full text-xs transition-colors duration-200">
                               Record Exit
                             </button>
                        )}
                      </td>
                    </tr>
                  ))}
                   {filteredVehicles.length === 0 && (
                    <tr>
                        <td colSpan="7" className="text-center py-6 text-gray-500">{vehicles.length > 0 ? "No vehicles match your search." : "Awaiting vehicle data..."}</td>
                    </tr>
                   )}
                </tbody>
              </table>
            </div>
        </div>
      </>
    );
};