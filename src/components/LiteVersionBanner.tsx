"use client";

import { useState } from "react";
import { useConnectionSpeed } from "./CheckConnectionSpeed";

export default function LiteVersionBanner() {
  const { isSlowConnection, isLoading } = useConnectionSpeed();
  const [isDismissed, setIsDismissed] = useState(false);

  if (isLoading || !isSlowConnection || isDismissed) {
    return null;
  }

  return (
    <div className="fixed left-1/2 top-4 z-50 mx-4 -translate-x-1/2 transform">
      <div className="rounded-full border border-whiteish/20 bg-blackish/95 px-4 py-2 shadow-lg backdrop-blur-xs">
        <div className="flex items-center gap-3">
          <div className="size-1.5 rounded-full bg-yellow-400"></div>
          <a
            href="https://lite.pdrmenezes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-whiteish transition-colors duration-200 hover:text-lightcyan"
          >
            Slow connection? Try a lighter version
          </a>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-whiteish/40 transition-colors duration-200 hover:text-whiteish"
            aria-label="Dismiss"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
