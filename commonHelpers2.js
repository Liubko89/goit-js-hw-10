import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as s}from"./assets/vendor-651d7991.js";const m=document.querySelector(".form");m.addEventListener("submit",n);function n(o){o.preventDefault();const t=o.target.elements.delay.value,i=o.target.elements.state.value;(()=>new Promise((e,a)=>{setTimeout(()=>{i==="fulfilled"&&e(`✅ Fulfilled promise in ${t}ms`),a(`❌ Rejected promise in ${t}ms`)},t)}))().then(e=>{console.log(e),s.show({theme:"dark",message:`${e}`,messageSize:"16px",messageColor:"white",backgroundColor:"#59A10D",position:"topRight"})}).catch(e=>{console.log(e),s.show({message:`${e}`,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight"})}),o.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map
