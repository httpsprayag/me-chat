"use client";

import { useState } from "react";
import Snackbar from "../components/molecules/Snackbar";

export default function Home() {
  const [snackbar, setSnackbar] = useState(null);

  const handleSnackbar = (message, variant, duration = 3000) => {
    setSnackbar({ message, variant, duration });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      {/* Your main application content */}
      <button
        onClick={() => handleSnackbar("Success", "success")}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Show Success
      </button>
      <button
        onClick={() => handleSnackbar("Error", "error", 6000)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Show Error (6 seconds)
      </button>
      <button
        onClick={() => handleSnackbar("Warning!", "warning")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Show Warning
      </button>
      <button
        onClick={() => handleSnackbar("Info ", "info")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Show Info
      </button>

      {/* Snackbar component */}
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          variant={snackbar.variant}
          duration={snackbar.duration}
          onClose={() => setSnackbar(null)}
          position="bottom-left"
        />
      )}
    </div>
  );
}
