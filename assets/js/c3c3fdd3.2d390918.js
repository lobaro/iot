(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[8622],{9564:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/images/ideal-img/Hybrid-Connectivity-highRes.a71ede1.1108.png 1108w",images:[{path:n.p+"assets/images/ideal-img/Hybrid-Connectivity-highRes.a71ede1.1108.png",width:1108,height:316}],src:n.p+"assets/images/ideal-img/Hybrid-Connectivity-highRes.a71ede1.1108.png",toString:function(){return n.p+"assets/images/ideal-img/Hybrid-Connectivity-highRes.a71ede1.1108.png"},placeholder:void 0,width:1108,height:316},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAdUlEQVR4nDXDuwrCMABA0fz/h4gEHBTsKFUQBKsRN62IivRBk9QYstg2Vxw8cEThLKVpGEnJcjYl7HdY71HnK/n9ydFFcvdBSLVinKUkhw2n2wX8m0dRMVmsSbeKedmR2Q7RDwN9jGhjqOqaRmv0b/sihMDfF5ftbOzIpZURAAAAAElFTkSuQmCC"}},2587:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=n(4848),l=n(8453);const r={sidebar_position:1,title:"Configuration Parameter"},d="Configuration",s={id:"components/firmware/app-nrf9160-wmbus/configuration-parameter",title:"Configuration Parameter",description:"On this page all common configuration parameters of the firmware are presented. Usually the internal defaults work",source:"@site/docs/components/firmware/app-nrf9160-wmbus/configuration-parameter.md",sourceDirName:"components/firmware/app-nrf9160-wmbus",slug:"/components/firmware/app-nrf9160-wmbus/configuration-parameter",permalink:"/iot/components/firmware/app-nrf9160-wmbus/configuration-parameter",draft:!1,unlisted:!1,editUrl:"https://github.com/lobaro/iot/tree/master/docs/components/firmware/app-nrf9160-wmbus/configuration-parameter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Configuration Parameter"},sidebar:"allDocSidebar",previous:{title:"Introduction",permalink:"/iot/components/firmware/app-nrf9160-wmbus/introduction"},next:{title:"LoRaWAN Communication",permalink:"/iot/components/firmware/app-nrf9160-wmbus/lorawan-communication-protocol"}},c={},o=[{value:"Firmware Configuration Parameter",id:"firmware-configuration-parameter",level:2},{value:"General",id:"general",level:3},{value:"<code>WAN</code>",id:"wan",level:4},{value:"Limitations in LoRaWAN vs. NB-IoT / LTE-M",id:"limitations-in-lorawan-vs-nb-iot--lte-m",level:4},{value:"Meter Scanning",id:"meter-scanning",level:3},{value:"<code>listenCron</code>",id:"listencron",level:4},{value:"<code>cmodeDurSec</code> <code>smodeDurSec</code> <code>xmodeDurSec</code> <code>umodeDurSec</code>",id:"durations",level:4},{value:"<code>devFilter</code> <code>ciFilter</code> <code>mFilter</code> <code>typFilter</code>",id:"filter",level:4},{value:"<code>maxTelegrams</code>",id:"maxtelegrams",level:4},{value:"LTE Connection",id:"lteconnection",level:3},{value:"<code>Host</code>",id:"platformhost",level:4},{value:"<code>APN</code> <code>Operator</code> <code>Band</code>",id:"lteparam",level:4},{value:"<code>UseNbiot</code> <code>UseLtem</code>",id:"ltenet",level:4},{value:"<code>UdpHost</code> <code>UdpPort</code>",id:"plainUdp",level:4},{value:"LoRaWAN Connection",id:"lorawanparams",level:3},{value:"<code>PayloadFormat</code>",id:"payloadformat",level:4},{value:"Special",id:"special",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Image:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Image",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"On this page all common configuration parameters of the firmware are presented. Usually the internal defaults work\nquite well to get the device up and running."}),"\n",(0,i.jsx)(t.admonition,{title:"Customer specific configuration",type:"note",children:(0,i.jsx)(t.p,{children:"For larger orders Lobaro can apply a custom customer specific configuration for all parameter before\ndelivery."})}),"\n",(0,i.jsx)(t.h2,{id:"firmware-configuration-parameter",children:"Firmware Configuration Parameter"}),"\n",(0,i.jsx)(t.admonition,{title:"Product specific parameters possible",type:"info",children:(0,i.jsx)(t.p,{children:"The described configuration parameters are common for all products running this firmware. Nevertheless some products may\nadd additional parameters or alter the here described parameters, e.g. some allow additional values to be set. In any\ncase the documentation of the specific product takes precedence over this general description and should\nalso be read with care."})}),"\n",(0,i.jsx)(t.h3,{id:"general",children:"General"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Possible Values"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE / LoRaWAN Selection"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#wan",children:(0,i.jsx)(t.code,{children:"WAN"})})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"lte"})," or ",(0,i.jsx)(t.code,{children:"lorawan"})]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"lte"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Days Without Connectivity Until Device Reset"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"LostReboot   "})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["Any, e.g. ",(0,i.jsx)(t.code,{children:"3"})]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"5"})})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"wan",children:(0,i.jsx)(t.code,{children:"WAN"})}),"\n",(0,i.jsx)(t.p,{children:"LPWAN technology used for connection and data communication with the backend server. This can be either cellular LTE (\nNB-IoT, LTE-M) or LoRaWAN."}),"\n",(0,i.jsx)(r,{alt:"Lobaro Hybrid Connectivity LoRaWAN, NB-IoT, LTE-M",img:n(9564),style:{width:"40%",paddingTop:"5px",paddingBottom:"5px"}}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"lte"}),": use either cellular NB-IoT or LTE-M"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"lorawan"}),": use LoRaWAN with OTAA (over the air activation)"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"limitations-in-lorawan-vs-nb-iot--lte-m",children:"Limitations in LoRaWAN vs. NB-IoT / LTE-M"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["LoRaWAN Uplinks and Downlinks are limited to 52-222 Bytes depending on the Spreading Factor (Connection Quality).","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Uplink with (longer) wMBUS Telegrams might be split over multiple LoRaWAN Messages."}),"\n",(0,i.jsx)(t.li,{children:"Uplinks of many wMBUS telegrams might take a long period of time due to duty-cycle limitations of LoRaWAN."}),"\n",(0,i.jsx)(t.li,{children:"Downlinks with big configuration values (e.g. long whitelist) must be split over multiple Downlinks which might be\ndifficult to implement."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Limited amount of meta-data:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Less information in status telegram, due to reduced uplink channel capacity."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"meter-scanning",children:"Meter Scanning"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Possible Values"}),(0,i.jsxs)(t.th,{children:["Default",(0,i.jsx)("div",{style:{width:"120px"}})]})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WMBUS Listen Cron [UTC+0]"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#listencron",children:(0,i.jsx)(t.code,{children:"listenCron   "})})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsxs)(t.td,{children:["Any ",(0,i.jsx)(t.a,{href:"/iot/configuration/cron-configuration",children:"CRON"})," String"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0 0 12 * * *"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WMBUS C1/T1 Listen Duration [s]"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#durations",children:(0,i.jsx)(t.code,{children:"cmodeDurSec  "})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["Number of seconds",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"0"})," = Do not collect C1/T1",(0,i.jsx)("br",{}),"Max Value=",(0,i.jsx)(t.code,{children:"36000"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"300"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WMBUS S1 Listen Duration [s]"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#durations",children:(0,i.jsx)(t.code,{children:"smodeDurSec  "})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["Number of seconds",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"0"})," = Do not collect S1",(0,i.jsx)("br",{}),"Max Value=",(0,i.jsx)(t.code,{children:"36000"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sensus RF Listen Duration [s]"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#durations",children:(0,i.jsx)(t.code,{children:"xmodeDurSec  "})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["Number of seconds",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"0"})," = Do not collect X-Mode",(0,i.jsx)("br",{}),"Max Value=",(0,i.jsx)(t.code,{children:"36000"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"M\xfcller-Funk Listen Duration [s]"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#durations",children:(0,i.jsx)(t.code,{children:"umodeDurSec  "})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["Number of seconds",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"0"})," = Do not collect U-Mode",(0,i.jsx)("br",{}),"Max Value=",(0,i.jsx)(t.code,{children:"36000"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WMBUS ID Filter List"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#filter",children:(0,i.jsx)(t.code,{children:"devFilter"})})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsxs)(t.td,{children:["List, e.g.",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"88009035,13456035"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[not set]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WMBUS Type Filter List"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#filter",children:(0,i.jsx)(t.code,{children:"typFilter    "})})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsxs)(t.td,{children:["List, e.g.",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"08,07"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[not set]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WMBUS M-Field Filter List"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#filter",children:(0,i.jsx)(t.code,{children:"mFilter      "})})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsxs)(t.td,{children:["List, e.g.",(0,i.jsx)("br",{})," ",(0,i.jsx)(t.code,{children:"DME,ITW,SEN,QDS"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[not set]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WMBUS CI-Field Filter List"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#filter",children:(0,i.jsx)(t.code,{children:"ciFilter"})})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsxs)(t.td,{children:["List, e.g.",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"8a,72"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[not set]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WMBUS Telegram Upload Limit"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#maxtelegrams",children:(0,i.jsx)(t.code,{children:"maxTelegrams"})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["Any number of max. Telegrams",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:"0"})," = no limit."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0"})})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"listencron",children:(0,i.jsx)(t.code,{children:"listenCron"})}),"\n",(0,i.jsx)(t.p,{children:"The listen cron defines when the device wakes up to receive the enabled wireless M-BUS and other radio protocols. Each\nlisten period is followed by uploading the data over the configured WAN technology. A reasonable interval strongly\ndepends on the\nproducts power supply (battery vs. external powered) and the application demand of new metering data. Typical values\nrange from every 15 minutes to 14\ndays between consecutive readouts."}),"\n",(0,i.jsx)(t.admonition,{title:"in depth description",type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/iot/configuration/cron-configuration",children:"Read more"})," about CRON parameterization."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"durations",children:[(0,i.jsx)(t.code,{children:"cmodeDurSec"})," ",(0,i.jsx)(t.code,{children:"smodeDurSec"})," ",(0,i.jsx)(t.code,{children:"xmodeDurSec"})," ",(0,i.jsx)(t.code,{children:"umodeDurSec"})]}),"\n",(0,i.jsxs)(t.p,{children:["Duration in seconds, e.g. ",(0,i.jsx)(t.code,{children:"300"})," (5 minutes), to collect metering data in corresponding wireless protocol. All listening\nperiods are executed one after the other for the duration defined. Afterwards all collected meter telegrams will be\ntransmitted using the configured ",(0,i.jsx)(t.code,{children:"WAN"})," technology."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"filter",children:[(0,i.jsx)(t.code,{children:"devFilter"})," ",(0,i.jsx)(t.code,{children:"ciFilter"})," ",(0,i.jsx)(t.code,{children:"mFilter"})," ",(0,i.jsx)(t.code,{children:"typFilter"})]}),"\n",(0,i.jsx)(t.p,{children:"Filter meters to be be collected and uploaded by wireless M-BUS related fields."}),"\n",(0,i.jsx)(t.admonition,{title:"in depth description",type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/iot/configuration/meter-reception-filter-config",children:"Read more"})," about telegram filter parameterization."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h4,{id:"maxtelegrams",children:(0,i.jsx)(t.code,{children:"maxTelegrams"})}),"\n",(0,i.jsx)(t.p,{children:"Set hard limit on how many telegrams will be collected and uploaded. The firmware will stop collection, once this number\nhas been collected, regardless of the passed time. Can be used save battery / data volume, should the device be in an\narea with a large number of meters."}),"\n",(0,i.jsx)(t.h3,{id:"lteconnection",children:"LTE Connection"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Possible Values"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE Lobaro Platform Host"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#platformhost",children:(0,i.jsx)(t.code,{children:"Host         "})})}),(0,i.jsx)(t.td,{children:"IP / URL"}),(0,i.jsx)(t.td,{children:"List of various Endpoints"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"coaps://platform.lobaro.com"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE MCC+MNC Code"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#lteparam",children:(0,i.jsx)(t.code,{children:"Operator     "})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["e.g. ",(0,i.jsx)(t.code,{children:"26201"})," (Dt. Telekom)"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[not set]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE Band"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#lteparam",children:(0,i.jsx)(t.code,{children:"Band         "})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"3"})," or ",(0,i.jsx)(t.code,{children:"8,20"})," or ",(0,i.jsx)(t.code,{children:"3,8,20"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"3,8,20"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE APN"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#lteparam",children:(0,i.jsx)(t.code,{children:"APN          "})})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"any APN"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"*"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE NB-IoT on/off"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#ltenet",children:(0,i.jsx)(t.code,{children:"UseNbiot     "})})}),(0,i.jsx)(t.td,{children:"Bool"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE M1 on/off"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#ltenet",children:(0,i.jsx)(t.code,{children:"UseLtem      "})})}),(0,i.jsx)(t.td,{children:"Bool"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE SIM Pin"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"PIN          "})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["4 digits pin, e.g. ",(0,i.jsx)(t.code,{children:"1234"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[not set]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LTE DNS Servers used"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"DNS          "})}),(0,i.jsx)(t.td,{children:"IP"}),(0,i.jsx)(t.td,{children:"List of DNS server IPs"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"9.9.9.9,1.1.1.1  "})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Plain UDP Host"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#plainUdp",children:(0,i.jsx)(t.code,{children:"UdpHost      "})})}),(0,i.jsx)(t.td,{children:"IP"}),(0,i.jsxs)(t.td,{children:["any, e.g ",(0,i.jsx)(t.code,{children:"94.130.20.37"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[not set]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Plain UDP Port"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#plainUdp",children:(0,i.jsx)(t.code,{children:"UdpPort      "})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:["any, e.g ",(0,i.jsx)(t.code,{children:"3333"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[not set]"})})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"platformhost",children:(0,i.jsx)(t.code,{children:"Host"})}),"\n",(0,i.jsxs)(t.p,{children:["Hostname or IP of the Lobaro Platform instance ",(0,i.jsx)(t.strong,{children:"CoAP endpoint"})," to which the gateway communicates using UDP."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Using DTLS: ",(0,i.jsx)(t.code,{children:"coaps://platform.lobaro.com"})]}),"\n",(0,i.jsxs)(t.li,{children:["No DTLS: ",(0,i.jsx)(t.code,{children:"coap://platform.lobaro.com"})]}),"\n",(0,i.jsxs)(t.li,{children:["Plain IP:  ",(0,i.jsx)(t.code,{children:"94.130.20.37"})," (platform.lobaro.com)"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Host with fallback",type:"tip",children:(0,i.jsxs)(t.p,{children:["It's also possible to configure a list of URLs to implement a fallback mechanism. This is particulary helpful for\ncombining DTLS and non DTLS connection attempts: ",(0,i.jsx)(t.code,{children:"coaps://platform.lobaro.com,coap://platform.lobaro.com "})]})}),"\n",(0,i.jsx)(t.admonition,{title:"Alternative endpoints",type:"info",children:(0,i.jsxs)(t.p,{children:["For this firmware the Lobaro IoT platform is mandatory. Other products may have options for additional endpoints, e.g.\ndirect ",(0,i.jsx)(t.strong,{children:"MQTT"})," communication.\nPlease refer to the product specific documentation and/or contact Lobaro for details on this topic."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"lteparam",children:[(0,i.jsx)(t.code,{children:"APN"})," ",(0,i.jsx)(t.code,{children:"Operator"})," ",(0,i.jsx)(t.code,{children:"Band"})]}),"\n",(0,i.jsxs)(t.p,{children:["Basic params to configure the NB-IoT or LTE-M connection. These parameters must be set in accordance to the SIM card and\nnetwork provider used. Usually the defaults for these parameters work quite well since they allow the modem to select\nand join the network\nusing information on the SIM-card. Nevertheless, if known, the ",(0,i.jsx)(t.code,{children:"APN"})," should be configured."]}),"\n",(0,i.jsx)(t.admonition,{title:"in depth description",type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/iot/configuration/lte-network-configuration",children:"Read more"})," about LTE network configuration parameters."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"ltenet",children:[(0,i.jsx)(t.code,{children:"UseNbiot"})," ",(0,i.jsx)(t.code,{children:"UseLtem"})]}),"\n",(0,i.jsxs)(t.p,{children:["The modem supports both NB-IoT and LTE-M technologies. Usually both are enabled and the cellular modem automatically\ndecides\nwith network type it should use at a specific location in the field. By setting one parameter to ",(0,i.jsx)(t.code,{children:"false"})," you can insist\non\nusing the other technology. At least one parameter must stay enabled, e.g. set to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["On older nRF91 modem firmware (MFW < ",(0,i.jsx)(t.code,{children:"1.3.0"}),") only one of this parameter can be enabled at a time, trying to set both\nto ",(0,i.jsx)(t.code,{children:"true"}),"\nwill\nresult in selecting just NB-IoT."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"plainUdp",children:[(0,i.jsx)(t.code,{children:"UdpHost"})," ",(0,i.jsx)(t.code,{children:"UdpPort"})]}),"\n",(0,i.jsx)(t.p,{children:"Instead of sending the metering data to the lobaro platform these data can alternatively send to an external UDP socket.\nThis is helpful if you don't want your metering data on any external server but want to control your gateways using the\nLobaro Platform."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"UdpHost"}),": Separate IP to upload plain telegrams via UDP","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"[not set]"})," = upload to Lobaro IoT Platform using Host parameter address"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"UdpPort"}),": Separate Port to upload plain telegrams via UDP","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"only used when UdpHost is set"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.p,{children:"Even the metering data is send to an external server the firmware normally still needs a connection a Lobaro Platform\ninstance for sending status information or performing remote configuration / firmware updates."}),(0,i.jsx)(t.p,{children:"If needed contact Lobaro for possible options to handle all communication without our platform, e.g. using direct MQTT\nto an external broker."})]}),"\n",(0,i.jsx)(t.h3,{id:"lorawanparams",children:"LoRaWAN Connection"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Possible Values"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoRaWAN DevEUI"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"DevEUI       "})}),(0,i.jsx)(t.td,{children:"byte[8]"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Device EUI64"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoRaWAN AppEUI / JoinEUI (1.1)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"JoinEUI      "})}),(0,i.jsx)(t.td,{children:"byte[8]"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"random"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoRaWAN AppKey"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"AppKey       "})}),(0,i.jsx)(t.td,{children:"byte[16]"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"random"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoRaWAN NwkKey (1.1)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"NwkKey       "})}),(0,i.jsx)(t.td,{children:"byte[16]"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"random"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoRaWAN Days between Timesync"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"TimeSync     "})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"3"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoRaWAN Payload Format"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)("a",{href:"#payloadformat",children:(0,i.jsx)(t.code,{children:"PayloadFormat"})})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"0"}),", ",(0,i.jsx)(t.code,{children:"1"}),", ",(0,i.jsx)(t.code,{children:"2"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoRaWAN use OTAA"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"OTAA         "})}),(0,i.jsx)(t.td,{children:"Bool"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoRaWAN Random TX Delay [s]"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"RndDelay     "})}),(0,i.jsx)(t.td,{children:"Number"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"10"})})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"payloadformat",children:(0,i.jsx)(t.code,{children:"PayloadFormat"})}),"\n",(0,i.jsx)(t.p,{children:"Used encoding of the LoRaWAN uplink payload packets."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"0"})," = Encoding in ports"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"1"})," = prefix bytes and time"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"2"})," = prefix bytes, time, and rssi"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"special",children:"Special"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Possible Values"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Verbose UART Log"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"verbose      "})}),(0,i.jsx)(t.td,{children:"Bool"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Addon RAM configuration"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"extRam       "})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Lobaro Internal"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"[not set]"})})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>d,x:()=>s});var i=n(6540);const l={},r=i.createContext(l);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);