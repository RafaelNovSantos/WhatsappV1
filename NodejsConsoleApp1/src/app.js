// src/app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger');
const messageRoutes = require('./routes/messageRoutes');
const lastMessagesRoutes = require('./routes/lastMessages');
const rootRouter = require('./routes/rootRoute');
const { client } = require('./config/whatsapp');  // Importa o cliente WhatsApp
const connectToDatabase = require('./config/dbConnect');

const clienteRoutes = require('./routes/clienteRoutes');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', messageRoutes);
app.use('/api', lastMessagesRoutes);
app.use('/api', clienteRoutes);
app.use("/", rootRouter)
connectToDatabase();

// Middleware de tratamento de erros
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);


module.exports = app;
