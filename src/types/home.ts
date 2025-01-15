type latestReleaseType = {
    title: string,
    slug: string | undefined,
    thumbnail: string | undefined,
    current_episode: string,
    type: string,
    subOrDub: string
};

type recommendationType = {
    title: string,
    slug: string | undefined,
    thumbnail: string | undefined,
    status: string,
    type: string,
    subOrDub: string
};

export { latestReleaseType, recommendationType };