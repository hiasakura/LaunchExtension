

module.exports = {
  rules: [
    {
    name: 'Example Rule',
    events: [
      {
        modulePath: 'sandbox/pageTop.js',
        settings: {}
         }
       ],
    actions: [
      {
        modulePath: 'hirocafe-sample/src/lib/actions/sampleaction.js',
        settings: {}
         }
       ]
     }
  ],
  extensions: {
    'hirocafe-sample': {
      displayName: 'hirocafe-sample',
     settings: {
       msgID: 'nxn1sig'
     }
   }
  },
  property: {
    name: 'Sandbox property',
    settings: {
      domains: [
        'adobe.com',
        'example.com'
      ],
      linkDelay: 100,
      trackingCookieName: 'sat_track',
      undefinedVarsReturnEmpty: false
    }
  },
  buildInfo: {
    turbineVersion: '14.0.0',
    turbineBuildDate: '2016-07-01T18:10:34Z',
    buildDate: '2016-08-01T12:10:33Z',
    environment: 'development'
  }
};
