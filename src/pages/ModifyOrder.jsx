import React, { useState } from 'react';

const ModifyOrder = () => {
  const [prevTime, setPrevTime] = useState("10:00 AM - 12:00 PM"); //here ml model will be implemented
  const [currentTime, setCurrentTime] = useState("10:00 AM - 12:00 PM");
  const [newTime, setNewTime] = useState("");

  const timeOptions = [
    "8:00 AM -10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
  ];

  const handleTimeChange = (e) => {
    setPrevTime(currentTime);
    setCurrentTime(newTime);
  };

  return (
    <>
        <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 rounded-lg shadow-lg ">
            <div className="text-xl font-semibold text-gray-700">
                Previous Time Slot: <span className="text-gray-900">{prevTime}</span>
            </div>
            <div className="text-xl font-semibold text-gray-700">
                Current Time Slot: <span className="text-blue-600">{currentTime}</span>
            </div>
            <div className="flex items-center space-x-4">
                <label htmlFor="time-select" className="text-gray-600">
                Select New Time:
                </label>
                <select
                id="time-select"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <option value="">Select a time</option>
                {timeOptions.map((time) => (
                    <option key={time} value={time}>
                    {time}
                    </option>
                ))}
                </select>
            </div>
            <button
                onClick={handleTimeChange}
                disabled={!newTime}
                className={`px-4 py-2 text-white font-semibold rounded-md ${
                newTime
                    ? "bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
                Change Time Slot
            </button>
        </div>
    </>
  );
};

export default ModifyOrder;
