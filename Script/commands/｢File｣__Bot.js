const fs = global.nodemodule["fs-extra"];
const moment = require("moment-timezone");
const axios = require("axios");
const path = require("path");

module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermission: 0,
  credits: "AKASH",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, Threads, Users }) {
  const { threadID, messageID, body } = event;
  const time = moment.tz("Asia/Dhaka").format("HH:mm:ss L");
  const senderID = event.senderID;
  const senderName = await Users.getNameUser(senderID);

  const responses = ["জ্বী বলুন আপনার জন্য কী করতে পারি.....//"," কি গো সোনা আমাকে ডাকছ কেনো....//","বার বার আমাকে ডাকস কেন....//😡","আরে বলেন শুনছি তো....//","হুম জান তোমারে উম্মমাহ.....//😘"," আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি","আমাকে এতো না ডেকে বস আকাশকে একটা গফ দে.....//🙄 \nবেডা জন্ম থেকে সিঙ্গেল...!!","এতো ডাকলে রাগ হয় আমার....??","আর একবার Bot Bot করলে দৌরানি দিব কিন্তু.....//🙂"];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  if (body && body.includes("Bot")) {
    try {
      const imgPath = path.resolve(__dirname, `./cache/${senderID}.jpg`);
      const dpResponse = await axios.get(`https://graph.facebook.com/${senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {
        responseType: "arraybuffer",
      });

      fs.writeFileSync(imgPath, Buffer.from(dpResponse.data));

      const msg = {
        body: `╭•┄┅═══❁MAX❁═══┅┄•╮\n ${randomResponse}\n╰•┄┅═══❁MAX❁═══┅┄•╯\n\n•—»✨${senderName}✨«—•`,
        attachment: fs.createReadStream(imgPath),
      };

      api.sendMessage(msg, threadID, (err) => {
        if (err) {
          console.error("Error sending message:", err);
          return;
        }

        fs.unlinkSync(imgPath);
      });
    } catch (error) {
      console.error("Error fetching or sending profile picture:", error);
    }
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
