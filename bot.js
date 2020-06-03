const Tail = require("tail").Tail; // Importe le module tail
const Discord = require("discord.js"); // Importe le module discord.js
const Constants = require("discord.js/src/util/Constants");
const {
  TOKEN,
  LOG_LOCATION,
  GUILD_ID,
  GUILD_NAME,
  CHANNEL_NAME,
} = require("./config.js"); // Permet de récuperé les valeurs inscrites dans le fichier config.js
const client = new Discord.Client(); // Définie le client (bot)
const PACKAGE = require("./package.json");

let logsQueue = []; // Liste les logs
let logBeingTreated = false; // NE PAS MODIFIER !!!

client.once("ready", () => {
  let activities = [
      `Crée par ${PACKAGE.author} !`,
      `Pour le serveur: ${GUILD_NAME}`,
    ],
    i = 0;

  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING",
      }),
    15000
  );

  const tail = new Tail(LOG_LOCATION, {
    useWatchFile: true,
  });

  tail
    .on("line", (data) => {
      logsQueue.push(getLog(data));
      treatLogs();
    })
    .on("error", function (error) {
      console.log("Erreur: ", error);
    });

  console.log("Dayz Logger est prêt !");
}); // Ceci est l'évènement 'ready (prêt)' quand il est exécutez il définie un statut personnéliés et collecte les donnés du fichier logs définie dans config.js

client.login(TOKEN); // Permet de connecté le bot à l'API de Discord

function getLog(data) {
  const splittedData = data.split("|");

  return {
    hour: splittedData[0].trim(),
    data: splittedData[1].trim(),
    type: getLogType(splittedData[1]),
  };
} // Permet de collecter les donnée du fichier logs définie dans config.js

function getLogType(data) {
  if (
    data.includes("hit by") ||
    data.includes("is unconscious") ||
    data.includes("regained consciousness")
  ) {
    return Constants.Colors["ORANGE"];
  } else if (
    data.includes("killed by") ||
    data.includes("died.") ||
    data.includes("comitted suicide") ||
    data.includes("bled out")
  ) {
    return Constants.Colors["RED"];
  } else if (data.includes('Chat("') || data.includes("PlayerList log")) {
    return Constants.Colors["BLUE"];
  } else if (data.includes("is connected")) {
    return Constants.Colors["DARK_GREEN"];
  } else if (data.includes("has been disconnected")) {
    return Constants.Colors["DARK_RED"];
  } else if (data.includes("[COT]")) {
    return Constants.Colors["DARK_ORANGE"];
  } else if (data.includes("placed")) {
    return Constants.Colors["PURPLE"];
  } else if (data.includes("built") || data.includes("dismantled")) {
    return Constants.Colors["LUMINOUS_VIVID_PINK"];
  } else if (data.includes("PLAYER REPORT")) {
    return Constants.Colors["GOLD"];
  } else {
    return Constants.Colors["BLURPLE"];
  }
} // Permet de définir la couleur de l'embed

function treatLogs() {
  if (logBeingTreated || !logsQueue.length) return;

  logBeingTreated = true;
  const log = logsQueue.shift();
  const guild = client.guilds.get(GUILD_ID);
  const channel = guild.channels.find(
    (channel) => CHANNEL_NAME === channel.name
  );
  const messageId = channel.lastMessageID;

  if (messageId) {
    channel
      .fetchMessage(messageId)
      .then((lastMessage) => {
        sendMessage(channel, log);
      })
      .catch(() => {
        sendMessage(channel, log);
      });
  } else {
    sendMessage(channel, log);
  }
} // Collecte les information à propos du logs

function endTreatLog() {
  logBeingTreated = false;
  treatLogs();
} // Permet d'exécuter l'envoie du message

function sendMessage(channel, log) {
  const embed = new Discord.RichEmbed(); // Constante permettant de crée un embed Discord
  embed.setColor(log.type); // La couleur est définie en fonction des évènements
  embed.setTitle(`${log.hour}`); // La date du logs
  embed.setDescription(
    `${log.data
      .replace("Player", "Joueur")
      .replace("is connected", "est connecté")
      .replace("hit by", "a pris des dégâts de")
      .replace("is unconscious", "est inconscient")
      .replace("regained consciousness", "a repris connaissance")
      .replace("killed by", "tué par")
      .replace("died.", "est décédés.")
      .replace("comitted suicide", `s'est suicidé`)
      .replace("bled out", "saigné")
      .replace("has been disconnected", "est déconnecté")
      .replace("placed", "placés")
      .replace("built", "construit")
      .replace("dismantled", "démonté")
      .replace("DEAD", "décédés")}`
  ); // Si il manque de la tradcution mp moi
  embed.setTimestamp(); // Pour afficher la date dans le message de fin
  embed.setFooter(`${client.user.tag}`, client.user.displayAvatarURL); // Affiche l'image et le nom du bot dans le message de fin
  channel.send(embed).then(endTreatLog);
} // permet d'envoyer l'embed dans le salon définie dans le fichier config.js
