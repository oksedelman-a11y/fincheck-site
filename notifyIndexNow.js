import fs from "fs";
import https from "https";

const host = "финчек.рф";

const urls = [
  "https://финчек.рф/"
];

const sentFile = "./sentUrls.json";

// читаем уже отправленные URL
let sentUrls = [];
if (fs.existsSync(sentFile)) {
  sentUrls = JSON.parse(fs.readFileSync(sentFile));
}

// фильтруем только новые
const newUrls = urls.filter(url => !sentUrls.includes(url));

if (newUrls.length === 0) {
  console.log("Все URL уже отправлены в IndexNow");
  process.exit();
}

const data = JSON.stringify({
  host: host,
  key: "fincheck-key",
  urlList: newUrls
});

const options = {
  hostname: "api.indexnow.org",
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
};

const req = https.request(options, res => {
  console.log("Status:", res.statusCode);

  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log("URL успешно отправлены");

    const updated = [...sentUrls, ...newUrls];
    fs.writeFileSync(sentFile, JSON.stringify(updated, null, 2));
  } else {
    console.log("Ошибка отправки");
  }
});

req.on("error", error => {
  console.error("Ошибка:", error.message);
});

req.write(data);
req.end();