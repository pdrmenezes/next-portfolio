"use client";

import { useState, useEffect } from "react";

type ConnectionInfo = {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
};

type NavigatorWithConnection = Navigator & {
  connection?: ConnectionInfo;
};

export function useConnectionSpeed() {
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkConnectionSpeed = () => {
      if ("connection" in navigator) {
        const connection = (navigator as NavigatorWithConnection).connection;

        if (connection) {
          if (connection.effectiveType) {
            const slowTypes = ["slow-2g", "2g", "3g"];
            setIsSlowConnection(slowTypes.includes(connection.effectiveType));
          }

          if (connection.downlink && connection.downlink < 1.5) {
            setIsSlowConnection(true);
          }

          if (connection.rtt && connection.rtt > 200) {
            setIsSlowConnection(true);
          }
        }
      } else {
        const startTime = performance.now();

        const img = new Image();
        img.onload = () => {
          const endTime = performance.now();
          const loadTime = endTime - startTime;

          setIsSlowConnection(loadTime > 2000);
          setIsLoading(false);
        };

        img.onerror = () => {
          setIsSlowConnection(true);
          setIsLoading(false);
        };

        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      }

      setIsLoading(false);
    };

    checkConnectionSpeed();
  }, []);

  return { isSlowConnection, isLoading };
}
