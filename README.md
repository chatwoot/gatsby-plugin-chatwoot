# gatsby-plugin-chatwoot

Quickly add the [Chatwoot](http://chatwoot.com/) live chat widget to your Gatsby site.

## Install

`npm install --save gatsby-plugin-chatwoot`
or
`yarn add gatsby-plugin-chatwoot`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
    {
        resolve: `gatsby-plugin-chatwoot`,
        options: {
            baseUrl: 'BASE_URL', // Required
            websiteToken: 'WEBSITE_TOKEN', // Required
            includeInDevelopment: false, // Optional
        },
    },
];
```
