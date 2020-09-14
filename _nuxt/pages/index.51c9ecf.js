(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{313:function(e,r,t){"use strict";t(73);var n=t(23),o=t(301),c=t.n(o),l=t(320),d=t.n(l),f=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams,t=[],e.next=4,c.a.post("http://localhost:3000/dev/".concat(path||""),r,d()()).then((function(e){t=e.data})).catch((function(e){return console.error(e)}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();r.a={post:f}},318:function(e,r,t){"use strict";t(73);var n=t(23),o=t(313),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.post(path));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l={countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/strategies/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},anginaAfterBefore:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/angina/anginaBaseline");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduresPerCenter:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduresPerCenter");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};r.a=l},477:function(e,r,t){e.exports=t.p+"img/CTO_phases.2c1baf5.png"},480:function(e,r,t){"use strict";t.r(r);t(73);var n=t(23),o=t(318),c=t(313),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post(path));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d={latamCtoCenters:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("centers/latamCtoCenters");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},f={name:"index",data:function(){return{countries:null,activeCenters:null,proceduresEnrolled:null,loading:!0}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.latamCtoCenters();case 2:return t=r.sent,e.countries=t.countries.length,e.activeCenters=t.centers.length,r.next=7,o.a.countAll();case 7:e.proceduresEnrolled=r.sent,e.loading=!1;case 9:case"end":return r.stop()}}),r)})))()}},m=t(64),v=t(89),h=t.n(v),w=t(458),R=t(314),x=t(478),y=(t(141),t(174)),C=Object(y.a)("layout"),_=t(132),O=t(311),component=Object(m.a)(f,(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{staticClass:"mx-auto"},[n("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:t(477)}}),e._v(" "),n("v-card-text",[n("p",[e._v("\n        The edges of interventional cardiology have been in constant expansion\n        and chronic total occlusions (CTO) constitute part of the last\n        frontier to be mastered.\n      ")]),e._v(" "),n("p",[e._v("\n        CTO percutaneous coronary interventions (PCI) have been increasingly\n        performed worldwide due to improvements in technique and new device\n        development. This growing interest in CTO PCI derives from the need to\n        revascularize symptomatic patients refractory to medical therapy due\n        to the presence of a CTO and who are not candidates to surgery, and\n        when considering a complete revascularization strategy in patients\n        with more complex anatomies referred to a percutaneous approach.\n      ")]),e._v(" "),n("p",[e._v("\n        The LATAM CTO Registry is the representation of the great work of a\n        community dedicated to improving the knowledge of complex PCI in Latin\n        America. The registry started as an idea in late 2016. After a year of\n        technical development, enrolled the first procedures in Brazil and\n        Argentina in early 2018 and surpassed the thousand procedures mark in\n        the same year.\n      ")]),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[e._v("NUMBER OF ACTIVE CENTERS")]),e._v(" "),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("h2",[n("p",[e._v(e._s(this.activeCenters))])]),e._v(" "),n("p",[e._v("NUMBER OF COUNTRIES")]),e._v(" "),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("h2",[n("p",[e._v(e._s(this.countries))])]),e._v(" "),n("p",[e._v("NUMBER OF PROCEDURES ENROLLED")]),e._v(" "),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("h2",[n("p",[e._v(e._s(this.proceduresEnrolled))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;h()(component,{VCard:w.a,VCardText:R.a,VCol:x.a,VLayout:C,VProgressCircular:_.a,VRow:O.a})}}]);