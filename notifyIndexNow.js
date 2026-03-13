import https from "https";

const host = "финчек.рф";

const key = "b0b327f377da04c842c05dba2c82f973";

const keyLocation =
  "https://финчек.рф/b0b327f377da04c842c05dba2c82f973.txt";

const urlList = [
  "https://финчек.рф/"
];

const data = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList
});

const options = {
  hostname: "api.indexnow.org",
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  console.log("Status:", res.statusCode);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error("Error:", error);
});

req.write(data);
req.end();