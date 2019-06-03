module.exports = {
    env: {
        es6: true,
    },
    rules: {
        indent: ["error", 4],
        strict: "off",
        semi: ["error", "always"],
        eqeqeq: "warn",
        "space-before-function-paren": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "new-cap": "warn",
        "brace-style": "off",
        "no-undef": "off",
        "no-console": "off",
        "no-unreachable": "error",
        "linebreak-style": "off"
    },
    parserOptions: {
        sourceType: "module"
    },
    parser: "babel-eslint"
};
