
const NAMES=["凛","美月","ひより","七海","彩花","玲奈","心春","美羽","紗良","莉央","茉白","結愛","澪","琴音","乃愛","陽菜","柚葉","咲良","愛梨","杏奈","瑠花","翠","詩乃","羽音","真白","灯","すず","遥","美空","夏帆","凪","千紘"];
const TRAITS=["努力家","天才肌","人見知り","負けず嫌い","天然","ファンサ職人","SNS強者","リーダー型","マイペース","表現者","研究熱心","ムードメーカー"];
const CONCEPTS=["王道清楚","儚い青春","Kawaii","クール","ロック","ダーク","和風","韓国系"];
const RIVAL_NAMES=["LUMINA","MELTY HOUR","NOIR PARADE","CANDY LOOP","ASTER","NEON RIOT","BLUE HAZE","MIRAGE","PURELY","AMBER5","NOVA8","CITRON"];
const VENUES=[
{id:"live50",name:"地下ライブハウス",cap:50,cost:70000,ticket:2500,minPower:0},
{id:"live100",name:"100人ライブハウス",cap:100,cost:110000,ticket:3000,minPower:0},
{id:"live300",name:"300人ライブハウス",cap:300,cost:180000,ticket:3500,minPower:12},
{id:"live800",name:"800人ホール",cap:800,cost:420000,ticket:4500,minPower:24},
{id:"zepp",name:"Zepp級",cap:2000,cost:900000,ticket:5500,minPower:38},
{id:"budokan",name:"武道館級",cap:10000,cost:3800000,ticket:7800,minPower:58},
{id:"arena",name:"アリーナ級",cap:15000,cost:6500000,ticket:8800,minPower:72},
{id:"dome",name:"ドーム級",cap:50000,cost:22000000,ticket:11000,minPower:88}
];
const GOODS=[
{id:"photo",name:"生写真セット",cost:70000,price:1200,appeal:1.15},
{id:"acrylic",name:"アクリルスタンド",cost:180000,price:1800,appeal:1.25},
{id:"towel",name:"推しメンタオル",cost:220000,price:2500,appeal:1.35},
{id:"penlight",name:"公式ペンライト",cost:360000,price:3500,appeal:1.45},
{id:"plush",name:"ぬいぐるみ",cost:520000,price:4200,appeal:1.55}
];
const STAFF_POOL=[
{id:"manager",name:"現場マネージャー",salary:180000,skill:"Management",boost:8,desc:"疲労・Mood悪化を軽減"},
{id:"trainer",name:"育成ディレクター",salary:220000,skill:"Training",boost:10,desc:"レッスン成長量UP"},
{id:"sns",name:"SNSプロデューサー",salary:200000,skill:"SNS",boost:12,desc:"SNSバズ率UP"},
{id:"sales",name:"営業担当",salary:240000,skill:"Sales",boost:10,desc:"メディア・スポンサー成功率UP"},
{id:"creative",name:"クリエイティブD",salary:260000,skill:"Creative",boost:12,desc:"楽曲・MV評価UP"},
{id:"goods",name:"MD担当",salary:190000,skill:"Merch",boost:10,desc:"グッズ販売効率UP"},
{id:"finance",name:"経営管理責任者",salary:280000,skill:"Finance",boost:12,desc:"固定費圧縮・投資家交渉UP"},
{id:"tour",name:"ライブ制作責任者",salary:260000,skill:"Tour",boost:12,desc:"ツアー・自社フェス効率UP"}
];
const LABELS=[
{id:"indie",name:"自主制作",advance:0,share:0,creative:100,promo:0,minPower:0},
{id:"boutique",name:"Boutique Records",advance:800000,share:18,creative:85,promo:7,minPower:20},
{id:"major",name:"Major Star Music",advance:2500000,share:28,creative:65,promo:15,minPower:42},
{id:"top",name:"NOVA Entertainment",advance:6000000,share:35,creative:50,promo:24,minPower:65}
];
const SPONSORS=[
{id:"drink",name:"Spark Energy",fee:700000,months:6,brand:5,condition:"SNS"},
{id:"fashion",name:"LUNE Apparel",fee:1200000,months:8,brand:9,condition:"MV"},
{id:"tech",name:"Pulse Mobile",fee:2000000,months:10,brand:12,condition:"media"}
];
const JOBS=[
{id:"magazine",name:"ファッション誌撮影",pay:120000,fans:180,stat:"Visual",fatigue:8},
{id:"variety",name:"バラエティ収録",pay:180000,fans:260,stat:"Talk",fatigue:12},
{id:"drama",name:"配信ドラマ出演",pay:350000,fans:420,stat:"Visual",fatigue:18},
{id:"radio",name:"ラジオレギュラー",pay:90000,fans:130,stat:"Talk",fatigue:6},
{id:"dance",name:"ダンス動画企画",pay:70000,fans:220,stat:"Dance",fatigue:9}
];
const BIG_DEALS=[
{id:"cm",name:"全国CM出演",need:45,pay:2500000,fans:4500,rep:7,desc:"全国認知が一段跳ねる"},
{id:"movie",name:"映画タイアップ",need:55,pay:1800000,fans:3800,rep:9,desc:"作品ヒット時の伸びが大きい"},
{id:"drama",name:"地上波ドラマ主題歌",need:50,pay:1600000,fans:3200,rep:8,desc:"楽曲とグループ認知が伸びる"},
{id:"fashion",name:"大型ファッションイベント",need:38,pay:900000,fans:1800,rep:5,desc:"女性ファンを伸ばしやすい"}
];
const INVESTORS=[
{id:"angel",name:"エンジェル投資家",cash:3000000,equity:8,rep:0},
{id:"fund",name:"エンタメファンド",cash:10000000,equity:18,rep:8},
{id:"strategic",name:"大手メディア企業",cash:25000000,equity:30,rep:15}
];
const TOUR_CITIES=[
{name:"東京",cost:900000,cap:2500},
{name:"大阪",cost:750000,cap:1800},
{name:"名古屋",cost:650000,cap:1400},
{name:"福岡",cost:650000,cap:1200},
{name:"札幌",cost:700000,cap:1100},
{name:"仙台",cost:600000,cap:1000}
];

const SAVE_KEY="idol_dynasty_v05_save";
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const rand=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const avg=a=>a.reduce((x,y)=>x+y,0)/Math.max(1,a.length);
const money=n=>"¥"+Math.round(n).toLocaleString("ja-JP");

let selectedConcept="王道清楚", selection=new Set(), lastResult=null, toastTimer=null;

function makeGroupModel(name,concept,producerType="王道",id="main"){
  return{
    id,name,concept,producerType,
    members:[],relationships:{},chemistries:[],centerId:null,selectedIds:[],generation:1,
    fans:0,power:5,growth:0,tier:"E",songs:[],activeSongId:null,selectedVenueId:"live100",
    liveExp:0,snsMomentum:0,goodsSales:0,handshakeFans:0,fanTrust:70,brand:10,
    mvLibrary:[],outfits:[],fanSegments:{core:10,casual:55,female:20,overseas:5,live:10},
    secondGenDone:false,monthlyPopularityDelta:{}
  }
}

function freshState(){
  const main=makeGroupModel("ASTERIA","王道清楚","王道","main");
  return{
    screen:"title",tab:"home",group:null,candidates:[],month:1,year:1,cash:3000000,
    activeGroupId:"main",groups:[main],
    officeLevel:1,staff:[],labelId:"indie",sponsors:[],companyReputation:10,
    companyEquity:100,investorCashRaised:0,debt:0,
    news:[],rivals:[],history:[],awards:[],pendingEvent:null,eventLog:[],
    selectedAction:null,modalMemberId:null,
    pl:{revenue:0,expenses:0,profit:0,lastRevenue:0,lastExpenses:0,lastProfit:0},
    yearStats:{fanGain:0,revenue:0,lives:0,viral:0,songs:0},
    tours:[],festivals:[],transfers:[],
    marketMembers:[],
    pendingDealIds:[]
  };
}
let state=freshState();

