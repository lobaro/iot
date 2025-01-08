"use strict";(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[136],{3512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"configuration/cron-configuration","title":"CRON Configuration","description":"We use CRON expressions configure the behavioral timing of our devices. This CRON configuration can be adjusted during","source":"@site/docs/configuration/cron-configuration.md","sourceDirName":"configuration","slug":"/configuration/cron-configuration","permalink":"/configuration/cron-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/lobaro/iot/tree/master/docs/configuration/cron-configuration.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"CRON Configuration"},"sidebar":"allDocSidebar","previous":{"title":"LoRaWAN Downlink Config","permalink":"/configuration/lorawan-downlink-config"},"next":{"title":"LTE Network Configuration","permalink":"/configuration/lte-network-configuration"}}');var s=t(4848),r=t(8453);const d={sidebar_position:4,title:"CRON Configuration"},l="CRON Configuration",o={},a=[{value:"Meaning of the six field parameter",id:"meaning-of-the-six-field-parameter",level:2},{value:"Star (Asterisk) *",id:"star-asterisk-",level:3},{value:"Question mark (?)",id:"question-mark-",level:3},{value:"Dash, minus (-)",id:"dash-minus--",level:3},{value:"Comma (,)",id:"comma-",level:3},{value:"Slash (/)",id:"slash-",level:3},{value:"Weekday (W)",id:"weekday-w",level:3},{value:"Last (L)",id:"last-l",level:3},{value:"Hash (H)",id:"hash-h",level:3},{value:"Pitfalls with using H",id:"pitfalls-with-using-h",level:4},{value:"Examples",id:"examples",level:2},{value:"Standard CRON Syntax",id:"standard-cron-syntax",level:3},{value:"Extended CRON Syntax",id:"extended-cron-syntax",level:3},{value:"Further Reading",id:"further-reading",level:2},{value:"Online CRON Generators",id:"online-cron-generators",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cron-configuration",children:"CRON Configuration"})}),"\n",(0,s.jsxs)(n.p,{children:["We use CRON expressions configure the behavioral timing of our devices. This CRON configuration can be adjusted during\ndevice configuration using the ",(0,s.jsx)(n.a,{href:"/configuration/lobaro-config-tool",children:"Lobaro Maintenance Tool"}),"\nor remotely over the air."]}),"\n",(0,s.jsxs)(n.p,{children:["The CRON expressions consists of 6 fields, separated by space: e.g. ",(0,s.jsx)(n.code,{children:"0 0/15 * * * *"})," , which describes time points every\n15 minutes starting from minute 0."]}),"\n",(0,s.jsxs)(n.p,{children:["CRON expression allow you to define specific ",(0,s.jsx)(n.strong,{children:"POINTS in time"})," they are NOT helpful to define time durations. They can\nbe seen\nhas the start time to trigger an action, for example initiating the sensor measurement or wireless sendout. The duration\nof an action is defined by a separate configuration parameter if needed."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Timezone and Daylight Saving",type:"warning",children:[(0,s.jsx)(n.p,{children:"All times are referenced to UTC+0 timezone! Keep this in mind when setting CRON configurations on Lobaro devices."}),(0,s.jsxs)(n.p,{children:["This implementation detail implies that daylight saving time switches will change the behavior of the device by one\nhour.",(0,s.jsx)(n.br,{}),"\n","Example for Central Europe:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Winter: UTC+1 (Central European Time)"}),"\n",(0,s.jsx)(n.li,{children:"Summer: UTC+2 (Central European Summer Time)"}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"meaning-of-the-six-field-parameter",children:"Meaning of the six field parameter"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"0 0/15 * * * *"})," - time points every 15 minutes starting from minute 0."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Second"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Minute"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Hour"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Day of Month"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Month of year"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Day of Week"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Range"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"(0-59)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"(0-59)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"(0-23)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"(1-31)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"(1-12)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"(1-7)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Alternative"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"JAN-DEC"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"MON-SUN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:", - * /"})," special chars"]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"?"})," special char"]}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"H L"})," special chars"]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"W"})," special char"]}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Example"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"0"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"0/15"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("b",{children:"*"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("b",{children:"*"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("b",{children:"*"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("b",{children:"*"})})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"H L W"})," are only supported on recent firmware releases, check product description for details."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Day of Month"})," and ",(0,s.jsx)(n.strong,{children:"Day of Week"})," ",(0,s.jsx)(n.em,{children:"should"})," be treated ",(0,s.jsx)(n.strong,{children:"mutually exclusive"})," and one of them should be set to ",(0,s.jsx)(n.code,{children:"?"}),".",(0,s.jsx)(n.br,{}),"\n","As an example the following CRON may not have the intended behaviour if not following this advice:"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"0 0 1 1 * MON"})," Would only trigger on 1st of every month ",(0,s.jsx)(n.strong,{children:"that is"})," a Monday."]})]}),"\n",(0,s.jsx)(n.h3,{id:"star-asterisk-",children:"Star (Asterisk) *"}),"\n",(0,s.jsx)(n.p,{children:'Used to select all values within a field. For example, "*" in the minute field means "every minute".'}),"\n",(0,s.jsx)(n.h3,{id:"question-mark-",children:"Question mark (?)"}),"\n",(0,s.jsx)(n.p,{children:"Useful when you need to specify something in one of the two fields in which the character is allowed, but not the other.\nFor example, if I want my trigger to fire on a particular day of the month (say, the 10th), but don\u2019t care what day of\nthe week that happens to be, I would put \u201c10\u201d in the day-of-month field, and \u201c?\u201d in the day-of-week field. See the\nexamples below for clarification."}),"\n",(0,s.jsx)(n.h3,{id:"dash-minus--",children:"Dash, minus (-)"}),"\n",(0,s.jsx)(n.p,{children:"Used to specify ranges. For example, \u201c10-12\u201d in the hour field means \u201cthe hours 10, 11 and 12\u201d."}),"\n",(0,s.jsx)(n.h3,{id:"comma-",children:"Comma (,)"}),"\n",(0,s.jsx)(n.p,{children:'Used to specify multiple explicit values. For example, \u201cMON,WED,FRI\u201d in the day-of-week field means \u201cthe days Monday,\nWednesday, and Friday\u201d, "1,15" in the day-of-month field means "on the first and 15th of the month".'}),"\n",(0,s.jsx)(n.h3,{id:"slash-",children:"Slash (/)"}),"\n",(0,s.jsx)(n.p,{children:'Used to specify increments. For example, "0/15" in the seconds field means "0 and then every 15", that is "the seconds\n0, 15, 30, and 45". And "5/15" in the seconds field means "the seconds 5, 20, 35, and 50". You can also use "/" for\nother fields. "1/3" in the day-of-month field means "fire every 3 days starting on the first day of the month".'}),"\n",(0,s.jsx)(n.h3,{id:"weekday-w",children:"Weekday (W)"}),"\n",(0,s.jsxs)(n.p,{children:["Only valid in the day-of-month field. Used as a modifier added after a given day, e.g. ",(0,s.jsx)(n.code,{children:"15W"}),". This will execute on the\nnearest weekday (Monday to Friday) around that day. So ",(0,s.jsx)(n.code,{children:"0 0 12 15W * *"})," will execute on 12h UTC of the 15th of a month,\nif that day is a Monday, Tuesday, Wednesday, Thursday, of Friday. If the 15th is a Saturday, it will execute on 12h UTC\non Friday the 14th. If the 15th is a Sunday, it will execute on 12h UTC on Monday the 16th. It will however never jump\ninto another month. If you use ",(0,s.jsx)(n.code,{children:"1W"}),", and the first day of the month is a Saturday, it will execute on Monday the 3rd."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['Can be used in combination with lists (comma ","), must be used for each individual value of the list you want to use\nit on, e.g. ',(0,s.jsx)(n.code,{children:"1W,15W"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'Cannot be used with ranges (dash, "-") or increments (slash "/").'}),"\n",(0,s.jsxs)(n.li,{children:['Can be used in combination is hash ("H"), in the form ',(0,s.jsx)(n.code,{children:"HW"})," or e.g. ",(0,s.jsx)(n.code,{children:"H(6-9)W"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:['Can be used in combination with "L", but only as ',(0,s.jsx)(n.code,{children:"LW"}),", to execute on the last weekday of a month."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"last-l",children:"Last (L)"}),"\n",(0,s.jsx)(n.p,{children:"Has a different meaning, depending on where you use it."}),"\n",(0,s.jsxs)(n.p,{children:["A simple ",(0,s.jsx)(n.code,{children:"L"}),' means "the last of something". This is useful for the day-of-month field, as the last day of a month is\ndependent on the current month and year. ',(0,s.jsx)(n.code,{children:"0 0 12 L ?"})," will execute on the 31st of January, on the 28th or 29th (for leap\nyears) of February, on the 31st of March, on the 30th of April, and so on. You can also specify offsets from the last\nvalue, like this: ",(0,s.jsx)(n.code,{children:"0 0 12 L-3 * ?"}),". This executes on the 28th of January, on the 25th of 26th of February, and so on."]}),"\n",(0,s.jsxs)(n.p,{children:["In the day-of-week field ",(0,s.jsx)(n.code,{children:"L"})," simply refers to Sunday. But in combination with a number, it can be used to execute on the\nlast specific weekday of a month, like this: ",(0,s.jsx)(n.code,{children:"0 0 12 ? * 1L"})," will execute at 12h on the last Monday of every month."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Can be used in combination with ",(0,s.jsx)(n.code,{children:"W"}),", as ",(0,s.jsx)(n.code,{children:"LW"}),", to execute on the last weekday of a month."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"hash-h",children:"Hash (H)"}),"\n",(0,s.jsxs)(n.p,{children:["The character ",(0,s.jsx)(n.code,{children:"H"})," can be used in place of a number in any field of the cron. The ",(0,s.jsx)(n.code,{children:"H"})," wil be replaced with a consistent\npseudo random number, that fits into that field. On any given device this number will always be the same for a field,\nbut it\nwill differ for different devices. This can be used as a simple mechanism for load balancing, or to avoid collisions, if\nyou use a lot of devices."]}),"\n",(0,s.jsx)(n.p,{children:"Numbers will be 0-59 for second and minute fields, 0-23 for the hour field, 0-28 for the day-of-month field (it will\nnever activate on 29th, 30th, or 31st), 1-12 for the month field, and 1-7 for the day-of-week field."}),"\n",(0,s.jsxs)(n.p,{children:["When you, for example, set many devices to the cron ",(0,s.jsx)(n.code,{children:"0 0 4 * * *"}),", they will all activate at 4 AM UTC in the same\nsecond. For LoRaWAN devices, this will lead to a lot of packet collisions and therefore data loss, if the devices are in\nthe same area. For NB-IoT/LTE-M devices, it will lead to a concentrated workload on the server handling the requests and\nthe system evaluating the data. This can lead to bad system performance during that spike, while the system is idle most\nof the day."]}),"\n",(0,s.jsxs)(n.p,{children:["If instead of ",(0,s.jsx)(n.code,{children:"0 0 4 * * *"})," you set the devices to ",(0,s.jsx)(n.code,{children:"H H 4 * * *"}),", the two H characters will be replaced with a\nper-device-consistent random number in the range of 0-59, for example ",(0,s.jsx)(n.code,{children:"31 47 4 * * *"})," for one and ",(0,s.jsx)(n.code,{children:"17 0 4 * * *"})," for\nanother device. With this, the devices will all activate in the hour between 4 AM and 5 AM UTC and distribute the\nworkload."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"H"})," to pick a pseudo random number from a specific range by specifying the range in parenthesis like this:\n",(0,s.jsx)(n.code,{children:"H(4-8)"})," will be replaced with any of the numbers 4, 5, 6, 7, 8. The range must only use numbers that are valid for the\nfield ",(0,s.jsx)(n.code,{children:"H"})," is used in."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Can be used inside lists (comma ","), but the generated value could collide with other entries in list (see below).'}),"\n",(0,s.jsx)(n.li,{children:'Cannot be used with ranges (dash, "-").'}),"\n",(0,s.jsx)(n.li,{children:'Can be used with increments (slash, "/"), but only before the slash, as in "H(0-2)/3", not after it.'}),"\n"]})}),"\n",(0,s.jsx)(n.h4,{id:"pitfalls-with-using-h",children:"Pitfalls with using H"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Working with ",(0,s.jsx)(n.code,{children:"H"})," can be confusing and lead to unexpected results. It can be used in many places, but not all of them are\nuseful."]})}),"\n",(0,s.jsxs)(n.p,{children:["Writing ",(0,s.jsx)(n.code,{children:"0 H/10 * * * *"})," will on most devices create a cron that does not activate every 10 minutes. It\ncould evaluate to the expression ",(0,s.jsx)(n.code,{children:"0 47/10 * * * *"}),", which will only activate twice each hour, in minutes 47 and 57, but\nnot during minutes 0-46 at all. To have devices activate every 10 minutes at distributed times,\nuse ",(0,s.jsx)(n.code,{children:"0 H(0-9)/10 * * * *"})," or better yet: ",(0,s.jsx)(n.code,{children:"H H(0-9)/10 * * * *"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"H"})," in a list works, but it might lead to fewer activations as intended. Putting it in a list twice will not\nproduce multiple activations, because both ",(0,s.jsx)(n.code,{children:"H"})," will evaluate to the same number: ",(0,s.jsx)(n.code,{children:"0 0 H,H * * *"})," could turn into ",(0,s.jsx)(n.code,{children:"0 0 3,3 * * *"}),", which is the same as ",(0,s.jsx)(n.code,{children:"0 0 3 * * *"}),". Using ",(0,s.jsx)(n.code,{children:"0 0 H(0-4),H(8-12) * * *"})," would work to produce two activations\nper day."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"standard-cron-syntax",children:"Standard CRON Syntax"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["Cron definition",(0,s.jsx)("div",{style:{width:"185px"}})]}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsxs)(n.th,{children:["Trigger time points (hh:mm",":ss",")"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 5 * * * *   "})}),(0,s.jsx)(n.td,{children:"Hourly at minute 5, second 0"}),(0,s.jsx)(n.td,{children:"00:05:00, 01:05:00, 02:05:00..."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 1/10 * * * *    "})}),(0,s.jsx)(n.td,{children:"Every 10 minutes starting from minute 1, second 0"}),(0,s.jsx)(n.td,{children:"00:01:00, 00:11:00, 00:21:00, [...], 01:01:00, [...]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 0 6 * * *       "})}),(0,s.jsx)(n.td,{children:"Daily on hour 6, minute 0, second 0"}),(0,s.jsx)(n.td,{children:"06:00:00"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 0 13 1,15 * *   "})}),(0,s.jsx)(n.td,{children:"Hour 13, minute 0, second 0 on day 1 and 15"}),(0,s.jsx)(n.td,{children:"13:00:00 at 1st and 15th of month"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 15 9 1-5 * *    "})}),(0,s.jsx)(n.td,{children:"Hour 9, minute 15, second 0 on day 1 to 5"}),(0,s.jsx)(n.td,{children:"09:15:00 at 1st to 5th of month"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 0 6 * * 1       "})}),(0,s.jsx)(n.td,{children:"Weekly on Monday at 06:00:00"}),(0,s.jsx)(n.td,{children:"Monday, 06:00:00"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"extended-cron-syntax",children:"Extended CRON Syntax"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["Cron definition ",(0,s.jsx)("div",{style:{width:"185px"}})]}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 0 11 1W,15W * * "})}),(0,s.jsx)(n.td,{children:"11am on the days closest to the 1st and the 15th day each month that are not Saturdays or Sundays."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 0 15 1,L * *    "})}),(0,s.jsx)(n.td,{children:"3pm on the first and last day of each month."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 0 1 ? * 2L      "})}),(0,s.jsx)(n.td,{children:"1am on the last Tuesday of each month."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"H H H(0-2) * * *  "})}),(0,s.jsx)(n.td,{children:"Every day at a fixed pseudo random time between 00:00:00 and 02:59:59.Same time each day for a given device, but different time for different devices."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:" H H(0-9)/10 * * * *"})}),(0,s.jsx)(n.td,{children:"Every 10 minutes, but at a fixed time, randomly but consistently picked for each device."})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The Extended CRON Syntax will only work on recent firmware versions, e.g. the ",(0,s.jsx)(n.code,{children:"app-nrf9160-wmbus"})," firmware versions 0.15.4 and\nnewer.\nCheck the specific product manual to see if the extended syntax is implemented in the firmware."]})}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(n.p,{children:["All our CRON expressions are in the same format as the ",(0,s.jsx)(n.strong,{children:"Java Quarz scheduler"}),", without the optional ",(0,s.jsx)(n.code,{children:"year"})," field and a\ndifferent way of numbering weekdays. Also the extended CRON field have been added by Lobaro. A good documentation\nincluding\nexamples can be found here:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html",children:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html"})}),"\n",(0,s.jsx)(n.h3,{id:"online-cron-generators",children:"Online CRON Generators"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.freeformatter.com/cron-expression-generator-quartz.html",children:"https://www.freeformatter.com/cron-expression-generator-quartz.html"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://crontab-generator.org/",children:"https://crontab-generator.org/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"command" need to be set to some random string'}),"\n",(0,s.jsx)(n.li,{children:'The generated CRON has no "seconds" field'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://crontab.guru/",children:"https://crontab.guru/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'The generated CRON has no "seconds" field'}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);