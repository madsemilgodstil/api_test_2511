"use client";
import React, { useState } from "react";

async function Newsletter() {
  async function sendData(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    await postData(data);
  }

  return (
    <form
      action={sendData}
      className="max-w-md mx-auto bg-white p-8 m-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default Newsletter;
