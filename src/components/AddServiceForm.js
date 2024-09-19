import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function AddServiceForm({ addService }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericPrice = parseFloat(price);
    if (name && description && !isNaN(numericPrice)) {
      addService({ name, description, price: numericPrice });
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Add New Service</Typography>
      <Box sx={{ mb: 3 }}>
        <TextField 
          label="Name" 
          variant="outlined" 
          fullWidth 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </Box>
      <Box sx={{ mb: 3 }}>
        <TextField 
          label="Description" 
          variant="outlined" 
          multiline 
          rows={3} 
          fullWidth 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </Box>
      <Box sx={{ mb: 3 }}>
        <TextField 
          label="Price (INR)" 
          variant="outlined" 
          fullWidth 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
          inputProps={{ pattern: "\\d+([,.]\\d{1,2})?", title: "Enter a valid number, e.g., 12.34" }}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">Add Service</Button>
    </Box>
  );
}

export default AddServiceForm;
