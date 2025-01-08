import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lobaro Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lobaro.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lobaro', // Usually your GitHub org/user name.
  projectName: 'iot', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-ideal-image',
      {
        name: 'assets/images/ideal-img/[name].[hash:hex:7].[width].[ext]',
        quality: 85,
        max: 4096, // max resized image's size.
        min: 1600, // min resized image's size. if original is lower, use that size.
        steps: 4, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lobaro/iot/tree/master',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // https://docusaurus.io/docs/api/docusaurus-config#themeConfig
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      hideOnScroll: false,
      title: 'docs',
      logo: {
        alt: 'Lobaro GmbH - Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
        width: '115px'
      },
      items: [
        {
          type: 'html',
          position: 'left',
          value: '<button onclick="history.back()">⬅️</button>',
        },

        {
          type: 'html',
          position: 'left',
          value: '<button onclick="history.forward()">➡️</button>',
        },
        {
          to: 'products/',
          position: 'left',
          label: 'Products',
        },



        {
          to: 'components/',
          position: 'left',
          label: 'Components',
        },

        {
          to: 'configuration/',
          position: 'left',
          label: 'Configuration',
        },



        {
          to: 'knowledge-base/',
          position: 'right',
          label: 'Knowledge Base',
        },

         /*
        {
          type: 'docSidebar',
          sidebarId: 'allDocSidebar',
          position: 'right',
          label: 'All Docs',
        },*/
        /*  {to: '/blog', label: 'Blog', position: 'left'},*/
    /*  {
           href: 'https://github.com/lobaro/iot',
           label: 'GitHub',
           position: 'right',
         },*/
        {
          href: 'https://www.lobaro.de',
          label: 'Website',
          position: 'right',
        },
      ],

    },
    footer: {
      copyright: `<div style="font-size: small">Copyright © <a href="https://www.lobaro.de" target="_blank">Lobaro GmbH</a> ${new Date().getFullYear()} | Stadtdeich 7 | D-20097 Hamburg | Germany | <a href="mailto:support@lobaro.de">support@lobaro.de</a> | <a href="https://www.lobaro.com/en/contact/" target="_blank">Legal Disclosure</a></div>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'toml'], // https://prismjs.com/#supported-languages
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
