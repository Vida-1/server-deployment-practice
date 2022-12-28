const { config } = require('dotenv');
const server = require('server.js');

config();
server.listen(process.env.PORT || RENDER_SERVER);