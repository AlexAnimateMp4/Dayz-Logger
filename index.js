const path = require(`path`);
const fs = require(`fs`);
const {
    Tail
} = require(`tail`);
const events = require(path.join(__dirname, `events.js`));
const functions = require(path.join(__dirname, `functions.js`));
const settings = require(path.join(__dirname, `settings.js`));

const tail = new Tail(path.join(settings.GET(`DAYZSERVERPROFILELOCATION`), `DayZServer_x64.ADM`), {
    separator: null,
    useWatchFile: true
});

(() => {
    try {
        functions.CHECKOPENSOURCE();
        tail.on(`line`, (DATA) => {
            if (!DATA || !DATA.length) return;
            console.log(DATA.trim());
            let TIMESTAMP = fs.readFileSync(path.join(settings.GET(`DAYZSERVERPROFILELOCATION`), `DayZServer_x64.ADM`), `utf8`).split(/\r?\n/).find(line => {
                if (line.includes(`AdminLog started`)) return line;
            });
            if (TIMESTAMP) TIMESTAMP = {
                DATE: TIMESTAMP.split(`AdminLog started on`)[1].split(`at`)[0].trim(),
                TIME: TIMESTAMP.split(`AdminLog started on`)[1].split(`at`)[1].trim()
            };
            if (DATA.includes(` is connected `) && settings.GET(`CONNECTED`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(` is connected `)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(`)`)[0].trim();
                return events.emit(`CONNECTED`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME ? TIME : TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID
                });
            } else if (DATA.includes(` has been disconnected`) && settings.GET(`DISCONNECTED`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(`)`)[0].trim();
                return events.emit(`DISCONNECTED`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID
                });
            } else if (DATA.includes(`| Chat(\"`) && settings.GET(`CHAT`) == true) {
                const TIME = DATA.split(` | Chat(\"`)[0].trim();
                const PLAYER = DATA.split(`Chat(`)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(`)`)[0].trim();
                const MESSAGE = DATA.split(`):`)[1].split(`\'`).join(``).split(`\"`).join(``).trim();
                return events.emit(`CHAT`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    MESSAGE: MESSAGE
                });
            } else if (DATA.includes(` regained consciousness`) && settings.GET(`CONSCIOUS`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split("(id=")[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(" pos=")[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(">) regained consciousness")[0].trim();
                return events.emit(`CONSCIOUS`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION
                });
            } else if (DATA.includes(` is unconscious`) && settings.GET(`UNCONSCIOUS`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id=`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>) is unconscious`)[0].trim();
                return events.emit(`UNCONSCIOUS`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION
                });
            } else if (DATA.includes(` hit by Player `) && DATA.includes(` pos=<`) && DATA.includes(` into `) && DATA.includes(` for `) && DATA.includes(` damage `) && DATA.includes(` with `) && DATA.includes(` from `) && DATA.includes(` meters`) && settings.GET(`HITSHOT`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id=`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>)[HP:`)[0].trim();
                const PLAYERHP = DATA.split(`>)[HP:`)[1].split(`] hit by Player `)[0].trim();
                const AUTHOR = DATA.split(` hit by Player `)[1].replace(/\"/g, ``).split(`(id=`)[0].trim();
                const AUTHORID = DATA.split(` hit by Player `)[1].replace(/\"/g, ``).split(`(id=`)[1].split(` pos=<`)[0].trim();
                const AUTHORPOSITION = DATA.split(` hit by Player `)[1].replace(/\"/g, ``).split(` pos=<`)[1].split(`>) into `)[0].trim();
                const PARTBODY = DATA.split(`>) into `)[1].split(` for `)[0].trim();
                const HPREMOVED = DATA.split(` for `)[1].split(` damage `)[0].trim();
                const BALLUSED = DATA.split(` damage `)[1].split(` with `)[0].replace(`(`, ` `).replace(`)`, ` `).trim();
                const WEAPONUSED = DATA.split(` with `)[1].split(` from `)[0].trim();
                const DISTANCEMETERS = DATA.split(` from `)[1].split(` meters`)[0].trim();
                return events.emit(`HIT_SHOT`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    PLAYERHP: PLAYERHP,
                    AUTHOR: AUTHOR,
                    AUTHORID: AUTHORID,
                    AUTHORPOSITION: AUTHORPOSITION,
                    PARTBODY: PARTBODY,
                    HPREMOVED: HPREMOVED,
                    BALLUSED: BALLUSED,
                    WEAPONUSED: WEAPONUSED,
                    DISTANCEMETERS: DISTANCEMETERS
                });
            } else if (DATA.includes(` hit by Player `) && DATA.includes(` pos=<`) && DATA.includes(` into `) && DATA.includes(` for `) && DATA.includes(` damage `) && settings.GET(`HITMELEEPLAYER`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id=`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>)[HP:`)[0].trim();
                const PLAYERHP = DATA.split(`>)[HP:`)[1].split(`] hit by Player `)[0].trim();
                const AUTHOR = DATA.split(` hit by Player `)[1].replace(/\"/g, ``).split(`(id=`)[0].trim();
                const AUTHORID = DATA.split(` hit by Player `)[1].replace(/\"/g, ``).split(`(id=`)[1].split(` pos=<`)[0].trim();
                const AUTHORPOSITION = DATA.split(` hit by Player `)[1].replace(/\"/g, ``).split(` pos=<`)[1].split(`>) into `)[0].trim();
                const PARTBODY = DATA.split(` into `)[1].split(` for `)[0].trim();
                const HPREMOVED = DATA.split(` for `)[1].split(` damage `)[0].trim();
                const WEAPONUSED = DATA.split(` damage `)[1].replace(`(`, ` `).replace(`)`, ` `).trim();
                return events.emit(`HIT_MELEE_PLAYER`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    PLAYERHP: PLAYERHP,
                    AUTHOR: AUTHOR,
                    AUTHORID: AUTHORID,
                    AUTHORPOSITION: AUTHORPOSITION,
                    PARTBODY: PARTBODY,
                    HPREMOVED: HPREMOVED,
                    WEAPONUSED: WEAPONUSED
                });
            } else if (DATA.includes(` hit by `) && DATA.includes(` into `) && DATA.includes(` for `) && DATA.includes(` damage `) && settings.GET(`HITMELEE`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id=`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>)[HP:`)[0].trim();
                const PLAYERHP = DATA.split(`>)[HP:`)[1].split(`] hit by `)[0].trim();
                const AUTHOR = DATA.split(`] hit by `)[1].split(` into `)[0].trim();
                const PARTBODY = DATA.split(` into `)[1].split(` for `)[0].trim();
                const HPREMOVED = DATA.split(` for `)[1].split(` damage `)[0].trim();
                return events.emit(`HIT_MELEE`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    PLAYERHP: PLAYERHP,
                    AUTHOR: AUTHOR,
                    PARTBODY: PARTBODY,
                    HPREMOVED: HPREMOVED
                });
            } else if (DATA.includes(` hit by `) && DATA.includes(` FallDamage`) && settings.GET(`HITFALL`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id=`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(" pos=<")[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>)[HP:`)[0].trim();
                const PLAYERHP = DATA.split(`>)[HP:`)[1].split(`] hit by `)[0].trim();
                return events.emit(`HIT_FALL`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    PLAYERHP: PLAYERHP
                });
            } else if (DATA.includes(` hit by `) && settings.GET(`HITGENERIC`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>)[HP:`)[0].trim();
                const PLAYERHP = DATA.split(`>)[HP:`)[1].split(`] hit by`)[0].trim();
                const OBJECT = DATA.split(` hit by `)[1].split(` with `)[0].trim();
                const TOOL = DATA.split(` with `)[1].trim();
                return events.emit(`HIT_GENERIC`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    PLAYERHP: PLAYERHP,
                    OBJECT: OBJECT,
                    TOOL: TOOL
                });
            } else if (DATA.includes(` killed by `) && DATA.includes(` pos=<`) && DATA.includes(` with `) && DATA.includes(` from `) && DATA.includes(` meters`) && settings.GET(`DEATHSHOT`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(` (DEAD) `)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>) killed by Player`)[0].trim();
                const AUTHOR = DATA.split(` killed by Player `)[1].replace(/\"/g, ``).split(`(id=`)[0].trim();
                const AUTHORID = DATA.split(` killed by Player `)[1].replace(/\"/g, ``).split(`(id=`)[1].split(` pos=<`)[0].trim();
                const AUTHORPOSITION = DATA.split(` killed by Player `)[1].replace(/\"/g, ``).split(` pos=<`)[1].split(`>) with `)[0].trim();
                const WEAPONUSED = DATA.split(` with `)[1].split(` from `)[0].trim();
                const DISTANCEMETERS = DATA.split(` from `)[1].split(` meters`)[0].trim();
                return events.emit(`DEATH_SHOT`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    AUTHOR: AUTHOR,
                    AUTHORID: AUTHORID,
                    AUTHORPOSITION: AUTHORPOSITION,
                    WEAPONUSED: WEAPONUSED,
                    DISTANCEMETERS: DISTANCEMETERS
                });
            } else if (DATA.includes(` killed by Player `) && DATA.includes(` pos=<`) && DATA.includes(` with `) && settings.GET(`DEATHMELEEPLAYER`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(` (DEAD) `)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>) killed by Player`)[0].trim();
                const AUTHOR = DATA.split(` killed by Player `)[1].replace(/\"/g, ``).split(`(id=`)[0].trim();
                const AUTHORID = DATA.split(` killed by Player `)[1].replace(/\"/g, ``).split(`(id=`)[1].split(` pos=<`)[0].trim();
                const AUTHORPOSITION = DATA.split(` killed by Player `)[1].replace(/\"/g, ``).split(` pos=<`)[1].split(`>) with `)[0].trim();
                const WEAPONUSED = DATA.split(` with `)[1].trim();
                return events.emit(`DEATH_MELEE_PLAYER`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    AUTHOR: AUTHOR,
                    AUTHORID: AUTHORID,
                    AUTHORPOSITION: AUTHORPOSITION,
                    WEAPONUSED: WEAPONUSED
                });
            } else if (DATA.includes(` killed by `) && settings.GET(`DEATHMELEE`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(` (DEAD) `)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>) killed by`)[0].trim();
                const AUTHOR = DATA.split(` killed by `)[1].trim();
                return events.emit(`DEATH_MELEE`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    AUTHOR: AUTHOR
                });
            } else if (DATA.includes(` died.`) && DATA.includes(` Stats> `) && DATA.includes(` Water: `) && DATA.includes(` Energy: `) && DATA.includes(` Bleed sources: `) && settings.GET(`DEATHSTATS`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(` (DEAD) `)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>) died.`)[0].trim();
                const WATER = DATA.split(` Water: `)[1].split(` Energy: `)[0].trim();
                const ENERGY = DATA.split(` Energy: `)[1].split(` Bleed sources: `)[0].trim();
                const BLEEDSOURCES = DATA.split(` Bleed sources: `)[1].trim();
                return events.emit(`DEATH_STATS`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    WATER: WATER,
                    ENERGY: ENERGY,
                    BLEEDSOURCES: BLEEDSOURCES
                });
            } else if (DATA.includes(` committed suicide.`) && settings.GET(`DEATHSUICIDE`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(`) committed suicide`)[0].trim();
                return events.emit(`DEATH_SUICIDE`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID
                });
            } else if (DATA.includes(` bled out`) && settings.GET(`DEATHBLEEDING`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(` (DEAD) `)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>) bled out`)[0].trim();
                return events.emit(`DEATH_BLEEDING`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION
                });
            } else if (DATA.includes(` placed `) && settings.GET(`PLACEMENT`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id=`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>) placed `)[0].trim();
                const OBJECT = DATA.split(` placed `)[1].trim();
                return events.emit(`PLACEMENT`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    OBJECT: OBJECT
                });
            } else if (DATA.includes(` built `) && DATA.includes(` with `) && settings.GET(`BUILT`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split("(id=")[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(">) built")[0].trim();
                const OBJECT = DATA.split(` built `)[1].split(` with `)[0].trim();
                const TOOL = DATA.split(` with `)[1].trim();
                return events.emit(`BUILT`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    OBJECT: OBJECT,
                    TOOL: TOOL
                });
            } else if (DATA.includes(` dismantled `) && DATA.includes(` with `) && settings.GET(`DISMANTLED`) == true) {
                const TIME = DATA.split(` | Player `)[0].trim();
                const PLAYER = DATA.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id`)[0].trim();
                const PLAYERID = DATA.split(`(id=`)[1].split(` pos=<`)[0].trim();
                const PLAYERPOSITION = DATA.split(` pos=<`)[1].split(`>) dismantled `)[0].trim();
                const OBJECT = DATA.split(` dismantled `)[1].split(` with `)[0].trim();
                const TOOL = DATA.split(` with `)[1].trim();
                return events.emit(`DISMANTLED`, {
                    DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                    PLAYER: PLAYER,
                    PLAYERID: PLAYERID,
                    PLAYERPOSITION: PLAYERPOSITION,
                    OBJECT: OBJECT,
                    TOOL: TOOL
                });
            } else if (DATA.includes(`##### PlayerList log: `) && settings.GET(`PLAYERLIST`) == true) {
                const TIME = DATA.split(` | ##### PlayerList log: `)[0].trim();
                let PLAYERLISTLINKS = [];
                const TOTALPLAYERS = DATA.split(`##### PlayerList log: `)[1].split(` players`)[0].trim();
                if (TOTALPLAYERS > 0) {
                    DATA.split(`\n`).forEach((DATASplit) => {
                        if (DATASplit.includes(`| Player `) && DATASplit.includes(`(id=`) && DATASplit.includes(`pos=<`)) {
                            const PLAYER = DATASplit.split(`| Player `)[1].split(`\'`).join(``).split(`\"`).join(``).split(`(id`)[0].trim();
                            const PLAYERID = DATASplit.split(`(id=`)[1].split(` pos=<`)[0].trim();
                            const PLAYERPOSITION = DATASplit.split(` pos=<`)[1].split(`>)`)[0].trim();
                            PLAYERLISTLINKS.push({
                                PLAYER: PLAYER,
                                PLAYERID: PLAYERID,
                                PLAYERPOSITION: PLAYERPOSITION
                            });
                        };
                    });
                    if (PLAYERLISTLINKS.length == TOTALPLAYERS) return events.emit(`PLAYER_LIST`, {
                        DATE: settings.GET(`REALDATE`) == true ? new Date(`${TIMESTAMP.DATE} ${TIME || TIMESTAMP.TIME}`).getTime() || new Date().getTime() : new Date().getTime(),
                        TOTALPLAYERS: TOTALPLAYERS,
                        PLAYERLISTLINKS: PLAYERLISTLINKS
                    });
                };
            };
        }).on(`error`, (error) => {
            return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
        });
    } catch (error) {
        return console.error(functions.CONSOLESTYLE(`error`, true, false, undefined, error));
    } finally {
        tail.watch();
        return events.emit(`READY`, {
            DATE: new Date().getTime()
        });
    };
})();