var D=i=>Uint8Array.from(i,e=>e.charCodeAt(0)),w=242.64566929133858,y=54/25.4*72,f=[595.28,841.89];function F(i){let e=[];for(let o=0;o<i.length;o+=2){let s=i.slice(o,o+2),n=s.map(({width:a,height:c})=>a>=c?[w,y]:[y,w]),r=36,x=n.reduce((a,[,c])=>a+c,0)+r*(s.length-1),d=(f[1]-x)/2;e.push({width:f[0],height:f[1],items:s.map((a,c)=>{let[p,g]=n[c],t={image:a,x:(f[0]-p)/2,y:f[1]-d-g,w:p,h:g};return d+=g+r,t})})}return R(e)}function _(i){return R(i.map(e=>{let o=842/Math.max(e.width,e.height),s=e.width*o,n=e.height*o;return{width:s,height:n,items:[{image:e,x:0,y:0,w:s,h:n}]}}))}function R(i){let e=[],o=[],s=0,n=t=>{let h=typeof t=="string"?D(t):t;e.push(h),s+=h.length},r=(t,...h)=>{o[t]=s,n(`${t} 0 obj
`),h.forEach(n),n(`
endobj
`)},x=3,d=i.map(t=>{let h=x;return x+=2+t.items.length,{...t,id:h}});n(`%PDF-1.4
`),n(new Uint8Array([37,226,227,207,211,10])),r(1,"<< /Type /Catalog /Pages 2 0 R >>"),r(2,`<< /Type /Pages /Count ${d.length} /Kids [${d.map(t=>`${t.id} 0 R`).join(" ")}] >>`);for(let{id:t,width:h,height:C,items:u}of d){let b=u.map(($,l)=>`/Im${l} ${t+2+l} 0 R`).join(" ");r(t,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${h.toFixed(2)} ${C.toFixed(2)}] /Contents ${t+1} 0 R /Resources << /XObject << ${b} >> >> >>`);let T=u.map(({x:$,y:l,w:m,h:P},j)=>`q ${m.toFixed(2)} 0 0 ${P.toFixed(2)} ${$.toFixed(2)} ${l.toFixed(2)} cm /Im${j} Do Q`).join(`
`);r(t+1,`<< /Length ${T.length} >>
stream
${T}
endstream`),u.forEach(({image:{jpeg:$,width:l,height:m}},P)=>{r(t+2+P,`<< /Type /XObject /Subtype /Image /Width ${l} /Height ${m} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${$.length} >>
stream
`,$,`
endstream`)})}let a=s,c=o.length;n(`xref
0 ${c}
0000000000 65535 f 
`);for(let t=1;t<c;t++)n(`${String(o[t]).padStart(10,"0")} 00000 n 
`);n(`trailer
<< /Size ${c} /Root 1 0 R >>
startxref
${a}
%%EOF
`);let p=new Uint8Array(s),g=0;for(let t of e)p.set(t,g),g+=t.length;return p}export{F as a,_ as b};
