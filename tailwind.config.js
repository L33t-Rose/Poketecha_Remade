const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
    purge: {
        mode: 'all',
        content: ['./**/**/*.html', './**/**/*.svelte'],

        // options: {
        //     whitelistPatterns: [/svelte-/],
        //     defaultExtractor: (content) =>
        //         [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        // },
        defaultExtractor: content => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))
            const matches = broadMatches
              .concat(broadMatchesWithoutTrailingSlash)
            return matches
          },
        enabled: isProduction,
    },

    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
};
