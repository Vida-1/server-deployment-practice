const { config } = require('dotenv');
const server = require('./server');

config();

server.listen(process.env.PORT || 3000);

//investigating a gituation: file change