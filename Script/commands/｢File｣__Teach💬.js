const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports.config = {
  name: "teach",
  version: "11.9.7",
  hasPermssion: 0,
  credits: "AKASH",
  description: "sim",
  commandCategory: "sim add",
  usages: "teach",
  cooldowns: 30,
};

  module.exports.run = async function({ api, event, args, Users, Threads, Currencies}) {
    const uid = event.senderID;
    const info = args.join(" ");
    var n = global.shaon_api
    var id = Object.keys(event.mentions)[0] || event.senderID;
  var nam = await Users.getNameUser(id);
  var ThreadInfo = await api.getThreadInfo(event.threadID);
    if (!info) {
      return api.sendMessage(`Please enter in the format:\n${global.config.PREFIX}teach hi + hello`, event.threadID);
    } else {
      const msg = info.split("+");
      const ask = msg[0].trim();
      const ans = msg[1].trim();


      const img = `https://all-api-ius8.onrender.com/sim?type=teach&ask=${ask}&ans=${ans}`

      try {
        const response = await axios.get(img);


                api.sendMessage({ 
          body: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐀dd 𝐘𝐨𝐮𝐫 𝐓𝐞𝐚𝐜𝐡✨🌺\n 𝐀𝐒𝐊 ｢💬｣: ${ask}\n𝐀𝐍𝐒｢💬｣: ${ans}`
                        }, event.threadID);
                      } catch (error) {
                        console.error(error);
                        api.sendMessage("An error occurred while  teach.", event.threadID);
                      }
                    }
                  };
