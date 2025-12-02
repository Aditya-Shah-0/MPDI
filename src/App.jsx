import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Reports } from './components/Reports';
import { AddVehicle } from './components/AddVehicle';
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { Header } from './components/Header';

import { signIn, streamVehicles } from './services/firebaseService';


export default function App() {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Effect for signing in and setting up the data stream
  useEffect(() => {
    // Sign in to Firebase when the app loads
    signIn();

    // Set up the real-time listener for vehicle data
    const unsubscribe = streamVehicles((vehiclesData) => {
      setVehicles(vehiclesData);
      setIsLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []); // The empty dependency array ensures this runs only once

  if (isLoading) {
    return <div className="text-center p-10">Loading vehicle data...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto p-0 mb-15 sm:p-0 lg:p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard vehicles={vehicles} />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

