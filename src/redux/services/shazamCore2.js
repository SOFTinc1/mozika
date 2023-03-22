import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://billboard3.p.rapidapi.com",
    prepareHeaders: (headers) => {
      // headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
      // headers.set('X-RapidAPI-Key', 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVlzA');
      headers.set(
        "X-RapidAPI-Key",
        "7e312fca7emshb7cacc9a15cdd8ep13c2c1jsn4ed53ba66f27"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountryCharts: builder.query({ query: () => "/hot-100" }),
    // getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    // getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    // getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    // getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
  }),
});

export const {
  useGetCountryChartsQuery,
  // useGetSongsByGenreQuery,
  // useGetSongsByCountryQuery,
  // useGetSongsBySearchQuery,
  // useGetArtistDetailsQuery,
} = shazamCoreApi;
