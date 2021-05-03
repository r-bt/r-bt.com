const rehypeKatexSvelte = require('rehype-katex-svelte');

module.exports = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		[
			require('remark-github'),
			{
				// Use your own repository
				repository: 'https://github.com/svelte-add/mdsvex.git'
			}
		],
		require('remark-math'),
		require('remark-abbr')
	],
	rehypePlugins: [
		require('rehype-slug'),
		[
			require('rehype-autolink-headings'),
			{
				behavior: 'wrap'
			}
		],
		rehypeKatexSvelte
	],
	layout: {
		article: './src/lib/Article/Article.svelte'
	}
};
