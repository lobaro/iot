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
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
         // routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lobaro/iot/tree/master',
        },
        blog: false,
       /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
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
    navbar: {
      hideOnScroll: true,
      title: 'Docs',
      logo: {
        alt: 'Lobaro GmbH - Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
        width: '100px'
      },
      items: [
          /*
        {
          type: 'docSidebar',
          sidebarId: 'productsSidebar',
          position: 'left',
          label: 'All Products',
        },*/
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com',
            },
            {
              type: 'doc',
              label: 'Modbus',
              docId: 'knowledge-base/modbus',
            },
            // ... more items
          ],
        },
        {
          type: 'html',
          position: 'right',
          value: '<button>Give feedback</button>',
        },
        {
          type: 'docSidebar',
          sidebarId: 'MeteringGwSidebar',
          position: 'left',
          label: 'Metering Gateways',
        },
          /*
        {
          type: 'docSidebar',
          sidebarId: 'wmbusGwSidebar',
          position: 'left',
          label: 'Wireless M-BUS Gateways',
        },*/
        {
          type: 'docSidebar',
          sidebarId: 'platformSidebar',
          position: 'left',
          label: 'IoT Platform',
        },
          /*
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeBaseSidebar',
          position: 'right',
          label: 'Knowledge Base',
        },*/
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
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/lobaro/',
            },
          ],
        },
        {
          title: 'More',
          items: [
           /* {
              label: 'Docs',
              to: '/docs',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/lobaro/iot',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lobaro GmbH.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
