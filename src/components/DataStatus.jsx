import React from "react";

// Shown while a page's JSON data is loading, or if the fetch failed.
export default function DataStatus({ loading, error, label = "content" }) {
  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-gray-400 text-sm md:text-base">
        Loading {label}...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-red-400 text-sm md:text-base px-6 text-center">
        Couldn't load {label}: {error}
      </div>
    );
  }

  return null;
}
