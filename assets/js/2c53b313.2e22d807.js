"use strict";(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[4867],{8133:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var A=i(4848),t=i(8453);const r={},d="Administration",s={id:"platform/administration/index",title:"Administration",description:"admin",source:"@site/docs/platform/administration/index.md",sourceDirName:"platform/administration",slug:"/platform/administration/",permalink:"/iot/platform/administration/",draft:!1,unlisted:!1,editUrl:"https://github.com/lobaro/iot/tree/master/docs/platform/administration/index.md",tags:[],version:"current",frontMatter:{},sidebar:"allDocSidebar",previous:{title:"Integrations",permalink:"/iot/platform/integrations/"},next:{title:"Changelog",permalink:"/iot/platform/administration/changelog"}},l={},a=[{value:"Hardware",id:"hardware",level:2},{value:"Bulk Operations",id:"bulk-operations",level:3},{value:"New Hardware",id:"new-hardware",level:3},{value:"Import",id:"import",level:3},{value:"CSV Import File Format",id:"csv-import-file-format",level:4}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.h1,{id:"administration",children:"Administration"}),"\n",(0,A.jsx)(n.admonition,{title:"Required roles",type:"info",children:(0,A.jsx)(n.p,{children:"admin"})}),"\n",(0,A.jsx)(n.p,{children:'Global platform admins have access to the "Configuration" page from the main navigation.'}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"nav-configuration.png",src:i(5091).A+"",width:"780",height:"90"})}),"\n",(0,A.jsx)(n.p,{children:"The Configuration page gives access to entities independent of an Organisation."}),"\n",(0,A.jsx)(n.h2,{id:"hardware",children:"Hardware"}),"\n",(0,A.jsx)(n.p,{children:"On the hardware page, all devices independent of the organisation can be managed."}),"\n",(0,A.jsx)(n.p,{children:"In the top right corner you can select different actions."}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"actions.png",src:i(104).A+"",width:"385",height:"36"})}),"\n",(0,A.jsx)(n.h3,{id:"bulk-operations",children:"Bulk Operations"}),"\n",(0,A.jsx)(n.p,{children:"Select one or multiple devices from the list to execute bulk updates like changing of the Organisation or Device Type."}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"bulk-operations.png",src:i(2354).A+"",width:"1195",height:"296"})}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsx)(n.li,{children:"Select all relevant devices (search box and pagination can be used with out looking the selection)"}),"\n",(0,A.jsx)(n.li,{children:'Click "Bulk Operations"'}),"\n"]}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"bulk-operations-update.png",src:i(7298).A+"",width:"973",height:"429"})}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsx)(n.li,{children:"A list of devices to update is shown below the form"}),"\n",(0,A.jsx)(n.li,{children:'Select what properties update and click "Bulk Update"'}),"\n"]}),"\n",(0,A.jsx)(n.h3,{id:"new-hardware",children:"New Hardware"}),"\n",(0,A.jsx)(n.p,{children:"Create a new device. Each device needs:"}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsx)(n.li,{children:"Address"}),"\n",(0,A.jsx)(n.li,{children:"Name (optional, default is the Address)"}),"\n",(0,A.jsx)(n.li,{children:'Device Type (optional, default is the "Generic Device")'}),"\n",(0,A.jsx)(n.li,{children:"Organisation (optional)"}),"\n"]}),"\n",(0,A.jsx)(n.h3,{id:"import",children:"Import"}),"\n",(0,A.jsx)(n.p,{children:"Import Hardware from a CSV file."}),"\n",(0,A.jsx)(n.h4,{id:"csv-import-file-format",children:"CSV Import File Format"}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsx)(n.li,{children:"Column names in first row"}),"\n"]}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.strong,{children:"Columns:"})}),"\n",(0,A.jsxs)(n.table,{children:[(0,A.jsx)(n.thead,{children:(0,A.jsxs)(n.tr,{children:[(0,A.jsx)(n.th,{children:"Column Name"}),(0,A.jsx)(n.th,{children:"Required"}),(0,A.jsx)(n.th,{children:"Type"}),(0,A.jsx)(n.th,{children:"Description"})]})}),(0,A.jsxs)(n.tbody,{children:[(0,A.jsxs)(n.tr,{children:[(0,A.jsx)(n.td,{children:"address"}),(0,A.jsx)(n.td,{}),(0,A.jsx)(n.td,{children:"string"}),(0,A.jsxs)(n.td,{children:["Globally unique address of the device, e.g. IMEI or DevEUI.",(0,A.jsx)("br",{}),"The address that is used to assign Uplinks to the device."]})]}),(0,A.jsxs)(n.tr,{children:[(0,A.jsx)(n.td,{children:"name"}),(0,A.jsx)(n.td,{children:"optional"}),(0,A.jsx)(n.td,{children:"string"}),(0,A.jsxs)(n.td,{children:["User friendly name of the device.",(0,A.jsx)("br",{}),"Default: the address of the device."]})]}),(0,A.jsxs)(n.tr,{children:[(0,A.jsx)(n.td,{children:"serial"}),(0,A.jsx)(n.td,{children:"optional"}),(0,A.jsx)(n.td,{children:"string"}),(0,A.jsxs)(n.td,{children:["Serial number printed on the device.",(0,A.jsx)("br",{}),"For Lobaro devices, the firmware typically has no knowledge of the serial."]})]}),(0,A.jsxs)(n.tr,{children:[(0,A.jsx)(n.td,{children:"firmware"}),(0,A.jsx)(n.td,{children:"optional"}),(0,A.jsx)(n.td,{children:"string"}),(0,A.jsx)(n.td,{children:"Initial Firmware name and version on the device as user friendly string"})]}),(0,A.jsxs)(n.tr,{children:[(0,A.jsx)(n.td,{children:"config"}),(0,A.jsxs)(n.td,{children:[(0,A.jsx)(n.strong,{children:"deprecated"}),(0,A.jsx)("br",{}),"use cfg:",(0,A.jsx)(n.code,{children:"<key>"})]}),(0,A.jsx)(n.td,{children:"json"}),(0,A.jsxs)(n.td,{children:["A whole config can be imported as JSON object. e.g. ",(0,A.jsx)(n.code,{children:'{"key":"value"}'}),(0,A.jsx)("br",{}),"Warning: this requires a lot of escaping in CSV."]})]}),(0,A.jsxs)(n.tr,{children:[(0,A.jsxs)(n.td,{children:["cfg:",(0,A.jsx)(n.code,{children:"<key>"})]}),(0,A.jsx)(n.td,{children:"optional"}),(0,A.jsx)(n.td,{children:"string"}),(0,A.jsxs)(n.td,{children:["Initial config value of the device where ",(0,A.jsx)(n.code,{children:"<key>"})," is the technical name of the config value. ",(0,A.jsx)("br",{}),"Multiple of these columns can exist. ",(0,A.jsx)("br",{}),"e.g. ",(0,A.jsx)(n.code,{children:"cfg:DevEUI"})," to specify the config value of the parameter ",(0,A.jsx)(n.code,{children:"DevEUI"}),". ",(0,A.jsx)("br",{}),'Users can export the Initial config values on the "Hardware Activation" page based on the settings in the "Device Type"']})]})]})]}),"\n",(0,A.jsx)(n.p,{children:"There are preferred config values for some device classes. Technically the name can vary, but might need some custom setup inside the device type."}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.strong,{children:"LoRaWAN"})}),"\n",(0,A.jsx)(n.p,{children:"LoRaWAN specific config keys:"}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsx)(n.li,{children:"DevEUI - Unique address of the LoRaWAN Device"}),"\n",(0,A.jsx)(n.li,{children:"JoinEUI - optional JoinEUI or AppEUI of the LoRaWAN device"}),"\n",(0,A.jsx)(n.li,{children:"AppKey - AppKey of the LoRaWAN Device"}),"\n",(0,A.jsx)(n.li,{children:"NwkKey - LoRaWAN 1.1 only"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,A.jsx)(n,{...e,children:(0,A.jsx)(o,{...e})}):o(e)}},104:(e,n,i)=>{i.d(n,{A:()=>A});const A="data:image/png;base64,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"},7298:(e,n,i)=>{i.d(n,{A:()=>A});const A=i.p+"assets/images/bulk-operations-update-83cdf35011eae26a53ba60d9539360a6.png"},2354:(e,n,i)=>{i.d(n,{A:()=>A});const A=i.p+"assets/images/bulk-operations-c1fb9b3364eecf3d617070a2f8b998f2.png"},5091:(e,n,i)=>{i.d(n,{A:()=>A});const A="data:image/png;base64,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"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var A=i(6540);const t={},r=A.createContext(t);function d(e){const n=A.useContext(r);return A.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),A.createElement(r.Provider,{value:n},e.children)}}}]);