function G(){return state.groups.find(g=>g.id===state.activeGroupId)||state.groups[0]}
function totalFans(){return state.groups.reduce((s,g)=>s+g.fans,0)}
function avgCompanyPower(){return Math.round(avg(state.groups.map(g=>g.power)))}
function tierFromPower(p){if(p>=90)return"S+";if(p>=78)return"S";if(p>=66)return"A+";if(p>=54)return"A";if(p>=42)return"B+";if(p>=32)return"B";if(p>=22)return"C";if(p>=12)return"D";return"E"}
function generateCandidate(i,generation=1){return{
  id:`g${generation}_${Date.now()}_${i}_${rand(10,99)}`,
  name:NAMES[(i+rand(0,NAMES.length-1))%NAMES.length],age:rand(15,22),generation,
  trait:TRAITS[rand(0,TRAITS.length-1)],status:"active",
  stats:{Visual:rand(35,92),Vocal:rand(30,88),Dance:rand(30,90),Talk:rand(25,85),SNS:rand(20,95),Stage:rand(25,88),Mental:rand(35,95)},
  hidden:{Star:rand(25,100),Potential:rand(45,100),ScandalRisk:rand(5,65),Leadership:rand(20,95),Loyalty:rand(30,100)},
  popularity:0,fatigue:0,mood:70,awakened:false,monthsInGroup:0
}}
function makeRivals(){return RIVAL_NAMES.map((name,i)=>{const p=rand(8,48)+i*2;return{name,power:p,growth:rand(-8,22),tier:tierFromPower(p)}})}
function getActiveMembers(){return G().members.filter(m=>m.status==="active")}
function getMember(id){return G().members.find(m=>m.id===id)}
function getSelectedMembers(){const ids=G().selectedIds.length?G().selectedIds:getActiveMembers().map(m=>m.id);return getActiveMembers().filter(m=>ids.includes(m.id))}
function getActiveSong(){return G().songs.find(s=>s.id===G().activeSongId)}
function hasStaff(id){return state.staff.some(s=>s.id===id)}
function currentLabel(){return LABELS.find(l=>l.id===state.labelId)||LABELS[0]}

function initRelationships(group=G()){
  group.relationships={};
  for(const a of group.members){
    group.relationships[a.id]={};
    for(const b of group.members)if(a.id!==b.id)group.relationships[a.id][b.id]=rand(-25,70);
  }
  updateChemistry(group)
}
function ensureRelationshipsFor(newMembers,group=G()){
  for(const n of newMembers){
    group.relationships[n.id]=group.relationships[n.id]||{};
    for(const m of group.members){
      if(n.id===m.id)continue;
      group.relationships[n.id][m.id]=rand(-20,55);
      group.relationships[m.id]=group.relationships[m.id]||{};
      group.relationships[m.id][n.id]=rand(-20,55);
    }
  }
  updateChemistry(group)
}
function updateChemistry(group=G()){
  let arr=[],active=group.members.filter(m=>m.status==="active");
  for(let i=0;i<active.length;i++)for(let j=i+1;j<active.length;j++){
    const a=active[i],b=active[j];
    const rel=(group.relationships[a.id]?.[b.id]||0)+(group.relationships[b.id]?.[a.id]||0);
    const appeal=Math.round((a.hidden.Star+b.hidden.Star+a.stats.SNS+b.stats.SNS)/4);
    const score=Math.round(rel/2+appeal/2);
    if(score>=60)arr.push({a:a.id,b:b.id,score,name:`${a.name} × ${b.name}`})
  }
  group.chemistries=arr.sort((x,y)=>y.score-x.score).slice(0,5)
}
function updateDerived(group=G()){group.tier=tierFromPower(group.power)}
function normalizeFanSegments(group=G()){
  let vals=group.fanSegments,total=Object.values(vals).reduce((a,b)=>a+b,0);if(total<=0)return;
  for(const k in vals)vals[k]=Math.round(vals[k]/total*100);
  let diff=100-Object.values(vals).reduce((a,b)=>a+b,0);vals.casual+=diff
}
function kpi(l,v){return`<div class="kpi"><div class="label">${l}</div><div class="value">${v}</div></div>`}
function statBar(k,v,kind=""){return`<div class="stat"><div class="statline"><span>${k}</span><span>${Math.round(v)}</span></div><div class="bar"><div class="fill ${kind}" style="width:${clamp(v,0,100)}%"></div></div></div>`}
function showToast(msg){document.querySelectorAll(".toast").forEach(x=>x.remove());const el=document.createElement("div");el.className="toast";el.textContent=msg;document.body.appendChild(el);clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.remove(),1800)}

function render(){
  const app=document.getElementById("app");
  if(state.screen==="title")app.innerHTML=titleScreen();
  else if(state.screen==="create")app.innerHTML=createScreen();
  else if(state.screen==="audition")app.innerHTML=auditionScreen();
  else if(state.screen==="game")app.innerHTML=gameShell();
  else if(state.screen==="result")app.innerHTML=resultScreen();
  if(state.modalMemberId)document.body.insertAdjacentHTML("beforeend",memberModal(state.modalMemberId));
  if(state.pendingEvent)document.body.insertAdjacentHTML("beforeend",eventModal(state.pendingEvent))
}
function titleScreen(){
  const hasSave=!!localStorage.getItem(SAVE_KEY);
  return`<div class="hero"><div class="hero-card"><div class="logo">IDOL DYNASTY</div><div class="subtitle">芸能事務所経営シミュレーション v0.5</div><div class="stack" style="justify-content:center"><button onclick="startNew()">NEW GAME</button>${hasSave?`<button class="secondary" onclick="loadGame()">CONTINUE</button>`:""}</div><div class="footer-note">複数グループ操作・会社PL・全国ツアー・自社フェス・大型案件・移籍・投資家を実装。</div></div></div>`
}
function createScreen(){
  return`<div class="container"><div class="topbar"><h1>GROUP CREATE</h1><span class="muted">STEP 1 / 2</span></div><div class="card"><div class="formrow"><label>グループ名</label><input id="groupName" value="ASTERIA" maxlength="24"></div><div class="formrow"><label>コンセプト</label><div class="grid grid2">${CONCEPTS.map((c,i)=>`<div class="choice ${i===0?"active":""}" onclick="selectConcept(this,'${c}')">${c}</div>`).join("")}</div></div><div class="formrow"><label>プロデューサー方針</label><select id="producerType"><option value="王道">王道アイドル型</option><option value="SNS">SNS型</option><option value="ライブ">ライブ型</option><option value="クリエイティブ">クリエイティブ型</option><option value="経営">経営型</option></select></div><button onclick="goAudition()">オーディションへ</button></div></div>`
}
function selectConcept(el,c){selectedConcept=c;document.querySelectorAll(".choice").forEach(x=>x.classList.remove("active"));el.classList.add("active")}
function candidateCard(c){const s=selection.has(c.id);return`<div class="card member-card ${s?"action-card selected":""}"><div class="avatar"></div><div class="member-head"><div><strong>${c.name}</strong> <span class="muted">${c.age}歳</span></div><button class="${s?"":"secondary"}" onclick="toggleCandidate('${c.id}')">${s?"選抜中":"選ぶ"}</button></div><span class="badge">${c.trait}</span>${["Visual","Vocal","Dance","SNS","Stage"].map(k=>statBar(k,c.stats[k])).join("")}</div>`}
function auditionScreen(){return`<div class="container"><div class="topbar"><h1>AUDITION</h1><span class="muted">5人を選抜 / STEP 2 / 2</span></div><div class="card" style="margin-bottom:16px"><strong>${state.group.name}</strong> ｜ ${state.group.concept} ｜ ${state.group.producerType}型</div><div class="grid grid3">${state.candidates.map(candidateCard).join("")}</div><div style="position:sticky;bottom:12px;margin-top:18px" class="card"><div class="split"><div>選択中：<strong>${selection.size}</strong> / 5</div><button onclick="confirmMembers()">この5人でデビュー</button></div></div></div>`}

