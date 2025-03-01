import React, { useState, useEffect } from 'react';

const DisplayPlans = () => {

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8899/plans')
      .then(response => response.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Plans</h2>
      <div className="row">
        {plans.map(plan => (
          <div key={plan.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{plan.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">₹{plan.price}</h6>
                <p className="card-text">
                  Duration: {plan.duration}<br />
                  Channels: {plan.channels}
                </p>
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayPlans; 