'use client'
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter, useSearchParams } from "next/navigation";

export interface CustomRouterOptions {
  preserveQuery: boolean;
}

/**
 * The `useCustomRouter` hook provides access to a customized router instance in a Next.js application.
 * It allows you to navigate between pages, access router-related functionality, and includes a `push` function
 * for programmatic navigation with optional query parameter preservation and additional navigation options.
 *
 * @returns {{
*   push: (href: string, routerOptions?: CustomRouterOptions, options?: NavigateOptions) => void
* }} - An object containing methods and properties for custom navigation and router handling.
*/
export function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  /**
   * The `push` function is used for programmatic navigation in a Next.js application. It allows you to navigate to a specified URL
   * while optionally preserving the query parameters and providing additional navigation options.
   *
   * @param {string} href - The URL you want to navigate to.
   * @param {CustomRouterOptions} [routerOptions] - An optional object containing custom router options.
   * @param {NavigateOptions} [options] - An optional object containing navigation options.
   *
   * @returns {void} - This function does not return a value; it performs the navigation action.
   */
  const push = (href: string, routerOptions?: CustomRouterOptions, options?: NavigateOptions) => {

    const actualSearchParams = searchParams.toString()

    let urlString = href

    // Append search params
    if (routerOptions?.preserveQuery)
      urlString = `${urlString}?${actualSearchParams}`

    // Perform navigation using Next.js router
    router.push(urlString, options);
  };

  return { push };
}
