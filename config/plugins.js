module.exports = ({ env }) => ({
  'netlify-deployments': {
    enabled: true,
    config: {
      accessToken: env('NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN'),
      sites: [
        {
          name: 'netlifystrapi',
          id: '2e28e8ce-e8e6-404e-b5dc-7aa72729cfd8',
          buildHook:
            'https://api.netlify.com/build_hooks/640df518be259f1b8cfe229f',
          branch: 'main', // optional
        },
      ],
    },
  },
})
