import React from 'react';

const AddPrice = () => {
  return (
    <div className="container mt-4">
      <h2>Add Price</h2>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="planName" className="form-label">Plan Name</label>
              <input type="text" className="form-control" id="planName" />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price (₹)</label>
              <input type="number" className="form-control" id="price" />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Duration</label>
              <select className="form-select" id="duration">
                <option value="">Select Duration</option>
                <option value="1">1 Month</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Price</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPrice; 