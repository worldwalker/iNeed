const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const connectionString = process.env.MONGO_URL;
mongoose.set("strictQuery", false);

mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, goose) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB was successfully connected");

      const server = require("./app");
      let PORT = process.env.PORT || 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is successfully running on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
