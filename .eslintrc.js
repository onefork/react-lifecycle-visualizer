module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: ["airbnb", "plugin:jest/recommended"],
  rules: {
    indent: [1, "spaces"],
    "linebreak-style": [1, "unix"],
    quotes: [1, "single"],
    "max-len": [1, 120],
    "no-multiple-empty-lines": [1, { max: 2, maxBOF: 0, maxEOF: 0 }],
    "no-trailing-spaces": 1,
    "react/jsx-tag-spacing": { beforeSelfClosing: "allow" },
    "arrow-parens": [1, "always"],
    "import/no-extraneous-dependencies": [1, { devDependencies: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": 1,
    "import/first": 1,
    "import/newline-after-import": 1,
    semi: 1,
    "react/prefer-stateless-function": 1,
    "block-spacing": 1,
    "comma-spacing": 1,
    "semi-spacing": 1,
    "padded-blocks": 1,
    "key-spacing": 1,
    "no-plusplus": [1, { allowForLoopAfterthoughts: true }],
    "eol-last": 1,

    "no-underscore-dangle": 0,
    "jsx-filename-extension": 0,
    "comma-dangle": 0,
    "jsx-quotes": [0, "prefer-single"],
    "object-curly-spacing": 0,
    "no-multi-spaces": 0,
    "import/prefer-default-export": 0,
    "import/no-duplicates": 0,
    "react/no-array-index-key": 0,
    "react/sort-comp": 0,
    "class-methods-use-this": 0,
    "default-case": 0,
    "no-mixed-operators": 0,
    "operator-linebreak": 0,
    "react/destructuring-assignment": 0,
    "implicit-arrow-linebreak": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-multi-spaces": 0,
    "react/jsx-wrap-multilines": 0,

    // Maybe enable later:
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "prefer-template": 0,
    indent: 0,
    "function-paren-newline": 0,
    "object-curly-newline": 0,
    "react/jsx-indent": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,

    // For importing react-lifecycle-visualizer from /src instead of /node_modules:
    "import/no-unresolved": [2, { ignore: ["^react-lifecycle-visualizer$"] }],
    "import/extensions": [2, "ignorePackages"]
  }
};
