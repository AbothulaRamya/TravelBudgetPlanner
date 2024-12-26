import React, { useState } from 'react';

const App = () => {
  const [tripDetails, setTripDetails] = useState({
    destination: '',
    transportation: '',
    accommodation: '',
    food: '',
    activities: '',
  });
  const [totalBudget, setTotalBudget] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const calculateBudget = () => {
    const transportationCost = parseFloat(tripDetails.transportation) || 0;
    const accommodationCost = parseFloat(tripDetails.accommodation) || 0;
    const foodCost = parseFloat(tripDetails.food) || 0;
    const activitiesCost = parseFloat(tripDetails.activities) || 0;

    setTotalBudget(
      transportationCost + accommodationCost + foodCost + activitiesCost
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}  className="container">
      <h1>Travel Budget Planner</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={tripDetails.destination}
            onChange={handleChange}
            placeholder="Enter destination"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Transportation Cost ($):
          <input
            type="number"
            name="transportation"
            value={tripDetails.transportation}
            onChange={handleChange}
            placeholder="Enter cost"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Accommodation Cost ($):
          <input
            type="number"
            name="accommodation"
            value={tripDetails.accommodation}
            onChange={handleChange}
            placeholder="Enter cost"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Food Cost ($):
          <input
            type="number"
            name="food"
            value={tripDetails.food}
            onChange={handleChange}
            placeholder="Enter cost"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Activities Cost ($):
          <input
            type="number"
            name="activities"
            value={tripDetails.activities}
            onChange={handleChange}
            placeholder="Enter cost"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <button
        onClick={calculateBudget}
        style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}
      >
        Calculate Budget
      </button>

      <h2 style={{ marginTop: '20px' }}>Total Budget: ${totalBudget.toFixed(2)}</h2>
    </div>
  );
};

export default App;