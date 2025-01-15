import axios from 'axios';
import { Hono } from 'hono';
import { load } from 'cheerio';
import { latestReleaseAnime, recommendationAnime } from '../../libs/scrape_home';

const homeRoute = new Hono();

homeRoute.get('/', async (c) => {
    const { data } = await axios.get(process.env.SAMEHADAKU_URL || '');
    const $ = load(data);

    const latestReleaseAnimeScrape = $('.listupd .excstf article').toString();
    const latestReleaseAnimeResult = latestReleaseAnime(latestReleaseAnimeScrape);

    const recommendationAnimeScrape = $('.series-gen .listupd .tab-pane article').toString();
    const recommendationAnimeResult = recommendationAnime(recommendationAnimeScrape);

    return c.json({
        latest_release: latestReleaseAnimeResult,
        recommendation: recommendationAnimeResult,
    }, 200);
});

export default homeRoute;