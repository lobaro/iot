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
  baseUrl: '/iot/',

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
    [
      '@docusaurus/plugin-ideal-image',
      {
        name: 'assets/images/ideal-img/[name].[hash:hex:7].[width].[ext]',
        quality: 85,
        max: 1200, // max resized image's size.
        min: 300, // min resized image's size. if original is lower, use that size.
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
      hideOnScroll: true,
      title: 'Docs',
      logo: {
        alt: 'Lobaro GmbH - Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
        width: '120px'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'productsSidebar',
          position: 'left',
          label: 'Products',
        },
        {
          type: 'docSidebar',
          sidebarId: 'firmwareSidebar',
          position: 'left',
          label: 'Firmware',
        },
        {
          type: 'docSidebar',
          sidebarId: 'hardwareSidebar',
          position: 'left',
          label: 'Hardware',
        },
        {
          type: 'docSidebar',
          sidebarId: 'configurationSidebar',
          position: 'left',
          label: 'Configuration',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudSidebar',
          position: 'left',
          label: 'Lobaro Cloud',
        },
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeBaseSidebar',
          position: 'right',
          label: 'Knowledge Base',
        },
        {
          type: 'docSidebar',
          sidebarId: 'allDocSidebar',
          position: 'right',
          label: 'All Docs',
        },
      /*  {to: '/blog', label: 'Blog', position: 'left'},*/
        {
          href: 'https://github.com/lobaro/iot',
          label: 'GitHub',
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
      additionalLanguages: ['bash'], // https://prismjs.com/#supported-languages
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
