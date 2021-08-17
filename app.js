const express = require("express");
require("dotenv").config();
const https = require("https");
const fs = require("fs");

const privateKey = fs.readFileSync("ssl/easternapps_dyndns_org.key", "utf8");
const certificate = fs.readFileSync("ssl/easternapps_dyndns_org.crt", "utf8");
const ca = fs.readFileSync("ssl/easternapps_dyndns_org.ca-bundle", "utf8");

const credentials = { key: privateKey, cert: certificate, ca: ca };

const app = express();
const port = process.env.PORT;
app.use("/", express.static("dist"));

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port);
