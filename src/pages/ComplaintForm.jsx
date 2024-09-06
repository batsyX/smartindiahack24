import React, { useState } from 'react';
import g20 from "/G20.png";
import emblem from "/Emblem_of_India.svg"
import rightLogo from "/right_side_logo.png"


const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    trackingNumber: '',
    shippingAddress: '',
    orderNumber: '',
    dateOfShipment: '',
    expectedDeliveryDate: '',
    carrier: '',
    issueDescription: '',
    proofOfPurchase: null,
    additionalNotes: '',
    preferredResolution: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to API or log it
    console.log('Complaint Submitted:', formData);
  };

  return (
    <>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Parcel Complaint Form</h2>

        <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
            <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (optional):</label>
            <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="trackingNumber" className="block text-sm font-medium text-gray-700">Tracking Number:</label>
            <input
            type="text"
            id="trackingNumber"
            name="trackingNumber"
            value={formData.trackingNumber}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="shippingAddress" className="block text-sm font-medium text-gray-700">Shipping Address:</label>
            <textarea
            id="shippingAddress"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">Order/Parcel Number:</label>
            <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="dateOfShipment" className="block text-sm font-medium text-gray-700">Date of Shipment:</label>
            <input
            type="date"
            id="dateOfShipment"
            name="dateOfShipment"
            value={formData.dateOfShipment}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="expectedDeliveryDate" className="block text-sm font-medium text-gray-700">Expected Delivery Date:</label>
            <input
            type="date"
            id="expectedDeliveryDate"
            name="expectedDeliveryDate"
            value={formData.expectedDeliveryDate}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700">Description of the Issue:</label>
            <textarea
            id="issueDescription"
            name="issueDescription"
            value={formData.issueDescription}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes (optional):</label>
            <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
            Submit Complaint
        </button>
        </form>

        <div className='w-full flex gap-10 mt-20 justify-end p-6'>
            <img src={g20} alt="" />
            <img src={emblem} alt="" />
            <img src={rightLogo} alt="" />
        </div>
    </>
    
  );
};

export default ComplaintForm;
