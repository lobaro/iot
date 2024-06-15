# Docusaurus

Location to showcase features and examples for writing content in this doc with is based on Docusaurus.

* [**Official Docs**](https://docusaurus.io/docs)

<Image alt='Docusaurus'
img={require('@site/static/img/docusaurus.png')}
style={{width:'10%',paddingTop:'10px',paddingBottom:'20px'}}
/>

```jsx title="Include images with absolute paths and CamelCase css styles"
<Image alt='Docusaurus' 
       img={require('@site/static/img/docusaurus.png')} 
       style={{width:'10%',paddingTop:'10px',paddingBottom:'20px'}} />
```
## Images

<Image alt='A dangerous plant'
img={require('./img/plant.jpg')}
style={{width:'75%',padding:'20px'}} />

```jsx title="Include images with relative paths"
<Image alt='A dangerous plant' 
       img={require('./img/plant.jpg')} 
       style={{width:'85%',padding:'10px'}} />
```

:::info
Images get automatically resized by Docusaurus and must not resized manually to support faster loading of the static
page. The original plant image is 4.5 MB in size, Docusaurus' ideal-image plugin reduced the size to 272 kB. This
mechanism also depends on the requested width.
:::

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

:::note
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
:::note
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



