import React,{useState} from "react";
import { addVehicleEntry } from "../services/firebaseService";

export const AddVehicle = ({ setActiveView }) => {
    const [name, setName] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const VEHICLES_COLLECTION_PATH = import.meta.env.VITE_FIREBASE_COLLECTION_PATH;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !vehicleNumber || !idNumber) {
            setMessage({ type: 'error', text: 'Please fill all the fields.' });
            return;
        }
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });

        try {
            // The logic is now a clean, single function call
            await addVehicleEntry({ name, vehicleNumber, idNumber });
            
            setMessage({ type: 'success', text: 'Vehicle entry recorded successfully!'});
            setName('');
            setVehicleNumber('');
            setIdNumber('');
            setTimeout(() => {
                setMessage({ type: '', text: '' });
                setActiveView('dashboard');
            }, 2000);

        } catch (error) {
            console.error("Error adding document: ", error);
            setMessage({ type: 'error', text: 'Failed to record entry. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Add New Vehicle Entry (Manual)</h2>
            {message.text && <p className={`text-center p-3 mb-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message.text}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverName">Driver Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" id="driverName" type="text" placeholder="e.g., John Doe" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleNumber">Vehicle Number</label>
                    <input value={vehicleNumber} onChange={e => setVehicleNumber(e.target.value)} className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" id="vehicleNumber" type="text" placeholder="e.g., JH10AB1234" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idNumber">Government ID Number</label>
                    <input value={idNumber} onChange={e => setIdNumber(e.target.value)} className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" id="idNumber" type="text" placeholder="e.g., Aadhar/PAN/DL" />
                </div>
                <div className="flex items-center justify-center">
                    <button disabled={isSubmitting} className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200 disabled:bg-gray-400" type="submit">
                        {isSubmitting ? 'Saving...' : 'Record Entry'}
                    </button>
                </div>
            </form>
        </div>
    );
};