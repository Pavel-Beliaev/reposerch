export type FetchParamsCardType = {
    owner: string,
    repo: string,
};

export type CardSliceState = {
    card: FetchDataCard,
    status: 'pending' | 'loading' | 'finish' | 'error',
};

export  type FetchDataCard = {
    name: string,
    owner: {
        login: string,
        avatar_url: string,
        html_url: string,
    },
    updated_at: string,
    stargazers_count: number,
    language: string,
}