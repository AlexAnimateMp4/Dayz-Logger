const fs = require(`fs`);
const path = require(`path`);
require(`dotenv`).config();
const envfile = require(`envfile`);

module.exports = {
    OPENSOURCELANGUAGE: {
        DEFAULT: `EN`,
        VALUE: process.env.OPENSOURCELANGUAGE,
        TYPE: `string`,
        CHECK: true,
        READONLY: false,
        LIST: [
            `EN`,
            `FR`
        ]
    },
    DEBUG: {
        DEFAULT: false,
        VALUE: process.env.DEBUG,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DAYZSERVERPROFILELOCATION: {
        DEFAULT: undefined,
        VALUE: process.env.DAYZSERVERPROFILELOCATION,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DAYZSERVERMISSION: {
        DEFAULT: `chernarusplus`,
        VALUE: process.env.DAYZSERVERMISSION,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    REALDATE: {
        DEFAULT: false,
        VALUE: process.env.REALDATE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYER: {
        DEFAULT: true,
        VALUE: process.env.PLAYER,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERINLINE: {
        DEFAULT: false,
        VALUE: process.env.PLAYERINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERID: {
        DEFAULT: true,
        VALUE: process.env.PLAYERID,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERIDINLINE: {
        DEFAULT: false,
        VALUE: process.env.PLAYERIDINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    MESSAGE: {
        DEFAULT: true,
        VALUE: process.env.MESSAGE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    MESSAGEINLINE: {
        DEFAULT: false,
        VALUE: process.env.MESSAGEINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERPOSITION: {
        DEFAULT: true,
        VALUE: process.env.PLAYERPOSITION,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERPOSITIONINLINE: {
        DEFAULT: false,
        VALUE: process.env.PLAYERPOSITIONINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERHP: {
        DEFAULT: true,
        VALUE: process.env.PLAYERHP,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERHPINLINE: {
        DEFAULT: false,
        VALUE: process.env.PLAYERHPINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    AUTHOR: {
        DEFAULT: true,
        VALUE: process.env.AUTHOR,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    AUTHORINLINE: {
        DEFAULT: false,
        VALUE: process.env.AUTHORINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    AUTHORID: {
        DEFAULT: true,
        VALUE: process.env.AUTHORID,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    AUTHORIDINLINE: {
        DEFAULT: false,
        VALUE: process.env.AUTHORIDINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    AUTHORPOSITION: {
        DEFAULT: true,
        VALUE: process.env.AUTHORPOSITION,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    AUTHORPOSITIONINLINE: {
        DEFAULT: false,
        VALUE: process.env.AUTHORPOSITIONINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PARTBODY: {
        DEFAULT: true,
        VALUE: process.env.PARTBODY,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PARTBODYINLINE: {
        DEFAULT: false,
        VALUE: process.env.PARTBODYINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HPREMOVED: {
        DEFAULT: true,
        VALUE: process.env.HPREMOVED,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HPREMOVEDINLINE: {
        DEFAULT: false,
        VALUE: process.env.HPREMOVEDINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    BALLUSED: {
        DEFAULT: true,
        VALUE: process.env.BALLUSED,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    BALLUSEDINLINE: {
        DEFAULT: false,
        VALUE: process.env.BALLUSEDINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    WEAPONUSED: {
        DEFAULT: true,
        VALUE: process.env.WEAPONUSED,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    WEAPONUSEDINLINE: {
        DEFAULT: false,
        VALUE: process.env.WEAPONUSEDINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DISTANCEMETERS: {
        DEFAULT: true,
        VALUE: process.env.DISTANCEMETERS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DISTANCEMETERSINLINE: {
        DEFAULT: false,
        VALUE: process.env.DISTANCEMETERSINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    OBJECT: {
        DEFAULT: true,
        VALUE: process.env.OBJECT,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    OBJECTINLINE: {
        DEFAULT: false,
        VALUE: process.env.OBJECTINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    TOOL: {
        DEFAULT: true,
        VALUE: process.env.TOOL,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    TOOLINLINE: {
        DEFAULT: false,
        VALUE: process.env.TOOLINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    WATER: {
        DEFAULT: true,
        VALUE: process.env.WATER,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    WATERINLINE: {
        DEFAULT: false,
        VALUE: process.env.WATERINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    ENERGY: {
        DEFAULT: true,
        VALUE: process.env.ENERGY,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    ENERGYINLINE: {
        DEFAULT: false,
        VALUE: process.env.ENERGYINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    BLEEDSOURCES: {
        DEFAULT: true,
        VALUE: process.env.BLEEDSOURCES,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    BLEEDSOURCESINLINE: {
        DEFAULT: false,
        VALUE: process.env.BLEEDSOURCESINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    TOTALPLAYERS: {
        DEFAULT: true,
        VALUE: process.env.TOTALPLAYERS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    TOTALPLAYERSINLINE: {
        DEFAULT: false,
        VALUE: process.env.TOTALPLAYERSINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERLISTLINKS: {
        DEFAULT: true,
        VALUE: process.env.PLAYERLISTLINKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERLISTLINKSINLINE: {
        DEFAULT: false,
        VALUE: process.env.PLAYERLISTLINKSINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CONNECTED: {
        DEFAULT: true,
        VALUE: process.env.CONNECTED,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CONNECTEDDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.CONNECTEDDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CONNECTEDDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.CONNECTEDDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CONNECTEDDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.CONNECTEDDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CONNECTEDDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.CONNECTEDDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CONNECTEDCOLOR: {
        DEFAULT: `#00E04F`,
        VALUE: process.env.CONNECTEDCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    CONNECTEDINLINE: {
        DEFAULT: false,
        VALUE: process.env.CONNECTEDINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DISCONNECTED: {
        DEFAULT: true,
        VALUE: process.env.DISCONNECTED,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DISCONNECTEDDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.DISCONNECTEDDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DISCONNECTEDDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DISCONNECTEDDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DISCONNECTEDDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DISCONNECTEDDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DISCONNECTEDDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DISCONNECTEDDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DISCONNECTEDCOLOR: {
        DEFAULT: `#FF3A3A`,
        VALUE: process.env.DISCONNECTEDCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DISCONNECTEDINLINE: {
        DEFAULT: false,
        VALUE: process.env.DISCONNECTEDINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CHAT: {
        DEFAULT: true,
        VALUE: process.env.CHAT,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CHATDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.CHATDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CHATDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.CHATDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CHATDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.CHATDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CHATDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.CHATDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CHATCOLOR: {
        DEFAULT: `#0088F1`,
        VALUE: process.env.CHATCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    CHATINLINE: {
        DEFAULT: false,
        VALUE: process.env.CHATINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CONSCIOUS: {
        DEFAULT: true,
        VALUE: process.env.CONSCIOUS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CONSCIOUSDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.CONSCIOUSDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    CONSCIOUSDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.CONSCIOUSDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CONSCIOUSDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.CONSCIOUSDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CONSCIOUSDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.CONSCIOUSDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    CONSCIOUSCOLOR: {
        DEFAULT: `#03AC3D`,
        VALUE: process.env.CONSCIOUSCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    CONSCIOUSINLINE: {
        DEFAULT: false,
        VALUE: process.env.CONSCIOUSINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    UNCONSCIOUS: {
        DEFAULT: true,
        VALUE: process.env.UNCONSCIOUS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    UNCONSCIOUSDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.UNCONSCIOUSDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    UNCONSCIOUSDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.UNCONSCIOUSDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    UNCONSCIOUSDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.UNCONSCIOUSDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    UNCONSCIOUSDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.UNCONSCIOUSDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    UNCONSCIOUSCOLOR: {
        DEFAULT: `#FF6100`,
        VALUE: process.env.UNCONSCIOUSCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    UNCONSCIOUSINLINE: {
        DEFAULT: false,
        VALUE: process.env.UNCONSCIOUSINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITSHOT: {
        DEFAULT: true,
        VALUE: process.env.HITSHOT,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITSHOTDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.HITSHOTDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITSHOTDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.HITSHOTDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITSHOTDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.HITSHOTDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITSHOTDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.HITSHOTDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITSHOTCOLOR: {
        DEFAULT: `#FF9900`,
        VALUE: process.env.HITSHOTCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    HITSHOTINLINE: {
        DEFAULT: false,
        VALUE: process.env.HITSHOTINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITMELEEPLAYER: {
        DEFAULT: true,
        VALUE: process.env.HITMELEEPLAYER,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITMELEEPLAYERDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.HITMELEEPLAYERDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITMELEEPLAYERDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.HITMELEEPLAYERDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITMELEEPLAYERDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.HITMELEEPLAYERDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITMELEEPLAYERDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.HITMELEEPLAYERDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITMELEEPLAYERCOLOR: {
        DEFAULT: `#FF9900`,
        VALUE: process.env.HITMELEEPLAYERCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    HITMELEEPLAYERINLINE: {
        DEFAULT: false,
        VALUE: process.env.HITMELEEPLAYERINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITMELEE: {
        DEFAULT: true,
        VALUE: process.env.HITMELEE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITMELEEDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.HITMELEEDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITMELEEDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.HITMELEEDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITMELEEDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.HITMELEEDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITMELEEDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.HITMELEEDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITMELEECOLOR: {
        DEFAULT: `#FF9900`,
        VALUE: process.env.HITMELEECOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    HITMELEEINLINE: {
        DEFAULT: false,
        VALUE: process.env.HITMELEEINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITFALL: {
        DEFAULT: true,
        VALUE: process.env.HITFALL,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITFALLDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.HITFALLDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITFALLDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.HITFALLDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITFALLDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.HITFALLDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITFALLDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.HITFALLDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITFALLCOLOR: {
        DEFAULT: `#FF9900`,
        VALUE: process.env.HITFALLCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    HITFALLINLINE: {
        DEFAULT: false,
        VALUE: process.env.HITFALLINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITGENERIC: {
        DEFAULT: true,
        VALUE: process.env.HITGENERIC,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITGENERICDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.HITGENERICDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    HITGENERICDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.HITGENERICDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITGENERICDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.HITGENERICDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITGENERICDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.HITGENERICDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    HITGENERICCOLOR: {
        DEFAULT: `#FF9900`,
        VALUE: process.env.HITGENERICCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    HITGENERICINLINE: {
        DEFAULT: false,
        VALUE: process.env.HITGENERICINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSHOT: {
        DEFAULT: true,
        VALUE: process.env.DEATHSHOT,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSHOTDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.DEATHSHOTDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSHOTDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSHOTDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSHOTDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSHOTDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSHOTDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSHOTDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSHOTCOLOR: {
        DEFAULT: `#D80000`,
        VALUE: process.env.DEATHSHOTCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DEATHSHOTINLINE: {
        DEFAULT: false,
        VALUE: process.env.DEATHSHOTINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHMELEEPLAYER: {
        DEFAULT: true,
        VALUE: process.env.DEATHMELEEPLAYER,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHMELEEPLAYERDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.DEATHMELEEPLAYERDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHMELEEPLAYERDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHMELEEPLAYERDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHMELEEPLAYERDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHMELEEPLAYERDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHMELEEPLAYERDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHMELEEPLAYERDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHMELEEPLAYERCOLOR: {
        DEFAULT: `#D80000`,
        VALUE: process.env.DEATHMELEEPLAYERCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DEATHMELEEPLAYERINLINE: {
        DEFAULT: false,
        VALUE: process.env.DEATHMELEEPLAYERINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHMELEE: {
        DEFAULT: true,
        VALUE: process.env.DEATHMELEE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHMELEEDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.DEATHMELEEDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHMELEEDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHMELEEDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHMELEEDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHMELEEDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHMELEEDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHMELEEDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHMELEECOLOR: {
        DEFAULT: `#D80000`,
        VALUE: process.env.DEATHMELEECOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DEATHMELEEINLINE: {
        DEFAULT: false,
        VALUE: process.env.DEATHMELEEINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSTATS: {
        DEFAULT: true,
        VALUE: process.env.DEATHSTATS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSTATSDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.DEATHSTATSDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSTATSDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSTATSDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSTATSDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSTATSDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSTATSDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSTATSDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSTATSCOLOR: {
        DEFAULT: `#D80000`,
        VALUE: process.env.DEATHSTATSCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DEATHSTATSINLINE: {
        DEFAULT: false,
        VALUE: process.env.DEATHSTATSINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSUICIDE: {
        DEFAULT: true,
        VALUE: process.env.DEATHSUICIDE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSUICIDEDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.DEATHSUICIDEDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHSUICIDEDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSUICIDEDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSUICIDEDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSUICIDEDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSUICIDEDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHSUICIDEDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHSUICIDECOLOR: {
        DEFAULT: `#D80000`,
        VALUE: process.env.DEATHSUICIDECOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DEATHSUICIDEINLINE: {
        DEFAULT: false,
        VALUE: process.env.DEATHSUICIDEINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHBLEEDING: {
        DEFAULT: true,
        VALUE: process.env.DEATHBLEEDING,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHBLEEDINGDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.DEATHBLEEDINGDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DEATHBLEEDINGDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHBLEEDINGDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHBLEEDINGDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHBLEEDINGDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHBLEEDINGDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DEATHBLEEDINGDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DEATHBLEEDINGCOLOR: {
        DEFAULT: `#D80000`,
        VALUE: process.env.DEATHBLEEDINGCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DEATHBLEEDINGINLINE: {
        DEFAULT: false,
        VALUE: process.env.DEATHBLEEDINGINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLACEMENT: {
        DEFAULT: true,
        VALUE: process.env.PLACEMENT,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLACEMENTDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.PLACEMENTDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLACEMENTDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.PLACEMENTDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    PLACEMENTDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.PLACEMENTDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    PLACEMENTDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.PLACEMENTDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    PLACEMENTCOLOR: {
        DEFAULT: `#A459FF`,
        VALUE: process.env.PLACEMENTCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    PLACEMENTINLINE: {
        DEFAULT: false,
        VALUE: process.env.PLACEMENTINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    BUILT: {
        DEFAULT: true,
        VALUE: process.env.BUILT,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    BUILTDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.BUILTDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    BUILTDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.BUILTDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    BUILTDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.BUILTDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    BUILTDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.BUILTDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    BUILTCOLOR: {
        DEFAULT: `#F03EE8`,
        VALUE: process.env.BUILTCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    BUILTINLINE: {
        DEFAULT: false,
        VALUE: process.env.BUILTINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DISMANTLED: {
        DEFAULT: true,
        VALUE: process.env.DISMANTLED,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DISMANTLEDDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.DISMANTLEDDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    DISMANTLEDDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.DISMANTLEDDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DISMANTLEDDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.DISMANTLEDDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DISMANTLEDDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.DISMANTLEDDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    DISMANTLEDCOLOR: {
        DEFAULT: `#00D7F1`,
        VALUE: process.env.DISMANTLEDCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    DISMANTLEDINLINE: {
        DEFAULT: false,
        VALUE: process.env.DISMANTLEDINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERLIST: {
        DEFAULT: true,
        VALUE: process.env.PLAYERLIST,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERLISTDISCORDWEBHOOKS: {
        DEFAULT: true,
        VALUE: process.env.PLAYERLISTDISCORDWEBHOOKS,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    PLAYERLISTDISCORDWEBHOOKSLINKS: {
        DEFAULT: undefined,
        VALUE: process.env.PLAYERLISTDISCORDWEBHOOKSLINKS,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    PLAYERLISTDISCORDWEBHOOKSNAME: {
        DEFAULT: undefined,
        VALUE: process.env.PLAYERLISTDISCORDWEBHOOKSNAME,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    PLAYERLISTDISCORDWEBHOOKSICONURL: {
        DEFAULT: undefined,
        VALUE: process.env.PLAYERLISTDISCORDWEBHOOKSICONURL,
        TYPE: `string`,
        CHECK: false,
        READONLY: false
    },
    PLAYERLISTCOLOR: {
        DEFAULT: `#E4D800`,
        VALUE: process.env.PLAYERLISTCOLOR,
        TYPE: `string`,
        CHECK: true,
        READONLY: false
    },
    PLAYERLISTINLINE: {
        DEFAULT: false,
        VALUE: process.env.PLAYERLISTINLINE,
        TYPE: `boolean`,
        CHECK: true,
        READONLY: false
    },
    FORMATVALUE(VALUE) {
        return typeof VALUE == `boolean` ? VALUE : VALUE == `true` ? true : VALUE == `false` ? false : (/^-?\d+$/.test(VALUE)) ? parseFloat(VALUE) : (VALUE) ? VALUE : undefined;
    },
    HAS(NAME) {
        const settings = this[NAME];
        const formatValue = this.FORMATVALUE;
        if (settings) {
            return typeof settings[`TYPE`] != `undefined` ? typeof formatValue(settings[`VALUE`]) == settings[`TYPE`] ? typeof formatValue(settings[`VALUE`]) != `undefined` ? true : typeof formatValue(settings[`DEFAULT`]) == settings[`TYPE`] ? typeof formatValue(settings[`DEFAULT`]) != `undefined` ? true : false : false : typeof formatValue(settings[`DEFAULT`]) == settings[`TYPE`] ? typeof formatValue(settings[`DEFAULT`]) != `undefined` ? true : false : false : false;
        };
    },
    GET(NAME) {
        const settings = this[NAME];
        const formatValue = this.FORMATVALUE;
        if (settings) {
            return typeof settings[`TYPE`] != `undefined` ? typeof formatValue(settings[`VALUE`]) == settings[`TYPE`] ? typeof formatValue(settings[`VALUE`]) != `undefined` ? formatValue(settings[`VALUE`]) : typeof formatValue(settings[`DEFAULT`]) == settings[`TYPE`] ? typeof formatValue(settings[`DEFAULT`]) != `undefined` ? formatValue(settings[`DEFAULT`]) : undefined : undefined : typeof formatValue(settings[`DEFAULT`]) == settings[`TYPE`] ? typeof formatValue(settings[`DEFAULT`]) != `undefined` ? formatValue(settings[`DEFAULT`]) : undefined : undefined : undefined;
        };
    },
    SET(NAME, VALUE) {
        const settings = this[NAME];
        if (settings && settings[`READONLY`] == false) {
            fs.readFile(path.join(__dirname, `.env`), `utf8`, (error, data) => {
                if (error) throw new Error(error);
                let parsedFile = envfile.parse(data);
                let sourceObject = {};
                sourceObject = parsedFile;
                sourceObject[NAME] = `\"${VALUE}\"`;
                fs.writeFile(path.join(__dirname, `.env`), envfile.stringify(sourceObject), `utf8`, function (error) {
                    if (error) throw new Error(error);
                });
            });
            settings[`VALUE`] = VALUE;
        };
    }
};