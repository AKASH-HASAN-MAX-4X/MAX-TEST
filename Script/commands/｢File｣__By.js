module.exports.config = {
  name: "by",
  version: "1.0.0",
  hasPermission: 2,
  credits: "AKASH",
  description: "Leave the group",
  commandCategory: "Admin",
  usages: "out [id]",
  cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
      if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
      if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}
