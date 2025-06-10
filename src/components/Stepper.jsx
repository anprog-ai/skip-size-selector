import React from "react";

const steps = [
  "Postcode",
  "Waste Type",
  "Select Skip",
  "Permit Check",
  "Choose Date",
  "Payment",
];

const currentStep = 2; // Index of current step (0-based)

export default function Stepper() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl max-w-xs mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Booking Steps</h2>
      <ol className="space-y-4">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          return (
            <li key={step} className="flex items-start">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  isCompleted
                    ? "bg-green-500 border-green-500 text-white"
                    : isActive
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-gray-500 text-gray-400"
                }`}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              <span
                className={`ml-4 mt-1 font-medium ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
