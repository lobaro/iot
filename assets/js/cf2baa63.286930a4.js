"use strict";(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[8243],{6023:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=t(4848),n=t(8453);const d={},i="Monitoring",c={id:"platform/administration/monitoring",title:"Monitoring",description:"admin",source:"@site/docs/platform/administration/monitoring.md",sourceDirName:"platform/administration",slug:"/platform/administration/monitoring",permalink:"/iot/platform/administration/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/lobaro/iot/tree/master/docs/platform/administration/monitoring.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudSidebar",previous:{title:"Changelog",permalink:"/iot/platform/administration/changelog"},next:{title:"Server Certificates",permalink:"/iot/platform/administration/server-certificates"}},o={},a=[{value:"Metrics",id:"metrics",level:2},{value:"Useful Queries",id:"useful-queries",level:2}];function l(s){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"monitoring",children:"Monitoring"}),"\n",(0,r.jsx)(e.admonition,{title:"Required roles",type:"info",children:(0,r.jsx)(e.p,{children:"admin"})}),"\n",(0,r.jsxs)(e.p,{children:["Monitoring is realized via ",(0,r.jsx)(e.a,{href:"https://prometheus.io/",children:"Prometheus"})," and can be visualized e.g.\nwith ",(0,r.jsx)(e.a,{href:"https://grafana.com/",children:"Grafana"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Prometheus Endpoint: ",(0,r.jsx)(e.code,{children:"/metrics"})," (e.g. ",(0,r.jsx)(e.a,{href:"https://platform.lobaro.com/metrics",children:"https://platform.lobaro.com/metrics"}),")"]}),"\n",(0,r.jsxs)(e.li,{children:["Authorization: Bearer Token can be created at ",(0,r.jsx)(e.code,{children:"Configuration \u2192 Admin Tokens"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsx)(e.p,{children:"Types:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Counter"})," is a single counter that can only go up"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Gauge"})," is a single value that can go up and down"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Histogram"})," has 3 metrics with suffix ",(0,r.jsx)(e.code,{children:"_bucket"}),", ",(0,r.jsx)(e.code,{children:"_count"})," and ",(0,r.jsx)(e.code,{children:"_sum"})]}),"\n"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"coap_request_duration_seconds"}),(0,r.jsx)(e.td,{children:"Histogram"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"go_gc_duration"}),(0,r.jsx)(e.td,{children:"Histogram"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"go_goroutines"}),(0,r.jsx)(e.td,{children:"Counter"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"go_info"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"States the go release version"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["go_memstats_alloc_bytes",(0,r.jsx)("br",{}),"go_memstats_alloc_bytes_total",(0,r.jsx)("br",{}),"go_memstats_buck_hash_sys_bytes",(0,r.jsx)("br",{}),"go_memstats_frees_total",(0,r.jsx)("br",{}),"go_memstats_gc_cpu_fraction",(0,r.jsx)("br",{}),"go_memstats_gc_sys_bytes",(0,r.jsx)("br",{}),"go_memstats_heap_alloc_bytes",(0,r.jsx)("br",{}),"go_memstats_heap_idle_bytes",(0,r.jsx)("br",{}),"go_memstats_heap_inuse_bytes",(0,r.jsx)("br",{}),"go_memstats_heap_objects",(0,r.jsx)("br",{}),"go_memstats_heap_released_bytes",(0,r.jsx)("br",{}),"go_memstats_heap_sys_bytes",(0,r.jsx)("br",{}),"go_memstats_last_gc_time_seconds",(0,r.jsx)("br",{}),"go_memstats_lookups_total",(0,r.jsx)("br",{}),"go_memstats_mallocs_total",(0,r.jsx)("br",{}),"go_memstats_mcache_inuse_bytes",(0,r.jsx)("br",{}),"go_memstats_mcache_sys_bytes",(0,r.jsx)("br",{}),"go_memstats_mspan_inuse_bytes",(0,r.jsx)("br",{}),"go_memstats_mspan_sys_bytes",(0,r.jsx)("br",{}),"go_memstats_next_gc_bytes",(0,r.jsx)("br",{}),"go_memstats_other_sys_bytes",(0,r.jsx)("br",{}),"go_memstats_stack_inuse_bytes",(0,r.jsx)("br",{}),"go_memstats_stack_sys_bytes",(0,r.jsx)("br",{}),"go_memstats_sys_bytes"]}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"go_threads"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["http_publish_errors",(0,r.jsx)("br",{}),"http_publish_successfully"]}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"mbus_apiAccessCounter"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["mqtt_publish_errors",(0,r.jsx)("br",{}),"mqtt_publish_successfully"]}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"parser_runtime_seconds"}),(0,r.jsx)(e.td,{children:"Histogram"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["process_cpu_seconds_total",(0,r.jsx)("br",{}),"process_max_fds",(0,r.jsx)("br",{}),"process_open_fds",(0,r.jsx)("br",{}),"process_resident_memory_bytes",(0,r.jsx)("br",{}),"process_start_time_seconds",(0,r.jsx)("br",{}),"process_virtual_memory_bytes",(0,r.jsx)("br",{}),"process_virtual_memory_max_bytes"]}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["promhttp_metric_handler_requests_in_flight",(0,r.jsx)("br",{}),"promhttp_metric_handler_requests_total"]}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["scrape_duration_seconds",(0,r.jsx)("br",{}),"scrape_samples_post_metric_relabeling",(0,r.jsx)("br",{}),"scrape_samples_scraped",(0,r.jsx)("br",{}),"scrape_series_added"]}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"up"}),(0,r.jsx)(e.td,{children:"Gauge"}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"useful-queries",children:"Useful Queries"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Query"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(graphql_request_duration_seconds_sum{job="$Instance"}[1m]) / (rate(graphql_request_duration_seconds_count{job="$Instance"}[1m]) + 0.000001) * 1000'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{children:"GraphQL Response Time"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(graphql_resolver_duration_seconds_sum{job="$Instance"}[1m]) / (rate(graphql_resolver_duration_seconds_count{job="$Instance"}[1m]) + 0.000001) * 1000'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{children:"GraphQL Resolver Time"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(parser_runtime_seconds_sum{job="$Instance"}[60s]) / (rate(parser_runtime_seconds_count{job="$Instance"}[60s]) + 0.0001) * 1000'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{children:"Parser Run Time"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(mbus_apiAccessCounter{job="$Instance"}[1m]) * 60'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{children:"MBUS API calls per minute"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(coap_request_duration_seconds_sum{job="$Instance"}[1m]) / (rate(coap_request_duration_seconds_count{job="$Instance"}[1m]) + 0.000001)'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{children:"COAP Response Times"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(mqtt_publish_errors{job="$Instance"}[1m]) * 60'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{children:"Integrations calls per minute"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(mqtt_publish_successfully{job="$Instance"}[1m]) * 60'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(http_publish_successfully{job="$Instance"}[1m]) * 60'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(http_publish_errors{job="$Instance"}[1m]) * 60'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'rate(coap_request_duration_seconds_count{job="$Instance"}[1m]) * 60'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{children:"Sum COAP Calls per minute"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'go_memstats_alloc_bytes{job="$Instance"} + go_memstats_stack_inuse_bytes{job="$Instance"}'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsx)(e.td,{children:"Memory Usage: Heap + Stack"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'go_memstats_sys_bytes{job="$Instance"}'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsxs)(e.td,{children:["Memory Usage",":System"," Memory"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:'go_memstats_alloc_bytes{job="$Instance"}'})}),(0,r.jsx)(e.td,{children:"Graph"}),(0,r.jsxs)(e.td,{children:["Memory Usage",":Heap"]})]})]})]})]})}function h(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(l,{...s})}):l(s)}},8453:(s,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(6540);const n={},d=r.createContext(n);function i(s){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:i(s.components),r.createElement(d.Provider,{value:e},s.children)}}}]);