"use strict";(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[8822],{6351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"configuration/obis-code-configuration","title":"OBIS-Code Configuration","description":"Object identification system (OBIS) Codes are used to identify the different readings of a smart meter transferred in","source":"@site/docs/configuration/obis-code-configuration.md","sourceDirName":"configuration","slug":"/configuration/obis-code-configuration","permalink":"/iot/configuration/obis-code-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/lobaro/iot/tree/master/docs/configuration/obis-code-configuration.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"OBIS-Code Configuration"},"sidebar":"allDocSidebar","previous":{"title":"LTE Network Configuration","permalink":"/iot/configuration/lte-network-configuration"},"next":{"title":"Knowledge Base","permalink":"/iot/knowledge-base/"}}');var r=n(4848),s=n(8453);const l={sidebar_position:4,title:"OBIS-Code Configuration"},o="OBIS-Code Configuration",d={},c=[{value:"Structure",id:"structure",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const t={br:"br",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"obis-code-configuration",children:"OBIS-Code Configuration"})}),"\n",(0,r.jsx)(t.p,{children:"Object identification system (OBIS) Codes are used to identify the different readings of a smart meter transferred in\nSmart Message Language (SML), which is a commonly used protocol on D0 optoelectronic interfaces. They are described in\nthe international standard IEC 62056-61."}),"\n",(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsx)(t.p,{children:"Every code consists of 6 separated group sub-identifiers. In general some of these identifiers may be omitted but our\nproducts require the full code."}),"\n",(0,r.jsxs)(t.p,{children:["The basic pattern is:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsxs)(t.strong,{children:["A-B",":C",".D.E*F"]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Group"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Examples"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"A"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1 = electricity, 8 = water"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"B"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Channel"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"0 = no channel available"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"C"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Physical Unit, depends on A"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"power, current, voltage..."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"D"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Measurement Type, depends on A und C"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"maximum, current value, energy..."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"E"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Tariff"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"0 = total, 1 = tariff 1, 2 = tariff 2 ..."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"F"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Separate Values defined by A-E"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"billing periods, 255 if not used"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Obis Code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Meaning"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1-0:1.8.0*255"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Positive active energy (A+) total [kWh]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1-0:3.8.1*255"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Positive reactive energy (Q+) in tariff T1 [kvarh]"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);