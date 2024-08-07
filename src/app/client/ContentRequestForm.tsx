// src/app/client/ContentRequestForm.tsx

import React, { useState } from 'react';

const ContentRequestForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, request }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setMessage('Request sent successfully!');
      setName('');
      setEmail('');
      setRequest('');
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`Failed to send request: ${error.message}`);
      } else {
        setMessage('Failed to send request: Unknown error');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="request">Request:</label>
        <textarea
          id="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ContentRequestForm;
