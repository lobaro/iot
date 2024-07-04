import MDXComponents from '@theme-original/MDXComponents';
import Code from '@theme/MDXComponents/Code';
// @ts-ignore
import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from '@iconify/react'; // Import the entire Iconify library.


export default {
    ...MDXComponents,
    Code,
    Image,
    Tabs,
    TabItem,
    IIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
};