function gameShell(){
  updateDerived();
  const g=G();
  return`<div class="container">
  <div class="topbar"><div><h1 style="margin:0">${g.name}</h1><div class="muted">YEAR ${state.year} / MONTH ${state.month} ・ ${g.concept}</div></div><div class="stack"><button class="secondary" onclick="saveGame()">SAVE</button><button class="ghost" onclick="resetGame()">RESET</button></div></div>
  <div class="group-switcher">${state.groups.map(gr=>`<button class="${gr.id===state.activeGroupId?"active":"secondary"}" onclick="switchGroup('${gr.id}')">${gr.name}</button>`).join("")}</div>
  <div class="kpis">${kpi("Company Cash",money(state.cash))}${kpi("Group Fans",g.fans.toLocaleString())}${kpi("Power",g.power)}${kpi("Growth",(g.growth>=0?"+":"")+g.growth+"%")}${kpi("Tier",g.tier)}</div>
  <div class="mini-grid" style="margin-top:10px">${kpi("Total Fans",totalFans().toLocaleString())}${kpi("Company Rep",state.companyReputation)}${kpi("Equity",state.companyEquity+"%")}${kpi("Office Lv",state.officeLevel)}</div>
  <div class="nav">${navBtn("home","HOME")}${navBtn("members","MEMBERS")}${navBtn("music","MUSIC")}${navBtn("live","LIVE")}${navBtn("business","BUSINESS")}${navBtn("office","OFFICE")}${navBtn("company","COMPANY")}${navBtn("media","MEDIA")}${navBtn("history","HISTORY")}${navBtn("map","IDOLMAP")}</div>${tabContent()}</div>`
}
function navBtn(id,label){return`<button class="secondary ${state.tab===id?"active":""}" onclick="setTab('${id}')">${label}</button>`}
function setTab(t){state.tab=t;render()}
function switchGroup(id){state.activeGroupId=id;state.selectedAction=null;state.modalMemberId=null;render()}
function tabContent(){if(state.tab==="members")return membersTab();if(state.tab==="music")return musicTab();if(state.tab==="live")return liveTab();if(state.tab==="business")return businessTab();if(state.tab==="office")return officeTab();if(state.tab==="company")return companyTab();if(state.tab==="media")return mediaTab();if(state.tab==="history")return historyTab();if(state.tab==="map")return mapTab();return homeTab()}

function homeTab(){
  const g=G();
  return`<div class="section-title"><h2>今月のアクション</h2><span class="muted">${g.name} を運営</span></div>
  <div class="grid grid3">
  ${actionCard("training","レッスン強化","能力成長 / 覚醒抽選","¥120,000")}
  ${actionCard("sns","SNS攻勢","新規ファン / バズ抽選","¥80,000")}
  ${actionCard("song","新曲制作","新曲追加 / レーベル補正","¥350,000")}
  ${actionCard("live","ワンマンライブ","LIVEタブで会場選択","会場費")}
  ${actionCard("handshake","特典会","コアファン・売上","¥70,000")}
  ${actionCard("media","メディア営業","認知拡大","¥100,000")}
  ${actionCard("rest","休養月間","疲労・Mood回復","¥20,000")}
  </div><div style="margin-top:14px"><button onclick="executeMonth()" ${state.selectedAction?"":"disabled"}>この方針で1か月進める</button></div>
  ${state.year>=2&&!g.secondGenDone?`<div class="section-title"><h2>NEW GENERATION</h2></div><div class="card event-card"><strong>${g.name} 2期生オーディション解禁。</strong><button style="margin-top:12px" onclick="startSecondGen()">2期生オーディション</button></div>`:""}
  ${state.year>=3&&state.groups.length<3?`<div class="section-title"><h2>AGENCY EXPANSION</h2></div><div class="card event-card"><strong>新グループ設立が可能。</strong><button style="margin-top:12px" onclick="createSecondGroup()">新グループを設立</button></div>`:""}
  <div class="section-title"><h2>注目メンバー</h2></div><div class="grid grid5">${[...getActiveMembers()].sort((a,b)=>b.popularity-a.popularity).map(memberMini).join("")}</div>
  <div class="section-title"><h2>FAN BASE</h2></div><div class="card">${fanSegmentsHTML()}</div>
  <div class="section-title"><h2>IDOL NEWS</h2></div><div class="card">${state.news.length?state.news.slice(0,7).map(n=>`<div class="news"><span>📰</span><span>${n}</span></div>`).join(""):`<span class="muted">まだニュースはありません。</span>`}</div>`
}
function actionCard(id,t,d,c){return`<div class="card action-card ${state.selectedAction===id?"selected":""}" onclick="selectAction('${id}')"><h3>${t}</h3><div class="muted">${d}</div><div style="margin-top:12px"><strong>${c}</strong></div></div>`}
function selectAction(id){state.selectedAction=id;render()}
function memberMini(m){return`<div class="card member-card" onclick="openMember('${m.id}')"><div class="avatar">${G().centerId===m.id?`<span class="center-ribbon">CENTER</span>`:""}</div><div><strong>${m.name}</strong> <span class="generation">${m.generation}期</span></div><div class="muted">${m.trait}</div><div class="big-number">${m.popularity.toLocaleString()}</div><div class="muted">personal fans</div>${statBar("Mood",m.mood)}${statBar("Fatigue",m.fatigue)}</div>`}
function fanSegmentsHTML(){normalizeFanSegments();const labels={core:"コア",casual:"ライト",female:"女性",overseas:"海外",live:"ライブ勢"};return Object.entries(G().fanSegments).map(([k,v])=>`<div class="fan-segment"><span>${labels[k]}</span><div class="bar"><div class="fill" style="width:${v}%"></div></div><strong>${v}%</strong></div>`).join("")}

function membersTab(){
  const active=[...getActiveMembers()].sort((a,b)=>b.popularity-a.popularity), graduated=G().members.filter(m=>m.status!=="active");
  return`<div class="section-title"><h2>MEMBERS</h2><span class="muted">${G().name}</span></div><div class="grid grid3">${active.map((m,i)=>memberManageCard(m,i)).join("")}</div>${graduated.length?`<div class="section-title"><h2>ALUMNI / REST</h2></div><div class="grid grid3">${graduated.map(m=>`<div class="card"><strong>${m.name}</strong><div class="muted">${m.status==="graduate"?"卒業":"活動休止"}</div></div>`).join("")}</div>`:""}`
}
function memberManageCard(m,i){const selected=G().selectedIds.includes(m.id)||getActiveMembers().length<7;return`<div class="card member-card"><div class="avatar">${G().centerId===m.id?`<span class="center-ribbon">CENTER</span>`:""}</div><div class="split"><div><strong>#${i+1} ${m.name}</strong></div><span class="pill">${m.popularity.toLocaleString()} fans</span></div><div class="muted">${m.trait}${m.awakened?" ・ ✨覚醒済":""}</div><div class="stack" style="margin-top:12px"><button onclick="setCenter('${m.id}')">${G().centerId===m.id?"CENTER":"センター任命"}</button>${getActiveMembers().length>=7?`<button class="${selected?"good":"secondary"}" onclick="toggleSelected('${m.id}')">${selected?"選抜":"非選抜"}</button>`:""}<button class="secondary" onclick="openMember('${m.id}')">詳細</button></div></div>`}
function toggleSelected(id){if(getActiveMembers().length<7)return;let ids=new Set(G().selectedIds);if(ids.has(id))ids.delete(id);else if(ids.size<5)ids.add(id);if(ids.size===0)ids=new Set(getActiveMembers().slice(0,5).map(m=>m.id));G().selectedIds=[...ids];render()}
function setCenter(id){G().centerId=id;getActiveMembers().forEach(m=>m.mood=clamp(m.mood+(m.id===id?5:-1),0,100));state.news.unshift(`${G().name}: ${getMember(id).name}が新センターに就任。`);render()}
function openMember(id){state.modalMemberId=id;render()}
function closeMember(){state.modalMemberId=null;document.querySelectorAll(".modal-bg").forEach(x=>x.remove())}
function memberModal(id){
  const m=getMember(id);if(!m)return"";
  const rels=getActiveMembers().filter(x=>x.id!==id).map(x=>({name:x.name,val:G().relationships[id]?.[x.id]||0})).sort((a,b)=>b.val-a.val);
  return`<div class="modal-bg" onclick="if(event.target===this)closeMember()"><div class="modal"><div class="split"><div><h2 style="margin:0">${m.name}</h2><div class="muted">${G().name} ・ ${m.age}歳 ・ ${m.trait}</div></div><button class="ghost" onclick="closeMember()">閉じる</button></div><div class="detail-grid" style="margin-top:18px"><div class="card profile"><div class="avatar"></div><div class="big-number">${m.popularity.toLocaleString()}</div><div class="muted">personal fans</div>${statBar("Mood",m.mood)}${statBar("Fatigue",m.fatigue)}<div class="stack" style="margin-top:12px">${m.status==="active"?`<button onclick="manualRest('${m.id}')">活動休止</button><button class="secondary" onclick="graduateMember('${m.id}')">卒業</button>`:""}</div></div><div><div class="card"><h3>能力</h3>${Object.entries(m.stats).map(([k,v])=>statBar(k,v)).join("")}<div class="muted">Potential ${m.hidden.Potential} / Star ${m.hidden.Star}</div></div><div class="card personal-job" style="margin-top:14px"><h3>個人仕事</h3>${JOBS.map(j=>`<button class="secondary" style="margin:4px" onclick="takePersonalJob('${m.id}','${j.id}')">${j.name}</button>`).join("")}</div><div class="card" style="margin-top:14px"><h3>関係性</h3>${rels.map(r=>`<div class="relationship"><span>${r.name}</span><strong>${r.val}</strong></div>`).join("")}</div></div></div></div></div>`
}
function manualRest(id){const m=getMember(id);m.status="rest";state.news.unshift(`${G().name}: ${m.name}が活動休止。`);if(G().centerId===id)G().centerId=getActiveMembers()[0]?.id||null;closeMember();render()}
function graduateMember(id){const m=getMember(id);if(!confirm(`${m.name}を卒業させますか？`))return;m.status="graduate";state.news.unshift(`${G().name}: ${m.name}が卒業。`);if(G().centerId===id)G().centerId=getActiveMembers()[0]?.id||null;closeMember();render()}
function takePersonalJob(mid,jid){const m=getMember(mid),j=JOBS.find(x=>x.id===jid);if(!m||!j)return;const success=clamp((m.stats[j.stat]+m.hidden.Star)/200,0.2,0.95);const hit=Math.random()<success;const fans=hit?Math.round(j.fans*(1+m.hidden.Star/160)):Math.round(j.fans*.45);state.cash+=j.pay;state.pl.revenue+=j.pay;G().fans+=fans;m.popularity+=Math.round(fans*.6);m.fatigue=clamp(m.fatigue+j.fatigue,0,100);state.companyReputation=clamp(state.companyReputation+(hit?2:1),0,100);state.news.unshift(`${m.name}が「${j.name}」に出演。${fans.toLocaleString()}人の新規ファン。`);closeMember();render()}

