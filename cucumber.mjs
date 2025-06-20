export default {
  default: {
    import: [
      'features/step_definitions/**/*.js',
      'features/support/**/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber_report.json',
      'html:reports/cucumber_report.html'
    ]
  }
};