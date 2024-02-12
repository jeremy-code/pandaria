/** @type {import('lint-staged').Config} */
module.exports = {
  /**
   * Prevents turbo from seeing the filenames as tasks, and instead passes them as arguments
   *
   * See {@link https://turbo.build/repo/docs/reference/command-line-reference/run}
   */
  "*.{js,jsx,ts,tsx}": "yarn lint --",
};
