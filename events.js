const path = require(`path`);
const events = require(`events`);
const discord = require(`discord.js`);
const EVENTEMITTER = new events.EventEmitter();
const functions = require(path.join(__dirname, `functions.js`));
const settings = require(path.join(__dirname, `settings.js`));
const languages = require(path.join(__dirname, `languages.js`));

EVENTEMITTER.on(`READY`, (DATA) => {
    return;
});

EVENTEMITTER.on(`CONNECTED`, (DATA) => {
    if (settings.GET(`CONNECTEDDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`CONNECTEDINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`CONNECTEDINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`CONNECTEDDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`CONNECTEDDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`CONNECTEDDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`CONNECTEDCOLOR`), languages.TRANSLATE(`CONNECTED`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined], DATA.DATE, settings.GET(`CONNECTEDDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`CONNECTEDDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`DISCONNECTED`, (DATA) => {
    if (settings.GET(`DISCONNECTEDDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`DISCONNECTEDINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`DISCONNECTEDINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`DISCONNECTEDDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`DISCONNECTEDDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DISCONNECTEDDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`DISCONNECTEDCOLOR`), languages.TRANSLATE(`DISCONNECTED`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined], DATA.DATE, settings.GET(`DISCONNECTEDDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DISCONNECTEDDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`CHAT`, (DATA) => {
    if (settings.GET(`CHATDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`CHATINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`CHATINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const MESSAGETEXT = `${languages.TRANSLATE(`MESSAGE`)}`.replace(`#INLINE#`, settings.GET(`MESSAGEINLINE`) || settings.GET(`CHATINLINE`)).replace(`#MESSAGE#`, DATA.MESSAGE);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`CHATDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`CHATDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`CHATDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`CHATCOLOR`), languages.TRANSLATE(`CHAT`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`MESSAGE`) == true) ? MESSAGETEXT : undefined], DATA.DATE, settings.GET(`CHATDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`CHATDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`CONSCIOUS`, (DATA) => {
    if (settings.GET(`CONSCIOUSDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`CONSCIOUSINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`CONSCIOUSINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`CONSCIOUSINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`CONSCIOUSDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`CONSCIOUSDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`CONSCIOUSDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`CONSCIOUSCOLOR`), languages.TRANSLATE(`CONSCIOUS`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined], DATA.DATE, settings.GET(`CONSCIOUSDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`CONSCIOUSDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`UNCONSCIOUS`, (DATA) => {
    if (settings.GET(`UNCONSCIOUSDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`UNCONSCIOUSINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`UNCONSCIOUSINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`UNCONSCIOUSINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`UNCONSCIOUSDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`UNCONSCIOUSDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`UNCONSCIOUSDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`UNCONSCIOUSCOLOR`), languages.TRANSLATE(`UNCONSCIOUS`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined], DATA.DATE, settings.GET(`UNCONSCIOUSDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`UNCONSCIOUSDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`HIT_SHOT`, (DATA) => {
    if (settings.GET(`HITSHOTDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const PLAYERHPTEXT = `${languages.TRANSLATE(`PLAYERHP`)}`.replace(`#INLINE#`, settings.GET(`PLAYERHPINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#PLAYERHP#`, DATA.PLAYERHP);
            const AUTHORTEXT = `${languages.TRANSLATE(`AUTHOR`)}`.replace(`#INLINE#`, settings.GET(`AUTHORINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#AUTHOR#`, DATA.AUTHOR);
            const AUTHORIDTEXT = `${languages.TRANSLATE(`AUTHORID`)}`.replace(`#INLINE#`, settings.GET(`AUTHORIDINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#AUTHORID#`, DATA.AUTHORID);
            const AUTHORPOSITIONSPLIT0 = DATA.AUTHORPOSITION.split(`,`)[0].trim();
            const AUTHORPOSITIONSPLIT1 = DATA.AUTHORPOSITION.split(`,`)[1].trim();
            const AUTHORPOSITIONTEXT = `${languages.TRANSLATE(`AUTHORPOSITION`)}`.replace(`#INLINE#`, settings.GET(`AUTHORPOSITIONINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#AUTHORPOSITION#`, DATA.AUTHORPOSITION).replace(`#AUTHORPOSITIONSPLIT0#`, AUTHORPOSITIONSPLIT0).replace(`#AUTHORPOSITIONSPLIT1#`, AUTHORPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const PARTBODYTEXT = `${languages.TRANSLATE(`PARTBODY`)}`.replace(`#INLINE#`, settings.GET(`PARTBODYINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#PARTBODY#`, DATA.PARTBODY);
            const HPREMOVEDTEXT = `${languages.TRANSLATE(`HPREMOVED`)}`.replace(`#INLINE#`, settings.GET(`HPREMOVEDINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#HPREMOVED#`, DATA.HPREMOVED);
            const BALLUSEDTEXT = `${languages.TRANSLATE(`BALLUSED`)}`.replace(`#INLINE#`, settings.GET(`BALLUSEDINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#BALLUSED#`, DATA.BALLUSED);
            const WEAPONUSEDTEXT = `${languages.TRANSLATE(`WEAPONUSED`)}`.replace(`#INLINE#`, settings.GET(`WEAPONUSEDINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#WEAPONUSED#`, DATA.WEAPONUSED);
            const DISTANCEMETERSTEXT = `${languages.TRANSLATE(`DISTANCEMETERS`)}`.replace(`#INLINE#`, settings.GET(`DISTANCEMETERSINLINE`) || settings.GET(`HITSHOTINLINE`)).replace(`#DISTANCEMETERS#`, DATA.DISTANCEMETERS);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`HITSHOTDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`HITSHOTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITSHOTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`HITSHOTCOLOR`), languages.TRANSLATE(`HITSHOT`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`PLAYERHP`) == true) ? PLAYERHPTEXT : undefined, (settings.GET(`AUTHOR`) == true) ? AUTHORTEXT : undefined, (settings.GET(`AUTHORID`) == true) ? AUTHORIDTEXT : undefined, (settings.GET(`AUTHORPOSITION`) == true) ? AUTHORPOSITIONTEXT : undefined, (settings.GET(`PARTBODY`) == true) ? PARTBODYTEXT : undefined, (settings.GET(`HPREMOVED`) == true) ? HPREMOVEDTEXT : undefined, (settings.GET(`BALLUSED`) == true) ? BALLUSEDTEXT : undefined, (settings.GET(`WEAPONUSED`) == true) ? WEAPONUSEDTEXT : undefined, (settings.GET(`DISTANCEMETERS`) == true) ? DISTANCEMETERSTEXT : undefined], DATA.DATE, settings.GET(`HITSHOTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITSHOTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`HIT_MELEE_PLAYER`, (DATA) => {
    if (settings.GET(`HITMELEEPLAYERDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const PLAYERHPTEXT = `${languages.TRANSLATE(`PLAYERHP`)}`.replace(`#INLINE#`, settings.GET(`PLAYERHPINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#PLAYERHP#`, DATA.PLAYERHP);
            const AUTHORTEXT = `${languages.TRANSLATE(`AUTHOR`)}`.replace(`#INLINE#`, settings.GET(`AUTHORINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#AUTHOR#`, DATA.AUTHOR);
            const AUTHORIDTEXT = `${languages.TRANSLATE(`AUTHORID`)}`.replace(`#INLINE#`, settings.GET(`AUTHORIDINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#AUTHORID#`, DATA.AUTHORID);
            const AUTHORPOSITIONSPLIT0 = DATA.AUTHORPOSITION.split(`,`)[0].trim();
            const AUTHORPOSITIONSPLIT1 = DATA.AUTHORPOSITION.split(`,`)[1].trim();
            const AUTHORPOSITIONTEXT = `${languages.TRANSLATE(`AUTHORPOSITION`)}`.replace(`#INLINE#`, settings.GET(`AUTHORPOSITIONINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#AUTHORPOSITION#`, DATA.AUTHORPOSITION).replace(`#AUTHORPOSITIONSPLIT0#`, AUTHORPOSITIONSPLIT0).replace(`#AUTHORPOSITIONSPLIT1#`, AUTHORPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const PARTBODYTEXT = `${languages.TRANSLATE(`PARTBODY`)}`.replace(`#INLINE#`, settings.GET(`PARTBODYINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#PARTBODY#`, DATA.PARTBODY);
            const HPREMOVEDTEXT = `${languages.TRANSLATE(`HPREMOVED`)}`.replace(`#INLINE#`, settings.GET(`HPREMOVEDINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#HPREMOVED#`, DATA.HPREMOVED);
            const WEAPONUSEDTEXT = `${languages.TRANSLATE(`WEAPONUSED`)}`.replace(`#INLINE#`, settings.GET(`WEAPONUSEDINLINE`) || settings.GET(`HITMELEEPLAYERINLINE`)).replace(`#WEAPONUSED#`, DATA.WEAPONUSED);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`HITMELEEPLAYERDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`HITMELEEPLAYERDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITMELEEPLAYERDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`HITMELEEPLAYERCOLOR`), languages.TRANSLATE(`HITMELEEPLAYER`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`PLAYERHP`) == true) ? PLAYERHPTEXT : undefined, (settings.GET(`AUTHOR`) == true) ? AUTHORTEXT : undefined, (settings.GET(`AUTHORID`) == true) ? AUTHORIDTEXT : undefined, (settings.GET(`AUTHORPOSITION`) == true) ? AUTHORPOSITIONTEXT : undefined, (settings.GET(`PARTBODY`) == true) ? PARTBODYTEXT : undefined, (settings.GET(`HPREMOVED`) == true) ? HPREMOVEDTEXT : undefined, (settings.GET(`WEAPONUSED`) == true) ? WEAPONUSEDTEXT : undefined], DATA.DATE, settings.GET(`HITMELEEPLAYERDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITMELEEPLAYERDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`HIT_MELEE`, (DATA) => {
    if (settings.GET(`HITMELEEDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`HITMELEEINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`HITMELEEINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`HITMELEEINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const PLAYERHPTEXT = `${languages.TRANSLATE(`PLAYERHP`)}`.replace(`#INLINE#`, settings.GET(`PLAYERHPINLINE`) || settings.GET(`HITMELEEINLINE`)).replace(`#PLAYERHP#`, DATA.PLAYERHP);
            const AUTHORTEXT = `${languages.TRANSLATE(`AUTHOR`)}`.replace(`#INLINE#`, settings.GET(`AUTHORINLINE`) || settings.GET(`HITMELEEINLINE`)).replace(`#AUTHOR#`, DATA.AUTHOR);
            const PARTBODYTEXT = `${languages.TRANSLATE(`PARTBODY`)}`.replace(`#INLINE#`, settings.GET(`PARTBODYINLINE`) || settings.GET(`HITMELEEINLINE`)).replace(`#PARTBODY#`, DATA.PARTBODY);
            const HPREMOVEDTEXT = `${languages.TRANSLATE(`HPREMOVED`)}`.replace(`#INLINE#`, settings.GET(`HPREMOVEDINLINE`) || settings.GET(`HITMELEEINLINE`)).replace(`#HPREMOVED#`, DATA.HPREMOVED);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`HITMELEEDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`HITMELEEDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITMELEEDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`HITMELEECOLOR`), languages.TRANSLATE(`HITMELEE`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`PLAYERHP`) == true) ? PLAYERHPTEXT : undefined, (settings.GET(`AUTHOR`) == true) ? AUTHORTEXT : undefined, (settings.GET(`PARTBODY`) == true) ? PARTBODYTEXT : undefined, (settings.GET(`HPREMOVED`) == true) ? HPREMOVEDTEXT : undefined], DATA.DATE, settings.GET(`HITMELEEDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITMELEEDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`HIT_FALL`, (DATA) => {
    if (settings.GET(`HITFALLDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`HITFALLINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`HITFALLINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`HITFALLINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const PLAYERHPTEXT = `${languages.TRANSLATE(`PLAYERHP`)}`.replace(`#INLINE#`, settings.GET(`PLAYERHPINLINE`) || settings.GET(`HITFALLINLINE`)).replace(`#PLAYERHP#`, DATA.PLAYERHP);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`HITFALLDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`HITFALLDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITFALLDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`HITFALLCOLOR`), languages.TRANSLATE(`HITFALL`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`PLAYERHP`) == true) ? PLAYERHPTEXT : undefined], DATA.DATE, settings.GET(`HITFALLDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITFALLDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`HIT_GENERIC`, (DATA) => {
    if (settings.GET(`HITGENERICDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`HITGENERICINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`HITGENERICINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`HITGENERICINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const PLAYERHPTEXT = `${languages.TRANSLATE(`PLAYERHP`)}`.replace(`#INLINE#`, settings.GET(`PLAYERHPINLINE`) || settings.GET(`HITGENERICINLINE`)).replace(`#PLAYERHP#`, DATA.PLAYERHP);
            const OBJECTTEXT = `${languages.TRANSLATE(`OBJECT`)}`.replace(`#INLINE#`, settings.GET(`OBJECTINLINE`) || settings.GET(`HITGENERICINLINE`)).replace(`#OBJECT#`, DATA.OBJECT);
            const TOOLTEXT = `${languages.TRANSLATE(`TOOL`)}`.replace(`#INLINE#`, settings.GET(`TOOLINLINE`) || settings.GET(`HITGENERICINLINE`)).replace(`#TOOL#`, DATA.TOOL);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`HITGENERICDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`HITGENERICDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITGENERICDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`HITGENERICCOLOR`), languages.TRANSLATE(`HITGENERIC`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`PLAYERHP`) == true) ? PLAYERHPTEXT : undefined, (settings.GET(`OBJECT`) == true) ? OBJECTTEXT : undefined, (settings.GET(`TOOL`) == true) ? TOOLTEXT : undefined], DATA.DATE, settings.GET(`HITGENERICDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`HITGENERICDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`DEATH_SHOT`, (DATA) => {
    if (settings.GET(`DEATHSHOTDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`DEATHSHOTINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`DEATHSHOTINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`DEATHSHOTINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const AUTHORTEXT = `${languages.TRANSLATE(`AUTHOR`)}`.replace(`#INLINE#`, settings.GET(`AUTHORINLINE`) || settings.GET(`DEATHSHOTINLINE`)).replace(`#AUTHOR#`, DATA.AUTHOR);
            const AUTHORIDTEXT = `${languages.TRANSLATE(`AUTHORID`)}`.replace(`#INLINE#`, settings.GET(`AUTHORIDINLINE`) || settings.GET(`DEATHSHOTINLINE`)).replace(`#AUTHORID#`, DATA.AUTHORID);
            const AUTHORPOSITIONSPLIT0 = DATA.AUTHORPOSITION.split(`,`)[0].trim();
            const AUTHORPOSITIONSPLIT1 = DATA.AUTHORPOSITION.split(`,`)[1].trim();
            const AUTHORPOSITIONTEXT = `${languages.TRANSLATE(`AUTHORPOSITION`)}`.replace(`#INLINE#`, settings.GET(`AUTHORPOSITIONINLINE`) || settings.GET(`DEATHSHOTINLINE`)).replace(`#AUTHORPOSITION#`, DATA.AUTHORPOSITION).replace(`#AUTHORPOSITIONSPLIT0#`, AUTHORPOSITIONSPLIT0).replace(`#AUTHORPOSITIONSPLIT1#`, AUTHORPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const WEAPONUSEDTEXT = `${languages.TRANSLATE(`WEAPONUSED`)}`.replace(`#INLINE#`, settings.GET(`WEAPONUSEDINLINE`) || settings.GET(`DEATHSHOTINLINE`)).replace(`#WEAPONUSED#`, DATA.WEAPONUSED);
            const DISTANCEMETERSTEXT = `${languages.TRANSLATE(`DISTANCEMETERS`)}`.replace(`#INLINE#`, settings.GET(`DISTANCEMETERSINLINE`) || settings.GET(`DEATHSHOTINLINE`)).replace(`#DISTANCEMETERS#`, DATA.DISTANCEMETERS);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`DEATHSHOTDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`DEATHSHOTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHSHOTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`DEATHSHOTCOLOR`), languages.TRANSLATE(`DEATHSHOT`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`AUTHOR`) == true) ? AUTHORTEXT : undefined, (settings.GET(`AUTHORID`) == true) ? AUTHORIDTEXT : undefined, (settings.GET(`AUTHORPOSITION`) == true) ? AUTHORPOSITIONTEXT : undefined, (settings.GET(`WEAPONUSED`) == true) ? WEAPONUSEDTEXT : undefined, (settings.GET(`DISTANCEMETERS`) == true) ? DISTANCEMETERSTEXT : undefined], DATA.DATE, settings.GET(`DEATHSHOTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHSHOTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`DEATH_MELEE_PLAYER`, (DATA) => {
    if (settings.GET(`DEATHMELEEPLAYERDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`DEATHMELEEPLAYERINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`DEATHMELEEPLAYERINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`DEATHMELEEPLAYERINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const AUTHORTEXT = `${languages.TRANSLATE(`AUTHOR`)}`.replace(`#INLINE#`, settings.GET(`AUTHORINLINE`) || settings.GET(`DEATHMELEEPLAYERINLINE`)).replace(`#AUTHOR#`, DATA.AUTHOR);
            const AUTHORIDTEXT = `${languages.TRANSLATE(`AUTHORID`)}`.replace(`#INLINE#`, settings.GET(`AUTHORIDINLINE`) || settings.GET(`DEATHMELEEPLAYERINLINE`)).replace(`#AUTHORID#`, DATA.AUTHORID);
            const AUTHORPOSITIONSPLIT0 = DATA.AUTHORPOSITION.split(`,`)[0].trim();
            const AUTHORPOSITIONSPLIT1 = DATA.AUTHORPOSITION.split(`,`)[1].trim();
            const AUTHORPOSITIONTEXT = `${languages.TRANSLATE(`AUTHORPOSITION`)}`.replace(`#INLINE#`, settings.GET(`AUTHORPOSITIONINLINE`) || settings.GET(`DEATHMELEEPLAYERINLINE`)).replace(`#AUTHORPOSITION#`, DATA.AUTHORPOSITION).replace(`#AUTHORPOSITIONSPLIT0#`, AUTHORPOSITIONSPLIT0).replace(`#AUTHORPOSITIONSPLIT1#`, AUTHORPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const WEAPONUSEDTEXT = `${languages.TRANSLATE(`WEAPONUSED`)}`.replace(`#INLINE#`, settings.GET(`WEAPONUSEDINLINE`) || settings.GET(`DEATHMELEEPLAYERINLINE`)).replace(`#WEAPONUSED#`, DATA.WEAPONUSED);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`DEATHMELEEPLAYERDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`DEATHMELEEPLAYERDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHMELEEPLAYERDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`DEATHMELEEPLAYERCOLOR`), languages.TRANSLATE(`DEATHMELEEPLAYER`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`AUTHOR`) == true) ? AUTHORTEXT : undefined, (settings.GET(`AUTHORID`) == true) ? AUTHORIDTEXT : undefined, (settings.GET(`AUTHORPOSITION`) == true) ? AUTHORPOSITIONTEXT : undefined, (settings.GET(`WEAPONUSED`) == true) ? WEAPONUSEDTEXT : undefined], DATA.DATE, settings.GET(`DEATHMELEEPLAYERDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHMELEEPLAYERDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`DEATH_MELEE`, (DATA) => {
    if (settings.GET(`DEATHMELEEDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`DEATHMELEEINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`DEATHMELEEINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`DEATHMELEEINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const AUTHORTEXT = `${languages.TRANSLATE(`AUTHOR`)}`.replace(`#INLINE#`, settings.GET(`AUTHORINLINE`) || settings.GET(`DEATHMELEEINLINE`)).replace(`#AUTHOR#`, DATA.AUTHOR);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`DEATHMELEEDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`DEATHMELEEDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHMELEEDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`DEATHMELEECOLOR`), languages.TRANSLATE(`DEATHMELEE`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`AUTHOR`) == true) ? AUTHORTEXT : undefined], DATA.DATE, settings.GET(`DEATHMELEEDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHMELEEDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`DEATH_STATS`, (DATA) => {
    if (settings.GET(`DEATHSTATSDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`DEATHSTATSINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`DEATHSTATSINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`DEATHSTATSINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const WATERTEXT = `${languages.TRANSLATE(`WATER`)}`.replace(`#INLINE#`, settings.GET(`WATERINLINE`) || settings.GET(`DEATHSTATSINLINE`)).replace(`#WATER#`, DATA.WATER);
            const ENERGYTEXT = `${languages.TRANSLATE(`ENERGY`)}`.replace(`#INLINE#`, settings.GET(`ENERGYINLINE`) || settings.GET(`DEATHSTATSINLINE`)).replace(`#ENERGY#`, DATA.ENERGY);
            const BLEEDSOURCESTEXT = `${languages.TRANSLATE(`BLEEDSOURCES`)}`.replace(`#INLINE#`, settings.GET(`BLEEDSOURCESINLINE`) || settings.GET(`DEATHSTATSINLINE`)).replace(`#BLEEDSOURCES#`, DATA.BLEEDSOURCES);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`DEATHSTATSDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`DEATHSTATSDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHSTATSDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`DEATHSTATSCOLOR`), languages.TRANSLATE(`DEATHSTATS`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`WATER`) == true) ? WATERTEXT : undefined, (settings.GET(`ENERGY`) == true) ? ENERGYTEXT : undefined, (settings.GET(`BLEEDSOURCES`) == true) ? BLEEDSOURCESTEXT : undefined], DATA.DATE, settings.GET(`DEATHSTATSDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHSTATSDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`DEATH_SUICIDE`, (DATA) => {
    if (settings.GET(`DEATHSUICIDEDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`DEATHSUICIDEINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`DEATHSUICIDEINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`DEATHSUICIDEDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`DEATHSUICIDEDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHSUICIDEDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`DEATHSUICIDECOLOR`), languages.TRANSLATE(`DEATHSUICIDE`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined], DATA.DATE, settings.GET(`DEATHSUICIDEDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHSUICIDEDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`DEATH_BLEEDING`, (DATA) => {
    if (settings.GET(`DEATHBLEEDINGDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`DEATHBLEEDINGINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`DEATHBLEEDINGINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`DEATHBLEEDINGINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`DEATHBLEEDINGDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`DEATHBLEEDINGDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHBLEEDINGDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`DEATHBLEEDINGCOLOR`), languages.TRANSLATE(`DEATHBLEEDING`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined], DATA.DATE, settings.GET(`DEATHBLEEDINGDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DEATHBLEEDINGDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`PLACEMENT`, (DATA) => {
    if (settings.GET(`PLACEMENTDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`PLACEMENTINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`PLACEMENTINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`PLACEMENTINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const OBJECTTEXT = `${languages.TRANSLATE(`OBJECT`)}`.replace(`#INLINE#`, settings.GET(`OBJECTINLINE`) || settings.GET(`PLACEMENTINLINE`)).replace(`#OBJECT#`, DATA.OBJECT);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`PLACEMENTDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`PLACEMENTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`PLACEMENTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`PLACEMENTCOLOR`), languages.TRANSLATE(`PLACEMENT`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`OBJECT`) == true) ? OBJECTTEXT : undefined], DATA.DATE, settings.GET(`PLACEMENTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`PLACEMENTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`BUILT`, (DATA) => {
    if (settings.GET(`BUILTDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`BUILTINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`BUILTINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`BUILTINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const OBJECTTEXT = `${languages.TRANSLATE(`OBJECT`)}`.replace(`#INLINE#`, settings.GET(`OBJECTINLINE`) || settings.GET(`BUILTINLINE`)).replace(`#OBJECT#`, DATA.OBJECT);
            const TOOLTEXT = `${languages.TRANSLATE(`TOOL`)}`.replace(`#INLINE#`, settings.GET(`TOOLINLINE`) || settings.GET(`BUILTINLINE`)).replace(`#TOOL#`, DATA.TOOL);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`BUILTDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`BUILTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`BUILTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`BUILTCOLOR`), languages.TRANSLATE(`BUILT`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`OBJECT`) == true) ? OBJECTTEXT : undefined, (settings.GET(`TOOL`) == true) ? TOOLTEXT : undefined], DATA.DATE, settings.GET(`BUILTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`BUILTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`DISMANTLED`, (DATA) => {
    if (settings.GET(`DISMANTLEDDISCORDWEBHOOKS`) == true) {
        try {
            const PLAYERTEXT = `${languages.TRANSLATE(`PLAYER`)}`.replace(`#INLINE#`, settings.GET(`PLAYERINLINE`) || settings.GET(`DISMANTLEDINLINE`)).replace(`#PLAYER#`, DATA.PLAYER);
            const PLAYERIDTEXT = `${languages.TRANSLATE(`PLAYERID`)}`.replace(`#INLINE#`, settings.GET(`PLAYERIDINLINE`) || settings.GET(`DISMANTLEDINLINE`)).replace(`#PLAYERID#`, DATA.PLAYERID);
            const PLAYERPOSITIONSPLIT0 = DATA.PLAYERPOSITION.split(`,`)[0].trim();
            const PLAYERPOSITIONSPLIT1 = DATA.PLAYERPOSITION.split(`,`)[1].trim();
            const PLAYERPOSITIONTEXT = `${languages.TRANSLATE(`PLAYERPOSITION`)}`.replace(`#INLINE#`, settings.GET(`PLAYERPOSITIONINLINE`) || settings.GET(`DISMANTLEDINLINE`)).replace(`#PLAYERPOSITION#`, DATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`));
            const OBJECTTEXT = `${languages.TRANSLATE(`OBJECT`)}`.replace(`#INLINE#`, settings.GET(`OBJECTINLINE`) || settings.GET(`DISMANTLEDINLINE`)).replace(`#OBJECT#`, DATA.OBJECT);
            const TOOLTEXT = `${languages.TRANSLATE(`TOOL`)}`.replace(`#INLINE#`, settings.GET(`TOOLINLINE`) || settings.GET(`DISMANTLEDINLINE`)).replace(`#TOOL#`, DATA.TOOL);
            return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`DISMANTLEDDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`DISMANTLEDDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DISMANTLEDDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`DISMANTLEDCOLOR`), languages.TRANSLATE(`DISMANTLED`), undefined, undefined, undefined, undefined, [(settings.GET(`PLAYER`) == true) ? PLAYERTEXT : undefined, (settings.GET(`PLAYERID`) == true) ? PLAYERIDTEXT : undefined, (settings.GET(`PLAYERPOSITION`) == true) ? PLAYERPOSITIONTEXT : undefined, (settings.GET(`OBJECT`) == true) ? OBJECTTEXT : undefined, (settings.GET(`TOOL`) == true) ? TOOLTEXT : undefined], DATA.DATE, settings.GET(`DISMANTLEDDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`DISMANTLEDDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`));
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

EVENTEMITTER.on(`PLAYER_LIST`, (DATA) => {
    if (settings.GET(`PLAYERLISTDISCORDWEBHOOKS`) == true) {
        try {
            let BUFFER = [];
            if (DATA.TOTALPLAYERS > 0) {
                DATA.PLAYERLISTLINKS.forEach(async (PLAYERDATA) => {
                    const PLAYERPOSITIONSPLIT0 = PLAYERDATA.PLAYERPOSITION.split(`,`)[0].trim();
                    const PLAYERPOSITIONSPLIT1 = PLAYERDATA.PLAYERPOSITION.split(`,`)[1].trim();
                    return BUFFER.push(`${languages.TRANSLATE(`PLAYERLISTBUFFER`)}`.replace(`#PLAYER#`, PLAYERDATA.PLAYER).replace(`#PLAYERID#`, PLAYERDATA.PLAYERID).replace(`#PLAYERPOSITION#`, PLAYERDATA.PLAYERPOSITION).replace(`#PLAYERPOSITIONSPLIT0#`, PLAYERPOSITIONSPLIT0).replace(`#PLAYERPOSITIONSPLIT1#`, PLAYERPOSITIONSPLIT1).replace(`#PROCESS.ENV.DAYZSERVERMISSION#`, settings.GET(`DAYZSERVERMISSION`)));
                });
            };
            if (BUFFER.length) {
                const ATTACHMENT = new discord.MessageAttachment(Buffer.from(BUFFER.join(`\n\n`)), `playerslist.txt`);
                const TOTALPLAYERSTEXT = `${languages.TRANSLATE(`TOTALPLAYERS`)}`.replace(`#INLINE#`, settings.GET(`TOTALPLAYERSINLINE`) || settings.GET(`PLAYERLISTDISCORDWEBHOOKSLINKS`)).replace(`#TOTALPLAYERS#`, DATA.TOTALPLAYERS);
                return functions.SENDDISCORDWEBHOOKS(undefined, true, settings.GET(`PLAYERLISTDISCORDWEBHOOKSLINKS`) || settings.GET(`DISCORDWEBHOOKSLINKS`), settings.GET(`PLAYERLISTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`PLAYERLISTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), undefined, undefined, undefined, settings.GET(`PLAYERLISTCOLOR`), languages.TRANSLATE(`PLAYERLIST`), undefined, undefined, undefined, undefined, [(settings.GET(`TOTALPLAYERS`) == true) ? TOTALPLAYERSTEXT : undefined], DATA.DATE, settings.GET(`PLAYERLISTDISCORDWEBHOOKSNAME`) || settings.GET(`DISCORDWEBHOOKSNAME`), settings.GET(`PLAYERLISTDISCORDWEBHOOKSICONURL`) || settings.GET(`DISCORDWEBHOOKSICONURL`), ATTACHMENT);
            };
        } catch (error) {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        };
    };
});

module.exports = EVENTEMITTER;