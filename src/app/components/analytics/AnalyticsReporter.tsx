"use client";

import { useEffect } from "react";

import AnalyticsReport from "./analyticsReport";

export default function AnalyticsReporter({ page, title }: { page: string; title: string }) {
  useEffect(() => {
    AnalyticsReport({ page, title });
  }, [page, title]);
  return null;
}
