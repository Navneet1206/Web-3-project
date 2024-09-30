// src/pages/Tutorials.jsx
import React from "react";

const tutorialsData = [
  {
    title: "Getting Started with Web3",
    description: "Learn the basics of Web3 and how to get started with decentralized applications.",
  },
  {
    title: "Understanding Smart Contracts",
    description: "A deep dive into smart contracts, how they work, and how to create your own.",
  },
  {
    title: "Building Your First DApp",
    description: "Step-by-step guide to building your first decentralized application on Ethereum.",
  },
  {
    title: "Exploring DeFi",
    description: "An overview of decentralized finance (DeFi) and how to participate in it.",
  },
  {
    title: "NFTs Explained",
    description: "Understanding non-fungible tokens (NFTs) and their use cases.",
  },
];

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Tutorials</h1>
      <p className="text-gray-400 mb-4">
        Welcome to the tutorials section! Here you can find various resources to help you learn about Web3, blockchain technology, and decentralized applications.
      </p>
      <ul className="space-y-4">
        {tutorialsData.map((tutorial, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">{tutorial.title}</h2>
            <p className="text-gray-400">{tutorial.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutorials;
