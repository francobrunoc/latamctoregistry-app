(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{480:function(e,t,n){e.exports=n.p+"img/CTO_phases.2c1baf5.png"},483:function(e,t,n){"use strict";n.r(t);n(73);var r=n(23),o=n(324),c=(n(7),n(4),n(42),n(303),n(44)),l=(n(16),n(308),n(304)),d=n.n(l),v=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,d.a.get("https://spreadsheets.google.com/feeds/list/1lLeHOUvGpVW-JanaVJUvgfYELXBgokA_SOOXiAyqkvA/od6/public/values?alt=json").then((function(e){t=[],e.data.feed.entry.forEach((function(e){var n=e.gsx$centercountry.$t,r=e.gsx$centerid.$t,o=e.gsx$latamctoregistrydagid.$t,c=e.gsx$latitude.$t,l=e.gsx$longitude.$t;t.push({country:n,id:r,registrydagid:o,latitude:c,longitude:l})}))})).catch((function(e){return console.error(e)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h={latamCtoCenters:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],e.next=4,v();case 4:return e.sent.forEach((function(e){var r=e.country,o=e.latitude,c=e.longitude,l=Number.parseFloat(o),d=Number.parseFloat(c);t.push({lat:l,lng:d}),n.push(r)})),r=Object(c.a)(new Set(n)),o=[],r.forEach((function(e){o.push(n.filter((function(t){return e===t})).length)})),e.abrupt("return",{centers:n,uniqueCenters:r,countCenters:o,coordinatePoints:t});case 10:case"end":return e.stop()}}),e)})))()}},f={name:"index",data:function(){return{countries:null,activeCenters:null,proceduresEnrolled:null,loading:!0}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.listAll();case 2:return n=t.sent,t.next=5,h.latamCtoCenters();case 5:r=t.sent,e.countries=r.uniqueCenters.length,e.activeCenters=r.centers.length,e.proceduresEnrolled=n.length,e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()}},m=n(64),_=n(89),y=n.n(_),C=n(461),w=n(318),x=n(481),O=(n(146),n(177)),E=Object(O.a)("layout"),R=n(135),T=n(316),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[r("v-card",{staticClass:"mx-auto"},[r("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:n(480)}}),e._v(" "),r("v-card-text",[r("p",[e._v("\n        The edges of interventional cardiology have been in constant expansion\n        and chronic total occlusions (CTO) constitute part of the last\n        frontier to be mastered.\n      ")]),e._v(" "),r("p",[e._v("\n        CTO percutaneous coronary interventions (PCI) have been increasingly\n        performed worldwide due to improvements in technique and new device\n        development. This growing interest in CTO PCI derives from the need to\n        revascularize symptomatic patients refractory to medical therapy due\n        to the presence of a CTO and who are not candidates to surgery, and\n        when considering a complete revascularization strategy in patients\n        with more complex anatomies referred to a percutaneous approach.\n      ")]),e._v(" "),r("p",[e._v("\n        The LATAM CTO Registry is the representation of the great work of a\n        community dedicated to improving the knowledge of complex PCI in Latin\n        America. The registry started as an idea in late 2016. After a year of\n        technical development, enrolled the first procedures in Brazil and\n        Argentina in early 2018 and surpassed the thousand procedures mark in\n        the same year.\n      ")]),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[e._v("NUMBER OF ACTIVE CENTERS")]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),r("h2",[r("p",[e._v(e._s(this.activeCenters))])]),e._v(" "),r("p",[e._v("NUMBER OF COUNTRIES")]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),r("h2",[r("p",[e._v(e._s(this.countries))])]),e._v(" "),r("p",[e._v("NUMBER OF PROCEDURES ENROLLED")]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),r("h2",[r("p",[e._v(e._s(this.proceduresEnrolled))])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{VCard:C.a,VCardText:w.a,VCol:x.a,VLayout:E,VProgressCircular:R.a,VRow:T.a})}}]);