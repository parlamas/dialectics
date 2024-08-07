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
      // TypeScript needs to know what kind of error we're dealing with
      if (error instanceof Error) {
        setMessage(`Failed to send request: ${error.message}`);
      } else {
        setMessage('Failed to send request: Unknown error');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="name">Name</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="request">Request</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded resize-y"
            id="request"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default ContentRequestForm;