function musicTab(){const g=G();return`<div class="section-title"><h2>MUSIC / CREATIVE</h2><span class="muted">${g.name}</span></div><div class="card"><strong>現在のレーベル: ${currentLabel().name}</strong><div class="muted">宣伝力 +${currentLabel().promo} / クリエイティブ自由度 ${currentLabel().creative}</div></div>${g.songs.length?`<div class="grid grid3" style="margin-top:14px">${g.songs.map(s=>`<div class="card song-card ${g.activeSongId===s.id?"active":""}" onclick="G().activeSongId='${s.id}';render()"><h3>${s.title}</h3><div class="big-number">${s.score}</div><div class="muted">Quality</div>${statBar("Viral",s.viral)}${statBar("Live Power",s.live)}</div>`).join("")}</div>`:`<div class="card muted" style="margin-top:14px">まだ楽曲がありません。</div>`}<div class="section-title"><h2>MV PRODUCTION</h2></div><div class="grid grid3">${[300000,900000,2500000].map((b,i)=>`<div class="card"><div class="thumb">MV ${i+1}</div><h3>${["低予算","本格","大型"][i]}MV</h3><div>${money(b)}</div><button style="margin-top:10px" onclick="produceMV(${b})" ${state.cash<b?"disabled":""}>制作</button></div>`).join("")}</div><div class="section-title"><h2>OUTFIT</h2></div><div class="grid grid3">${[180000,500000,1200000].map((b,i)=>`<div class="card"><div class="thumb">LOOK ${i+1}</div><h3>${["ライブ衣装","新衣装","ブランド衣装"][i]}</h3><div>${money(b)}</div><button style="margin-top:10px" onclick="produceOutfit(${b})" ${state.cash<b?"disabled":""}>制作</button></div>`).join("")}</div>`}
function produceMV(budget){if(state.cash<budget)return;const quality=clamp(Math.round(45+Math.log10(budget)*8+rand(-10,12)+(hasStaff("creative")?10:0)),20,100);state.cash-=budget;state.pl.expenses+=budget;G().mvLibrary.push({id:"mv"+Date.now(),budget,quality});G().brand=clamp(G().brand+Math.round(quality/18),0,100);G().fanSegments.casual+=5;G().fanSegments.female+=3;normalizeFanSegments();state.news.unshift(`${G().name}: 新MVを公開。映像評価 ${quality}。`);render()}
function produceOutfit(budget){if(state.cash<budget)return;const quality=clamp(Math.round(40+Math.log10(budget)*8+rand(-10,12)+(hasStaff("creative")?8:0)),20,100);state.cash-=budget;state.pl.expenses+=budget;G().outfits.push({id:"o"+Date.now(),budget,quality});G().brand=clamp(G().brand+Math.round(quality/20),0,100);G().fanSegments.female+=4;normalizeFanSegments();state.news.unshift(`${G().name}: 新衣装を制作。ビジュアル評価 ${quality}。`);render()}

function liveTab(){const active=getSelectedMembers(),g=G();return`<div class="section-title"><h2>LIVE / TOUR</h2><span class="muted">${g.name}</span></div><div class="card" style="margin-bottom:14px"><strong>出演選抜</strong><div class="muted">${active.map(m=>m.name).join(" / ")||"未設定"} ｜ 勝負曲: ${getActiveSong()?.title||"なし"}</div></div><div class="grid grid3">${VENUES.map(v=>{const locked=g.power<v.minPower;return`<div class="card venue-card ${g.selectedVenueId===v.id?"active":""}" onclick="${locked?"":`G().selectedVenueId='${v.id}';render()`}"><h3>${v.name}</h3><div class="big-number">${v.cap.toLocaleString()}</div><div class="muted">capacity</div><div>${money(v.cost)}</div><span class="badge">${locked?`Power ${v.minPower}で解禁`:"予約可能"}</span></div>`}).join("")}</div><div class="section-title"><h2>NATIONAL TOUR</h2></div><div class="card">${TOUR_CITIES.map(c=>`<div class="tour-stop"><span><strong>${c.name}</strong><div class="muted">想定キャパ ${c.cap.toLocaleString()}</div></span><span>${money(c.cost)}</span><button class="secondary" onclick="runTourStop('${c.name}')">開催</button></div>`).join("")}</div>`}
function runTourStop(city){const c=TOUR_CITIES.find(x=>x.name===city);if(!c||state.cash<c.cost)return;const g=G();const staffBoost=hasStaff("tour")?1.18:1;const draw=Math.round((g.fans*.06+g.power*18+rand(60,260))*staffBoost);const attendance=Math.min(c.cap,draw);const revenue=attendance*5800;state.cash+=revenue-c.cost;state.pl.revenue+=revenue;state.pl.expenses+=c.cost;g.fans+=Math.round(attendance*.45);g.power=clamp(g.power+(attendance>c.cap*.85?3:1),1,100);g.fanSegments.live+=4;normalizeFanSegments();state.tours.push({year:state.year,month:state.month,group:g.name,city,attendance});state.news.unshift(`${g.name} 全国ツアー ${city}: ${attendance.toLocaleString()}人動員。`);render()}

function businessTab(){const g=G();return`<div class="section-title"><h2>BUSINESS</h2><span class="muted">${g.name}</span></div><div class="grid grid2"><div class="card"><h3>特典会</h3><div class="big-number">${g.handshakeFans.toLocaleString()}</div><div class="muted">累計コアファン</div></div><div class="card"><h3>グッズ累計売上</h3><div class="big-number">${money(g.goodsSales)}</div></div></div><div class="section-title"><h2>GOODS</h2></div><div class="shop-grid">${GOODS.map(item=>`<div class="card"><h3>${item.name}</h3><div class="muted">制作費 ${money(item.cost)}</div><div>単価 ${money(item.price)}</div><button style="margin-top:12px" onclick="sellGoods('${item.id}')" ${state.cash<item.cost?"disabled":""}>販売する</button></div>`).join("")}</div>`}
function sellGoods(id){const item=GOODS.find(x=>x.id===id);if(!item||state.cash<item.cost)return;const g=G(),boost=hasStaff("goods")?1.22:1;const core=Math.max(20,Math.round(g.fans*(0.035+g.fanTrust/2000)));const sold=Math.min(core,Math.round(core*rand(55,100)/100*item.appeal*boost));const revenue=sold*item.price;state.cash+=revenue-item.cost;state.pl.revenue+=revenue;state.pl.expenses+=item.cost;g.goodsSales+=revenue;g.brand=clamp(g.brand+rand(1,3),0,100);state.news.unshift(`${g.name}: ${item.name}を${sold.toLocaleString()}個販売。売上${money(revenue)}。`);render()}

