{
	/* See all the pre-defined configs here: https://www.npmjs.com/package/eslint-config-defaults */
	"extends": "defaults/configurations/eslint",
	"parser": "babel-eslint",
	"ecmaFeatures": {
		"jsx": true
	},
	"plugins": [
		"react",
		"import"
	],
	"env": {
		"amd": true,
		"browser": true,
		"jquery": true,
		"node": true,
		"es6": true,
		"worker": true
	},
	"rules": {

		"eqeqeq": 2,
		"comma-dangle": 1,
		"no-console": 0,
		"no-debugger": 1,
		"no-extra-semi": 1,
		"no-extra-parens": 1,
		"no-irregular-whitespace": 0,
		"no-undef": 0,
		"no-unused-vars": 0,
		"semi": 1,
		"semi-spacing": 1,

		//Airbnb Rules
		"arrow-body-style": 2,
		"arrow-parens": 2,
		"array-bracket-spacing": 2,
		"array-callback-return": 2,
		"arrow-spacing": 2,
		"block-spacing": 2,
		"brace-style": 2,
		//"camelcase": 2, To be done
		"comma-spacing": 2,
		"comma-style": 2,
		"computed-property-spacing": 2,
		//"dot-notation": 2, Discussion required
		"func-call-spacing": 2,
		"func-style": 2, //Discussion required
		"function-paren-newline": 2,
		"generator-star-spacing": 2,
		"implicit-arrow-linebreak": 2,
		"key-spacing": 2,
		"id-length": 2,
		"indent": [ "error", "tab" ],
		"keyword-spacing": 2,
		"padded-blocks": ["error", "never"],
		//"prefer-arrow-callback": 2, To be done later
		//"prefer-const": 2, To be done later
		//"prefer-destructuring": 2, To be done later
		"prefer-rest-params": 2,
		"prefer-spread": 2,
		//"prefer-template": 2, On hold due to discussion of backtick not working on IE
		"quotes": ["error", "single"],
		"quote-props": [ "error", "as-needed" ],
		"max-len": [
			"error",
			{
				"code": 168,
				"comments": 168
			}
		],
		//"new-cap": 2,
		"newline-per-chained-call": 2,
		"no-array-constructor": 2,
		"no-case-declarations": 2,
		"no-confusing-arrow": 2,
		"no-const-assign": 2,
		"no-dupe-class-members": 2,
		"no-duplicate-imports": 2,
		"no-else-return": 2,
		"no-eval": 2,
		"no-iterator": 2,
		//"no-loop-func": 2,
		//"no-mixed-operators": 2, To be done later
		"no-multi-assign": 2,
		"no-multiple-empty-lines": 2,
		"no-nested-ternary": 2,
		"no-new-func": 2,
		"no-new-object": 2,
		"no-new-wrappers": 2,
		"no-param-reassign": 2,
		"no-plusplus": 2,
		"no-prototype-builtins": 2,
		"no-restricted-globals": 2,
		"no-restricted-properties": 2,
		"no-restricted-syntax": 2,
		"no-trailing-spaces": 2,
		//"no-underscore-dangle": 2,
		"no-unneeded-ternary": 2,
		"no-useless-constructor": 2,
		//"no-useless-escape": 2,
		"no-var": 2,
		"no-whitespace-before-property": 2,
		"nonblock-statement-body-position": 2,
		"operator-linebreak": 2,
		"object-curly-spacing": ["error", "always"],
		//"object-shorthand": 2,
		"one-var": [ "error", "never" ],
		"radix": 2,
		"spaced-comment": 2,
		"space-before-blocks": 2,
		"space-before-function-paren": 2,
		"space-in-parens": 2,
		"space-infix-ops": 2,
		"template-curly-spacing": 2,
		"wrap-iife": 2,

		"valid-jsdoc": [
			2,
			{ "requireReturn": false }
		],

		"import/extensions": 1,

		"react/display-name": 2,
		"react/forbid-prop-types": 1,
		"react/jsx-boolean-value": 1,
		"react/jsx-closing-bracket-location": 1,
		"react/jsx-curly-spacing": 1,
		"react/jsx-indent-props": 1,
		"react/jsx-max-props-per-line": 0,
		"react/jsx-no-duplicate-props": 1,
		"react/jsx-no-literals": 0,
		"react/jsx-no-undef": 1,
		"react/sort-prop-types": 1,
		"react/jsx-sort-props": 0,
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 1,
		"react/no-danger": 1,
		"react/no-did-mount-set-state": 1,
		"react/no-did-update-set-state": 1,
		"react/no-direct-mutation-state": 1,
		"react/no-multi-comp": 1,
		"react/no-set-state": 0,
		"react/no-unknown-property": 1,
		"react/prop-types": 0,
		"react/react-in-jsx-scope": 0,
		"react/self-closing-comp": 1,
		"react/sort-comp": 1,
		"react/jsx-wrap-multilines": 1
	}
}
