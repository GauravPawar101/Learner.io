import React, { useState } from "react";
import Card from "../components/Card";
import '../css/Home.css';

const Home = () => {
  // Sample data for cards
  const [cards] = useState([
    { id: 1, title: "React Basics", topic: "React", creator: "Alice", img: '../Images/sad-wojak.jpg' },
    { id: 2, title: "Advanced JavaScript", topic: "JavaScript", creator: "Bob" },
    { id: 3, title: "CSS Grid and Flexbox", topic: "CSS", creator: "Alice" },
    { id: 4, title: "State Management", topic: "React", creator: "Charlie" },
    { id: 5, title: "Node.js Guide", topic: "Node.js", creator: "Alice" },
    { id: 6, title: "Python for Data Science", topic: "Python", creator: "David" },
  ]);

  // State to track search inputs
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("topic"); // Default filter: topic
  const [filteredCards, setFilteredCards] = useState(cards);

  // Handle filtering on button click
  const handleSearch = () => {
    const results = cards.filter((card) =>
      card[filterBy].toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCards(results);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col">
      {/* Filter Section */}
      <div className="flex justify-between mb-6">
        {/* Left side: Topics */}
        <div className="flex gap-4">
          <span className="text-lg text-white font-semibold">Search By:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterBy("topic")}
              className="btn-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-900 transition"
            >
              Topic
            </button>
            <button
              onClick={() => setFilterBy("creator")}
              className="btn-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-900 transition"
            >
              Creator
            </button>
          </div>
        </div>

        {/* Right side: Search bar and filter */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder={`Search by ${filterBy}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
          <button
            onClick={handleSearch}
            className="btn-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-900 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-auto lg:grid-cols-3 gap-8 w-[70vw] self-center">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              topic={card.topic}
              creator={card.creator}
              img={card.img}
            />
          ))
        ) : (
          <p className="col-span-full mt-20 text-3xl text-center  text-white">
            No results found...
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
