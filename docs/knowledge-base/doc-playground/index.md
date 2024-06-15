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



