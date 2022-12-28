const { config } = require('dotenv');
const server = require('server');

config();
server.listen(process.env.PORT || RENDER_SERVER);