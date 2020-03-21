module.exports = {
  name: 'preview',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/preview',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
