'use client'
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter, useSearchParams } from "next/navigation";

export interface CustomRouterOptions {
  preserveQuery: boolean;
}

// Custom hook for extending Next.js router functionality
export function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const push = (href: string, routerOptions?: CustomRouterOptions, options?: NavigateOptions) => {
    const url = new URL(href.includes("http") ? href : window.location.host + href);

    if (routerOptions?.preserveQuery) {
      // Preserve current query parameters if necessary
      searchParams.forEach((val, key) => {
        url.searchParams.append(key, val);
      });
    }

    let urlString = url.toString();

    if (!href.includes("http")) {
      // Adjust the URL to a relative path if it's not a full URL
      urlString = urlString.substring(urlString.indexOf("/"));
    }

    // Perform navigation using Next.js router
    router.push(urlString, options);
  };

  return { push };
}
