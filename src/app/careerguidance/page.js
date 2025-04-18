"use client"
import { useState } from 'react';
// import ResultCard from './ResultCard';

export default function GuidanceForm() {
  const [form, setForm] = useState({ skills: '', interests: '', goals: '' });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('');
    setError('');
    setLoading(true);

    try {
      const res = await fetch('api/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data.advice);
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to fetch response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="skills"
          placeholder="Your Skills"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="interests"
          placeholder="Your Interests"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="goals"
          placeholder="Your Career Goals"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Get Career Advice'}
        </button>
      </form>

      {loading && (
        <p className="mt-4 text-sm text-gray-600 italic animate-pulse">
          Please wait, generating personalized advice...
        </p>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-600 font-semibold">{error}</p>
      )}

      {result && 
      <div className="mt-6 p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold mb-2">AI Career Advice</h2>
      <p>{advice}</p>
    </div>
    }
    </div>
  );
}
