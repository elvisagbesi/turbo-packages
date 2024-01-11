/* eslint-disable unicorn/prefer-module */
const contentfulManagement = require('contentful-management');
require('dotenv').config({ path: '.env.local' });

module.exports = async function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_USER_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then(space =>
      space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ALIAS),
    );
};
