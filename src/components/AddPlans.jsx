import React, { useEffect, useState } from 'react';
import { postPlan, getPlans, delPlan } from '../ApiCalls/PlansAPICalls';

const AddPlans = () => {

  const [planName, setPlanName] = useState(null);
  const [plans, setPlans] = useState([]);
  const [price, setPrice] = useState(null);
  const [planDuration, setDuration] = useState(null);

  const handleSubmit = async (e) => {
    console.log(planName, price, planDuration);
    try {
      const response = await postPlan({ name: planName, duration: planDuration, price });
      const data = await response.data;
      console.log(await data);
      setPlans(await data);
    } catch (e) {
      console.log(e);
    }
  }

  const loadPlans = () => {
    getPlans()
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(e => console.log(e));
  }

  useEffect(() => {
    loadPlans();
  }, [])

  const del = (id) => {
    delPlan(id).then(() => {
      loadPlans();
    })
  }

  return (
    <div className="container mt-4">
      <h2>Add Plan</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="planName" className="form-label">Plan Name</label>
              <input type="text" className="form-control" id="planName" onChange={(e) => setPlanName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price (₹)</label>
              <input type="number" className="form-control" id="price" onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Duration</label>
              <select className="form-select" id="duration" onChange={(e) => setDuration(e.target.value)}>
                <option value="">Select Duration</option>
                <option value="1">1 Month</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Plans</button>
          </form>
        </div>
      </div>
      <h3 className='text-center mt-5 mb-5'>Plans</h3>
      <div className=''>
        {
          plans.length===0 && <h5 className='text-center text-danger'>No Plans Found</h5>
        }
        {
          plans.length>0 &&
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Channel Name</th>
              <th scope="col">Cateogry</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {
              plans?.map(plan => (
                <tr key={plan.id}>
                  <th scope="row">{plan.id}</th>
                  <td>{plan.name}</td>
                  <td>{plan.duration}</td>
                  <td>{plan.price}</td>
                  <td><button><i className="bi bi-trash" onDoubleClick={() => del(plan.id)}></i></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
}
      </div>
    </div>
  );
};

export default AddPlans; 