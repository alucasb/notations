module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names":0,
        "vue/html-indent":0,
        "vue/html-self-closing":0,
        "vue/attributes-order":0,
        "vue/no-multi-spaces":0,
        "vue/max-attributes-per-line":0,
        "vue/html-closing-bracket-newline":0,
        "vue/no-template-shadow":0,
        "vue/first-attribute-linebreak":0
    }
}
