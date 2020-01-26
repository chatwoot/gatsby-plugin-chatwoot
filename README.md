# gatsby-plugin-chatwoot
![Package](https://github.com/akshitkrnagpal/gatsby-plugin-chatwoot/workflows/Package/badge.svg?branch=master)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://akshitkrnagpal.com"><img src="https://avatars3.githubusercontent.com/u/15872348?v=4" width="100px;" alt=""/><br /><sub><b>Akshit Kr Nagpal</b></sub></a><br /><a href="https://github.com/akshitkrnagpal/gatsby-plugin-chatwoot/commits?author=akshitkrnagpal" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
