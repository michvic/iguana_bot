/**
 * O Comando "botinfo"mostrará informações do bot
 */

const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const serveName = process.env.NOME_MINE
    const serveLink = process.env.LINK_MINE
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }

    const embed = new Discord.MessageEmbed()
      .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
      .setThumbnail(botAvatar)
      .setAuthor('🤖 Iguanajoga On')
      .addField('**Nome do serve**', serveName)
      .addField('**Link do serve**', serveLink)

      .setFooter(`2020 © ${client.user.username}.`)
      .setTimestamp()

    if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'iguanajoga',
      category: 'Info',
      description: 'Notifica que o servidor minecraft está online.',
      usage: 'iguanajoga'
    }
  }
}