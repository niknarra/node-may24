import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename, __dirname);

//const port = 8000;

const server = http.createServer(async (req, res) => {
  try {
    //Check if GET
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found!");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("content-type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not Allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server Error!");
  }
});

server.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
