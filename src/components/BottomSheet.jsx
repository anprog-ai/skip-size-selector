import React from "react";

export default function BottomSheet({ setShowSheet, selectedSkip }) {
  console.log(selectedSkip);
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={() => setShowSheet(false)}
      />
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-t rounded-t-2xl shadow-2xl p-6 max-h-[90vh] transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{selectedSkip.size} Yard Skip</h3>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setShowSheet(false)}
          >
            ✕
          </button>
        </div>
        <p className="text-2xl font-bold text-blue-600">
          £{selectedSkip.price_before_vat}
        </p>
        <p className="text-gray-500">{selectedSkip.hire_period_days} day hire</p>

        <p className="text-sm text-gray-400 mt-4">
          Imagery and information shown may not reflect the exact shape or size.
          Options may vary and accessories may cost more.
        </p>

        <div className="flex justify-between mt-6">
          <button
            className="px-6 py-2 rounded-lg bg-gray-800 text-white"
            onClick={() => setShowSheet(false)}
          >
            Back
          </button>
          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Continue ➡
          </button>
        </div>
      </div>
    </>
  );
}
