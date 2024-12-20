const { OpenFeature } = require('@openfeature/server-sdk');
const { HyphenProvider } = require('@hyphen/openfeature-server-provider');

const publicKey = "public_b3JnXzY2ZjMwYWJiNjdlYmM2YmIwYzVlMGFmNzpwcm9qXzY2ZjMwYWJjNjdlYmM2YmIwYzVlMGFmZDozVWpnbE40N3RCVzZEWGZxZkVqYw==";

const options = {
  application: 'test-app',
  environment: 'development',
};

(async () => {
  await OpenFeature.setProviderAndWait(new HyphenProvider(publicKey, options));

  const client = OpenFeature.getClient();

  const flagDetails1 = await client.getBooleanDetails('demo-toggle', false);

  console.log(flagDetails1.value); // true or false
})();