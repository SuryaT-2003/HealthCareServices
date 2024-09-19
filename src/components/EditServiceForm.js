import React, { useState } from 'react';

function EditServiceForm({ service, updateService, setEditingService }) {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService({ ...service, name, description, price });
    setEditingService(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="mb-4">Edit Service</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea 
          className="form-control" 
          rows="3" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input 
          type="number" 
          className="form-control" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Update Service</button>
      <button 
        type="button" 
        className="btn btn-secondary ms-2" 
        onClick={() => setEditingService(null)}
      >
        Cancel
      </button>
    </form>
  );
}

export default EditServiceForm;
