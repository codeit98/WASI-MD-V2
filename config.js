//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "13305972014@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Peywa/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "13305972014";
global.owner = process.env.OWNER_NUMBER || "13305972014";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEI0enlhS3kxNmZrdkIzN1FRZkpVTk9xekd5T1VLeDBtUFlZd3lhUDcyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZPSE1UbVdXZmJ5WGw0Z2ZKYyszRHZ4dDYvakhxZmFaRlJFcXJkQWxIYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTlJWOXlGSURheXFOTStkcCtEOTVLSHV2UWpUODg1dDRKRWNhV0FNbUdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZHFFSERaVzZqeFowQnNQQlJvQnFoc09aZFJPVVhpZ0EyUFdlamFUajNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJSGQyY09Vbk4vb0RTOVBCdWYvMHRDWElVQVordGF3dG1MTHBCblI3Rms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVjRnFScmdlWEY5dWhkdjRJT3o3ekJYb3U4VzNUYkVZYWJVYllFVDhZQTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05oWVc4RzBSY3ROWGdSZkZnelloMFlTcDhMZ080eks1TUZ2YnNQbjhraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicS9kTzd5NTBUQzJGelBuS0xuTUl2R2szQXI5S3MvMnA4Vy9ueU9ZZzFEMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino5dExqcjJTa0Nncy9YK0ZmOTg2bktEWUpCMWhBTWkrRlBMNVlzVXNvdHF5Y2RjVmNhME1NZzI4ZTN4R0RRMXdkcEhBSUIvZkxoUlk4RzdrQ3E1SWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IkZlWlUxT3JwcGM3UXRhb0JLV0tRUUtPTmp5aFpCZUQxeU1VR1NLOG5VM009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVjQklVSWdPUzR5UGxzaFI5amNnTVEiLCJwaG9uZUlkIjoiYmNmNjU0MDQtZjkxNS00MDc4LTk5NjktNTE0NTE1ZWJkODVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZsYnQwL2pMcXNmeDFCWHUwUWZMdlFuY0FPRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMVd3RlJqNzhORS82M1drTHNVY3pueW54dDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjYyUlBKVzkiLCJtZSI6eyJpZCI6IjEzMzA1OTcyMDE0OjMwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLR3Uwb29DRUtHS3VyUUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIcXh5VG5nV0pLYXZUK0hHMnE1VWZCemY0bmRLQkxNY09rUXJSYlFlQlhBPSIsImFjY291bnRTaWduYXR1cmUiOiJGZlBwTFNGNnkrR3BRa2dDNnhmODFrdWpVdnhjRnVlWVg5NXBGTGh5MEExUythQ3UvZ0hPMnVBWDYwaGdCUHVUc081MmRac1crdURmQVJmVGJIVjlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibHRIcENhc2trU0svWEdCdFI0ZnNuaEhzcERoTXZuYmM1NTVxZGtJOTdvVUxuNXIxTDJPcWdKQklibUQ4dG94OWRZTEFER3FpNjdKbXRmVUZ2N3JUaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMzMwNTk3MjAxNDozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSNnNjazU0RmlTbXIwL2h4dHF1Vkh3YzMrSjNTZ1N6SERwRUswVzBIZ1Z3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjE2MjM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIyTiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-͓̽C͓͓̽̽O͓͓̽̽D͓͓̽̽E͓̽_͓̽I͓͓̽̽T͓̽ ͓̽B͓͓̽̽O͓͓̽̽T͓̽😍",
  author: process.env.PACK_AUTHER || "𝑴𝑹. 𝑷𝑬𝒀𝑾𝑨",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "͓̽C͓͓̽̽O͓͓̽̽D͓͓̽̽E͓̽_͓̽I͓͓̽̽T͓̽ ͓̽B͓͓̽̽O͓͓̽̽T͓̽",
  ownername: process.env.OWNER_NAME || "𝑴𝑹. 𝑷𝑬𝒀𝑾𝑨",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
