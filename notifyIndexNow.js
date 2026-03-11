// notifyIndexNow.js
import fs from "fs";
import path from "path";
import https from "https";

const INDEXNOW_KEY = "b0b327f377da04c842c05dba2c82f973";
const KEY_LOCATION = "https://финчек.рф/b0b327f377da04c842c05dba2c82f973.txt";
const PUBLIC_DIR = "./dist/public"; // путь к твоей папке с готовым сайтом

// Функция поиска всех HTML-файлов в папке
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(filePath));
    } else if (file.endsWith(".html")) {
      results.push(filePath);
    }
  });
  return results;
}

// Функция отправки одного URL на IndexNow с повторными попытками
function notify(url, attempts = 3) {
  return new Promise((resolve) => {
    const tryRequest = (n) => {
      const apiUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=${INDEXNOW_KEY}&keyLocation=${KEY_LOCATION}`;
      https.get(apiUrl, (res) => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ ${url}`);
          resolve();
        } else {
          console.log(`⚠️ ${url} - ${res.statusCode}`);
          resolve();
        }
      }).on("error", (err) => {
        if (n > 1) {
          console.log(`⏳ ${url} - ошибка, повтор через 1с...`);
          setTimeout(() => tryRequest(n - 1), 1000);
        } else {
          console.log(`❌ ${url} - ${err.message}`);
          resolve();
        }
      });
    };
    tryRequest(attempts);
  });
}

// Главная функция
(async () => {
  const htmlFiles = getAllHtmlFiles(PUBLIC_DIR);

  for (const file of htmlFiles) {
    // формируем путь файла относительно PUBLIC_DIR
    const relativePath = path.relative(PUBLIC_DIR, file).replace(/\\/g, "/");

    // корректируем URL для главной страницы и других страниц
    const url =
      relativePath === "index.html"
        ? "https://финчек.рф/"
        : `https://финчек.рф/${relativePath.replace(/index\.html$/, "")}`;

    await notify(url);
  }
})();