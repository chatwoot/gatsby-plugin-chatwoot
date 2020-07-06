export const onPreInit = ({ reporter }, pluginOptions) => {
    if (!pluginOptions.baseUrl) {
        reporter.warn(
            `The Chatwoot plugin requires a server url. Did you mean to add it?`,
        );
    }
    if (!pluginOptions.websiteToken) {
        reporter.warn(
            `The Chatwoot plugin requires a website token. Did you mean to add it?`,
        );
    }
};
