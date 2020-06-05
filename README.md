# Dayz Logger

> Dayz Logger vous permet de récupéré les logs d'un serveur Dayz et de les envoyer dans un salon Discord

### Étape 0:

> `Node.js` est OBLIGATOIRE pour faire fonctionner Dayz Logger !!!<br>
> Lien de téléchargement: https://nodejs.org/fr/download/

### Étape 1:

> Renommer le fichier `.env.example` par `.env`<br>
> Remplacer les valeurs dans le fichier `.env`<br>
> Si besoin d'aide voir le fichier `config.js`

### Étape 2:

> Lancer le fichier `startbot.bat`
> et Enjoy !!!

### Étape BONUS:

> Dans le fichier `startserver.bat` (si vous en avez un), il est possible de lancer le bot en même temps que le serveur.<br>
> Pour ce faire, je vous donne un exemple de startserver.bat:

```batch
@echo off
cls

set wat=Dayz SA

title %wat%

cd E:\Jeux\Steam\steamapps\common\DayZServer\dayzlogger
start /min startbot.bat
cd E:\Jeux\Steam\steamapps\common\DayZServer

:watchdog
echo (%time%) %wat% lancé.
@echo off
start "Dayz_SA" /wait /affinity FF /high "DayZServer_x64.exe" -config=serverDZ.cfg -profiles=E:\Jeux\Steam\steamapps\common\DayZServer\profile -adminlog
echo (%time%) %wat% fermé ou planté, redémarrage.
goto watchdog
```

> Les lignes:

```batch
cd E:\Jeux\Steam\steamapps\common\DayZServer\dayzlogger
start /min startbot.bat
cd E:\Jeux\Steam\steamapps\common\DayZServer
```

> sont importantes, pour lancer le bot en même temps que le serveur ces lignes doivent y être avant de lancer le serveur.

## Note Importante !!!

> Le paramètre `-adminlog` doit être impérativement déclaré pour que Dayz Logger fonctionne !!!

#### Pour plus de précision, Discord: Alex Animate Mp4#2361
#### ORIGINAL OPEN SOURCE: https://github.com/GrosTon1/DayZ-BigBrother
