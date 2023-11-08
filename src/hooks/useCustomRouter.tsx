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
