import React from 'react';
import AddServiceForm from '../components/AddServiceForm';
import ServiceList from '../components/ServiceList';

function HomePage({ services, addService, updateService, deleteService }) {
  const backgroundStyle = {
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/007/948/153/non_2x/healthcare-services-word-concepts-blue-banner-medical-center-infographics-with-icons-on-color-background-isolated-typography-illustration-with-text-vector.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    paddingTop: '56px', // Space for the fixed navbar
    boxSizing: 'border-box' // Ensure padding is included in the height
  };

  const contentWrapperStyle = {
    position: 'absolute', // Position content absolutely
    top: '50%', // Center vertically
    left: '50%',
    transform: 'translate(-50%, -50%)', // Adjust to truly center it
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly less opaque for better readability
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '800px', // Set max width
    width: '100%', // Ensure it scales with the container
    boxSizing: 'border-box' // Include padding and border in the element's total width and height
  };

  return (
    <div style={backgroundStyle}>
      <div style={contentWrapperStyle}>
        <AddServiceForm addService={addService} />
        <ServiceList 
          services={services} 
          updateService={updateService} 
          deleteService={deleteService} 
        />
      </div>
    </div>
  );
}

export default HomePage;
