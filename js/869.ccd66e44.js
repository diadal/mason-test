"use strict";(self.webpackChunkmasonmahogany=self.webpackChunkmasonmahogany||[]).push([[869],{92869:(t,e,a)=>{a.r(e),a.d(e,{default:()=>q});var o=a(83673);const r={class:"ps-categogy--promo"},s={class:"container"},n={class:"ps-promo"},l={class:"container"};var c=a(61959),u=a(22344),i=a(17044),d=a(62323);const p={class:"ps-section--category-horizontal"},m={class:"container"},g=(0,o._)("h3",{class:"ps-section__title"},"Popular categories",-1),v={class:"ps-category__content"},_=["src"],h={class:"ps-category__name"},f={class:"ps-category__all"},y=(0,o.Uk)("Show all");const b=a(63375).q_,w={data:()=>({popularCategories:b})};var P=a(74260);const C=(0,P.Z)(w,[["render",function(t,e,a,r,s,n){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",p,[(0,o._)("div",m,[g,(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.popularCategories,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"ps-category__item",key:e},[(0,o.Wm)(l,{class:"ps-category__link",to:"/shop"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:t.image,alt:""},null,8,_)])),_:2},1024),(0,o._)("div",h,[(0,o.Wm)(l,{to:"/shop"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(t.text),1)])),_:2},1024)])])))),128))]),(0,o._)("div",f,[(0,o.Wm)(l,{to:"/shop"},{default:(0,o.w5)((()=>[y])),_:1})])])])}]]);var k=a(66593),W=a(74945),D=a(85824),L=a(35182),Z=a(27602),B=a(76753),H=a(62609),x=a(42651),z=function(t,e,a,o){return new(a||(a=Promise))((function(r,s){function n(t){try{c(o.next(t))}catch(t){s(t)}}function l(t){try{c(o.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,l)}c((o=o.apply(t,e||[])).next())}))};const F=D.aF,N=(0,o.aZ)({name:"PromoCategory",components:{Breadcrumb:u.Z,PromoItem:i.Z,PopularCategoryHorizontal:C,BestDealsProductCarousel:k.Z,Branch:W.Z,FeaturedProduct:L.Z,BlogLatest:Z.Z,Newsletter:H.Z},setup(){const t=(0,o.f3)("AppData"),e=(0,c.iH)(F),a=(0,c.iH)([]),r=(0,c.iH)([]),s=(0,c.iH)([]);return(0,o.bv)((()=>z(this,void 0,void 0,(function*(){t.value.loading=!0,r.value=yield(0,x.x)("featured-products"),s.value=yield(0,x.x)("best-deal-of-week"),a.value=yield(0,B.Jq)({}),t.value.loading=!1})))),{breadcrumb:[{url:"/",text:"Home"},{url:"/shop/promo-category",extraClass:"active",text:"Promo Category"}],promotion:{banner:"/img/category/banner-promo.jpg",title:"Multi-Surface <br/>Free&Clear",btnName:"Add to cart",price:"$15.99",del:"$29.99",sale:"-25%",priceHorizontal:!0},branchs:e,latestPost:a,featuredProduct:r,bestDealProduct:s}}}),q=(0,P.Z)(N,[["render",function(t,e,a,c,u,i){const d=(0,o.up)("Breadcrumb"),p=(0,o.up)("PromoItem"),m=(0,o.up)("PopularCategoryHorizontal"),g=(0,o.up)("BestDealsProductCarousel"),v=(0,o.up)("Branch"),_=(0,o.up)("FeaturedProduct"),h=(0,o.up)("BlogLatest"),f=(0,o.up)("Newsletter");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",s,[(0,o.Wm)(d,{dataList:t.breadcrumb},null,8,["dataList"]),(0,o._)("div",n,[(0,o.Wm)(p,{item:t.promotion},null,8,["item"])]),(0,o.Wm)(m)]),(0,o.Wm)(g,{title:"Best Deals of the week!",dataList:t.bestDealProduct},null,8,["dataList"]),(0,o._)("div",l,[(0,o.Wm)(v,{branchs:t.branchs},null,8,["branchs"])]),(0,o.Wm)(_,{title:"Featured products",dataList:t.featuredProduct},null,8,["dataList"]),(0,o.Wm)(h,{dataList:t.latestPost},null,8,["dataList"]),(0,o.Wm)(f)])}]])}}]);