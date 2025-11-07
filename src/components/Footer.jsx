import React from "react";

export const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
    <p>&copy; {new Date().getFullYear()} Indian Institute of Technology (Indian School of Mines), Dhanbad. All Rights Reserved.</p>
    <p className="text-sm text-gray-400 mt-1">Developed for IoT-based Vehicle Management System.</p>
  </footer>
);