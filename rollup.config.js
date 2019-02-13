export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundles/dateInterval.umd.js',
    format: 'umd',
    name: 'ng-date-interval',
    globals: {
      '@angular/core': 'vendor._angular_core',
      '@angular/common': 'vendor._angular_common',
    },
  },
  external: [
    '@angular/core',
    '@angular/common',
    'date_format'
  ],
  onwarn: (warning) => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.includes(warning.code)) return;
    console.error(warning);
  }
};
