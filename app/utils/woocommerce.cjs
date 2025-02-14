import pkg from "@woocommerce/woocommerce-rest-api";

const WooCommerceRestApi = pkg.default;

const wooClient = new WooCommerceRestApi({
  url: "https://devplayground.3dcoded.com/",

  consumerKey: "ck_3e988ace01e50ed338f9c7874ae1caf5cb9ff643",
  consumerSecret: "cs_cbc53ee16b6c6d4547b47182caf1a9753c417065",
  version: "wc/v3",
});

export { wooClient };
