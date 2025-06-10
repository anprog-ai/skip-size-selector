import React, { useEffect, useState } from "react";
import BottomSheet from "./BottomSheet";
import axios from "axios";


function SkipSizeSelector() {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [showSheet, setShowSheet] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [skipSizes, setSkipSizes] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      ) // Replace with your real API
      .then((response) => {
        setSkipSizes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch skip sizes.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading skips...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {skipSizes.map((skip) => (
            <div
              key={skip.size}
              className={`border rounded-xl overflow-hidden bg-white shadow-sm transition duration-200 ${
                selectedSkip?.size === skip.size
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : ""
              }`}
            >
              <div className="relative h-40 w-full">
                <img
                  src={`/images/${skip.size}.jpg`}
                  alt={skip.size}
                  className="w-full h-full object-cover"
                />
                <h3 className="absolute top-2 right-2 text-white text-sm font-bold bg-black/50 px-3 py-1 rounded-md">
                  {skip.size} Yard
                </h3>
                <h3 className="absolute bottom-2 left-2 flex items-center gap-1 text-yellow-400 text-sm font-small bg-black/60 px-2 py-1 rounded-md">
                  ⚠️ Not Allowed On The Road
                </h3>
              </div>
              <div className="p-4">
                <h3 className=" text-black text-lg font-bold py-1 rounded-md">
                  {skip.size} Yard Skip
                </h3>
                <p className="text-blue-600 text-2xl font-bold">
                  £{skip.price_before_vat}
                </p>
                <p className="text-gray-500 text-sm">
                  {skip.hire_period_days} day hire pariod
                </p>
                <button
                  className={`mt-4 w-full py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                    selectedSkip?.size === skip.size
                      ? "bg-blue-600"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  onClick={() => {
                    setSelectedSkip(skip);
                    setShowSheet(true);
                  }}
                >
                  {selectedSkip?.size === skip.size ? "Selected" : "Select"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showSheet && (
        <BottomSheet selectedSkip={selectedSkip} setShowSheet={setShowSheet} />
      )}
    </>
  );
}

export default SkipSizeSelector;
