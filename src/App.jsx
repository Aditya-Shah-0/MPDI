import React, { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Reports } from './components/Reports';
import { AddVehicle } from './components/AddVehicle';
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { Header } from './components/Header';

import { signIn, streamVehicles } from './services/firebaseService';


export default function App() {
  const [activeView, setActiveView] = useState('home');
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

  const renderView = () => {
    if (isLoading) {
      return <div className="text-center p-10">Loading vehicle data...</div>;
    }

    switch (activeView) {
      case 'home':
        return <Home setActiveView={setActiveView} />;
      case 'dashboard':
        // The Dashboard component no longer needs the 'db' prop
        return <Dashboard vehicles={vehicles} />;
      case 'addVehicle':
        // The AddVehicle component no longer needs the 'db' prop
        return <AddVehicle setActiveView={setActiveView} />;
      case 'reports':
        return <Reports />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 w-full max-w-7xl mx-auto p-0 mb-15 sm:p-0 lg:p-0">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

