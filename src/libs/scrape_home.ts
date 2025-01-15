import { load } from 'cheerio';
import { latestReleaseType, recommendationType } from '../types/home';

const latestReleaseAnime = (latestReleaseScrape: string): latestReleaseType[] => {
    const results: latestReleaseType[] = [];
    const latestReleaseAnimeParse = latestReleaseScrape.split('</article>');

    latestReleaseAnimeParse.forEach((anime) => {
        const $ = load(anime);

        results.push({
            title: $('.bsx .tip .tt').text().trim().split('\t')[0],
            slug: $('.bsx a').attr('href')?.split('/')[3],
            thumbnail: $('.bsx .tip .limit img').attr('src'),
            current_episode: $('.bsx .tip .limit .bt').text().trim().replace(/\bEp\b/, 'Episode').split('\t')[0],
            type: $('.bsx .tip .limit .typez').text().trim(),
            subOrDub: $('.bsx .tip .limit .bt .sb').text().trim(),
        });
    });
    results.splice(-1);

    return results;
};

const recommendationAnime = (recommendationScrape: string): recommendationType[] => {
    const results: recommendationType[] = [];
    const recommendationAnimeParse = recommendationScrape.split('</article>');

    recommendationAnimeParse.forEach((anime) => {
        const $ = load(anime);

        results.push({
            title: $('.bsx .tip .tt').text().trim().split('\t')[0],
            slug: $('.bsx a').attr('href')?.split('/')[3],
            thumbnail: $('.bsx .tip .limit img').attr('src'),
            status: $('.bsx .tip .limit .bt').text().trim().split('\n\t')[0],
            type: $('.bsx .tip .limit .typez').text().trim(),
            subOrDub: $('.bsx .tip .limit .bt .sb').text().trim(),
        });
    });
    results.splice(-1);

    return results;
};

export { latestReleaseAnime, recommendationAnime };