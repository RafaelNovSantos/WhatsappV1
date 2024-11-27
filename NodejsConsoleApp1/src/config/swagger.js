const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'WhatsApp Support API',
            version: '1.0.0',
            description: 'API para suporte via WhatsApp'
        },
        servers: [
            { url: 'http://localhost:3000' }
        ]
    },
    apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
