module.exports = {
  "extends": "eslint-config-zcool",
  "parser": "babel-eslint",
  "rules": {
    "object-curly-spacing": ["error", "always"],
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "no-else-return": [0],
    "padding-line-between-statements": [0],
  },
  "env": {
    "browser": true,
    "jest": true,
  }
};
