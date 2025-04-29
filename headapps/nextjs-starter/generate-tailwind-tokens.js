const fs = require('fs');
const path = require('path');

// 1. Read tokens.css
const css = fs.readFileSync(path.resolve(__dirname, './src/styles/tokens.css'), 'utf8');

// 2. Extract variables
const regex = /--core-([a-zA-Z0-9-]+):\s*([^;]+);/g;
const tokens = {};

let match;
while ((match = regex.exec(css)) !== null) {
  const [_, name, value] = match;

  // Nesting logic if you want
  const keys = name.split('-');
  let current = tokens;

  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      current[keys[i]] = value.trim();
    } else {
      current[keys[i]] = current[keys[i]] || {};
      current = current[keys[i]];
    }
  }
}

// 3. Create Tailwind config content
const configContent = `/**
 * ⚙️ Auto-generated Tailwind config from design tokens.
 * ❗ Do not manually edit this file.
 */

export default {
  theme: {
    extend: ${JSON.stringify(tokens, null, 2)}
  },
  plugins: [],
};
`;

// 4. Write to tailwind.config.js
fs.writeFileSync(path.resolve(__dirname, './tailwind.config.js'), configContent, 'utf-8');
