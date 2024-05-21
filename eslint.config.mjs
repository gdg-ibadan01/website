import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	// your custom flat configs go here, for example:
	{
		files: ['**/*.ts', '**/*.vue'],
		rules: {
			'no-console': 'warn', // allow console.log in TypeScript files with warning.
		},
	},
);
