import{r as i,j as e}from"./vendor-react-BwcC2Ydo.js";import{v as ee,u as Se,I as Ee,A as Ie,O as Te}from"./index-DQyL7QrZ.js";import{an as Ae,K as Me,b1 as Fe,U as te,x as se,ah as Le,c as ae,X as re,ak as ze,aa as Oe,al as Re,P as le,ar as Ue,T as qe,I as oe,H as ie,F as Ye,ax as ne,Y as Ke,l as Be,ao as de,ad as Xe,aJ as _e,aC as ce}from"./vendor-icons-BIKcqT2E.js";import{u as Ge,c as We,a as He}from"./vendor-router-CpYcqQb6.js";import"./vendor-pdf-Cw62MR9d.js";import"./vendor-other-SQu4theQ.js";import"./vendor-date-qW5d3bni.js";import"./vendor-radix-CLu8eon7.js";import"./vendor-ui-utils-Dr6D9L7d.js";import"./vendor-query-BOUmJV46.js";import"./vendor-cmdk-p92446dP.js";const B=i.forwardRef(({estimate:s,branding:d},u)=>{const $=d?.name||"Eco System",x=d?.subName||"",M=d?.logo&&d.logo!==ee,F=d?.logo||ee,a=d?.phone||"011-2345678 | 077-1234567",h=d?.email||"info@ecosystem.lk",c=n=>new Date(n).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"}),N=n=>`LKR ${n.toLocaleString("en-LK",{minimumFractionDigits:2})}`;return e.jsxs("div",{ref:u,className:"print-estimate",children:[e.jsx("style",{children:`
          /* ═══════════════════════════════════════════════════════════════
             INK-EFFICIENT B&W PRINT OPTIMIZED - ECO SYSTEM ESTIMATE
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
            
            .print-estimate {
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
          
          .print-estimate {
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
          .estimate-header {
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
            border-radius: 8px;
            object-fit: cover;
            border: 2px solid #000;
          }

          .company-info h1 {
            font-size: 18pt;
            font-weight: 700;
            color: #000;
            margin: 0;
          }

          .company-info .contact {
            font-size: 7pt;
            color: #000;
            margin-top: 4px;
          }

          .estimate-number-box {
            text-align: right;
            background: white;
            color: #000;
            padding: 12px 20px;
            border: 2px solid #000;
            border-radius: 4px;
          }

          .estimate-number-box .label {
            font-size: 7pt;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 700;
          }

          .estimate-number-box .number {
            font-size: 16pt;
            font-weight: 700;
            font-family: 'Consolas', monospace;
            color: #000;
          }

          .estimate-number-box .date {
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

          .validity-badge {
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 8pt;
            font-weight: 700;
            background: white;
            color: #000;
            border: 1px solid #000;
          }

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
            width: 80px;
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

          /* ITEMS TABLE - MINIMAL INK */
          .items-section {
            margin-bottom: 15px;
          }

          .items-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #000;
            border-radius: 4px;
            overflow: hidden;
          }

          .items-table thead {
            background: white;
          }

          .items-table th {
            padding: 10px 12px;
            text-align: left;
            font-size: 8pt;
            font-weight: 700;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 2px solid #000;
            border-right: 1px solid #000;
          }

          .items-table th:last-child {
            border-right: none;
          }

          .items-table th:nth-child(2),
          .items-table th:nth-child(3),
          .items-table th:nth-child(4) {
            text-align: center;
          }

          .items-table th:last-child {
            text-align: right;
          }

          .items-table td {
            padding: 10px 12px;
            font-size: 8.5pt;
            border-bottom: 1px solid #000;
            border-right: 1px solid #000;
            vertical-align: top;
            color: #000;
          }

          .items-table td:last-child {
            border-right: none;
          }

          .items-table td:nth-child(2),
          .items-table td:nth-child(3),
          .items-table td:nth-child(4) {
            text-align: center;
          }

          .items-table td:last-child {
            text-align: right;
            font-family: 'Consolas', monospace;
            font-weight: 700;
            color: #000;
          }

          .items-table tbody tr:last-child td {
            border-bottom: none;
          }

          .item-name {
            font-weight: 600;
            color: #000;
          }

          .item-desc {
            font-size: 7pt;
            color: #000;
            margin-top: 2px;
            font-style: italic;
          }

          .item-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            background: white;
            border: 1px solid #000;
            border-radius: 50%;
            font-size: 7pt;
            font-weight: 700;
            color: #000;
            margin-right: 8px;
          }

          /* SUMMARY SECTION - NO FILLED BACKGROUNDS */
          .summary-section {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 15px;
          }

          .summary-box {
            width: 250px;
            border: 2px solid #000;
            border-radius: 4px;
            overflow: hidden;
          }

          .summary-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 12px;
            font-size: 9pt;
            border-bottom: 1px dotted #000;
            background: white;
          }

          .summary-row:last-child {
            border-bottom: none;
          }

          .summary-row .label {
            color: #000;
          }

          .summary-row .value {
            font-family: 'Consolas', monospace;
            font-weight: 600;
            color: #000;
          }

          .summary-row.discount .value {
            color: #000;
            font-style: italic;
          }

          .summary-row.tax .value {
            color: #000;
          }

          .summary-row.total {
            background: white;
            padding: 12px;
            border-top: 2px solid #000;
          }

          .summary-row.total .label {
            font-size: 11pt;
            font-weight: 700;
            color: #000;
            text-transform: uppercase;
          }

          .summary-row.total .value {
            font-size: 13pt;
            font-weight: 700;
            color: #000;
          }

          /* NOTES & TERMS - NO BACKGROUNDS */
          .notes-terms {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
          }

          .notes-box, .terms-box {
            flex: 1;
            border: 1px solid #000;
            border-radius: 4px;
            overflow: hidden;
          }

          .notes-box .box-header, .terms-box .box-header {
            background: white;
            padding: 8px 12px;
            font-size: 8pt;
            font-weight: 700;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #000;
          }

          .notes-box .box-content, .terms-box .box-content {
            padding: 10px 12px;
            font-size: 8pt;
            color: #000;
            line-height: 1.6;
            white-space: pre-line;
          }

          /* SIGNATURE SECTION */
          .signature-section {
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
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
            margin-top: 35px;
          }

          .signature-label {
            font-size: 8pt;
            color: #000;
          }

          /* FOOTER */
          .estimate-footer {
            margin-top: 20px;
            padding-top: 12px;
            border-top: 2px solid #000;
            text-align: center;
          }

          .footer-message {
            font-size: 10pt;
            font-weight: 700;
            color: #000;
            margin-bottom: 4px;
          }

          .footer-contact {
            font-size: 8pt;
            color: #000;
          }

          .footer-disclaimer {
            font-size: 7pt;
            color: #000;
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px dashed #000;
            font-style: italic;
          }
        `}),e.jsxs("div",{className:"estimate-header",children:[e.jsxs("div",{className:"company-section",children:[e.jsx("div",{className:"company-logo",children:M?e.jsx("img",{src:F,alt:"Shop Logo"}):e.jsx("div",{style:{width:"70px",height:"70px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",borderRadius:"12px"},children:e.jsx(Ae,{style:{width:"40px",height:"40px",color:"white",strokeWidth:2}})})}),e.jsxs("div",{className:"company-info",children:[e.jsxs("h1",{children:[$,x&&` ${x}`]}),e.jsxs("div",{className:"contact",children:["Tel: ",a," | Email: ",h]})]})]}),e.jsxs("div",{className:"estimate-number-box",children:[e.jsx("div",{className:"label",children:"Estimate No"}),e.jsx("div",{className:"number",children:s.estimateNumber}),e.jsxs("div",{className:"date",children:["Date: ",c(s.estimateDate)]})]})]}),e.jsxs("div",{className:"title-section",children:[e.jsx("h2",{children:"PRICE ESTIMATE"}),e.jsxs("div",{className:"validity-badge",children:["Valid Until: ",c(s.expiryDate)]})]}),e.jsxs("div",{className:"two-columns",children:[e.jsx("div",{className:"column",children:e.jsxs("div",{className:"section-box",children:[e.jsx("div",{className:"section-header",children:"Customer Information"}),e.jsxs("div",{className:"section-content",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Name"}),e.jsx("span",{className:"info-value highlight",children:s.customerName})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Phone"}),e.jsx("span",{className:"info-value",children:s.customerPhone})]}),s.customerEmail&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Email"}),e.jsx("span",{className:"info-value",children:s.customerEmail})]}),s.customerAddress&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Address"}),e.jsx("span",{className:"info-value",children:s.customerAddress})]})]})]})}),e.jsx("div",{className:"column",children:e.jsxs("div",{className:"section-box",children:[e.jsx("div",{className:"section-header",children:"Estimate Details"}),e.jsxs("div",{className:"section-content",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Issue Date"}),e.jsx("span",{className:"info-value",children:c(s.estimateDate)})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Valid Until"}),e.jsx("span",{className:"info-value highlight",children:c(s.expiryDate)})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Total Items"}),e.jsx("span",{className:"info-value",children:s.items.length})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Status"}),e.jsx("span",{className:"info-value highlight",children:"Pending Review"})]})]})]})})]}),e.jsx("div",{className:"items-section",children:e.jsxs("table",{className:"items-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45%"},children:"Item Description"}),e.jsx("th",{style:{width:"10%"},children:"Qty"}),e.jsx("th",{style:{width:"17%"},children:"Unit Price"}),e.jsx("th",{style:{width:"10%"},children:"Disc %"}),e.jsx("th",{style:{width:"18%"},children:"Total"})]})}),e.jsx("tbody",{children:s.items.map((n,k)=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("span",{className:"item-number",children:k+1}),e.jsx("span",{className:"item-name",children:n.productName}),n.description&&e.jsx("div",{className:"item-desc",children:n.description})]}),e.jsx("td",{children:n.quantity}),e.jsx("td",{children:N(n.unitPrice)}),e.jsx("td",{children:n.discount>0?`${n.discount}%`:"-"}),e.jsx("td",{children:N(n.total)})]},n.id||k))})]})}),e.jsx("div",{className:"summary-section",children:e.jsxs("div",{className:"summary-box",children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{className:"label",children:"Subtotal"}),e.jsx("span",{className:"value",children:N(s.subtotal)})]}),s.discountAmount>0&&e.jsxs("div",{className:"summary-row discount",children:[e.jsxs("span",{className:"label",children:["Discount (",s.discountPercent,"%)"]}),e.jsxs("span",{className:"value",children:["-",N(s.discountAmount)]})]}),s.taxAmount>0&&e.jsxs("div",{className:"summary-row tax",children:[e.jsxs("span",{className:"label",children:["Tax (",s.taxPercent,"%)"]}),e.jsxs("span",{className:"value",children:["+",N(s.taxAmount)]})]}),e.jsxs("div",{className:"summary-row total",children:[e.jsx("span",{className:"label",children:"Grand Total"}),e.jsx("span",{className:"value",children:N(s.total)})]})]})}),(s.notes||s.terms)&&e.jsxs("div",{className:"notes-terms",children:[s.notes&&e.jsxs("div",{className:"notes-box",children:[e.jsx("div",{className:"box-header",children:"Notes"}),e.jsx("div",{className:"box-content",children:s.notes})]}),s.terms&&e.jsxs("div",{className:"terms-box",children:[e.jsx("div",{className:"box-header",children:"Terms & Conditions"}),e.jsx("div",{className:"box-content",children:s.terms})]})]}),e.jsxs("div",{className:"signature-section",children:[e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"signature-line"}),e.jsx("div",{className:"signature-label",children:"Customer Signature"})]}),e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"signature-line"}),e.jsx("div",{className:"signature-label",children:"Authorized Signature"})]})]}),e.jsxs("div",{className:"estimate-footer",children:[e.jsx("div",{className:"footer-message",children:"Thank you for considering Eco System!"}),e.jsx("div",{className:"footer-contact",children:"No. 123, Galle Road, Colombo 03 | www.ecosystem.lk"}),e.jsx("div",{className:"footer-disclaimer",children:"This is a price estimate only. Final prices may vary based on availability and market conditions. Please confirm with our sales team before placing an order."})]})]})});B.displayName="PrintableEstimate";const Qe=()=>new Date().toISOString().split("T")[0],Ve=(s=30)=>{const d=new Date;return d.setDate(d.getDate()+s),d.toISOString().split("T")[0]},Je=()=>{const s=new Date().getFullYear(),d=Math.floor(Math.random()*9e3)+1e3;return`EST-${s}-${d}`},Ze={customerId:"",customerName:"",customerPhone:"",customerEmail:"",customerAddress:"",isNewCustomer:!1,estimateDate:Qe(),expiryDate:Ve(30),validityDays:30,items:[],subtotal:0,discountPercent:0,discountAmount:0,taxPercent:0,taxAmount:0,total:0,notes:"",terms:`This estimate is valid for 30 days from the date of issue.
