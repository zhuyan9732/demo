var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var l in r||(r={}))a.call(r,l)&&s(e,l,r[l]);if(t)for(var l of t(r))n.call(r,l)&&s(e,l,r[l]);return e};import{I as l,r as c,u as o,R as m,T as i,a as p,b as d,d as u,C as _,P as E,c as h,D as f,e as v,K as y,f as g,g as x,h as w,B as N,M as b,i as k,j as S,N as C,k as j,q as I,l as D,F as M,m as Y,n as q,S as R,o as B,p as z,s as O}from"./vendor.37977a75.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var F=l.createFromIconfont("//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js"),L={};const W=({showNav:e})=>{const[t,a]=c.exports.useState("/"),n=o(),s=c.exports.useCallback((e=>{a(e),n.push(e)}),[]);return m.createElement(i,{visible:e,className:L.tab,activeKey:t,onChange:s},m.createElement(i.Item,{itemKey:"/",title:"账单",icon:m.createElement(F,{type:"zhangdan"})}),m.createElement(i.Item,{itemKey:"/data",title:"统计",icon:m.createElement(F,{type:"tongji"})}),m.createElement(i.Item,{itemKey:"/user",title:"我的",icon:m.createElement(F,{type:"wode"})}))},{MODE:P}={BASE_URL:"/",MODE:"release",DEV:!0,PROD:!1};p.defaults.baseURL="development"==P?"/api":"http://42.193.155.28:7001",p.defaults.withCredentials=!0,p.defaults.headers["X-Requested-With"]="XMLHttpRequest",p.defaults.headers.Authorization=`${localStorage.getItem("token")||null}`,p.defaults.headers.post["Content-Type"]="application/json",p.interceptors.response.use((e=>"object"!=typeof e.data?(d.show("服务端异常"),Promise.reject(e)):200!=e.data.code?(e.data.msg&&d.show(e.data.msg),401==e.data.code&&(window.location.href="/login"),Promise.reject(e.data)):e.data));const $="http://42.193.155.28:7001/api",A=p.get,K=p.post,U={1:{icon:"canyin"},2:{icon:"fushi"},3:{icon:"jiaotong"},4:{icon:"riyong"},5:{icon:"gouwu"},6:{icon:"xuexi"},7:{icon:"yiliao"},8:{icon:"lvxing"},9:{icon:"renqing"},10:{icon:"qita"},11:{icon:"gongzi"},12:{icon:"jiangjin"},13:{icon:"zhuanzhang"},14:{icon:"licai"},15:{icon:"tuikuang"},16:{icon:"qita"}},H=0,T=3,X=4,V=0,G=2,J=3,Q=e=>e&&e.startsWith("http")?e:e=`${$.replace("/api","")}${e}`;var Z={item:"_item_mkxeh_1",headerDate:"_header-date_mkxeh_7",date:"_date_mkxeh_18",money:"_money_mkxeh_22",itemIcon:"_item-icon_mkxeh_37"};const ee=({bill:e})=>{const[t,a]=c.exports.useState(0),[n,s]=c.exports.useState(0),r=o();c.exports.useEffect((()=>{const t=e.bills.filter((e=>2==e.type)).reduce(((e,t)=>e+=Number(t.amount)),0),n=e.bills.filter((e=>1==e.type)).reduce(((e,t)=>e+=Number(t.amount)),0);a(t),s(n)}),[e.bills]);return m.createElement("div",{className:Z.item},m.createElement("div",{className:Z.headerDate},m.createElement("div",{className:Z.date},u(+e.date).format("YYYY-MM-DD")),m.createElement("div",{className:Z.money},m.createElement("span",null,m.createElement("img",{src:"//s.yezgea02.com/1615953405599/zhi%402x.png",alt:"支"}),m.createElement("span",null,"¥",n.toFixed(2))),m.createElement("span",null,m.createElement("img",{src:"//s.yezgea02.com/1615953405599/shou%402x.png",alt:"收"}),m.createElement("span",null,"¥",t.toFixed(2))))),e&&e.bills.map((e=>m.createElement(_,{className:Z.bill,key:e.id,onClick:()=>(e=>{r.push(`/detail?id=${e.id}`)})(e),title:m.createElement(m.Fragment,null,m.createElement(F,{className:Z.itemIcon,type:e.category_id?U[e.category_id].icon:1}),m.createElement("span",null,e.category_name)),description:m.createElement("span",{style:{color:2==e.type?"red":"#39be77"}},`${1==e.type?"-":"+"}${e.amount}`),help:m.createElement("div",null,u(+e.date).format("HH:mm"),e.remark?` | ${e.remark}`:"")}))))};var te="_popup-type_4v4ui_1",ae="_header_4v4ui_7",ne="_cross_4v4ui_20",se="_content_4v4ui_28",re="_all_4v4ui_31",le="_title_4v4ui_38",ce="_expense-wrap_4v4ui_43",oe="_income-wrap_4v4ui_44",me="_active_4v4ui_58";const ie=c.exports.forwardRef((({onSelect:e},t)=>{const[a,n]=c.exports.useState(!1),[s,r]=c.exports.useState("all"),[o,i]=c.exports.useState([]),[p,d]=c.exports.useState([]);c.exports.useEffect((async()=>{const{data:e}=await A("/api/category/getList");i(e.filter((e=>1==e.type))),d(e.filter((e=>2==e.type)))}),[]),t&&(t.current={show:()=>{n(!0)},close:()=>{n(!1)}});const u=t=>{r(t.id),n(!1),e(t)};return m.createElement(E,{visible:a,direction:"bottom",onMaskClick:()=>n(!1),destroy:!1,mountContainer:()=>document.body},m.createElement("div",{className:te},m.createElement("div",{className:ae},"请选择类型",m.createElement(l,{type:"wrong",className:ne,onClick:()=>n(!1)})),m.createElement("div",{className:se},m.createElement("div",{onClick:()=>u({id:"all"}),className:h({[re]:!0,[me]:"all"==s})},"全部类型"),m.createElement("div",{className:le},"支出"),m.createElement("div",{className:ce},o.map(((e,t)=>m.createElement("p",{key:t,onClick:()=>u(e),className:h({[me]:s==e.id})},e.name)))),m.createElement("div",{className:le},"收入"),m.createElement("div",{className:oe},p.map(((e,t)=>m.createElement("p",{key:t,onClick:()=>u(e),className:h({[me]:s==e.id})},e.name)))))))})),pe=c.exports.forwardRef((({onSelect:e,mode:t="date"},a)=>{const[n,s]=c.exports.useState(!1),[r,l]=c.exports.useState(new Date);return a&&(a.current={show:()=>{s(!0)},close:()=>{s(!1)}}),m.createElement(E,{visible:n,direction:"bottom",onMaskClick:()=>s(!1),destroy:!1,mountContainer:()=>document.body},m.createElement("div",null,m.createElement(f,{visible:n,value:r,mode:t,onOk:a=>{l(a),s(!1),"month"==t?e(u(a).format("YYYY-MM")):"date"==t&&e(u(a).format("YYYY-MM-DD"))},onCancel:()=>s(!1)})))}));var de={addWrap:"_add-wrap_11omu_1",header:"_header_11omu_7",close:"_close_11omu_10",filter:"_filter_11omu_15",type:"_type_11omu_21",expense:"_expense_11omu_30",active:"_active_11omu_33",income:"_income_11omu_38",time:"_time_11omu_43",arrow:"_arrow_11omu_52",money:"_money_11omu_56",sufix:"_sufix_11omu_61",amount:"_amount_11omu_66",typeWarp:"_type-warp_11omu_70",typeBody:"_type-body_11omu_79",typeItem:"_type-item_11omu_83",iconfontWrap:"_iconfont-wrap_11omu_90",iconfont:"_iconfont_11omu_90",remark:"_remark_11omu_116"};const ue=c.exports.forwardRef((({detail:e={},onReload:t},a)=>{const n=c.exports.useRef(),s=e&&e.id,[r,o]=c.exports.useState(!1),[i,p]=c.exports.useState("expense"),[_,f]=c.exports.useState([]),[g,x]=c.exports.useState([]),[w,N]=c.exports.useState({}),[b,k]=c.exports.useState(""),[S,C]=c.exports.useState(""),[j,I]=c.exports.useState(!1),[D,M]=c.exports.useState(new Date);c.exports.useEffect((()=>{e.id&&(p(1==e.type?"expense":"income"),N({id:e.category_id,name:e.category_name}),C(e.remark),k(e.amount),M(u(Number(e.date)).$d))}),[e]),a&&(a.current={show:()=>{o(!0)},close:()=>{o(!1)}}),c.exports.useEffect((async()=>{const{data:e}=await A("/api/category/getList"),t=e.filter((e=>1==e.type)),a=e.filter((e=>2==e.type));f(t),x(a),s||N(t[0])}),[]);const Y=e=>{p(e),N("expense"==e?_[0]:g[0])},q=async()=>{if(!b)return void d.show("请输入具体金额");const e={amount:Number(b).toFixed(2),category_id:w.id,category_name:w.name,date:1e3*u(D).unix(),type:"expense"==i?1:2,remark:S||""};s?(e.id=s,await K("/api/bill/editBill",e),d.show("修改成功")):(await K("/api/bill/addBill",e),k(""),p("expense"),N(_[0]),M(new Date),C(""),d.show("添加成功")),o(!1),t&&t()};return m.createElement(E,{visible:r,direction:"bottom",onMaskClick:()=>o(!1),destroy:!1,mountContainer:()=>document.body},m.createElement("div",{className:de.addWrap},m.createElement("header",{className:de.header},m.createElement("span",{className:de.close,onClick:()=>o(!1)},m.createElement(l,{type:"wrong"}))),m.createElement("div",{className:de.filter},m.createElement("div",{className:de.type},m.createElement("span",{onClick:()=>Y("expense"),className:h({[de.expense]:!0,[de.active]:"expense"==i})},"支出"),m.createElement("span",{onClick:()=>Y("income"),className:h({[de.income]:!0,[de.active]:"income"==i})},"收入")),m.createElement("div",{className:de.time,onClick:()=>{n.current&&n.current.show()}},u(D).format("MM-DD")," ",m.createElement(l,{className:de.arrow,type:"arrow-bottom"}))),m.createElement("div",{className:de.money},m.createElement("span",{className:de.sufix},"¥"),m.createElement("span",{className:h(de.amount,de.animation)},b)),m.createElement("div",{className:de.typeWarp},m.createElement("div",{className:de.typeBody},("expense"==i?_:g).map((e=>m.createElement("div",{onClick:()=>(e=>{N(e)})(e),key:e.id,className:de.typeItem},m.createElement("span",{className:h({[de.iconfontWrap]:!0,[de.expense]:"expense"==i,[de.income]:"income"==i,[de.active]:w.id==e.id})},m.createElement(F,{className:de.iconfont,type:U[e.id].icon})),m.createElement("span",null,e.name)))))),m.createElement("div",{className:de.remark},j?m.createElement(v,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:S,placeholder:"请输入备注信息",onChange:e=>C(e),onBlur:()=>I(!1)}):m.createElement("span",{onClick:()=>I(!0)},S||"添加备注")),m.createElement(y,{type:"price",onKeyClick:e=>(e=>{if("close"!=(e=String(e)))if("delete"!=e)"ok"!=e?"."==e&&b.includes(".")||"."!=e&&b.includes(".")&&b&&b.split(".")[1].length>=2||k(b+e):q();else{let e=b.slice(0,b.length-1);k(e)}})(e)}),m.createElement(pe,{ref:n,onSelect:e=>{M(e)}})))}));ue.propTypes={detail:g.object,onReload:g.func};var _e={home:"_home_qapsm_1",header:"_header_qapsm_7",dataWrap:"_data-wrap_qapsm_22",income:"_income_qapsm_33",typeWrap:"_type-wrap_qapsm_36",left:"_left_qapsm_48",arrow:"_arrow_qapsm_51",contentWrap:"_content-wrap_qapsm_55",add:"_add_qapsm_65"};var Ee={data:"_data_1h2fb_1",total:"_total_1h2fb_5",time:"_time_1h2fb_13",date:"_date_1h2fb_35",title:"_title_1h2fb_39",expense:"_expense_1h2fb_45",income:"_income_1h2fb_51",structure:"_structure_1h2fb_55",head:"_head_1h2fb_60",tab:"_tab_1h2fb_70",active:"_active_1h2fb_80",content:"_content_1h2fb_88",item:"_item_1h2fb_88",left:"_left_1h2fb_93",type:"_type_1h2fb_100",name:"_name_1h2fb_115",right:"_right_1h2fb_124",percent:"_percent_1h2fb_129",momey:"_momey_1h2fb_135",proportion:"_proportion_1h2fb_138"};let he=null;var fe={user:"_user_1d4b2_1",head:"_head_1d4b2_5",info:"_info_1d4b2_14",content:"_content_1d4b2_33",logout:"_logout_1d4b2_43"};var ve="_auth_aj3d0_1",ye="_head_aj3d0_5",ge="_tab_aj3d0_16",xe="_avtive_aj3d0_25",we="_form_aj3d0_30",Ne="_operation_aj3d0_39",be="_agree_aj3d0_42";var ke="_header-warp_12wcp_1",Se="_block_12wcp_4",Ce="_header_12wcp_1";const je=({title:e=""})=>{const t=o();return m.createElement("div",{className:ke},m.createElement("div",{className:Se},m.createElement(C,{className:Ce,left:m.createElement(l,{type:"arrow-left",theme:"primary",onClick:()=>t.goBack()}),title:e})))};var Ie={detail:"_detail_1wagh_1",card:"_card_1wagh_8",type:"_type_1wagh_16",expense:"_expense_1wagh_29",income:"_income_1wagh_32",iconfont:"_iconfont_1wagh_35",amount:"_amount_1wagh_38",info:"_info_1wagh_43",time:"_time_1wagh_48",remark:"_remark_1wagh_61",operation:"_operation_1wagh_75",vanIcon:"_van-icon_1wagh_82"};var De="_account_k3p1j_1",Me="_form_k3p1j_4",Ye="_btn_k3p1j_9";var qe=D()((e=>{const{getFieldProps:t}=e.form;return m.createElement(m.Fragment,null,m.createElement(je,{title:"重制密码"}),m.createElement("div",{className:De},m.createElement("div",{className:Me},m.createElement(_,{title:"原密码"},m.createElement(v,r({clearable:!0,type:"text",placeholder:"请输入原密码"},t("oldpass",{rules:[{required:!0}]})))),m.createElement(_,{title:"新密码"},m.createElement(v,r({clearable:!0,type:"text",placeholder:"请输入新密码"},t("newpass",{rules:[{required:!0}]})))),m.createElement(_,{title:"确认密码"},m.createElement(v,r({clearable:!0,type:"text",placeholder:"请再此输入新密码确认"},t("newpass2",{rules:[{required:!0}]}))))),m.createElement(N,{className:Ye,block:!0,theme:"primary",onClick:()=>{e.form.validateFields((async(e,t)=>{if(!e){if(t.newpass!=t.newpass2)return void d.show("新密码输入不一致");await K("/api/user/updatePassword",{old_pass:t.oldpass,new_pass:t.newpass,new_pass2:t.newpass2}),d.show("修改成功")}}))}},"提交")))}));var Re={userinfo:"_userinfo_1wov8_1",item:"_item_1wov8_8",title:"_title_1wov8_12",avatar:"_avatar_1wov8_16",avatarUrl:"_avatar-url_1wov8_20",desc:"_desc_1wov8_26",upload:"_upload_1wov8_32",signature:"_signature_1wov8_35"};const Be=[{path:"/",component:()=>{const e=c.exports.useRef(),t=c.exports.useRef(),a=c.exports.useRef(),[n,s]=c.exports.useState({}),[r,o]=c.exports.useState(`${u(+new Date).valueOf()}`),[i,p]=c.exports.useState(1),[d,_]=c.exports.useState([]),[E,h]=c.exports.useState(0),[f,v]=c.exports.useState(H),[y,g]=c.exports.useState(V),[w,N]=c.exports.useState(0),[b,k]=c.exports.useState(0);c.exports.useEffect((()=>{S()}),[i,n,r]);const S=async()=>{const{data:e}=await K("/api/bill/getBillList",{page:i,pageSize:5,date:r,category_id:n.id||"0"});_(1==i?e.list:d.concat(e.list)),N(e.totalExpense.toFixed(2)),k(e.totalIncome.toFixed(2)),h(e.totalPage),g(J),v(X)};return m.createElement("div",{className:_e.home},m.createElement("div",{className:_e.header},m.createElement("div",{className:_e.dataWrap},m.createElement("span",{className:_e.expense},"总支出：",m.createElement("b",null,"¥ ",w)),m.createElement("span",{className:_e.income},"总收入：",m.createElement("b",null,"¥ ",b))),m.createElement("div",{className:_e.typeWrap},m.createElement("div",{className:_e.left,onClick:()=>{e.current&&e.current.show()}},m.createElement("span",{className:_e.title},n.name||"全部类型",m.createElement(l,{className:_e.arrow,type:"arrow-bottom"}))),m.createElement("div",{className:_e.right},m.createElement("span",{className:_e.time,onClick:()=>{a.current&&a.current.show()}},u(+r).format("YYYY-MM"),m.createElement(l,{className:_e.arrow,type:"arrow-bottom"}))))),m.createElement("div",{className:_e.contentWrap},d.length?m.createElement(x,{animationDuration:200,stayTime:400,refresh:{state:f,handler:()=>{v(T),1!=i?p(1):S()}},load:{state:y,distance:200,handler:()=>{i<E&&(g(G),p(i+1))}}},d.map(((e,t)=>m.createElement(ee,{bill:e,key:t})))):null),m.createElement(ie,{ref:e,onSelect:e=>{v(T),p(1),s(e)}}),m.createElement(pe,{ref:a,mode:"month",onSelect:e=>{v(T),p(1),o(u(e).valueOf())}}),m.createElement("div",{className:_e.add,onClick:()=>{t.current&&t.current.show()}},m.createElement(F,{type:"tianjia"})),m.createElement(ue,{ref:t}))}},{path:"/data",component:()=>{const e=c.exports.useRef(),[t,a]=c.exports.useState("expense"),[n,s]=c.exports.useState(u().format("YYYY-MM")),[r,o]=c.exports.useState(0),[i,p]=c.exports.useState(0),[d,_]=c.exports.useState([]),[E,f]=c.exports.useState([]),[v,y]=c.exports.useState("expense");c.exports.useEffect((()=>(g(),()=>{he.dispose()})),[n]);const g=async()=>{const{data:e}=await K("/api/bill/getDataStatistics",{date:u(n).valueOf()});o(e.totalExpense),p(e.totalIncome);const t=e.totalData.filter((e=>1==e.type)).sort(((e,t)=>t.count-e.count)),a=e.totalData.filter((e=>2==e.type)).sort(((e,t)=>t.count-e.count));_(t),f(a),b("expense"==v?t:a)},x=e=>{a(e)},N=e=>{y(e),b("expense"==e?d:E)},b=e=>{window.echarts&&(he=echarts.init(document.getElementById("proportion")),he.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:e.map((e=>e.type_name))},series:[{name:"支出",type:"pie",radius:"55%",data:e.map((e=>({value:e.count,name:e.category_name}))),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}))};return m.createElement("div",{className:Ee.data},m.createElement("div",{className:Ee.total},m.createElement("div",{className:Ee.time,onClick:()=>{e.current&&e.current.show()}},m.createElement("span",null,n),m.createElement(l,{className:Ee.date,type:"date"})),m.createElement("div",{className:Ee.title},"共支出"),m.createElement("div",{className:Ee.expense},"¥",r),m.createElement("div",{className:Ee.income},"共收入¥",i)),m.createElement("div",{className:Ee.structure},m.createElement("div",{className:Ee.head},m.createElement("span",{className:Ee.title},"收支构成"),m.createElement("div",{className:Ee.tab},m.createElement("span",{onClick:()=>x("expense"),className:h({[Ee.expense]:!0,[Ee.active]:"expense"==t})},"支出"),m.createElement("span",{onClick:()=>x("income"),className:h({[Ee.income]:!0,[Ee.active]:"income"==t})},"收入"))),m.createElement("div",{className:Ee.content},("expense"==t?d:E).map((e=>m.createElement("div",{key:e.type_id,className:Ee.item},m.createElement("div",{className:Ee.left},m.createElement("div",{className:Ee.type},m.createElement("span",{className:h({[Ee.expense]:"expense"==t,[Ee.income]:"income"==t})},m.createElement(F,{type:e.type_id?U[e.type_id].icon:1})),m.createElement("span",{className:Ee.name},e.category_name)),m.createElement("div",{className:Ee.progress},"¥",Number(e.count).toFixed(2)||0)),m.createElement("div",{className:Ee.right},m.createElement("div",{className:Ee.percent},m.createElement(w,{shape:"line",percent:Number(e.count/Number("expense"==t?r:i)*100).toFixed(2),theme:"primary"}))))))),m.createElement("div",{className:Ee.proportion},m.createElement("div",{className:Ee.head},m.createElement("span",{className:Ee.title},"收支构成"),m.createElement("div",{className:Ee.tab},m.createElement("span",{onClick:()=>N("expense"),className:h({[Ee.expense]:!0,[Ee.active]:"expense"==v})},"支出"),m.createElement("span",{onClick:()=>N("income"),className:h({[Ee.income]:!0,[Ee.active]:"income"==v})},"收入"))),m.createElement("div",{id:"proportion"}))),m.createElement(pe,{ref:e,mode:"month",onSelect:e=>{s(e)}}))}},{path:"/user",component:()=>{const e=o(),[t,a]=c.exports.useState({}),[n,s]=c.exports.useState(""),[r,l]=c.exports.useState(!1),[i,p]=c.exports.useState("");c.exports.useEffect((()=>{u()}),[]);const u=async()=>{const{data:e}=await A("/api/user/getUserInfo");a(e),p(Q(e.avatar)),s(e.signature)};return m.createElement("div",{className:fe.user},m.createElement("div",{className:fe.head},m.createElement("div",{className:fe.info},m.createElement("span",null,"昵称：",t.username),m.createElement("span",null,m.createElement("img",{style:{width:30,height:30,verticalAlign:"-10px"},src:"//s.yezgea02.com/1615973630132/geqian.png",alt:""}),m.createElement("b",null,t.signature||"暂无内容"))),m.createElement("img",{className:fe.avatar,style:{width:60,height:60,borderRadius:8},src:i,alt:""})),m.createElement("div",{className:fe.content},m.createElement(_,{hasArrow:!0,title:"用户信息修改",onClick:()=>e.push("/userInfo"),icon:m.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/gxqm.png",alt:""})}),m.createElement(_,{hasArrow:!0,title:"重置密码",onClick:()=>e.push("/account"),icon:m.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/zhaq.png",alt:""})})),m.createElement(N,{className:fe.logout,block:!0,theme:"danger",onClick:async()=>{localStorage.removeItem("token"),e.push("/login")}},"退出登录"),m.createElement(b,{visible:r,title:"标题",closable:!0,onCancel:()=>l(!1),footer:m.createElement(N,{block:!0,theme:"primary",onClick:async()=>{const{data:e}=await K("/api/user/editUserInfo",{signature:n});a(e),l(!1),d.show("修改成功")}},"确认")},m.createElement(v,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:n,placeholder:"请输入备注信息",onChange:e=>s(e)})))}},{path:"/login",component:()=>{const[e,t]=c.exports.useState("login"),[a,n]=c.exports.useState(""),[s,r]=c.exports.useState(""),[l,o]=c.exports.useState(""),[i,p]=c.exports.useState(""),u=c.exports.useMemo((()=>"login"===e),[e]),E=c.exports.useCallback(((e,t)=>{switch(console.log(e,t),e){case"username":return void n(t);case"password":return void r(t);case"verify":return void o(t);case"captcha":return void p(t)}}),[]);return m.createElement("div",{className:ve},m.createElement("div",{className:ye}),m.createElement("div",{className:ge},m.createElement("span",{className:h({[xe]:"login"==e}),onClick:()=>t("login")},"登录"),m.createElement("span",{className:h({[xe]:"register"==e}),onClick:()=>t("register")},"注册")),m.createElement("div",{className:we},m.createElement(_,{icon:m.createElement(F,{type:"zhanghao"})},m.createElement(v,{clearable:!0,type:"text",placeholder:"请输入账号",onChange:e=>E("username",e)})),m.createElement(_,{icon:m.createElement(F,{type:"mima"})},m.createElement(v,{clearable:!0,type:"password",placeholder:"请输入密码",onChange:e=>E("password",e)})),!u&&m.createElement(_,{icon:m.createElement(F,{type:"mima"})},m.createElement(v,{clearable:!0,type:"text",placeholder:"请输入验证码",onChange:e=>E("verify",e)}),m.createElement(k,{charNum:4,onChange:e=>E("captcha",e)}))),m.createElement("div",{className:Ne},!u&&m.createElement("div",{className:be},m.createElement(S,null),m.createElement("label",{className:"text-light"},"阅读并同意",m.createElement("a",null,"《XXX条款》"))),m.createElement(N,{block:!0,theme:"primary",onClick:async()=>{if(a)if(s)try{if(u){const{data:e}=await K("/api/user/login",{username:a,password:s});return localStorage.setItem("token",e.token),d.show("登录成功"),void(window.location.href="/")}if(!l)return void d.show("请输入验证码");if(l!=i)return void d.show("验证码错误");await K("/api/user/register",{username:a,password:s}),t("login"),d.show("注册成功")}catch(e){d.show(e.msg||"系统错误")}else d.show("请输入密码");else d.show("请输入账号")}},u?"登录":"注册")))}},{path:"/detail",component:()=>{const e=c.exports.useRef(),t=j(),a=o(),{id:n}=I.parse(t.search),[s,r]=c.exports.useState({});c.exports.useEffect((()=>{l()}),[]);const l=async()=>{const{data:e}=await K("/api/bill/getBillDetail",{id:n});r(e)};return m.createElement("div",{className:Ie.detail},m.createElement(je,{title:"账单详情"}),m.createElement("div",{className:Ie.card},m.createElement("div",{className:Ie.type},m.createElement("span",{className:h({[Ie.expense]:1==s.type,[Ie.income]:2==s.type})},m.createElement(F,{className:Ie.iconfont,type:s.category_id?U[s.category_id].icon:1})),m.createElement("span",null,s.category_name||"")),1==s.type?m.createElement("div",{className:h(Ie.amount,Ie.expense)},"-",s.amount):m.createElement("div",{className:h(Ie.amount,Ie.incom)},"+",s.amount),m.createElement("div",{className:Ie.info},m.createElement("div",{className:Ie.time},m.createElement("span",null,"记录时间"),m.createElement("span",null,u(Number(s.date)).format("YYYY-MM-DD HH:mm"))),m.createElement("div",{className:Ie.remark},m.createElement("span",null,"备注"),m.createElement("span",null,s.remark||"-"))),m.createElement("div",{className:Ie.operation},m.createElement("span",{onClick:()=>{b.confirm({title:"删除",content:"确认删除账单？",onOk:async()=>{await K("/api/bill/delBill",{id:n}),d.show("删除成功"),a.goBack()}})}},m.createElement(F,{type:"shanchu"}),"删除"),m.createElement("span",{onClick:()=>{e.current&&e.current.show()}},m.createElement(F,{type:"tianjia"}),"编辑"))),m.createElement(ue,{ref:e,detail:s,onReload:l}))}},{path:"/account",component:qe},{path:"/userInfo",component:()=>{const e=o(),[t,a]=c.exports.useState({}),[n,s]=c.exports.useState(""),[r,l]=c.exports.useState(""),i=localStorage.getItem("token");c.exports.useEffect((()=>{u()}),[]);const u=async()=>{const{data:e}=await A("/api/user/getUserInfo");a(e),s(Q(e.avatar)),l(e.signature)};return m.createElement(m.Fragment,null,m.createElement(je,{title:"用户信息"}),m.createElement("div",{className:Re.userinfo},m.createElement("h1",null,"个人资料"),m.createElement("div",{className:Re.item},m.createElement("div",{className:Re.title},"头像"),m.createElement("div",{className:Re.avatar},m.createElement("img",{className:Re.avatarUrl,src:n,alt:""}),m.createElement("div",{className:Re.desc},m.createElement("span",null,"支持 jpg、png、jpeg 格式大小 200KB 以内的图片"),m.createElement(M,{className:Re.filePicker,onChange:e=>{if(console.log("file.file",e.file),e&&e.file.size>204800)return void d.show("上传头像不得超过 200 KB！！");let t=new FormData;t.append("file",e.file),p({method:"post",url:`${$}/upload`,data:t,headers:{"Content-Type":"multipart/form-data",Authorization:i}}).then((e=>{s(Q(e.data))}))},accept:"image/*"},m.createElement(N,{className:Re.upload,theme:"primary",size:"xs"},"点击上传"))))),m.createElement("div",{className:Re.item},m.createElement("div",{className:Re.title},"个性签名"),m.createElement("div",{className:Re.signature},m.createElement(v,{clearable:!0,type:"text",value:r,placeholder:"请输入个性签名",onChange:e=>l(e)}))),m.createElement(N,{onClick:async()=>{try{await K("/api/user/editUserInfo",{signature:r,avatar:n}),d.show("修改成功"),e.goBack()}catch(t){d.show(t.msg)}},style:{marginTop:50},block:!0,theme:"primary"},"保存")))}}];function ze(){const e=j(),{pathname:t}=e,a=["/","/data","/user"],[n,s]=c.exports.useState(!1);return c.exports.useEffect((()=>{s(a.includes(t))}),[t]),m.createElement(m.Fragment,null,m.createElement(Y,{primaryColor:"#007fff",locale:q},m.createElement(R,null,Be.map((e=>m.createElement(B,{exact:!0,key:e.path,path:e.path},m.createElement(e.component,null)))))),m.createElement(W,{showNav:n}))}z.render(m.createElement(m.StrictMode,null,m.createElement(O,null,m.createElement(ze,null))),document.getElementById("root"));
