const posts = import.meta.globEager('../../routes/learning/**/*.svx');

export default Object.entries(posts)
	.filter(([key, obj]) => obj.metadata.isPublished)
	.map(([key, obj]) => {
		const permalink = `/learning/${obj.metadata.url}`;

		const date = new Date(obj.metadata.publishedOn);

		return {
			metadata: obj.metadata,
			permalink,
			date,
			content: obj.default
		};
	})
	.sort((a, b) => b.date.getTime() - a.date.getTime());
