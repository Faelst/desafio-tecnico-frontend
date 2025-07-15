import { defineConfig } from 'unocss';
import { presetAttributify } from '@unocss/preset-attributify';
import { presetIcons } from '@unocss/preset-icons';
import { presetMini } from '@unocss/preset-mini';
import { presetTypography } from '@unocss/preset-typography';

const mdiCollection = import('@iconify-json/mdi/icons.json');
const iconCollections = () => {
  return {
    mdi: () => mdiCollection.then((i) => i.default),
  };
};

export default defineConfig({
  presets: [
    presetAttributify(),
    presetMini({ attributifyPseudo: true }),
    presetIcons({ collections: iconCollections() }),
    presetTypography(),
  ],
  theme: {
    fontFamily: {
      sans: '"Poppins", sans-serif',
    },
    colors: {
      'background-light': '#F7F9FC',
      'font-disabled': '#CBD5E1',
      'font-light': '#64748B',
      'font-dark': '#334155',
      'blue-light': '#409EFF',
    },
  },
});
