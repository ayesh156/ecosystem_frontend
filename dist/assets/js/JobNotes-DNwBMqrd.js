import{r as l,j as e}from"./vendor-react-BwcC2Ydo.js";import{v as be,u as We,b as Ke,N as Ye,S as ue}from"./index-DQyL7QrZ.js";import{D as Ge}from"./DeleteConfirmationModal-DFRHDTOa.js";import{an as He,ar as Ve,g as fe,Y as Xe,W as $e,aO as se,x as De,X as te,as as Qe,at as qe,au as Ze,av as _e,aw as es,ax as ss,b2 as Ne,U as ts,ak as as,ad as ve,aC as ee,ay as je,T as we,R as ls,aA as rs,I as ye,H as ke,aB as is,a7 as Se,br as ns,P as Te,bn as os,a9 as ds,F as cs,a8 as xs,bo as ms}from"./vendor-icons-BIKcqT2E.js";import{u as hs}from"./vendor-router-CpYcqQb6.js";import"./vendor-pdf-Cw62MR9d.js";import"./vendor-other-SQu4theQ.js";import"./vendor-date-qW5d3bni.js";import"./vendor-radix-CLu8eon7.js";import"./vendor-ui-utils-Dr6D9L7d.js";import"./vendor-query-BOUmJV46.js";import"./vendor-cmdk-p92446dP.js";const Pe=l.forwardRef(({jobNote:s,branding:y},E)=>{const x=y?.name||"Eco System",W=y?.logo&&y.logo!==be,m=y?.logo||be,L=y?.phone||"011-2345678",j=y?.email||"info@ecosystem.lk",I=r=>new Date(r).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"}),h=r=>`LKR ${r.toLocaleString("en-LK",{minimumFractionDigits:2})}`,A=r=>({received:"Received",diagnosing:"Diagnosing","waiting-parts":"Waiting for Parts","in-progress":"In Progress",testing:"Testing",completed:"Completed",delivered:"Delivered",cancelled:"Cancelled"})[r]||r,$=r=>({low:"Low",normal:"Normal",high:"High",urgent:"Urgent"})[r]||r,K=r=>({laptop:"Laptop",desktop:"Desktop PC",printer:"Printer",monitor:"Monitor",phone:"Mobile Phone",tablet:"Tablet",other:"Other Device"})[r]||r;return e.jsxs("div",{ref:E,className:"print-job-note",children:[e.jsx("style",{children:`
          /* ═══════════════════════════════════════════════════════════════
             INK-EFFICIENT B&W PRINT OPTIMIZED - ECO SYSTEM JOB NOTE
             Designed for black laser/inkjet printers to minimize ink usage
             ═══════════════════════════════════════════════════════════════ */
          
          @media print {
            @page {
              size: A4 portrait;
              margin: 8mm 10mm;
            }
            
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              background: white !important;
            }
            
            .print-job-note {
              width: 100% !important;
              max-width: none !important;
              padding: 0 !important;
              margin: 0 !important;
              background: white !important;
              color: #000 !important;
              font-family: 'Segoe UI', 'Arial', sans-serif !important;
              font-size: 9pt !important;
            }
            
            .no-print {
              display: none !important;
            }
          }
          
          .print-job-note {
            width: 210mm;
            min-height: 297mm;
            padding: 8mm 10mm;
            margin: 0 auto;
            background: white;
            color: #000;
            font-family: 'Segoe UI', 'Arial', sans-serif;
            font-size: 9pt;
            line-height: 1.4;
            box-sizing: border-box;
          }

          /* HEADER - INK EFFICIENT */
          .job-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-bottom: 12px;
            border-bottom: 2px solid #000;
            margin-bottom: 15px;
          }

          .company-section {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .company-logo {
            width: 55px;
            height: 55px;
            object-fit: contain;
          }

          .company-info h1 {
            font-size: 18pt;
            font-weight: 700;
            color: #000;
            margin: 0;
          }

          .company-info h1 span {
            color: #000;
          }

          .company-info .contact {
            font-size: 7pt;
            color: #000;
            margin-top: 4px;
          }

          .job-number-box {
            text-align: right;
            background: white;
            color: #000;
            padding: 12px 20px;
            border: 2px solid #000;
            border-radius: 4px;
          }

          .job-number-box .label {
            font-size: 7pt;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 700;
          }

          .job-number-box .number {
            font-size: 16pt;
            font-weight: 700;
            font-family: 'Consolas', monospace;
          }

          .job-number-box .date {
            font-size: 8pt;
            color: #000;
            margin-top: 4px;
          }

          /* TITLE SECTION - NO BACKGROUND */
          .title-section {
            background: white;
            border: 2px solid #000;
            border-radius: 4px;
            padding: 12px 16px;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .title-section h2 {
            font-size: 14pt;
            font-weight: 700;
            color: #000;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .status-priority {
            display: flex;
            gap: 8px;
          }

          .status-badge {
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 8pt;
            font-weight: 700;
            text-transform: uppercase;
            background: white;
            color: #000;
            border: 1px solid #000;
          }

          /* All status badges use border styles instead of fills */
          .status-received { border-style: solid; }
          .status-diagnosing { border-style: dashed; }
          .status-waiting-parts { border-style: dotted; }
          .status-in-progress { border-style: dashed; }
          .status-testing { border-style: dotted; }
          .status-completed { border-width: 2px; font-weight: 700; }
          .status-delivered { border-width: 2px; font-weight: 700; }
          .status-cancelled { border-style: double; }

          .priority-low { border-style: solid; }
          .priority-normal { border-style: solid; }
          .priority-high { border-style: dashed; }
          .priority-urgent { border-width: 2px; font-weight: 700; }

          /* TWO COLUMN LAYOUT */
          .two-columns {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
          }

          .column {
            flex: 1;
          }

          /* SECTION BOX - NO FILLED HEADERS */
          .section-box {
            border: 1px solid #000;
            border-radius: 4px;
            margin-bottom: 12px;
            overflow: hidden;
          }

          .section-header {
            background: white;
            color: #000;
            padding: 8px 12px;
            font-size: 9pt;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 6px;
            border-bottom: 2px solid #000;
            text-transform: uppercase;
          }

          .section-header.green { background: white; color: #000; }
          .section-header.blue { background: white; color: #000; }
          .section-header.purple { background: white; color: #000; }
          .section-header.orange { background: white; color: #000; }

          .section-content {
            padding: 10px 12px;
            background: white;
          }

          /* INFO ROW */
          .info-row {
            display: flex;
            margin-bottom: 6px;
            font-size: 8.5pt;
          }

          .info-row:last-child {
            margin-bottom: 0;
          }

          .info-label {
            width: 100px;
            color: #000;
            font-weight: 500;
            flex-shrink: 0;
          }

          .info-value {
            color: #000;
            font-weight: 500;
            flex: 1;
          }

          .info-value.highlight {
            color: #000;
            font-weight: 700;
          }

          /* ACCESSORIES LIST - NO BACKGROUNDS */
          .accessories-list {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
          }

          .accessory-tag {
            background: white;
            color: #000;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 7pt;
            font-weight: 600;
            border: 1px solid #000;
          }

          /* ISSUE BOX - NO BACKGROUND */
          .issue-box {
            background: white;
            border: 1px solid #000;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 8px;
          }

          .issue-box .label {
            font-size: 7pt;
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 4px;
            border-bottom: 1px solid #000;
            padding-bottom: 2px;
          }

          .issue-box .content {
            color: #000;
            font-size: 9pt;
            line-height: 1.5;
          }

          .diagnosis-box {
            background: white;
            border: 1px solid #000;
            border-radius: 4px;
            padding: 10px;
          }

          .diagnosis-box .label {
            font-size: 7pt;
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 4px;
            border-bottom: 1px solid #000;
            padding-bottom: 2px;
          }

          .diagnosis-box .content {
            color: #000;
            font-size: 9pt;
            line-height: 1.5;
          }

          /* COST TABLE */
          .cost-table {
            width: 100%;
            border-collapse: collapse;
          }

          .cost-table td {
            padding: 6px 0;
            font-size: 8.5pt;
            color: #000;
            border-bottom: 1px dotted #000;
          }

          .cost-table td:first-child {
            color: #000;
          }

          .cost-table td:last-child {
            text-align: right;
            font-family: 'Consolas', monospace;
            font-weight: 600;
          }

          .cost-table .total-row td {
            border-top: 2px solid #000;
            border-bottom: none;
            padding-top: 8px;
            font-weight: 700;
            color: #000;
          }

          .cost-table .total-row td:last-child {
            font-size: 11pt;
            color: #000;
          }

          /* TIMELINE - MINIMAL INK */
          .timeline {
            padding: 0;
            margin: 0;
          }

          .timeline-item {
            display: flex;
            gap: 10px;
            margin-bottom: 8px;
            font-size: 8pt;
          }

          .timeline-item:last-child {
            margin-bottom: 0;
          }

          .timeline-dot {
            width: 8px;
            height: 8px;
            background: white;
            border: 2px solid #000;
            border-radius: 50%;
            margin-top: 4px;
            flex-shrink: 0;
          }

          .timeline-content {
            flex: 1;
          }

          .timeline-status {
            font-weight: 700;
            color: #000;
          }

          .timeline-date {
            color: #000;
            font-size: 7pt;
          }

          .timeline-notes {
            color: #000;
            font-size: 7pt;
            margin-top: 2px;
            font-style: italic;
          }

          /* SIGNATURE SECTION */
          .signature-section {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px dashed #000;
          }

          .signature-box {
            width: 45%;
            text-align: center;
          }

          .signature-line {
            border-top: 1px solid #000;
            margin-bottom: 4px;
            margin-top: 30px;
          }

          .signature-label {
            font-size: 8pt;
            color: #000;
          }

          /* TERMS - NO BACKGROUND */
          .terms-section {
            margin-top: 15px;
            padding: 10px 12px;
            background: white;
            border: 1px solid #000;
            border-radius: 4px;
          }

          .terms-section h4 {
            font-size: 8pt;
            font-weight: 700;
            color: #000;
            margin: 0 0 6px 0;
            text-transform: uppercase;
          }

          .terms-section ul {
            margin: 0;
            padding-left: 16px;
            font-size: 7pt;
            color: #000;
            line-height: 1.6;
          }

          /* CUSTOMER COPY LABEL - BORDER ONLY */
          .copy-label {
            position: absolute;
            top: 8mm;
            right: 10mm;
            background: white;
            color: #000;
            padding: 2px 10px;
            font-size: 7pt;
            font-weight: 700;
            border: 1px solid #000;
            border-radius: 0 0 4px 4px;
            text-transform: uppercase;
          }

          /* FOOTER */
          .job-footer {
            margin-top: 15px;
            padding-top: 10px;
            border-top: 2px solid #000;
            text-align: center;
          }

          .job-footer p {
            font-size: 8pt;
            color: #000;
            margin: 2px 0;
          }

          .job-footer .thanks {
            font-size: 10pt;
            font-weight: 700;
            color: #000;
            margin-top: 6px;
          }
        `}),e.jsxs("div",{className:"job-header",children:[e.jsxs("div",{className:"company-section",children:[e.jsx("div",{className:"company-logo",children:W?e.jsx("img",{src:m,alt:"Shop Logo"}):e.jsx("div",{style:{width:"70px",height:"70px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",borderRadius:"12px"},children:e.jsx(He,{style:{width:"40px",height:"40px",color:"white",strokeWidth:2}})})}),e.jsxs("div",{className:"company-info",children:[e.jsx("h1",{children:x.includes(" ")?x:e.jsxs(e.Fragment,{children:[x.substring(0,3),e.jsx("span",{children:x.substring(3)})]})}),e.jsxs("div",{className:"contact",children:[L," | ",j]})]})]}),e.jsxs("div",{className:"job-number-box",children:[e.jsx("div",{className:"label",children:"Job Number"}),e.jsx("div",{className:"number",children:s.jobNumber}),e.jsxs("div",{className:"date",children:["Received: ",I(s.receivedDate)]})]})]}),e.jsxs("div",{className:"title-section",children:[e.jsx("h2",{children:"SERVICE JOB NOTE"}),e.jsxs("div",{className:"status-priority",children:[e.jsx("span",{className:`status-badge status-${s.status}`,children:A(s.status)}),e.jsxs("span",{className:`status-badge priority-${s.priority}`,children:[$(s.priority)," Priority"]})]})]}),e.jsxs("div",{className:"two-columns",children:[e.jsxs("div",{className:"column",children:[e.jsxs("div",{className:"section-box",children:[e.jsx("div",{className:"section-header green",children:"Customer Information"}),e.jsxs("div",{className:"section-content",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Name"}),e.jsx("span",{className:"info-value highlight",children:s.customerName})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Phone"}),e.jsx("span",{className:"info-value",children:s.customerPhone})]}),s.customerAddress&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Address"}),e.jsx("span",{className:"info-value",children:s.customerAddress})]})]})]}),e.jsxs("div",{className:"section-box",children:[e.jsx("div",{className:"section-header blue",children:"Device Information"}),e.jsxs("div",{className:"section-content",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Device Type"}),e.jsx("span",{className:"info-value",children:K(s.deviceType)})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Brand"}),e.jsx("span",{className:"info-value",children:s.deviceBrand})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Model"}),e.jsx("span",{className:"info-value",children:s.deviceModel})]}),s.serialNumber&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Serial No."}),e.jsx("span",{className:"info-value",children:s.serialNumber})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Condition"}),e.jsx("span",{className:"info-value",children:s.deviceCondition})]}),s.accessories.length>0&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Accessories"}),e.jsx("div",{className:"info-value",children:e.jsx("div",{className:"accessories-list",children:s.accessories.map((r,D)=>e.jsx("span",{className:"accessory-tag",children:r},D))})})]})]})]})]}),e.jsxs("div",{className:"column",children:[e.jsxs("div",{className:"section-box",children:[e.jsx("div",{className:"section-header purple",children:"Problem & Service"}),e.jsxs("div",{className:"section-content",children:[e.jsxs("div",{className:"issue-box",children:[e.jsx("div",{className:"label",children:"Reported Issue"}),e.jsx("div",{className:"content",children:s.reportedIssue})]}),s.diagnosis&&e.jsxs("div",{className:"diagnosis-box",children:[e.jsx("div",{className:"label",children:"Diagnosis"}),e.jsx("div",{className:"content",children:s.diagnosis})]}),s.serviceName&&e.jsx("div",{style:{marginTop:"8px"},children:e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Service"}),e.jsx("span",{className:"info-value",children:s.serviceName})]})})]})]}),e.jsxs("div",{className:"section-box",children:[e.jsx("div",{className:"section-header orange",children:"Cost & Timeline"}),e.jsxs("div",{className:"section-content",children:[e.jsx("table",{className:"cost-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Estimated Cost"}),e.jsx("td",{children:s.estimatedCost?h(s.estimatedCost):"-"})]}),s.finalCost&&e.jsxs("tr",{children:[e.jsx("td",{children:"Final Cost"}),e.jsx("td",{children:h(s.finalCost)})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Advance Paid"}),e.jsx("td",{children:s.advancePayment?h(s.advancePayment):"None"})]}),(s.estimatedCost||s.finalCost)&&e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{children:"Balance Due"}),e.jsx("td",{children:h((s.finalCost||s.estimatedCost||0)-(s.advancePayment||0))})]})]})}),e.jsxs("div",{style:{marginTop:"10px",paddingTop:"10px",borderTop:"1px dashed #e2e8f0"},children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Expected"}),e.jsx("span",{className:"info-value",children:s.estimatedCompletion?I(s.estimatedCompletion):"TBD"})]}),s.assignedTechnician&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Technician"}),e.jsx("span",{className:"info-value",children:s.assignedTechnician})]})]})]})]})]})]}),e.jsxs("div",{className:"signature-section",children:[e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"signature-line"}),e.jsx("div",{className:"signature-label",children:"Customer Signature"})]}),e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"signature-line"}),e.jsx("div",{className:"signature-label",children:"Authorized Signature"})]})]}),e.jsxs("div",{className:"terms-section",children:[e.jsx("h4",{children:"Terms & Conditions"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Devices not collected within 30 days may be disposed of without notice."}),e.jsx("li",{children:"We are not responsible for data loss. Please backup your data before service."}),e.jsx("li",{children:"Estimated costs may change based on diagnosis findings."}),e.jsx("li",{children:"All repairs carry a 7-day warranty unless otherwise specified."}),e.jsx("li",{children:"Please bring this receipt when collecting your device."})]})]}),e.jsxs("div",{className:"job-footer",children:[e.jsx("p",{children:"No. 123, Main Street, Colombo 05, Sri Lanka"}),e.jsx("p",{children:"www.ecosystem.lk | support@ecosystem.lk"}),e.jsx("p",{className:"thanks",children:"Thank you for choosing Eco System!"})]})]})});Pe.displayName="PrintableJobNote";const u={received:{label:"Received",color:"text-blue-500",bgColor:"bg-blue-500/10",icon:e.jsx(Te,{className:"w-4 h-4"})},diagnosing:{label:"Diagnosing",color:"text-yellow-500",bgColor:"bg-yellow-500/10",icon:e.jsx(De,{className:"w-4 h-4"})},"waiting-parts":{label:"Waiting Parts",color:"text-pink-500",bgColor:"bg-pink-500/10",icon:e.jsx(ns,{className:"w-4 h-4"})},"in-progress":{label:"In Progress",color:"text-emerald-500",bgColor:"bg-emerald-500/10",icon:e.jsx($e,{className:"w-4 h-4"})},testing:{label:"Testing",color:"text-indigo-500",bgColor:"bg-indigo-500/10",icon:e.jsx(Se,{className:"w-4 h-4"})},completed:{label:"Completed",color:"text-green-500",bgColor:"bg-green-500/10",icon:e.jsx(se,{className:"w-4 h-4"})},delivered:{label:"Delivered",color:"text-teal-500",bgColor:"bg-teal-500/10",icon:e.jsx(se,{className:"w-4 h-4"})},cancelled:{label:"Cancelled",color:"text-red-500",bgColor:"bg-red-500/10",icon:e.jsx(te,{className:"w-4 h-4"})}},v={low:{label:"Low",color:"text-slate-500",bgColor:"bg-slate-500/10"},normal:{label:"Normal",color:"text-blue-500",bgColor:"bg-blue-500/10"},high:{label:"High",color:"text-orange-500",bgColor:"bg-orange-500/10"},urgent:{label:"Urgent",color:"text-red-500",bgColor:"bg-red-500/10"}},Ce={laptop:e.jsx(ms,{className:"w-5 h-5"}),desktop:e.jsx(xs,{className:"w-5 h-5"}),printer:e.jsx(cs,{className:"w-5 h-5"}),monitor:e.jsx(Se,{className:"w-5 h-5"}),phone:e.jsx(ds,{className:"w-5 h-5"}),tablet:e.jsx(os,{className:"w-5 h-5"}),other:e.jsx(Te,{className:"w-5 h-5"})},$s=()=>{const{theme:s}=We(),{branding:y}=Ke(),E=hs(),[x,W]=l.useState(Ye),[m,L]=l.useState(""),[j,I]=l.useState("all"),[h,A]=l.useState("all"),[$,K]=l.useState("all"),[r,D]=l.useState(""),[p,ae]=l.useState(""),[le,z]=l.useState(!1),[re,F]=l.useState(!1),[k,B]=l.useState(new Date),Y=l.useRef(null),G=l.useRef(null),[S,ie]=l.useState("grid"),[O,Ee]=l.useState("desc"),[H,Le]=l.useState(!1),[i,C]=l.useState(1),[T,V]=l.useState(9),[Ie,X]=l.useState(!1),[J,ne]=l.useState(null),[n,Oe]=l.useState(null),[Me,U]=l.useState(!1),Q=l.useRef(null),[oe,de]=l.useState(null);l.useEffect(()=>{const t=a=>{Y.current&&!Y.current.contains(a.target)&&z(!1),G.current&&!G.current.contains(a.target)&&F(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const P=l.useMemo(()=>x.filter(a=>{const g=a.jobNumber.toLowerCase().includes(m.toLowerCase())||a.customerName.toLowerCase().includes(m.toLowerCase())||a.customerPhone.includes(m)||a.deviceBrand.toLowerCase().includes(m.toLowerCase())||a.deviceModel.toLowerCase().includes(m.toLowerCase()),f=j==="all"||a.status===j,w=h==="all"||a.priority===h,o=$==="all"||a.assignedTechnician===$;let b=!0;if(r||p){const c=new Date(a.receivedDate);if(r){const N=new Date(r);N.setHours(0,0,0,0),b=b&&c>=N}if(p){const N=new Date(p);N.setHours(23,59,59,999),b=b&&c<=N}}return g&&f&&w&&o&&b}).sort((a,g)=>{const f=new Date(a.receivedDate).getTime(),w=new Date(g.receivedDate).getTime();return O==="asc"?f-w:w-f}),[x,m,j,h,$,r,p,O]),d=Math.ceil(P.length/T),q=l.useMemo(()=>{const t=(i-1)*T;return P.slice(t,t+T)},[P,i,T]);l.useEffect(()=>{C(1)},[m,j,h,$,r,p]),l.useEffect(()=>{V(S==="table"?10:9),C(1)},[S]);const Re=l.useMemo(()=>{const t=[];if(d<=5)for(let a=1;a<=d;a++)t.push(a);else if(i<=3){for(let a=1;a<=4;a++)t.push(a);t.push("..."),t.push(d)}else if(i>=d-2){t.push(1),t.push("...");for(let a=d-3;a<=d;a++)t.push(a)}else{t.push(1),t.push("...");for(let a=i-1;a<=i+1;a++)t.push(a);t.push("..."),t.push(d)}return t},[i,d]),M=l.useMemo(()=>{const t=x.filter(o=>["received","diagnosing","waiting-parts"].includes(o.status)).length,a=x.filter(o=>["in-progress","testing"].includes(o.status)).length,g=x.filter(o=>o.status==="completed").length,f=x.filter(o=>o.status==="delivered").length,w=x.filter(o=>o.status==="delivered").reduce((o,b)=>o+(b.finalCost||b.estimatedCost||0),0);return{pending:t,inProgress:a,completed:g,delivered:f,total:x.length,totalRevenue:w}},[x]),R=m||j!=="all"||h!=="all"||$!=="all"||r||p,ce=()=>{L(""),I("all"),A("all"),K("all"),D(""),ae("")},Z=t=>`Rs. ${t.toLocaleString("en-LK")}`,xe=t=>new Date(t).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),Ae=t=>{const a=t.getFullYear(),g=t.getMonth(),f=new Date(a,g,1);return{daysInMonth:new Date(a,g+1,0).getDate(),startingDay:f.getDay()}},me=t=>t?new Date(t).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"",he=(t,a,g)=>{const{daysInMonth:f,startingDay:w}=Ae(k),o=[],b=t?new Date(t):null;for(let c=0;c<w;c++)o.push(e.jsx("div",{className:"w-8 h-8"},`empty-${c}`));for(let c=1;c<=f;c++){const N=new Date(k.getFullYear(),k.getMonth(),c),Je=b&&N.toDateString()===b.toDateString(),Ue=new Date().toDateString()===N.toDateString();o.push(e.jsx("button",{onClick:()=>{a(`${N.getFullYear()}-${(N.getMonth()+1).toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`),g(!1)},className:`w-8 h-8 rounded-lg text-sm font-medium transition-all ${Je?"bg-emerald-500 text-white":Ue?s==="dark"?"bg-emerald-500/20 text-emerald-400":"bg-emerald-100 text-emerald-600":s==="dark"?"hover:bg-slate-700 text-slate-300":"hover:bg-slate-100 text-slate-700"}`,children:c},c))}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-black/40 z-[59] sm:hidden",onClick:()=>g(!1)}),e.jsxs("div",{className:`fixed sm:absolute bottom-0 sm:bottom-auto left-0 sm:left-0 right-0 sm:right-auto sm:top-full sm:mt-2 p-4 pt-3 rounded-t-3xl sm:rounded-2xl border-t sm:border shadow-2xl z-[60] w-full sm:w-[280px] ${s==="dark"?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`,children:[e.jsx("div",{className:"w-10 h-1 bg-slate-600 rounded-full mx-auto mb-3 sm:hidden"}),e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("button",{onClick:()=>B(new Date(k.getFullYear(),k.getMonth()-1,1)),className:`p-1 rounded-lg ${s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,children:e.jsx(ye,{className:"w-4 h-4"})}),e.jsx("span",{className:`text-sm font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:k.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),e.jsx("button",{onClick:()=>B(new Date(k.getFullYear(),k.getMonth()+1,1)),className:`p-1 rounded-lg ${s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,children:e.jsx(ke,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:["Su","Mo","Tu","We","Th","Fr","Sa"].map(c=>e.jsx("div",{className:`w-8 h-8 flex items-center justify-center text-xs font-medium ${s==="dark"?"text-slate-500":"text-slate-400"}`,children:c},c))}),e.jsx("div",{className:"grid grid-cols-7 gap-1",children:o}),e.jsx("button",{onClick:()=>{a(""),g(!1)},className:`w-full mt-3 py-2 text-sm font-medium rounded-lg ${s==="dark"?"bg-slate-700 hover:bg-slate-600 text-slate-300":"bg-slate-100 hover:bg-slate-200 text-slate-700"}`,children:"Clear"})]})]})},pe=t=>{Oe(t),U(!0)},ge=t=>{ne(t),X(!0)},ze=()=>{J&&(W(t=>t.filter(a=>a.id!==J.id)),X(!1),ne(null))},_=t=>{de(t),setTimeout(()=>{if(Q.current){const a=window.open("","_blank");a&&(a.document.write("<html><head><title>Job Note - "+t.jobNumber+"</title></head><body>"),a.document.write(Q.current.innerHTML),a.document.write("</body></html>"),a.document.close(),setTimeout(()=>{a.print(),a.close()},250))}de(null)},100)},Fe=[{value:"all",label:"All Status"},...Object.entries(u).map(([t,a])=>({value:t,label:a.label}))],Be=[{value:"all",label:"All Priority"},...Object.entries(v).map(([t,a])=>({value:t,label:a.label}))];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:`text-2xl lg:text-3xl font-bold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Job Notes"}),e.jsx("p",{className:`mt-1 ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:"Manage service and repair job orders"})]}),e.jsxs("button",{onClick:()=>E("/job-notes/create"),className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity",children:[e.jsx(Ve,{className:"w-5 h-5"}),"New Job Note"]})]}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{label:"Total Jobs",value:M.total,icon:fe,bg:"blue"},{label:"Pending",value:M.pending,icon:Xe,bg:"amber"},{label:"In Progress",value:M.inProgress,icon:$e,bg:"emerald"},{label:"Delivered",value:`Rs. ${(M.totalRevenue/1e3).toFixed(0)}K`,icon:se,bg:"green",sub:`${M.delivered} Delivered`}].map((t,a)=>e.jsx("div",{className:`p-4 rounded-xl border ${s==="dark"?"bg-slate-800/30 border-slate-700/50":"bg-white border-slate-200 shadow-sm"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-10 h-10 bg-${t.bg}-500/10 rounded-lg flex items-center justify-center`,children:e.jsx(t.icon,{className:`w-5 h-5 text-${t.bg}-400`})}),e.jsxs("div",{children:[e.jsx("p",{className:`text-2xl font-bold ${s==="dark"?"text-white":"text-slate-900"}`,children:t.value}),e.jsx("p",{className:"text-xs text-slate-500",children:t.sub||t.label})]})]})},a))}),e.jsxs("div",{className:`p-3 sm:p-4 rounded-2xl border ${s==="dark"?"bg-slate-800/30 border-slate-700/50":"bg-white border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-col lg:flex-row gap-3",children:[e.jsxs("div",{className:`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl border flex-1 ${s==="dark"?"bg-slate-800/50 border-slate-700/50":"bg-slate-50 border-slate-200"}`,children:[e.jsx(De,{className:`w-5 h-5 flex-shrink-0 ${s==="dark"?"text-slate-500":"text-slate-400"}`}),e.jsx("input",{type:"text",placeholder:"Search jobs...",value:m,onChange:t=>L(t.target.value),className:`bg-transparent border-none outline-none flex-1 min-w-0 text-sm ${s==="dark"?"text-white placeholder-slate-500":"text-slate-900 placeholder-slate-400"}`}),m&&e.jsx("button",{onClick:()=>L(""),className:`p-1 rounded-full transition-colors ${s==="dark"?"hover:bg-slate-700":"hover:bg-slate-200"}`,children:e.jsx(te,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("button",{onClick:()=>Le(!H),className:`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${H||R?"bg-emerald-500 text-white":s==="dark"?"bg-slate-700 hover:bg-slate-600 text-slate-300":"bg-slate-100 hover:bg-slate-200 text-slate-700"}`,children:[e.jsx(Qe,{className:"w-4 h-4"}),e.jsx("span",{className:"text-sm hidden sm:inline",children:"Filters"}),R&&e.jsx("span",{className:"px-1.5 py-0.5 text-xs bg-white/20 rounded-full",children:[j!=="all",h!=="all",r,p].filter(Boolean).length})]}),e.jsx("button",{onClick:()=>Ee(O==="asc"?"desc":"asc"),className:`p-2 rounded-xl border transition-colors ${s==="dark"?"border-slate-700 hover:bg-slate-800 text-slate-400":"border-slate-200 hover:bg-slate-50 text-slate-600"}`,title:O==="asc"?"Sort Descending":"Sort Ascending",children:O==="asc"?e.jsx(qe,{className:"w-4 h-4"}):e.jsx(Ze,{className:"w-4 h-4"})}),e.jsxs("div",{className:`flex items-center rounded-xl overflow-hidden border ${s==="dark"?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{onClick:()=>ie("table"),className:`p-2 transition-colors ${S==="table"?"bg-emerald-500 text-white":s==="dark"?"bg-slate-800 hover:bg-slate-700 text-slate-300":"bg-white hover:bg-slate-100 text-slate-700"}`,title:"Table view",children:e.jsx(_e,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>ie("grid"),className:`p-2 transition-colors ${S==="grid"?"bg-emerald-500 text-white":s==="dark"?"bg-slate-800 hover:bg-slate-700 text-slate-300":"bg-white hover:bg-slate-100 text-slate-700"}`,title:"Card view",children:e.jsx(es,{className:"w-4 h-4"})})]})]})]}),H&&e.jsx("div",{className:`pt-3 sm:pt-4 mt-3 border-t ${s==="dark"?"border-slate-700/50":"border-slate-200"}`,children:e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("div",{className:"w-full sm:w-40",children:e.jsx(ue,{options:Fe,value:j,onValueChange:I,placeholder:"All Status",theme:s})}),e.jsx("div",{className:"w-full sm:w-40",children:e.jsx(ue,{options:Be,value:h,onValueChange:A,placeholder:"All Priority",theme:s})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ss,{className:`w-4 h-4 flex-shrink-0 ${s==="dark"?"text-emerald-500":"text-emerald-600"}`}),e.jsx("span",{className:`text-sm font-medium ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:"Date:"}),e.jsxs("div",{className:"relative",ref:Y,children:[e.jsx("button",{onClick:()=>{z(!le),F(!1),B(r?new Date(r):new Date)},className:`px-3 py-1.5 rounded-xl border text-sm min-w-[110px] text-left transition-colors ${s==="dark"?"bg-slate-800/50 border-slate-700/50 text-white hover:bg-slate-700/50":"bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100"}`,children:r?me(r):"Start Date"}),le&&he(r,D,z)]}),e.jsx("span",{className:`${s==="dark"?"text-slate-500":"text-slate-400"}`,children:"-"}),e.jsxs("div",{className:"relative",ref:G,children:[e.jsx("button",{onClick:()=>{F(!re),z(!1),B(p?new Date(p):new Date)},className:`px-3 py-1.5 rounded-xl border text-sm min-w-[110px] text-left transition-colors ${s==="dark"?"bg-slate-800/50 border-slate-700/50 text-white hover:bg-slate-700/50":"bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100"}`,children:p?me(p):"End Date"}),re&&he(p,ae,F)]})]}),R&&e.jsx("button",{onClick:ce,className:`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${s==="dark"?"bg-slate-700 hover:bg-slate-600 text-slate-300":"bg-slate-100 hover:bg-slate-200 text-slate-700"}`,children:"Clear"})]})})]}),S==="grid"&&e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:q.map(t=>e.jsxs("div",{className:`p-4 rounded-2xl border transition-all hover:shadow-lg ${s==="dark"?"bg-slate-800/50 border-slate-700/50 hover:border-slate-600":"bg-white border-slate-200 hover:border-slate-300"}`,children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`p-2.5 rounded-xl ${s==="dark"?"bg-slate-700/50":"bg-slate-100"}`,children:e.jsx("span",{className:s==="dark"?"text-emerald-400":"text-emerald-600",children:Ce[t.deviceType]})}),e.jsxs("div",{children:[e.jsx("p",{className:`font-mono font-bold text-sm ${s==="dark"?"text-emerald-400":"text-emerald-600"}`,children:t.jobNumber}),e.jsx("p",{className:"text-xs text-slate-500",children:xe(t.receivedDate)})]})]}),e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium ${u[t.status].bgColor} ${u[t.status].color}`,children:u[t.status].label}),e.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium ${v[t.priority].bgColor} ${v[t.priority].color}`,children:v[t.priority].label})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("p",{className:`font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:[t.deviceBrand," ",t.deviceModel]}),e.jsx("p",{className:`text-sm line-clamp-2 ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:t.reportedIssue})]}),t.serviceName&&e.jsxs("div",{className:`flex items-center gap-2 mb-3 text-xs ${s==="dark"?"text-blue-400":"text-blue-600"}`,children:[e.jsx(Ne,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:`px-2 py-0.5 rounded-full ${s==="dark"?"bg-blue-500/10 border border-blue-500/20":"bg-blue-50 border border-blue-200"}`,children:t.serviceName})]}),e.jsxs("div",{className:`flex items-center gap-2 mb-3 text-sm ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:[e.jsx(ts,{className:"w-4 h-4"}),e.jsx("span",{children:t.customerName}),e.jsx("span",{className:"text-slate-500",children:"•"}),e.jsx(as,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:t.customerPhone})]}),e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.estimatedCost&&e.jsx("p",{className:`font-bold ${s==="dark"?"text-emerald-400":"text-emerald-600"}`,children:Z(t.estimatedCost)}),t.assignedTechnician&&e.jsxs("p",{className:"text-xs text-slate-500",children:["Tech: ",t.assignedTechnician]})]}),e.jsx("div",{className:`flex items-center justify-between pt-3 border-t ${s==="dark"?"border-slate-700/50":"border-slate-200"}`,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>pe(t),className:`p-2 rounded-lg ${s==="dark"?"hover:bg-slate-700 text-slate-400 hover:text-white":"hover:bg-slate-100 text-slate-600"}`,children:e.jsx(ve,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>_(t),className:`p-2 rounded-lg ${s==="dark"?"hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400":"hover:bg-emerald-50 text-slate-600 hover:text-emerald-600"}`,children:e.jsx(ee,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>E(`/job-notes/edit/${t.id}`),className:`p-2 rounded-lg ${s==="dark"?"hover:bg-blue-500/20 text-slate-400 hover:text-blue-400":"hover:bg-blue-50 text-slate-600 hover:text-blue-600"}`,children:e.jsx(je,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>ge(t),className:`p-2 rounded-lg ${s==="dark"?"hover:bg-red-500/20 text-slate-400 hover:text-red-400":"hover:bg-red-50 text-slate-600 hover:text-red-600"}`,children:e.jsx(we,{className:"w-4 h-4"})})]})})]},t.id))}),S==="table"&&e.jsx("div",{className:`rounded-2xl border overflow-hidden ${s==="dark"?"bg-slate-800/30 border-slate-700/50":"bg-white border-slate-200"}`,children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsx("tr",{className:s==="dark"?"bg-slate-800/50":"bg-slate-50",children:["Job","Device","Service","Customer","Status","Cost","Date","Actions"].map(t=>e.jsx("th",{className:`px-4 py-3 text-${t==="Actions"?"right":"left"} text-xs font-semibold uppercase tracking-wider ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:t},t))})}),e.jsx("tbody",{className:`divide-y ${s==="dark"?"divide-slate-700/50":"divide-slate-200"}`,children:q.map(t=>e.jsxs("tr",{className:s==="dark"?"hover:bg-slate-800/50":"hover:bg-slate-50",children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("p",{className:`font-mono font-bold text-sm ${s==="dark"?"text-emerald-400":"text-emerald-600"}`,children:t.jobNumber})}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:s==="dark"?"text-slate-400":"text-slate-500",children:Ce[t.deviceType]}),e.jsxs("div",{children:[e.jsxs("p",{className:`font-medium text-sm ${s==="dark"?"text-white":"text-slate-900"}`,children:[t.deviceBrand," ",t.deviceModel]}),e.jsx("p",{className:"text-xs truncate max-w-[200px] text-slate-500",children:t.reportedIssue})]})]})}),e.jsx("td",{className:"px-4 py-3",children:t.serviceName?e.jsxs("span",{className:`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${s==="dark"?"bg-blue-500/10 text-blue-400 border border-blue-500/20":"bg-blue-50 text-blue-600 border border-blue-200"}`,children:[e.jsx(Ne,{className:"w-3 h-3"}),t.serviceName]}):e.jsx("span",{className:`text-xs ${s==="dark"?"text-slate-600":"text-slate-400"}`,children:"—"})}),e.jsxs("td",{className:"px-4 py-3",children:[e.jsx("p",{className:`text-sm ${s==="dark"?"text-white":"text-slate-900"}`,children:t.customerName}),e.jsx("p",{className:"text-xs text-slate-500",children:t.customerPhone})]}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium inline-flex items-center gap-1 w-fit ${u[t.status].bgColor} ${u[t.status].color}`,children:[u[t.status].icon,u[t.status].label]}),e.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium w-fit ${v[t.priority].bgColor} ${v[t.priority].color}`,children:v[t.priority].label})]})}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("p",{className:`font-semibold ${s==="dark"?"text-emerald-400":"text-emerald-600"}`,children:t.estimatedCost?Z(t.estimatedCost):"-"})}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("p",{className:`text-sm ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:xe(t.receivedDate)})}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center justify-end gap-1",children:[e.jsx("button",{onClick:()=>pe(t),className:`p-2 rounded-lg ${s==="dark"?"hover:bg-slate-700 text-slate-400 hover:text-white":"hover:bg-slate-100 text-slate-600"}`,children:e.jsx(ve,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>_(t),className:`p-2 rounded-lg ${s==="dark"?"hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400":"hover:bg-emerald-50 text-slate-600 hover:text-emerald-600"}`,children:e.jsx(ee,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>E(`/job-notes/edit/${t.id}`),className:`p-2 rounded-lg ${s==="dark"?"hover:bg-blue-500/20 text-slate-400 hover:text-blue-400":"hover:bg-blue-50 text-slate-600 hover:text-blue-600"}`,children:e.jsx(je,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>ge(t),className:`p-2 rounded-lg ${s==="dark"?"hover:bg-red-500/20 text-slate-400 hover:text-red-400":"hover:bg-red-50 text-slate-600 hover:text-red-600"}`,children:e.jsx(we,{className:"w-4 h-4"})})]})})]},t.id))})]})})}),q.length===0&&e.jsxs("div",{className:`flex flex-col items-center justify-center py-16 rounded-2xl ${s==="dark"?"bg-slate-800/50 border border-slate-700/50":"bg-white border border-slate-200"}`,children:[e.jsx("div",{className:"p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-4",children:e.jsx(fe,{className:"w-12 h-12 text-emerald-500"})}),e.jsx("h3",{className:`text-lg font-semibold mb-2 ${s==="dark"?"text-white":"text-slate-900"}`,children:"No job notes found"}),e.jsx("p",{className:`text-sm mb-4 ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:R?"Try adjusting your filters":"Start by creating your first job note"}),R&&e.jsxs("button",{onClick:ce,className:"flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl font-medium",children:[e.jsx(ls,{className:"w-4 h-4"}),"Clear Filters"]})]}),P.length>0&&e.jsx("div",{className:`mt-4 p-4 rounded-2xl border ${s==="dark"?"bg-slate-800/30 border-slate-700/50":"bg-white border-slate-200"}`,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsxs("p",{className:`text-sm ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:["Showing ",e.jsx("span",{className:"font-semibold",children:(i-1)*T+1})," to"," ",e.jsx("span",{className:"font-semibold",children:Math.min(i*T,P.length)})," of"," ",e.jsx("span",{className:"font-semibold",children:P.length})," jobs"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`text-sm ${s==="dark"?"text-slate-500":"text-slate-400"}`,children:"Show:"}),e.jsx("div",{className:`flex items-center rounded-full p-0.5 ${s==="dark"?"bg-slate-800":"bg-slate-100"}`,children:(S==="table"?[10,20,50,100]:[6,9,12,24]).map(t=>e.jsx("button",{onClick:()=>{V(t),C(1)},className:`px-3 py-1 rounded-full text-sm font-medium transition-all ${T===t?"bg-emerald-500 text-white shadow-md":s==="dark"?"text-slate-400 hover:text-white":"text-slate-600 hover:text-slate-900"}`,children:t},t))})]})]}),d>1&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>C(1),disabled:i===1,className:`p-2 rounded-lg transition-colors ${i===1?s==="dark"?"text-slate-600 cursor-not-allowed":"text-slate-300 cursor-not-allowed":s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,title:"First page",children:e.jsx(rs,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>C(t=>Math.max(t-1,1)),disabled:i===1,className:`p-2 rounded-lg transition-colors ${i===1?s==="dark"?"text-slate-600 cursor-not-allowed":"text-slate-300 cursor-not-allowed":s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,title:"Previous page",children:e.jsx(ye,{className:"w-4 h-4"})}),e.jsx("div",{className:"hidden sm:flex items-center gap-1",children:Re.map((t,a)=>t==="..."?e.jsx("span",{className:`px-2 ${s==="dark"?"text-slate-500":"text-slate-400"}`,children:"..."},`ellipsis-${a}`):e.jsx("button",{onClick:()=>C(t),className:`w-9 h-9 rounded-lg text-sm font-medium transition-all ${i===t?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/25":s==="dark"?"hover:bg-slate-700 text-slate-300":"hover:bg-slate-100 text-slate-700"}`,children:t},t))}),e.jsxs("div",{className:`sm:hidden px-3 py-1 rounded-lg text-sm font-medium ${s==="dark"?"bg-slate-700 text-slate-300":"bg-slate-100 text-slate-700"}`,children:[i," / ",d]}),e.jsx("button",{onClick:()=>C(t=>Math.min(t+1,d)),disabled:i===d,className:`p-2 rounded-lg transition-colors ${i===d?s==="dark"?"text-slate-600 cursor-not-allowed":"text-slate-300 cursor-not-allowed":s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,title:"Next page",children:e.jsx(ke,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>C(d),disabled:i===d,className:`p-2 rounded-lg transition-colors ${i===d?s==="dark"?"text-slate-600 cursor-not-allowed":"text-slate-300 cursor-not-allowed":s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,title:"Last page",children:e.jsx(is,{className:"w-4 h-4"})})]})]})}),Me&&n&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>U(!1)}),e.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl ${s==="dark"?"bg-slate-800":"bg-white"}`,children:[e.jsx("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm opacity-90",children:"Job Note"}),e.jsx("h2",{className:"text-2xl font-bold",children:n.jobNumber})]}),e.jsx("button",{onClick:()=>U(!1),className:"p-2 rounded-full bg-white/20 hover:bg-white/30",children:e.jsx(te,{className:"w-5 h-5"})})]})}),e.jsxs("div",{className:"p-6 overflow-y-auto max-h-[calc(90vh-180px)]",children:[e.jsxs("div",{className:"flex gap-2 mb-6",children:[e.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${u[n.status].bgColor} ${u[n.status].color}`,children:u[n.status].label}),e.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${v[n.priority].bgColor} ${v[n.priority].color}`,children:v[n.priority].label})]}),e.jsxs("div",{className:`p-4 rounded-xl mb-4 ${s==="dark"?"bg-slate-700/50":"bg-slate-50"}`,children:[e.jsx("h3",{className:`font-semibold mb-3 ${s==="dark"?"text-white":"text-slate-900"}`,children:"Customer"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:s==="dark"?"text-slate-400":"text-slate-600",children:"Name:"})," ",e.jsx("span",{className:`font-medium ${s==="dark"?"text-white":"text-slate-900"}`,children:n.customerName})]}),e.jsxs("div",{children:[e.jsx("span",{className:s==="dark"?"text-slate-400":"text-slate-600",children:"Phone:"})," ",e.jsx("span",{className:`font-medium ${s==="dark"?"text-white":"text-slate-900"}`,children:n.customerPhone})]})]})]}),e.jsxs("div",{className:`p-4 rounded-xl mb-4 ${s==="dark"?"bg-slate-700/50":"bg-slate-50"}`,children:[e.jsx("h3",{className:`font-semibold mb-3 ${s==="dark"?"text-white":"text-slate-900"}`,children:"Device"}),e.jsxs("p",{className:`font-medium ${s==="dark"?"text-white":"text-slate-900"}`,children:[n.deviceBrand," ",n.deviceModel]}),e.jsxs("p",{className:`text-sm mt-1 ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:["Accessories: ",n.accessories.join(", ")||"None"]})]}),e.jsxs("div",{className:`p-4 rounded-xl mb-4 ${s==="dark"?"bg-yellow-500/10":"bg-yellow-50"}`,children:[e.jsx("h3",{className:`font-semibold mb-2 ${s==="dark"?"text-yellow-400":"text-yellow-800"}`,children:"Issue"}),e.jsx("p",{className:s==="dark"?"text-yellow-200":"text-yellow-900",children:n.reportedIssue})]}),n.estimatedCost&&e.jsx("div",{className:`p-4 rounded-xl ${s==="dark"?"bg-emerald-500/10":"bg-emerald-50"}`,children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:s==="dark"?"text-slate-400":"text-slate-600",children:"Estimated:"}),e.jsx("span",{className:`text-xl font-bold ${s==="dark"?"text-emerald-400":"text-emerald-600"}`,children:Z(n.estimatedCost)})]})})]}),e.jsx("div",{className:`p-4 border-t ${s==="dark"?"border-slate-700":"border-slate-200"}`,children:e.jsx("div",{className:"flex justify-end gap-3",children:e.jsxs("button",{onClick:()=>{U(!1),_(n)},className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium",children:[e.jsx(ee,{className:"w-4 h-4"}),"Print"]})})})]})]}),e.jsx(Ge,{isOpen:Ie,onCancel:()=>X(!1),onConfirm:ze,title:"Delete Job Note",message:`Delete job note "${J?.jobNumber}"?`,itemName:J?.jobNumber||""}),e.jsx("div",{style:{display:"none"},children:oe&&e.jsx(Pe,{ref:Q,jobNote:oe,branding:y})})]})};export{$s as JobNotes,$s as default};
