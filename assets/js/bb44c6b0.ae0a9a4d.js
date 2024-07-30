"use strict";(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[2346],{1866:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=n(4848),s=n(8453);const r={sidebar_position:0,title:"Overview"},o="Lobaro IoT Platform",t={id:"platform/index",title:"Overview",description:"---",source:"@site/docs/platform/index.md",sourceDirName:"platform",slug:"/platform/",permalink:"/iot/platform/",draft:!1,unlisted:!1,editUrl:"https://github.com/lobaro/iot/tree/master/docs/platform/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Overview"},sidebar:"allDocSidebar",previous:{title:"OBIS-Code Configuration",permalink:"/iot/configuration/obis-code-configuration"},next:{title:"Integrations",permalink:"/iot/platform/integrations/"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Overview",id:"overview",level:2}];function a(A){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...A.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"lobaro-iot-platform",children:"Lobaro IoT Platform"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:["The Lobaro IoT Platform operates as a ",(0,i.jsx)(e.strong,{children:"Head End System for IoT Devices"}),". The Platform is optimized for but not limited\nto handle Lobaro devices."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Public Lobaro instance: ",(0,i.jsx)(e.a,{href:"https://platform.lobaro.com/",children:"platform.lobaro.com"})]}),"\n",(0,i.jsxs)(e.li,{children:["For On-Premise hosting check out ",(0,i.jsx)(e.a,{href:"./license",children:"Hosting & Licensing"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"The documentation will always reference the Public Lobaro instance."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"img.png",src:n(252).A+"",width:"2656",height:"1506"})}),"\n",(0,i.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Multi tenant (Organisations) with branding / white labeling"}),"\n",(0,i.jsx)(e.li,{children:"IoT Device Management"}),"\n",(0,i.jsx)(e.li,{children:"Support for all Lobaro Devices"}),"\n",(0,i.jsx)(e.li,{children:"Possibility to integrate 3rd party IoT Devices (LoRaWAN, NB-IoT, ...)"}),"\n",(0,i.jsx)(e.li,{children:"Device configuration"}),"\n",(0,i.jsx)(e.li,{children:"Firmware updates"}),"\n",(0,i.jsx)(e.li,{children:"Data parsing and persistence"}),"\n",(0,i.jsxs)(e.li,{children:["Device protocols:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"LoRaWAN Network Server"}),"\n",(0,i.jsx)(e.li,{children:"CoAP"}),"\n",(0,i.jsx)(e.li,{children:"HTTP"}),"\n",(0,i.jsx)(e.li,{children:"Manufacturer specifics"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Connect devices via:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"LoRaWAN"}),"\n",(0,i.jsx)(e.li,{children:"NB-IoT"}),"\n",(0,i.jsx)(e.li,{children:"LTE-M"}),"\n",(0,i.jsx)(e.li,{children:"GSM / LTE"}),"\n",(0,i.jsx)(e.li,{children:"etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"APIs to access or forward data to Use-Case specific applications"}),"\n",(0,i.jsx)(e.li,{children:"Scaling to handle thousands of devices"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"We offer free access to the platform for tests and integrations (up to 12 Month) with the purchase of any Lobaro device\nin our shared instance. In addition we offer private instance hosting or On-Premise (any Server with Root access)."}),"\n",(0,i.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"img.png",src:n(344).A+"",width:"921",height:"114"})}),"\n",(0,i.jsx)(e.p,{children:"You can find your organisations name next to the Logo. Admins can change their organisation by clicking the small Icon\nnext to it."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Devices:"})," Manage all devices of your organisation."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Data:"})," See incoming data of all your devices."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Integrations:"})," Manage data connections to and from other applications. (See: ",(0,i.jsx)(e.a,{href:"/iot/platform/integrations/",children:"Integrations"}),")."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Organisation:"})," Manage all organisation related data."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Configuration:"})," Platform administration of global entities independent of the Organisation (Admins only)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Tools:"})," wMbus Parser and Hardware Activation."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"The platform shows device data received via various data sources like LoRaWAN, NB.IoT, GSM, etc."}),"\n",(0,i.jsxs)(e.p,{children:["The connection to a device in handled by a ",(0,i.jsx)(e.code,{children:"Datasource"}),". Incoming data is mapped to a matching ",(0,i.jsx)(e.code,{children:"Device"}),". Raw data is saved\nas ",(0,i.jsx)(e.code,{children:"Uplink"})," Message. The ",(0,i.jsx)(e.code,{children:"Uplink"})," Message gets processed by a ",(0,i.jsx)(e.code,{children:"Parser"}),". The result of the parser is saved as ",(0,i.jsx)(e.code,{children:"Device Data"})," used\nfor visualization inside the dashboard and in outgoing APIs."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"img.png",src:n(5395).A+"",width:"836",height:"82"})})]})}function c(A={}){const{wrapper:e}={...(0,s.R)(),...A.components};return e?(0,i.jsx)(e,{...A,children:(0,i.jsx)(a,{...A})}):a(A)}},5395:(A,e,n)=>{n.d(e,{A:()=>i});const i="data:image/png;base64,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"},344:(A,e,n)=>{n.d(e,{A:()=>i});const i="data:image/png;base64,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"},252:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/platform-frontpage-7b857da575a3432831a1aec09d6d1683.png"},8453:(A,e,n)=>{n.d(e,{R:()=>o,x:()=>t});var i=n(6540);const s={},r=i.createContext(s);function o(A){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function t(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:o(A.components),i.createElement(r.Provider,{value:e},A.children)}}}]);