## Start at new sys
    windows
    "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
    "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",

    mac
    "start": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
    "build": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
npx browserslist@latest --update-db

nvm use 16.20.2
