const server = require("./server");
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const { MONGO_DB_CONNECTION_STRING } = process.env


mongoose.connect(MONGO_DB_CONNECTION_STRING, {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
}).then(() => {
  server.listen(port, () => {
   console.log(`Server is listening on http://localhost:${port}`);
  });
});