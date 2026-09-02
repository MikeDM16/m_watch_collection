import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

/**
 * Flat config. `next lint` was removed in Next 16, so linting now runs through
 * the ESLint CLI (`npm run lint`) and through lint-staged on commit.
 *
 * `prettier` goes last so it can switch off the stylistic rules that would
 * otherwise fight the formatter.
 */
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  {
    rules: {
      // collectionData.tsx reaches every model through require(), by design:
      // it is the one place that must not pull 343 modules into the graph
      // eagerly. See scripts/generate-collection-index.ts, which parses it.
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  {
    // The catalogue: ~350 hand-written data files that declare objects and
    // nothing else. They are data, not logic, and the rules below only ever
    // fire on the shapes the authoring tool produces.
    files: ["src/app/data/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  {
    // The book generator renders to PDF through @react-pdf/renderer, whose
    // <Image> is not the DOM element the a11y rules assume — it has no alt
    // prop to require, and nothing here ever reaches a browser.
    files: ["src/app/components/pdf/**/*.{ts,tsx}"],
    rules: {
      "jsx-a11y/alt-text": "off",
    },
  },

  globalIgnores([
    // Defaults of eslint-config-next, which are dropped once we set our own.
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Standalone tools with their own toolchains.
    "profiling/**",
    "scripts/__pycache__/**",
    "public/**",
    "playwright-report/**",
    "test-results/**",
  ]),
]);
