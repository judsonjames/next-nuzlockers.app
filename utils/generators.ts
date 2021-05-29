import { AxiosResponse } from "axios";

/**
 * Generator Function that generates every path needed to complete the SSG resource
 *
 * @param response Axios Data to Read
 * @param key - SSG Page Key
 * @returns SSG Paths Object
 *
 * @example `[ability.tsx]` GenerateStaticPaths(response, "ability")
 * @example `[location.tsx]` GenerateStaticPaths(response, "location")
 */
export const GenerateStaticPaths = (response: AxiosResponse, key: string) => {
  // workaround so that we can pass the correct path suffix to any SSG page
  // some items in Kalos use accented characters, we need to encode the URI
  function wrapKey(key, value) {
    const obj = {};
    obj[key] = encodeURI(value);
    return obj;
  }

  const results: any[] = response.data.results;
  const paths = results.map((result) => ({
    params: wrapKey(key, result.name),
  }));
  return {
    paths,
    fallback: false,
  };
};
