module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        'plugin:vue/strongly-recommended',
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'vue/valid-v-slot': ['error', {
            'allowModifiers': true
        }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
            },
        ],
        'vue/no-v-html': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'no-shadow': ['error', { allow: ['state', 'getters'] }],
        'no-param-reassign': 'off',
        'array-element-newline': [
            'error',
            {
                multiline: true,
                minItems: 3,
            },
        ],
        'array-bracket-newline': [
            'error',
            {
                multiline: true,
                minItems: 3,
            },
        ],
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                minProperties: 2,
                consistent: true,
            },
        ],
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: false,
                allowMultiplePropertiesPerLine: false,
            },
        ],
        'vue/max-len': [
            'error',
            {
                code: 120,
                template: 120,
                tabWidth: 2,
                comments: 120,
                ignorePattern: '',
                ignoreComments: false,
                ignoreTrailingComments: false,
                ignoreUrls: false,
                ignoreStrings: false,
                ignoreTemplateLiterals: false,
                ignoreRegExpLiterals: false,
                ignoreHTMLAttributeValues: false,
                ignoreHTMLTextContents: false,
            },
        ],
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'vuejs-accessibility/mouse-events-have-key-events': 'off',
        'vuejs-accessibility/media-has-caption': 'off',
        'class-methods-use-this': 'off',
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: { max: 1 },
                multiline: { max: 1 },
            },
        ],
        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'beside',
                multiline: 'below',
            },
        ],
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: false,
                ignores: [],
            },
        ],
        'vue/padding-line-between-tags': [
            'error',
            [
                {
                    blankLine: 'always',
                    prev: '*',
                    next: '*',
                },
            ],
        ],
        'vue/no-v-text-v-html-on-component': 'off',
        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignoreWhenNoAttributes: false,
                ignoreWhenEmpty: false,
                ignores: [],
            },
        ],
        'vue/this-in-template': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'cjs-export',
            },
            {
                blankLine: 'never',
                prev: 'cjs-export',
                next: 'cjs-export',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'export',
            },
            {
                blankLine: 'always',
                prev: 'cjs-import',
                next: '*',
            },
            {
                blankLine: 'never',
                prev: 'cjs-import',
                next: 'cjs-import',
            },
            {
                blankLine: 'always',
                prev: 'import',
                next: '*',
            },
            {
                blankLine: 'never',
                prev: 'import',
                next: 'import',
            },
            {
                blankLine: 'always',
                prev: 'class',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: 'block',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: 'block-like',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'block-like',
            },
            {
                blankLine: 'always',
                prev: 'const',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'const',
            },
            {
                blankLine: 'never',
                prev: 'const',
                next: 'const',
            },
            {
                blankLine: 'always',
                prev: 'let',
                next: '*',
            },
            {
                blankLine: 'never',
                prev: 'let',
                next: 'let',
            },
            {
                blankLine: 'always',
                prev: 'iife',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'iife',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'try',
            },
        ],
    },
    parserOptions: {
        'parser': '@babel/eslint-parser',
        'sourceType': 'module'
    },
    plugins: [
        'vue'
    ]
}
