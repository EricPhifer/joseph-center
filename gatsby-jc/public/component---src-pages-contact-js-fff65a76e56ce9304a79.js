(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Cuy+":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n=t("q1tI"),r=t.n(n),l=t("vOnD"),m=t("Wbzz"),o=t("PzxD"),i=t("EYWl"),c=t("ot8U"),s=t("LylO"),d=l.b.div.withConfig({displayName:"contact__ContactStyles",componentId:"sc-18dptur-0"})(["max-width:1200px;margin:0 auto;.twoColContainer{display:-ms-grid;display:grid;grid-template-columns:repeat(6,minmax(auto,1fr));gap:1rem;max-width:1200px;margin:0 3rem;place-content:center;@media only screen and (max-width:667px){grid-template-columns:minmax(auto,1fr);grid-template-rows:auto;}}.twoCol,.firstCol,.secondCol{input,textarea,button{width:100%;}}.twoCol{-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1 / span 2;}.firstCol{-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1 / span 2;p{font-size:1.5rem;}a[href^='tel:']{text-decoration:none;color:var(--gold);}.space1{padding:1rem 0;}.space3{padding:3rem 0;}.indent{padding-left:1rem;}.buttonesque{padding:20px 40px;background-color:var(--darkgreen);color:var(--white);border-radius:5px;text-decoration:none;}@media only screen and (max-width:350px){-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1 / span 2;}}.secondCol{-ms-grid-column:2;-ms-grid-column-span:4;grid-column:3 / span 4;@media only screen and (max-width:350px){-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1 / span 2;}}@media only screen and (max-width:667px){h1{text-align:center;}.twoColContainer{margin:0;}.firstCol{grid-column:1;text-align:center;}.secondCol{grid-column:1;margin-top:3rem;}}.oneColContainer{display:grid;grid-template-columns:minmax(auto,1fr);gap:1rem;margin:0 auto;padding:2rem 0;place-content:center;}.oneCol{margin:0.5rem 0 3rem 0;}.mapContainer{max-width:1200px;margin:0 auto;.oneCol{height:auto;border:none;iframe{width:100%;border:0;}}}@media only screen and (max-width:400px){p{padding:0 1.2rem;font-size:1.2rem;}}"]),p=l.b.div.withConfig({displayName:"contact__FormStyles",componentId:"sc-18dptur-1"})(["@media only screen and (max-width:646px){padding:0 0.5rem;}#container{display:block;margin:0 auto;border:none;legend{font-size:3rem;}}.formFields{padding:1rem 0;input,textarea,select{width:100%;}select{width:103%;}input,textarea,select{padding:1rem;}label{line-height:2;font-size:2rem;}button{width:103%;height:65px;background-color:var(--gold);box-shadow:none;}@media only screen and (max-width:754px){label{font-size:1.5rem;}}}"]);function u(e){var a=e.data,t=a.images.nodes,n=a.programs.nodes,l=Object(c.a)({name:"",email:"",program:"",message:""}),u=l.values,g=l.updateValue,h=Object(s.a)({values:u}),E=(h.contact,h.error,h.loading,h.errMessage);h.submitContact;return E?r.a.createElement("p",null,E):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:"Contact Us"}),r.a.createElement(d,null,r.a.createElement("div",{className:"heroImg oneColContainer"},r.a.createElement("div",{className:"oneCol"},r.a.createElement(o.a,Object.assign({},t[0].image,{alt:t[0].title,style:{objectFit:"cover",auto:"format"}})))),r.a.createElement("h1",null,"Contact Us"),r.a.createElement("hr",null),r.a.createElement("div",{className:"twoColContainer"},r.a.createElement("div",{className:"twoCol firstCol"},r.a.createElement("h3",{className:"leadHeader"},"Department Contacts:"),r.a.createElement("br",null),r.a.createElement("div",{className:"phoneContacts indent"},r.a.createElement("h4",{className:"deptHeader"},"Day Shelter"),r.a.createElement("a",{href:"tel:9703149424"},"970-314-9424")),r.a.createElement("div",{className:"space1"}),r.a.createElement("div",{className:"phoneContacts indent"},r.a.createElement("h4",{className:"deptHeader"},"Main Office"),r.a.createElement("a",{href:"tel:9702454672"},"970-245-4672")),r.a.createElement("div",{className:"space1"}),r.a.createElement("div",{className:"phoneContacts indent"},r.a.createElement("h4",{className:"deptHeader"},"Payee Office"),r.a.createElement("a",{href:"tel:9702454672;ext=304"},"970-245-4672 x 304")),r.a.createElement("div",{className:"space1"}),r.a.createElement("h3",{className:"leadHeader"},"We're located at:"),r.a.createElement("p",{className:"indent"},"2511 Belford Ave #B ",r.a.createElement("br",null),"Grand Junction, CO 81501"),r.a.createElement("div",{className:"space3"}),r.a.createElement(m.a,{to:"/volunteer",className:"buttonesque"},"Volunteer")),r.a.createElement("div",{className:"twoCol secondCol"},r.a.createElement(p,null,r.a.createElement("form",{name:"contact",id:"formContainer",method:"POST","netlify-honeypot":"bot-field","data-netlify":"true","data-netlify-recaptcha":"true"},r.a.createElement("input",{type:"hidden",name:"bot-field"}),r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("fieldset",{id:"container"},r.a.createElement("legend",null,"Send Us a Message"),r.a.createElement("div",{id:"nameContainer",className:"formFields"},r.a.createElement("label",{htmlFor:"name",className:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:u.name,onChange:g,placeholder:"Name",required:!0})),r.a.createElement("div",{id:"emailContainer",className:"formFields"},r.a.createElement("label",{htmlFor:"email",className:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",value:u.email,onChange:g,placeholder:"Email",required:!0})),r.a.createElement("div",{id:"programDropdown",className:"formFields"},r.a.createElement("label",{htmlFor:"program",className:"programChoice"},"What program are you interested in?"),r.a.createElement("select",{type:"program",name:"program",id:"program",value:u.program,onChange:g},r.a.createElement("option",{value:"nopreference"},"No Preference"),n.map((function(e){return r.a.createElement("option",{key:e.id,value:e.title},e.title)})))),r.a.createElement("div",{id:"messageContainer",className:"formFields"},r.a.createElement("label",{htmlFor:"message",className:"message"},"Message"),r.a.createElement("textarea",{name:"message",id:"message",value:u.message,onChange:g,rows:"5",placeholder:"How can we help?",required:!0})),r.a.createElement("div",{className:"formFields"},r.a.createElement("div",{className:"g-recaptcha recaptcha","data-sitekey":"[insert-data-key-here]"})),r.a.createElement("div",{id:"submitContainer",className:"formFields"},r.a.createElement("button",{type:"submit"},"Send"))))))),r.a.createElement("div",{className:"oneColContainer mapContainer"},r.a.createElement("div",{className:"oneCol"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.3718935437328!2d-108.53881734867191!3d39.07522597944315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471c3ce2d286e7%3A0x23757e61c34a1bb9!2s2511%20Belford%20Ave%2C%20Grand%20Junction%2C%20CO%2081501!5e0!3m2!1sen!2sus!4v1634039908188!5m2!1sen!2sus",height:"450",allowFullScreen:"",loading:"lazy",title:"Joseph Center Location"})))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-fff65a76e56ce9304a79.js.map