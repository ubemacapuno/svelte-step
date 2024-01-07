import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
import nested from 'postcss-nested'
import postcssEnvFunction from 'postcss-env-function'
import minmax from 'postcss-media-minmax'
import postcssCustomMedia from 'postcss-custom-media'
import atImport from 'postcss-import'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: {
				prependData: `
				@custom-media --below_small (width < env(--small_bp));
				@custom-media --below_med (width < 700px);
				@custom-media --below_large (width < 900px);
				@custom-media --below_xlarge (width < 1200px);
	
				@custom-media --above_small (width > env(--small_bp));
				@custom-media --above_med (width > 700px);
				@custom-media --above_large (width > 900px);
				@custom-media --above_xlarge (width > 1200px);
			`,
				plugins: [
					atImport,
					postcssCustomMedia,
					minmax,
					nested,
					postcssEnvFunction({
						importFrom: [
							{
								environmentVariables: {
									'--small_bp': '500px'
								}
							}
						]
					})
				]
			}
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$elements: './src/elements',
			$utilities: './src/utilities',
			$stores: './src/lib/stores',
			$constants: './src/constants'
		}
	}
}

export default config
