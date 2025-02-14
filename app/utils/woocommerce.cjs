import pkg from "@woocommerce/woocommerce-rest-api";

const WooCommerceRestApi = pkg.default;

const wooClient = new WooCommerceRestApi({
  url: "https://devplayground.3dcoded.com/",

  consumerKey: `${process.env.CONSUMER_KEY}`,
  consumerSecret: `${process.env.CONSUMER_SECRET}`,
  version: "wc/v3",
});

export { wooClient };
