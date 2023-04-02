/* eslint-disable @typescript-eslint/no-explicit-any */
import GA from "./GoogleAnalytics";
import { siteMetadata } from "@src/core/config/siteMetadata";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (...args: any[]) => void;
    sa_event?: (...args: any[]) => void;
  }
}

const isProduction = process.env.NODE_ENV === "production";

const Analytics = () => {
  return <>{isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}</>;
};

export default Analytics;
