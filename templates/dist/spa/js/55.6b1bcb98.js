(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"04a2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],style:{width:t.width,height:t.height},attrs:{flat:""}},[a("q-card-section",[a("q-bar",{staticClass:"bg-white q-mb-sm shadow-1 "},[a("div",{staticStyle:{"font-size":"12px",width:"100%"}},[t._v(t._s(t.$t("scan.scan_goods_label"))+": "+t._s(t.frombin))])]),a("q-bar",{staticClass:"bg-white shadow-1 "},[a("div",{staticStyle:{"font-size":"12px",width:"100%"}},[t._v(t._s(t.$t("scan.scan_goods_label"))+": "+t._s(t.tobin))])])],1),a("q-scroll-area",{style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_code_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_qty_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.move_qty_label))])])]),a("tbody",[t._l(t.table_list,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-left"},[t._v(t._s(e.goods_code))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.move_qty))])])}))],2)])],1)],1)},o=[],i=a("3004"),n=a("18d6"),l=a("09f9"),c={name:"Pagezebra_movetobin",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",width:"",height:"",scroll_height:"",table_list:[],goods_code_label:this.$t("stock.view_stocklist.goods_code"),goods_qty_label:this.$t("stock.view_stocklist.onhand_stock"),move_qty_label:"Move Qty",thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},frombin:"",tobin:"",barscan:"",bin_scan:"",goods_scan:""}},methods:{datachange(){var t=this;n["a"].has("auth")&&Object(i["e"])("scanner/?bar_code="+t.barscan,{}).then((e=>{"BINSET"===e.results[0].mode?(t.bin_scan=e.results[0].code,t.goods_scan=""):"GOODS"===e.results[0].mode&&(t.goods_scan=e.results[0].code,t.countAdd(t.goods_scan))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getList(){var t=this;n["a"].has("auth")&&Object(i["e"])(t.pathname,{}).then((e=>{t.table_list=e.results})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))}},computed:{fab:{get(){return this.$store.state.fabchange.fab}}},created(){var t=this;n["a"].has("openid")?t.openid=n["a"].getItem("openid"):(t.openid="",n["a"].set("openid","")),n["a"].has("login_name")?t.login_name=n["a"].getItem("login_name"):(t.login_name="",n["a"].set("login_name","")),n["a"].has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;t.width=1*l["a"].width+"px",t.height=l["a"].height-50+"px",t.scroll_height=l["a"].height-200+"px"}},h=c,d=a("42e1"),r=a("8354"),_=a("f09f"),b=a("a370"),g=a("d847"),u=a("4983"),m=a("2bb1"),p=a("eebe"),f=a.n(p),v=Object(d["a"])(h,s,o,!1,null,null,null);"function"===typeof r["default"]&&Object(r["default"])(v);e["default"]=v.exports;f()(v,"components",{QCard:_["a"],QCardSection:b["a"],QBar:g["a"],QScrollArea:u["a"],QMarkupTable:m["a"]})},8354:function(t,e,a){"use strict";var s=a("ff55"),o=a.n(s);e["default"]=o.a},ff55:function(t,e){}}]);