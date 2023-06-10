var se=Object.defineProperty,oe=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var B=(i,e,n)=>e in i?se(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,P=(i,e)=>{for(var n in e||(e={}))le.call(e,n)&&B(i,n,e[n]);if(j)for(var n of j(e))ue.call(e,n)&&B(i,n,e[n]);return i},k=(i,e)=>oe(i,ae(e));import{d as G,r as de,b as me,w as C,_ as R,o as d,c as p,e as u,f as Y,g as X,h as $,n as U,i as ce,t as x,j as _,k as pe,l as M,m as fe,p as y,q,s as D,u as F,v,F as S,x as w,y as z}from"./app.03d1a66b.js";const L=i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),K=i=>i.replace(/^0+(0$|[^0])/,"$1"),A=(i,e)=>(i.match(new RegExp(L(e),"g"))||[]).length,ge=(i,e)=>i.substring(0,i.indexOf(e));var O=(i=>(i.Currency="currency",i.Decimal="decimal",i.Percent="percent",i.Unit="unit",i))(O||{});const W=i=>i.slice(0,i.map(e=>e.type).indexOf("integer")).map(e=>e.value).join(""),H=i=>{const e=i.map(n=>n.type);return i.slice(Math.max(e.lastIndexOf("integer"),e.indexOf("fraction"))+1).map(n=>n.value).join("")},Z=[",",".","\u066B"],J="(0|[1-9]\\d*)";class he{constructor(e){var f,g,b,E;const n=V=>new Intl.NumberFormat(o,P({currency:l,currencyDisplay:r,unit:a,unitDisplay:m,style:s},V)),{formatStyle:s,currency:l,currencyDisplay:r,unit:a,unitDisplay:m,locale:o,precision:c}=e,t=n({minimumFractionDigits:s!==O.Currency?1:void 0}),h=t.formatToParts(s===O.Percent?1234.56:123456);if(this.locale=o,this.style=s,this.currency=l,this.currencyDisplay=r,this.unit=a,this.unitDisplay=m,this.digits=[0,1,2,3,4,5,6,7,8,9].map(V=>V.toLocaleString(o)),this.decimalSymbol=(f=h.find(({type:V})=>V==="decimal"))==null?void 0:f.value,this.groupingSymbol=(g=h.find(({type:V})=>V==="group"))==null?void 0:g.value,this.minusSymbol=ge(Number(-1).toLocaleString(o),this.digits[1]),this.decimalSymbol===void 0)this.minimumFractionDigits=this.maximumFractionDigits=0;else if(typeof c=="number")this.minimumFractionDigits=this.maximumFractionDigits=c;else if(typeof c=="object")this.minimumFractionDigits=(b=c.min)!=null?b:0,this.maximumFractionDigits=(E=c.max)!=null?E:15;else{const{maximumFractionDigits:V,minimumFractionDigits:I}=new Intl.NumberFormat(o,{currency:l,unit:a,style:s}).resolvedOptions();this.minimumFractionDigits=I,this.maximumFractionDigits=V}this.prefix=W(t.formatToParts(1)),this.suffix=[H(n({minimumFractionDigits:0}).formatToParts(1)),H(t.formatToParts(2))],this.negativePrefix=W(t.formatToParts(-1))}parse(e){if(e){const n=this.isNegative(e);e=this.normalizeDigits(e),e=this.stripPrefixOrSuffix(e),e=this.stripMinusSymbol(e);const s=this.decimalSymbol?`(?:${L(this.decimalSymbol)}(\\d*))?`:"",l=this.stripGroupingSeparator(e).match(new RegExp(`^${J}${s}$`));if(l&&this.isValidIntegerFormat(this.decimalSymbol?e.split(this.decimalSymbol)[0]:e,Number(l[1]))){const r=Number(`${n?"-":""}${this.onlyDigits(l[1])}.${this.onlyDigits(l[2]||"")}`);return this.style===O.Percent?Number((r/100).toFixed(this.maximumFractionDigits+2)):r}}return null}isValidIntegerFormat(e,n){const s={style:this.style,currency:this.currency,currencyDisplay:this.currencyDisplay,unit:this.unit,unitDisplay:this.unitDisplay,minimumFractionDigits:0};return this.style===O.Percent&&(n/=100),[this.stripPrefixOrSuffix(this.normalizeDigits(n.toLocaleString(this.locale,k(P({},s),{useGrouping:!0})))),this.stripPrefixOrSuffix(this.normalizeDigits(n.toLocaleString(this.locale,k(P({},s),{useGrouping:!1}))))].includes(e)}format(e,n={minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits}){return e!=null?new Intl.NumberFormat(this.locale,P({style:this.style,currency:this.currency,currencyDisplay:this.currencyDisplay,unit:this.unit,unitDisplay:this.unitDisplay},n)).format(this.style===O.Percent?e/100:e):""}toFraction(e){return`${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(e.substr(1)).substr(0,this.maximumFractionDigits)}`}isFractionIncomplete(e){return!!this.normalizeDigits(this.stripGroupingSeparator(e)).match(new RegExp(`^${J}${L(this.decimalSymbol)}$`))}isNegative(e){return e.startsWith(this.negativePrefix)||e.replace("-",this.minusSymbol).startsWith(this.minusSymbol)}insertPrefixOrSuffix(e,n){return`${n?this.negativePrefix:this.prefix}${e}${this.suffix[1]}`}stripGroupingSeparator(e){return this.groupingSymbol!==void 0?e.replace(new RegExp(L(this.groupingSymbol),"g"),""):e}stripMinusSymbol(e){return e.replace("-",this.minusSymbol).replace(this.minusSymbol,"")}stripPrefixOrSuffix(e){return e.replace(this.negativePrefix,"").replace(this.prefix,"").replace(this.suffix[1],"").replace(this.suffix[0],"")}normalizeDecimalSeparator(e,n){return Z.forEach(s=>{e=e.substr(0,n)+e.substr(n).replace(s,this.decimalSymbol)}),e}normalizeDigits(e){return this.digits[0]!=="0"&&this.digits.forEach((n,s)=>{e=e.replace(new RegExp(n,"g"),String(s))}),e}onlyDigits(e){return this.normalizeDigits(e).replace(/\D+/g,"")}onlyLocaleDigits(e){return e.replace(new RegExp(`[^${this.digits.join("")}]*`,"g"),"")}}class Q{constructor(e){this.numberFormat=e}}class be extends Q{conformToMask(e,n=""){const s=this.numberFormat.isNegative(e),l=g=>{if(g===""&&s&&n!==this.numberFormat.negativePrefix)return"";if(this.numberFormat.maximumFractionDigits>0){if(this.numberFormat.isFractionIncomplete(g))return g;if(g.startsWith(this.numberFormat.decimalSymbol))return this.numberFormat.toFraction(g)}return null};let r=e;r=this.numberFormat.stripPrefixOrSuffix(r),r=this.numberFormat.stripMinusSymbol(r);const a=l(r);if(a!=null)return this.numberFormat.insertPrefixOrSuffix(a,s);const[m,...o]=r.split(this.numberFormat.decimalSymbol),c=K(this.numberFormat.onlyDigits(m)),t=this.numberFormat.onlyDigits(o.join("")).substr(0,this.numberFormat.maximumFractionDigits),h=o.length>0&&t.length===0,f=c===""&&s&&(n===e.slice(0,-1)||n!==this.numberFormat.negativePrefix);return h||f?n:c.match(/\d+/)?{numberValue:Number(`${s?"-":""}${c}.${t}`),fractionDigits:t}:""}}class ye extends Q{conformToMask(e,n=""){if(e===""||this.numberFormat.parse(n)===0&&this.numberFormat.stripPrefixOrSuffix(n).slice(0,-1)===this.numberFormat.stripPrefixOrSuffix(e))return"";const s=this.numberFormat.isNegative(e),l=this.numberFormat.stripMinusSymbol(e)===""?-0:Number(`${s?"-":""}${K(this.numberFormat.onlyDigits(e))}`)/Math.pow(10,this.numberFormat.maximumFractionDigits);return{numberValue:l,fractionDigits:l.toFixed(this.numberFormat.maximumFractionDigits).slice(-this.numberFormat.maximumFractionDigits)}}}class Ve{constructor(e){this.inputEventListener=n=>{const{value:s,selectionStart:l}=this.el,r=n;if(l&&r.data&&Z.includes(r.data)&&(this.decimalSymbolInsertedAt=l-1),this.format(s),this.focus&&l!=null){const a=()=>{const{prefix:m,suffix:o,decimalSymbol:c,maximumFractionDigits:t,groupingSymbol:h}=this.numberFormat;let f=s.length-l;const g=this.formattedValue.length;if(this.formattedValue.substring(l,1)===h&&A(this.formattedValue,h)===A(s,h)+1)return g-f-1;if(g<f)return l;if(c!==void 0&&s.indexOf(c)!==-1){const b=s.indexOf(c)+1;if(Math.abs(g-s.length)>1&&l<=b)return this.formattedValue.indexOf(c)+1;!this.options.autoDecimalDigits&&l>b&&this.numberFormat.onlyDigits(s.substring(b)).length-1===t&&(f-=1)}if(this.options.hidePrefixOrSuffixOnFocus)return g-f;{const b=N=>(N.includes(o[1])?o[1]:N.includes(o[0])?o[0]:"").length,E=b(s),V=b(this.formattedValue),I=Math.abs(V-E);return Math.max(g-Math.max(f-I,V),m.length)}};this.setCaretPosition(a())}},this.focusEventListener=()=>{this.focus=!0,this.numberValueOnFocus=this.numberValue,setTimeout(()=>{const{value:n,selectionStart:s,selectionEnd:l}=this.el;if(this.format(n,this.options.hideNegligibleDecimalDigitsOnFocus),s!=null&&l!=null&&Math.abs(s-l)>0)this.setCaretPosition(0,this.el.value.length);else if(s!=null){const r=()=>{const{prefix:a,suffix:m,groupingSymbol:o}=this.numberFormat;if(!this.options.hidePrefixOrSuffixOnFocus){const t=m[this.numberValue===1?0:1].length;if(s>=n.length-t)return this.formattedValue.length-t;if(s<a.length)return a.length}let c=s;return this.options.hidePrefixOrSuffixOnFocus&&(c-=a.length),this.options.hideGroupingSeparatorOnFocus&&o!==void 0&&(c-=A(n.substring(0,s),o)),c};this.setCaretPosition(r())}})},this.blurEventListener=()=>{this.focus=!1,this.applyFixedFractionFormat(this.numberValue,this.numberValueOnFocus!==this.numberValue)},this.el=e.el,this.onInput=e.onInput,this.onChange=e.onChange,this.el.addEventListener("input",this.inputEventListener),this.el.addEventListener("focus",this.focusEventListener),this.el.addEventListener("blur",this.blurEventListener),this.init(e.options),this.setValue(this.numberFormat.parse(this.el.value))}destroy(){this.el.removeEventListener("input",this.inputEventListener),this.el.removeEventListener("focus",this.focusEventListener),this.el.removeEventListener("blur",this.blurEventListener)}setOptions(e){this.init(e),this.applyFixedFractionFormat(this.numberValue,!0)}getValue(){return{number:this.options.exportValueAsInteger&&this.numberValue!=null?this.toInteger(this.numberValue):this.numberValue,formatted:this.formattedValue}}setValue(e){const n=this.options.exportValueAsInteger&&e!=null?this.toFloat(e):e;n!==this.numberValue&&this.applyFixedFractionFormat(n)}increment(){var e;this.setValue(((e=this.numberValue)!=null?e:0)+this.step)}decrement(){var e;this.setValue(((e=this.numberValue)!=null?e:0)-this.step)}init(e){this.options=P({autoSign:!0,hideGroupingSeparatorOnFocus:!0,hidePrefixOrSuffixOnFocus:!0,hideNegligibleDecimalDigitsOnFocus:!0},e),this.options.autoDecimalDigits?this.el.setAttribute("inputmode","numeric"):this.el.setAttribute("inputmode","decimal"),this.numberFormat=new he(this.options),this.numberMask=this.options.autoDecimalDigits?new ye(this.numberFormat):new be(this.numberFormat),this.step=e.step&&e.step>0?Math.max(e.step,this.toFloat(1)):this.toFloat(1),this.minValue=this.getMinValue(),this.maxValue=this.getMaxValue()}getMinValue(){var n,s;let e=this.toFloat(-Number.MAX_SAFE_INTEGER);return((n=this.options.valueRange)==null?void 0:n.min)!==void 0&&(e=Math.max((s=this.options.valueRange)==null?void 0:s.min,this.toFloat(-Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&e<0&&(e=0),e=this.getNextStep(e),e}getMaxValue(){var n,s;let e=this.toFloat(Number.MAX_SAFE_INTEGER);return((n=this.options.valueRange)==null?void 0:n.max)!==void 0&&(e=Math.min((s=this.options.valueRange)==null?void 0:s.max,this.toFloat(Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&e<0&&(e=this.toFloat(Number.MAX_SAFE_INTEGER)),e}validateStep(e){return this.toInteger(e)%this.toInteger(this.step)!==0?this.getNextStep(e):e}getNextStep(e){return Math.ceil(e/this.step)*this.step}toFloat(e){return e/Math.pow(10,this.numberFormat.maximumFractionDigits)}toInteger(e){return Number(e.toFixed(this.numberFormat.maximumFractionDigits).split(".").join(""))}validateValueRange(e){return Math.min(Math.max(e,this.minValue),this.maxValue)}applyFixedFractionFormat(e,n=!1){var s;e!=null&&(e=this.validateStep(this.validateValueRange(e)),this.options.formatStyle===O.Percent&&(e*=100)),this.format(this.numberFormat.format(e)),(e!==this.numberValue||n)&&((s=this.onChange)==null||s.call(this,this.getValue()))}format(e,n=!1){var s;if(e!=null){this.decimalSymbolInsertedAt!==void 0&&(e=this.numberFormat.normalizeDecimalSeparator(e,this.decimalSymbolInsertedAt),this.decimalSymbolInsertedAt=void 0);const l=this.numberMask.conformToMask(e,this.formattedValue);let r;if(typeof l=="object"){const{numberValue:a,fractionDigits:m}=l;let{maximumFractionDigits:o,minimumFractionDigits:c}=this.numberFormat;this.focus?c=n?m.replace(/0+$/,"").length:Math.min(o,m.length):Number.isInteger(a)&&!this.options.autoDecimalDigits&&(this.options.precision===void 0||c===0)&&(c=o=0),r=this.toInteger(Math.abs(a))>Number.MAX_SAFE_INTEGER?this.formattedValue:this.numberFormat.format(a,{useGrouping:this.options.useGrouping&&!(this.focus&&this.options.hideGroupingSeparatorOnFocus),minimumFractionDigits:c,maximumFractionDigits:o})}else r=l;this.options.autoSign&&(this.maxValue<=0&&!this.numberFormat.isNegative(r)&&this.numberFormat.parse(r)!==0&&(r=r.replace(this.numberFormat.prefix,this.numberFormat.negativePrefix)),this.minValue>=0&&(r=r.replace(this.numberFormat.negativePrefix,this.numberFormat.prefix))),this.focus&&this.options.hidePrefixOrSuffixOnFocus&&(r=r.replace(this.numberFormat.negativePrefix,this.numberFormat.minusSymbol).replace(this.numberFormat.prefix,"").replace(this.numberFormat.suffix[1],"").replace(this.numberFormat.suffix[0],"")),this.el.value=r,this.numberValue=this.numberFormat.parse(r)}else this.el.value="",this.numberValue=null;this.formattedValue=this.el.value,(s=this.onInput)==null||s.call(this,this.getValue())}setCaretPosition(e,n=e){this.el.setSelectionRange(e,n)}}const xe=G({name:"NumberInput",props:{modelValue:{type:Number,default:null},options:{type:Object,required:!0}},emits:["update:modelValue"],setup(i,{emit:e,attrs:n}){var a;let s;const l=de(null),r=(a=n.modelModifiers)==null?void 0:a.lazy;return me(()=>{l.value&&(s=new Ve({el:l.value,options:i.options,onInput:m=>{r||e("update:modelValue",m.number)},onChange:m=>{r&&e("update:modelValue",m.number)}}),s.setValue(i.modelValue))}),C(()=>i.options,m=>{s.setOptions(m)}),C(()=>i.modelValue,m=>{s.setValue(m)}),{inputRef:l,decrement:()=>s.decrement(),increment:()=>s.increment()}}}),Fe={ref:"inputRef",type:"text"};function De(i,e,n,s,l,r){return d(),p("input",Fe,null,512)}var ee=R(xe,[["render",De]]);const Se={name:"Dialog",props:{modelValue:Boolean},emits:["update:modelValue"]},ve={class:"max-w-md md:relative m-auto p-8 bg-white rounded w-full h-auto shadow"};function we(i,e,n,s,l,r){return n.modelValue?(d(),p("div",{key:0,class:"w-screen h-screen fixed z-50 inset-0 flex bg-gray-600 bg-opacity-50",onClick:e[0]||(e[0]=X(a=>i.$emit("update:modelValue",!1),["self"]))},[u("div",ve,[Y(i.$slots,"default")])])):$("",!0)}var ie=R(Se,[["render",we]]);const Ee=G({name:"Switch",props:{modelValue:Boolean},emits:["update:modelValue"]}),Oe=["aria-checked"];function $e(i,e,n,s,l,r){return d(),p("div",{tabindex:"0",role:"checkbox","aria-checked":i.modelValue,class:"transition-all cursor-pointer flex justify-between items-center rounded-full focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 ring-offset-1",onKeydown:e[0]||(e[0]=ce(X(a=>i.$emit("update:modelValue",!i.modelValue),["prevent"]),["space"])),onClick:e[1]||(e[1]=a=>i.$emit("update:modelValue",!i.modelValue))},[u("div",{class:U(["w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out",{"bg-primary":i.modelValue}])},[u("div",{class:U(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-4":i.modelValue}])},null,2)],2)],40,Oe)}var te=R(Ee,[["render",$e]]);const Re={name:"OptionSection",components:{Switch:te},props:{label:{type:String,required:!0},description:{type:String,default:void 0},modelValue:{type:Boolean,default:void 0}},emits:["update:modelValue"]},Ne={class:"mb-12 min-w-0"},Pe={class:"flex items-center justify-between mb-3"},Ie={class:"text-xl font-medium"},Me={key:0,class:"mb-3"};function _e(i,e,n,s,l,r){const a=te;return d(),p("section",Ne,[u("div",Pe,[u("span",Ie,x(n.label),1),n.modelValue!==void 0?(d(),_(a,{key:0,"model-value":n.modelValue,"onUpdate:modelValue":e[0]||(e[0]=m=>i.$emit("update:modelValue",m))},null,8,["model-value"])):$("",!0)]),n.description?(d(),p("div",Me,x(n.description),1)):$("",!0),Y(i.$slots,"default")])}var ne=R(Re,[["render",_e]]);const Le={name:"Checkbox",props:{modelValue:Boolean,disabled:{type:Boolean,default:!1},label:{type:String,required:!0}},emits:["update:modelValue"]},ke=["checked","disabled"];function Ae(i,e,n,s,l,r){return d(),p("label",{class:U(["flex items-center",{"text-gray-300 cursor-not-allowed":n.disabled,"cursor-pointer":!n.disabled}])},[u("input",{checked:n.modelValue,disabled:n.disabled,type:"checkbox",class:"w-5 h-5 mr-2 rounded rounded border-gray-300 shadow-sm text-primary cursor-pointer focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50",onInput:e[0]||(e[0]=a=>i.$emit("update:modelValue",a.target.checked))},null,40,ke),u("span",null,x(n.label),1)],2)}var re=R(Le,[["render",Ae]]),Ce=function(i){return Object.prototype.toString.call(i)==="[object RegExp]"},Ue=function(i){var e=typeof i;return i!==null&&(e==="object"||e==="function")},T={};Object.defineProperty(T,"__esModule",{value:!0});T.default=i=>Object.getOwnPropertySymbols(i).filter(e=>Object.prototype.propertyIsEnumerable.call(i,e));const Ge=Ce,Te=Ue,je=T.default;var Be=(i,e,n)=>{const s=[];return function l(r,a,m){a=a||{},a.indent=a.indent||"	",m=m||"";let o;a.inlineCharacterLimit===void 0?o={newLine:`
`,newLineOrSpace:`
`,pad:m,indent:m+a.indent}:o={newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=t=>{if(a.inlineCharacterLimit===void 0)return t;const h=t.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return h.length<=a.inlineCharacterLimit?h:t.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),`
`).replace(new RegExp(o.pad,"g"),m).replace(new RegExp(o.indent,"g"),m+a.indent)};if(s.indexOf(r)!==-1)return'"[Circular]"';if(r==null||typeof r=="number"||typeof r=="boolean"||typeof r=="function"||typeof r=="symbol"||Ge(r))return String(r);if(r instanceof Date)return`new Date('${r.toISOString()}')`;if(Array.isArray(r)){if(r.length===0)return"[]";s.push(r);const t="["+o.newLine+r.map((h,f)=>{const g=r.length-1===f?o.newLine:","+o.newLineOrSpace;let b=l(h,a,m+a.indent);return a.transform&&(b=a.transform(r,f,b)),o.indent+b+g}).join("")+o.pad+"]";return s.pop(),c(t)}if(Te(r)){let t=Object.keys(r).concat(je(r));if(a.filter&&(t=t.filter(f=>a.filter(r,f))),t.length===0)return"{}";s.push(r);const h="{"+o.newLine+t.map((f,g)=>{const b=t.length-1===g?o.newLine:","+o.newLineOrSpace,E=typeof f=="symbol",V=!E&&/^[a-z$_][a-z$_0-9]*$/i.test(f),I=E||V?f:l(f,a);let N=l(r[f],a,m+a.indent);return a.transform&&(N=a.transform(r,f,N)),o.indent+String(I)+": "+N+b}).join("")+o.pad+"}";return s.pop(),c(h)}return r=String(r).replace(/[\r\n]/g,t=>t===`
`?"\\n":"\\r"),a.singleQuotes===!1?(r=r.replace(/"/g,'\\"'),`"${r}"`):(r=r.replace(/\\?'/g,"\\'"),`'${r}'`)}(i,e,n)};const ze=G({name:"Demo",components:{NumberInput:ee,Checkbox:re,OptionSection:ne,Dialog:ie},setup(){const i=(n,s)=>Array(s-n).fill(n).map((l,r)=>l+r),e=pe({exportDialogVisible:!1,value:1234.5,formatStyle:"decimal",formatStyleOptions:[{value:"decimal",label:"Decimal"},{value:"currency",label:"Currency"},{value:"unit",label:"Unit"},{value:"percent",label:"Percent"}],localeEnabled:!1,locale:"de-DE",locales:["de-DE","de-CH","en-US","en-IN","nl-NL","sv-SE","fr-FR","es-ES","pt-PT","pt-BR","zh-ZH","ja-JP","ar-SA","fa-IR"],currency:"EUR",currencyDisplay:"symbol",currencies:["EUR","USD","JPY","GBP","BRL","INR","CNY","JPY","SAR","IRR"],currencyDisplays:[{value:"symbol",label:"Symbol"},{value:"narrowSymbol",label:"Narrow symbol"},{value:"code",label:"Code"},{value:"name",label:"Name"}],unit:"byte",unitDisplay:"short",units:["acre","bit","byte","byte-per-second","celsius","centimeter","day","degree","fahrenheit","fluid-ounce","foot","gallon","gigabit","gigabyte","gram","hectare","hour","inch","kilobit","kilobyte","kilogram","kilometer","liter","megabit","megabyte","meter","mile","mile-scandinavian","milliliter","millimeter","millisecond","minute","month","ounce","percent","petabyte","pound","second","stone","terabit","terabyte","week","yard","year"],unitDisplays:[{value:"short",label:"Short"},{value:"narrow",label:"Narrow"},{value:"long",label:"Long"}],hidePrefixOrSuffixOnFocus:!0,hideGroupingSeparatorOnFocus:!0,hideNegligibleDecimalDigitsOnFocusEnabled:!0,hideNegligibleDecimalDigitsOnFocus:!0,precisionEnabled:!1,precisionRangeEnabled:!1,precisionRangeMinValue:2,precisionRangeMaxValue:5,precision:2,precisionOptions:M(()=>i(1,16)),precisionRangeMinOptions:M(()=>i(1,e.precisionRangeMaxValue+1)),precisionRangeMaxOptions:M(()=>i(e.precisionRangeMinValue,16)),valueRangeEnabled:!1,minValue:void 0,maxValue:void 0,autoDecimalDigitsEnabled:!0,autoDecimalDigits:!1,exportValueAsInteger:!1,useGrouping:!0,options:M(()=>({formatStyle:e.formatStyle,locale:e.localeEnabled?e.locale:void 0,currency:e.formatStyle==="currency"?e.currency:void 0,currencyDisplay:e.formatStyle==="currency"?e.currencyDisplay:void 0,unit:e.formatStyle==="unit"?e.unit:void 0,unitDisplay:e.formatStyle==="unit"?e.unitDisplay:void 0,valueRange:e.valueRangeEnabled?{min:e.minValue,max:e.maxValue}:void 0,precision:e.precisionEnabled?e.precisionRangeEnabled?{min:e.precisionRangeMinValue,max:e.precisionRangeMaxValue}:e.precision:void 0,hidePrefixOrSuffixOnFocus:e.hidePrefixOrSuffixOnFocus,hideGroupingSeparatorOnFocus:e.hideGroupingSeparatorOnFocus,hideNegligibleDecimalDigitsOnFocus:e.hideNegligibleDecimalDigitsOnFocus,autoDecimalDigits:e.autoDecimalDigits,exportValueAsInteger:e.exportValueAsInteger,useGrouping:e.useGrouping})),stringifiedOptions:M(()=>Be(e.options))});return C(()=>e.autoDecimalDigits,n=>{e.hideNegligibleDecimalDigitsOnFocusEnabled=!n,e.hideNegligibleDecimalDigitsOnFocus=!n}),fe(e)}}),We={class:"grid gap-y-4 md:grid-cols-2 md:gap-x-8 items-center my-8"},He={class:"ml-2"},Je={class:"flex items-center justify-between mb-2"},Ye=u("span",{class:"text-2xl font-bold"},"Options",-1),Xe={class:"white--text m-0",style:{margin:"0"}},qe=u("hr",{class:"mb-8"},null,-1),Ke={class:"grid grid-cols-1 md:grid-cols-2 gap-x-8"},Ze=["disabled"],Qe=["value"],ei=["value"],ii=["value"],ti={class:"flex items-center space-x-4"},ni=["disabled"],ri=u("span",{class:"text-center"},"to",-1),si=["disabled"],oi={key:0,class:"flex items-center space-x-4"},ai=["disabled"],li=["value"],ui=u("span",{class:"text-center"},"to",-1),di=["disabled"],mi=["value"],ci=["disabled"],pi=["value"];function fi(i,e,n,s,l,r){const a=ee,m=ie,o=ne,c=re;return d(),p(S,null,[u("div",We,[y(a,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),options:i.options,class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},null,8,["modelValue","options"]),u("div",null,[q(" Number value: "),u("code",He,x(i.value!=null?i.value:"null"),1)])]),u("div",Je,[Ye,u("div",null,[u("button",{class:"transition-all bg-white hover:bg-gray-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-300 rounded shadow focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50",onClick:e[1]||(e[1]=t=>i.exportDialogVisible=!0)}," Export "),y(m,{modelValue:i.exportDialogVisible,"onUpdate:modelValue":e[2]||(e[2]=t=>i.exportDialogVisible=t)},{default:D(()=>[u("pre",Xe,x(i.stringifiedOptions),1)]),_:1},8,["modelValue"])])]),qe,u("div",Ke,[u("div",null,[y(o,{modelValue:i.localeEnabled,"onUpdate:modelValue":e[4]||(e[4]=t=>i.localeEnabled=t),label:"Locale"},{default:D(()=>[F(u("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>i.locale=t),disabled:!i.localeEnabled,class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.locales,t=>(d(),p("option",{key:t},x(t),1))),128))],8,Ze),[[v,i.locale]])]),_:1},8,["modelValue"]),y(o,{label:"Format Style"},{default:D(()=>[F(u("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>i.formatStyle=t),class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.formatStyleOptions,t=>(d(),p("option",{key:t.value,value:t.value},x(t.label),9,Qe))),128))],512),[[v,i.formatStyle]])]),_:1}),i.formatStyle==="currency"?(d(),_(o,{key:0,label:"Currency"},{default:D(()=>[F(u("select",{"onUpdate:modelValue":e[6]||(e[6]=t=>i.currency=t),class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.currencies,t=>(d(),p("option",{key:t},x(t),1))),128))],512),[[v,i.currency]])]),_:1})):$("",!0),i.formatStyle==="currency"?(d(),_(o,{key:1,label:"Currency Display",description:"How to display the currency in the formatting."},{default:D(()=>[F(u("select",{"onUpdate:modelValue":e[7]||(e[7]=t=>i.currencyDisplay=t),class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.currencyDisplays,t=>(d(),p("option",{key:t.value,value:t.value},x(t.label),9,ei))),128))],512),[[v,i.currencyDisplay]])]),_:1})):$("",!0),i.formatStyle==="unit"?(d(),_(o,{key:2,label:"Unit"},{default:D(()=>[F(u("select",{"onUpdate:modelValue":e[8]||(e[8]=t=>i.unit=t),class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.units,t=>(d(),p("option",{key:t},x(t),1))),128))],512),[[v,i.unit]])]),_:1})):$("",!0),i.formatStyle==="unit"?(d(),_(o,{key:3,label:"Unit Display",description:"How to display the unit in the formatting."},{default:D(()=>[F(u("select",{"onUpdate:modelValue":e[9]||(e[9]=t=>i.unitDisplay=t),class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.unitDisplays,t=>(d(),p("option",{key:t.value,value:t.value},x(t.label),9,ii))),128))],512),[[v,i.unitDisplay]])]),_:1})):$("",!0),y(o,{modelValue:i.useGrouping,"onUpdate:modelValue":e[10]||(e[10]=t=>i.useGrouping=t),label:"Use Grouping",description:"Whether to use grouping separators such as thousands/lakh/crore separators."},null,8,["modelValue"]),y(o,{label:"Distraction Free Input",description:"Hide various parts of the formatting on focus for easier input."},{default:D(()=>[y(c,{modelValue:i.hidePrefixOrSuffixOnFocus,"onUpdate:modelValue":e[11]||(e[11]=t=>i.hidePrefixOrSuffixOnFocus=t),label:"Hide prefix/suffix",class:"mb-1"},null,8,["modelValue"]),y(c,{modelValue:i.hideGroupingSeparatorOnFocus,"onUpdate:modelValue":e[12]||(e[12]=t=>i.hideGroupingSeparatorOnFocus=t),label:"Hide grouping separator",class:"mb-1"},null,8,["modelValue"]),y(c,{modelValue:i.hideNegligibleDecimalDigitsOnFocus,"onUpdate:modelValue":e[13]||(e[13]=t=>i.hideNegligibleDecimalDigitsOnFocus=t),disabled:!i.hideNegligibleDecimalDigitsOnFocusEnabled,label:"Hide negligible decimal digits"},null,8,["modelValue","disabled"])]),_:1})]),u("div",null,[y(o,{modelValue:i.valueRangeEnabled,"onUpdate:modelValue":e[16]||(e[16]=t=>i.valueRangeEnabled=t),label:"Value Range",description:"The validation is triggered on blur and automatically sets the respective threshold if out of range."},{default:D(()=>[u("div",ti,[F(u("input",{"onUpdate:modelValue":e[14]||(e[14]=t=>i.minValue=t),disabled:!i.valueRangeEnabled,type:"number",placeholder:"Min",class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 min-w-0"},null,8,ni),[[z,i.minValue,void 0,{number:!0}]]),ri,F(u("input",{"onUpdate:modelValue":e[15]||(e[15]=t=>i.maxValue=t),disabled:!i.valueRangeEnabled,type:"number",placeholder:"Max",class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 min-w-0"},null,8,si),[[z,i.maxValue,void 0,{number:!0}]])])]),_:1},8,["modelValue"]),y(o,{modelValue:i.precisionEnabled,"onUpdate:modelValue":e[21]||(e[21]=t=>i.precisionEnabled=t),label:"Precision",description:"Override the number of displayed decimal digits."},{default:D(()=>[u("div",null,[y(c,{modelValue:i.precisionRangeEnabled,"onUpdate:modelValue":e[17]||(e[17]=t=>i.precisionRangeEnabled=t),label:"Use range",disabled:!i.precisionEnabled,class:"mb-2"},null,8,["modelValue","disabled"]),i.precisionRangeEnabled?(d(),p("div",oi,[F(u("select",{"onUpdate:modelValue":e[18]||(e[18]=t=>i.precisionRangeMinValue=t),disabled:!i.precisionEnabled,class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.precisionRangeMinOptions,t=>(d(),p("option",{key:t,value:t},x(t),9,li))),128))],8,ai),[[v,i.precisionRangeMinValue]]),ui,F(u("select",{"onUpdate:modelValue":e[19]||(e[19]=t=>i.precisionRangeMaxValue=t),disabled:!i.precisionEnabled,class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.precisionRangeMaxOptions,t=>(d(),p("option",{key:t,value:t},x(t),9,mi))),128))],8,di),[[v,i.precisionRangeMaxValue]])])):F((d(),p("select",{key:1,"onUpdate:modelValue":e[20]||(e[20]=t=>i.precision=t),disabled:!i.precisionEnabled,class:"shadow-sm rounded-md text-base transition-all disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50 cursor-pointer w-full py-2 px-3"},[(d(!0),p(S,null,w(i.precisionOptions,t=>(d(),p("option",{key:t,value:t},x(t),9,pi))),128))],8,ci)),[[v,i.precision]])])]),_:1},8,["modelValue"]),y(o,{modelValue:i.autoDecimalDigits,"onUpdate:modelValue":e[22]||(e[22]=t=>i.autoDecimalDigits=t),label:"Auto Decimal Digits",description:"Whether the decimal symbol is inserted automatically, using the last inputted digits as decimal digits."},null,8,["modelValue"]),y(o,{modelValue:i.exportValueAsInteger,"onUpdate:modelValue":e[23]||(e[23]=t=>i.exportValueAsInteger=t),label:"Export Value As Integer",description:"Whether the number value should be exported as integer instead of a float value depending on the configured precision."},null,8,["modelValue"])])])],64)}var gi=R(ze,[["render",fi]]);const Fi='{"title":"Playground","description":"","frontmatter":{"sidebar":false},"headers":[],"relativePath":"playground/index.md"}',hi={},bi=u("h1",{id:"playground",tabindex:"-1"},[q("Playground "),u("a",{class:"header-anchor",href:"#playground","aria-hidden":"true"},"#")],-1);function yi(i,e,n,s,l,r){const a=gi;return d(),p("div",null,[bi,y(a)])}var Di=R(hi,[["render",yi]]);export{Fi as __pageData,Di as default};
