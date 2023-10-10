/*! For license information please see block-controls.js.LICENSE.txt */
(()=>{var e={184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},728:e=>{"use strict";e.exports={to12Hour:function(e){var t=e<12?"am":"pm";return{hour:(e+11)%12+1,meridiem:t,meridian:t}},to24Hour:function(e){return("am"===(e.meridiem||e.meridian)?0:12)+e.hour%12}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(184),t=n.n(e),r=n(728),o=n.n(r);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function s(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,c=[],i=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw o}}return c}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=wp.components,h=g.ButtonGroup,b=g.Button,v=g.DateTimePicker,p=(g.TextControl,g.CheckboxControl),f=g.Popover,y=g.Tooltip,k=g.SelectControl,C=g.Icon,x=wp.element,_=x.Component,E=x.Fragment,w=x.useState,T=wp.i18n,R=T.__,S=T._x,O=wp.hooks.applyFilters;function j(e){var t=u(w(!1),2),n=t[0],r=t[1],o=function(){r(!n)},a=e.buttonLabel,l=e.dateLabel,c=e.date,i=e.onChangeDate,s=e.onDateClear,d=e.onInvalidDate;return React.createElement(E,null,React.createElement("div",{className:"advgb-advcalendar-control"},React.createElement("label",null,l),React.createElement("div",null,React.createElement(b,{isLink:!0,icon:"calendar",onClick:o},React.createElement(y,{text:R("Change date","advanced-gutenberg")},React.createElement("span",null,c?moment(c).format("MMMM DD YYYY, h:mm a"):a))),c&&React.createElement(b,{icon:"no-alt",className:"advgb-advcalendar-remove-icon",onClick:function(){return s()}}))),n&&React.createElement(f,{className:"advgb-advcalendar-popover",onClose:r.bind(null,!1),resize:!1},React.createElement("label",{className:"advgb-advcalendar-popover-label"},l,React.createElement(b,{icon:"no-alt",className:"advgb-advcalendar-remove-icon",onClick:o})),React.createElement(v,{currentDate:c,onChange:i,is12Hour:!0,isInvalidDate:d})))}function B(e){var t=[{slug:0,label:S("S","Sunday first letter","advanced-gutenberg")},{slug:1,label:R("M","advanced-gutenberg")},{slug:2,label:S("T","Tuesday first letter","advanced-gutenberg")},{slug:3,label:R("W","advanced-gutenberg")},{slug:4,label:S("T","Thursday first letter","advanced-gutenberg")},{slug:5,label:R("F","advanced-gutenberg")},{slug:6,label:S("S","Saturday first letter","advanced-gutenberg")}],n=e.label,r=e.days,o=e.onChangeDays,a=u(w(r),2),l=a[0],c=a[1];function i(e){return l.some((function(t){return t===e}))}return React.createElement(E,null,React.createElement("div",{className:"advgb-checkbox-wrapper"},React.createElement("label",null,n),React.createElement("div",{className:"advgb-checkbox-inline"},t.map((function(e){return React.createElement(p,{label:e.label,checked:i(e.slug),onChange:function(){return function(e){var n;if(i(e))n=l.filter((function(t){return t!==e}));else{var r=t.find((function(t){return t.slug===e}));n=[].concat(s(l),[r.slug])}var a=s(new Set(n));c(a),o&&o(n)}(e.slug)}})})))))}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(d,e);var t,n,r,s,u=(r=d,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(r);if(s){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=u.call(this,e)).state={onChangeTime:null,currentTime:t.props.currentTime||null,hours:null,minutes:null,meridian:"am",onInit:!0},t}return t=d,(n=[{key:"componentWillMount",value:function(){var e=this.state,t=e.onChangeTime,n=e.currentTime,r=e.onInit;this.props.onChangeTime!==t&&this.setState({onChangeTime:this.props.onChangeTime}),this.props.currentTime!==n&&this.setState({currentTime:this.props.currentTime}),n&&n.includes(":")&&r&&this.setState({hours:n.split(":")[0],minutes:n.split(":")[1],meridian:parseInt(n.split(":")[0])>11?"pm":"am",onInit:!1})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=(n.onChangeTime,n.currentTime,this.state),a=r.hours,l=r.minutes,c=r.meridian,i=t.hours,s=t.minutes,u=t.meridian;if(a!==i||l!==s||c!==u){if(!a&&!l)return;a&&!l&&this.setState({minutes:"00"}),l&&!a&&this.setState({hours:"01"});var d="".concat(this.appendZero(o().to24Hour({hour:parseInt(a),meridiem:c})),":").concat(l,":00");this.props.onChangeTime(d)}}},{key:"appendZero",value:function(e){if(!isNaN(e)){var t=parseInt(e);return t>9?t:"0".concat(t)}}},{key:"render",value:function(){var e=this,t=this.state,n=(t.onChangeTime,t.currentTime,t.hours),r=t.minutes,a=t.meridian;return React.createElement(E,null,React.createElement("div",{className:"advgb-advtime-control"},React.createElement("label",null,this.props.label),React.createElement("div",{className:"advgb-advtime-hours-minutes"},React.createElement("input",{type:"text",value:n?this.appendZero(o().to12Hour(parseInt(n)).hour):"",onChange:function(t){var n=Math.max(1,Math.min(12,Number(t.target.value)));e.setState({hours:e.appendZero(n)})},onKeyDown:function(t){var n=Number(t.target.value);"ArrowUp"===t.key&&n<12?e.setState({hours:e.appendZero(n+1)}):"ArrowDown"===t.key&&n>1&&e.setState({hours:e.appendZero(n-1)})},placeholder:"--"}),React.createElement("span",null,":"),React.createElement("input",{type:"text",value:r||"",onChange:function(t){var n=Math.max(0,Math.min(59,Number(t.target.value)));e.setState({minutes:e.appendZero(n)})},onKeyDown:function(t){var n=Number(t.target.value);"ArrowUp"===t.key&&n<59?e.setState({minutes:e.appendZero(n+1)}):"ArrowDown"===t.key&&n>0&&e.setState({minutes:e.appendZero(n-1)})},placeholder:"--"})),React.createElement(h,{className:"advgb-advtime-meridian"},React.createElement(b,{variant:null===a||"am"===a?"primary":"secondary",onClick:function(){e.setState({meridian:"am"})},disabled:!n||!r},R("AM","advanced-gutenberg")),React.createElement(b,{variant:"pm"===a?"primary":"secondary",onClick:function(){e.setState({meridian:"pm"})},disabled:!n||!r},R("PM","advanced-gutenberg"))),n&&r&&React.createElement(b,{className:"advgb-advtime-remove-icon",icon:"no-alt",onClick:function(){e.props.onTimeClear(),e.setState({hours:null,minutes:null,meridian:"am"})}})))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),d}(_);function A(e){var t=e.label,n=e.currentTime,r=e.onChangeTime,o=e.onTimeClear;return React.createElement(P,{label:t,currentTime:n,onChangeTime:r,onTimeClear:o})}function D(e){var t=e.label,n=e.defaultTimezone;return React.createElement(E,null,O("advgb.timezoneControl",React.createElement(E,null,React.createElement("div",{style:{marginTop:10,marginBottom:30}},React.createElement("div",{style:{marginBottom:6}},t,React.createElement("span",{style:{float:"right",marginRight:5}},React.createElement(C,{icon:"lock"}),React.createElement("a",{href:"https://publishpress.com/links/blocks",class:"advgb-pro-ad-btn",target:"_blank"},R("Upgrade to Pro","advanced-gutenberg")))),React.createElement(k,{value:n,options:[{label:n,value:n}],disabled:!0}))),e))}var I=function(e){return e.map((function(e){return e.title}))},F=function(e,t){var n=[];return null!==t&&(n=e.map((function(e){var n=t.find((function(t){return t.slug===e}));return void 0!==n&&n?n.title:e}))),n},N=function(e,t){var n=[];return e.map((function(e){var r=t.find((function(t){return t.title===e}));void 0!==r&&n.push(r.slug)})),n};function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return(t=Z(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Z(r.key),r)}}function Z(e){var t=function(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===K(t)?t:String(t)}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},W(e,t)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}function $(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e,n,r,o,a,l,c){o=wp.blockEditor||wp.editor;var i=n.addFilter,s=e.sprintf,u=e.__,d=r.hasBlockSupport,m=o,g=m.InspectorControls,h=(m.BlockControls,a.DateTimePicker,a.ToggleControl),b=a.PanelBody,v=a.Notice,p=a.FormTokenField,f=a.SelectControl,y=l.createHigherOrderComponent,k=c.Component,C=c.Fragment;if(parseInt(advgbBlocks.block_controls)){var x=["core/freeform","core/legacy-widget","core/widget-area","core/column","advgb/tab","advgb/column"],_=function(){return void 0!==advgb_block_controls_vars.controls&&Object.keys(advgb_block_controls_vars.controls).length>0?advgb_block_controls_vars.controls:[]},E=function(e){return void 0!==e&&e},w=function(e){var t=_(),n=0,r=[];return Object.keys(t).forEach((function(e){E(advgb_block_controls_vars.controls[e])&&r.push(e)})),r.forEach((function(t){R(e,t,"enabled")&&n++})),n>0},T=function(){var e=_(),t=0;return Object.keys(e).map((function(e){E(advgb_block_controls_vars.controls[e])&&t++})),t>0},R=function(e,t,n){if(void 0!==e&&e.length&&e.some((function(e){return e.control===t}))){var r=e.findIndex((function(e){return e.control===t}));return!(r<0)&&$(e)[r][n]}return null};"undefined"!=typeof advgb_block_controls_vars&&void 0!==advgb_block_controls_vars.non_supported&&advgb_block_controls_vars.non_supported.length>0&&(x=[].concat($(x),$(advgb_block_controls_vars.non_supported)),x=$(new Set(x))),i("blocks.registerBlockType","advgb/blockControls",(function(e){return!x.includes(e.name)&&T()&&(e.attributes=Object.assign(e.attributes,{advgbBlockControls:{type:"array",items:{type:"object"},default:[]}})),e}));var S=y((function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(c,t);var n,r,o,a,l=(o=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(o);if(a){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Y(e)}(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call.apply(l,[this].concat($(e)))).state={taxModOptions:[],termOptions:[],searchTermWord:"",initArchive:!0,updateTaxLabels:!1},t.isPost=t.isPost.bind(Y(t)),t}return n=c,r=[{key:"getTermSlugs",value:function(e){var t=this,n=(this.getTaxonomies(),[]);return e.forEach((function(e){var r=t.getTaxonomies(),o=r.findIndex((function(t){return t.slug===e}));r[o].terms.forEach((function(e){n.push(e.slug)}))})),n}},{key:"getTaxonomies",value:function(){return void 0!==advgb_block_controls_vars.taxonomies&&advgb_block_controls_vars.taxonomies.length>0?advgb_block_controls_vars.taxonomies:[]}},{key:"getUserRoles",value:function(){return void 0!==advgb_block_controls_vars.user_roles&&advgb_block_controls_vars.user_roles.length>0?advgb_block_controls_vars.user_roles:[]}},{key:"getTerms",value:function(e){var t=this,n=(this.getTaxonomies(),[]);return e.forEach((function(e){var r=t.getTaxonomies(),o=r.findIndex((function(t){return t.slug===e}));r[o].terms.forEach((function(e){n.push({slug:e.slug,title:"".concat(e.title," (").concat(r[o].title,")")})}))})),n}},{key:"getPages",value:function(){return void 0!==advgb_block_controls_vars.page&&advgb_block_controls_vars.page.length>0?advgb_block_controls_vars.page:[]}},{key:"changeControlKey",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=this.props,o=r.attributes,a=r.setAttributes,l=o.advgbBlockControls,c={control:"schedule",enabled:!0,dateFrom:null,dateTo:null,recurring:!1},i={control:"user_role",enabled:!0,roles:[],approach:"public"},s={control:"archive",enabled:!0,taxonomies:[],approach:"exclude"},u={control:"page",enabled:!0,pages:[],approach:"exclude"},d=!(void 0===l||!l.length),m=!(!d||!l.some((function(t){return t.control===e})));if(m){var g=l.findIndex((function(t){return t.control===e}));if(g<0)return!1;var h=$(l),b=h[g];h[g]="boolean"==typeof b[t]?L(L({},h[g]),{},U({},t,!b[t])):L(L({},h[g]),{},U({},t,n)),a({advgbBlockControls:h})}else if(d&&!m)switch(e){case"schedule":a({advgbBlockControls:[].concat($(l),[c])});break;case"user_role":a({advgbBlockControls:[].concat($(l),[i])});break;case"archive":a({advgbBlockControls:[].concat($(l),[s])});break;case"page":a({advgbBlockControls:[].concat($(l),[u])})}else switch(e){case"schedule":a({advgbBlockControls:[c]});break;case"user_role":a({advgbBlockControls:[i]});break;case"archive":a({advgbBlockControls:[s]});break;case"page":a({advgbBlockControls:[u]})}}},{key:"changeArchiveControl",value:function(e,t){var n=this,r=this.props,o=r.attributes,a=r.setAttributes,l=o.advgbBlockControls,c=[],i=l.findIndex((function(e){return"archive"===e.control}));if(i<0)return!1;var s=$(l);if("taxonomies"===e)t.forEach((function(e){var t=s[i].taxonomies.findIndex((function(t){return t.tax===e}));if(-1===t)c.push({tax:e,terms:[],all:!0});else{var n=s[i].taxonomies[t].terms.length?s[i].taxonomies[t].terms:[];n.length,c.push({tax:e,terms:n,all:!n.length})}})),s[i]=L(L({},s[i]),{},U({},"taxonomies",c)),a({advgbBlockControls:s});else if("terms"===e){var u={},d=this.currentArchiveControl("taxonomies");t.forEach((function(e){var t=n.state.termOptions.find((function(t){return t.slug===e}));void 0===u[t.tax]&&(u[t.tax]=[]),s[i].taxonomies.findIndex((function(e){return e.tax===t.tax})),d.includes(t.tax)&&u[t.tax].push(e)})),Object.keys(u).forEach((function(e){var t=s[i].taxonomies.findIndex((function(t){return t.tax===e}));t>=0&&(s[i].taxonomies[t]={tax:e,terms:u[e],all:!u[e].length})})),d.forEach((function(e){if(!Object.keys(u).includes(e)){var t=s[i].taxonomies.findIndex((function(t){return t.tax===e}));t>=0&&(s[i].taxonomies[t]={tax:e,terms:[],all:!0})}})),a({advgbBlockControls:s})}}},{key:"currentArchiveControl",value:function(e){var t=this.props,n=t.attributes,r=(t.setAttributes,n.advgbBlockControls),o=[],a=R(r,"archive","taxonomies").length?R(r,"archive","taxonomies"):[];return"taxonomies"===e?a.forEach((function(e){o.push(e.tax)})):"terms"===e&&a.forEach((function(e){e.terms.forEach((function(e){o.push(e)}))})),o}},{key:"taxonomiesChanged",value:function(){var e=this,t=this.props.attributes.advgbBlockControls,n=R(t,"archive","terms")?R(t,"archive","terms"):[],r=R(t,"archive","taxonomies")?R(t,"archive","taxonomies"):[];if(n.length){var o=[];n.forEach((function(t){var n=e.state.termOptions.findIndex((function(e){return e.slug===t}));r.includes(e.state.termOptions[n].tax)&&o.push(e.state.termOptions[n].slug)})),this.changeControlKey("archive","terms",o)}this.setState({termOptions:this.state.termOptions.filter((function(t){return e.currentArchiveControl("taxonomies").includes(t.tax)}))}),this.modifyTaxLabels()}},{key:"initArchiveControl",value:function(){var e=this;this.props.attributes.advgbBlockControls,wp.apiFetch({path:wp.url.addQueryArgs("advgb/v1/terms",{taxonomies:this.currentArchiveControl("taxonomies"),ids:this.currentArchiveControl("terms")})}).then((function(t){e.modifyTaxLabels(),e.setState({termOptions:t,initArchive:!1,updateTaxLabels:!1})}))}},{key:"iniTaxLabels",value:function(){var e=[];return this.getTaxonomies().forEach((function(t){e.push({slug:t.slug,title:s(u("All %s terms","advanced-gutenberg"),t.title),singular:t.title})})),e}},{key:"modifyTaxLabels",value:function(){var e=this.props.attributes.advgbBlockControls,t=R(e,"archive","taxonomies").length?R(e,"archive","taxonomies"):[],n=$(this.state.taxModOptions);n.forEach((function(e,r){var o=t.find((function(t){return e.slug===t.tax})),a=L({},n[r]);a.title=s(void 0!==o&&o.terms.length?u("Selected %s terms","advanced-gutenberg"):u("All %s terms","advanced-gutenberg"),a.singular),n[r]=a})),this.setState({taxModOptions:n,updateTaxLabels:!1})}},{key:"searchTerms",value:function(){var e=this,t=this.state,n=t.termOptions,r=t.searchTermWord;this.props.attributes.advgbBlockControls,wp.apiFetch({path:wp.url.addQueryArgs("advgb/v1/terms",{search:r,taxonomies:this.currentArchiveControl("taxonomies")})}).then((function(t){var r=[].concat($(n),$(t));r=Array.from(new Set(r.map((function(e){return e.slug})))).map((function(e){return r.find((function(t){return t.slug===e}))})),e.setState({termOptions:r})}))}},{key:"isPost",value:function(){return wp.data.select("core/editor")&&wp.data.select("core/editor").getCurrentPostId()}},{key:"getTimezoneLabel",value:function(){return void 0!==advgbBlocks.timezone&&advgbBlocks.timezone.length?advgbBlocks.timezone.replace(/_/g," "):u("WordPress settings timezone","advanced-gutenberg")}},{key:"getTimezoneSlug",value:function(){return void 0!==advgbBlocks.timezone&&advgbBlocks.timezone.length?advgbBlocks.timezone:"UTC"}},{key:"componentDidMount",value:function(){this.setState({taxModOptions:this.iniTaxLabels()})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.attributes,o=n.isSelected,a=n.name,l=r.advgbBlockControls,c=e.attributes.advgbBlockControls,i=this.state,s=i.searchTermWord,u=i.initArchive,d=t.searchTermWord;!this.isPost()&&!x.includes(a)&&o&&u&&E(advgb_block_controls_vars.controls.archive)&&R(l,"archive","enabled")&&this.currentArchiveControl("taxonomies").length&&this.currentArchiveControl("terms").length&&this.initArchiveControl(),s!==d&&s.length>2&&this.searchTerms(),!this.isPost()&&E(advgb_block_controls_vars.controls.archive)&&R(l,"archive","enabled")&&(R(c,"archive","taxonomies")!==R(l,"archive","taxonomies")||this.state.updateTaxLabels)&&this.taxonomiesChanged()}},{key:"render",value:function(){var t=this,n=this.props,r=n.attributes,o=(n.setAttributes,r.advgbBlockControls);return[this.props.isSelected&&!x.includes(this.props.name)&&T()&&React.createElement(g,{key:"advgb-bc-controls"},React.createElement(b,{title:u("Block Controls","advanced-gutenberg"),icon:"visibility",initialOpen:!1,className:w(o)?"advgb-feature-icon-active":""},E(advgb_block_controls_vars.controls.schedule)&&React.createElement(C,null,React.createElement(h,{label:u("Schedule","advanced-gutenberg"),help:R(o,"schedule","enabled")?u("Choose when to start showing and/or stop showing this block.","advanced-gutenberg"):"",checked:R(o,"schedule","enabled"),onChange:function(){return t.changeControlKey("schedule","enabled")}}),R(o,"schedule","enabled")&&React.createElement(C,null,React.createElement("div",{style:{marginBottom:30}},React.createElement(j,{buttonLabel:u("Now","advanced-gutenberg"),dateLabel:u("Start showing","advanced-gutenberg"),date:R(o,"schedule","dateFrom"),onChangeDate:function(e){return t.changeControlKey("schedule","dateFrom",e)},onDateClear:function(){return t.changeControlKey("schedule","dateFrom",null)},onInvalidDate:!1}),React.createElement(j,{buttonLabel:u("Never","advanced-gutenberg"),dateLabel:u("Stop showing","advanced-gutenberg"),date:R(o,"schedule","dateTo")?R(o,"schedule","dateTo"):null,onChangeDate:function(e){return t.changeControlKey("schedule","dateTo",e)},onDateClear:function(){return t.changeControlKey("schedule","dateTo",null)},onInvalidDate:function(e){if(R(o,"schedule","dateFrom")){var t=new Date(e.getTime());t.setHours(0,0,0,0);var n=new Date(R(o,"schedule","dateFrom"));return n.setHours(0,0,0,0),t.getTime()<n.getTime()}}}),R(o,"schedule","dateFrom")>R(o,"schedule","dateTo")&&React.createElement(v,{className:"advgb-notice-sidebar",status:"warning",isDismissible:!1},u('"Stop showing" date should be after "Start showing" date!',"advanced-gutenberg")),R(o,"schedule","dateFrom")&&R(o,"schedule","dateTo")&&React.createElement(h,{label:u("Recurring","advanced-gutenberg"),checked:R(o,"schedule","recurring"),onChange:function(){return t.changeControlKey("schedule","recurring")},help:u("If Recurring is enabled, this block will be displayed every year between the selected dates.","advanced-gutenberg")}),React.createElement(B,{label:u("On these days (optional)","advanced-gutenberg"),days:R(o,"schedule","days")?R(o,"schedule","days"):[],onChangeDays:function(e){return t.changeControlKey("schedule","days",e)}}),React.createElement("label",{style:{marginBottom:8,display:"block"}},u("Between these times (optional)","advanced-gutenberg")),React.createElement(A,{label:u("From","advanced-gutenberg"),currentTime:R(o,"schedule","timeFrom")?R(o,"schedule","timeFrom"):null,onChangeTime:function(e){return t.changeControlKey("schedule","timeFrom",e)},onTimeClear:function(){return t.changeControlKey("schedule","timeFrom",null)}}),React.createElement(A,{label:u("To","advanced-gutenberg"),currentTime:R(o,"schedule","timeTo")||null,onChangeTime:function(e){return t.changeControlKey("schedule","timeTo",e)},onTimeClear:function(){return t.changeControlKey("schedule","timeTo",null)}}),R(o,"schedule","timeFrom")&&R(o,"schedule","timeTo")&&"01/01/2020T"+R(o,"schedule","timeFrom")>="01/01/2020T"+R(o,"schedule","timeTo")&&React.createElement(v,{className:"advgb-notice-sidebar",status:"warning",isDismissible:!1},u('"To" time should be after "From" time!',"advanced-gutenberg")),(R(o,"schedule","timeFrom")&&!R(o,"schedule","timeTo")||!R(o,"schedule","timeFrom")&&R(o,"schedule","timeTo"))&&React.createElement(v,{className:"advgb-notice-sidebar",status:"warning",isDismissible:!1},u('Please choose "From" time and "To" time.',"advanced-gutenberg")),React.createElement(D,{label:u("Timezone","advanced-gutenberg"),defaultTimezone:this.getTimezoneLabel(),value:R(o,"schedule","timezone")?R(o,"schedule","timezone"):this.getTimezoneSlug(),onChangeTimezone:function(e){return t.changeControlKey("schedule","timezone",e)}})))),E(advgb_block_controls_vars.controls.user_role)&&React.createElement(C,null,React.createElement(h,{label:u("User roles","advanced-gutenberg"),help:R(o,"user_role","enabled")?u("Choose which users can see this block.","advanced-gutenberg"):"",checked:R(o,"user_role","enabled"),onChange:function(){return t.changeControlKey("user_role","enabled")}}),R(o,"user_role","enabled")&&React.createElement(C,null,React.createElement("div",{className:"advgb-revert-mb"},React.createElement(f,{value:R(o,"user_role","approach"),options:[{value:"public",label:u("Show to everyone","advanced-gutenberg")},{value:"hidden",label:u("Hide from everyone","advanced-gutenberg")},{value:"login",label:u("Show to logged in users","advanced-gutenberg")},{value:"logout",label:u("Show to logged out users","advanced-gutenberg")},{value:"include",label:u("Show to the selected user roles","advanced-gutenberg")},{value:"exclude",label:u("Hide from the selected user roles","advanced-gutenberg")}],onChange:function(e){return t.changeControlKey("user_role","approach",e)}})),("include"===R(o,"user_role","approach")||"exclude"===R(o,"user_role","approach"))&&React.createElement(C,null,React.createElement(p,{multiple:!0,label:u("Select user roles","advanced-gutenberg"),placeholder:u("Search","advanced-gutenberg"),suggestions:I(this.getUserRoles()),maxSuggestions:10,value:F(R(o,"user_role","roles")?R(o,"user_role","roles"):[],this.getUserRoles()),onChange:function(e){t.changeControlKey("user_role","roles",N(e,t.getUserRoles()))},__experimentalExpandOnFocus:!0}),("include"===R(o,"user_role","approach")||"exclude"===R(o,"user_role","approach"))&&!R(o,"user_role","roles").length&&React.createElement(v,{className:"advgb-notice-sidebar",status:"warning",isDismissible:!1,style:{marginBottom:30}},u("Please select at least one user role.","advanced-gutenberg"))))),!this.isPost()&&React.createElement(C,null,E(advgb_block_controls_vars.controls.archive)&&React.createElement(C,null,React.createElement(h,{label:u("Term archives","advanced-gutenberg"),help:R(o,"archive","enabled")?u("Choose on which taxonomies and terms archive pages your blocks can be displayed.","advanced-gutenberg"):"",checked:R(o,"archive","enabled"),onChange:function(){return t.changeControlKey("archive","enabled")}}),R(o,"archive","enabled")&&React.createElement(C,null,React.createElement("div",{className:"advgb-revert-mb--disabled",style:{marginBottom:20}},React.createElement(f,{value:R(o,"archive","approach"),options:[{value:"include",label:u("Show for selected terms","advanced-gutenberg")},{value:"exclude",label:u("Hide for selected terms","advanced-gutenberg")}],onChange:function(e){return t.changeControlKey("archive","approach",e)}})),React.createElement(p,{multiple:!0,label:u("Select taxonomies","advanced-gutenberg"),placeholder:u("Search taxonomies","advanced-gutenberg"),suggestions:I(this.state.taxModOptions||this.getTaxonomies()),maxSuggestions:10,value:F(this.currentArchiveControl("taxonomies"),this.state.taxModOptions||this.getTaxonomies()),onChange:function(e){t.changeArchiveControl("taxonomies",N(e,t.state.taxModOptions||t.getTaxonomies()))},__experimentalExpandOnFocus:!0}),R(o,"archive","taxonomies").length>0&&React.createElement(C,null,React.createElement(p,{multiple:!0,label:u("Filter terms","advanced-gutenberg"),placeholder:u("Search terms","advanced-gutenberg"),suggestions:I(this.state.termOptions),maxSuggestions:10,value:F(this.currentArchiveControl("terms"),this.state.termOptions),onChange:function(e){t.changeArchiveControl("terms",N(e,t.state.termOptions)),t.setState({updateTaxLabels:!0})},onInputChange:function(e){t.setState({searchTermWord:e})},__experimentalShowHowTo:!1}),React.createElement("div",{className:"advgb-revert-mb--disabled components-form-token-field__help",style:{marginBottom:20}},u("Use this filter to apply only to some terms.","advanced-gutenberg"))))),E(advgb_block_controls_vars.controls.page)&&React.createElement(C,null,React.createElement(h,{label:u("Pages","advanced-gutenberg"),help:R(o,"page","enabled")?u("Choose in which pages this block can be displayed.","advanced-gutenberg"):"",checked:R(o,"page","enabled"),onChange:function(){return t.changeControlKey("page","enabled")}}),R(o,"page","enabled")&&React.createElement(C,null,React.createElement("div",{className:"advgb-revert-mb"},React.createElement(f,{value:R(o,"page","approach"),options:[{value:"include",label:u("Show on the selected pages","advanced-gutenberg")},{value:"exclude",label:u("Hide on the selected pages","advanced-gutenberg")}],onChange:function(e){return t.changeControlKey("page","approach",e)}})),("include"===R(o,"page","approach")||"exclude"===R(o,"page","approach"))&&React.createElement(p,{multiple:!0,label:u("Select pages","advanced-gutenberg"),placeholder:u("Search","advanced-gutenberg"),suggestions:I(this.getPages()),maxSuggestions:10,value:F(R(o,"page","pages")?R(o,"page","pages"):[],this.getPages()),onChange:function(e){t.changeControlKey("page","pages",N(e,t.getPages()))},__experimentalExpandOnFocus:!0})))))),React.createElement(e,M({key:"block-edit-advgb-dates"},this.props))]}}],r&&H(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),c}(k)}),"withEditControls");i("editor.BlockEdit","advgb/addBlockControls",S),i("editor.BlockListBlock","advgb/loadBackendBlockControls",y((function(e){return function(n){if(!x.includes(n.name)&&d(n.name,"advgb/blockControls",!0)&&T()){var r=n.attributes.advgbBlockControls,o=!1===n.isSelected&&w(r)?"advgb-bc-editor-preview":"";return React.createElement(e,M({},n,{className:t()(n.className,o),advgbBlockControls:"".concat(r)}))}return React.createElement(e,n)}}),"withAttributes"))}}(wp.i18n,wp.hooks,wp.blocks,wp.blockEditor,wp.components,wp.compose,wp.element)})()})();
//# sourceMappingURL=block-controls.js.map