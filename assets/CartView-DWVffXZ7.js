import{c as b}from"./cartStore-C09GWIBc.js";import{a as C,_ as x,o as a,c as n,b as t,e as m,x as k,m as V,d as _,w,g as f,F as h,v,t as i,A as y,B as g,r as p}from"./index-DngF0qHh.js";import{m as T}from"./modalMixins-Duqc8mcG.js";import{V as E}from"./VueLoading-EhICzw3E.js";import"./index-CMZrOp_O.js";var L={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-projectV3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:M,VITE_APP_PATH:D}=L,R={data(){return{modal:null}},methods:{...C(b,["getCart"]),delAllCart(){const o=`${M}/api/${D}/carts`;this.$http.delete(o).then(s=>{s.data.success&&(this.hideModal(),this.getCart())}).catch(s=>{s.response.data.message&&this.$swal("失敗","刪除產品失敗","error")})}},mixins:[T]},I={class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"myModal"},U={class:"modal-dialog",role:"document"},j={class:"modal-content"},B=k('<div class="modal-header bg-primary"><h5 class="modal-title text-light" id="exampleModalLabel">刪除所有產品</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body text-center"><i class="bi bi-exclamation-triangle-fill text-secondary" style="font-size:4rem;"></i><p>確定刪除所有產品品項嗎?</p></div>',2),S={class:"modal-footer mx-auto"},N=t("button",{type:"button",class:"btn btn-dark","data-bs-dismiss":"modal"},"取消",-1);function q(o,s,d,A,c,l){return a(),n("div",I,[t("div",U,[t("div",j,[B,t("div",S,[N,t("button",{type:"button",class:"btn btn-primary",onClick:s[0]||(s[0]=m((...u)=>l.delAllCart&&l.delAllCart(...u),["prevent"]))},"確定")])])])],512)}const O=x(R,[["render",q]]);var H={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-projectV3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:Q,VITE_APP_PATH:F}=H,z={components:{DelAllCartModal:O,VueLoading:E},data(){return{isAddOrDelNum:!1,cartData:{},coupon:"happy",isLoading:!1}},computed:{...V(b,["carts","totalPrice"])},methods:{...C(b,["getCart","delCartProduct","delAllCart","updateQty"]),addCoupon(){const o=`${Q}/api/${F}/coupon`,s={code:this.coupon};this.$http.post(o,{data:s}).then(d=>{d.data.success&&(this.$swal("成功","成功加入優惠券","success"),this.getCart())}).catch(d=>{d.response.data.message&&this.$swal("失敗","找不到優惠券","error")})},delAllCart(){if(this.carts.length===0){this.$swal("失敗","購物車內無任何產品","error");return}this.$refs.delAllCartModal.showModal()},toCheckout(){this.$router.push("/checkout")}},mounted(){this.getCart(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1e3)}},G={class:"layoutBanner mb-md-5 mb-3"},J={class:"container"},K={class:"row justify-content-center my-auto"},W={class:"col-md-4 text-center layout-Banner-Text"},X=t("h2",{class:"fw-bold mb-3 text-light h1"},"購物車",-1),Y={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},Z={class:"breadcrumb d-flex justify-content-center"},tt={class:"breadcrumb-item"},et=t("li",{class:"breadcrumb-item text-light","aria-current":"page"},"購物車",-1),st={key:0,class:"container"},ot={class:"row justify-content-center"},lt={class:"col-md-8"},at={class:"border text-center py-3 rounded",style:{"box-shadow":"0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"}},nt=t("h3",{class:"mb-3"},"購物車清單",-1),it=t("i",{class:"bi bi-box-seam h1 mb-3 d-block"},null,-1),dt=t("p",{class:"mb-3"},"目前購物車內無產品，請先選購!",-1),ct=t("button",{type:"button",class:"btn"},"開始購物",-1),rt={key:1,class:"container"},ut={class:"row mb-md-5 mb-3"},_t={class:"col-md-8"},ht={class:"table border"},pt=t("thead",null,[t("tr",null,[t("th"),t("th",null,"產品"),t("th",null,"單價"),t("th",{class:"table-qty-width"},"數量"),t("th",{class:"text-end"},"總價")])],-1),bt={style:{"line-height":"38px"}},mt={class:"text-center"},ft=["onClick"],vt=t("i",{class:"bi bi-trash"},null,-1),yt=[vt],gt={class:"d-flex align-items-center"},Ct=["src"],xt={class:"mt-2 mt-lg-0 table-cart-font"},At={class:"text-primary table-cart-font"},Pt={class:"bg-light d-flex"},$t=["onClick"],kt=t("i",{class:"bi bi-dash"},null,-1),Vt=[kt],wt=["onUpdate:modelValue"],Tt=["onClick"],Et=t("i",{class:"bi bi-plus"},null,-1),Lt=[Et],Mt={class:"text-primary text-end table-cart-font"},Dt={class:"text-end custom-btn-primary"},Rt=["disabled"],It={class:"col-md-4 mt-4 mt-md-0"},Ut={class:"d-flex justify-content-between custom-btn-dark"},jt=t("h2",{class:"h4"},"購物車清單",-1),Bt=t("hr",null,null,-1),St=t("hr",null,null,-1),Nt={class:"d-flex justify-content-between mb-1"},qt=t("span",null,"小計",-1),Ot={class:"d-flex justify-content-between mb-4"},Ht=t("span",{class:"fw-bold h5"},"總計",-1),Qt={class:"fw-bold h6 text-primary"},Ft={class:"input-group mb-3 custom-btn-primary"},zt=["disabled"];function Gt(o,s,d,A,c,l){const u=p("VueLoading"),P=p("router-link"),$=p("DelAllCartModal");return a(),n(h,null,[_(u,{active:c.isLoading},null,8,["active"]),t("div",null,[t("div",G,[t("div",J,[t("div",K,[t("div",W,[X,t("nav",Y,[t("ol",Z,[t("li",tt,[t("a",{href:"#",class:"layout-banner-txt-Hover",onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},"首頁")]),et])])])])])])]),o.carts.length===0?(a(),n("div",st,[t("div",ot,[t("div",lt,[t("div",at,[nt,it,dt,_(P,{to:"/products",class:"custom-btn-primary"},{default:w(()=>[ct]),_:1})])])])])):f("",!0),o.carts.length?(a(),n("div",rt,[t("div",ut,[t("div",_t,[t("div",null,[t("table",ht,[pt,t("tbody",bt,[(a(!0),n(h,null,v(o.carts,e=>(a(),n("tr",{key:e.id},[t("td",mt,[t("a",{href:"#",onClick:m(r=>o.delCartProduct(e),["prevent"])},yt,8,ft)]),t("td",null,[t("div",gt,[t("img",{class:"object-fit-cover d-none d-lg-inline-block me-3",height:"50",width:"100",alt:"購物車產品圖",src:e.product.imageUrl},null,8,Ct),t("h2",xt,i(e.product.title),1)])]),t("td",At,"$ "+i(e.product.origin_price),1),t("td",null,[t("div",Pt,[t("button",{class:"qtyButton",type:"button",onClick:r=>o.updateQty(e,!1)},Vt,8,$t),y(t("input",{type:"number",class:"text-center my-auto qtyInput","aria-label":"Example text with button addon","onUpdate:modelValue":r=>e.qty=r,value:"1",readonly:""},null,8,wt),[[g,e.qty,void 0,{number:!0}]]),t("button",{class:"qtyButton",type:"button",onClick:r=>o.updateQty(e,!0)},Lt,8,Tt)])]),t("td",Mt,"$ "+i(e.product.price*e.qty),1)]))),128))])]),t("div",Dt,[t("button",{class:"btn",disabled:o.carts.length===0,type:"button",onClick:s[1]||(s[1]=(...e)=>l.toCheckout&&l.toCheckout(...e))}," 結帳去 ",8,Rt)])])]),t("div",It,[t("div",Ut,[jt,t("button",{class:"btn",type:"button",onClick:s[2]||(s[2]=(...e)=>l.delAllCart&&l.delAllCart(...e))},"清空購物車")]),Bt,(a(!0),n(h,null,v(o.carts,e=>(a(),n("div",{class:"d-flex justify-content-between mb-1",key:e.name},[t("span",null,i(e.product.title),1),t("span",null,"NT$ "+i(e.product.origin_price),1)]))),128)),St,t("div",Nt,[qt,t("span",null,"NT$ "+i(o.totalPrice.total),1)]),t("div",Ot,[Ht,t("span",Qt,"NT$ "+i(o.totalPrice.final_total),1)]),t("div",Ft,[y(t("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":s[3]||(s[3]=e=>c.coupon=e),"aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,512),[[g,c.coupon]]),t("button",{class:"btn",type:"button",id:"button-addon2",disabled:o.carts.length===0,onClick:s[4]||(s[4]=(...e)=>l.addCoupon&&l.addCoupon(...e))}," 使用 ",8,zt)])])])])):f("",!0),_($,{ref:"delAllCartModal"},null,512)],64)}const Zt=x(z,[["render",Gt]]);export{Zt as default};