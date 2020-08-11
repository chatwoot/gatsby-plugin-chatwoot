import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    // Determine whether widget should be displayed.
    if (
        process.env.NODE_ENV === `development` &&
        !pluginOptions.includeInDevelopment
    ) {
        return null;
    }

    // Determine whether required values are present
    if (!pluginOptions.baseUrl || !pluginOptions.websiteToken) {
        return null;
    }

    return setPostBodyComponents([
        <script
            key={`gatsby-plugin-chatwoot`}
            dangerouslySetInnerHTML={{
                __html: `
                    window.chatwootSettings = ${JSON.stringify(pluginOptions.chatwootSettings || {})};
                    (function(d,t) {
                    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                    g.src="${pluginOptions.baseUrl}/packs/js/sdk.js";
                    s.parentNode.insertBefore(g,s);
                    g.onload=function(){
                    	window.chatwootSDK.run({
                    	websiteToken: "${pluginOptions.websiteToken}",
                    	baseUrl: "${pluginOptions.baseUrl}"
                    	})
                    }
                    })(document,"script");
                `.trim(),
            }}
        />,
    ]);
};
