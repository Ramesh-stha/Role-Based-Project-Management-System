"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddMemberProps {
  closeModal: () => void; // Function to close the modal
}

interface MemberForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  role:string;
}

const AddManager: React.FC<AddMemberProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState<MemberForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role:"Manager"
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Manager added:", formData);
    alert(`Manager ${formData.name} added successfully!`);
   console.log(formData);
    // Close the modal automatically
    closeModal();

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      role:"Manager"
    });
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add Manager</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />

        {/* Address */}
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none"
          rows={3}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        {/* Role */}
        <input type="hidden" name="role" value="Manager" />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors w-full"
        >
          Add Manager
        </button>
      </form>
    </div>
  );
};

export default AddManager;