import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "aria-ui-nuxt",
    configKey: "ariaui"
  },
  defaults: {
    addPlugin: true,
    defaultHomePath: "/",
    defaultLinkTag: "nuxt-link"
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    addPluginTemplate({
      src: resolve(runtimeDir, "plugin.ejs"),
      options
    });
  }
});

export { module as default };
