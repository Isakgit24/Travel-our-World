README med: vad appen gör, hur man kör den lokalt ( npm install , ev. .env , npm run dev ), vilket
ramverk du valde och varför, vilka fördjupningar du gjort, och länk till deployment. README ska också
ha:
AI-redovisning: vilka AI-verktyg du har använt (t.ex. ChatGPT, Claude, Copilot) och till vad, t.ex.
felsökning, förklaringar eller kodförslag. Har du inte använt något skriver du det. Du ska kunna
förklara all kod i projektet, även den du fick hjälp med.
Reflektion (3–5 meningar): vad gick bra, vad var svårast, och vad skulle du göra annorlunda nästa
gång?





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
