import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// https://docusaurus.io/docs/sidebar/autogenerated

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  allDocSidebar: [{type: 'autogenerated', dirName: '.'}],

  productsSidebar: [
    {
      type: 'category',
      label: 'Products',
      items: [
        {type: 'autogenerated', dirName: 'products'},
      ],
    },
  ],


  wmbusGwSidebar: [
    {
      type: 'category',
      label: 'Wireless M-BUS Gateways',
      items: [
          {type: 'autogenerated', dirName: 'products/smart-metering/wireless-mbus'},
      ],
    },
  ],


  smartMeteringSidebar: [
    {
      type: 'category',
      label: 'Smart Metering Gateways',
      items: [
        {type: 'autogenerated', dirName: 'products/smart-metering'},
      ],
    },
  ],

 // smartMeteringSidebar: [{type: 'autogenerated', dirName: 'products/smart-metering'}],

  platformSidebar: [
    {
      type: 'category',
      label: 'IoT Platform',
      items: [
        {type: 'autogenerated', dirName: 'platform'},
      ],
    },
  ],

  /*
  knowledgeBaseSidebar: [
    {
      type: 'category',
      label: 'Knowledge Base',
      items: [
        {type: 'autogenerated', dirName: 'knowledge-base'},
      ],
    },
  ],
*/
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
