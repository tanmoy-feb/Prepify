import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
