module.exports = {
  name: 'preview',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/preview',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
