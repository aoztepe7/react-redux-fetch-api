import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = "https://catfact.ninja/";

export interface CatResponse {
    current_page: number;
    data: Breed[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: string;
        label: string;
        active: boolean;
    };
    next_page_url: string;
    path: string;
    per_page: string;
    prev_page_url: string;
    to: number;
    total: number;
}

export interface Breed {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        // prepareHeaders(headers) {
        //     headers.set('x-api-key', "key here");
        //     return headers;
        // }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<CatResponse, number | void>({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`;
                },
            })
        }
    }
});


export const { useFetchBreedsQuery } = apiSlice;

