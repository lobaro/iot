# Docusaurus Playground

Location to showcase features and examples for writing content in this doc with is based on Docusaurus.

* [**Official Docs**](https://docusaurus.io/docs)

<Image alt='Docusaurus'
img={require('@site/static/img/docusaurus.png')}
style={{width:'10%',paddingTop:'10px',paddingBottom:'20px'}} />

```jsx title="Include images with absolute paths and CamelCase css styles"
<Image alt='Docusaurus' 
       img={require('@site/static/img/docusaurus.png')} 
       style={{width:'10%',paddingTop:'10px',paddingBottom:'20px'}} />
```
## Images

### Center Align

A dangerous plant:
<Image alt='A dangerous plant'
img={require('./img/plant.jpg')}
style={{width:'75%',padding:'20px',marginInline: 'auto'}} />

```jsx title="Include centered images with relative paths"
<Image alt='A dangerous plant' 
       img={require('./img/plant.jpg')} 
       style={{width:'85%',padding:'20px',marginInline: 'auto'}} /><
```

:::info
Images get automatically resized by Docusaurus and must not resized manually to support faster loading of the static
page. The original plant image is 4.5 MB in size, Docusaurus' ideal-image plugin reduced the size to 272 kB. This
mechanism also depends on the requested width.
:::

### Align Right with text

<Image alt='A super small image of a dangerous plant'
style={{width:'15%',padding:'10px',float:'right'}}
img={require('./img/plant.jpg')}/>

Line 1  
Line 2  
Line 3  
Line 4

```jsx title="small image on the right"
<Image alt='A super small image of a dangerous plant'
       img={require('./img/plant.jpg')}
       style={{width:'20%',padding:'10px',float:'right'}} />
```

## Line Breaks

The make a line break these options exit:

1. Add 2 spaces at the end of a line.
2. Add a HTML `<br>` or ` tag
3. Add a `backslash`  (`\) at the end of a line

## Code Blocks
* [Docusaurus Doc](https://docusaurus.io/docs/markdown-features/code-blocks)
* [Supported Languages](https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23)

````md title="Code block for plant image"
```jsx title="Include images with relative paths"
<Image alt='A dangerous plant' 
       img={require('./img/plant.jpg')} 
       style={{width:'85%',padding:'10px'}} /> 
```
````

## Admonitions

:::note[Your Title **with** some _Markdown_ `syntax`!]
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::tip
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::warning
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::danger
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

```markdown title="Admonitions"
:::note[Your Title **with** some _Markdown_ `syntax`!]
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::tip
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::warning
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::danger
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

## Tabs
<Tabs>
    <TabItem value="apple" label="Apple" default>
        This is an apple 🍎
    </TabItem>
    <TabItem value="orange" label="Orange">
        This is an orange 🍊
    </TabItem>
    <TabItem value="banana" label="Banana">
        This is a banana 🍌
    </TabItem>
</Tabs>

```jsx title="Tabs"
<Tabs>
    <TabItem value="apple" label="Apple" default>
        This is an apple 🍎
    </TabItem>
    <TabItem value="orange" label="Orange">
        This is an orange 🍊
    </TabItem>
    <TabItem value="banana" label="Banana">
        This is a banana 🍌
    </TabItem>
</Tabs>
```
## Tables

## Allocation Table

| Block          | Address | Device          | Remark                             |
| :------------- | :-----: | :-------------- | :--------------------------------- |
| CHESTER-Z1     | `0x10`  | STM32L0         |                                    |
| CHESTER-S1     | `0x11`  | STM32L0         |                                    |
| CHESTER-M      | `0x18`  | DS2484          |                                    |
| CHESTER-M      | `0x19`  | LIS2DH12        |                                    |
| CHESTER-X8     | `0x1d`  | ADXL355         |                                    |
| CHESTER-X0     | `0x20`  | PCAL6416A       | Address in slot A                  |
| CHESTER-X0     | `0x21`  | PCAL6416A       | Address in slot B                  |
| CHESTER-R1     | `0x38`  | TCA9534A        |                                    |
| CHESTER-X6     | `0x39`  | TCA9534A        |                                    |
| CHESTER-A      | `0x3a`  | TCA9534A        |                                    |
| CHESTER-G      | `0x3b`  | TCA9534A        |                                    |
| CHESTER-G      | `0x3c`  | TCA9534A        |                                    |
| CHESTER-K1     | `0x3d`  | TCA9534A        |                                    |
| CHESTER-C1     | `0x3e`  | TCA9534A        |                                    |
| CHESTER-B1     | `0x3e`  | TCA9534A        |                                    |
| CHESTER-B1     | `0x3f`  | TCA9534A        |                                    |
| CHESTER-X5     | `0x40`  | ADS122C04       | Address in slot A                  |
| CHESTER-X5     | `0x41`  | ADS122C04       | Address in slot B                  |
| CHESTER-M      | `0x42`  | CAM-M8Q         |                                    |
| CHESTER-M      | `0x44`  | SHT30           | Not populated by default           |
| CHESTER-S2     | `0x45`  | SHT30           | External sensor                    |
| CHESTER-X3     | `0x46`  | ADS122C04 - CH1 | Address in slot A                  |
| CHESTER-X3     | `0x47`  | ADS122C04 - CH2 | Address in slot A                  |
| CHESTER-M      | `0x48`  | TMP112          |                                    |
| CHESTER-X4     | `0x49`  | TLA2021         |                                    |
| CHESTER-X10    | `0x49`  | TLA2024         |                                    |
| CHESTER-X3     | `0x4a`  | ADS122C04 - CH1 | Address in slot B                  |
| CHESTER-M      | `0x4b`  | TLA2021         |                                    |
| CHESTER-V1     | `0x4c`  | SC16IS740       |                                    |
| CHESTER-X6     | `0x4d`  | SC16IS740       |                                    |
| CHESTER-B1     | `0x4e`  | SC16IS740       |                                    |
| CHESTER-X3     | `0x4f`  | ADS122C04 - CH2 | Address in slot B                  |
| CHESTER-X2     | `0x50`  | SC16IS740       | Address in slot A                  |
| CHESTER-X2     | `0x51`  | SC16IS740       | Address in slot B                  |
| CHESTER-M      | `0x64`  | ATSHA204A       | Removed in CHESTER-M R3.3          |
| People Counter | `0x7f`  | People Counter  | Proprietary module of Adastra Labs |


