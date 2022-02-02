module.exports = {
  name: "x1",
  async execute(message) {
    let user = message.mentions.users.first();
    const Canvas = require("canvas");
    const { MessageAttachment } = require("discord.js");
    const canvas = Canvas.createCanvas(429, 429);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://i.im.ge/2021/09/24/T3cZmz.png"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(user.avatarURL({ format: "png" }));
    context.drawImage(avatar, 170, 50, 150, 150);

    const attachment = new MessageAttachment(canvas.toBuffer(), "x1.png");

    message.channel.send({ files: [attachment] });
  },
};