export type FetchParamsType = {
    query: string,
    page: string,
};

export type FetchData = {
    items: RepositoriesDataType[],
    total_count: number,
    error: {
        message: string
    },
};

export type RepositoriesDataType = {
    created_at: string,
    html_url: string,
    name: string,
    stargazers_count: number,
    owner: {
        login: string,
    },
};


export type RepoSliceState = {
    repositories: RepositoriesDataType[],
    totalCount: number,
    status: 'pending' | 'loading' | 'finish' | 'error',
    page: number,
    error: string | undefined,
}