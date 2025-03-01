import React, { useState, useEffect } from 'react';

import { getChannels, postChannel } from "../ApiCalls/apiCall";

const AddChannels = () => {

  const [channel, setChannel] = useState("");
  const [cat, setCat] = useState(0);

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getChannels()
      .then(res => res.json())
      .then(data => setChannels(data))
      .catch(e => console.log(e));
  }, [])

  const handleSubmit = async (e) => {
    console.log("submitting");
    try {
      const response = await postChannel({ name: channel, category: cat });
      const data = await response.data;
      setChannels(await data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container mt-4">
      <h2>Add Channels</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="channelName" className="form-label">Channel Name</label>
              <input type="text" className="form-control" id="channelName" value={channel} onChange={(e) => setChannel(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="channelCategory" className="form-label">Category</label>
              <select className="form-select" id="channelCategory" onChange={(e) => setCat(e.target.value)}>
                <option value="">Select Category</option>
                <option value="ent">Entertainment</option>
                <option value="sports">Sports</option>
                <option value="news">News</option>
                <option value="movies">Movies</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Channel</button>
          </form>
        </div>
      </div>
      <h3 className='text-center mt-5 mb-5'>Channels</h3>
      <div className=''>
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
              channels?.map(channel => (
                <tr key={channel.id}>
                  <th scope="row">{channel.id}</th>
                  <td>{channel.name}</td>
                  <td>{channel.category}</td>
                  <td></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddChannels; 