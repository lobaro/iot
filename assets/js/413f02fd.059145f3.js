"use strict";(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[3521],{5266:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(4848),i=n(8453);const s={},d="Devices",a={id:"platform/devices/index",title:"Devices",description:"Everybody* read access",source:"@site/docs/platform/devices/index.md",sourceDirName:"platform/devices",slug:"/platform/devices/",permalink:"/iot/platform/devices/",draft:!1,unlisted:!1,editUrl:"https://github.com/lobaro/iot/tree/master/docs/platform/devices/index.md",tags:[],version:"current",frontMatter:{},sidebar:"allDocSidebar",previous:{title:"Server Configuration",permalink:"/iot/platform/administration/server-configuration"},next:{title:"Downlinks",permalink:"/iot/platform/devices/downlinks"}},r={},l=[{value:"Overview",id:"overview",level:2},{value:"Device Properties",id:"device-properties",level:3},{value:"Alerts",id:"alerts",level:3},{value:"Location",id:"location",level:3},{value:"Device Data",id:"device-data",level:2},{value:"Uplinks",id:"uplinks",level:2},{value:"Simulate Uplinks",id:"simulate-uplinks",level:3},{value:"Downlinks",id:"downlinks",level:2},{value:"Config",id:"config",level:2},{value:"Settings",id:"settings",level:2},{value:"Organisation",id:"organisation",level:3},{value:"Single Device",id:"single-device",level:4},{value:"Bulk Operation",id:"bulk-operation",level:4},{value:"Device Tags",id:"device-tags",level:3},{value:"Security",id:"security",level:2}];function o(e){const A={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.header,{children:(0,t.jsx)(A.h1,{id:"devices",children:"Devices"})}),"\n",(0,t.jsx)(A.admonition,{title:"Required roles",type:"info",children:(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"Everybody"})," read access"]}),"\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"device-admin"})," write access"]}),"\n"]})}),"\n",(0,t.jsx)(A.p,{children:"A device represents a single physical IoT device that might consist of multiple Sensors and Actors."}),"\n",(0,t.jsx)(A.p,{children:"Each device has a Device Type that defines the type of the device, e.g. how data is parsed, displayed and forwarded via integrations."}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Navigation Devices",src:n(1621).A+"",width:"735",height:"227"})}),"\n",(0,t.jsx)(A.p,{children:"When opening the device page there are multiple sub pages:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"#overview",children:"Overview"})}),"\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"#device-data",children:"Device Data"})}),"\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"#uplinks",children:"Uplinks"})}),"\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"#downlinks",children:"Downlinks"})}),"\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"#config",children:"Config"})}),"\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"#settings",children:"Settings"})}),"\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"#security",children:"Security"})}),"\n"]}),"\n",(0,t.jsx)(A.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(A.h3,{id:"device-properties",children:"Device Properties"}),"\n",(0,t.jsx)(A.p,{children:"Device Properties are bound to the device and can be manipulated (read / write) by the parser and via API's."}),"\n",(0,t.jsx)(A.p,{children:"We are planning support to Edit the properties via the User Interface as well, deletion is already possible."}),"\n",(0,t.jsx)(A.p,{children:'See "Edit Properties" button below the property list:'}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Edit Properties Button",src:n(9365).A+"",width:"149",height:"45"})}),"\n",(0,t.jsx)(A.h3,{id:"alerts",children:"Alerts"}),"\n",(0,t.jsx)(A.p,{children:"The feature is currently not supported."}),"\n",(0,t.jsx)(A.h3,{id:"location",children:"Location"}),"\n",(0,t.jsx)(A.p,{children:"The device can have a physical location. The location can be set via the Web UI, APIs and by the parser."}),"\n",(0,t.jsx)(A.h2,{id:"device-data",children:"Device Data"}),"\n",(0,t.jsx)(A.p,{children:"Device data lists all data records returned from the Parser."}),"\n",(0,t.jsx)(A.p,{children:'The table is configured via the "Data Table Config" in the "Device Type".'}),"\n",(0,t.jsx)(A.h2,{id:"uplinks",children:"Uplinks"}),"\n",(0,t.jsx)(A.p,{children:'Uplinks are raw sent messages from a device that were received and tried to be processed by the parser to create parsed records ("Device Data").'}),"\n",(0,t.jsx)(A.admonition,{title:"Parser returned nil",type:"note",children:(0,t.jsxs)(A.p,{children:['Not all uplinks return a good data result, then the parser result is "Parser returned nil".\nThis is ',(0,t.jsx)(A.strong,{children:"not"}),' a general error, but a hint that no device data could be extracted from the uplink.\nOften this happens with status uplinks that do not contain user data but can be processed by the parser for meta information,\ne.g. battery voltage, that are shown under "Device Properties".']})}),"\n",(0,t.jsx)(A.h3,{id:"simulate-uplinks",children:"Simulate Uplinks"}),"\n",(0,t.jsx)(A.p,{children:'For test purposes, it may be useful to simulate uplinks through the platform and let the parser process them again. For this purpose, the "data" part of a past upload can be used, as shown in the highlighted part below.'}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Uplink",src:n(5362).A+"",width:"1200",height:"918"})}),"\n",(0,t.jsx)(A.p,{children:'The copied data can then be pasted in under the "Settings" Tab and send to the platform again for processing with a click on "Send Data". This data then appears again under "Uplinks" with "http" as datasource. Downstream processing, including any integrations, is then just as if the data had been sent from a physical device.'}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Simulate Uplink",src:n(8776).A+"",width:"842",height:"552"})}),"\n",(0,t.jsx)(A.h2,{id:"downlinks",children:"Downlinks"}),"\n",(0,t.jsx)(A.p,{children:"A list of queued and sent downlinks."}),"\n",(0,t.jsx)(A.h2,{id:"config",children:"Config"}),"\n",(0,t.jsx)(A.p,{children:"Requires Trait:"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Remote Config Update Trait",src:n(8386).A+"",width:"149",height:"29"})}),"\n",(0,t.jsx)(A.p,{children:'The config tab is only displayed when the Device Type has the Trait "Remote Config Update"'}),"\n",(0,t.jsx)(A.p,{children:"Allows to see and edit the device configuration."}),"\n",(0,t.jsx)(A.p,{children:"Config properties must be updated by the parser, else the page is empty."}),"\n",(0,t.jsx)(A.p,{children:"Updating configuration only works for NB-IoT devices yet (10/2022)."}),"\n",(0,t.jsx)(A.h2,{id:"settings",children:"Settings"}),"\n",(0,t.jsx)(A.p,{children:"Edit devices Settings:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:"Name - User friendly display name"}),"\n",(0,t.jsx)(A.li,{children:"Address - used to identify the device when receiving Incoming data"}),"\n",(0,t.jsx)(A.li,{children:"Serial - Serial number, provided in device import"}),"\n",(0,t.jsx)(A.li,{children:"Device Tags - see below"}),"\n",(0,t.jsx)(A.li,{children:"Description - User friendly description of the device"}),"\n",(0,t.jsx)(A.li,{children:"Device Type"}),"\n",(0,t.jsx)(A.li,{children:"App - Deprecated"}),"\n",(0,t.jsx)(A.li,{children:"Datasource - allows to assign additional Pull or MQTT based datasources"}),"\n",(0,t.jsx)(A.li,{children:"Parser - Parser to handle uplinks and generate device data"}),"\n"]}),"\n",(0,t.jsx)(A.h3,{id:"organisation",children:"Organisation"}),"\n",(0,t.jsx)(A.p,{children:"Each device belongs to a zero or one Organisation. There are multiple ways to move the device to another organisation."}),"\n",(0,t.jsxs)(A.admonition,{title:"Required roles",type:"info",children:[(0,t.jsx)(A.p,{children:"admin, org-admin"}),(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:[(0,t.jsx)(A.strong,{children:"org-admin"})," can move the device between different Sub Organisations in his Organisation tree."]}),"\n"]})]}),"\n",(0,t.jsx)(A.h4,{id:"single-device",children:"Single Device"}),"\n",(0,t.jsx)(A.p,{children:"Go to: Configuration \u2192 Hardware \u2192 Find and open the Device Page"}),"\n",(0,t.jsx)(A.p,{children:"Change the Organisation"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Change Organisation Control",src:n(3979).A+"",width:"505",height:"58"})}),"\n",(0,t.jsx)(A.p,{children:"Press Save"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"save-cancel-buttons.png",src:n(9773).A+"",width:"192",height:"46"})}),"\n",(0,t.jsx)(A.h4,{id:"bulk-operation",children:"Bulk Operation"}),"\n",(0,t.jsx)(A.p,{children:"Go to: Configuration \u2192 Hardware"}),"\n",(0,t.jsx)(A.p,{children:"Select multiple devices"}),"\n",(0,t.jsx)(A.p,{children:'Click "Bulk Operations"'}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Bulk Operations",src:n(2563).A+"",width:"157",height:"51"})}),"\n",(0,t.jsx)(A.p,{children:'Change the Organisation and press "Bulk Update"'}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Select Change Organisation",src:n(8526).A+"",width:"261",height:"244"})}),"\n",(0,t.jsx)(A.h3,{id:"device-tags",children:"Device Tags"}),"\n",(0,t.jsxs)(A.p,{children:["Tags on device level are meant to group devices inside an organisation. Use cases can can be external ID's, Installation location, data export targets, etc.",(0,t.jsx)(A.br,{}),"\n","Some future plans are to filter by tag in integrations, display tags in the device table and use them for search, grouping, etc."]}),"\n",(0,t.jsxs)(A.p,{children:["Currently the most important difference to device properties (where you can also story lists) is, that the parser has no write access to tags.",(0,t.jsx)(A.br,{}),"\n","Also a device with too many tags might get less handy, where device properties can be added as needed."]}),"\n",(0,t.jsx)(A.h2,{id:"security",children:"Security"}),"\n",(0,t.jsx)(A.p,{children:"On the Security tab, all security related information about the device and it's connection can be found."}),"\n",(0,t.jsx)(A.p,{children:"You can find information like:"}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:"If DTLS is enabled for the device"}),"\n",(0,t.jsx)(A.li,{children:"Certificate fingerprint of the device"}),"\n"]})]})}function c(e={}){const{wrapper:A}={...(0,i.R)(),...e.components};return A?(0,t.jsx)(A,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2563:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAAzCAIAAAACUp0fAAADWElEQVR4Xu2bzW7aQBCA8zy8QF+gL9C+SI6oufTaQw7tjQfgxKU9cOQFWkXKgZ8GVeWAACEiVflRW6mq5M7u2OPZ9cIahA2ezicrMst6Pey3M+tE4eJZkciF36CIQL3KRL3KRL3KRL3KRL3KRL3KJOJ1sVhMJpPhcPhZaRS7vILU8Xi8Wq0SpTmAVPi5yytkqkptHHGvUH79i5SzJ+4VeyjNQr3KRL3KRL3KRL3K5ARev3z/+enmwW9VjkrdXr8uf7faEziuekv/PeV41Op1MHp6+vX3TW+JauGl3+MwNvPL9uzWnK077Wl/479/Ykx4dUdVn9ePNw/g8vWHGap98fZu8eOP3ynnsX9t3ONxOXj03+fs5dV0ppFjnQ9mNGtdz+/91vqoyStKxQPV7pSaWK806TFb5b3CdPMO1nFnxHscif/BK5cKRyxTEe7V5C7O/m2XaYC5667NScgr9GyljUTIOgnAQYx4GyeObLFDOWUDWi4H8w402mupA768H0zpw5po8/CcakGjmf7ddTZIHmHxvuWp3GtRKjw6+Z0CMK8wF9naL+nVzFQxXcI5lMnGGU91mpWEs4mTTo20vNiiWXcKVzn3csKj+PPRcB3k57Q42Nral2q9Hio18fZXclnK62BWyFQL9XfIFhDPqoTEOCkOc43abL4Gcog6BL36qrJ4nHYKI7wKy1KhV3jcPVRq4tbhfB5LeHXWgUN4puASe63nNS0S6YD5Ye/oeeWFd7dXZzVkdcj1ncVDwwZijlOVV1AID0ev3qfb1Z5SE88rKSzhddofzbf8XlFif+XtZvB8ljncK7dyhHwt3NG/qhxVeX357ttVb4lq95eabMtX9iFtJgW9buyUFRWmGeAuF3pp99fMVr4Rmq20MK3cKzuP7a/2FuH9dbvXLWUmQiVeQSemKardX2ri7a/ux8ZG++y6zWtWxAIF2bikkd3C2571s4rKCiaPJB3crcMU0rTTpUqbXrXjeZhiC3pltT1QMKJU4pV2VkjWg6SeAq8ON5xKvIJL/JOh/8Y5o15lol6V80e9ykS9ykS9yiTuVf8vvInEver3OJpI3Kt+76qJxL0+6/ckG0vEq9JQ1KtM1KtM1KtM1KtM1KtM1KtM1KtM1KtM1KtM1KtM/gEEExtuOtr9jAAAAABJRU5ErkJggg=="},9365:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAtCAIAAAAoWb4AAAADZ0lEQVR4Xu2bz4vTQBTH9+/JP7D/gP+A/gP+A8oeF09608MeFBTWo0tPXgTZ2xa8eJEKvRS1FYpUF/oDxS1FYSnEb2YyMy8v0zZNO2sG3occksmbaTqfvDcppAepEDMHvEGICvEXN+IvbsRf3Ii/uBF/ceP3t1gsBoNBp9P5IDQG6IAUqKGmPP4QgdDJZLJcLvk54f8BHZACNVShxx8kI463Cs0AaiDIHnr8wbBkXmOBGgiyhx5/KLW8SWgSVJD4iw/xFzfiL27EX9zchL83H3+fvf/JW4V9ENxfuzdPjj9hg0V+TtiZsP5+/Lq+f/Zd+8MODnlEbXrDpDXOdqajo+P++ZSfbw6zdj85Gc14834I4u/5xRTC7r78dvior+XpDYda5+O3aurXAD2k42mPn3f+HFfnJ77IdHxKhjpqX/HzIcDlBXNGCeLv8OEXO19w+fnyLzYt1W68D8Ojp4gnYI2/Ydfte2P2TdT+sNRphVoecg65SBVuXgs9elKSScNuoX5CD0kyPnHUX1bNVAqisX/ezrJcZ2RW5fIRXDXutnB2jNuCtasPNVdihk1aIxU5fOeGyu4Vdcp8l1JH8qXqrAJB/AEIwzXB2b1X+fp359kQ61+i6iqPLuPxR9NLfeeCPxZAWeXPjJDqcm1i3ICZPzetLka5t43qdlH6iQCSf8RfueOqa65KcH96B9vtp1v6M7dwPmusIvH8Syv5cw87ZCpLHaFNH6r8s+tlHlbIJzN4sdHvz9ux+BFbE8QfyqOeel0/YQ7brvWTtWznz94K1hnzV6hdJkf55GqvpNK6Mav6K3XUl53UfbAK4o8+v7y4mCHtsGHHNiKA92F4/ZH8c/NVyZ+rn6SxRv7lqspzXdFfuaOBX0NFgvhDnsHQg9eXt558pXccDvHLAblYJ/9UGu2+/pFGl3MqM1atf/l+FqOV+H5xVvHn7WipV0iD+LPM/yxhUcvDDj+9hsL6Z74YfXjz1E/Ta+3zJ2nkNdN8nAtWczpyD702ml6eZ21LbVXk6yXvmIfZcbYlrL+UrIXt3pyfazz1cuImCe4vVQo3F8xGIv7iRvwJYRF/cSP+4kb8xc0Gf/L+bpPZ/P6uvD/fZDa/Py//X2kmVf+/ksr/xxpJ1f+PCREh/uJG/MWN+Isb8Rc34i9u/gGIyK4erI9gTwAAAABJRU5ErkJggg=="},9773:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAuCAIAAADx8IGiAAAELElEQVR4Xu2cP08UQRjGr7G18VvwBSytbCz9BH4DQkVBYWtBY2JxNgjmqE1OOgkJiRYKCQ14B8aLXCyAjfwJ2BCS8Z2dP/vuzOwx587F9XiePCF778wemfd+9867l+y2BATVUMsNQNA4AkBQLQEgqJYAEFRLAAiqJQAE1RIAgmopDNDV1dXBwcHW1tbnaRetkVZK63VTIMT59s6nR0/e33vQbd2/46YkUCooIW6OggBRNimtx8fHNzc37tjUidZIK6X1OgxRsoCOY0qIz1AAIPpGUk7d6FSL1kur5hH6wvkZhCktPEsiCBB9He9C7eGi9dKqeQTlJ2hKC8+SCAJEnYEbugNyVu3nDlbmWRIAyAoARZpnSQAgKwAUaZ4lAYCsAFCkeZYEALICQJHmWRIAyAoARZpnSSQE6NWHk5n5r1++/1Yv6YBekumY/r7bPi/Nbp4AUKR5lkRCgBQuVQA1n6FUAA2XV4dvOvHxf+O5zWvRP/TjEeZZEpMG6OHzvh1SMI3UxdqinjkzP3B/M5+wEgJEpzus6ODyqj8/YPnpGp1t7vkT6rv5AImcoZ+nMhVxAEl6Ztcv9Kvd4dpJaXjSSgVQ12NoLHr2NqhOn2dzJrLUv1xy5yRwYwF6/OLbs9c/uJ++HEQDtB+A5mQ4a05v76pp6sCMLg4zeXTU1tNCbxKhhAB1GUNkeRBHz4jPNQdLSU+Qkd7KYU8FGXOtlUszVcNXlDTz5tX/6Fab99ZKCRD10VR1glYttntOWdn6vr9zZesDDcTuQI3KaZ0jM7qfFy1GlQTOfZMYpQWoaxgS8fQYJvx4t7WQ9fReJonJ5yikFCLyWG92kh7LTSYPKGLwWurrac0EiO9fjlRL5EZ9SUqqGiCqMXm8qDqmaNFZOsKCY2qCAEX3zsTB9caCHy+ZILAAWdosEGbUugwlwZRPm1qAlCRGFgK7N1mwGDeqFGnsChd7XLTSAmT7nmBPXeXqCpSTYeUDZMjwEWR7n1JejaYcoGJvIno4SboyqdGdjgHFklRDCQFyuuYxGKr6XO3Wo45HAuRXoEBVq/pHEeZZEk0C6KhdQGCuyHhDY3ogKbmLDdqLdqeTVeovqg5XKoCC11zxDOVNMfto86swjkWpB/IAUv1yqQeSEd5i66EmAvT24y+/fVamodsAUk203oPs9XwR7AxsBdK/GPGqwy7WWD80hhICFOyaq+K+S5uORmQhO9OBy96oCiSPi2su1jtbqVMaCJC6zhphmuCe0ySlAmjqzbMkEgL0vwsARZpnSQAgKwAUaZ4lAYCsAFCkeZYEALICQJHmWRIAyAoARZpnSQAgKwAUaZ4lEQQINxYK3FhY4agbC3Frs8CtzRWOurUZD1cQeLhCyLEPVxB4vEsuPN7FerzHu0BQvAAQVEsACKolAATVEgCCagkAQbX0B/LkACnqSSMXAAAAAElFTkSuQmCC"},3979:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAAA6CAIAAAA837cdAAAFVElEQVR4Xu3dv27bRhzA8TyGH0hPIiBjNPkJOnToYMgCumQLsjQBZEFbO7VdUgg0ogwtEAgZCrS1rSQo2kZBDEOF+uP94/FEnSSWkUj6+wFhiGeS0fS98zm2H6wAAG33IBwAALQOrQeA9qP1ANB+tB4A2o/WA0D70XoAaD9aDwDtR+sBoP12aP3NuNexHo2vw0//X9ejXud8Go5ulb6rwf63AcB9tK31aVJ74xt7ejnoHLGw8mY+w2QDAK0Xb/31+FFncJkfGvV6oyP1ltYDQCnx1k8H66t4WdqrLZfpeWcwSrd3VPrTWUHpjUfmAvVFgB3UXxmoWE9Hek/IDLrJI93M0Qpv97aS0unH6768E8OOqGdOzVtiegBw70VbX7iOtoNpYf3amj13Ff1g/91OD7rXWdnVoG190byi+be79+O/DfvP+c+0c0nBlyYAcN9EW1/YX4msW9ebhkpP83v6fvf9FXdRrG3r1cW5qWWX2+Ua/x2aN+xvNB1z0wkA6iHe+oJFsUun1/r8lGBa793rGl0Q63yL9UbNHrfTegDYLt56vWmerdnV3ohpq9f69LXtqdvDkexmO/KbF+brLda93vX2TXs4tB4AnG2tX9m1tr+XovitV4HWsu/NqolBDZ0PNi/MXYvdE8xjC263uzr5782ubfXQegDI26H1e6KtAFA3lbc+23sBANRENa13+y1mgwUAUCfVtB4AUGe0HgDaj9YDQPttaf1isZjNZkmSTAAATSDFlm5Lvf2Yx1ovl8o98/l8uVyGnwMA1JIUW7ot9fZzH2u9zAxyQzgKAKg9qbc03J3GWi/TAit6AGgiqbc03J3GWj+ZTMIhAEBD+A2n9QDQTuVbf3Vz92z8/svBH1+c/b71kMvkYrkleAgA4ABKtl6qvWPlg+KTewA4vJKtl0X6esp3OeRG/zkAgAMo2foSi3p9yI3+cwAAB1Cy9esR3/3wnwMAOIAKWj95+eHX326DQwbXK/95Wp/0T7rDq3AUANrhGyUc3TxeqILWS9lf/fLx5u2drry8kFN5sV75vVo/v+h2L+bhaAFaD6DNJOinp6dB1gsHI6pp/Q8v/r5+e/f6zSc55IWc0noAqEpQ9n1Dv6qq9f66Xo4ff/on8h91/OdEFLZeBk8M13fV+suh+cTDobsnObPX2kEZ6V4M+27kyt4lj1v7twCgPlzfS4R+VVXr9UJer+sl9F99ffXk+Tt3PH46r6b1l1LpvvmdDmmm9eska7fu+5m+JOmbF/PhQ5NyVX/7BHVj3/yVxPQa+xoA6khXvkToV1W13l/XS+vluL39V0b0x2A/x39OxFrrwxxLuNVpfg8nmwMy7lFqXW+emX6JYCYDRSYS/xQAaub4rdfr+lc/f5RDt17q/2z8Xn+srvW5fXl7QbBfL6em9d6GT7au91ufe75MEt7+DwDUSi32cF6/+aSX8HIcf12vku0v21nXA2i0oO8lcl9N67/9/i/Jvb+un7z88OT5O/2xotbrdfqG/fqirXl7e+Gg+cYs+/UAaq6w7IWDERW0PvhZqvF3f8rhjwQ/V+U/J8LfgTmxUfYG/W+xdocXafBT2dpczQGpbv+sYF2f8v4fDqEHUE963yYc3TxeqILW73v4zwEAHEDJ1vO7zwCgQUq2PvKjUvGD32kMAIdXsvX8rRIAaJCSrV/xNwgBoDnKtx4A0BS0HgDab9fWJ0myXC7DUQBA7Um9peHuNNb62Ww2n3s/hQQAaAiptzTcncZav1gsZFqQG1jdA0BTSLGl21JvabgbjLV+pXIvM4PcMwEANIEUW7rth361tfUAgBag9QDQfv8BocOQaFFPuXcAAAAASUVORK5CYII="},1621:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,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"},8526:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,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"},8776:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/simulate-uplink-a8a05771d631e1ef8d5b957afc848c0a.png"},8386:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAdCAIAAAAsI7mtAAADDUlEQVR4Xu1aO3LjMAzNMXy3VPZZXKjUDVy6yPgCblW6TZc6jjOTNM5WLpwFv3gAyUja7G7MGWLeTGQKxO8RUArefTapWe7cn8vl8vb2fjwen5vcthBHxBTxxfzRD1p9ef91Ol9PH58NN43zlZgivhyFhj/i05CXqjbcKogvYs3zR2S2zqsM5yux5vmjqapfN9w8iLXGX8Vo/NWNxl/daPzVjTx/+24Bsto86W0/jKGH8Pp9qjAR3k7/sF0tlrvHVCGP181ysR7EIlXsfvuaaJbxtLv/TuQBRf5iNI+U29/wVMBhPfN82LMF8Qy9KuVkzHYd8F/4G1WwGOfvG3lOwTzj5jDNaJQvMa1AOVTMHz17EQ3aHcLINS5tywodr6b2mhCDBFZALY0+Uzj1NgifCRlecI0TuDuYn3ws2M56yB6vTBhcMWcq2henjau33gI9EEw+PBlVWDEY589k7jcY9yFuTsxV3K27MkEQPkQ5hPN2vBoSCYGmyhI2vaivXQd3Zj1YwAPO/Bk7IveMxzH+oMSF6jkyvPd9h0SGZ9F/GJXwXuQvCgcqDqmpi7MoCo0RcLl1wrAFKVFq9Eq1YJk/PW3YlDwH4CLLn7aT9ajTOaX9F19Fg6V1AXCHCkqZTIWMivwVekiKtSIKRJ44yhhNUgVOBl/xeAmiapcpXGLQI6Ywjz9tJ4lcGQF33OLagvGix4mmJ0lZhadkuXN2xvjDCQC0IybwlyTMplT/pcUS0FWISI5zLOhs/tCO0cmEhPXRZkt9ptajIxF5uf/k6YwY5w8Gd3wQmMDfn3z/CrA9KgthTdkvSm6Mz+PP2h/7/jn7hbBtr4Ts4LtlmwzXfYTIK5oVvIIdiSn8gd1cp0/hz6sFwUPg18Mu/PTmW03psDtXFCfcQzP5EzkW/v8MW6KoxlruNjFCPTOdrDZD9A5hdz2682nyoGKJBczz1+CRjOVxqDn5j9H4+wJyJk9E4+9HgUN4Pnkfjb+GOWD+2v2X+oD3X9r9s+og7p+1+581Ib3/6Shs96+rkMz96yb1ym92A8ZkDWqpFAAAAABJRU5ErkJggg=="},5362:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/uplinks-uplink-content-537f13f734c30722c47360baad6ba1d8.png"},8453:(e,A,n)=>{n.d(A,{R:()=>d,x:()=>a});var t=n(6540);const i={},s=t.createContext(i);function d(e){const A=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function a(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:A},e.children)}}}]);