function officeTab(){return`<div class="section-title"><h2>OFFICE MANAGEMENT</h2><span class="muted">芸能事務所を育てる</span></div><div class="office-grid"><div><div class="card"><div class="split"><div><h3>Office Level ${state.officeLevel}</h3><div class="muted">会社評判 ${state.companyReputation} / 最大スタッフ ${2+state.officeLevel*2}名</div></div><button onclick="upgradeOffice()" ${state.cash<state.officeLevel*1200000?"disabled":""}>拡張 ${money(state.officeLevel*1200000)}</button></div></div><div class="section-title"><h2>STAFF</h2></div><div class="grid grid2">${STAFF_POOL.map(s=>`<div class="card staff-card"><h3>${s.name}</h3><div class="staff-skill">${s.skill} +${s.boost}</div><div class="muted">${s.desc}</div><div style="margin-top:10px">月給 ${money(s.salary)}</div>${hasStaff(s.id)?`<span class="badge money">採用済</span>`:`<button style="margin-top:10px" onclick="hireStaff('${s.id}')" ${state.staff.length>=2+state.officeLevel*2?"disabled":""}>採用</button>`}</div>`).join("")}</div></div><div><div class="card"><h3>LABEL CONTRACT</h3>${LABELS.map(l=>`<div class="contract ${state.labelId===l.id?"active":""}"><strong>${l.name}</strong><div class="muted">前払金 ${money(l.advance)} / 売上分配 ${l.share}% / 宣伝 +${l.promo}</div>${state.labelId===l.id?`<span class="badge brand">契約中</span>`:`<button style="margin-top:8px" onclick="signLabel('${l.id}')" ${avgCompanyPower()<l.minPower?"disabled":""}>契約</button>`}</div>`).join("")}</div><div class="card" style="margin-top:16px"><h3>SPONSORS</h3>${SPONSORS.map(s=>`<div class="contract"><strong>${s.name}</strong><div>${money(s.fee)} / ${s.months}か月</div>${state.sponsors.some(x=>x.id===s.id)?`<span class="badge money">契約中</span>`:`<button style="margin-top:8px" onclick="signSponsor('${s.id}')">契約</button>`}</div>`).join("")}</div></div></div><div class="section-title"><h2>GROUP PORTFOLIO</h2></div><div class="grid grid2">${state.groups.map(groupPortfolioCard).join("")}</div>`}
function groupPortfolioCard(g){return`<div class="card portfolio-card ${g.id===state.activeGroupId?"active":""}" onclick="switchGroup('${g.id}')"><div class="thumb">${g.id==="main"?"MAIN":"GROUP"}</div><h3>${g.name}</h3><div class="muted">${g.concept}</div><div>Fans ${g.fans.toLocaleString()} / Power ${g.power} / Tier ${g.tier}</div></div>`}
function hireStaff(id){const s=STAFF_POOL.find(x=>x.id===id);if(!s||hasStaff(id))return;state.staff.push({...s});state.companyReputation=clamp(state.companyReputation+2,0,100);state.news.unshift(`${s.name}を採用。`);render()}
function upgradeOffice(){const cost=state.officeLevel*1200000;if(state.cash<cost)return;state.cash-=cost;state.pl.expenses+=cost;state.officeLevel++;state.companyReputation=clamp(state.companyReputation+6,0,100);state.news.unshift(`事務所をOffice Level ${state.officeLevel}へ拡張。`);render()}
function signLabel(id){const l=LABELS.find(x=>x.id===id);if(!l||avgCompanyPower()<l.minPower)return;state.labelId=id;state.cash+=l.advance;state.pl.revenue+=l.advance;state.companyReputation=clamp(state.companyReputation+5,0,100);state.news.unshift(`${l.name}とレーベル契約を締結。`);render()}
function signSponsor(id){const s=SPONSORS.find(x=>x.id===id);if(!s||state.sponsors.some(x=>x.id===id))return;state.sponsors.push({...s,remaining:s.months});state.cash+=s.fee;state.pl.revenue+=s.fee;state.groups.forEach(g=>g.brand=clamp(g.brand+s.brand,0,100));state.companyReputation=clamp(state.companyReputation+4,0,100);state.news.unshift(`${s.name}とスポンサー契約。`);render()}

