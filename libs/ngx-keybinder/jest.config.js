module.exports = {
  name: 'ngx-keybinder',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-keybinder',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
