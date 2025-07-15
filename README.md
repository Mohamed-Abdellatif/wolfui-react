# wolfui-react

A tiny React UI component library built with TypeScript.

## Installation

```bash
npm install wolfui-react
```

## Usage

```tsx
import { Button } from "wolfui-react";
import "wolfui-react/dist/style.css";

function App() {
  return <Button onClick={() => alert("Hello")}>Click me</Button>;
}
```

## Build & Publish

```bash
npm run build
npm publish --access public
```