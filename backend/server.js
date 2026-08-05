const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Ruta de prueba inicial
app.get('/', (req, res) => {
  res.send('API del Portafolio funcionando correctamente');
});

// Configuración de puertos y conexión
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const contactRoutes = require('./routes/contact');

app.use('/api/contact', contactRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Conectado exitosamente a MongoDB ');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => console.error('Error al conectar a MongoDB:', err));