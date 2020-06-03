if not exist node_modules\ (
    ECHO Le dossier node_modules n'existe pas dans le répertoire, Installation des modules...
    CALL npm install
    if not exist node_modules\ (
    START CMD /C "ECHO Un problème est survenu lors de l'installation des modules. Assurez-vous que Node.js (NPM) est installé. && PAUSE"
    EXIT
    )
    ECHO Modules installés.
)
if not exist node_modules\bufferutil (
    ECHO Le module bufferutil n'existe pas dans le répertoire, Installation du module...
    CALL npm install bufferutil
    if not exist node_modules\bufferutil (
    START CMD /C "ECHO Un problème est survenu lors de l'installation de bufferutil. Assurez-vous que Node.js (NPM) est installé. && PAUSE"
    EXIT
    )
    ECHO bufferutil installé.
)
if not exist node_modules\discord.js (
    ECHO Le module discord.js n'existe pas dans le répertoire, Installation du module...
    CALL npm install discord.js
    if not exist node_modules\discord.js (
    START CMD /C "ECHO Un problème est survenu lors de l'installation de discord.js. Assurez-vous que Node.js (NPM) est installé. && PAUSE"
    EXIT
    )
    ECHO discord.js installé.
)
if not exist node_modules\dotenv (
    ECHO Le module dotenv n'existe pas dans le répertoire, Installation du module...
    CALL npm install dotenv
    if not exist node_modules\dotenv (
    START CMD /C "ECHO Un problème est survenu lors de l'installation de dotenv. Assurez-vous que Node.js (NPM) est installé. && PAUSE"
    EXIT
    )
    ECHO dotenv installé.
)
if not exist node_modules\tail (
    ECHO Le module tail n'existe pas dans le répertoire, Installation du module...
    CALL npm install tail
    if not exist node_modules\tail (
    START CMD /C "ECHO Un problème est survenu lors de l'installation de tail. Assurez-vous que Node.js (NPM) est installé. && PAUSE"
    EXIT
    )
    ECHO tail installé.
)
cls
node --trace-warnings bot.js
pause