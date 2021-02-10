const fs = require(`fs`);
const path = require(`path`);
const cp = require(`child_process`);
const discord = require(`discord.js`);
const axios = require(`axios`);
const package = require(path.join(__dirname, `package.json`));
const settings = require(path.join(__dirname, `settings.js`));
const languages = require(path.join(__dirname, `languages.js`));

function CONSOLESTYLE(TYPE, AUTO, AUTOEMOJI, EMOJI, MESSAGE) {
    try {
        let style = ``;
        let resetStyle = `\x1b[0m`;
        let sucessStyle = `\x1b[32m`;
        let sucessEmoji = `✔️`;
        let infoStyle = `\x1b[34m`;
        let infoEmoji = `❔`;
        let debugStyle = `\x1b[36m`;
        let debugEmoji = `🌐`;
        let listStyle = `\x1b[35m`;
        let listEmoji = `📋`;
        let warnStyle = `\x1b[33m`;
        let warnEmoji = `⚠️`;
        let errorStyle = `\x1b[31m`;
        let errorEmoji = `❌`;

        if (TYPE) TYPE = TYPE.toLocaleLowerCase();

        if (!MESSAGE) throw new Error(languages.TRANSLATE(`MISSINGMESSAGE`));
        if (!EMOJI) EMOJI = ``;

        if (TYPE == `sucess`) {
            TYPE = sucessStyle;
            if (AUTOEMOJI == true) EMOJI = `${sucessEmoji} - `;
        } else if (TYPE == `info`) {
            TYPE = infoStyle;
            if (AUTOEMOJI == true) EMOJI = `${infoEmoji} - `;
        } else if (TYPE == `debug`) {
            TYPE = debugStyle;
            if (AUTOEMOJI == true) EMOJI = `${debugEmoji} - `;
        } else if (TYPE == `list`) {
            TYPE = listStyle;
            if (AUTOEMOJI == true) EMOJI = `${listEmoji} - `;
        } else if (TYPE == `warn`) {
            TYPE = warnStyle;
            if (AUTOEMOJI == true) EMOJI = `${warnEmoji} - `;
        } else if (TYPE == `error`) {
            TYPE = errorStyle;
            if (AUTOEMOJI == true) EMOJI = `${errorEmoji} - `;
        } else {
            AUTO = false;
            AUTOEMOJI = false;
        };

        if (AUTO == false) {
            MESSAGE = MESSAGE.replace(/#CBS#/g, `\x1b[30m`).replace(/#CBE#/g, resetStyle).replace(/#CRS#/g, `\x1b[31m`).replace(/#CRE#/g, resetStyle).replace(/#CGS#/g, `\x1b[32m`).replace(/#CGE#/g, resetStyle).replace(/#CYS#/g, `\x1b[33m`).replace(/#CYE#/g, resetStyle).replace(/#CBLS#/g, `\x1b[34m`).replace(/#CBLE#/g, resetStyle).replace(/#CMS#/g, `\x1b[35m`).replace(/#CME#/g, resetStyle).replace(/#CCS#/g, `\x1b[36m`).replace(/#CCE#/g, resetStyle).replace(/#CWS#/g, `\x1b[37m`).replace(/#CWE#/g, resetStyle).replace(/#BCBS#/g, `\x1b[40m`).replace(/#BCBE#/g, resetStyle).replace(/#BCRS#/g, `\x1b[41m`).replace(/#BCRE#/g, resetStyle).replace(/#BCGS#/g, `\x1b[42m`).replace(/#BCGE#/g, resetStyle).replace(/#BCYS#/g, `\x1b[43m`).replace(/#BCYE#/g, resetStyle).replace(/#BCBLS#/g, `\x1b[44m`).replace(/#BCBLE#/g, resetStyle).replace(/#BCMS#/g, `\x1b[45m`).replace(/#BCME#/g, resetStyle).replace(/#BCCS#/g, `\x1b[46m`).replace(/#BCCE#/g, resetStyle).replace(/#BCWS#/g, `\x1b[47m`).replace(/#BCWE#/g, resetStyle).replace(/#DIMS#/g, `\x1b[2m`).replace(/#DIME#/g, resetStyle).replace(/#BRIGHTS#/g, `\x1b[1m`).replace(/#BRIGHTE#/g, resetStyle).replace(/#UNDERLINES#/g, `\x1b[4m`).replace(/#UNDERLINEE#/g, resetStyle).replace(/#STRIKETHROUGHS#/g, `\x1b[9m`).replace(/#STRIKETHROUGHE#/g, resetStyle).replace(/#ITALICS#/g, `\x1b[3m`).replace(/#ITALICE#/g, resetStyle).replace(/#REVERSES#/g, `\x1b[7m`).replace(/#REVERSEE#/g, resetStyle).replace(/#BLINKS#/g, `\x1b[5m`).replace(/#BLINKE#/g, resetStyle).replace(/#HIDDENS#/g, `\x1b[8m`).replace(/#HIDDENE#/g, resetStyle);
        } else if (AUTO == true) style += TYPE;

        if (AUTOEMOJI == false) EMOJI = EMOJI ? `${EMOJI} - ` : ``;

        return style + EMOJI + MESSAGE + resetStyle;
    } catch (error) {
        throw console.error(CONSOLESTYLE(`error`, true, false, undefined, error));
    };
};

function CHECKOPENSOURCE() {
    if (package.files) {
        if (package.files.length) {
            console.info(CONSOLESTYLE(`info`, true, false, `📄`, languages.TRANSLATE(`FILESCHECKS`)));
            package.files.forEach((file) => {
                if (!fs.existsSync(path.join(__dirname, file))) throw new Error(languages.TRANSLATE(`FILEMISSING`).replace(`#FILE#`, file));
            });
            console.log(CONSOLESTYLE(`sucess`, true, true, undefined, languages.TRANSLATE(`VALIDFILES`)));
        };
    };
    if (package.dependencies) {
        console.info(CONSOLESTYLE(`info`, true, false, `📦`, languages.TRANSLATE(`DEPENDENCIESCHECKS`)));
        Object.keys(package.dependencies).forEach((dependencie) => {
            try {
                require(dependencie);
            } catch (error) {
                cp.exec(`npm install ${dependencie} && exit`);
                if (settings.GET(`DEBUG`) == true) console.log(CONSOLESTYLE(`debug`, true, true, undefined, languages.TRANSLATE(`INSTALLEDDEPENDENCIE`).replace(`#DEPENDENCIE#`, dependencie)));
            };
        });
        console.log(CONSOLESTYLE(`sucess`, true, true, undefined, languages.TRANSLATE(`INSTALLEDDEPENDENCIES`)));
    };
    if (Object.keys(settings).length) {
        console.info(CONSOLESTYLE(`info`, true, false, `⚙️`, languages.TRANSLATE(`SETTINGSCHECKS`)));
        Object.entries(settings).forEach(([key]) => {
            if (settings[key][`CHECK`] == true && typeof settings.GET(key) != `function`) {
                if (!settings.HAS(key)) throw new Error(languages.TRANSLATE(`SETTINGNOTVALID`).replace(`#KEY#`, key));
                else if (settings.GET(`DEBUG`) == true) console.log(CONSOLESTYLE(`debug`, true, true, undefined, `${key}: ${settings.GET(key)} (${typeof settings.GET(key)})`));
            };
        });
        return console.log(CONSOLESTYLE(`sucess`, true, true, undefined, languages.TRANSLATE(`VALIDSETTINGS`)));
    };
};

function SENDDISCORDWEBHOOKS(MESSAGE, EMBED, WEBHOOKSLINKS, WEBHOOKNAME, WEBHOOKICONURL, AUTHORNAME, AUTHORICONURL, AUTHORURL, COLOR, TITLE, TITLEURL, DESCRIPTION, THUMBNAIL, IMAGE, FIELDS, TIMESTAMP, FOOTERTEXT, FOOTERICONURL, ATTACHMENT) {
    try {
        if (WEBHOOKSLINKS) {
            return WEBHOOKSLINKS.split(`;`).forEach(async (link) => {
                return await axios.default.get(link, {
                    method: `GET`
                }).then((response) => {
                    const hook = new discord.WebhookClient(response.data.id, response.data.token);
                    if (EMBED == true) {
                        const embed = new discord.MessageEmbed()
                        if (typeof COLOR != `undefined`) embed.setColor(COLOR.toUpperCase())
                        if (typeof TITLE != `undefined` && TITLE.length) embed.setTitle(TITLE)
                        if (typeof TITLEURL != `undefined` && TITLEURL.length) embed.setURL(TITLEURL)
                        if (typeof AUTHORNAME != `undefined` && AUTHORNAME.length) embed.setAuthor(AUTHORNAME, AUTHORICONURL, AUTHORURL)
                        if (typeof DESCRIPTION != `undefined` && DESCRIPTION.length) embed.setDescription(DESCRIPTION)
                        if (typeof THUMBNAIL != `undefined` && THUMBNAIL.length) embed.setThumbnail(THUMBNAIL)
                        if (typeof IMAGE != `undefined` && IMAGE.length) embed.setImage(IMAGE)
                        if (typeof FIELDS != `undefined` && FIELDS.length) FIELDS.forEach((field) => {
                            if (typeof field != `undefined` && field.length) embed.addField(field.split(`;`)[0], field.split(`;`)[1], (field.split(`;`)[2] == `true`) ? true : (field.split(`;`)[2] == `false`) ? false : false)
                        });
                        if (typeof TIMESTAMP != `undefined`) embed.setTimestamp(new Date(TIMESTAMP).getTime() ? new Date(TIMESTAMP) : new Date())
                        if (typeof FOOTERTEXT != `undefined` && FOOTERTEXT.length) embed.setFooter(FOOTERTEXT || response.data.name, FOOTERICONURL || `https://cdn.discordapp.com/avatars/${response.data.id}/${response.data.avatar}.png?size=512`)
                        if (typeof ATTACHMENT != `undefined`) embed.attachFiles([ATTACHMENT])
                        return hook.send(MESSAGE, {
                            username: WEBHOOKNAME || response.data.name,
                            avatarURL: WEBHOOKICONURL || `https://cdn.discordapp.com/avatars/${response.data.id}/${response.data.avatar}.png?size=512`,
                            embeds: [embed]
                        });
                    } else if (EMBED == false) {
                        return hook.send(MESSAGE, {
                            username: WEBHOOKNAME || response.data.name,
                            avatarURL: WEBHOOKICONURL || `https://cdn.discordapp.com/avatars/${response.data.id}/${response.data.avatar}.png?size=512`
                        });
                    };
                });
            });
        };
    } catch (error) {
        return console.error(CONSOLESTYLE(`error`, true, false, undefined, error));
    };
};

function CHECKURL(LINK) {
    try {
        return resolve(Boolean(new URL(LINK)));
    } catch (error) {
        return reject(false);
    };
};

module.exports.CONSOLESTYLE = CONSOLESTYLE;
module.exports.CHECKOPENSOURCE = CHECKOPENSOURCE;
module.exports.SENDDISCORDWEBHOOKS = SENDDISCORDWEBHOOKS;
module.exports.CHECKURL = CHECKURL;