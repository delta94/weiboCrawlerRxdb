import path from "path";
const fs = require("fs");
 



 

const baseUrl: string = "https://m.weibo.cn";

const Q_CONCURRENCY: number = 1;

const WEIBO_ID = "4543515809553125";
if (!WEIBO_ID || WEIBO_ID.length === 0) {
  throw new Error("Please provide a weibo id");
}



const staticPath = path.resolve(__dirname, "../", "static");

if (!fs.existsSync(path)) {
  console.log("create folder " + staticPath);
  fs.mkdirSync(staticPath, { recursive: true });
}





const port = 5001;

export {
  baseUrl,
  Q_CONCURRENCY,
  WEIBO_ID,
  staticPath,
  port,

};
