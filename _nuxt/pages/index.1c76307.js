(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{320:function(e,t,r){"use strict";var n=r(2),c=(r(7),r(4),r(42),r(303),r(43)),o=(r(47),r(16),r(305),r(73),r(23)),f=(r(142),r(89),r(304)),l=r.n(f),d=r(325),h=r.n(d),m={post:function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(content){var t,r,n,c,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:null,r=o.length>2&&void 0!==o[2]?o[2]:"internao_ndice_arm_1",(n=new URLSearchParams).append("content",content),t&&n.append("fields",t),r&&n.append("events",r),c=[],e.next=9,l.a.post("https://9hufa6124l.execute-api.us-east-1.amazonaws.com/dev/",n,h()()).then((function(e){c=e.data})).catch((function(e){return console.error(e)}));case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.post("metadata"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_={transcribe:function(e,t,form){var r=arguments;return Object(o.a)(regeneratorRuntime.mark((function c(){var o,f,l,d,h;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o=r.length>3&&void 0!==r[3]?r[3]:"radio",c.next=3,v();case 3:return f=c.sent,l=f.body,d=[],l.find((function(e){return e.field_name===t&&e.form_name===form&&e.field_type===o})).select_choices_or_calculations.split("|").forEach((function(e){d.push(Object(n.a)({},e.split(",")[0].trim(),"".concat(e.split(",")[1].trim())))})),h=[],e.forEach((function(e){e.length>2?h.push(e):h.push(Object.values(d.find((function(t){return t[e]})))[0])})),c.abrupt("return",h);case 10:case"end":return c.stop()}}),c)})))()}},w=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.post("record",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x={listAll:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("record_id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,n,o,f,l,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("procedure_date, success_cto1");case 2:for(t=e.sent,r=t.body,n=[],o=[],console.log(r),r.forEach((function(e){var t=Number.parseInt(e.procedure_date.split("-")[0]);t>=2017&&n.push(t)})),(f=Object(c.a)(new Set(n))).forEach((function(e){o.push(r.filter((function(t){return Number.parseInt(t.procedure_date.split("-")[0])===e&&"1"===t.success_cto1})).length),o.push(r.filter((function(t){return Number.parseInt(t.procedure_date.split("-")[0])===e&&"0"===t.success_cto1})).length)})),l=[],i=0;i<o.length;i+=2)l.push((o[i]/(o[i]+o[i+1])*100).toFixed(2));return e.abrupt("return",{years:n,uniqueYears:f,perc:l});case 13:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,n,o,f,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("success_strategy_cto1");case 2:return t=e.sent,r=t.body,n=[],r.forEach((function(e){e.success_strategy_cto1&&n.push(e.success_strategy_cto1)})),o=[],(f=Object(c.a)(new Set(n))).forEach((function(e){return o.push(n.filter((function(t){return e===t})).length)})),e.next=11,_.transcribe(f,"success_strategy_cto1","icp_do_cto","radio");case 11:return l=e.sent,e.abrupt("return",{valuesStrategies:l,countStrategies:o});case 13:case"end":return e.stop()}}),e)})))()},anginaBefore:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,o,f,l,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("angina_status, angina_ccs");case 2:return t=e.sent,r=t.body,o=[],r.forEach((function(e){"1"===e.angina_status?o.push(e.angina_ccs):o.push("SCA / No Symptoms")})),f=Object(c.a)(new Set(o)).sort(),l=[],f.forEach((function(e){l.push((o.filter((function(t){return e===t})).length/o.length*100).toFixed(2))})),e.next=11,_.transcribe(f,"angina_ccs","status_pr_procedimento");case 11:return d=e.sent,data=[],d.forEach((function(e,t){data.push(Object(n.a)({},e,l[t]))})),e.abrupt("return",{valuesAnginaBefore:d,data:data});case 15:case"end":return e.stop()}}),e)})))()},anginaAfter:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,o,f,l,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("angina_outcome, angina_class");case 2:return t=e.sent,r=t.body,o=[],r.forEach((function(e){"1"===e.angina_outcome?o.push(e.angina_class):o.push("SCA / No Symptoms")})),f=Object(c.a)(new Set(o)).sort(),l=[],f.forEach((function(e){l.push((o.filter((function(t){return e===t})).length/o.length*100).toFixed(2))})),e.next=11,_.transcribe(f,"angina_ccs","status_pr_procedimento");case 11:return d=e.sent,data=[],d.forEach((function(e,t){data.push(Object(n.a)({},e,l[t]))})),e.abrupt("return",{valuesAnginaAfter:d,data:data});case 15:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.successfulProceduresPerYear();case 2:return r=t.sent,n=r.years,c=r.uniqueYears,o=[],c.forEach((function(e){o.push(n.filter((function(t){return t===e})).length)})),t.abrupt("return",{countYears:o});case 8:case"end":return t.stop()}}),t)})))()}};t.a=x},481:function(e,t,r){e.exports=r.p+"img/CTO_phases.2c1baf5.png"},484:function(e,t,r){"use strict";r.r(t);r(73);var n=r(23),c=r(320),o=(r(7),r(4),r(42),r(303),r(43)),f=(r(16),r(308),r(304)),l=r.n(f),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,l.a.get("https://spreadsheets.google.com/feeds/list/1lLeHOUvGpVW-JanaVJUvgfYELXBgokA_SOOXiAyqkvA/od6/public/values?alt=json").then((function(e){t=[],e.data.feed.entry.forEach((function(e){var r=e.gsx$centercountry.$t,n=e.gsx$centerid.$t,c=e.gsx$latamctoregistrydagid.$t,o=e.gsx$latitude.$t,f=e.gsx$longitude.$t;t.push({country:r,id:n,registrydagid:c,latitude:o,longitude:f})}))})).catch((function(e){return console.error(e)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h={latamCtoCenters:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],r=[],e.next=4,d();case 4:return e.sent.forEach((function(e){var n=e.country,c=e.latitude,o=e.longitude,f=Number.parseFloat(c),l=Number.parseFloat(o);t.push({lat:f,lng:l}),r.push(n)})),n=Object(o.a)(new Set(r)),c=[],n.forEach((function(e){c.push(r.filter((function(t){return e===t})).length)})),e.abrupt("return",{centers:r,uniqueCenters:n,countCenters:c,coordinatePoints:t});case 10:case"end":return e.stop()}}),e)})))()}},m={name:"index",data:function(){return{countries:null,activeCenters:null,proceduresEnrolled:null,loading:!0}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.listAll();case 2:return r=t.sent,n=r.body,t.next=6,h.latamCtoCenters();case 6:o=t.sent,e.countries=o.uniqueCenters.length,e.activeCenters=o.centers.length,e.proceduresEnrolled=n.length,e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()}},v=r(64),_=r(90),w=r.n(_),x=r(462),y=r(318),O=r(482),R=(r(145),r(177)),E=Object(R.a)("layout"),C=r(135),j=r(316),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{staticClass:"mx-auto"},[n("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:r(481)}}),e._v(" "),n("v-card-text",[n("p",[e._v("\n        The edges of interventional cardiology have been in constant expansion\n        and chronic total occlusions (CTO) constitute part of the last\n        frontier to be mastered.\n      ")]),e._v(" "),n("p",[e._v("\n        CTO percutaneous coronary interventions (PCI) have been increasingly\n        performed worldwide due to improvements in technique and new device\n        development. This growing interest in CTO PCI derives from the need to\n        revascularize symptomatic patients refractory to medical therapy due\n        to the presence of a CTO and who are not candidates to surgery, and\n        when considering a complete revascularization strategy in patients\n        with more complex anatomies referred to a percutaneous approach.\n      ")]),e._v(" "),n("p",[e._v("\n        The LATAM CTO Registry is the representation of the great work of a\n        community dedicated to improving the knowledge of complex PCI in Latin\n        America. The registry started as an idea in late 2016. After a year of\n        technical development, enrolled the first procedures in Brazil and\n        Argentina in early 2018 and surpassed the thousand procedures mark in\n        the same year.\n      ")]),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[e._v("NUMBER OF ACTIVE CENTERS")]),e._v(" "),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("h2",[n("p",[e._v(e._s(this.activeCenters))])]),e._v(" "),n("p",[e._v("NUMBER OF COUNTRIES")]),e._v(" "),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("h2",[n("p",[e._v(e._s(this.countries))])]),e._v(" "),n("p",[e._v("NUMBER OF PROCEDURES ENROLLED")]),e._v(" "),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("h2",[n("p",[e._v(e._s(this.proceduresEnrolled))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VCard:x.a,VCardText:y.a,VCol:O.a,VLayout:E,VProgressCircular:C.a,VRow:j.a})}}]);