var app = require('./config/custom-express')();

app.listen(3000, () => console.log ('GOOD! Server running on localhost:3000'));