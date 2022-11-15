import { storyblokInit, apiPlugin } from '@storyblok/svelte';
import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Teaser from '../components/Teaser.svelte';

export async function load() {
	const { storyblokApi, componentsMap } = storyblokInit({
		accessToken: 'v5oh2hRu3sfKwdFcku7LoAtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser
		}
	});

	const { data } = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});
	return {
		story: data.story,
		componentsMap
	};
}
