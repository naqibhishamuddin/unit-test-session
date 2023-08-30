module.exports = {
  extends: ["react-app"],
  overrides: [
    {
      files: ["src/__tests__/**/*.test.ts?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
  ],
};
