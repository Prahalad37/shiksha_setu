import React from "react";
import Navbar from "../components/Navbar"; // 👈 Correct path de

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar /> {/* 👈 Ye add karna hai */}

      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;