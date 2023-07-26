const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//Setting up the server
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setting up routing
app.use("/user", require("./routes/User"));
app.use("/uploadFiles", require("./routes/locallyFilesUpload"));
app.use("/upZip", require("./routes/ZipExtractBE"));
app.use("/flstruct", require("./routes/FolderStructureDisplayBE"));
app.use("/DMT", require("./routes/DummyTextBE"));
app.use("/QRCodeGenerator", require("./routes/QRCodeGeneratorBE"));
app.use("/ProductQR", require("./routes/ProductQRBE"));
app.use("/TextToQR", require("./routes/TextToQRBE"));

app.listen(PORT, () => {
  console.log("Server up with port : " + PORT);
});

//Setting up the database connection
const URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", true);
mongoose.connect(URL, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully!");
});
