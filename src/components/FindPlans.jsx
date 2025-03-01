import React, { useState } from 'react';

const FindPlans = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="container mt-4">
      <h2>Find Plans</h2>
      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div className="row">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by plan name, price range, or duration..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <button type="submit" className="btn btn-primary w-100">
                  Search Plans
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Filter Options</h5>
              <div className="mb-3">
                <label className="form-label">Price Range</label>
                <select className="form-select">
                  <option value="">All Prices</option>
                  <option value="0-299">₹0 - ₹299</option>
                  <option value="300-599">₹300 - ₹599</option>
                  <option value="600+">₹600+</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Duration</label>
                <select className="form-select">
                  <option value="">All Durations</option>
                  <option value="1">1 Month</option>
                  <option value="3">3 Months</option>
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5>Search Results</h5>
              <p className="text-muted">Enter search criteria to find plans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPlans; 