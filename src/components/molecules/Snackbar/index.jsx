import React, { useState, useEffect } from "react";

const Snackbar = ({
  message,
  variant,
  duration = 3000,
  position = "bottom-right",
  onClose,
}) => {
  const [show, setShow] = useState(true);
  const [closingProgress, setClosingProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClosingProgress(100);
      setTimeout(() => {
        setShow(false);
        onClose();
      }, 500);
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  const positionClasses = {
    "top-left": "top-10 left-10",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
  };

  const getPositionClasses = () =>
    positionClasses[position] || positionClasses["bottom-left"];

  return (
    show && (
      <div
        className={`fixed p-4 rounded-lg text-white ${
          variant === "success"
            ? "bg-green-500"
            : variant === "error"
            ? "bg-red-500"
            : variant === "warning"
            ? "bg-yellow-500"
            : "bg-blue-500"
        } ${getPositionClasses()}`}
      >
        <div className="flex justify-between items-center">
          <p className="mr-4">{message}</p>
          <div className="relative w-full h-1 bg-white mt-2">
            <div
              className="absolute top-0 left-0 bg-white h-full rounded"
              style={{
                width: `${closingProgress}%`,
                transition: `width ${duration}ms linear`,
              }}
            ></div>
          </div>
          <button
            onClick={() => {
              setClosingProgress(100);
              setTimeout(() => {
                setShow(false);
                onClose();
              }, 500);
            }}
            className="text-white focus:outline-none"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 11.414l4.95 4.95-1.414 1.414L8.586 12 3.636 16.95 2.222 15.536 7.172 10 2.222 5.05 3.636 3.636 8.586 8.586l4.95-4.95 1.414 1.414L11.414 10 16.364 15.95l1.414-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default Snackbar;
