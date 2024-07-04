---
sidebar_position: 99
draft: true
---

# Docusaurus Playground

Location to showcase features and examples for writing content in this doc with is based on Docusaurus.

* [**Official Docs**](https://docusaurus.io/docs)

:::tip[Development Page Only]
This page is marked as draft and **will not** be included in builds.
:::

## Icons

From https://docusaurus.community/

<IIcon icon="charm:github" height="48" /> This is a GitHub icon.

```jsx title="Include Icons"
<IIcon icon="mdi:github" height="48" /> This is a GitHub icon.
```

Iconify have a superb [Icon Explorer](https://icon-sets.iconify.design/) where you can search for icons and copy the code to use in your documentation.

## Images

<Image alt='docusaurus'
img={require('@site/static/img/docusaurus.png')}
style={{width:'10%',paddingTop:'10px',paddingBottom:'10px'}} />

```jsx title="Include images with absolute paths to static folder"
<Image alt='docusaurus'
       img={require('@site/static/img/docusaurus.png')}
       style={{width: '10%', paddingTop: '10px', paddingBottom: '10px'}}/>
```

### Center Align

A dangerous plant:
<Image alt='A dangerous plant'
img={require('./img/plant.jpg')}
style={{width:'75%',padding:'10px',marginInline: 'auto'}} />

```jsx title="Include centered images with relative paths and CamelCase css styles"
<Image alt='A big dangerous plant'
       img={require('./img/plant.jpg')}
       style={{width: '85%', padding: '10px', marginInline: 'auto'}}/>
```

:::info
Images get automatically resized by Docusaurus and must not resized manually to support faster loading of the static
page. The original plant image is 4.5 MB in size, Docusaurus' ideal-image plugin reduced the size to 272 kB. This
mechanism also depends on the requested width.

Images should be stored nearby their markdown files in a `./img` folder.
:::

### Align Right with text

<Image alt='A tiny image of a dangerous plant'
style={{width:'15%',padding:'10px',float:'right'}}
img={require('./img/plant.jpg')}/>

Line 1  
Line 2  
Line 3  
Line 4

```jsx title="small image on the right"
<Image alt='A tiny image of a dangerous plant'
       img={require('./img/plant.jpg')}
       style={{width: '20%', padding: '10px', float: 'right'}}/>

Line
1
Line
2
Line
3
Line
4
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
<Image alt='A super small image of a dangerous plant'
       img={require('./img/plant.jpg')}
       style={{width:'20%',padding:'10px',float:'right'}} />
```
````

## Admonitions

See also: https://docusaurus.io/docs/markdown-features/admonitions

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

| Block  | Address | Device | Remark |
|:-------|:-------:|:-------|:-------|
| Lobaro | `0x10`  | xxxx   |        |
| Lobaro | `0x11`  | xxxx   |        |
| Lobaro | `0x18`  | xxxx   |        |

```markdown title="Tables"
| Block  | Address | Device | Remark            |
|:-------|:-------:|:-------|:------------------|
| Lobaro | `0x10`  | xxxx   |                   |
| Lobaro | `0x11`  | xxxx   |                   |
| Lobaro | `0x18`  | xxxx   |                   |
```

:::tip
Use WebStorms `Reformat Code` feature to make nice formated tabled in the markdown sources!
:::

### Controlled widths of columns

| Cron definition <div style={{width:'185px'}}/> | Description                                                                                                                                            |
|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ` 0 0 11 1W,15W * *  `                         | 11am on the days closest to the 1st and the 15th day each month that are not Saturdays or Sundays.                                                     |
| ` 0 0 15 1,L * *     `                         | 3pm on the first and last day of each month.                                                                                                           |
| ` 0 0 1 ? * 2L       `                         | 1am on the last Tuesday of each month.                                                                                                                 |
| ` H H H(0-2) * * *   `                         | Every day at a fixed pseudo random time between 00:00:00 and 02:59:59.Same time each day for a given device, but different time for different devices. |
| ` H H(0-9)/10 * * * *`                         | Every 10 minutes, but at a fixed time, randomly but consistently picked for each device.                                                               |

```markdown title="Table with fixed width of first column"
| Cron definition <div style={{width:'185px'}}/> | Description                                                                                                                                            |
|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ` 0 0 11 1W,15W * *  `                         | 11am on the days closest to the 1st and the 15th day each month that are not Saturdays or Sundays.                                                     |
| ` 0 0 15 1,L * *     `                         | 3pm on the first and last day of each month.                                                                                                           |
| ` 0 0 1 ? * 2L       `                         | 1am on the last Tuesday of each month.                                                                                                                 |
| ` H H H(0-2) * * *   `                         | Every day at a fixed pseudo random time between 00:00:00 and 02:59:59.Same time each day for a given device, but different time for different devices. |
| ` H H(0-9)/10 * * * *`                         | Every 10 minutes, but at a fixed time, randomly but consistently picked for each device.                                                               |
```

By using the `div` tag no unwanted line breaks happen, which in this example case would lead too hard to read CRON
definitions.

## File Downloads

Files should be placed nearby the doc source files in a `./files` directory.

<table><tr>
    <td><Image alt='PDF Download' img={require('@site/static/img/pdf.png')} style={{width: '32px'}}/></td>
    <td><a target="\_blank" href={require('./files/en---sensusrf-brochure.pdf').default}>Download this PDF </a></td>
</tr></table>

```jsx title="Download"
<table><tr>
    <td><Image alt='PDF Download' img={require('@site/static/img/pdf.png')} style={{width: '32px'}}/></td>
    <td><a target="\_blank" href={require('./files/en---sensusrf-brochure.pdf').default}>Download this PDF </a></td>
</tr></table>
```

## Horizontal Rule

---

```markdown title="Three dashes form a horizontal rule in md"
---
```
