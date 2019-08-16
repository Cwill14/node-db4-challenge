const server = require('./server.js');

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\n* running on port ${port} *\n`));

// https://www.youtube.com/watch?v=PV3_UHG73oQ