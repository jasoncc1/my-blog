// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SJ",
  tagline: 'Data Analyst / Engineer · Azure · Python · SQL',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://yellow-beach-023875400.5.azurestaticapps.net',
  baseUrl: '/',

  organizationName: 'jasoncc1',
  projectName: 'my-blog',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      ko: {label: '한국어', htmlLang: 'ko'},
    },
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "SJ",
        items: [
          {type: 'docSidebar', sidebarId: 'projectsSidebar', position: 'left', label: 'Projects'},
          {type: 'docSidebar', sidebarId: 'azureSidebar', position: 'left', label: 'Azure Study'},
          {type: 'docSidebar', sidebarId: 'sqlSidebar', position: 'left', label: 'SQL Notes'},
          {type: 'localeDropdown', position: 'right'},
          {href: 'https://github.com/jasoncc1', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {label: 'Projects', to: '/docs/projects/nowseoul'},
              {label: 'Azure Study', to: '/docs/azure-study/overview'},
              {label: 'SQL Notes', to: '/docs/sql-notes/overview'},
            ],
          },
          {
            title: 'Contact',
            items: [{label: 'GitHub', href: 'https://github.com/jasoncc1'}],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SJ. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['sql', 'json', 'bash'],
      },
    }),
};

export default config;
