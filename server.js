const server = require('express')();
const basicAuth = require('express-basic-auth');

function main() {
  
  server.use(basicAuth({
      users: { 'admin1': 'supersecret' },    
      challenge: true
  }));

  const port = process.env.PORT || 8000;
  server.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();
