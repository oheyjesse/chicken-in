module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "extends": "standard-warn",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "off"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "react/jsx-uses-vars": [
            2
        ],
        "no-unused-vars": [
            "off"
        ]
    }
};