import { GrowthBook } from "@growthbook/growthbook-react";

// Initialize GrowthBook with your API key
const growthbook = new GrowthBook({
  apiHost: process.env.REACT_APP_GROWTHBOOK_APIHOST,
  clientKey: process.env.REACT_APP_GROWTHBOOK_CLIENTKEY,
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

export default growthbook;
