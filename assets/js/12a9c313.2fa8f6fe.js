"use strict";(self.webpackChunklobaro_docs=self.webpackChunklobaro_docs||[]).push([[1830],{2372:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(4848),s=a(8453);const i={sidebar_position:5,displayed_sidebar:"firmwareSidebar",title:"LoRaWAN Communication"},r="LoRaWAN Communication",o={id:"firmware/app-nrf9160-wmbus/lorawan-communication-protocol",title:"LoRaWAN Communication",description:"The Gateway can use LoRaWAN as Uplink technology for forwarding received wireless M-BUS telegrams to any network server.",source:"@site/docs/firmware/app-nrf9160-wmbus/lorawan-communication-protocol.md",sourceDirName:"firmware/app-nrf9160-wmbus",slug:"/firmware/app-nrf9160-wmbus/lorawan-communication-protocol",permalink:"/iot/firmware/app-nrf9160-wmbus/lorawan-communication-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/lobaro/iot/tree/master/docs/firmware/app-nrf9160-wmbus/lorawan-communication-protocol.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"firmwareSidebar",title:"LoRaWAN Communication"},sidebar:"firmwareSidebar",previous:{title:"Configuration Parameter",permalink:"/iot/firmware/app-nrf9160-wmbus/configuration-parameter"},next:{title:"Cellular IoT Communication",permalink:"/iot/firmware/app-nrf9160-wmbus/cellular-iot-communication-protocol"}},d={},l=[{value:"Uplink Payload Formats",id:"uplink-payload-formats",level:2},{value:"Status Packet (Port 1)",id:"status-packet-port-1",level:3},{value:"Data Packet (PayloadFormat 0)",id:"data-packet-payloadformat-0",level:3},{value:"Examples",id:"examples",level:4},{value:"Length 48 Byte wMBUS telegram",id:"length-48-byte-wmbus-telegram",level:5},{value:"Length 75 byte wMBUS telegram",id:"length-75-byte-wmbus-telegram",level:5},{value:"Length 101 byte wMBUS telegram",id:"length-101-byte-wmbus-telegram",level:5},{value:"Data Packet (PayloadFormat 1)",id:"data-packet-payloadformat-1",level:3},{value:"Data Packet (PayloadFormat 2)",id:"data-packet-payloadformat-2",level:3},{value:"Examples",id:"examples-1",level:3},{value:"PayloadFormat 1",id:"payloadformat-1",level:4},{value:"PayloadFormat 2",id:"payloadformat-2",level:4},{value:"Upload Speed / Duration",id:"upload-speed--duration",level:2},{value:"Downlink Payload Formats",id:"downlink-payload-formats",level:2},{value:"LoRaWAN Downlink Ports",id:"lorawan-downlink-ports",level:3},{value:"Remote Configuration",id:"remote-configuration",level:3},{value:"Firmware Control Commands",id:"firmware-control-commands",level:3},{value:"Ad-hoc-readout",id:"ad-hoc-readout",level:4},{value:"Decoding wMBUS telegrams",id:"decodewmbus",level:2},{value:"Example JS parser",id:"example-js-parser",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"lorawan-communication",children:"LoRaWAN Communication"}),"\n",(0,n.jsx)(t.p,{children:"The Gateway can use LoRaWAN as Uplink technology for forwarding received wireless M-BUS telegrams to any network server."}),"\n",(0,n.jsx)(t.admonition,{title:"common misunderstanding",type:"note",children:(0,n.jsxs)(t.p,{children:["Products based on this firmware are ",(0,n.jsx)(t.strong,{children:"not"})," LoRaWAN Gateways. Thus, other LoRaWAN Devices / Sensors can not be received.\nIn fact the firmware acts itself as LoRaWAN node and ",(0,n.jsx)(t.strong,{children:"needs"})," an external LoRaWAN network which consists of one are\nmore LoRaWAN Gateways."]})}),"\n",(0,n.jsx)(t.h2,{id:"uplink-payload-formats",children:"Uplink Payload Formats"}),"\n",(0,n.jsx)(t.p,{children:"After collecting wireless M-Bus telegrams over the air, the Bridge starts uploading data via LoRaWAN. There exist two\ndata formats that are transmitted over different LoRaWAN ports. As LoRaWAN can only transmit very short messages, the\nmessage formats contain only data bytes. The meaning of a byte is determined by its position within a message. The\nfollowing describes the package formats used by the wireless M-Bus Bridge."}),"\n",(0,n.jsxs)(t.p,{children:["M-Bus telegrams can be longer as the maximal size of a LoRaWAN-Message. For this cases, the firmware needs to split a\ntelegram into multiple pieces and upload it using multiple LoRaWAN-Messages. There are two different methods this is\ndone, according to the payload pormat you set in the ",(0,n.jsx)(t.a,{href:"/iot/firmware/app-nrf9160-wmbus/configuration-parameter#lorawanparams",children:"firmware configuration"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A configuration with ",(0,n.jsx)(t.code,{children:"PayloadFormat = 0"})," is focused on easy reassembly of the pieces. The parts are encoded by port\nnumbers and the data can\njust be concatenated together. Payload Formats 1 and 2 add additional information to the telegram. They focus on putting\nas much of a telegram in a single LoRaWAN-Message as possible with respecting the current Spreading Factor."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"LoRaWAN Port"}),(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.code,{children:"PayloadFormat"})," Configuration"]}),(0,n.jsx)(t.th,{children:"Uplink Message"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"any"})}),(0,n.jsx)(t.td,{children:"Status Message"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"11-99"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"0"})}),(0,n.jsx)(t.td,{children:"Default PayloadFormat. Part of split telegrams is encoded in Port (e.g. Port 24 = Telegram 2 of 4)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"101"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"1"})}),(0,n.jsx)(t.td,{children:"Data Message with timestamp and without RSSI. Part of split telegrams is encoded in payload."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"102"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"2"})}),(0,n.jsx)(t.td,{children:"Data Message with timestamp and with RSSI. Part of split telegrams is encoded in payload."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"status-packet-port-1",children:"Status Packet (Port 1)"}),"\n",(0,n.jsxs)(t.p,{children:["In order to provide some information about the health & connectivity state of the device itself, the device\nsends a status update at a daily basis. The status packet is sent on the first upload phase after activation of the\ndevice (after reboot) and then repeatedly in every upload phase that takes place a day or longer after the previous\nstatus packet. It has a length of 7 or 8 bytes. The battery voltages and ambient temperature are encodes as 16 bit\ninteger using ",(0,n.jsx)(t.strong,{children:"little endian encoding"}),"."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Bytes"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"version"}),(0,n.jsx)(t.td,{children:"uint8[3]"}),(0,n.jsx)(t.td,{children:"0-2"}),(0,n.jsx)(t.td,{children:"Firmware Version"}),(0,n.jsx)(t.td,{children:"1, 5, 1 \u2261 v1.5.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"v_bat"}),(0,n.jsx)(t.td,{children:"uint16"}),(0,n.jsx)(t.td,{children:"3-4"}),(0,n.jsx)(t.td,{children:"Battery Voltage [mV]"}),(0,n.jsx)(t.td,{children:"2947 \u2261 2.947V"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"temp"}),(0,n.jsx)(t.td,{children:"int16"}),(0,n.jsx)(t.td,{children:"5-6"}),(0,n.jsx)(t.td,{children:"Temperature [1/10 \xb0C]"}),(0,n.jsx)(t.td,{children:"246  \u2261 24.6\xb0C"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"flag"}),(0,n.jsx)(t.td,{children:"int8"}),(0,n.jsx)(t.td,{children:"7"}),(0,n.jsx)(t.td,{children:"Internal Flag"}),(0,n.jsx)(t.td,{children:"0x01"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"data-packet-payloadformat-0",children:"Data Packet (PayloadFormat 0)"}),"\n",(0,n.jsx)(t.p,{children:"After each wMBUS collecting phase, all saved telegrams will be uploaded via LoRaWAN uplink\nmessages as fast as possible. The received wMBUS telegrams that did pass the configured filters will be\nuploaded without any modification in one or more LoRaWAN messages."}),"\n",(0,n.jsx)(t.p,{children:"If a wMBUS telegram is bigger than the bridge\nconfiguration parameter loraMaxMsgSize the transmission will be done using multiple LoRaWAN messages. This parameter is\nlimited to \u2264 50 bytes due to LoRaWANs maximum payload size restrictions. In case of telegram splitting is needed the\nreceiving backend application server as to reassemble the original wMBUS telegram before decryption & parsing of the\nmeter data. This is done by simply joining the messages together in the order of receive. The LoRaWAN port encodes\nidentifies a LoRaWAN fragment of the original wireless M-Bus telegram. This way partial messages can be identified using\nthe LoRaWAN Port:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"10 < LoRaWAN Port < 100 \u2261 (Part Number | Total Parts)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Gaps in the LoRaWAN Frame Counter are giving a hint for missing telegram parts which can happen in LoRaWAN since it's a\nALOHA based protocol, e.g. collisions and some packet losses are accepted by principle of operation. In case the backend\nnoticed a missing packet the wMBUS telegram can't be assembled anymore as described before."}),"\n",(0,n.jsx)(t.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["With a configuration of ",(0,n.jsx)(t.code,{children:"loraMaxMsgSize"})," = 50:"]}),"\n",(0,n.jsx)(t.h5,{id:"length-48-byte-wmbus-telegram",children:"Length 48 Byte wMBUS telegram"}),"\n",(0,n.jsx)(t.p,{children:"Will be send on LoRaWAN port 11. Port 11 says it is the first message of only one message (no splitting)."}),"\n",(0,n.jsx)(t.h5,{id:"length-75-byte-wmbus-telegram",children:"Length 75 byte wMBUS telegram"}),"\n",(0,n.jsx)(t.p,{children:"Will be send in two messages on LoRaWAN ports 12 and 22. Port 12 means this part one of a wMBUS telegram that got\nsplitted into two LoRaWAN messages. Port 22 means that this data is the 2nd part of the original wMBUS data. Both parts\nhave to been concatenated in the order of receive by the backend."}),"\n",(0,n.jsx)(t.h5,{id:"length-101-byte-wmbus-telegram",children:"Length 101 byte wMBUS telegram"}),"\n",(0,n.jsx)(t.p,{children:"Will be send in three messages on LoRaWAN ports 13, 23 and 33. Port 13 means this part one of a wMBUS telegram that got\nsplitted into three LoRaWAN messages. Port 23 means that this data is the 2nd part of the original wMBUS data. Port 33\nmeans that this data is the 3rd part of the original wMBUS data. All three parts have to been concatenated in the order\nof receive by the backend."}),"\n",(0,n.jsx)(t.h3,{id:"data-packet-payloadformat-1",children:"Data Packet (PayloadFormat 1)"}),"\n",(0,n.jsxs)(t.p,{children:["When using Payload Format 1, collected telegrams are uploaded on single port 101 ",(0,n.jsx)(t.strong,{children:"without RSSI"})," (of received wmbus\ntelegram) information. For each telegram there will be\nadded the timestamp of reception. The first byte of messages on Port 101 encodes splitting of messages as follows."]}),"\n",(0,n.jsxs)(t.p,{children:["Every Uplink on Port 101 is prefixed with a single byte, where the least significant Bit indicates if that Uplink is the\nfirst part of a message, and the second least significant Bit indicates if that Uplink is the last part or a message. So\nthere are 4 different possible values for the ",(0,n.jsx)(t.strong,{children:"first Byte"})," of an Uplink on Port 101:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["0x03:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This Uplink is both first and final part of a message. So the remaining Bytes in this Uplink contain the whole\nmessage."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["0x02:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This Uplink is the last but not the first part of a message. There has been at least one Uplink before this one,\nthat contained data that needs to be prepended to the current Uplink in order to get the full Message"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["0x01:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This Uplink is the first but not the last part of a message. There follows at least one Uplink that contains more\ndata to be appended to the current's data in order to get the full message."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["0x00:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This Uplink is neither first nor last part of a message. There has been at least one Uplink before this one that\ncontains more data of the current Message, and there follows at least one more Uplink with data for this Message."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"So each message sent on Port 101, whether it is contained in a single Uplink or spread over multiple ones, starts with\nan Uplink where the least significant Bit of the first Byte is set. Each Message ends with an Uplink where the second\nleast significant Bit of the first Byte is set. In cases where the Message fits in a single Uplink, that Uplink is both\nfirst and last Uplink, and therefore both Bits are set."}),"\n",(0,n.jsx)(t.p,{children:"The combination of those two Bits and the Frame Counter of the Uplinks makes it possible to upload Messages of any\nlength while allowing the receiving side to know exactly if a Message has been transferred completely, or if part of it\nis missing (when there are Frame Counter values missing)."}),"\n",(0,n.jsx)(t.p,{children:"The Bridge puts as many Bytes in each Uplink as possible for the current Spreading Factor, even if the Spreading Factor\nchanges between Uplinks because of ADR."}),"\n",(0,n.jsx)(t.p,{children:"When the data of all Uplinks that are part of a single Message are appended in order of reception (after removing the\nfirst Byte of each Uplink), you get the payload Data of a full message."}),"\n",(0,n.jsx)(t.p,{children:"The Payload Data after reassembly of the split parts consists of a 5 Byte Timestamp, that marks the point in time the\nBridge did receive that telegram, followed by the Data of the Telegram. The Timestamp follows the convention of all our\n40bit-Timestamps; you can find the details under Timestamp in our LoRaWAN Background Information."}),"\n",(0,n.jsx)(t.h3,{id:"data-packet-payloadformat-2",children:"Data Packet (PayloadFormat 2)"}),"\n",(0,n.jsx)(t.p,{children:"Upload Format 2 works like Upload Format 1, with the same logic for splitting messages, but uploads are sent on port"}),"\n",(0,n.jsxs)(t.ol,{start:"102",children:["\n",(0,n.jsx)(t.li,{children:"The Payload consists of a 5 Byte Timestamp marking the time of reception, followed by a uint_8 that holds the (\nnegated) RSSI value for that reception, followed by the data of the Telegram."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"examples-1",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["For easier understanding, the wMBus-Telegram in the examples will always be ",(0,n.jsx)(t.code,{children:"0102030405060708090a0b0c0d0e0f"})," (15 Byte)."]}),"\n",(0,n.jsx)(t.h4,{id:"payloadformat-1",children:"PayloadFormat 1"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",metastring:'title="A message sent in a single Uplink"',children:"# An Uplink of 21 Bytes on Port 101:\n'03005e53f31a0102030405060708090a0b0c0d0e0f'\n# Analised:\n'03' -> First and Last Uplink of Message -> complete Message in this Uplink\n'005e53f31a' -> Unix Timestamp 1582560026 -> 2020-02-24T16:00:26 UTC\n'0102030405060708090a0b0c0d0e0f' -> wMBus Telegram\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",metastring:'title="A message split over two Uplinks"',children:"# An Uplink of 11 Bytes on Port 101, Frame Counter 341:\n'01005e53f31a0102030405'\n'01' -> First Uplink of Message, more Uplinks follow\n'05e53f31a0102030405' -> First Part of Message Data.\n# Another Uplink of 11 Bytes on Port 101, Frame Counter 342:\n'02060708090a0b0c0d0e0f'\n'02' -> Last (but not first) Uplink of Message.\n'060708090a0b0c0d0e0f' -> Second and final Part of Message Data.\n# We Received a 'first' Part with Frame Counter 341 and a 'last'\n# Part with Frame Counter 342, so we know we did not miss any\n# Parts in between. We can now assembly the complete payload:\n'05e53f31a0102030405060708090a0b0c0d0e0f'\n# Payload anaylsed:\n'005e53f31a' -> Unix Timestamp 1582560026 -> 2020-02-24T16:00:26 UTC\n'0102030405060708090a0b0c0d0e0f' -> wMBus Telegram\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",metastring:'title="A message split over three Uplinks"',children:"# An Uplink of 8 Bytes on Port 101, Frame Counter 519:\n'01005e53f31a0102'\n'01' -> First Uplink of Message, more Uplinks follow\n'05e53f31a0102' -> First Part of Message Data.\n# Another Uplink of 8 Bytes on Port 101, Frame Counter 520:\n'0003040506070809'\n'00' -> Middle Part of Message, there have been some Parts already, more Uplinks follow\n'03040506070809' -> Second Part of Message Data.\n# Another Uplink of 7 Bytes on Port 101, Frame Counter 521:\n'020a0b0c0d0e0f'\n'02' -> Last (but not first) Uplink of Message.\n'0a0b0c0d0e0f' -> Third and final Part of Message Data.\n# Frame Counters are consecuetive, so the complete Message is:\n'05e53f31a0102030405060708090a0b0c0d0e0f'\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",metastring:'title="Uplinks with a missing a Part""',children:"# An Uplink of 8 Bytes on Port 101, Frame Counter 123:\n'01005e53f31a0102'\n'01' -> First Uplink of Message, more Uplinks follow\n'05e53f31a0102' -> First Part of Message Data.\n# Another Uplink of 7 Bytes on Port 101, Frame Counter 125:\n'020a0b0c0d0e0f'\n'02' -> Last (but not first) Uplink of Message.\n'0a0b0c0d0e0f' -> Third and final Part of Message Data.\n# Frame Counter indicates, that a Part in the middle is missing,\n# so we have to drop the Message.\n"})}),"\n",(0,n.jsx)(t.h4,{id:"payloadformat-2",children:"PayloadFormat 2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",metastring:'title="A message sent in a single Uplink"',children:"# An Uplink of 8 Bytes on Port 101, Frame Counter 123:\n'01005e53f31a0102'\n'01' -> First Uplink of Message, more Uplinks follow\n'05e53f31a0102' -> First Part of Message Data.\n# Another Uplink of 7 Bytes on Port 101, Frame Counter 125:\n'020a0b0c0d0e0f'\n'02' -> Last (but not first) Uplink of Message.\n'0a0b0c0d0e0f' -> Third and final Part of Message Data.\n# Frame Counter indicates, that a Part in the middle is missing,\n# so we have to drop the Message.\n"})}),"\n",(0,n.jsx)(t.h2,{id:"upload-speed--duration",children:"Upload Speed / Duration"}),"\n",(0,n.jsx)(t.p,{children:"The firmware has to work in compliance with the European SRD 868 1% duty-cycle regulations. This implies as a rule of\nthumb the device can upload at most wireless M-BUS telegrams via LoRaWAN for 36 seconds every hour."}),"\n",(0,n.jsx)(t.p,{children:"The actual transmit time ('ToA: time on air') for each LoRaWAN message depends on the byte size and the used LoRa\nspreading factor (SF) which defines how redundant LoRa data is send. This means a device with good connectivity and\nconsequently using LoRa SF7 (ToA \u2264 0,050s) can upload much faster more data than a node using LoRa SF11 (ToA \u2265 1s) due\nto a hard to reach LoRaWAN gateway. The bridge will upload in conformity with the regulations automatically as fast as\npossible. When it has to wait it enters a low power sleep mode until the next transmission is possible again. The next\ndata collection phase will be started only after completion of the previous upload phase in respect to the configured\nlistenCron parameter. Because of this it is advisable to define the cron parameter with an estimation of the upload\nduration in mind. This will avoid unexpected 'skipping' of data collection phases."}),"\n",(0,n.jsx)(t.h2,{id:"downlink-payload-formats",children:"Downlink Payload Formats"}),"\n",(0,n.jsx)(t.h3,{id:"lorawan-downlink-ports",children:"LoRaWAN Downlink Ports"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Port"}),(0,n.jsx)(t.th,{children:"Message"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"128"}),(0,n.jsx)(t.td,{children:"Remote Confiuration"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"132"}),(0,n.jsx)(t.td,{children:"Firmware Control Commands"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"remote-configuration",children:"Remote Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["The remote configuration follows the general ",(0,n.jsx)(t.a,{href:"/iot/configuration/lorawan-downlink-config",children:"Lobaro protocol"})," for over the\nair configuration using LoRaWAN."]}),"\n",(0,n.jsx)(t.admonition,{title:"in depth description",type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/iot/configuration/lorawan-downlink-config",children:"Read more"})," about LoRaWAN based downlink configuration."]})}),"\n",(0,n.jsx)(t.h3,{id:"firmware-control-commands",children:"Firmware Control Commands"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Port"}),(0,n.jsx)(t.th,{children:"Action"}),(0,n.jsx)(t.th,{children:"DL Payload (ASCII)"}),(0,n.jsx)(t.th,{children:"DL Payload (Hex)"}),(0,n.jsx)(t.th,{children:"DL Payload (Base64)"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"132"}),(0,n.jsx)(t.td,{children:"Ad-hoc-readout"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"read"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"72656164"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"cmVhZA"}),"=="]})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"ad-hoc-readout",children:"Ad-hoc-readout"}),"\n",(0,n.jsx)(t.p,{children:"A downlink that triggers an Ad hoc readout, independent of CRON triggers. The Ad-hoc readout is using the same\nparameters (filters and listening duration) as a CRON triggered readout."}),"\n",(0,n.jsx)(t.h2,{id:"decodewmbus",children:"Decoding wMBUS telegrams"}),"\n",(0,n.jsx)(t.p,{children:"After receiving and reassemble the raw wireless M-Bus telegrams from your LoRaWAN network provider the actual metering data has to be\ndecrypted and decoded by a backend service for further processing. The details of this are described in the EN 13757\nnorm and the newer OMS specification, which is a clarification of the original underlying norm."}),"\n",(0,n.jsx)(t.p,{children:"A universal wireless M-Bus decoder is a relatively complicated piece of software if you start implementing it from\nscratch since the norm covers many different use cases, units, meter types and data formats. If you know in advance the\nexact telegram format of the deployed meters in your setup a hard coded data decoding may be a feasible approach. This\nis because wireless M-Bus devices often send the same telegram format in every transmission. Please contact the\nmanufacturer of your meters for the needed telegram format details."}),"\n",(0,n.jsxs)(t.admonition,{title:"Lobaro wireless M-BUS parser",type:"tip",children:[(0,n.jsxs)(t.p,{children:["An an alternative to support a quick evaluation of our hardware Lobaro offers a easy to use\nwebservice (",(0,n.jsx)(t.a,{href:"https://www.mbus.org",children:"mbus.org"}),") which is designed\nto decode all sorts of wMBUS input data including decryption if the correct key has been provided. You can access the\ndecoder service for free during testing. The API can be licensed for production usages."]}),(0,n.jsx)(t.p,{children:"Since wireless MBUS is a complex and grown specification some meters may fail to decode correctly. We try to fix any\ndecoding issues as quickly as possible if you report us problems with your specific wMBUS device."})]}),"\n",(0,n.jsx)(t.h2,{id:"example-js-parser",children:"Example JS parser"}),"\n",(0,n.jsxs)(t.p,{children:["This parser may be used to decode the status message of this firmware send over LoRaWAN. For decoding wireless M-BUS telegram data see\nthe above ",(0,n.jsx)(t.a,{href:"#decodewmbus",children:"documentation"})," about this topic."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="Status message LoRaWAN parser (Java-Script)"',children:'function readVersion(bytes, i) {\n    if (bytes.length < 3) {\n        return null;\n    }\n    return "v" + bytes[i] + "." + bytes[i + 1] + "." + bytes[i + 2];\n}\n\nfunction parse_sint16(bytes, idx) {\n    bytes = bytes.slice(idx || 0);\n    var t = bytes[0] << 8 | bytes[1] << 0;\n    if ((t & 1 << 15) > 0) { // temp is negative (16bit 2\'s complement)\n        t = ((~t) & 0xffff) + 1; // invert 16bits & add 1 => now positive value\n        t = t * -1;\n    }\n    return t;\n}\n\nfunction Decoder(bytes, port) {\n    // Decode an uplink message from a buffer\n    // (array) of bytes to an object of fields.\n    var decoded = {};\n\n    if (port === 9) {\n        decoded.devStatus = bytes[0];\n        decoded.devID = bytes[1] | bytes[2] << 8 | bytes[3] << 16 | bytes[4] << 24;\n        decoded.dif = bytes[5];\n        decoded.vif = bytes[6];\n        decoded.data0 = bytes[7];\n        decoded.data1 = bytes[8];\n        decoded.data2 = bytes[9];\n    }\n\n    // example decoder for status packet by lobaro\n    if (port === 1 && bytes.length == 9) { // status packet - old\n        decoded.FirmwareVersion = String.fromCharCode.apply(null, bytes.slice(0, 5)); // byte 0-4\n        decoded.Vbat = (bytes[5] | bytes[6] << 8) / 1000.0; // byte 6-7 (originally in mV)\n        decoded.Temp = parse_sint16(bytes, 7) / 10.0; // byte 8-9 (originally in 10th degree C)\n        decoded.msg = "Firmware Version: v" + decoded.FirmwareVersion + " Battery: " + decoded.Vbat + "V Temperature: " + decoded.Temp + "\xb0C";\n    } else if (port === 1 && bytes.length >= 7) {\n        decoded.FirmwareVersion = readVersion(bytes, 0); // byte 0-2\n        decoded.Vbat = (bytes[3] | bytes[4] << 8) / 1000.0; // originally in mV\n        decoded.Temp = parse_sint16(bytes, 5) / 10.0; // byte 8-9 (originally in 10th degree C)\n        decoded.msg = "Firmware Version: " + decoded.FirmwareVersion + " Battery: " + decoded.Vbat + "V Temperature: " + decoded.Temp + "\xb0C";\n        if (bytes.length == 8) { // added in v2.5.0\n            decoded.Flags = bytes[7];\n        }\n    }\n\n\n    return decoded;\n}\n\n// Wrapper for Lobaro Platform\nfunction Parse(input) {\n    // Decode an incoming message to an object of fields.\n    var b = bytes(atob(input.data));\n    var decoded = Decoder(b, input.fPort);\n\n    return decoded;\n}\n\n// Wrapper for Loraserver / ChirpStack\nfunction Decode(fPort, bytes) {\n    return Decoder(bytes, fPort);\n}\n\n// Wrapper for Digimondo niota.io\n// Uncomment only when used in niota!\n/*\nmodule.exports = function (payload, meta) {\n    const port = meta.lora.fport;\n    const buf = Buffer.from(payload, \'hex\');\n   \n    return Decoder(buf, port);\n}*/\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(6540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);