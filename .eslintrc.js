module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [ 
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ]

    }
};