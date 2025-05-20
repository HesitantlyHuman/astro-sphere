import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import sectionize from "remark-sectionize"

import { transformerMetaHighlight } from '@shikijs/transformers';

const repo = "https://github.com/HesitantlyHuman/astro-sphere";

// https://astro.build/config
export default defineConfig({
  site: "https://hesitantlyhuman.github.io",
  base: "/astro-sphere",
  integrations: [sitemap(), solidJs(), tailwind({ applyBaseStyles: false }), mdx()],
  markdown: {
    shikiConfig: {
      transformers: [{
        pre(hast) {
          hast.properties['data-meta'] = this.options.meta?.__raw;
          // Somewhere along the line, the properties are getting encoded in a
          // way which does not preserve whitespace. See CodeSnippet.astro
          hast.properties['data-code'] = JSON.stringify(this.source);
        },
      },
      transformerMetaHighlight()],
      themes: {
        light: "github-light",
        dark: "dark-plus",
      }
    },
    remarkPlugins: [sectionize],
  },
  vite: {
    define: {
      'import.meta.env.PUBLIC_GITHUB_REPO': JSON.stringify(repo),
    }
  }
});