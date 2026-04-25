import{r as j,j as e}from"./vendor-react-BwcC2Ydo.js";import{v as p}from"./index-Beny1xCi.js";import{an as N}from"./vendor-icons-BIKcqT2E.js";const v=j.forwardRef(({grn:t,supplier:o,branding:i},x)=>{const d=i?.name||"ECO SYSTEM COMPUTER",c=i?.subName||"SOLUTIONS",m=i?.logo&&i.logo!==p,h=i?.logo||p,b=i?.address||"No.14, Mulatiyana junction, Mulatiyana, Matara.",u=i?.phone||"0711453111",g=i?.email||"ecosystemcomputersolutions@gmail.com",s=a=>`LKR ${a.toLocaleString("en-LK",{minimumFractionDigits:2})}`,l=a=>a?new Date(a).toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/").reverse().join("-"):"-",f=a=>{switch(a){case"completed":return"COMPLETED";case"partial":return"PARTIAL RECEIVED";case"pending":return"PENDING";case"rejected":return"REJECTED";default:return a.toUpperCase()}};return e.jsxs("div",{ref:x,className:"print-grn",children:[e.jsx("style",{children:`
          /* ═══════════════════════════════════════════════════════════════
             INK-EFFICIENT B&W PRINT OPTIMIZED - ECO SYSTEM GRN
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
            
            .print-grn {
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
          .print-grn {
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
          .grn-header {
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

          /* TITLE SECTION - NO BACKGROUND */
          .grn-title-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 15px 18px;
            margin-bottom: 15px;
            background: white;
            border: 2px solid #000;
          }

          .grn-title h2 {
            font-size: 18pt;
            font-weight: 700;
            color: #000;
            margin: 0 0 2px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .grn-title .company-label {
            font-size: 8pt;
            color: #000;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .grn-status {
            text-align: right;
          }

          .grn-status .status-badges {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            align-items: center;
            flex-wrap: wrap;
          }

          .grn-status .status-badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            background: white;
            color: #000;
            border: 2px solid #000;
          }

          .grn-status .status-badge.completed {
            background: white;
            color: #000;
            border: 2px solid #000;
          }

          .grn-status .status-badge.pending {
            background: white;
            color: #000;
            border: 2px dashed #000;
          }

          .grn-status .status-badge.partial {
            background: white;
            color: #000;
            border: 2px dotted #000;
          }

          .grn-status .status-badge.rejected {
            background: white;
            color: #000;
            border: 2px double #000;
          }

          /* Payment Status Badges - INK EFFICIENT */
          .grn-status .payment-badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .grn-status .payment-badge.paid {
            background: white;
            color: #000;
            border: 2px solid #000;
          }

          .grn-status .payment-badge.partial-pay {
            background: white;
            color: #000;
            border: 2px solid #000;
          }

          .grn-status .payment-badge.unpaid {
            background: white;
            color: #000;
            border: 2px dashed #000;
          }

          .grn-status .total-amount {
            margin-top: 8px;
            font-size: 16pt;
            font-weight: 700;
            color: #000;
            font-family: 'Consolas', 'Monaco', monospace;
          }

          /* GRN META - Supplier & Details */
          .grn-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 18px;
            gap: 20px;
          }

          .supplier-info {
            flex: 1;
            padding: 12px;
            background: white;
            border: 1px solid #000;
          }

          .supplier-info label {
            font-size: 7pt;
            color: #000;
            font-weight: 700;
            display: block;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #000;
            padding-bottom: 2px;
          }

          .supplier-info .name {
            font-size: 11pt;
            font-weight: 700;
            color: #000;
            margin-bottom: 2px;
          }

          .supplier-info .info {
            font-size: 8pt;
            color: #000;
            line-height: 1.4;
          }

          .grn-details {
            text-align: right;
          }

          .grn-details .row {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            margin-bottom: 4px;
            font-size: 8pt;
          }

          .grn-details .row label {
            color: #000;
            font-weight: 500;
          }

          .grn-details .row .value {
            color: #000;
            font-weight: 600;
            min-width: 100px;
            text-align: right;
          }

          .grn-details .row .value.highlight {
            color: #000;
            font-weight: 700;
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
            width: 35%;
          }

          .items-table tbody tr {
            border-bottom: 1px solid #000;
          }

          .items-table tbody tr:nth-child(even) {
            background: white;
          }

          .items-table tbody td {
            padding: 10px;
            font-size: 9pt;
            color: #000;
            vertical-align: top;
            border-left: 1px solid #000;
            border-right: 1px solid #000;
          }

          .items-table tbody td .product-name {
            font-weight: 600;
            color: #000;
            margin-bottom: 2px;
          }

          .items-table tbody td .product-category {
            font-size: 7pt;
            color: #000;
            font-style: italic;
          }

          .items-table tbody td.text-center {
            text-align: center;
          }

          .items-table tbody td.text-right {
            text-align: right;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 8pt;
          }

          .items-table tbody td .qty-accepted {
            color: #000;
            font-weight: 700;
          }

          .items-table tbody td .qty-rejected {
            color: #000;
            font-weight: 700;
            text-decoration: underline;
          }

          .items-table tbody td .price-original {
            text-decoration: line-through;
            color: #000;
            font-size: 7pt;
            margin-right: 4px;
          }

          .items-table tbody td .price-discounted {
            color: #000;
            font-weight: 700;
          }

          .items-table tbody td .discount-badge {
            display: inline-block;
            background: white;
            color: #000;
            padding: 1px 4px;
            border-radius: 3px;
            font-size: 6pt;
            font-weight: 700;
            margin-left: 4px;
            border: 1px solid #000;
          }

          .items-table tbody td .selling-price-info {
            font-size: 7pt;
            color: #000;
            margin-top: 2px;
            font-style: italic;
          }

          /* Payment Info - NO BACKGROUND */
          .payment-info {
            margin-top: 8px;
            padding: 8px 10px;
            background: white;
            border: 2px solid #000;
            border-radius: 4px;
          }

          .payment-info .payment-label {
            font-size: 7pt;
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 4px;
          }

          .payment-info .payment-detail {
            font-size: 9pt;
            color: #000;
            font-weight: 600;
          }

          .payment-info .payment-status {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 8pt;
            font-weight: 700;
            margin-left: 8px;
            border: 1px solid #000;
            background: white;
            color: #000;
          }

          .payment-info .payment-status.paid {
            background: white;
            color: #000;
            border: 2px solid #000;
          }

          .payment-info .payment-status.unpaid {
            background: white;
            color: #000;
            border: 2px dashed #000;
          }

          .payment-info .payment-status.partial {
            background: white;
            color: #000;
            border: 2px dotted #000;
          }

          /* SUMMARY SECTION */
          .summary-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 18px;
            gap: 25px;
          }

          .quantity-summary {
            flex: 1;
            display: flex;
            gap: 15px;
          }

          .qty-box {
            padding: 10px 15px;
            text-align: center;
            min-width: 80px;
            border: 1px solid #ccc;
            background: #f5f5f5;
          }

          .qty-box.ordered {
            background: #f5f5f5;
            border: 1px solid #ccc;
          }

          .qty-box.received {
            background: #f5f5f5;
            border: 1px solid #ccc;
          }

          .qty-box.accepted {
            background: #f5f5f5;
            border: 1px solid #ccc;
          }

          .qty-box.rejected {
            background: #f5f5f5;
            border: 1px solid #ccc;
          }

          .qty-box .label {
            font-size: 7pt;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 2px;
            color: #555;
          }

          .qty-box .value {
            font-size: 14pt;
            font-weight: 700;
            color: #000;
          }

          .qty-box.ordered .label { color: #555; }
          .qty-box.ordered .value { color: #000; }
          .qty-box.received .label { color: #555; }
          .qty-box.received .value { color: #000; }
          .qty-box.accepted .label { color: #555; }
          .qty-box.accepted .value { color: #000; }
          .qty-box.rejected .label { color: #555; }
          .qty-box.rejected .value { color: #000; }

          .totals-box {
            width: 220px;
          }

          .totals-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            font-size: 8pt;
            border-bottom: 1px solid #eee;
          }

          .totals-row .label {
            color: #555;
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
            font-weight: 600;
            color: #000;
          }

          .totals-row.total .value {
            font-size: 11pt;
            font-weight: 700;
            color: #000;
          }

          /* NOTES SECTION */
          .notes-section {
            background: #fafafa;
            border: 1px solid #ddd;
            padding: 10px 12px;
            margin-bottom: 15px;
          }

          .notes-section h4 {
            font-size: 8pt;
            font-weight: 600;
            color: #000;
            margin: 0 0 6px 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .notes-section p {
            font-size: 8pt;
            color: #444;
            margin: 0;
            line-height: 1.5;
          }

          /* SIGNATURES */
          .signatures-section {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            padding-top: 15px;
          }

          .signature-box {
            text-align: center;
            width: 30%;
          }

          .signature-box .line {
            border-top: 1px solid #000;
            margin-bottom: 5px;
          }

          .signature-box .label {
            font-size: 8pt;
            color: #555;
          }

          /* FOOTER */
          .footer-section {
            border-top: 1px solid #ccc;
            padding-top: 12px;
            margin-top: 20px;
          }

          .footer-section h4 {
            font-size: 7pt;
            font-weight: 600;
            color: #000;
            margin: 0 0 3px 0;
          }

          .footer-section p {
            font-size: 7pt;
            color: #555;
            margin: 0;
            line-height: 1.5;
          }

          .footer-thank-you {
            text-align: center;
            margin-top: 15px;
            padding-top: 12px;
            border-top: 1px solid #333;
            font-size: 9pt;
            color: #000;
            font-weight: 600;
          }

          /* BALANCE DUE BOX - Creative styling */
          .balance-due-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 15px 0;
            padding: 12px 16px;
            border: 2px solid #000;
            border-radius: 0;
            background: white;
          }

          .balance-due-box .balance-label {
            font-size: 11pt;
            font-weight: 700;
            color: #000;
            letter-spacing: 0.5px;
          }

          .balance-due-box .balance-amount {
            font-size: 14pt;
            font-weight: 800;
            color: #000;
            font-family: 'Consolas', 'Monaco', monospace;
          }

          /* FULLY PAID BOX */
          .fully-paid-box {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px 0;
            padding: 10px 16px;
            border: 2px solid #000;
            border-radius: 0;
            background: white;
          }

          .fully-paid-box .paid-label {
            font-size: 12pt;
            font-weight: 700;
            color: #000;
            letter-spacing: 1px;
          }
        `}),e.jsxs("div",{className:"grn-header",children:[e.jsxs("div",{className:"company-section",children:[e.jsx("div",{className:"company-logo",children:m?e.jsx("img",{src:h,alt:"Shop Logo"}):e.jsx("div",{style:{width:"70px",height:"70px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",borderRadius:"12px"},children:e.jsx(N,{style:{width:"40px",height:"40px",color:"white",strokeWidth:2}})})}),e.jsxs("div",{className:"company-info",children:[e.jsx("h1",{children:d}),e.jsx("div",{className:"sub-name",children:c}),e.jsx("div",{className:"details",children:b.split(",").map((a,n,r)=>e.jsxs("span",{children:[a.trim(),n<r.length-1&&e.jsx("br",{})]},n))})]})]}),e.jsxs("div",{className:"contact-box",children:[e.jsx("h3",{children:"Contact information"}),e.jsxs("div",{className:"info",children:[g,e.jsx("br",{}),u]})]})]}),e.jsxs("div",{className:"grn-title-section",children:[e.jsxs("div",{className:"grn-title",children:[e.jsx("h2",{children:"GOODS RECEIVED NOTE"}),e.jsxs("div",{className:"company-label",children:[d," ",c]})]}),e.jsxs("div",{className:"grn-status",children:[e.jsxs("div",{className:"status-badges",children:[e.jsx("span",{className:`status-badge ${t.status}`,children:f(t.status)}),e.jsx("span",{className:`payment-badge ${t.paymentStatus==="paid"?"paid":t.paymentStatus==="partial"?"partial-pay":"unpaid"}`,children:t.paymentStatus==="paid"?"✓ PAID":t.paymentStatus==="partial"?"◐ PARTIAL":"○ UNPAID"})]}),e.jsx("div",{className:"total-amount",children:s(t.totalAmount)})]})]}),e.jsxs("div",{className:"grn-meta",children:[e.jsxs("div",{className:"supplier-info",children:[e.jsx("label",{children:"Supplier:"}),e.jsx("div",{className:"name",children:t.supplierName}),o&&e.jsxs("div",{className:"info",children:[o.email&&e.jsxs(e.Fragment,{children:["Email: ",o.email,e.jsx("br",{})]}),o.phone&&e.jsxs(e.Fragment,{children:["Phone: ",o.phone,e.jsx("br",{})]}),o.address&&e.jsxs(e.Fragment,{children:["Address: ",o.address]})]})]}),e.jsxs("div",{className:"grn-details",children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"GRN Number:"}),e.jsx("span",{className:"value highlight",children:t.grnNumber})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Delivery Note:"}),e.jsx("span",{className:"value",children:t.deliveryNote||"-"})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Order Date:"}),e.jsx("span",{className:"value",children:l(t.orderDate)})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Expected Delivery:"}),e.jsx("span",{className:"value",children:l(t.expectedDeliveryDate)})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Received Date:"}),e.jsx("span",{className:"value",children:l(t.receivedDate)})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Received By:"}),e.jsx("span",{className:"value",children:t.receivedBy||"-"})]}),t.vehicleNumber&&e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Vehicle No:"}),e.jsx("span",{className:"value",children:t.vehicleNumber})]})]})]}),e.jsxs("table",{className:"items-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"30%"},children:"Product"}),e.jsx("th",{style:{width:"12%",textAlign:"right"},children:"Unit Price"}),e.jsx("th",{style:{width:"10%",textAlign:"center"},children:"Ordered"}),e.jsx("th",{style:{width:"10%",textAlign:"center"},children:"Received"}),e.jsx("th",{style:{width:"10%",textAlign:"center"},children:"Accepted"}),e.jsx("th",{style:{width:"10%",textAlign:"center"},children:"Rejected"}),e.jsx("th",{style:{width:"18%",textAlign:"right"},children:"Amount"})]})}),e.jsx("tbody",{children:t.items.map((a,n)=>{const r=(a.discountValue||0)>0,y=a.originalUnitPrice||a.unitPrice;return e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"product-name",children:a.productName}),e.jsx("div",{className:"product-category",children:a.category}),a.sellingPrice&&e.jsxs("div",{className:"selling-price-info",children:["Sell @ ",s(a.sellingPrice)]})]}),e.jsx("td",{className:"text-right",children:r?e.jsxs("div",{children:[e.jsx("span",{className:"price-original",children:s(y)}),e.jsx("span",{className:"price-discounted",children:s(a.unitPrice)}),e.jsxs("span",{className:"discount-badge",children:["-",a.discountType==="percentage"?`${a.discountValue}%`:s(a.discountValue||0)]})]}):s(a.unitPrice)}),e.jsx("td",{className:"text-center",children:a.orderedQuantity}),e.jsx("td",{className:"text-center",children:a.receivedQuantity}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"qty-accepted",children:a.acceptedQuantity})}),e.jsx("td",{className:"text-center",children:e.jsx("span",{className:"qty-rejected",children:a.rejectedQuantity})}),e.jsx("td",{className:"text-right",children:s(a.totalAmount)})]},n)})})]}),e.jsxs("div",{className:"summary-section",children:[e.jsxs("div",{className:"quantity-summary",children:[e.jsxs("div",{className:"qty-box ordered",children:[e.jsx("div",{className:"label",children:"Ordered"}),e.jsx("div",{className:"value",children:t.totalOrderedQuantity})]}),e.jsxs("div",{className:"qty-box received",children:[e.jsx("div",{className:"label",children:"Received"}),e.jsx("div",{className:"value",children:t.totalReceivedQuantity})]}),e.jsxs("div",{className:"qty-box accepted",children:[e.jsx("div",{className:"label",children:"Accepted"}),e.jsx("div",{className:"value",children:t.totalAcceptedQuantity})]}),e.jsxs("div",{className:"qty-box rejected",children:[e.jsx("div",{className:"label",children:"Rejected"}),e.jsx("div",{className:"value",children:t.totalRejectedQuantity})]})]}),e.jsxs("div",{className:"totals-box",children:[e.jsxs("div",{className:"totals-row",children:[e.jsx("span",{className:"label",children:"Sub Total:"}),e.jsx("span",{className:"value",children:s(t.subtotal)})]}),(t.totalDiscount||0)>0&&e.jsxs("div",{className:"totals-row",children:[e.jsx("span",{className:"label",children:"Total Discount:"}),e.jsxs("span",{className:"value",children:["-",s(t.totalDiscount||0)]})]}),t.discountAmount>0&&!t.totalDiscount&&e.jsxs("div",{className:"totals-row",children:[e.jsx("span",{className:"label",children:"Discount:"}),e.jsxs("span",{className:"value",children:["-",s(t.discountAmount)]})]}),t.taxAmount>0&&e.jsxs("div",{className:"totals-row",children:[e.jsx("span",{className:"label",children:"Tax:"}),e.jsx("span",{className:"value",children:s(t.taxAmount)})]}),e.jsxs("div",{className:"totals-row total",children:[e.jsx("span",{className:"label",children:"Grand Total:"}),e.jsx("span",{className:"value",children:s(t.totalAmount)})]}),(t.paidAmount||0)>0&&t.paymentStatus!=="paid"&&e.jsxs("div",{className:"totals-row",children:[e.jsx("span",{className:"label",children:"Paid Amount:"}),e.jsx("span",{className:"value",style:{color:"#059669"},children:s(t.paidAmount||0)})]}),t.paymentMethod&&e.jsxs("div",{className:"payment-info",children:[e.jsx("div",{className:"payment-label",children:"Payment Details"}),e.jsxs("div",{className:"payment-detail",children:[t.paymentMethod.charAt(0).toUpperCase()+t.paymentMethod.slice(1),e.jsx("span",{className:`payment-status ${t.paymentStatus||"unpaid"}`,children:t.paymentStatus==="paid"?"PAID":t.paymentStatus==="partial"?"PARTIAL":"UNPAID"})]})]})]})]}),t.paymentStatus!=="paid"&&t.totalAmount-(t.paidAmount||0)>0&&e.jsxs("div",{className:"balance-due-box",children:[e.jsx("span",{className:"balance-label",children:"⚠️ BALANCE DUE :"}),e.jsx("span",{className:"balance-amount",children:s(t.totalAmount-(t.paidAmount||0))})]}),t.paymentStatus==="paid"&&e.jsx("div",{className:"fully-paid-box",children:e.jsx("span",{className:"paid-label",children:"✓ FULLY PAID"})}),t.notes&&e.jsxs("div",{className:"notes-section",children:[e.jsx("h4",{children:"Notes / Remarks"}),e.jsx("p",{children:t.notes})]}),e.jsxs("div",{className:"signatures-section",children:[e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"label",children:"Received By"})]}),e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"label",children:"Inspected By"})]}),e.jsxs("div",{className:"signature-box",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"label",children:"Approved By"})]})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h4",{children:"Terms & Conditions:"}),e.jsx("p",{children:"All goods received are subject to quality inspection. Rejected items will be returned to the supplier. Any discrepancy must be reported within 24 hours of receipt. This document serves as proof of goods received and must be retained for records and future reference."})]}),e.jsx("div",{className:"footer-thank-you",children:"Thank you for your business partnership!"})]})});v.displayName="PrintableGRN";export{v as P};