Prices are subject to change without prior notice.
Payment terms: 50% advance, 50% on delivery.`,internalNotes:""},me=[{name:"Standard (30 Days)",terms:`This estimate is valid for 30 days from the date of issue.
Prices are subject to change without prior notice.
Payment terms: 50% advance, 50% on delivery.`},{name:"Quick Sale (7 Days)",terms:`This estimate is valid for 7 days only.
Prices are fixed for this period.
Full payment required upon acceptance.`},{name:"Corporate",terms:`This estimate is valid for 45 days from the date of issue.
Bulk pricing applied.
Payment terms: Net 30 days after delivery.`}],mt=()=>{const{theme:s}=Se(),d=Ge(),{id:u}=We(),$=He(),x=!!u,M=!!$.state?.duplicateFrom,F=!!$.state?.viewMode,[a,h]=i.useState(Ze),[c,N]=i.useState({}),[n]=i.useState(Je()),[k,L]=i.useState(!1),[D,z]=i.useState(""),[xe,E]=i.useState(!1),[I,X]=i.useState(""),[he,O]=i.useState(!1),[_,R]=i.useState(!1),[w,G]=i.useState(new Date),[j,W]=i.useState(1),v=3,U=i.useRef(null),q=i.useRef(null),Y=i.useRef(null),T=i.useRef(null),[ue,K]=i.useState(!1),H=i.useMemo(()=>{if(!D)return[];const t=D.toLowerCase();return Ee.filter(r=>r.name.toLowerCase().includes(t)||r.phone.includes(t)||r.email?.toLowerCase().includes(t)).slice(0,5)},[D]),Q=i.useMemo(()=>{if(!I)return[];const t=I.toLowerCase();return Ie.filter(r=>r.name.toLowerCase().includes(t)||r.serialNumber?.toLowerCase().includes(t)).slice(0,8)},[I]);i.useEffect(()=>{if(M){const t=$.state?.duplicateFrom;t&&(L(!0),h({customerId:t.customerId||"",customerName:t.customerName,customerPhone:t.customerPhone,customerEmail:t.customerEmail||"",customerAddress:t.customerAddress||"",isNewCustomer:!1,estimateDate:new Date().toISOString().split("T")[0],expiryDate:new Date(Date.now()+720*60*60*1e3).toISOString().split("T")[0],validityDays:30,items:t.items.map((r,l)=>({...r,id:`dup-item-${l}-${Date.now()}`})),subtotal:t.subtotal,discountPercent:t.discountPercent,discountAmount:t.discountAmount,taxPercent:t.taxPercent,taxAmount:t.taxAmount,total:t.total,notes:t.notes||"",terms:t.terms||"",internalNotes:""}),z(t.customerName),setTimeout(()=>L(!1),100));return}if(x&&u){L(!0);const t=Te.find(r=>r.id===u);t&&(h({customerId:t.customerId||"",customerName:t.customerName,customerPhone:t.customerPhone,customerEmail:t.customerEmail||"",customerAddress:t.customerAddress||"",isNewCustomer:!1,estimateDate:t.estimateDate,expiryDate:t.expiryDate,validityDays:Math.ceil((new Date(t.expiryDate).getTime()-new Date(t.estimateDate).getTime())/(1e3*60*60*24)),items:t.items,subtotal:t.subtotal,discountPercent:t.discountPercent,discountAmount:t.discountAmount,taxPercent:t.taxPercent,taxAmount:t.taxAmount,total:t.total,notes:t.notes||"",terms:t.terms||"",internalNotes:t.internalNotes||""}),z(t.customerName),F&&setTimeout(()=>K(!0),200)),setTimeout(()=>L(!1),100)}},[u,x,M,F,$.state]),i.useEffect(()=>{if(k)return;const t=a.items.reduce((b,P)=>b+P.total,0),r=t*a.discountPercent/100,l=t-r,o=l*a.taxPercent/100,y=l+o;h(b=>({...b,subtotal:t,discountAmount:r,taxAmount:o,total:y}))},[a.items,a.discountPercent,a.taxPercent,k]),i.useEffect(()=>{if(k)return;const t=new Date(a.estimateDate);t.setDate(t.getDate()+a.validityDays),h(r=>({...r,expiryDate:t.toISOString().split("T")[0]}))},[a.validityDays,a.estimateDate,k]),i.useEffect(()=>{const t=r=>{U.current&&!U.current.contains(r.target)&&E(!1),q.current&&!q.current.contains(r.target)&&O(!1),Y.current&&!Y.current.contains(r.target)&&R(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const pe=t=>{h(r=>({...r,customerId:t.id,customerName:t.name,customerPhone:t.phone,customerEmail:t.email||"",customerAddress:t.address||"",isNewCustomer:!1})),z(""),E(!1),c.customerName&&N(r=>({...r,customerName:""}))},be=()=>{h(t=>({...t,customerId:"",customerName:D,customerPhone:"",customerEmail:"",customerAddress:"",isNewCustomer:!0})),E(!1)},ge=()=>{h(t=>({...t,customerId:"",customerName:"",customerPhone:"",customerEmail:"",customerAddress:"",isNewCustomer:!1}))},fe=t=>{if(a.items.find(l=>l.productId===t.id))h(l=>({...l,items:l.items.map(o=>o.productId===t.id?{...o,quantity:o.quantity+1,total:(o.quantity+1)*o.unitPrice*(1-o.discount/100)}:o)}));else{const l={id:Date.now().toString(),productId:t.id,productName:t.name,description:"",quantity:1,unitPrice:t.price,discount:0,total:t.price};h(o=>({...o,items:[...o.items,l]}))}X(""),O(!1)},Ne=()=>{const t={id:Date.now().toString(),productId:"",productName:"",description:"",quantity:1,unitPrice:0,discount:0,total:0};h(r=>({...r,items:[...r.items,t]}))},A=(t,r,l)=>{h(o=>({...o,items:o.items.map(y=>{if(y.id!==t)return y;const b={...y,[r]:l};return(r==="quantity"||r==="unitPrice"||r==="discount")&&(b.total=b.quantity*b.unitPrice*(1-b.discount/100)),b})}))},je=t=>{h(r=>({...r,items:r.items.filter(l=>l.id!==t)}))},f=(t,r)=>{h(l=>({...l,[t]:r})),c[t]&&N(l=>({...l,[t]:""}))},ve=()=>{const t={};return a.customerName.trim()||(t.customerName="Customer name is required"),a.customerPhone.trim()||(t.customerPhone="Phone number is required"),a.items.length===0&&(t.items="At least one item is required"),a.items.forEach((r,l)=>{r.productName.trim()||(t[`item_${l}_name`]="Product name is required"),r.unitPrice<=0&&(t[`item_${l}_price`]="Price must be greater than 0")}),N(t),Object.keys(t).length===0},we=(t="draft")=>{if(!ve())return;const r={id:x?u:Date.now().toString(),estimateNumber:x?`EST-${u}`:n,customerId:a.customerId||void 0,customerName:a.customerName,customerPhone:a.customerPhone,customerEmail:a.customerEmail||void 0,customerAddress:a.customerAddress||void 0,date:a.estimateDate,expiryDate:a.expiryDate,items:a.items,subtotal:a.subtotal,discount:a.discountAmount,tax:a.taxAmount,total:a.total,status:t,notes:a.notes||void 0,terms:a.terms||void 0,internalNotes:a.internalNotes||void 0,createdAt:new Date().toISOString()};console.log("Saving Estimate:",r),d("/estimates")},V=()=>({estimateNumber:x?`EST-${u}`:n,customerName:a.customerName,customerPhone:a.customerPhone,customerEmail:a.customerEmail||void 0,customerAddress:a.customerAddress||void 0,estimateDate:a.estimateDate,expiryDate:a.expiryDate,items:a.items,subtotal:a.subtotal,discountPercent:a.discountPercent,discountAmount:a.discountAmount,taxPercent:a.taxPercent,taxAmount:a.taxAmount,total:a.total,notes:a.notes||void 0,terms:a.terms||void 0}),J=()=>{setTimeout(()=>{if(T.current){const t=window.open("","_blank");t&&(t.document.write("<html><head><title>Estimate - "+(x?`EST-${u}`:n)+"</title></head><body>"),t.document.write(T.current.innerHTML),t.document.write("</body></html>"),t.document.close(),setTimeout(()=>{t.print(),t.close()},250))}},100)},ye=()=>{setTimeout(()=>{if(T.current){const t=window.open("","_blank");t&&(t.document.write("<html><head><title>Estimate - "+(x?`EST-${u}`:n)+"</title>"),t.document.write("<style>@media print { @page { size: A4 portrait; margin: 0; } }</style>"),t.document.write("</head><body>"),t.document.write(T.current.innerHTML),t.document.write("</body></html>"),t.document.close(),setTimeout(()=>{t.print()},250))}},100)},C=t=>`Rs. ${t.toLocaleString("en-LK",{minimumFractionDigits:2})}`,Z=t=>t?new Date(t).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"",ke=t=>{const r=t.getFullYear(),l=t.getMonth(),o=new Date(r,l,1);return{daysInMonth:new Date(r,l+1,0).getDate(),startingDay:o.getDay()}},De=(t,r,l)=>{const{daysInMonth:o,startingDay:y}=ke(w),b=[],P=t?new Date(t):null;for(let g=0;g<y;g++)b.push(e.jsx("div",{className:"w-8 h-8"},`empty-${g}`));for(let g=1;g<=o;g++){const S=new Date(w.getFullYear(),w.getMonth(),g),$e=P&&S.getDate()===P.getDate()&&S.getMonth()===P.getMonth()&&S.getFullYear()===P.getFullYear(),Ce=new Date().toDateString()===S.toDateString();b.push(e.jsx("button",{type:"button",onClick:()=>{const Pe=`${S.getFullYear()}-${(S.getMonth()+1).toString().padStart(2,"0")}-${g.toString().padStart(2,"0")}`;r(Pe),l(!1)},className:`w-8 h-8 rounded-lg text-sm font-medium transition-all ${$e?"bg-emerald-500 text-white":Ce?s==="dark"?"bg-emerald-500/20 text-emerald-400":"bg-emerald-100 text-emerald-600":s==="dark"?"hover:bg-slate-700 text-slate-300":"hover:bg-slate-100 text-slate-700"}`,children:g},g))}return e.jsxs("div",{className:`absolute top-full left-0 mt-2 p-3 rounded-xl border shadow-2xl z-[100] min-w-[280px] ${s==="dark"?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("button",{type:"button",onClick:()=>G(new Date(w.getFullYear(),w.getMonth()-1,1)),className:`p-1 rounded-lg transition-colors ${s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,children:e.jsx(oe,{className:"w-4 h-4"})}),e.jsx("span",{className:`text-sm font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:w.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),e.jsx("button",{type:"button",onClick:()=>G(new Date(w.getFullYear(),w.getMonth()+1,1)),className:`p-1 rounded-lg transition-colors ${s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,children:e.jsx(ie,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:["Su","Mo","Tu","We","Th","Fr","Sa"].map(g=>e.jsx("div",{className:`w-8 h-8 flex items-center justify-center text-xs font-medium ${s==="dark"?"text-slate-500":"text-slate-400"}`,children:g},g))}),e.jsx("div",{className:"grid grid-cols-7 gap-1",children:b})]})},m=`w-full px-4 py-2.5 rounded-xl border transition-all ${s==="dark"?"bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20":"bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"}`,p=`block text-sm font-medium mb-1.5 ${s==="dark"?"text-slate-300":"text-slate-700"}`;return e.jsxs("div",{className:"space-y-6 pb-8",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>d("/estimates"),className:`p-2 rounded-xl border transition-all ${s==="dark"?"bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-400":"bg-white border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:e.jsx(Me,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h1",{className:`text-2xl lg:text-3xl font-bold ${s==="dark"?"text-white":"text-slate-900"}`,children:x?"Edit Estimate":"Create New Estimate"}),e.jsx("p",{className:`mt-1 ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:x?`Editing estimate ${u}`:`Estimate #${n}`})]})]}),e.jsx("div",{className:"flex items-center gap-3",children:e.jsxs("button",{onClick:()=>we("draft"),className:"flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-emerald-500/25 transition-all","aria-label":x?"Update estimate":"Save estimate",children:[e.jsx(Fe,{className:"w-5 h-5"}),x?"Update":"Save"]})})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"xl:col-span-2 space-y-6",children:[e.jsxs("div",{className:`relative rounded-2xl border p-6 ${s==="dark"?"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50":"bg-white border-slate-200 shadow-sm"}`,children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:`p-2.5 rounded-xl ${s==="dark"?"bg-blue-500/10":"bg-blue-50"}`,children:e.jsx(te,{className:"w-5 h-5 text-blue-500"})}),e.jsx("h2",{className:`text-lg font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Customer Information"})]}),a.customerName?e.jsxs("div",{className:`rounded-xl border p-4 ${s==="dark"?"bg-slate-800/50 border-slate-700/50":"bg-slate-50 border-slate-200"}`,children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${s==="dark"?"bg-emerald-500/20":"bg-emerald-100"}`,children:e.jsx(te,{className:"w-5 h-5 text-emerald-500"})}),e.jsxs("div",{children:[e.jsx("p",{className:`font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:a.customerName}),a.isNewCustomer&&e.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500",children:"New Customer"})]})]}),e.jsx("button",{type:"button",onClick:ge,className:`p-1.5 rounded-lg transition-colors ${s==="dark"?"hover:bg-slate-700 text-slate-400":"hover:bg-slate-200 text-slate-600"}`,children:e.jsx(re,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:p,children:[e.jsx(ze,{className:"w-3.5 h-3.5 inline mr-1.5"}),"Phone Number *"]}),e.jsx("input",{type:"tel",value:a.customerPhone,onChange:t=>f("customerPhone",t.target.value),placeholder:"07X XXX XXXX",className:`${m} ${c.customerPhone?"border-red-500":""}`}),c.customerPhone&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:c.customerPhone})]}),e.jsxs("div",{children:[e.jsxs("label",{className:p,children:[e.jsx(Oe,{className:"w-3.5 h-3.5 inline mr-1.5"}),"Email Address"]}),e.jsx("input",{type:"email",value:a.customerEmail,onChange:t=>f("customerEmail",t.target.value),placeholder:"customer@email.com",className:m})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsxs("label",{className:p,children:[e.jsx(Re,{className:"w-3.5 h-3.5 inline mr-1.5"}),"Address"]}),e.jsx("input",{type:"text",value:a.customerAddress,onChange:t=>f("customerAddress",t.target.value),placeholder:"Street, City",className:m})]})]})]}):e.jsxs("div",{ref:U,className:"relative",children:[e.jsxs("div",{className:"relative",children:[e.jsx(se,{className:`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${s==="dark"?"text-slate-500":"text-slate-400"}`}),e.jsx("input",{type:"text",placeholder:"Search customer by name, phone, or email...",value:D,onChange:t=>{z(t.target.value),E(!0)},onFocus:()=>E(!0),className:`${m} pl-10`})]}),xe&&D&&e.jsxs("div",{className:`absolute top-full left-0 right-0 mt-2 rounded-xl border shadow-2xl z-[100] overflow-hidden max-h-80 overflow-y-auto ${s==="dark"?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`,children:[H.length>0?e.jsx(e.Fragment,{children:H.map(t=>e.jsxs("button",{type:"button",onClick:()=>pe(t),className:`w-full px-4 py-3 text-left transition-colors ${s==="dark"?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsx("p",{className:`font-medium ${s==="dark"?"text-white":"text-slate-900"}`,children:t.name}),e.jsxs("p",{className:`text-sm ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:[t.phone," • ",t.email]})]},t.id))}):e.jsx("div",{className:`px-4 py-3 ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:"No customers found"}),e.jsxs("button",{type:"button",onClick:be,className:`w-full px-4 py-3 text-left border-t flex items-center gap-2 transition-colors ${s==="dark"?"border-slate-700 hover:bg-emerald-500/10 text-emerald-400":"border-slate-200 hover:bg-emerald-50 text-emerald-600"}`,children:[e.jsx(Le,{className:"w-4 h-4"}),'Add "',D,'" as new customer']})]}),c.customerName&&e.jsxs("p",{className:"mt-2 text-sm text-red-500 flex items-center gap-1",children:[e.jsx(ae,{className:"w-4 h-4"}),c.customerName]})]})]})]}),e.jsxs("div",{className:`relative overflow-hidden rounded-2xl border p-6 ${s==="dark"?"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50":"bg-white border-slate-200 shadow-sm"}`,children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl"}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`p-2.5 rounded-xl ${s==="dark"?"bg-emerald-500/10":"bg-emerald-50"}`,children:e.jsx(le,{className:"w-5 h-5 text-emerald-500"})}),e.jsx("h2",{className:`text-lg font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Products & Services"})]}),e.jsxs("button",{type:"button",onClick:Ne,className:`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${s==="dark"?"bg-slate-700/50 hover:bg-slate-700 text-slate-300":"bg-slate-100 hover:bg-slate-200 text-slate-700"}`,children:[e.jsx(Ue,{className:"w-4 h-4"}),"Custom Item"]})]}),e.jsxs("div",{ref:q,className:"relative mb-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(se,{className:`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${s==="dark"?"text-slate-500":"text-slate-400"}`}),e.jsx("input",{type:"text",placeholder:"Search products by name or SKU...",value:I,onChange:t=>{X(t.target.value),O(!0)},onFocus:()=>O(!0),className:`${m} pl-10`})]}),he&&I&&e.jsx("div",{className:`absolute top-full left-0 right-0 mt-2 rounded-xl border shadow-xl z-50 overflow-hidden max-h-80 overflow-y-auto ${s==="dark"?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`,children:Q.length>0?Q.map(t=>e.jsxs("button",{type:"button",onClick:()=>fe(t),className:`w-full px-4 py-3 text-left transition-colors flex items-center justify-between ${s==="dark"?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`font-medium ${s==="dark"?"text-white":"text-slate-900"}`,children:t.name}),e.jsxs("p",{className:`text-sm ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:[t.serialNumber&&`SN: ${t.serialNumber} • `,"Stock: ",t.stock]})]}),e.jsx("span",{className:`font-semibold ${s==="dark"?"text-emerald-400":"text-emerald-600"}`,children:C(t.price)})]},t.id)):e.jsx("div",{className:`px-4 py-3 ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:"No products found"})})]}),c.items&&e.jsxs("p",{className:"mb-4 text-sm text-red-500 flex items-center gap-1",children:[e.jsx(ae,{className:"w-4 h-4"}),c.items]}),a.items.length>0?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"hidden md:flex gap-3 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500",children:[e.jsx("div",{className:"flex-1",children:"Product"}),e.jsx("div",{className:"w-20 text-center",children:"Qty"}),e.jsx("div",{className:"flex-1 text-right",children:"Unit Price"}),e.jsx("div",{className:"w-24 text-center",children:"Disc %"}),e.jsx("div",{className:"w-32 text-right",children:"Total"}),e.jsx("div",{className:"w-12"})]}),a.items.slice((j-1)*v,j*v).map((t,r)=>{const l=(j-1)*v+r;return e.jsxs("div",{className:`rounded-xl border p-4 ${s==="dark"?"bg-slate-800/30 border-slate-700/50":"bg-slate-50 border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-3 items-stretch md:items-center",children:[e.jsx("div",{className:"flex-1",children:e.jsx("input",{type:"text",value:t.productName,onChange:o=>A(t.id,"productName",o.target.value),placeholder:"Product name",className:`${m} ${c[`item_${l}_name`]?"border-red-500":""}`})}),e.jsxs("div",{className:"w-full md:w-20",children:[e.jsx("label",{className:`md:hidden ${p}`,children:"Quantity"}),e.jsx("input",{type:"number",min:"1",value:t.quantity,onChange:o=>A(t.id,"quantity",parseInt(o.target.value)||1),className:`${m} text-center`})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:`md:hidden ${p}`,children:"Unit Price"}),e.jsx("input",{type:"number",min:"0",step:"0.01",value:t.unitPrice,onChange:o=>A(t.id,"unitPrice",parseFloat(o.target.value)||0),className:`${m} text-right ${c[`item_${l}_price`]?"border-red-500":""}`})]}),e.jsxs("div",{className:"w-full md:w-24",children:[e.jsx("label",{className:`md:hidden ${p}`,children:"Discount %"}),e.jsx("input",{type:"number",min:"0",max:"100",value:t.discount,onChange:o=>A(t.id,"discount",parseFloat(o.target.value)||0),className:`${m} text-center`})]}),e.jsx("div",{className:`w-full md:w-32 text-right font-semibold ${s==="dark"?"text-emerald-400":"text-emerald-600"}`,children:C(t.total)}),e.jsx("div",{className:"md:col-span-1 flex justify-end",children:e.jsx("button",{type:"button",onClick:()=>je(t.id),className:`p-2 rounded-lg transition-colors ${s==="dark"?"hover:bg-red-500/20 text-slate-400 hover:text-red-400":"hover:bg-red-50 text-slate-500 hover:text-red-600"}`,children:e.jsx(qe,{className:"w-4 h-4"})})})]}),e.jsx("div",{className:"mt-3",children:e.jsx("input",{type:"text",value:t.description,onChange:o=>A(t.id,"description",o.target.value),placeholder:"Add description or specifications (optional)",className:`${m} text-sm`})})]},t.id)}),a.items.length>v&&e.jsxs("div",{className:`flex items-center justify-between pt-4 border-t ${s==="dark"?"border-slate-700/50":"border-slate-200"}`,children:[e.jsxs("p",{className:`text-sm ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:["Showing ",(j-1)*v+1," - ",Math.min(j*v,a.items.length)," of ",a.items.length," items"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>W(t=>Math.max(1,t-1)),disabled:j===1,className:`p-2 rounded-lg border transition-all ${j===1?s==="dark"?"bg-slate-800/30 border-slate-700/30 text-slate-600 cursor-not-allowed":"bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed":s==="dark"?"bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-400":"bg-white border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:e.jsx(oe,{className:"w-4 h-4"})}),e.jsxs("span",{className:`px-3 py-1 text-sm font-medium ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:["Page ",j," of ",Math.ceil(a.items.length/v)]}),e.jsx("button",{type:"button",onClick:()=>W(t=>Math.min(Math.ceil(a.items.length/v),t+1)),disabled:j>=Math.ceil(a.items.length/v),className:`p-2 rounded-lg border transition-all ${j>=Math.ceil(a.items.length/v)?s==="dark"?"bg-slate-800/30 border-slate-700/30 text-slate-600 cursor-not-allowed":"bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed":s==="dark"?"bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-400":"bg-white border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:e.jsx(ie,{className:"w-4 h-4"})})]})]})]}):e.jsxs("div",{className:`text-center py-12 rounded-xl border-2 border-dashed ${s==="dark"?"border-slate-700 text-slate-500":"border-slate-300 text-slate-400"}`,children:[e.jsx(le,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),e.jsx("p",{className:"font-medium",children:"No items added yet"}),e.jsx("p",{className:"text-sm mt-1",children:"Search for products above or add a custom item"})]})]})]}),e.jsxs("div",{className:`relative overflow-hidden rounded-2xl border p-6 ${s==="dark"?"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50":"bg-white border-slate-200 shadow-sm"}`,children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:`p-2.5 rounded-xl ${s==="dark"?"bg-purple-500/10":"bg-purple-50"}`,children:e.jsx(Ye,{className:"w-5 h-5 text-purple-500"})}),e.jsx("h2",{className:`text-lg font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Notes & Terms"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:p,children:"Customer Notes"}),e.jsx("textarea",{value:a.notes,onChange:t=>f("notes",t.target.value),placeholder:"Notes visible to customer on the estimate...",rows:4,className:m})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("label",{className:p.replace("mb-1.5",""),children:"Terms & Conditions"}),e.jsxs("select",{onChange:t=>{const r=me.find(l=>l.name===t.target.value);r&&f("terms",r.terms)},className:`text-xs px-2 py-1 rounded-lg border ${s==="dark"?"bg-slate-800 border-slate-700 text-slate-400":"bg-white border-slate-200 text-slate-600"}`,children:[e.jsx("option",{value:"",children:"Load Template"}),me.map(t=>e.jsx("option",{value:t.name,children:t.name},t.name))]})]}),e.jsx("textarea",{value:a.terms,onChange:t=>f("terms",t.target.value),placeholder:"Terms and conditions...",rows:4,className:m})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:p,children:"Internal Notes (Not visible to customer)"}),e.jsx("textarea",{value:a.internalNotes,onChange:t=>f("internalNotes",t.target.value),placeholder:"Internal notes for your team...",rows:2,className:`${m} border-amber-500/30`})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:`relative rounded-2xl border p-6 ${s==="dark"?"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50":"bg-white border-slate-200 shadow-sm"}`,children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:`p-2.5 rounded-xl ${s==="dark"?"bg-amber-500/10":"bg-amber-50"}`,children:e.jsx(ne,{className:"w-5 h-5 text-amber-500"})}),e.jsx("h2",{className:`text-lg font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Estimate Details"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:p,children:"Estimate Number"}),e.jsx("input",{type:"text",value:x?`EST-${u}`:n,disabled:!0,className:`${m} opacity-60 cursor-not-allowed`})]}),e.jsxs("div",{ref:Y,className:"relative",children:[e.jsx("label",{className:p,children:"Estimate Date"}),e.jsxs("button",{type:"button",onClick:()=>R(!_),className:`${m} text-left flex items-center justify-between`,children:[e.jsx("span",{children:Z(a.estimateDate)}),e.jsx(ne,{className:"w-4 h-4 opacity-50"})]}),_&&De(a.estimateDate,t=>f("estimateDate",t),R)]}),e.jsxs("div",{children:[e.jsx("label",{className:p,children:"Valid For"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"number",min:"1",max:"365",value:a.validityDays,onChange:t=>f("validityDays",parseInt(t.target.value)||30),className:`${m} w-20 text-center`}),e.jsx("span",{className:s==="dark"?"text-slate-400":"text-slate-600",children:"days"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:p,children:"Expiry Date"}),e.jsxs("div",{className:`px-4 py-2.5 rounded-xl border flex items-center gap-2 ${s==="dark"?"bg-slate-800/30 border-slate-700/50 text-slate-300":"bg-slate-50 border-slate-200 text-slate-700"}`,children:[e.jsx(Ke,{className:"w-4 h-4 opacity-50"}),e.jsx("span",{children:Z(a.expiryDate)})]})]})]})]})]}),e.jsxs("div",{className:`relative overflow-hidden rounded-2xl border p-6 ${s==="dark"?"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50":"bg-white border-slate-200 shadow-sm"}`,children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-full blur-3xl"}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:`p-2.5 rounded-xl ${s==="dark"?"bg-emerald-500/10":"bg-emerald-50"}`,children:e.jsx(Be,{className:"w-5 h-5 text-emerald-500"})}),e.jsx("h2",{className:`text-lg font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Summary"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:s==="dark"?"text-slate-400":"text-slate-600",children:["Subtotal (",a.items.length," items)"]}),e.jsx("span",{className:`font-medium ${s==="dark"?"text-white":"text-slate-900"}`,children:C(a.subtotal)})]}),e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:s==="dark"?"text-slate-400":"text-slate-600",children:"Discount"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"number",min:"0",max:"100",value:a.discountPercent,onChange:t=>f("discountPercent",parseFloat(t.target.value)||0),className:`w-16 px-2 py-1 rounded-lg border text-center text-sm ${s==="dark"?"bg-slate-800 border-slate-700 text-white":"bg-white border-slate-200 text-slate-900"}`}),e.jsx(de,{className:`w-3.5 h-3.5 ml-1 ${s==="dark"?"text-slate-500":"text-slate-400"}`})]})]}),e.jsxs("span",{className:"text-red-500 font-medium",children:["-",C(a.discountAmount)]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:s==="dark"?"text-slate-400":"text-slate-600",children:"Tax"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"number",min:"0",max:"100",value:a.taxPercent,onChange:t=>f("taxPercent",parseFloat(t.target.value)||0),className:`w-16 px-2 py-1 rounded-lg border text-center text-sm ${s==="dark"?"bg-slate-800 border-slate-700 text-white":"bg-white border-slate-200 text-slate-900"}`}),e.jsx(de,{className:`w-3.5 h-3.5 ml-1 ${s==="dark"?"text-slate-500":"text-slate-400"}`})]})]}),e.jsxs("span",{className:`font-medium ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:["+",C(a.taxAmount)]})]}),e.jsx("div",{className:`border-t pt-4 ${s==="dark"?"border-slate-700":"border-slate-200"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`text-lg font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Total"}),e.jsx("span",{className:"text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent",children:C(a.total)})]})})]})]})]}),e.jsx("div",{className:`relative overflow-hidden rounded-2xl border p-6 ${s==="dark"?"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50":"bg-white border-slate-200 shadow-sm"}`,children:e.jsxs("div",{className:"relative",children:[e.jsx("h2",{className:`text-lg font-semibold mb-4 ${s==="dark"?"text-white":"text-slate-900"}`,children:"Quick Actions"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("button",{type:"button",onClick:()=>K(!0),disabled:a.items.length===0||!a.customerName,className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${a.items.length===0||!a.customerName?s==="dark"?"bg-slate-800/30 border-slate-700/30 text-slate-600 cursor-not-allowed":"bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed":s==="dark"?"bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-300":"bg-white border-slate-200 hover:bg-slate-50 text-slate-700"}`,children:[e.jsx(Xe,{className:`w-5 h-5 ${a.items.length===0||!a.customerName?"text-slate-500":"text-blue-500"}`}),e.jsx("span",{children:"Preview Estimate"})]}),e.jsxs("button",{type:"button",onClick:ye,disabled:a.items.length===0||!a.customerName,className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${a.items.length===0||!a.customerName?s==="dark"?"bg-slate-800/30 border-slate-700/30 text-slate-600 cursor-not-allowed":"bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed":s==="dark"?"bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-300":"bg-white border-slate-200 hover:bg-slate-50 text-slate-700"}`,children:[e.jsx(_e,{className:`w-5 h-5 ${a.items.length===0||!a.customerName?"text-slate-500":"text-purple-500"}`}),e.jsx("span",{children:"Download PDF"})]}),e.jsxs("button",{type:"button",onClick:J,disabled:a.items.length===0||!a.customerName,className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${a.items.length===0||!a.customerName?s==="dark"?"bg-slate-800/30 border-slate-700/30 text-slate-600 cursor-not-allowed":"bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed":s==="dark"?"bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-300":"bg-white border-slate-200 hover:bg-slate-50 text-slate-700"}`,children:[e.jsx(ce,{className:`w-5 h-5 ${a.items.length===0||!a.customerName?"text-slate-500":"text-amber-500"}`}),e.jsx("span",{children:"Print Estimate"})]})]})]})})]})]}),e.jsx("div",{style:{position:"absolute",left:"-9999px",top:"-9999px"},children:e.jsx(B,{ref:T,estimate:V()})}),ue&&e.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",children:e.jsxs("div",{className:`relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-2xl ${s==="dark"?"bg-slate-900 border border-slate-700":"bg-white border border-slate-200"}`,children:[e.jsxs("div",{className:`sticky top-0 z-10 flex items-center justify-between p-4 border-b ${s==="dark"?"bg-slate-900 border-slate-700":"bg-white border-slate-200"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Preview Estimate"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:J,className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium text-sm",children:[e.jsx(ce,{className:"w-4 h-4"}),"Print"]}),e.jsx("button",{onClick:()=>K(!1),className:`p-2 rounded-xl transition-colors ${s==="dark"?"hover:bg-slate-800 text-slate-400":"hover:bg-slate-100 text-slate-600"}`,children:e.jsx(re,{className:"w-5 h-5"})})]})]}),e.jsx("div",{className:"p-4 overflow-auto",style:{transform:"scale(0.85)",transformOrigin:"top center"},children:e.jsx(B,{estimate:V()})})]})})]})};export{mt as EstimateForm};
