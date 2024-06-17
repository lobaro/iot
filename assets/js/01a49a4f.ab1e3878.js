"use strict";(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[185],{8794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(4848),i=t(8453);const o={sidebar_position:4,displayed_sidebar:"configurationSidebar",title:"LTE Network Configuration"},s="LTE Network Configuration",l={id:"configuration/lte-network-configuration",title:"LTE Network Configuration",description:"In order for the Lobaro devices to be able to dial into the mobile network, it may be necessary to configure the network",source:"@site/docs/configuration/lte-network-configuration.md",sourceDirName:"configuration",slug:"/configuration/lte-network-configuration",permalink:"/iot/configuration/lte-network-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/lobaro/iot/tree/master/docs/configuration/lte-network-configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,displayed_sidebar:"configurationSidebar",title:"LTE Network Configuration"},sidebar:"configurationSidebar",previous:{title:"CRON Configuration",permalink:"/iot/configuration/cron-configuration"},next:{title:"OBIS-Code Configuration",permalink:"/iot/configuration/obis-code-configuration"}},d={},c=[{value:"Configuration Parameters",id:"configuration-parameters",level:2},{value:"List of common APN and Operators",id:"list-of-common-apn-and-operators",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lte-network-configuration",children:"LTE Network Configuration"}),"\n",(0,r.jsx)(n.p,{children:"In order for the Lobaro devices to be able to dial into the mobile network, it may be necessary to configure the network\nrelated parameters correctly."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Lobaro devices normally perform a network selection based on the profile stored on the SIM card inserted in the device.\nThis means that in most case the mobile ",(0,r.jsx)(n.code,{children:"operator"})," and ",(0,r.jsx)(n.code,{children:"band"})," ",(0,r.jsx)(n.strong,{children:"have\nnot"})," to be configured since the devices perform an autodetect based on internal metrics. In some cases it may be\nbeneficial\nto set the device to use a specific operator, then the operator, and band configuration parameters of the device comes\ninto play."]}),(0,r.jsxs)(n.p,{children:["In contrast to this the ",(0,r.jsx)(n.code,{children:"apn"})," parameter should be set correctly in any case. The ",(0,r.jsx)(n.code,{children:"*"})," (autodetect) feature will only work\nfor few sim cards, like ",(0,r.jsx)(n.strong,{children:"1NCE"})," and ",(0,r.jsx)(n.strong,{children:"Vodafone Easy Connect"})," SIM cards."]})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-parameters",children:"Configuration Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Our cellular IoT (LTE-M or NB-IoT) devices usually allow the configuration of"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"APN"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Should be configured to SIM specific value, e.g. ",(0,r.jsx)(n.code,{children:"iot.1nce.net"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"*"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["APN Autodetect -> Modem uses internally known APN","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Will only work for 1NCE and Vodafone EasyConnect"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["APN autodetect not possible: Modem falls back to ",(0,r.jsx)(n.code,{children:"Not set"})," (see below)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Not set"})," -> Modem uses SIM internal information"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Operator"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usually ",(0,r.jsx)(n.strong,{children:"no need"})," to configure it explicitly to some specific MCC+MNC operator code like ",(0,r.jsx)(n.code,{children:"26201"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"Not set"})," -> Modem performs automatic network selection"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Band"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usually ",(0,r.jsx)(n.strong,{children:"no need"})," to configure it explicitly"]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"Not set"})," -> Modem will use one of these bands ",(0,r.jsx)(n.code,{children:"3,8,20"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Not set"})," denotes that the configuration parameter field is empty."]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["If you decide to configure the ",(0,r.jsx)(n.code,{children:"operator"})," and/or ",(0,r.jsx)(n.code,{children:"band"})," you may decrease the devices coverage and ability to find\nalternative networks at a specific location. Use this configuration parameters only if you know what you are doing!"]})}),"\n",(0,r.jsxs)(n.p,{children:["For initial configuration of these parameters please use the ",(0,r.jsx)(n.a,{href:"/iot/configuration/lobaro-config-tool",children:"Lobaro Maintenance Tool"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"list-of-common-apn-and-operators",children:"List of common APN and Operators"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MCC = Mobile Country Code"}),"\n",(0,r.jsx)(n.li,{children:"MNC = Mobile Network Code"}),"\n",(0,r.jsx)(n.li,{children:"Operator = MCC+MNC (Config Parameter for Lobaro Devices)"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Network"}),(0,r.jsx)(n.th,{children:"Country"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"Operator"})}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"MCC"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"MNC"}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"APN"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Deutsche Telekom"}),(0,r.jsx)(n.td,{children:"Germany"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"26201"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"262"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internet.m2mportal.de"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1NCE"}),(0,r.jsx)(n.td,{children:"Germany"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"*"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"iot.1nce.net"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vodafone Deutschland"}),(0,r.jsx)(n.td,{children:"Germany"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"26202"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"262"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"02"}),(0,r.jsxs)(n.td,{children:["IoT Easy Connect: ",(0,r.jsx)(n.strong,{children:"lpwa.vodafone.com"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Telefonica (O2)"}),(0,r.jsx)(n.td,{children:"Germany"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"26203"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"262"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"03"}),(0,r.jsxs)(n.td,{children:["IoT Sim Prepaid: ",(0,r.jsx)(n.strong,{children:"iotde.telefonica.com"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"T-Mobile Austria GmbH (Magenta)"}),(0,r.jsx)(n.td,{children:"Austria"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"23203"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"232"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"03"}),(0,r.jsx)(n.td,{children:"?"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TDC A/S"}),(0,r.jsx)(n.td,{children:"Denmark"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"23801"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"238"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"01"}),(0,r.jsx)(n.td,{children:"?"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Telenor Denmark"}),(0,r.jsx)(n.td,{children:"Denmark"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"23802"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"238"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"02"}),(0,r.jsx)(n.td,{children:"?"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Telia DK"}),(0,r.jsx)(n.td,{children:"Denmark"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"23820"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"238"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(n.td,{children:"?"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tele2"}),(0,r.jsx)(n.td,{children:"Sweden"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"24007"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"240"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"07"}),(0,r.jsx)(n.td,{children:"?"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COM4"}),(0,r.jsx)(n.td,{children:"Norway"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"24202"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"242"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"02"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"com4"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Other provider codes and deployed bands are listed in\na ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Mobile_Network_Codes_in_ITU_region_2xx_(Europe)",children:"list of mobile operator codes"})," on\nWikipedia."]}),"\n",(0,r.jsx)(n.p,{children:"Additional information on operators and bands can be found here:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://halberdbastion.com/intelligence/mobile-networks",children:"halberdbastion.com"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://mcc-mnc.com/",children:"mcc-mnc.com"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);