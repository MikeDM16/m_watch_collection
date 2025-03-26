import ReactGA from "react-ga4";

export interface AnalyticsDetails {
  page: string;
  title: string;
}
export default function AnalyticsReport(props: AnalyticsDetails) {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize("G-DY18WTJB4T");
    ReactGA.send({
      hitType: "pageview",
      page: props.page,
      title: props.title,
    });
  } else {
    console.debug(`Local analytics: page ${props.page} ${props.title}`);
  }

  return <></>;
}
