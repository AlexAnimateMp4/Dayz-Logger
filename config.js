require("dotenv").config();

module.exports = {
  TOKEN: process.env.TOKEN, // Le TOKEN du bot | Exemple: TOKEN="ABCDEFGHIJKLlMNOPQRSTUVWXYZÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ12345678901234567890"
  LOG_LOCATION: process.env.LOG_LOCATION, // La localistion du fichier DayZServer_x64.ADM dans le dossier du serveur | Exemple: LOG_LOCATION="E:\\Jeux\\Steam\\steamapps\\common\\DayZServer\\profile\\DayZServer_x64.ADM"
  GUILD_ID: process.env.GUILD_ID, // L'ID du serveur Discord | Exemple: GUILD_ID="700693566845878366"
  GUILD_NAME: process.env.GUILD_NAME, // Le nom du serveur Discord | Exemple: GUILD_NAME="DayZ Livonia EU - FR"
  CHANNEL_NAME: process.env.CHANNEL_NAME, // Le nom du salon où envoyé les logs | Exemple: CHANNEL_NAME="logs-server"
}; // Il faut remplacer les valeurs marqués dans le fichier .env