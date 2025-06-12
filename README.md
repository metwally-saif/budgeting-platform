# Budget AI

Budget AI is a web application for managing personal finances. It is built with **React**, **TypeScript** and **Vite**, using **AWS Amplify** for authentication and data access. The app provides budgeting tools such as expense tracking, goal planning and simple visualizations.

## Getting Started

```bash
# Install dependencies
yarn install

# Start the development server
yarn dev
```

## Useful Scripts

- `yarn lint` – run ESLint
- `yarn format` – format files with Prettier

## Project Structure

## Running tests

After installing dependencies, execute:

```bash
npm test
```
to run the Vitest suite.

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