function companyTab(){
  const salary=state.staff.reduce((s,x)=>s+x.salary,0);
  const activeSponsors=state.sponsors.reduce((s,x)=>s+x.fee/Math.max(1,x.months),0);
  return`<div class="section-title"><h2>COMPANY</h2><span class="muted">会社全体を経営</span></div>
  <div class="company-pl">
    <div class="pl-card"><div class="muted">今月売上</div><div class="big-number pl-positive">${money(state.pl.revenue)}</div></div>
    <div class="pl-card"><div class="muted">今月費用</div><div class="big-number pl-negative">${money(state.pl.expenses)}</div></div>
    <div class="pl-card"><div class="muted">今月利益</div><div class="big-number ${state.pl.profit>=0?"pl-positive":"pl-negative"}">${money(state.pl.profit)}</div></div>
    <div class="pl-card"><div class="muted">現金残高</div><div class="big-number">${money(state.cash)}</div></div>
  </div>
  <div class="section-title"><h2>固定費構造</h2></div><div class="balance-sheet"><div class="card"><h3>月次固定費</h3><div>スタッフ給与 ${money(salary)}</div><div>事務所維持費 ${money(state.officeLevel*90000)}</div><div class="muted">スポンサー月換算 ${money(activeSponsors)}</div></div><div class="card"><h3>資本構成</h3><div>創業者持分 ${state.companyEquity}%</div><div>外部調達累計 ${money(state.investorCashRaised)}</div><div>借入金 ${money(state.debt)}</div></div></div>
  <div class="section-title"><h2>BIG DEALS</h2></div><div class="grid grid2">${BIG_DEALS.map(d=>`<div class="card deal-card"><h3>${d.name}</h3><div class="muted">${d.desc}</div><div>報酬 ${money(d.pay)} / 必要 Company Rep ${d.need}</div><button style="margin-top:10px" onclick="takeBigDeal('${d.id}')" ${state.companyReputation<d.need?"disabled":""}>受注</button></div>`).join("")}</div>
  <div class="section-title"><h2>INVESTORS</h2></div><div class="grid grid3">${INVESTORS.map(i=>`<div class="card investor-card"><h3>${i.name}</h3><div>${money(i.cash)}</div><div class="muted">持分 ${i.equity}% を要求</div><button style="margin-top:10px" onclick="raiseInvestment('${i.id}')" ${state.companyEquity<=i.equity?"disabled":""}>資金調達</button></div>`).join("")}</div>
  <div class="section-title"><h2>OWN FESTIVAL</h2></div><div class="card"><strong>IDOL DYNASTY FEST</strong><div class="muted">所属グループ合同の自社フェス。所属グループが2組以上で効率UP。</div><div class="festival-lineup" style="margin:12px 0">${state.groups.map(g=>`<span class="badge">${g.name}</span>`).join("")}</div><button onclick="runOwnFestival()" ${state.cash<1800000?"disabled":""}>開催 ¥1,800,000</button></div>
  <div class="section-title"><h2>TALENT MARKET</h2></div><div class="grid grid3">${talentMarketHTML()}</div>`
}
function takeBigDeal(id){const d=BIG_DEALS.find(x=>x.id===id);if(!d||state.companyReputation<d.need)return;const g=G(),hit=Math.random()<(0.55+state.companyReputation/250+(hasStaff("sales")?.12:0));const fans=hit?Math.round(d.fans*(1+g.brand/140)):Math.round(d.fans*.45);state.cash+=d.pay;state.pl.revenue+=d.pay;g.fans+=fans;state.companyReputation=clamp(state.companyReputation+d.rep,0,100);if(d.id==="fashion")g.fanSegments.female+=6;else g.fanSegments.casual+=5;normalizeFanSegments();state.news.unshift(`${g.name}: ${d.name} を獲得。${fans.toLocaleString()}人の新規ファン。`);render()}
function raiseInvestment(id){const inv=INVESTORS.find(x=>x.id===id);if(!inv||state.companyEquity<=inv.equity)return;state.companyEquity-=inv.equity;state.cash+=inv.cash;state.investorCashRaised+=inv.cash;state.companyReputation=clamp(state.companyReputation+inv.rep,0,100);state.news.unshift(`${inv.name}から${money(inv.cash)}を調達。創業者持分 ${state.companyEquity}%。`);render()}
function runOwnFestival(){if(state.cash<1800000)return;const cost=1800000;const combinedFans=totalFans(),combinedPower=avgCompanyPower();const attendance=Math.min(12000,Math.round(combinedFans*.035+combinedPower*55+rand(500,1600))*(hasStaff("tour")?1.15:1));const revenue=attendance*6800;state.cash+=revenue-cost;state.pl.revenue+=revenue;state.pl.expenses+=cost;state.groups.forEach(g=>{g.fans+=Math.round(attendance*.08);g.power=clamp(g.power+2,1,100);g.brand=clamp(g.brand+4,0,100)});state.companyReputation=clamp(state.companyReputation+7,0,100);state.festivals.push({year:state.year,month:state.month,attendance});state.news.unshift(`自社フェス IDOL DYNASTY FEST 開催。${attendance.toLocaleString()}人動員！`);render()}
function refreshTalentMarket(){state.marketMembers=Array.from({length:6},(_,i)=>{const m=generateCandidate(i,1);m.transferFee=rand(350000,1800000);m.formerGroup=RIVAL_NAMES[rand(0,RIVAL_NAMES.length-1)];return m})}
function talentMarketHTML(){if(!state.marketMembers.length)refreshTalentMarket();return state.marketMembers.map(m=>`<div class="card market-member"><h3>${m.name}</h3><div class="muted">${m.formerGroup} 所属 / ${m.trait}</div><div>Star ${m.hidden.Star} / Potential ${m.hidden.Potential}</div><div>移籍金 ${money(m.transferFee)}</div><button style="margin-top:10px" onclick="poachMember('${m.id}')" ${state.cash<m.transferFee?"disabled":""}>獲得交渉</button></div>`).join("")}
function poachMember(id){const m=state.marketMembers.find(x=>x.id===id);if(!m||state.cash<m.transferFee)return;const success=Math.random()<(0.45+state.companyReputation/200);if(!success){state.cash-=Math.round(m.transferFee*.08);state.pl.expenses+=Math.round(m.transferFee*.08);state.news.unshift(`${m.name}の獲得交渉は不成立。`);render();return}state.cash-=m.transferFee;state.pl.expenses+=m.transferFee;m.generation=G().generation;m.popularity=rand(100,900);G().members.push(m);ensureRelationshipsFor([m]);G().selectedIds=getActiveMembers().sort((a,b)=>b.popularity-a.popularity).slice(0,5).map(x=>x.id);state.transfers.push({year:state.year,month:state.month,name:m.name,from:m.formerGroup,to:G().name,fee:m.transferFee});state.marketMembers=state.marketMembers.filter(x=>x.id!==id);state.news.unshift(`${m.formerGroup}から${m.name}を獲得。移籍金 ${money(m.transferFee)}。`);render()}

