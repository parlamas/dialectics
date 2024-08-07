// src/app/client/ContentRequestForm.tsx
'use client';

import React, { useState } from 'react';

const ContentRequestForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="request" className="block text-sm font-medium">Request</label>
        <textarea
          id="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

export default ContentRequestForm;

