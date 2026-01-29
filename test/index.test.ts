import { describe, it, expect } from "vitest";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

describe("tailwindcss-text-box-trim", () => {
  it("generates box-trim utilities", async () => {
    const cssPath = "../index.css";
    const input = `
      @import '${cssPath}';
      
      .test-trim {
        @apply box-trim-both;
      }
    `;

    const result = await postcss([tailwindcss()]).process(input, {
      from: "test/input.css",
    });

    const css = result.css;
    expect(css).toContain("text-box-trim: var(--text-box-trim-both)");
  });

  it("generates box-edge utilities", async () => {
    const cssPath = "../index.css";
    const input = `
      @import '${cssPath}';

      .test-edge {
        @apply box-edge-cap;
      }
    `;

    const result = await postcss([tailwindcss()]).process(input, {
      from: "test/input.css",
    });

    const css = result.css;
    expect(css).toContain("text-box-edge: cap");
  });
});
