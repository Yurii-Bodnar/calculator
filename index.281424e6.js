const t=document.querySelector(".calc-scrin p"),e=document.querySelector(".ac"),n=document.querySelector(".buttons");let c="",o="",r="",s=!1;const i=["0","1","2","3","4","5","6","7","8","9","."],a=["-","+","X","/"];e.addEventListener("click",(function(){c="",o="",r="",s=!1,t.textContent=0,console.log(c,o,r)})),n.addEventListener("click",(function(e){if(!e.target.classList.contains("btn"))return;if(e.target.classList.contains("ac"))return;const n=e.target.textContent;if(t.textContent="",i.includes(n))return""===o&&""===r?(c+=n,t.textContent=c):""!==c&&""!==o&&s?(o=n,s=!1,t.textContent=c):(o+=n,t.textContent=o),void console.log(c,o,r);if(a.includes(n)&&(r=n,t.textContent=r),"="===n){switch(""===o&&(o=c),r){case"+":c=+c+ +o;break;case"-":c=+c-+o;break;case"X":c=+c*+o;break;case"/":if("0"===o)return t.textContent="Error",c="",o="",void(r="");c=+c/+o}s=!0,t.textContent=c}}));
//# sourceMappingURL=index.281424e6.js.map