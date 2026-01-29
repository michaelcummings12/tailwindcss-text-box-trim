# tailwindcss-text-box-trim

[![npm version](https://img.shields.io/npm/v/tailwindcss-text-box-trim.svg)](https://www.npmjs.com/package/tailwindcss-text-box-trim)
[![GitHub](https://img.shields.io/github/license/michaelcummings12/tailwindcss-text-box-trim)](https://github.com/michaelcummings12/tailwindcss-text-box-trim/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/michaelcummings12/tailwindcss-text-box-trim?style=social)](https://github.com/michaelcummings12/tailwindcss-text-box-trim)

Tailwind CSS v4 utilities for `text-box-trim` and `text-box-edge`.

## Installation

Install the package via npm:

```bash
npm install tailwindcss-text-box-trim
```

## Usage

This package is designed for **Tailwind CSS v4**.

Import the CSS in your main CSS file (e.g., `global.css`):

```css
@import "tailwindcss";
@import "tailwindcss-text-box-trim";
```

## Browser Support

`text-box-trim` is baseline available in **Chrome 133+** and **Safari 18.2+**.

Firefox support is [pending](https://bugzilla.mozilla.org/show_bug.cgi?id=1816038).

[![Can I use](https://caniuse.bitsofco.de/image/css-text-box-trim.png)](https://caniuse.com/css-text-box-trim)

### Utilities

#### `box-trim-*`

- `box-trim-both`: sets `text-box-trim: trim-both`
- `box-trim-start`: sets `text-box-trim: trim-start`
- `box-trim-end`: sets `text-box-trim: trim-end`
- `box-trim-none`: sets `text-box-trim: none`

#### `box-edge-*`

- `box-edge-text`: sets `text-box-edge: text`
- `box-edge-cap`: sets `text-box-edge: cap`
- `box-edge-ex`: sets `text-box-edge: ex`
- `box-edge-alphabetic`: sets `text-box-edge: alphabetic`
- `box-edge-ideographic`: sets `text-box-edge: ideographic`

### Customization

The utilities use theme variables allowing for customization.

### Usage with tailwind-merge

Since these utilities do not collide with standard Tailwind classes (like `text-*` colors or sizes), **configuration is optional**.

However, if you want to support deduplication (e.g., ensuring `box-trim-both` overrides `box-trim-none` properly when both are present), you can configure it as follows:

```typescript
import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "box-trim": [{ "box-trim": ["both", "start", "end", "none"] }],
      "box-edge": [
        { "box-edge": ["text", "cap", "ex", "alphabetic", "ideographic"] },
      ],
    },
  },
});
```
