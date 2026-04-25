import{r as E,j as t}from"./vendor-react-BwcC2Ydo.js";import{v as u}from"./index-CBBcuQx9.js";import{an as z}from"./vendor-icons-BIKcqT2E.js";const C=E.forwardRef(({invoice:e,customer:l,branding:n},b)=>{const c=n?.name||"ECO SYSTEM COMPUTER",p=n?.subName||"SOLUTIONS",j=n?.logo&&n.logo!==u,y=n?.logo||u,N=n?.address||"No.14, Mulatiyana junction, Mulatiyana, Matara.",w=n?.phone||"0711453111",v=n?.email||"ecosystemcomputersolutions@gmail.com",I=e.customerId==="walk-in"||e.customerName?.toLowerCase().includes("walk-in")||e.customerName?.toLowerCase().includes("walkin"),i=o=>`LKR ${o.toLocaleString("en-LK",{minimumFractionDigits:2})}`,m=o=>new Date(o).toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/").reverse().join("-");return t.jsxs("div",{ref:b,className:"print-invoice",children:[t.jsx("style",{children:`
          /* ═══════════════════════════════════════════════════════════════
             INK-EFFICIENT B&W PRINT OPTIMIZED - ECO SYSTEM INVOICE
             Designed for black laser/inkjet printers to minimize ink usage
             ═══════════════════════════════════════════════════════════════ */
          
          @media print {
            @page {
              size: A4 portrait;
              margin: 10mm 12mm;
            }
            
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              width: 210mm !important;
              background: white !important;
            }
            
            .print-invoice {
              width: 100% !important;
              max-width: none !important;
              min-height: auto !important;
              padding: 0 !important;
              margin: 0 !important;
              background: white !important;
              color: #000 !important;
              font-family: 'Segoe UI', 'Arial', sans-serif !important;
              font-size: 10pt !important;
            }
            
            .no-print {
              display: none !important;
            }

            table {
              page-break-inside: avoid;
            }
          }
          
          /* A4 Portrait - 210mm x 297mm */
          .print-invoice {
            width: 210mm;
            min-height: 297mm;
            padding: 12mm 15mm;
            margin: 0 auto;
            background: white;
            color: #000;
            font-family: 'Segoe UI', 'Arial', sans-serif;
            font-size: 10pt;
            line-height: 1.4;
            box-sizing: border-box;
          }

          /* HEADER - Company Info - INK EFFICIENT */
          .invoice-header {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            margin-bottom: 8px;
            padding-bottom: 15px;
            border-bottom: 2px solid #000;
          }


          .company-section {
            display: flex;
            align-items: stretch;
            gap: 12px;
          }

          .company-logo {
            width: auto;
            height: auto;
            max-width: 120px;
            max-height: 80px;
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            flex-shrink: 0;
            overflow: visible;
          }

          .company-logo img {
            width: auto;
            height: auto;
            max-width: 120px;
            max-height: 80px;
            object-fit: contain;
          }

          .company-logo svg {
            width: 28px;
            height: 28px;
          }

          .company-info h1 {
            font-size: 16pt;
            font-weight: 700;
            color: #000;
            margin: 0 0 1px 0;
            letter-spacing: -0.3px;
          }

          .company-info .sub-name {
            font-size: 9pt;
            font-weight: 600;
            color: #000;
            margin-bottom: 6px;
          }

          .company-info .details {
            font-size: 8pt;
            color: #000;
            line-height: 1.4;
          }

          .contact-box {
            text-align: right;
          }

          .contact-box h3 {
            font-size: 9pt;
            font-weight: 600;
            color: #000;
            margin: 0 0 4px 0;
            text-decoration: underline;
          }

          .contact-box .info {
            font-size: 8pt;
            color: #000;
            line-height: 1.5;
          }

          /* TITLE SECTION - NO BACKGROUND FILL */
          .invoice-title-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 15px 18px;
            margin-bottom: 15px;
            background: white;
            border: 2px solid #000;
          }

          .invoice-title h2 {
            font-size: 18pt;
            font-weight: 700;
            color: #000;
            margin: 0 0 2px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .invoice-title .company-label {
            font-size: 8pt;
            color: #000;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .amount-due {
            text-align: right;
          }

          .amount-due label {
            font-size: 8pt;
            color: #000;
            font-weight: 600;
            text-decoration: underline;
          }

          .amount-due .amount {
            font-size: 20pt;
            font-weight: 700;
            color: #000;
            font-family: 'Consolas', 'Monaco', monospace;
          }

          /* INVOICE META - Bill To & Details */
          .invoice-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 18px;
            gap: 20px;
          }

          .bill-to {
            flex: 1;
            padding: 10px;
            border: 1px solid #000;
          }

          .bill-to label {
            font-size: 7pt;
            color: #000;
            display: block;
            margin-bottom: 2px;
            font-weight: 600;
            text-transform: uppercase;
          }

          .bill-to .name {
            font-size: 11pt;
            font-weight: 700;
            color: #000;
            margin-bottom: 2px;
          }

          .bill-to .info {
            font-size: 8pt;
            color: #000;
            line-height: 1.4;
          }

          .invoice-details {
            text-align: right;
          }

          .invoice-details .row {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            margin-bottom: 4px;
            font-size: 8pt;
          }

          .invoice-details .row label {
            color: #000;
            font-weight: 500;
          }

          .invoice-details .row .value {
            color: #000;
            font-weight: 600;
            min-width: 90px;
            text-align: right;
          }

          /* ITEMS TABLE - MINIMAL INK */
          .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
          }

          .items-table thead th {
            background: white;
            color: #000;
            font-size: 8pt;
            font-weight: 700;
            padding: 8px 10px;
            text-align: left;
            border: 1px solid #000;
            border-bottom: 2px solid #000;
            text-transform: uppercase;
          }

          .items-table thead th:first-child {
            width: 50%;
          }

          .items-table thead th:nth-child(2) {
            width: 10%;
            text-align: center;
          }

          .items-table thead th:nth-child(3),
          .items-table thead th:nth-child(4) {
            width: 20%;
            text-align: right;
          }

          .items-table tbody tr {
            border-bottom: 1px solid #000;
          }

          .items-table tbody td {
            padding: 10px;
            font-size: 9pt;
            color: #000;
            vertical-align: top;
            border-left: 1px solid #000;
            border-right: 1px solid #000;
          }

          .items-table tbody td:first-child .product-name {
            font-weight: 600;
            color: #000;
            margin-bottom: 2px;
          }

          .items-table tbody td:first-child .product-desc {
            font-size: 7pt;
            color: #000;
            line-height: 1.3;
            font-style: italic;
          }

          .items-table tbody td:nth-child(2) {
            text-align: center;
            font-weight: 600;
          }

          .items-table tbody td:nth-child(3),
          .items-table tbody td:nth-child(4) {
            text-align: right;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 8pt;
          }

          .items-table tbody td:nth-child(4) {
            font-weight: 700;
            color: #000;
          }

          /* TOTALS SECTION */
          .totals-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 18px;
            gap: 25px;
          }

          .payment-info {
            flex: 1;
          }

          .payment-info h4 {
            font-size: 8pt;
            font-weight: 700;
            color: #000;
            margin: 0 0 4px 0;
            text-decoration: underline;
          }

          .payment-info p {
            font-size: 8pt;
            color: #000;
            margin: 0;
          }

          .totals-box {
            width: 220px;
            border: 1px solid #000;
            padding: 10px;
          }

          .totals-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            font-size: 8pt;
            border-bottom: 1px dotted #000;
          }

          .totals-row .label {
            color: #000;
          }

          .totals-row .value {
            font-family: 'Consolas', 'Monaco', monospace;
            color: #000;
            font-weight: 500;
          }

          .totals-row.total {
            border-bottom: none;
            padding-top: 8px;
            margin-top: 4px;
            border-top: 2px solid #000;
          }

          .totals-row.total .label {
            font-weight: 700;
            color: #000;
            text-transform: uppercase;
          }

          .totals-row.total .value {
            font-size: 11pt;
            font-weight: 700;
            color: #000;
          }

          /* BALANCE DUE BOX - INK EFFICIENT STYLING */
          .balance-due-box {
            background: #fff;
            border: 2px solid #000;
            padding: 12px 15px;
            margin-top: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .balance-due-box .label {
            font-size: 10pt;
            font-weight: 800;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .balance-due-box .value {
            font-size: 13pt;
            font-weight: 900;
            color: #000;
            font-family: 'Consolas', 'Monaco', monospace;
          }

          .balance-due-note {
            text-align: center;
            font-size: 7pt;
            color: #666;
            margin-top: 4px;
            font-style: italic;
          }

          /* NOTES SECTION - NO BACKGROUND */
          .notes-section {
            background: white;
            border: 1px solid #000;
            padding: 10px 12px;
            margin-bottom: 15px;
          }

          .notes-section h4 {
            font-size: 8pt;
            font-weight: 700;
            color: #000;
            margin: 0 0 6px 0;
            text-transform: uppercase;
            border-bottom: 1px solid #000;
            padding-bottom: 4px;
          }

          .notes-section p {
            font-size: 7pt;
            color: #000;
            margin: 0;
            line-height: 1.5;
          }

          /* FOOTER */
          .footer-section {
            border-top: 2px solid #000;
            padding-top: 12px;
          }

          .footer-section h4 {
            font-size: 7pt;
            font-weight: 700;
            color: #000;
            margin: 0 0 3px 0;
          }

          .footer-section p {
            font-size: 7pt;
            color: #000;
            margin: 0;
            line-height: 1.5;
          }

          .footer-thank-you {
            text-align: center;
            margin-top: 15px;
            padding-top: 12px;
            border-top: 1px dashed #000;
            font-size: 9pt;
            font-weight: 600;
            color: #000;
          }
        `}),t.jsxs("div",{className:"invoice-header",children:[t.jsxs("div",{className:"company-section",children:[t.jsx("div",{className:"company-logo",children:j?t.jsx("img",{src:y,alt:"Shop Logo"}):t.jsx("div",{style:{width:"70px",height:"70px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",borderRadius:"12px"},children:t.jsx(z,{style:{width:"40px",height:"40px",color:"white",strokeWidth:2}})})}),t.jsxs("div",{className:"company-info",children:[t.jsx("h1",{children:c}),t.jsx("div",{className:"sub-name",children:p}),t.jsx("div",{className:"details",children:N.split(",").map((o,r,d)=>t.jsxs("span",{children:[o.trim(),r<d.length-1&&t.jsx("br",{})]},r))})]})]}),t.jsxs("div",{className:"contact-box",children:[t.jsx("h3",{children:"Contact information"}),t.jsxs("div",{className:"info",children:[v,t.jsx("br",{}),w]})]})]}),t.jsxs("div",{className:"invoice-title-section",children:[t.jsxs("div",{className:"invoice-title",children:[t.jsxs("h2",{children:[c.split(" ")[0]," INVOICE"]}),t.jsxs("div",{className:"company-label",children:[c," ",p]})]}),t.jsxs("div",{className:"amount-due",children:[t.jsx("label",{children:"Amount Due (LKR)"}),t.jsx("div",{className:"amount",children:e.total.toLocaleString("en-LK",{minimumFractionDigits:2})})]})]}),t.jsxs("div",{className:"invoice-meta",children:[t.jsxs("div",{className:"bill-to",children:[t.jsx("label",{children:"Bill to:"}),I?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"name",children:"Walk-in Customer"}),t.jsx("div",{className:"info",style:{fontStyle:"italic",color:"#666"},children:"Cash Sale"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"name",children:e.customerName}),l&&l.email&&t.jsxs("div",{className:"info",children:["Email: ",l.email,t.jsx("br",{}),"Phone: ",l.phone]})]})]}),t.jsxs("div",{className:"invoice-details",children:[t.jsxs("div",{className:"row",children:[t.jsx("label",{children:"Invoice Number:"}),t.jsx("span",{className:"value",children:e.id.replace("INV-","")})]}),t.jsxs("div",{className:"row",children:[t.jsx("label",{children:"Invoice Date:"}),t.jsx("span",{className:"value",children:m(e.date)})]}),t.jsxs("div",{className:"row",children:[t.jsx("label",{children:"Payment Due:"}),t.jsx("span",{className:"value",children:m(e.dueDate)})]})]})]}),t.jsxs("table",{className:"items-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Items"}),t.jsx("th",{children:"Qty"}),t.jsx("th",{children:"Price"}),t.jsx("th",{children:"Amount"})]})}),t.jsx("tbody",{children:e.items.map((o,r)=>{const d=s=>{if(!s)return"N/W";const a=s.toLowerCase().trim();if(a.includes("lifetime")||a.includes("life time"))return"L/W";if(a.includes("no warranty")||a==="n/w"||a==="none")return"N/W";const h=a.match(/(\d+)\s*y(ear)?s?/i);if(h)return`${h[1]}Y`;const x=a.match(/(\d+)\s*m(onth)?s?/i);if(x)return`${x[1]}M`;const g=a.match(/(\d+)\s*w(eek)?s?/i);if(g)return`${g[1]}W`;const f=a.match(/(\d+)\s*d(ay)?s?/i);return f?`${f[1]}D`:s.length>5?s.substring(0,5):s};return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"product-name",children:[o.productName,o.warranty&&t.jsxs("span",{style:{marginLeft:"8px",fontSize:"7pt",fontWeight:"600",color:"#333",background:"#f0f0f0",padding:"1px 4px",borderRadius:"3px"},children:["[",d(o.warranty),"]"]})]})}),t.jsx("td",{children:o.quantity}),t.jsx("td",{children:o.originalPrice&&o.originalPrice!==o.unitPrice?t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[t.jsx("span",{style:{textDecoration:"line-through",fontSize:"7pt"},children:i(o.originalPrice)}),t.jsx("span",{style:{fontWeight:"600"},children:i(o.unitPrice)})]}):i(o.unitPrice)}),t.jsx("td",{children:i(o.total)})]},r)})})]}),t.jsxs("div",{className:"totals-section",children:[t.jsxs("div",{className:"payment-info",children:[t.jsx("h4",{children:"Payment Instruction"}),t.jsx("p",{children:"Payment"})]}),t.jsxs("div",{className:"totals-box",children:[t.jsxs("div",{className:"totals-row",children:[t.jsx("span",{className:"label",children:"Sub Total:"}),t.jsx("span",{className:"value",children:i(e.subtotal)})]}),e.tax>0&&t.jsxs("div",{className:"totals-row",children:[t.jsx("span",{className:"label",children:"Total tax:"}),t.jsx("span",{className:"value",children:i(e.tax)})]}),t.jsxs("div",{className:"totals-row total",children:[t.jsx("span",{className:"label",children:"Grand total:"}),t.jsx("span",{className:"value",children:i(e.total)})]}),(e.paidAmount??0)>0&&(e.paidAmount??0)<e.total&&t.jsxs("div",{className:"totals-row",style:{borderBottom:"none",paddingTop:"6px"},children:[t.jsx("span",{className:"label",children:"Paid Amount:"}),t.jsx("span",{className:"value",style:{color:"#000000",fontWeight:"600"},children:i(e.paidAmount??0)})]})]})]}),((e.dueAmount??0)>0||e.total-(e.paidAmount??0)>0)&&t.jsxs("div",{style:{marginBottom:"15px"},children:[t.jsxs("div",{className:"balance-due-box",children:[t.jsx("span",{className:"label",children:"⚠ BALANCE DUE:"}),t.jsx("span",{className:"value",children:i((e.dueAmount??0)||e.total-(e.paidAmount??0))})]}),t.jsx("p",{className:"balance-due-note",children:"Please settle the outstanding balance at your earliest convenience"})]}),t.jsxs("div",{className:"notes-section",children:[t.jsx("h4",{children:"Notes / Terms"}),t.jsx("p",{children:"PLEASE PRODUCE THE INVOICE FOR WARRANTY. NO WARRANTY FOR CHIP BURNS, PHYSICAL DAMAGE OR CORROSION. Warranty covers only manufacturer's defects. Damage or defect due to other causes such as negligence, misuses, improper operation, power fluctuation, lightening, or other natural disasters, sabotage, or accident etc. (01M) = 30 Days, (03M) = 90 Days, (06M) = 180 Days, (01Y) = 350 Days, (02Y) = 700 Days, (03Y) = 1050 Days, (05Y) = 1750 Days, (10Y) = 3500 Days, (L/W) = Lifetime Warranty. (N/W) = No Warranty)."}),e.notes&&t.jsx("p",{style:{marginTop:"8px",paddingTop:"4px",borderTop:"1px dotted #000"},children:e.notes})]}),t.jsx("div",{className:"footer-section",children:t.jsx("p",{children:"We know the world is full of choices. Thank you for selecting us."})}),t.jsx("div",{className:"footer-thank-you",children:"Thank you for your business!"})]})});C.displayName="PrintableInvoice";export{C as P};
