(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{440:function(e,t,r){"use strict";r.r(t),r.d(t,"amplify_photo_picker",(function(){return c}));var o=r(18),n=r(454),l=r(489),c=function(){function e(e){var t=this;Object(o.k)(this,e),this.headerTitle=l.a.PHOTO_PICKER_TITLE,this.headerHint=l.a.PHOTO_PICKER_HINT,this.placeholderHint=l.a.PHOTO_PICKER_PLACEHOLDER_HINT,this.buttonText=l.a.PHOTO_PICKER_BUTTON_TEXT,this.handleClick=function(){},this.handleInput=function(e){t.file=e.target.files[0];var r=new FileReader;r.onload=function(e){var o=r.result;t.previewState=o},r.readAsDataURL(t.file)}}return e.prototype.componentWillLoad=function(){this.previewState=this.previewSrc},e.prototype.render=function(){var e=this;return Object(o.i)("div",{class:"photo-picker-container"},Object(o.i)("amplify-section",null,Object(o.i)("div",{class:"header"},n.a.get(this.headerTitle)),Object(o.i)("div",{class:"header-hint"},n.a.get(this.headerHint)),Object(o.i)("amplify-picker",{acceptValue:"image/*",inputHandler:this.handleInput},Object(o.i)("div",{class:"picker-body",slot:"picker"},this.previewState?Object(o.i)("img",{src:""+this.previewState}):Object(o.i)("amplify-icon",{name:"photoPlaceholder"}))),Object(o.i)("div",{class:"placeholder-hint"},n.a.get(this.placeholderHint)),Object(o.i)("amplify-button",{handleButtonClick:function(){return e.handleClick(e.file)}},n.a.get(this.buttonText))))},e}();c.style=":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}"}}]);