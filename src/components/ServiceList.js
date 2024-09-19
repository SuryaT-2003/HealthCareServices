import React, { useState } from 'react';
import EditServiceForm from './EditServiceForm';

function ServiceList({ services, updateService, deleteService }) {
  const [editingService, setEditingService] = useState(null);

  return (
    <div>
      {editingService ? (
        <EditServiceForm 
          service={editingService} 
          updateService={updateService} 
          setEditingService={setEditingService} 
        />
      ) : (
        <ul className="list-group">
          {services.map(service => (
            <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{service.name}</h5>
                <p>{service.description}</p>
                <p><strong>₹{service.price.toFixed(2)}</strong></p> {/* Format price with INR symbol */}
              </div>
              <div>
                <button 
                  className="btn btn-warning" 
                  onClick={() => setEditingService(service)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-danger ms-2" 
                  onClick={() => deleteService(service.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceList;