function mediaTab(){return`<div class="section-title"><h2>MEDIA / PERSONAL WORK</h2><span class="muted">${G().name}</span></div><div class="grid grid3">${getActiveMembers().map(m=>`<div class="card"><h3>${m.name}</h3><div class="muted">${m.trait}</div><div>Star ${m.hidden.Star} / Talk ${m.stats.Talk} / Visual ${m.stats.Visual}</div><button style="margin-top:10px" onclick="openMember('${m.id}')">仕事を選ぶ</button></div>`).join("")}</div>`}
function historyTab(){return`<div class="section-title"><h2>IDOL HISTORY</h2></div><div class="grid grid2"><div class="card"><h3>AWARDS</h3>${state.awards.length?state.awards.slice().reverse().map(a=>`<div class="award"><strong>YEAR ${a.year} ${a.title}</strong><div class="muted">${a.detail}</div></div>`).join(""):`<div class="muted">まだ受賞歴はありません。</div>`}</div><div class="card"><h3>TIMELINE</h3><div class="timeline">${state.history.length?state.history.slice().reverse().slice(0,30).map(h=>`<div class="timeline-item"><strong>Y${h.year} M${h.month}</strong><div>${h.headline||h.type||h.action}</div></div>`).join(""):`<div class="muted">歴史はこれから。</div>`}</div></div></div>`}
function mapTab(){const rows=[...state.rivals,...state.groups.map(g=>({name:g.name,power:g.power,growth:g.growth,tier:g.tier,self:g.id===state.activeGroupId}))].sort((a,b)=>b.power-a.power);return`<div class="section-title"><h2>IDOL POWER MAP</h2></div><div class="card">${rows.map((r,i)=>`<div class="rankrow ${r.self?"rank-self":""}"><strong>#${i+1}</strong><span>${r.name}${r.self?" ★":""}</span><span>Power ${r.power}</span><span class="growth">${r.growth>=0?"+":""}${r.growth}%</span><strong>${r.tier}</strong></div>`).join("")}</div>`}

function createSong(){const g=G(),selected=getSelectedMembers(),base=selected.length?selected:getActiveMembers(),l=currentLabel();const staffBoost=hasStaff("creative")?8:0;const vocal=avg(base.map(m=>m.stats.Vocal)),dance=avg(base.map(m=>m.stats.Dance)),star=avg(base.map(m=>m.hidden.Star));const score=clamp(Math.round((vocal+dance+star)/3+rand(-12,15)+staffBoost+l.promo/3),25,100),viral=clamp(score+rand(-20,20)+l.promo,15,100),live=clamp(Math.round((score+dance)/2+rand(-10,14)),15,100);const song={id:"s"+Date.now(),title:["透明な約束","青の余白","きみだけシグナル","夜明けのカスミソウ","パラレル青春","微熱サイダー","星屑リフレイン"][rand(0,6)]+" "+(g.songs.length+1),score,viral,live,release:`Y${state.year} M${state.month}`};g.songs.push(song);g.activeSongId=song.id;state.yearStats.songs++;return song}
function maybeAwaken(){const candidates=getActiveMembers().filter(m=>!m.awakened&&m.hidden.Potential>=70);if(!candidates.length)return null;const m=candidates[rand(0,candidates.length-1)];const chance=0.05+(m.hidden.Potential/1000);if(Math.random()>chance)return null;m.awakened=true;["Vocal","Dance","Stage","SNS"].forEach(k=>m.stats[k]=clamp(m.stats[k]+rand(6,14),0,100));m.hidden.Star=clamp(m.hidden.Star+rand(5,12),0,100);return m}
function maybeWorldEvent(){if(Math.random()>0.23)return;const type=["scandal","break","offer"][rand(0,2)];if(type==="scandal"){const c=getActiveMembers().filter(m=>m.hidden.ScandalRisk>25);if(!c.length)return;const m=c[rand(0,c.length-1)];state.pendingEvent={type:"scandal",memberId:m.id,title:`${m.name}の投稿が炎上`,text:"過去の軽率な投稿が拡散されている。",options:["謝罪する","説明して継続","無視する"]}}else if(type==="break"){const m=getActiveMembers()[rand(0,getActiveMembers().length-1)];if(m&&m.fatigue>65)state.pendingEvent={type:"break",memberId:m.id,title:`${m.name}から活動相談`,text:"疲労とプレッシャーが重なっている。",options:["1か月休ませる","活動量を減らす","そのまま続ける"]}}else state.pendingEvent={type:"offer",title:"大型イベント出演オファー",text:"知名度を伸ばせる大型イベントから出演依頼。",options:["出演する","今回は断る"]}}
function eventModal(e){return`<div class="modal-bg"><div class="modal"><div class="muted">SPECIAL EVENT</div><h2>${e.title}</h2><p>${e.text}</p><div class="event-options">${e.options.map((o,i)=>`<button class="${i?"secondary":""}" onclick="resolveEvent(${i})">${o}</button>`).join("")}</div></div></div>`}
function resolveEvent(i){const e=state.pendingEvent;if(!e)return;let note="";if(e.type==="scandal"){const m=getMember(e.memberId);if(i===0){G().fanTrust=clamp(G().fanTrust+3,0,100);G().fans=Math.round(G().fans*.97);note=`${m.name}が謝罪。信頼回復へ。`}if(i===1){G().fanTrust-=2;G().fans=Math.round(G().fans*.985);note="事情説明。賛否は残った。"}if(i===2){G().fanTrust-=10;G().fans=Math.round(G().fans*.93);G().power=clamp(G().power-3,1,100);note="沈黙を選択。炎上が長引いた。"}}else if(e.type==="break"){const m=getMember(e.memberId);if(i===0){m.status="rest";m.fatigue=20;m.mood=75;note=`${m.name}が活動休止。`}if(i===1){m.fatigue=clamp(m.fatigue-25,0,100);m.mood+=8;note="活動量を調整。"}if(i===2){m.mood-=18;G().fanTrust-=4;note="活動継続。懸念が残った。"}}else if(e.type==="offer"){if(i===0){state.cash-=250000;state.pl.expenses+=250000;G().fans+=rand(600,2200);G().power+=3;note="大型イベントに出演。新規層を獲得。"}else note="今回は出演を見送った。"}state.news.unshift(note);state.pendingEvent=null;render()}

function startSecondGen(){const g=G();if(g.secondGenDone)return;g.generation++;const pool=Array.from({length:8},(_,i)=>generateCandidate(i,g.generation));const chosen=pool.sort((a,b)=>(b.hidden.Potential+b.hidden.Star)-(a.hidden.Potential+a.hidden.Star)).slice(0,3);g.members.push(...chosen);ensureRelationshipsFor(chosen,g);g.secondGenDone=true;g.selectedIds=getActiveMembers().sort((a,b)=>b.popularity-a.popularity).slice(0,5).map(m=>m.id);state.news.unshift(`${g.name}: ${g.generation}期生 ${chosen.map(m=>m.name).join("・")} が加入！`);render()}
function createSecondGroup(){if(state.cash<700000)return;const concepts=["儚い青春","クール","Kawaii","ロック"];const names=["LILAC","MELTIA","SORA","VELVET","CRYSTA"];const g=makeGroupModel(names[rand(0,names.length-1)],concepts[rand(0,concepts.length-1)],["王道","SNS","ライブ"][rand(0,2)],"grp"+Date.now());g.members=Array.from({length:5},(_,i)=>generateCandidate(i,1));g.centerId=[...g.members].sort((a,b)=>b.hidden.Star-a.hidden.Star)[0].id;g.selectedIds=g.members.map(m=>m.id);initRelationships(g);g.fans=rand(200,900);g.power=rand(8,16);g.tier=tierFromPower(g.power);state.groups.push(g);state.cash-=700000;state.pl.expenses+=700000;state.companyReputation=clamp(state.companyReputation+8,0,100);state.news.unshift(`新グループ ${g.name} を設立。`);render()}

function yearlyAwards(){const g=G(),active=getActiveMembers(),top=active.slice().sort((a,b)=>b.popularity-a.popularity)[0];let title="RISING IDOL賞",detail=`年間総ファン増加 ${state.yearStats.fanGain.toLocaleString()}人`;if(avgCompanyPower()>=70){title="AGENCY OF THE YEAR";detail=`所属平均Power ${avgCompanyPower()}`}else if(state.yearStats.viral>=2){title="SNS BREAKTHROUGH賞";detail=`年間バズ ${state.yearStats.viral}回`}else if(state.yearStats.lives>=5){title="LIVE PERFORMANCE賞";detail=`年間ライブ ${state.yearStats.lives}回`}state.awards.push({year:state.year-1,title,detail});if(top)state.awards.push({year:state.year-1,title:"MVP MEMBER",detail:`${top.name} / ${top.popularity.toLocaleString()} personal fans`});state.news.unshift(`YEAR ${state.year-1} IDOL AWARDS: ${title}を受賞！`);state.yearStats={fanGain:0,revenue:0,lives:0,viral:0,songs:0}}

function executeMonth(){
  const action=state.selectedAction;if(!action)return;
  const g=G(),active=getActiveMembers();if(!active.length){alert("活動可能なメンバーがいません。");return}
  const selected=getSelectedMembers().length?getSelectedMembers():active;
  const prevFans=g.fans,prevCash=state.cash,prevPower=g.power;
  g.monthlyPopularityDelta={};
  state.pl.revenue=0;state.pl.expenses=0;state.pl.profit=0;
  let fanGain=0,cashDelta=0,headline="",bonusPower=0;
  const a={vocal:avg(selected.map(m=>m.stats.Vocal)),dance:avg(selected.map(m=>m.stats.Dance)),sns:avg(selected.map(m=>m.stats.SNS)),stage:avg(selected.map(m=>m.stats.Stage)),talk:avg(selected.map(m=>m.stats.Talk)),star:avg(selected.map(m=>m.hidden.Star))};
  const trainer=hasStaff("trainer")?1.35:1,snsStaff=hasStaff("sns")?.18:0,salesStaff=hasStaff("sales")?.12:0,manager=hasStaff("manager");

  if(action==="training"){
    cashDelta=-120000;state.pl.expenses+=120000;
    selected.forEach(m=>{Object.keys(m.stats).forEach(k=>m.stats[k]=clamp(m.stats[k]+Math.round(rand(0,3)*trainer),0,100));m.fatigue=clamp(m.fatigue+rand(7,14)-(manager?3:0),0,100)});
    fanGain=rand(20,100);bonusPower=2;headline="集中レッスンでパフォーマンス力が上昇。";const aw=maybeAwaken();if(aw){headline+=` ${aw.name}が覚醒！`;bonusPower+=3}
  }
  if(action==="sns"){
    cashDelta=-80000;state.pl.expenses+=80000;
    const viral=Math.random()<(0.15+a.sns/230+g.snsMomentum/400+snsStaff);
    fanGain=Math.round(a.sns*rand(5,11)*(viral?rand(5,13):1));g.snsMomentum=clamp(g.snsMomentum+(viral?16:5),0,100);
    headline=viral?`${selected[rand(0,selected.length-1)].name}の動画が大バズ！`:"SNS攻勢で新規層へ接触。";bonusPower=viral?4:1;
    if(viral){state.yearStats.viral++;g.fanSegments.casual+=5;g.fanSegments.overseas+=2}
  }
  if(action==="song"){
    cashDelta=-350000;state.pl.expenses+=350000;const song=createSong();fanGain=Math.round(song.score*rand(3,8));bonusPower=Math.round(song.score/25);headline=`新曲「${song.title}」をリリース。`
  }
  if(action==="live"){
    const v=VENUES.find(x=>x.id===g.selectedVenueId)||VENUES[1];if(g.power<v.minPower){alert("まだこの会場は解禁されていません。");return}
    cashDelta=-v.cost;state.pl.expenses+=v.cost;
    const song=getActiveSong(),center=getMember(g.centerId),centerBoost=center?center.hidden.Star/500:0,songBoost=song?song.live/350:0;
    const draw=g.fans*(0.045+a.stage/1600+centerBoost/10+songBoost/10)+rand(10,120);
    const attendance=Math.min(v.cap,Math.round(draw)),revenue=attendance*v.ticket;
    cashDelta+=revenue;state.pl.revenue+=revenue;fanGain=Math.round(attendance*(0.45+a.stage/180));bonusPower=attendance>=v.cap*.92?5:attendance>=v.cap*.65?2:-1;
    headline=`${v.name}公演、${attendance.toLocaleString()}/${v.cap.toLocaleString()}人動員。`;selected.forEach(m=>m.fatigue=clamp(m.fatigue+rand(12,22)-(manager?4:0),0,100));state.yearStats.lives++;g.fanSegments.live+=4
  }
  if(action==="handshake"){
    cashDelta=-70000;state.pl.expenses+=70000;
    const appeal=avg(selected.map(m=>m.stats.Talk*.35+m.hidden.Star*.25+m.mood*.2+m.stats.Visual*.2)),visitors=Math.max(30,Math.round(g.fans*(0.04+appeal/2200)+rand(20,100))),revenue=visitors*2500;
    cashDelta+=revenue;state.pl.revenue+=revenue;fanGain=Math.round(visitors*.35);g.handshakeFans+=Math.round(visitors*.5);g.fanTrust=clamp(g.fanTrust+rand(1,4),0,100);headline=`特典会に${visitors.toLocaleString()}人参加。`;g.fanSegments.core+=5
  }
  if(action==="media"){
    cashDelta=-100000;state.pl.expenses+=100000;const hit=Math.random()<(0.18+g.power/220+a.talk/500+salesStaff);fanGain=hit?rand(800,3000):rand(80,350);bonusPower=hit?4:1;headline=hit?"メディア出演で大きな爪痕。":"メディア露出を獲得。";if(hit)g.fanSegments.casual+=4
  }
  if(action==="rest"){
    cashDelta=-20000;state.pl.expenses+=20000;active.forEach(m=>{m.fatigue=clamp(m.fatigue-rand(18,30),0,100);m.mood=clamp(m.mood+rand(8,16),0,100);if(m.status==="rest"&&Math.random()<.55)m.status="active"});fanGain=rand(5,50);headline="休養を優先。コンディションを整えた。"
  }

  if(g.producerType==="SNS"&&action==="sns")fanGain=Math.round(fanGain*1.2);
  if(g.producerType==="ライブ"&&action==="live"){fanGain=Math.round(fanGain*1.1);bonusPower++}
  if(g.producerType==="経営")cashDelta=Math.round(cashDelta*.9);
  if(g.producerType==="王道"&&["live","handshake"].includes(action))fanGain=Math.round(fanGain*1.08);

  const label=currentLabel();if(["song","sns","media"].includes(action))fanGain=Math.round(fanGain*(1+label.promo/100));
  const avgFatigue=avg(active.map(m=>m.fatigue));if(avgFatigue>75){fanGain=Math.round(fanGain*.72);headline+=" 疲労の蓄積が目立つ。"}

  const weights=active.map(m=>Math.max(1,m.stats.Visual*.22+m.stats.SNS*.22+m.stats.Stage*.18+m.hidden.Star*.28+m.mood*.1+rand(-10,10)+(g.centerId===m.id?12:0))),total=weights.reduce((x,y)=>x+y,0);
  active.forEach((m,i)=>{const d=Math.max(0,Math.round(fanGain*(weights[i]/total)));m.popularity+=d;g.monthlyPopularityDelta[m.id]=d;m.monthsInGroup++});

  g.fans+=Math.max(0,fanGain);state.cash+=cashDelta;
  state.yearStats.fanGain+=Math.max(0,fanGain);
  g.power=clamp(g.power+bonusPower+Math.round(Math.log10(Math.max(10,g.fans))/2),1,100);
  g.growth=prevFans===0?Math.min(999,Math.round(fanGain)):Math.round((g.fans-prevFans)/Math.max(1,prevFans)*100);g.tier=tierFromPower(g.power);g.brand=clamp(g.brand+Math.max(0,bonusPower),0,100);normalizeFanSegments(g);

  const salary=state.staff.reduce((s,x)=>s+x.salary,0), officeCost=state.officeLevel*90000;
  let fixedCost=salary+officeCost;
  if(hasStaff("finance"))fixedCost=Math.round(fixedCost*.92);
  state.cash-=fixedCost;state.pl.expenses+=fixedCost;headline+=` 固定費 ${money(fixedCost)}。`;

  state.sponsors=state.sponsors.map(s=>({...s,remaining:s.remaining-1})).filter(s=>s.remaining>0);
  state.groups.filter(x=>x.id!==g.id).forEach(other=>{other.fans+=rand(20,140);other.power=clamp(other.power+rand(0,1),1,100);other.growth=rand(2,18);other.tier=tierFromPower(other.power)});
  state.rivals=state.rivals.map(r=>{const p=clamp(r.power+rand(-1,3),1,100);return{...r,power:p,growth:rand(-8,24),tier:tierFromPower(p)}});

  state.pl.profit=state.pl.revenue-state.pl.expenses;
  state.pl.lastRevenue=state.pl.revenue;state.pl.lastExpenses=state.pl.expenses;state.pl.lastProfit=state.pl.profit;

  state.news.unshift(`${g.name}: ${headline}`);
  state.history.push({year:state.year,month:state.month,group:g.name,action,headline,fans:g.fans,power:g.power,tier:g.tier});
  lastResult={headline:`${g.name}: ${headline}`,fanGain:g.fans-prevFans,cashDelta:state.cash-prevCash,powerGain:g.power-prevPower,fans:g.fans,cash:state.cash,power:g.power,tier:g.tier};

  state.month++;if(state.month>12){state.month=1;state.year++;yearlyAwards()}
  state.selectedAction=null;state.screen="result";maybeWorldEvent();render()
}
function resultScreen(){const r=lastResult;return`<div class="hero"><div class="hero-card"><div class="muted">MONTH RESULT</div><h1>${r.headline}</h1><div class="grid grid3" style="margin:24px 0"><div class="card"><div class="muted">FAN GAIN</div><div class="big-number result-positive">+${r.fanGain.toLocaleString()}</div></div><div class="card"><div class="muted">CASH</div><div class="big-number ${r.cashDelta>=0?"result-positive":"result-negative"}">${r.cashDelta>=0?"+":""}${money(r.cashDelta)}</div></div><div class="card"><div class="muted">POWER</div><div class="big-number">${r.powerGain>=0?"+":""}${r.powerGain}</div></div></div><div class="card"><strong>会社月次利益</strong><div class="big-number ${state.pl.lastProfit>=0?"pl-positive":"pl-negative"}">${money(state.pl.lastProfit)}</div><div class="muted">Revenue ${money(state.pl.lastRevenue)} / Expense ${money(state.pl.lastExpenses)}</div></div><div style="margin-top:18px"><button onclick="backGame()">次の月へ</button></div></div></div>`}

function startNew(){selection.clear();state=freshState();state.screen="create";state.candidates=Array.from({length:12},(_,i)=>generateCandidate(i,1));state.rivals=makeRivals();render()}
function goAudition(){state.group={name:document.getElementById("groupName").value.trim()||"ASTERIA",concept:selectedConcept,producerType:document.getElementById("producerType").value};state.groups[0]=makeGroupModel(state.group.name,state.group.concept,state.group.producerType,"main");state.screen="audition";render()}
function toggleCandidate(id){if(selection.has(id))selection.delete(id);else if(selection.size<5)selection.add(id);render()}
function confirmMembers(){if(selection.size!==5){alert("5人選んでください。");return}const g=G();g.members=state.candidates.filter(c=>selection.has(c.id));g.centerId=[...g.members].sort((a,b)=>b.hidden.Star-a.hidden.Star)[0].id;g.selectedIds=g.members.map(m=>m.id);initRelationships(g);state.news=[`${g.name}、結成。5人の物語が始まった。`];state.history=[{year:1,month:1,type:"結成",headline:`${g.name} 結成`}];state.screen="game";state.tab="home";render()}
function backGame(){state.screen="game";render()}
function saveGame(){localStorage.setItem(SAVE_KEY,JSON.stringify(state));showToast("セーブしました 💾")}
function loadGame(){try{state=JSON.parse(localStorage.getItem(SAVE_KEY));state.screen="game";state.modalMemberId=null;state.pendingEvent=null;selection.clear();state.groups=state.groups||[];state.marketMembers=state.marketMembers||[];state.pl=state.pl||{revenue:0,expenses:0,profit:0,lastRevenue:0,lastExpenses:0,lastProfit:0};state.companyEquity=state.companyEquity??100;state.investorCashRaised=state.investorCashRaised||0;state.tours=state.tours||[];state.festivals=state.festivals||[];state.transfers=state.transfers||[];render()}catch(e){alert("セーブデータを読み込めませんでした。")}}
function resetGame(){if(!confirm("現在のプレイを終了してタイトルへ戻りますか？"))return;state=freshState();selection.clear();render()}
render();
