import{m as w}from"./modalMixins-Cd885VNd.js";import{_ as v,o,c as r,b as t,e as x,x as O,d as u,D as m,f as n,g as _,F as p,v as V,t as d,r as b}from"./index-DCTZl_uA.js";import{V as L}from"./VueLoading-D4uar1N3.js";const M={data(){return{modal:null}},methods:{toProducts(){this.$router.push("/products"),this.hideModal()}},mixins:[w]},k={class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"myModal"},$={class:"modal-dialog",role:"document"},A={class:"modal-content"},E=O('<div class="modal-header bg-primary"><h5 class="modal-title text-light" id="exampleModalLabel">付款成功</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body text-center"><i class="bi bi-check2-circle text-primary" style="font-size:4rem;"></i><p>還想再逛逛嗎?</p></div>',2),I={class:"modal-footer mx-auto"},T=t("button",{type:"button",class:"btn btn-dark","data-bs-dismiss":"modal"},"取消",-1);function C(i,s,h,g,e,a){return o(),r("div",k,[t("div",$,[t("div",A,[E,t("div",I,[T,t("button",{type:"button",class:"btn btn-primary",onClick:s[0]||(s[0]=x((...c)=>a.toProducts&&a.toProducts(...c),["prevent"]))},"回賣場")])])])],512)}const D=v(M,[["render",C]]);var B={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-projectV3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:y,VITE_APP_PATH:f}=B,j={components:{PayOrderModal:D,VueLoading:L},data(){return{order:{},orderId:"",isLoading:!1}},methods:{getOrder(){this.isLoading=!0;const i=`${y}/api/${f}/order/${this.orderId}`;this.$http.get(i).then(s=>{s.data.success&&(this.order=s.data.order,setTimeout(()=>{this.isLoading=!1},2e3))}).catch(s=>{s.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},payOrder(){this.isLoading=!0;const i=`${y}/api/${f}/pay/${this.orderId}`;this.$http.post(i).then(s=>{s.data.success&&(this.isLoading=!1,this.$refs.payOrderModal.showModal(),this.getOrder())}).catch(s=>{s.response.data.message&&this.$swal("錯誤","付款失敗","error")})}},mounted(){this.orderId=this.$route.params.id,this.getOrder()}},N={class:"layoutBanner mb-md-5 mb-3"},R={class:"container"},S={class:"row justify-content-center my-auto"},H={class:"col-md-4 text-center layout-Banner-Text"},U=t("h2",{class:"fw-bold mb-3 text-light h1"},"訂單明細",-1),z={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},F={class:"breadcrumb d-flex justify-content-center"},q={class:"breadcrumb-item"},G=t("li",{class:"breadcrumb-item text-light","aria-current":"page"}," 訂單明細 ",-1),J={class:"container"},K={class:"row justify-content-center mb-md-5 mb-3"},Q=t("div",{class:"col-md-3 col-4"},[t("div",{class:"text-light text-center py-4 bg-secondary"},"確認訂單")],-1),W={class:"col-md-3 col-4"},X={class:"col-md-3 col-4"},Y={class:"container mb-md-5 mb-3"},Z={class:"row justify-content-center"},tt={class:"col-md-8 mb-5"},st={key:0,class:"text-primary h6 mb-4"},et=t("i",{class:"bi bi-check-circle me-1"},null,-1),ot={class:"border p-4"},rt=t("h2",{class:"h5 mb-4"},"訂單明細",-1),dt={class:"table border"},it=t("thead",null,[t("tr",null,[t("th",null,"產品"),t("th",{class:"text-end"},"總計")])],-1),at={class:"text-secondary"},lt={class:"text-end"},nt=t("td",{class:"w-50 border"},"總計",-1),ct={class:"text-end text-primary fw-bold"},_t={class:"col-md-8"},ht={class:"border p-4 mb-md-5 mb-3"},ut=t("h3",{class:"h5 mb-4"},"訂購人資料",-1),mt={key:0,class:"table border"},pt=t("th",{width:"180"},[n("姓名 "),t("span",{class:"text-primary"},"*")],-1),bt=t("th",{width:"180"},[n("Email "),t("span",{class:"text-primary"},"*")],-1),yt=t("th",{width:"180"},[n("電話 "),t("span",{class:"text-primary"},"*")],-1),ft=t("th",{width:"180"},[n("地址 "),t("span",{class:"text-primary"},"*")],-1),vt=t("th",{width:"180"},"備註",-1),xt=t("th",{width:"180"},"付款狀態",-1),gt={key:0,class:"text-primary fw-bold"},Pt={key:1,class:"text-secondary fw-bold"},wt={class:"text-end",colspan:"6"};function Ot(i,s,h,g,e,a){const c=b("VueLoading"),P=b("PayOrderModal");return o(),r(p,null,[u(c,{active:e.isLoading},null,8,["active"]),t("div",null,[t("div",N,[t("div",R,[t("div",S,[t("div",H,[U,t("nav",z,[t("ol",F,[t("li",q,[t("a",{href:"#",class:"layout-banner-txt-Hover",onClick:s[0]||(s[0]=x(()=>{},["prevent"]))},"首頁")]),G])])])])])])]),t("div",J,[t("div",K,[Q,t("div",W,[t("div",{class:m(["text-light text-center py-4",e.order.is_paid===!1?"stepperActive":"stepperDefault"])}," 建立訂單 ",2)]),t("div",X,[t("div",{class:m(["text-light text-center py-4",e.order.is_paid===!0?"stepperActive":"stepperDefault"])}," 完成訂單 ",2)])])]),t("div",Y,[t("div",Z,[t("div",tt,[t("div",null,[e.order.is_paid?(o(),r("h2",st,[et,n("感謝您的訂購，訂單已經收到。 ")])):_("",!0)]),t("div",ot,[rt,t("table",dt,[it,t("tbody",null,[(o(!0),r(p,null,V(e.order.products,l=>(o(),r("tr",{key:l.id},[t("td",at,d(l.product.title)+" x 1",1),t("td",lt,"$ "+d(l.final_total),1)]))),128)),t("tr",null,[nt,t("td",ct," $ "+d(e.order.total),1)])])])])]),t("div",_t,[t("div",ht,[ut,e.order.user?(o(),r("table",mt,[t("tbody",null,[t("tr",null,[pt,t("td",null,d(e.order.user.name),1)]),t("tr",null,[bt,t("td",null,d(e.order.user.email),1)]),t("tr",null,[yt,t("td",null,d(e.order.user.tel),1)]),t("tr",null,[ft,t("td",null,d(e.order.user.address),1)]),t("tr",null,[vt,t("td",null,d(e.order.message),1)]),t("tr",null,[xt,e.order.is_paid?(o(),r("td",gt," 已付款 ")):(o(),r("td",Pt,"未付款"))])]),t("tfoot",null,[t("tr",null,[t("td",wt,[e.order.is_paid?_("",!0):(o(),r("button",{key:0,class:"btn btn-primary",type:"button",onClick:s[1]||(s[1]=(...l)=>a.payOrder&&a.payOrder(...l))}," 確認付款 "))])])])])):_("",!0)])])])]),u(P,{ref:"payOrderModal"},null,512)],64)}const kt=v(j,[["render",Ot]]);export{kt as default};
