"use client";

import * as React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// This implementation is taken from https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function EmotionCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = React.useState(() => {
    const cache = createCache({
      key: "css",
      prepend: true,
    });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      const serialized = cache.inserted[name];
      if (typeof serialized !== "boolean") {
        styles += serialized;
      }
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
