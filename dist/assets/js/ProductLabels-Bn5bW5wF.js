import{r,j as e}from"./vendor-react-BwcC2Ydo.js";import{u as Z,A as v,S as ee}from"./index-DQyL7QrZ.js";import{J as te}from"./vendor-other-SQu4theQ.js";import{u as se}from"./vendor-router-CpYcqQb6.js";import{K as ae,b2 as re,aC as le,ag as y,P as D,a_ as A,x as de,O as ne,aK as ie,aI as oe,ar as ce,T as me,aG as xe,aP as he,X as be}from"./vendor-icons-BIKcqT2E.js";import"./vendor-pdf-Cw62MR9d.js";import"./vendor-radix-CLu8eon7.js";import"./vendor-ui-utils-Dr6D9L7d.js";import"./vendor-query-BOUmJV46.js";import"./vendor-cmdk-p92446dP.js";import"./vendor-date-qW5d3bni.js";const ue=({value:s,width:k=2,height:c=50,displayValue:m=!1,fontSize:i=12})=>{const b=r.useRef(null);return r.useEffect(()=>{if(b.current&&s)try{te(b.current,s,{format:"CODE128",width:k,height:c,displayValue:m,fontSize:i,margin:0,background:"transparent"})}catch(d){console.error("Barcode generation error:",d)}},[s,k,c,m,i]),e.jsx("svg",{ref:b})},O={small:{width:180,height:80,name:"Small (45x20mm)"},medium:{width:240,height:100,name:"Medium (60x25mm)"},large:{width:300,height:130,name:"Large (75x32mm)"},xlarge:{width:380,height:160,name:"X-Large (95x40mm)"}},Pe=()=>{const{theme:s}=Z(),k=se(),c=r.useRef(null),m=r.useRef(null),[i,b]=r.useState(""),[d,N]=r.useState([]),[$,H]=r.useState("medium"),[S,K]=r.useState(!1),[u,Q]=r.useState(!0),[g,G]=r.useState(!0),[p,I]=r.useState(!0),[f,U]=r.useState(!1),[M,R]=r.useState(null),[W,X]=r.useState(35),[o,B]=r.useState(!1),[x,C]=r.useState("products"),_=r.useCallback(t=>{t.preventDefault(),B(!0)},[]),P=r.useCallback(t=>{if(!o||!m.current)return;const a=m.current.getBoundingClientRect(),n=(t.clientX-a.left)/a.width*100;X(Math.min(Math.max(n,25),50))},[o]),L=r.useCallback(()=>{B(!1)},[]);r.useEffect(()=>{if(o)return window.addEventListener("mousemove",P),window.addEventListener("mouseup",L),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",L)}},[o,P,L]);const F=r.useMemo(()=>{if(!i)return v;const t=i.toLowerCase();return v.filter(a=>a.name.toLowerCase().includes(t)||a.serialNumber.toLowerCase().includes(t)||a.barcode&&a.barcode.toLowerCase().includes(t))},[i]),J=v.map(t=>({value:t.id,label:`${t.name} (${t.serialNumber})`})),T=t=>{const a=v.find(l=>l.id===t);if(!a)return;const n=d.find(l=>l.product.id===t);N(n?l=>l.map(h=>h.product.id===t?{...h,quantity:h.quantity+1}:h):l=>[...l,{product:a,quantity:1}])},q=t=>{N(a=>a.filter(n=>n.product.id!==t))},E=(t,a)=>{N(n=>n.map(l=>{if(l.product.id===t){const h=Math.max(1,l.quantity+a);return{...l,quantity:h}}return l}))},V=t=>{navigator.clipboard.writeText(t),R(t),setTimeout(()=>R(null),2e3)},w=d.reduce((t,a)=>t+a.quantity,0),Y=()=>{if(!c.current||d.length===0)return;const t=c.current.innerHTML,a=window.open("","_blank");a&&(a.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Product Labels - Print</title>
          <style>
            @page {
              size: A4;
              margin: 8mm;
            }
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: white;
              padding: 0;
            }
            .labels-container {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
              gap: 8px;
              width: 100%;
            }
            .label {
              border: 1px dashed #ccc;
              border-radius: 8px;
              padding: 8px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: white;
              page-break-inside: avoid;
              min-width: 0;
            }
            .product-name {
              font-weight: 600;
              text-align: center;
              color: #1e293b;
              margin-bottom: 4px;
              line-height: 1.2;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              word-break: break-word;
            }
            .sku-number {
              font-family: 'Courier New', monospace;
              color: #64748b;
              text-align: center;
              margin-bottom: 6px;
              font-size: 10px;
            }
            .barcode-wrapper {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
            }
            .barcode-wrapper svg {
              max-width: 100%;
              height: auto;
            }
            .price-tag {
              font-weight: 700;
              color: #059669;
              margin-top: 4px;
              font-size: 11px;
            }
            @media print {
              @page {
                size: A4;
                margin: 8mm;
              }
              body {
                margin: 0;
                padding: 0;
              }
              .labels-container {
                gap: 6px;
              }
              .label {
                border: 1px dashed #666;
                width: 100%;
              }
              .sku-number {
                font-size: 9px;
              }
              .price-tag {
                font-size: 10px;
              }
            }
          </style>
        </head>
        <body>
          ${t}
        </body>
      </html>
    `),a.document.close(),a.onload=()=>{a.focus(),a.print(),a.close()})},z=O[$],j=(()=>{switch($){case"small":return{name:10,sku:8,price:9,barcodeHeight:30,barcodeWidth:1.2};case"medium":return{name:12,sku:10,price:11,barcodeHeight:40,barcodeWidth:1.5};case"large":return{name:14,sku:11,price:13,barcodeHeight:50,barcodeWidth:1.8};case"xlarge":return{name:16,sku:12,price:15,barcodeHeight:60,barcodeWidth:2}}})();return e.jsxs("div",{className:"h-[calc(100vh-7rem)] flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>k("/products"),className:`p-2 rounded-xl transition-colors ${s==="dark"?"hover:bg-slate-800 text-slate-400 hover:text-white":"hover:bg-slate-100 text-slate-600 hover:text-slate-900"}`,children:e.jsx(ae,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h1",{className:`text-2xl lg:text-3xl font-bold ${s==="dark"?"text-white":"text-slate-900"}`,children:"Print Product Labels"}),e.jsx("p",{className:`mt-1 ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:"Generate and print barcode labels for your products"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("button",{onClick:()=>K(!S),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${S?"bg-emerald-500 text-white":s==="dark"?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:[e.jsx(re,{className:"w-5 h-5"}),e.jsx("span",{className:"hidden sm:inline",children:"Settings"})]}),e.jsxs("button",{onClick:Y,disabled:d.length===0,className:`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all ${d.length===0?"bg-slate-300 text-slate-500 cursor-not-allowed":"bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90"}`,children:[e.jsx(le,{className:"w-5 h-5"}),"Print Labels"]})]})]}),S&&e.jsxs("div",{className:`p-4 rounded-2xl border flex-shrink-0 ${s==="dark"?"bg-slate-800/50 border-slate-700/50":"bg-white border-slate-200"}`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${s==="dark"?"text-white":"text-slate-900"}`,children:"Label Settings"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:"Label Size"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(O).map(([t,a])=>e.jsx("button",{onClick:()=>H(t),className:`px-3 py-2 rounded-lg text-sm font-medium transition-all ${$===t?"bg-emerald-500 text-white":s==="dark"?"bg-slate-700 text-slate-300 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:a.name},t))})]}),e.jsxs("div",{className:"md:col-span-2 lg:col-span-3",children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:"Display Options"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs("label",{className:`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all ${u?s==="dark"?"bg-emerald-500/20 border-emerald-500/50 border":"bg-emerald-50 border-emerald-500 border":s==="dark"?"bg-slate-700/50 border-slate-600 border":"bg-slate-50 border-slate-300 border"}`,children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>Q(t.target.checked),className:"sr-only"}),e.jsx("div",{className:`w-5 h-5 rounded flex items-center justify-center ${u?"bg-emerald-500 text-white":s==="dark"?"bg-slate-600":"bg-slate-200"}`,children:u&&e.jsx(y,{className:"w-3 h-3"})}),e.jsx("span",{className:`text-sm font-medium ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:"Product Name"})]}),e.jsxs("label",{className:`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all ${g?s==="dark"?"bg-emerald-500/20 border-emerald-500/50 border":"bg-emerald-50 border-emerald-500 border":s==="dark"?"bg-slate-700/50 border-slate-600 border":"bg-slate-50 border-slate-300 border"}`,children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>G(t.target.checked),className:"sr-only"}),e.jsx("div",{className:`w-5 h-5 rounded flex items-center justify-center ${g?"bg-emerald-500 text-white":s==="dark"?"bg-slate-600":"bg-slate-200"}`,children:g&&e.jsx(y,{className:"w-3 h-3"})}),e.jsx("span",{className:`text-sm font-medium ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:"SKU Number"})]}),e.jsxs("label",{className:`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all ${p?s==="dark"?"bg-emerald-500/20 border-emerald-500/50 border":"bg-emerald-50 border-emerald-500 border":s==="dark"?"bg-slate-700/50 border-slate-600 border":"bg-slate-50 border-slate-300 border"}`,children:[e.jsx("input",{type:"checkbox",checked:p,onChange:t=>I(t.target.checked),className:"sr-only"}),e.jsx("div",{className:`w-5 h-5 rounded flex items-center justify-center ${p?"bg-emerald-500 text-white":s==="dark"?"bg-slate-600":"bg-slate-200"}`,children:p&&e.jsx(y,{className:"w-3 h-3"})}),e.jsx("span",{className:`text-sm font-medium ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:"Barcode"})]}),e.jsxs("label",{className:`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all ${f?s==="dark"?"bg-emerald-500/20 border-emerald-500/50 border":"bg-emerald-50 border-emerald-500 border":s==="dark"?"bg-slate-700/50 border-slate-600 border":"bg-slate-50 border-slate-300 border"}`,children:[e.jsx("input",{type:"checkbox",checked:f,onChange:t=>U(t.target.checked),className:"sr-only"}),e.jsx("div",{className:`w-5 h-5 rounded flex items-center justify-center ${f?"bg-emerald-500 text-white":s==="dark"?"bg-slate-600":"bg-slate-200"}`,children:f&&e.jsx(y,{className:"w-3 h-3"})}),e.jsx("span",{className:`text-sm font-medium ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:"Price"})]})]})]})]})]}),e.jsxs("div",{className:`flex lg:hidden rounded-xl p-1 flex-shrink-0 ${s==="dark"?"bg-slate-800/50":"bg-slate-100"}`,children:[e.jsxs("button",{onClick:()=>C("products"),className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${x==="products"?"bg-emerald-500 text-white shadow-md":s==="dark"?"text-slate-400":"text-slate-600"}`,children:[e.jsx(D,{className:"w-4 h-4"}),"Select Products",d.length>0&&e.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${x==="products"?"bg-white/20 text-white":s==="dark"?"bg-emerald-500/20 text-emerald-400":"bg-emerald-100 text-emerald-600"}`,children:d.length})]}),e.jsxs("button",{onClick:()=>C("preview"),className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${x==="preview"?"bg-emerald-500 text-white shadow-md":s==="dark"?"text-slate-400":"text-slate-600"}`,children:[e.jsx(A,{className:"w-4 h-4"}),"Label Preview",w>0&&e.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${x==="preview"?"bg-white/20 text-white":s==="dark"?"bg-emerald-500/20 text-emerald-400":"bg-emerald-100 text-emerald-600"}`,children:w})]})]}),e.jsxs("div",{ref:m,className:`flex-1 flex flex-col lg:flex-row min-h-0 gap-0 lg:gap-0 ${o?"select-none":""}`,children:[e.jsx("style",{children:`
          @media (min-width: 1024px) {
            [data-panel="left"] { width: ${W}% !important; }
            [data-panel="right"] { width: ${100-W}% !important; }
          }
          @media (max-width: 1023px) {
            [data-panel="left"], [data-panel="right"] { width: 100% !important; flex: 1 1 0%; }
          }
        `}),e.jsxs("div",{"data-panel":"left",className:`rounded-2xl border flex flex-col overflow-hidden ${x==="products"?"flex":"hidden"} lg:flex ${s==="dark"?"bg-slate-800/30 border-slate-700/50":"bg-white border-slate-200"}`,children:[e.jsxs("div",{className:`p-3 sm:p-4 border-b flex-shrink-0 ${s==="dark"?"border-slate-700/50":"border-slate-200"}`,children:[e.jsxs("h3",{className:`text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2 ${s==="dark"?"text-white":"text-slate-900"}`,children:[e.jsx(D,{className:"w-5 h-5 text-emerald-500"}),"Select Products"]}),e.jsxs("div",{className:`flex items-center gap-2 px-3 py-2 rounded-xl border mb-3 sm:mb-4 ${s==="dark"?"bg-slate-800/50 border-slate-700/50":"bg-slate-50 border-slate-200"}`,children:[e.jsx(de,{className:`w-4 h-4 flex-shrink-0 ${s==="dark"?"text-slate-500":"text-slate-400"}`}),e.jsx("input",{type:"text",placeholder:"Search products...",value:i,onChange:t=>b(t.target.value),className:`bg-transparent border-none outline-none flex-1 text-sm min-w-0 ${s==="dark"?"text-white placeholder-slate-500":"text-slate-900 placeholder-slate-400"}`})]}),e.jsx("div",{className:"w-full",children:e.jsx(ee,{options:J,value:"",onValueChange:t=>{t&&T(t)},placeholder:"Quick add product...",searchPlaceholder:"Search products...",emptyMessage:"No products found",theme:s})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:F.map(t=>{const a=d.some(l=>l.product.id===t.id),n=d.find(l=>l.product.id===t.id);return e.jsx("div",{className:`p-2.5 sm:p-3 border-b transition-colors ${s==="dark"?"border-slate-700/50 hover:bg-slate-800/50":"border-slate-100 hover:bg-slate-50"} ${a?s==="dark"?"bg-emerald-500/10":"bg-emerald-50":""}`,children:e.jsxs("div",{className:"flex items-center justify-between gap-2 sm:gap-3",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:`text-sm font-medium truncate ${s==="dark"?"text-white":"text-slate-900"}`,children:t.name}),e.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1 flex-wrap",children:[e.jsx("span",{className:`text-[10px] sm:text-xs font-mono ${s==="dark"?"text-slate-500":"text-slate-400"}`,children:t.serialNumber}),t.barcode&&e.jsxs("button",{onClick:()=>V(t.barcode),className:`flex items-center gap-1 text-[10px] sm:text-xs px-1.5 py-0.5 rounded ${M===t.barcode?"bg-emerald-500/20 text-emerald-500":s==="dark"?"bg-slate-700/50 text-slate-400 hover:text-white":"bg-slate-100 text-slate-500 hover:text-slate-700"}`,title:"Copy barcode",children:[M===t.barcode?e.jsx(ne,{className:"w-3 h-3"}):e.jsx(ie,{className:"w-3 h-3"}),e.jsx("span",{className:"font-mono hidden sm:inline",children:t.barcode}),e.jsxs("span",{className:"font-mono sm:hidden",children:[t.barcode?.slice(0,8),"..."]})]})]})]}),a?e.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 flex-shrink-0",children:[e.jsx("button",{onClick:()=>E(t.id,-1),className:`w-7 h-7 rounded-lg flex items-center justify-center ${s==="dark"?"bg-slate-700 hover:bg-slate-600 text-white":"bg-slate-200 hover:bg-slate-300 text-slate-700"}`,children:e.jsx(oe,{className:"w-3 h-3"})}),e.jsx("span",{className:`w-6 sm:w-8 text-center text-sm font-semibold ${s==="dark"?"text-white":"text-slate-900"}`,children:n?.quantity||0}),e.jsx("button",{onClick:()=>E(t.id,1),className:`w-7 h-7 rounded-lg flex items-center justify-center ${s==="dark"?"bg-slate-700 hover:bg-slate-600 text-white":"bg-slate-200 hover:bg-slate-300 text-slate-700"}`,children:e.jsx(ce,{className:"w-3 h-3"})}),e.jsx("button",{onClick:()=>q(t.id),className:"w-7 h-7 rounded-lg flex items-center justify-center bg-red-500/10 text-red-500 hover:bg-red-500/20",children:e.jsx(me,{className:"w-3 h-3"})})]}):e.jsx("button",{onClick:()=>{T(t.id)},className:"px-3 py-1.5 rounded-lg text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors flex-shrink-0",children:"Add"})]})},t.id)})})]}),e.jsx("div",{onMouseDown:_,className:`hidden lg:flex w-3 cursor-col-resize items-center justify-center transition-colors flex-shrink-0 mx-1 rounded-full ${o?"bg-emerald-500":s==="dark"?"bg-slate-700 hover:bg-emerald-500/50":"bg-slate-200 hover:bg-emerald-500/50"}`,children:e.jsx(xe,{className:`w-4 h-4 ${o?"text-white":"text-slate-400"}`})}),e.jsxs("div",{"data-panel":"right",className:`rounded-2xl border flex flex-col overflow-hidden ${x==="preview"?"flex":"hidden"} lg:flex ${s==="dark"?"bg-slate-800/30 border-slate-700/50":"bg-white border-slate-200"}`,children:[e.jsxs("div",{className:`p-3 sm:p-4 border-b flex items-center justify-between flex-shrink-0 ${s==="dark"?"border-slate-700/50":"border-slate-200"}`,children:[e.jsxs("h3",{className:`text-base sm:text-lg font-semibold flex items-center gap-2 ${s==="dark"?"text-white":"text-slate-900"}`,children:[e.jsx(A,{className:"w-5 h-5 text-emerald-500"}),"Label Preview"]}),w>0&&e.jsxs("span",{className:`px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${s==="dark"?"bg-emerald-500/20 text-emerald-400":"bg-emerald-100 text-emerald-600"}`,children:[w," ",w===1?"Label":"Labels"]})]}),d.length===0?e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 sm:p-8",children:[e.jsx("div",{className:`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 ${s==="dark"?"bg-slate-800":"bg-slate-100"}`,children:e.jsx(he,{className:`w-8 h-8 sm:w-10 sm:h-10 ${s==="dark"?"text-slate-600":"text-slate-400"}`})}),e.jsx("p",{className:`text-base sm:text-lg font-medium text-center ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:"No products selected"}),e.jsx("p",{className:`text-xs sm:text-sm mt-1 text-center ${s==="dark"?"text-slate-500":"text-slate-400"}`,children:"Select products from the list to generate labels"}),e.jsx("button",{onClick:()=>C("products"),className:"lg:hidden mt-4 px-4 py-2 bg-emerald-500 text-white text-sm rounded-xl font-medium hover:bg-emerald-600 transition-colors",children:"Browse Products"})]}):e.jsxs("div",{className:"flex-1 flex flex-col p-3 sm:p-4 overflow-hidden",children:[e.jsx("div",{className:`flex-1 p-3 sm:p-6 rounded-xl overflow-auto ${s==="dark"?"bg-slate-900/50":"bg-slate-50"}`,children:e.jsx("div",{ref:c,children:e.jsx("div",{className:"labels-container grid gap-2 sm:gap-3",style:{gridTemplateColumns:`repeat(auto-fill, minmax(${Math.min(z.width,160)}px, 1fr))`},children:d.flatMap(t=>Array.from({length:t.quantity}).map((a,n)=>e.jsxs("div",{className:"label bg-white rounded-lg border border-dashed border-slate-300 flex flex-col items-center justify-center p-2",style:{width:"100%",maxWidth:z.width,height:z.height},children:[u&&e.jsx("div",{className:"product-name text-slate-900 text-center font-semibold leading-tight mb-1",style:{fontSize:j.name,maxWidth:"100%",overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:t.product.name}),g&&e.jsxs("div",{className:"sku-number text-slate-500 font-mono mb-1",style:{fontSize:j.sku},children:["SKU: ",t.product.serialNumber]}),p&&t.product.barcode&&e.jsx("div",{className:"barcode-wrapper w-full flex justify-center",children:e.jsx(ue,{value:t.product.barcode,width:j.barcodeWidth,height:j.barcodeHeight})}),f&&e.jsxs("div",{className:"price-tag text-emerald-600 font-bold mt-1",style:{fontSize:j.price},children:["Rs. ",t.product.price.toLocaleString("en-LK")]})]},`${t.product.id}-${n}`)))})})}),e.jsxs("div",{className:`mt-3 sm:mt-4 pt-3 sm:pt-4 space-y-2 flex-shrink-0 border-t ${s==="dark"?"border-slate-700/50":"border-slate-200"}`,children:[e.jsxs("h4",{className:`text-xs sm:text-sm font-medium ${s==="dark"?"text-slate-400":"text-slate-600"}`,children:["Selected (",d.length,")"]}),e.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2 max-h-20 sm:max-h-24 overflow-y-auto",children:d.map(t=>e.jsxs("div",{className:`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg ${s==="dark"?"bg-slate-800":"bg-slate-100"}`,children:[e.jsx("span",{className:`text-xs sm:text-sm font-medium truncate max-w-[100px] sm:max-w-[150px] ${s==="dark"?"text-white":"text-slate-900"}`,children:t.product.name}),e.jsxs("span",{className:`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0 ${s==="dark"?"bg-emerald-500/20 text-emerald-400":"bg-emerald-100 text-emerald-600"}`,children:["×",t.quantity]}),e.jsx("button",{onClick:()=>q(t.product.id),className:"p-0.5 sm:p-1 rounded hover:bg-red-500/20 text-red-500 flex-shrink-0",children:e.jsx(be,{className:"w-3 h-3"})})]},t.product.id))})]})]})]})]})]})};export{Pe as ProductLabels,Pe as default};
