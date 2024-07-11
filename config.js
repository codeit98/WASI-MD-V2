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
global.owner = process.env.OWNER_NUMBER || "254792936892";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERWYXBLcTRnMVVjdGJmZko5M2dOdVhpS2ZqUUpPMVRVRVlvdk9VM3ZuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkt0cnNaYTRCUHBORTBXS2M0dmk5R3g0TFl3dEFkQlloN0JqbEQzUEptcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRjAwQStYVlhKZXgveG9JMSt3KytRRkhSRmdCRTVqbS9QUy93TTJEcGtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzYlNudWFzZGVEMlFQWWpSdHZSNG5FUyt2aFVRZjIxZTdSRGNYZGhSWmprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHQUEvdktRdVUxZ053ZFg5WHlGTWpHMmgxZWJlT0ZzWFZEZVRYT1hNMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc0MjZSSVlnUjBmRHpGTnJ3U0lqbm4xQ1ZxY2ZpdFpMQXMvZlR5b1ZVV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tITHVOZ1dISFVDM1dvdGdnVStUUkxUN0lBb2lRdStEMnVjcFpuUXpHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnB5UmI5MloveUwvMWZhcGU2bFVDMjZjU2dYMUZ5Z2NiSU9PMlVVYXV4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNBMG1KeFN4VkV4RVhvK2lpQUYxSGlOZmxDeTA2eXQ1dzl6YWlLOXVkbzR3Y25YOVFRUVlkaVdhNmtDZGZ1MVZySG9ucTJOUXJSLzBFak40OGl2N0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6Ik5QU2E4ZDRickIrV2tNRlRTY2lMcnFxYk1mcXAxZnVjb252c0N0M2Z4SWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InI4WEVvdjRFU3oyUHhtX29rUzdIeVEiLCJwaG9uZUlkIjoiMmI0MDI0NzctMDk2NC00OGQwLWI4NDEtMTQ4NTk0MmUzNjA1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYxUlRxWHpnNUVzeWVLTjJGRHIrQjNST0lRST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqd1NxL0R4cFdRbS9HNlNsTDQvejF2czNCNGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEpXQTE3VzEiLCJtZSI6eyJpZCI6IjI1NDc5MjkzNjg5Mjo1M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLMvc2TQ8y9zZPMvc2TT8y9zZPMvc2TRMy9zZPMvc2TRcy9zZNfzL3Nk0nMvc2TzL3Nk1TMvc2TIMy9zZNUzL3Nk8y9zZNFzL3Nk8y9zZNDzL3Nk8y9zZNIzL3NkyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWkwM0xVSEVPK3J2N1FHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVlNiMURwTmc0TW9ONkU2RkwxNXcwTjZZVTJlcjdBTjhueXZHL2VWQ0pHdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR0d0Rnp3SllmZzZlTUVIbWVNQnpRakR6dWNhdGd1bkxUK256MmE1MFkwRmJueCttU1dYaHZVNDBveXBLLzRoRG5CQlViVHpKRVBGUHptdWNFb0w3Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkhMQ0pwclhOUzNhSFdDNUF4blBNSkh1RVExdjh6V3lKeXkrdExHckJrTXZ4enp0b3N6Y3AxNUd5NXJTSVpNdUlPWG1naklSdW5hY2duYVhZQmluWkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzkyOTM2ODkyOjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZVbTlRNlRZT0RLRGVoT2hTOWVjTkRlbUZObnErd0RmSjhyeHYzbFFpUnMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3MDI0NjB9"
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
