module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["standard", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: ["error", "always"],
        // "indent": ["error", 4],
        "space-before-function-paren": "off",
        quotes: "off",
        curly: "off",
        // "curly": ["error", "multi-line"],
        indent: ["error", 4, { SwitchCase: 1 }],
        "default-case": "error",
        "no-fallthrough": "error",
        "comma-dangle": "off",
        "multiline-ternary": "off",
        "no-undef": "off"
    }
};
