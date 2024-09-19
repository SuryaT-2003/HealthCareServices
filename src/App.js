import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';


function App() {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(services.map(service =>
      service.id === updatedService.id ? updatedService : service
    ));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage 
          services={services} 
          addService={addService} 
          updateService={updateService} 
          deleteService={deleteService} 
        />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
