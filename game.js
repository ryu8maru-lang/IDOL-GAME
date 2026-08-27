
const SAVE_KEY = "idol_dynasty_v06_save";
const CONCEPTS = [
  {id:"seiso", name:"王道清楚", desc:"正統派。ファン満足度が安定。"},
  {id:"ephemeral", name:"儚い青春", desc:"雰囲気で魅せる。女性ファンも伸びやすい。"},
  {id:"kawaii", name:"かわいい", desc:"明るく親しみやすい。SNSとの相性が良い。"},
  {id:"cool", name:"クール", desc:"洗練された世界観。ブランド力が上がりやすい。"},
  {id:"rock", name:"ロック", desc:"ライブが強い。熱量の高いファンを集める。"},
  {id:"dark", name:"ダーク", desc:"尖った表現。刺さると強い。"},
  {id:"wa", name:"和風", desc:"独自性が高い。"},
  {id:"korean", name:"韓国系", desc:"スタイリッシュ。ダンスが映える。"},
];
const PRODUCER_TYPES = [
  {id:"standard", name:"王道プロデュース", effect:"特典会・ライブが少し強い"},
  {id:"sns", name:"SNS重視", effect:"SNS施策が強い"},
  {id:"live", name:"ライブ重視", effect:"ライブ成功率が高い"},
  {id:"creative", name:"クリエイティブ重視", effect:"楽曲・MV評価が高い"},
  {id:"management", name:"経営重視", effect:"収支が安定しやすい"},
];
const LOGO_COLORS = [
  {id:"pink", name:"ピンク", value:"#ff5ca8"},
  {id:"blue", name:"ブルー", value:"#6fb6ff"},
  {id:"purple", name:"パープル", value:"#b287ff"},
  {id:"gold", name:"ゴールド", value:"#f6c95d"},
  {id:"mint", name:"ミント", value:"#59e3c4"},
  {id:"red", name:"レッド", value:"#ff6a6a"},
];
const LOGO_MARKS = [
  {id:"star", name:"星", symbol:"★"},
  {id:"heart", name:"ハート", symbol:"♥"},
  {id:"flower", name:"花", symbol:"✿"},
  {id:"crown", name:"王冠", symbol:"♛"},
  {id:"wing", name:"羽", symbol:"❦"},
  {id:"diamond", name:"宝石", symbol:"◆"},
];
const LOGO_STYLES = [
  {id:"standard", name:"王道", desc:"太く読みやすい正統派"},
  {id:"cute", name:"かわいい", desc:"丸みのあるポップ系"},
  {id:"cool", name:"クール", desc:"シャープで都会的"},
  {id:"luxury", name:"上品", desc:"余白を生かした高級感"},
  {id:"dreamy", name:"儚い", desc:"細く柔らかな雰囲気"},
];
const STAFF_POOL=[
  {id:"manager",name:"現場マネージャー",salary:180000,desc:"疲労の増加を軽減"},
  {id:"trainer",name:"育成ディレクター",salary:220000,desc:"レッスン成長量アップ"},
  {id:"sns",name:"SNSプロデューサー",salary:200000,desc:"SNSバズ率アップ"},
  {id:"sales",name:"営業担当",salary:240000,desc:"メディア・スポンサーに強い"},
  {id:"creative",name:"クリエイティブD",salary:260000,desc:"楽曲・MV評価アップ"},
  {id:"goods",name:"MD担当",salary:190000,desc:"グッズ収益アップ"},
  {id:"finance",name:"経営管理責任者",salary:280000,desc:"固定費圧縮・調達に強い"},
  {id:"tour",name:"ライブ制作責任者",salary:260000,desc:"ツアー・自社フェスに強い"},
];
const LABELS=[
  {id:"indie",name:"自主制作",advance:0,promo:0,minPower:0,share:0},
  {id:"boutique",name:"ブティック・レコーズ",advance:800000,promo:7,minPower:20,share:18},
  {id:"major",name:"メジャー・スター・ミュージック",advance:2500000,promo:15,minPower:42,share:28},
  {id:"top",name:"ノヴァ・エンターテインメント",advance:6000000,promo:24,minPower:65,share:35},
];
const SPONSORS=[
  {id:"drink",name:"Spark Energy",fee:700000,months:6,brand:5,desc:"SNS相性◎"},
  {id:"fashion",name:"LUNE Apparel",fee:1200000,months:8,brand:9,desc:"衣装・MVと好相性"},
  {id:"tech",name:"Pulse Mobile",fee:2000000,months:10,brand:12,desc:"メディア露出向き"},
];
const BIG_DEALS=[
  {id:"cm",name:"全国CM出演",need:45,pay:2500000,fans:4500,rep:7,desc:"全国認知が一段跳ねる"},
  {id:"movie",name:"映画タイアップ",need:55,pay:1800000,fans:3800,rep:9,desc:"作品ヒット時の伸びが大きい"},
  {id:"drama",name:"地上波ドラマ主題歌",need:50,pay:1600000,fans:3200,rep:8,desc:"楽曲と認知が伸びる"},
  {id:"fashion",name:"大型ファッションイベント",need:38,pay:900000,fans:1800,rep:5,desc:"女性ファンを伸ばしやすい"},
];
const INVESTORS=[
  {id:"angel",name:"エンジェル投資家",cash:3000000,equity:8,rep:0},
  {id:"fund",name:"エンタメファンド",cash:10000000,equity:18,rep:8},
  {id:"media",name:"大手メディア企業",cash:25000000,equity:30,rep:15},
];
const JOBS=[
  {id:"magazine",name:"ファッション誌撮影",pay:120000,fans:180,stat:"visual",fatigue:8},
  {id:"variety",name:"バラエティ収録",pay:180000,fans:260,stat:"talk",fatigue:12},
  {id:"drama",name:"配信ドラマ出演",pay:350000,fans:420,stat:"visual",fatigue:18},
  {id:"radio",name:"ラジオレギュラー",pay:90000,fans:130,stat:"talk",fatigue:6},
  {id:"dance",name:"ダンス動画企画",pay:70000,fans:220,stat:"dance",fatigue:9},
];
const GOODS=[
  {id:"photo",name:"生写真セット",cost:70000,price:1200,appeal:1.15},
  {id:"acrylic",name:"アクリルスタンド",cost:180000,price:1800,appeal:1.25},
  {id:"towel",name:"推しメンタオル",cost:220000,price:2500,appeal:1.35},
  {id:"penlight",name:"公式ペンライト",cost:360000,price:3500,appeal:1.45},
  {id:"plush",name:"ぬいぐるみ",cost:520000,price:4200,appeal:1.55},
];
const VENUES=[
  {id:"live50",name:"地下ライブハウス",cap:50,cost:70000,ticket:2500,minPower:0},
  {id:"live100",name:"100人ライブハウス",cap:100,cost:110000,ticket:3000,minPower:0},
  {id:"live300",name:"300人ライブハウス",cap:300,cost:180000,ticket:3500,minPower:12},
  {id:"live800",name:"800人ホール",cap:800,cost:420000,ticket:4500,minPower:24},
  {id:"zepp",name:"Zepp級",cap:2000,cost:900000,ticket:5500,minPower:38},
  {id:"budokan",name:"武道館級",cap:10000,cost:3800000,ticket:7800,minPower:58},
  {id:"arena",name:"アリーナ級",cap:15000,cost:6500000,ticket:8800,minPower:72},
  {id:"dome",name:"ドーム級",cap:50000,cost:22000000,ticket:11000,minPower:88},
];
const TOUR_CITIES=[
  {name:"東京",cost:900000,cap:2500},
  {name:"大阪",cost:750000,cap:1800},
  {name:"名古屋",cost:650000,cap:1400},
  {name:"福岡",cost:650000,cap:1200},
  {name:"札幌",cost:700000,cap:1100},
  {name:"仙台",cost:600000,cap:1000},
];
const RIVAL_NAMES=["LUMINA","MELTY HOUR","NOIR PARADE","CANDY LOOP","ASTER","NEON RIOT","BLUE HAZE","MIRAGE","PURELY","AMBER5","NOVA8","CITRON"];
const FIRST_NAMES=["凛","美月","ひより","七海","彩花","玲奈","心春","美羽","紗良","莉央","茉白","結愛","澪","琴音","乃愛","陽菜","柚葉","咲良","愛梨","杏奈","瑠花","翠","詩乃","羽音","真白","灯","すず","遥","美空","夏帆","凪","千紘"];
const TRAITS=["努力家","天才肌","人見知り","負けず嫌い","天然","ファンサ職人","SNS強者","リーダー型","マイペース","表現者","研究熱心","ムードメーカー"];
const PORTRAITS = [
  {id:"char_1", path:"assets/char_1.png", archetype:"王道"},
  {id:"char_2", path:"assets/char_2.png", archetype:"クール"},
  {id:"char_3", path:"assets/char_3.png", archetype:"元気"},
  {id:"char_4", path:"assets/char_4.png", archetype:"儚い"},
  {id:"char_5", path:"assets/char_5.png", archetype:"王道"},
  {id:"char_6", path:"assets/char_6.png", archetype:"SNS"},
  {id:"char_7", path:"assets/char_7.png", archetype:"ロック"},
  {id:"char_8", path:"assets/char_8.png", archetype:"クール"},
];

const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const rand=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const avg=(arr)=>arr.reduce((a,b)=>a+b,0)/Math.max(1,arr.length);
const sum=(arr)=>arr.reduce((a,b)=>a+b,0);
const money=(n)=>"¥"+Math.round(n).toLocaleString("ja-JP");
const pick=(arr)=>arr[rand(0,arr.length-1)];

let setupForm={agencyName:"LUMIERE PRODUCTION",groupName:"ASTERIA",conceptId:"seiso",producerId:"standard",logoColorId:"pink",logoMarkId:"star",logoStyleId:"standard"};
let selection=new Set();
let lastResult=null;
let toastTimer=null;

function freshGroup(name,conceptId,producerId,id="main",logoColorId="pink",logoMarkId="star",logoStyleId="standard"){
  return {
    id,name,conceptId,producerId,logoColorId,logoMarkId,logoStyleId,
    members:[], relationships:{}, selectedIds:[], centerId:null,
    fans:0,power:5,growth:0,tier:"E",brand:10,fanTrust:70,
    songs:[],activeSongId:null,selectedVenueId:"live100",generation:1,
    fanSegments:{core:10,casual:55,female:20,overseas:5,live:10},
    goodsSales:0,handshakeFans:0,liveExp:0,snsMomentum:0,mvLibrary:[],outfits:[],
    secondGenDone:false, chemistry:[], monthlyPopularityDelta:{}
  }
}
function freshState(){
  return {
    screen:"title",tab:"home",year:1,month:1,cash:3000000,
    agencyName:"LUMIERE PRODUCTION",groups:[freshGroup("ASTERIA","seiso","standard","main","pink","star","standard")],activeGroupId:"main",
    officeLevel:1,staff:[],labelId:"indie",sponsors:[],companyReputation:10,companyEquity:100,investorCashRaised:0,debt:0,
    news:[],history:[],awards:[],rivals:[],candidates:[],selectedAction:null,
    pl:{revenue:0,expenses:0,profit:0,lastRevenue:0,lastExpenses:0,lastProfit:0},
    yearStats:{fanGain:0,revenue:0,lives:0,viral:0,songs:0},
    modalMemberId:null,pendingEvent:null,marketMembers:[],helpOpen:true
  };
}
let state=freshState();

function currentGroup(){return state.groups.find(g=>g.id===state.activeGroupId)||state.groups[0]}
function activeMembers(group=currentGroup()){return group.members.filter(m=>m.status==="active")}
function getMember(id, group=currentGroup()){return group.members.find(m=>m.id===id)}
function selectedMembers(group=currentGroup()){
  const ids = group.selectedIds.length ? group.selectedIds : activeMembers(group).slice(0,5).map(m=>m.id);
  return activeMembers(group).filter(m=>ids.includes(m.id));
}
function currentLabel(){return LABELS.find(l=>l.id===state.labelId)||LABELS[0]}
function totalFans(){return state.groups.reduce((s,g)=>s+g.fans,0)}
function avgCompanyPower(){return Math.round(avg(state.groups.map(g=>g.power)))}
function tierFromPower(p){if(p>=90)return"S+"; if(p>=78)return"S"; if(p>=66)return"A+"; if(p>=54)return"A"; if(p>=42)return"B+"; if(p>=32)return"B"; if(p>=22)return"C"; if(p>=12)return"D"; return"E"}
function hasStaff(id){return state.staff.some(s=>s.id===id)}
function selectedConcept(){return CONCEPTS.find(c=>c.id===setupForm.conceptId)||CONCEPTS[0]}
function selectedProducer(){return PRODUCER_TYPES.find(p=>p.id===setupForm.producerId)||PRODUCER_TYPES[0]}
function getPortraitPath(member){return member?.portrait||PORTRAITS[0].path}
function normalizeFanSegments(group=currentGroup()){
  const total = sum(Object.values(group.fanSegments));
  if(total<=0) return;
  for(const k in group.fanSegments) group.fanSegments[k]=Math.round(group.fanSegments[k]/total*100);
  const diff = 100 - sum(Object.values(group.fanSegments));
  group.fanSegments.casual += diff;
}
function logoSVG({name, color="#ff5ca8", mark="★", agencyName="", style="standard"}){
  const safeName = escapeHTML(name||"GROUP");
  const safeAgency = escapeHTML(agencyName||"");
  const styleMap={standard:{weight:900,spacing:"2",size:48,radius:26},cute:{weight:900,spacing:"5",size:46,radius:42},cool:{weight:800,spacing:"8",size:44,radius:14},luxury:{weight:700,spacing:"10",size:42,radius:28},dreamy:{weight:500,spacing:"7",size:44,radius:36}};
  const st=styleMap[style]||styleMap.standard;
  return `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-label="logo">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0" stop-color="${color}" />
        <stop offset="1" stop-color="#ffffff" stop-opacity=".92" />
      </linearGradient>
    </defs>
    <rect x="12" y="12" width="496" height="196" rx="${st.radius}" fill="rgba(12,15,28,.65)" stroke="${color}" stroke-width="3" />
    <text x="260" y="72" text-anchor="middle" font-size="${st.size}" font-weight="${st.weight}" letter-spacing="${st.spacing}" fill="url(#g)" font-family="sans-serif">${mark} ${safeName} ${mark}</text>
    <line x1="70" y1="102" x2="450" y2="102" stroke="${color}" stroke-opacity=".65" />
    <text x="260" y="148" text-anchor="middle" font-size="22" font-weight="700" fill="#f4f7ff" font-family="sans-serif">${safeAgency}</text>
    <text x="260" y="178" text-anchor="middle" font-size="15" fill="#cdd7ff" font-family="sans-serif">IDOL DYNASTY</text>
  </svg>`;
}
function getGroupLogo(group=currentGroup()){
  const color = (LOGO_COLORS.find(c=>c.id===group.logoColorId)||LOGO_COLORS[0]).value;
  const mark = (LOGO_MARKS.find(m=>m.id===group.logoMarkId)||LOGO_MARKS[0]).symbol;
  return logoSVG({name:group.name,color,mark,agencyName:state.agencyName,style:group.logoStyleId||"standard"});
}
function getAgencyLogoPreview(){
  const color = (LOGO_COLORS.find(c=>c.id===setupForm.logoColorId)||LOGO_COLORS[0]).value;
  const mark = (LOGO_MARKS.find(m=>m.id===setupForm.logoMarkId)||LOGO_MARKS[0]).symbol;
  return logoSVG({name:setupForm.groupName || "ASTERIA", color, mark, agencyName: setupForm.agencyName || "AGENCY", style:setupForm.logoStyleId||"standard"});
}
function saveGame(){localStorage.setItem(SAVE_KEY, JSON.stringify(state)); showToast("セーブしました 💾");}
function loadGame(){
  const raw = localStorage.getItem(SAVE_KEY); if(!raw) return;
  state = JSON.parse(raw);
  state.screen="game";
  state.modalMemberId=null; state.pendingEvent=null;
  if(!state.groups?.length){ state=freshState(); }
  render();
}
function resetGame(){ if(!confirm("現在のプレイを終了してタイトルへ戻りますか？")) return; state=freshState(); selection=new Set(); render(); }
function startNew(){ state=freshState(); setupForm={agencyName:"LUMIERE PRODUCTION",groupName:"ASTERIA",conceptId:"seiso",producerId:"standard",logoColorId:"pink",logoMarkId:"star",logoStyleId:"standard"}; selection=new Set(); state.screen="setup"; render(); }

function showToast(msg){
  document.querySelectorAll('.toast').forEach(el=>el.remove());
  const div=document.createElement('div'); div.className='toast'; div.textContent=msg; document.body.appendChild(div);
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>div.remove(),1800);
}
function escapeHTML(str){return String(str||"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[s]))}
function setSetupField(key,val,shouldRender=true){ setupForm[key]=val; if(shouldRender) render(); }
function pickPortrait(i, conceptId=setupForm.conceptId){
  if(["kawaii"].includes(conceptId) && [2,4].includes(i)) return PORTRAITS[2].path;
  if(["cool","korean"].includes(conceptId) && [1,5].includes(i)) return PORTRAITS[7].path;
  if(["rock","dark"].includes(conceptId) && [2,6].includes(i)) return PORTRAITS[6].path;
  if(["ephemeral"].includes(conceptId) && [3,7].includes(i)) return PORTRAITS[3].path;
  return PORTRAITS[i % PORTRAITS.length].path;
}
function generateCandidate(i, generation=1, conceptId=setupForm.conceptId){
  const name = FIRST_NAMES[(i+rand(0,FIRST_NAMES.length-1))%FIRST_NAMES.length];
  const trait = TRAITS[rand(0, TRAITS.length-1)];
  const portrait = pickPortrait(i, conceptId);
  return {
    id:`g${generation}_${Date.now()}_${i}_${rand(10,99)}`,
    name, age:rand(15,22), generation, portrait,
    trait, status:"active",
    stats:{visual:rand(35,92), vocal:rand(30,88), dance:rand(30,90), talk:rand(25,85), sns:rand(20,95), stage:rand(25,88), mental:rand(35,95)},
    hidden:{star:rand(25,100), potential:rand(45,100), scandal:rand(5,65), leadership:rand(20,95), loyalty:rand(30,100)},
    popularity:0,fatigue:0,mood:72,awakened:false,monthsInGroup:0
  };
}
function makeRivals(){return RIVAL_NAMES.map((name,i)=>{const p=rand(8,48)+i*2;return{name,power:p,growth:rand(-8,22),tier:tierFromPower(p)}})}
function initRelations(group=currentGroup()){
  group.relationships={};
  group.members.forEach(a=>{
    group.relationships[a.id]={};
    group.members.forEach(b=>{ if(a.id!==b.id) group.relationships[a.id][b.id]=rand(-25,70); });
  });
  updateChemistry(group);
}
function updateChemistry(group=currentGroup()){
  const active = activeMembers(group); let out=[];
  for(let i=0;i<active.length;i++) for(let j=i+1;j<active.length;j++){
    const a=active[i], b=active[j];
    const rel = (group.relationships[a.id]?.[b.id]||0) + (group.relationships[b.id]?.[a.id]||0);
    const appeal = Math.round((a.hidden.star+b.hidden.star+a.stats.sns+b.stats.sns)/4);
    const score = Math.round(rel/2 + appeal/2);
    if(score>=60) out.push({a:a.id,b:b.id,score,name:`${a.name} × ${b.name}`});
  }
  group.chemistry = out.sort((x,y)=>y.score-x.score).slice(0,5);
}
function ensureRelations(newMembers, group=currentGroup()){
  newMembers.forEach(n=>{
    group.relationships[n.id]=group.relationships[n.id]||{};
    group.members.forEach(m=>{
      if(n.id===m.id) return;
      group.relationships[n.id][m.id]=rand(-20,55);
      group.relationships[m.id]=group.relationships[m.id]||{};
      group.relationships[m.id][n.id]=rand(-20,55);
    });
  });
  updateChemistry(group);
}
function openMember(id){ state.modalMemberId=id; render(); }
function closeMember(){ state.modalMemberId=null; document.querySelectorAll('.modal-bg').forEach(el=>el.remove()); }
function switchGroup(id){ state.activeGroupId=id; state.selectedAction=null; state.modalMemberId=null; render(); }
function setTab(tab){ state.tab=tab; render(); }
function selectAction(action){ state.selectedAction=action; render(); }
function toggleCandidate(id){ if(selection.has(id)) selection.delete(id); else if(selection.size<5) selection.add(id); render(); }
function chooseSetupAndAudition(){
  state.agencyName = (setupForm.agencyName||"LUMIERE PRODUCTION").trim();
  const group = freshGroup((setupForm.groupName||"ASTERIA").trim(), setupForm.conceptId, setupForm.producerId, "main", setupForm.logoColorId, setupForm.logoMarkId, setupForm.logoStyleId);
  state.groups=[group]; state.activeGroupId="main"; state.rivals=makeRivals();
  state.candidates=Array.from({length:10}, (_,i)=>generateCandidate(i, 1, setupForm.conceptId));
  selection=new Set(); state.screen="audition"; render();
}
function confirmMembers(){
  if(selection.size!==5){ alert("5人を選んでください。"); return; }
  const g=currentGroup();
  g.members = state.candidates.filter(c=>selection.has(c.id));
  g.centerId = [...g.members].sort((a,b)=>b.hidden.star-a.hidden.star)[0].id;
  g.selectedIds = g.members.map(m=>m.id);
  initRelations(g); normalizeFanSegments(g); g.tier=tierFromPower(g.power);
  state.news=[`${state.agencyName}から ${g.name} がデビュー。`];
  state.history=[{year:1,month:1,headline:`${g.name} デビュー`, group:g.name, action:"結成"}];
  state.screen="game"; state.tab="home"; render();
}
function actionBoost(group=currentGroup(), action){
  const producer = group.producerId;
  if(producer==="sns" && action==="sns") return 1.20;
  if(producer==="live" && action==="live") return 1.12;
  if(producer==="creative" && action==="song") return 1.18;
  if(producer==="management" && ["business","rest"].includes(action)) return 1.08;
  if(producer==="standard" && ["live","handshake"].includes(action)) return 1.08;
  return 1;
}
function statBar(label,val, kind=""){
  return `<div class="stat"><div class="statline"><span>${label}</span><span>${Math.round(val)}</span></div><div class="bar"><div class="fill ${kind}" style="width:${clamp(val,0,100)}%"></div></div></div>`;
}
function kpi(label,val){ return `<div class="kpi"><div class="label">${label}</div><div class="value">${val}</div></div>`; }
function navBtn(id,label){ return `<button class="secondary ${state.tab===id?`active`:``}" onclick="setTab('${id}')">${label}</button>`; }
function resultCard(label,val,cls=""){ return `<div class="card"><div class="muted">${label}</div><div class="big-number ${cls}">${val}</div></div>`; }
function candidateCard(c){
  const selected = selection.has(c.id);
  return `<div class="card member-card ${selected?`selected action-card`:``}">
    <img src="${c.portrait}" alt="${escapeHTML(c.name)}" class="candidate-image">
    <div class="member-head"><div><strong>${c.name}</strong> <span class="muted">${c.age}歳</span></div><button class="${selected?``:`secondary`}" onclick="toggleCandidate('${c.id}')">${selected?`選抜中`:`選ぶ`}</button></div>
    <div class="stack"><span class="badge">${c.trait}</span><span class="pill small">${PORTRAITS.find(p=>p.path===c.portrait)?.archetype || 'アイドル'}</span></div>
    ${statBar("ビジュアル", c.stats.visual)}
    ${statBar("歌", c.stats.vocal)}
    ${statBar("ダンス", c.stats.dance)}
    ${statBar("SNS", c.stats.sns)}
    ${statBar("スター性", c.hidden.star)}
  </div>`;
}
function memberMini(m, group=currentGroup()){
  return `<div class="card member-mini" onclick="openMember('${m.id}')">
    <img src="${getPortraitPath(m)}" alt="${escapeHTML(m.name)}">
    <div class="split"><strong>${m.name}</strong>${group.centerId===m.id?`<span class="center-ribbon">センター</span>`:''}</div>
    <div class="muted">${m.trait}</div>
    <div class="big-number">${m.popularity.toLocaleString()}</div>
    <div class="muted">個人ファン</div>
    ${statBar("気分", m.mood, 'good')}
    ${statBar("疲労", m.fatigue, m.fatigue>=70 ? 'bad':'' )}
  </div>`;
}
function fanSegmentsHTML(group=currentGroup()){
  normalizeFanSegments(group);
  const labels={core:"コア",casual:"ライト",female:"女性",overseas:"海外",live:"ライブ勢"};
  return Object.entries(group.fanSegments).map(([k,v])=>`<div class="fan-segment"><span>${labels[k]}</span><div class="bar"><div class="fill" style="width:${v}%"></div></div><strong>${v}%</strong></div>`).join('');
}
function getActiveSong(group=currentGroup()){ return group.songs.find(s=>s.id===group.activeSongId) }
function createSong(group=currentGroup()){
  const selected = selectedMembers(group); const base = selected.length?selected:activeMembers(group); const label=currentLabel();
  const creativeBoost = hasStaff("creative") ? 8 : 0;
  const vocal=avg(base.map(m=>m.stats.vocal)), dance=avg(base.map(m=>m.stats.dance)), star=avg(base.map(m=>m.hidden.star));
  const score=clamp(Math.round((vocal+dance+star)/3 + rand(-12,15) + creativeBoost + label.promo/3),25,100);
  const viral=clamp(score+rand(-20,20)+label.promo,15,100);
  const live=clamp(Math.round((score+dance)/2+rand(-10,14)),15,100);
  const song={id:'s'+Date.now(), title:`${group.name} ${group.songs.length+1}th`, score, viral, live};
  group.songs.push(song); group.activeSongId=song.id; state.yearStats.songs++;
  return song;
}
function maybeAwaken(group=currentGroup()){
  const candidates = activeMembers(group).filter(m=>!m.awakened && m.hidden.potential>=70); if(!candidates.length) return null;
  const m = pick(candidates); const chance = 0.05 + m.hidden.potential/1000;
  if(Math.random()>chance) return null;
  m.awakened=true; ["vocal","dance","stage","sns"].forEach(k=>m.stats[k]=clamp(m.stats[k]+rand(6,14),0,100));
  m.hidden.star = clamp(m.hidden.star + rand(5,12),0,100); return m;
}
function maybeEvent(group=currentGroup()){
  if(Math.random()>0.22) return;
  const type=["scandal","break","offer"][rand(0,2)];
  if(type==="scandal"){
    const c = activeMembers(group).filter(m=>m.hidden.scandal>25); if(!c.length) return;
    const m = pick(c);
    state.pendingEvent={type:"scandal", memberId:m.id, title:`${m.name}の投稿が炎上`, text:"過去の軽率な投稿が拡散されている。どう対応する？", options:["謝罪する","説明して継続","無視する"]};
  }else if(type==="break"){
    const m=pick(activeMembers(group)); if(!m || m.fatigue<=65) return;
    state.pendingEvent={type:"break", memberId:m.id, title:`${m.name}が休養を相談`, text:"疲労が高く、短期間の休養を希望している。", options:["休ませる","様子を見る","気合で続行"]};
  }else{
    state.pendingEvent={type:"offer", title:`大型オファーの打診`, text:"急な大型案件。今月の疲労は増えるが、話題になる。", options:["受ける","見送る"]};
  }
}
function resolveEvent(idx){
  // 選択後に透明なモーダルレイヤーが残らないよう即座に削除
  document.querySelectorAll('.modal-bg').forEach(el=>el.remove());
  const e=state.pendingEvent; if(!e) return; const group=currentGroup(); let note="";
  if(e.type==="scandal"){
    const m=getMember(e.memberId, group); if(!m){state.pendingEvent=null; render(); return;}
    if(idx===0){ group.fanTrust=clamp(group.fanTrust+3,0,100); group.fans=Math.round(group.fans*0.97); note=`${m.name}が謝罪。信頼回復へ。`; }
    if(idx===1){ group.fanTrust=clamp(group.fanTrust-2,0,100); group.fans=Math.round(group.fans*0.985); note="事情説明。賛否は残った。"; }
    if(idx===2){ group.fanTrust=clamp(group.fanTrust-10,0,100); group.fans=Math.round(group.fans*0.93); group.power=clamp(group.power-3,1,100); note="沈黙を選択。炎上が長引いた。"; }
  } else if(e.type==="break"){
    const m=getMember(e.memberId, group); if(idx===0){m.status="rest"; m.fatigue=clamp(m.fatigue-30,0,100); note=`${m.name}を休養。コンディション優先。`;}
    if(idx===1){m.fatigue=clamp(m.fatigue+6,0,100); note="様子見で継続。";}
    if(idx===2){m.fatigue=clamp(m.fatigue+15,0,100); m.mood=clamp(m.mood-10,0,100); note="続行を選択。メンタルに影響。";}
  } else if(e.type==="offer"){
    if(idx===0){ state.cash+=500000; state.pl.revenue+=500000; group.fans+=400; group.brand=clamp(group.brand+3,0,100); activeMembers(group).forEach(m=>m.fatigue=clamp(m.fatigue+6,0,100)); note="突発大型案件を受注。話題化に成功。"; }
    if(idx===1){ note="無理はせず見送った。"; }
  }
  state.news.unshift(`${group.name}: ${note}`); state.pendingEvent=null; render();
}
function executeMonth(){
  const action=state.selectedAction; if(!action){alert("今月の方針を選んでください。"); return;}
  const group=currentGroup(); const active=activeMembers(group); if(!active.length){alert("活動可能なメンバーがいません。"); return;}
  const selected=selectedMembers(group).length?selectedMembers(group):active;
  const prevFans=group.fans, prevCash=state.cash, prevPower=group.power;
  state.pl.revenue=0; state.pl.expenses=0; state.pl.profit=0; group.monthlyPopularityDelta={};

  let fanGain=0, cashDelta=0, headline="", bonusPower=0;
  const a={visual:avg(selected.map(m=>m.stats.visual)), vocal:avg(selected.map(m=>m.stats.vocal)), dance:avg(selected.map(m=>m.stats.dance)), sns:avg(selected.map(m=>m.stats.sns)), stage:avg(selected.map(m=>m.stats.stage)), talk:avg(selected.map(m=>m.stats.talk)), star:avg(selected.map(m=>m.hidden.star))};
  const trainer=hasStaff("trainer")?1.35:1, snsStaff=hasStaff("sns")?0.18:0, salesStaff=hasStaff("sales")?0.12:0, manager=hasStaff("manager");
  if(action==="training"){
    cashDelta-=120000; state.pl.expenses+=120000;
    selected.forEach(m=>{Object.keys(m.stats).forEach(k=>m.stats[k]=clamp(m.stats[k]+Math.round(rand(0,3)*trainer),0,100)); m.fatigue=clamp(m.fatigue+rand(7,14)-(manager?3:0),0,100)});
    fanGain=rand(20,100); bonusPower=2; headline="集中レッスンでパフォーマンス力が上昇。";
    const aw=maybeAwaken(group); if(aw){headline+=` ${aw.name}が覚醒！`; bonusPower+=3;}
  }
  if(action==="sns"){
    cashDelta-=80000; state.pl.expenses+=80000;
    const viral=Math.random()<(0.15+a.sns/230+group.snsMomentum/400+snsStaff);
    fanGain=Math.round(a.sns*rand(5,11)*(viral?rand(5,13):1)); group.snsMomentum=clamp(group.snsMomentum+(viral?16:5),0,100);
    headline=viral?`${pick(selected).name}の投稿が大バズ！`:`SNS攻勢で新規層へ接触。`; bonusPower=viral?4:1;
    if(viral){state.yearStats.viral++; group.fanSegments.casual+=5; group.fanSegments.overseas+=2;}
  }
  if(action==="song"){
    cashDelta-=350000; state.pl.expenses+=350000;
    const song=createSong(group); fanGain=Math.round(song.score*rand(3,8)); bonusPower=Math.round(song.score/25); headline=`新曲「${song.title}」をリリース。`;
  }
  if(action==="live"){
    const v = VENUES.find(x=>x.id===group.selectedVenueId)||VENUES[1];
    if(group.power<v.minPower){alert("まだこの会場は解禁されていません。"); return}
    cashDelta-=v.cost; state.pl.expenses+=v.cost;
    const song=getActiveSong(group), center=getMember(group.centerId, group), centerBoost=center?center.hidden.star/500:0, songBoost=song?song.live/350:0;
    const draw=group.fans*(0.045+a.stage/1600+centerBoost/10+songBoost/10)+rand(10,120);
    const attendance=Math.min(v.cap, Math.round(draw)), revenue=attendance*v.ticket;
    cashDelta+=revenue; state.pl.revenue+=revenue; fanGain=Math.round(attendance*(0.45+a.stage/180)); bonusPower=attendance>=v.cap*0.92?5:attendance>=v.cap*0.65?2:-1;
    headline=`${v.name}公演、${attendance.toLocaleString()}/${v.cap.toLocaleString()}人を動員。`;
    selected.forEach(m=>m.fatigue=clamp(m.fatigue+rand(12,22)-(manager?4:0),0,100));
    state.yearStats.lives++; group.fanSegments.live+=4;
  }
  if(action==="handshake"){
    cashDelta-=70000; state.pl.expenses+=70000;
    const appeal=avg(selected.map(m=>m.stats.talk*.35+m.hidden.star*.25+m.mood*.2+m.stats.visual*.2));
    const visitors=Math.max(30,Math.round(group.fans*(0.04+appeal/2200)+rand(20,100))), revenue=visitors*2500;
    cashDelta+=revenue; state.pl.revenue+=revenue; fanGain=Math.round(visitors*.35); group.handshakeFans+=Math.round(visitors*.5); group.fanTrust=clamp(group.fanTrust+rand(1,4),0,100); headline=`特典会に${visitors.toLocaleString()}人が参加。`; group.fanSegments.core+=5;
  }
  if(action==="media"){
    cashDelta-=100000; state.pl.expenses+=100000; const hit=Math.random()<(0.18+group.power/220+a.talk/500+salesStaff); fanGain=hit?rand(800,3000):rand(80,350); bonusPower=hit?4:1; headline=hit?"メディア出演で大きな爪痕。":"メディア露出を獲得。"; if(hit) group.fanSegments.casual+=4;
  }
  if(action==="rest"){
    cashDelta-=20000; state.pl.expenses+=20000; active.forEach(m=>{m.fatigue=clamp(m.fatigue-rand(18,30),0,100); m.mood=clamp(m.mood+rand(8,16),0,100); if(m.status==="rest" && Math.random()<0.55) m.status="active"}); fanGain=rand(5,50); headline="休養を優先。コンディションを整えた。";
  }

  fanGain = Math.round(fanGain * actionBoost(group, action));
  const label=currentLabel(); if(["song","sns","media"].includes(action)) fanGain=Math.round(fanGain*(1+label.promo/100));
  const avgFatigue = avg(active.map(m=>m.fatigue)); if(avgFatigue>75){ fanGain=Math.round(fanGain*0.72); headline += " 疲労の蓄積が目立つ。"; }
  if(group.producerId==="management") cashDelta=Math.round(cashDelta*0.92);

  const weights = active.map(m=>Math.max(1,m.stats.visual*.22+m.stats.sns*.22+m.stats.stage*.18+m.hidden.star*.28+m.mood*.1+rand(-10,10)+(group.centerId===m.id?12:0)));
  const totalWeight = sum(weights);
  active.forEach((m, idx)=>{
    const delta=Math.max(0, Math.round(fanGain*(weights[idx]/totalWeight))); m.popularity+=delta; group.monthlyPopularityDelta[m.id]=delta; m.monthsInGroup++;
    if(!selected.some(sel=>sel.id===m.id)) m.mood = clamp(m.mood-1,0,100);
  });

  group.fans += Math.max(0, fanGain); state.cash += cashDelta; state.yearStats.fanGain += Math.max(0, fanGain);
  group.power = clamp(group.power + bonusPower + Math.round(Math.log10(Math.max(10,group.fans))/2), 1, 100);
  group.growth = prevFans===0 ? Math.min(999, Math.round(fanGain)) : Math.round((group.fans-prevFans)/Math.max(1,prevFans)*100);
  group.tier = tierFromPower(group.power); group.brand = clamp(group.brand + Math.max(0,bonusPower),0,100); normalizeFanSegments(group);

  const salary = state.staff.reduce((s,x)=>s+x.salary,0), officeCost=state.officeLevel*90000;
  let fixedCost = salary + officeCost; if(hasStaff("finance")) fixedCost=Math.round(fixedCost*0.92);
  state.cash -= fixedCost; state.pl.expenses += fixedCost; headline += ` 固定費 ${money(fixedCost)}。`;

  state.sponsors = state.sponsors.map(s=>({...s, remaining:s.remaining-1})).filter(s=>s.remaining>0);
  state.groups.filter(g=>g.id!==group.id).forEach(other=>{ other.fans += rand(20,140); other.power = clamp(other.power+rand(0,1),1,100); other.growth=rand(2,18); other.tier=tierFromPower(other.power); });
  state.rivals = state.rivals.map(r=>{ const p=clamp(r.power+rand(-1,3),1,100); return {...r,power:p,growth:rand(-8,24),tier:tierFromPower(p)}; });

  state.pl.profit = state.pl.revenue - state.pl.expenses; state.pl.lastRevenue=state.pl.revenue; state.pl.lastExpenses=state.pl.expenses; state.pl.lastProfit=state.pl.profit;
  state.news.unshift(`${group.name}: ${headline}`);
  state.history.push({year:state.year,month:state.month,group:group.name,action,headline,fans:group.fans,power:group.power,tier:group.tier});
  lastResult={headline:`${group.name}: ${headline}`, fanGain:group.fans-prevFans, cashDelta:state.cash-prevCash, powerGain:group.power-prevPower, fans:group.fans, cash:state.cash, power:group.power, tier:group.tier};

  state.month++; if(state.month>12){ state.month=1; state.year++; endOfYear(); }
  state.selectedAction=null; state.screen="result"; maybeEvent(group); render();
}
function endOfYear(){
  const g=currentGroup(); const active=activeMembers(g); const top=active.slice().sort((a,b)=>b.popularity-a.popularity)[0];
  let title="新人アイドル賞", detail=`年間総ファン増加 ${state.yearStats.fanGain.toLocaleString()}人`;
  if(avgCompanyPower()>=70){ title="年間最優秀事務所賞"; detail=`所属平均総合力 ${avgCompanyPower()}`; }
  else if(state.yearStats.viral>=2){ title="SNSブレイク賞"; detail=`年間バズ ${state.yearStats.viral}回`; }
  else if(state.yearStats.lives>=5){ title="ライブパフォーマンス賞"; detail=`年間ライブ ${state.yearStats.lives}回`; }
  if(top) detail += ` / 注目メンバー ${top.name}`;
  state.awards.push({year:state.year, title, detail});
  state.news.unshift(`${state.year}年目: ${title} を獲得。${detail}`);
  state.yearStats={fanGain:0,revenue:0,lives:0,viral:0,songs:0};
}
function backGame(){ state.screen="game"; render(); }
function startSecondGen(){
  const g=currentGroup(); if(g.secondGenDone) return;
  g.generation++; const pool=Array.from({length:6},(_,i)=>generateCandidate(i,g.generation,g.conceptId));
  const chosen=pool.sort((a,b)=>(b.hidden.potential+b.hidden.star)-(a.hidden.potential+a.hidden.star)).slice(0,3);
  g.members.push(...chosen); ensureRelations(chosen,g); g.secondGenDone=true; g.selectedIds=activeMembers(g).sort((a,b)=>b.popularity-a.popularity).slice(0,5).map(m=>m.id);
  state.news.unshift(`${g.name}: ${g.generation}期生 ${chosen.map(m=>m.name).join('・')} が加入。`); render();
}
function createNewGroup(){
  if(state.cash<700000) return;
  const concepts=["ephemeral","cool","kawaii","rock"], names=["LILAC","MELTIA","SORA","VELVET","CRYSTA"];
  const conceptId=pick(concepts); const group=freshGroup(pick(names), conceptId, pick(PRODUCER_TYPES).id, 'grp'+Date.now(), pick(LOGO_COLORS).id, pick(LOGO_MARKS).id, pick(LOGO_STYLES).id);
  group.members=Array.from({length:5},(_,i)=>generateCandidate(i,1,conceptId)); group.centerId=group.members.slice().sort((a,b)=>b.hidden.star-a.hidden.star)[0].id; group.selectedIds=group.members.map(m=>m.id);
  initRelations(group); group.fans=rand(200,900); group.power=rand(6,14); group.growth=20; group.tier=tierFromPower(group.power); group.brand=rand(8,18);
  state.cash-=700000; state.pl.expenses+=700000; state.groups.push(group); state.activeGroupId=group.id; state.news.unshift(`${state.agencyName}: 新グループ ${group.name} を設立。`); render();
}
function setCenter(id){ const g=currentGroup(); g.centerId=id; activeMembers(g).forEach(m=>m.mood=clamp(m.mood+(m.id===id?5:-1),0,100)); state.news.unshift(`${g.name}: ${getMember(id,g).name}が新センターに就任。`); render(); }
function toggleSelectedMember(id){ const g=currentGroup(); let ids=new Set(g.selectedIds); if(ids.has(id)) ids.delete(id); else if(ids.size<5) ids.add(id); if(ids.size===0) ids=new Set(activeMembers(g).slice(0,5).map(m=>m.id)); g.selectedIds=[...ids]; render(); }
function manualRest(id){ const g=currentGroup(); const m=getMember(id,g); m.status="rest"; state.news.unshift(`${g.name}: ${m.name}が活動休止。`); if(g.centerId===id) g.centerId=activeMembers(g)[0]?.id||null; closeMember(); render(); }
function graduateMember(id){ const g=currentGroup(); const m=getMember(id,g); if(!confirm(`${m.name}を卒業させますか？`)) return; m.status="graduate"; state.news.unshift(`${g.name}: ${m.name}が卒業。`); if(g.centerId===id) g.centerId=activeMembers(g)[0]?.id||null; closeMember(); render(); }
function takePersonalJob(memberId, jobId){
  const g=currentGroup(); const m=getMember(memberId,g); const job=JOBS.find(j=>j.id===jobId); if(!m||!job) return;
  const statVal = job.stat==="visual"?m.stats.visual : job.stat==="talk"?m.stats.talk : m.stats.dance;
  const success = clamp((statVal + m.hidden.star)/200, 0.2, 0.95); const hit=Math.random()<success;
  const fans = hit ? Math.round(job.fans*(1+m.hidden.star/160)) : Math.round(job.fans*0.45);
  state.cash += job.pay; state.pl.revenue += job.pay; g.fans += fans; m.popularity += Math.round(fans*0.6); m.fatigue = clamp(m.fatigue+job.fatigue,0,100); state.companyReputation = clamp(state.companyReputation+(hit?2:1),0,100);
  state.news.unshift(`${m.name}: ${job.name} ${hit?`成功`:`出演`}。個人認知が上昇。`); closeMember(); render();
}
function produceMV(cost){
  const g=currentGroup(); if(state.cash<cost) return; const quality=clamp(Math.round(45+Math.log10(cost)*8+rand(-10,12)+(hasStaff("creative")?10:0)),20,100);
  state.cash-=cost; state.pl.expenses+=cost; g.mvLibrary.push({id:'mv'+Date.now(), cost, quality}); g.brand=clamp(g.brand+Math.round(quality/18),0,100); g.fanSegments.casual+=5; g.fanSegments.female+=3; normalizeFanSegments(g); state.news.unshift(`${g.name}: 新MVを公開。映像評価 ${quality}。`); render();
}
function produceOutfit(cost){
  const g=currentGroup(); if(state.cash<cost) return; const quality=clamp(Math.round(40+Math.log10(cost)*8+rand(-10,12)+(hasStaff("creative")?8:0)),20,100);
  state.cash-=cost; state.pl.expenses+=cost; g.outfits.push({id:'o'+Date.now(), cost, quality}); g.brand=clamp(g.brand+Math.round(quality/20),0,100); g.fanSegments.female+=4; normalizeFanSegments(g); state.news.unshift(`${g.name}: 新衣装を制作。ビジュアル評価 ${quality}。`); render();
}
function sellGoods(id){
  const item=GOODS.find(x=>x.id===id); const g=currentGroup(); if(!item||state.cash<item.cost) return;
  const boost=hasStaff("goods")?1.22:1; const core=Math.max(20,Math.round(g.fans*(0.035+g.fanTrust/2000))); const sold=Math.min(core,Math.round(core*rand(55,100)/100*item.appeal*boost)); const revenue=sold*item.price;
  state.cash += revenue-item.cost; state.pl.revenue+=revenue; state.pl.expenses+=item.cost; g.goodsSales+=revenue; g.brand=clamp(g.brand+rand(1,3),0,100); state.news.unshift(`${g.name}: ${item.name}を${sold.toLocaleString()}個販売。`); render();
}
function signSponsor(id){ const s=SPONSORS.find(x=>x.id===id); if(!s||state.sponsors.some(x=>x.id===id)) return; state.sponsors.push({...s, remaining:s.months}); state.cash+=s.fee; state.pl.revenue+=s.fee; state.groups.forEach(g=>g.brand=clamp(g.brand+s.brand,0,100)); state.companyReputation=clamp(state.companyReputation+4,0,100); state.news.unshift(`${s.name}とスポンサー契約。`); render(); }
function signLabel(id){ const l=LABELS.find(x=>x.id===id); if(!l || avgCompanyPower()<l.minPower) return; state.labelId=id; state.cash+=l.advance; state.pl.revenue+=l.advance; state.companyReputation=clamp(state.companyReputation+5,0,100); state.news.unshift(`${l.name}とレーベル契約を締結。`); render(); }
function hireStaff(id){ const s=STAFF_POOL.find(x=>x.id===id); if(!s || hasStaff(id) || state.staff.length>=2+state.officeLevel*2) return; state.staff.push({...s}); state.companyReputation=clamp(state.companyReputation+2,0,100); state.news.unshift(`${s.name}を採用。`); render(); }
function upgradeOffice(){ const cost=state.officeLevel*1200000; if(state.cash<cost) return; state.cash-=cost; state.pl.expenses+=cost; state.officeLevel++; state.companyReputation=clamp(state.companyReputation+6,0,100); state.news.unshift(`事務所をレベル ${state.officeLevel} に拡張。`); render(); }
function runTourStop(city){
  const c=TOUR_CITIES.find(x=>x.name===city); const g=currentGroup(); if(!c||state.cash<c.cost) return; const staffBoost=hasStaff("tour")?1.18:1; const draw=Math.round((g.fans*.06+g.power*18+rand(60,260))*staffBoost); const attendance=Math.min(c.cap, draw); const revenue=attendance*5800; state.cash+=revenue-c.cost; state.pl.revenue+=revenue; state.pl.expenses+=c.cost; g.fans+=Math.round(attendance*.45); g.power=clamp(g.power+(attendance>c.cap*.85?3:1),1,100); g.fanSegments.live+=4; normalizeFanSegments(g); state.news.unshift(`${g.name}: ${city} ツアーで${attendance.toLocaleString()}人を動員。`); render();
}
function runOwnFestival(){
  if(state.cash<1800000) return; const cost=1800000; const combinedFans=totalFans(), combinedPower=avgCompanyPower(); const attendance=Math.min(12000, Math.round(combinedFans*.035+combinedPower*55+rand(500,1600))*(hasStaff("tour")?1.15:1)); const revenue=attendance*6800; state.cash+=revenue-cost; state.pl.revenue+=revenue; state.pl.expenses+=cost; state.groups.forEach(g=>{g.fans+=Math.round(attendance*.08); g.power=clamp(g.power+2,1,100); g.brand=clamp(g.brand+4,0,100)}); state.companyReputation=clamp(state.companyReputation+10,0,100); state.news.unshift(`${state.agencyName} FEST を開催。${attendance.toLocaleString()}人を動員。`); render();
}
function takeBigDeal(id){ const d=BIG_DEALS.find(x=>x.id===id); const g=currentGroup(); if(!d||state.companyReputation<d.need) return; const hit=Math.random()<(0.55+state.companyReputation/250+(hasStaff("sales")?0.12:0)); const fans=hit?Math.round(d.fans*(1+g.brand/140)):Math.round(d.fans*.45); state.cash+=d.pay; state.pl.revenue+=d.pay; g.fans+=fans; state.companyReputation=clamp(state.companyReputation+d.rep,0,100); if(d.id==="fashion") g.fanSegments.female+=6; else g.fanSegments.casual+=5; normalizeFanSegments(g); state.news.unshift(`${d.name}を${hit?`成功受注`:`受注`}。`); render(); }
function raiseInvestment(id){ const inv=INVESTORS.find(x=>x.id===id); if(!inv || state.companyEquity<=inv.equity) return; state.companyEquity-=inv.equity; state.cash+=inv.cash; state.investorCashRaised+=inv.cash; state.companyReputation=clamp(state.companyReputation+inv.rep,0,100); state.news.unshift(`${inv.name}から${money(inv.cash)}を調達。創業者持分 ${state.companyEquity}%。`); render(); }
function refreshTalentMarket(){ state.marketMembers=Array.from({length:6},(_,i)=>{const m=generateCandidate(i,1,pick(CONCEPTS).id); m.transferFee=rand(350000,1800000); m.formerGroup=pick(RIVAL_NAMES); return m;}); }
function poachMember(id){ const g=currentGroup(); const m=state.marketMembers.find(x=>x.id===id); if(!m || state.cash<m.transferFee) return; const success=Math.random()<(0.45+state.companyReputation/200); if(!success){ const failCost=Math.round(m.transferFee*.08); state.cash-=failCost; state.pl.expenses+=failCost; state.news.unshift(`${m.name}の獲得交渉は不成立。`); render(); return; } state.cash-=m.transferFee; state.pl.expenses+=m.transferFee; m.generation=g.generation; m.popularity=rand(100,900); g.members.push(m); ensureRelations([m], g); g.selectedIds=activeMembers(g).slice(0,5).map(m=>m.id); state.marketMembers=state.marketMembers.filter(x=>x.id!==id); state.news.unshift(`${m.name}を移籍金 ${money(m.transferFee)} で獲得。`); render(); }

function titleScreen(){
  const hasSave=!!localStorage.getItem(SAVE_KEY);
  return `<div class="hero"><div class="hero-card"><div class="logo">IDOL DYNASTY</div><div class="subtitle">芸能事務所経営シミュレーション v0.6 / 日本語・キャラ画像・ロゴ機能 強化版</div>
    <div class="hero-grid">
      <div>
        <div class="help-box">このゲームは、<strong>アイドルグループの育成</strong>と<strong>芸能事務所の経営</strong>を同時に楽しむシミュレーション。まず事務所名・グループ名・ロゴ・方針を決めて、オーディションで5人を選んでデビューさせよう。</div>
        <div class="stack" style="margin-top:16px"><button onclick="startNew()">新しく始める</button>${hasSave?`<button class="secondary" onclick="loadGame()">続きから</button>`:''}</div>
        <div class="footer-note">v0.6では、完全日本語化 / 事務所名入力 / グループロゴ設定 / キャラクター画像表示 / スマホでの見やすさ改善 を実装。</div>
      </div>
      <div class="card"><div class="brand-logo-preview">${getAgencyLogoPreview()}</div></div>
    </div>
  </div></div>`;
}
function setupScreen(){
  return `<div class="container"><div class="topbar"><div><h1>ゲーム開始設定</h1><div class="muted">ステップ1 / 2</div></div><button class="ghost" onclick="render()">最新プレビュー</button></div>
    <div class="hero-grid">
      <div class="card">
        <div class="formrow"><label>事務所名</label><input value="${escapeHTML(setupForm.agencyName)}" oninput="setSetupField('agencyName', this.value, false)" onblur="render()" maxlength="28"></div>
        <div class="formrow"><label>グループ名</label><input value="${escapeHTML(setupForm.groupName)}" oninput="setSetupField('groupName', this.value, false)" onblur="render()" maxlength="24"></div>
        <div class="formrow"><label>グループコンセプト</label><div class="choice-list">${CONCEPTS.map(c=>`<div class="choice ${setupForm.conceptId===c.id?'active':''}" onclick="setSetupField('conceptId','${c.id}')"><strong>${c.name}</strong><small>${c.desc}</small></div>`).join('')}</div></div>
        <div class="formrow"><label>プロデュース方針</label><div class="choice-list">${PRODUCER_TYPES.map(p=>`<div class="choice ${setupForm.producerId===p.id?'active':''}" onclick="setSetupField('producerId','${p.id}')"><strong>${p.name}</strong><small>${p.effect}</small></div>`).join('')}</div></div>
        <div class="formrow"><label>ロゴカラー</label><div class="logo-picks">${LOGO_COLORS.map(c=>`<div class="logo-pick ${setupForm.logoColorId===c.id?'active':''}" onclick="setSetupField('logoColorId','${c.id}')"><span style="display:inline-block;width:16px;height:16px;border-radius:50%;background:${c.value};margin-right:8px;vertical-align:middle"></span>${c.name}</div>`).join('')}</div></div>
        <div class="formrow"><label>ロゴマーク</label><div class="mark-picks">${LOGO_MARKS.map(m=>`<div class="mark-pick ${setupForm.logoMarkId===m.id?'active':''}" onclick="setSetupField('logoMarkId','${m.id}')"><strong style="font-size:20px">${m.symbol}</strong> ${m.name}</div>`).join('')}</div></div>
        <div class="formrow"><label>ロゴの雰囲気</label><div class="choice-list">${LOGO_STYLES.map(st=>`<div class="choice ${setupForm.logoStyleId===st.id?'active':''}" onclick="setSetupField('logoStyleId','${st.id}')"><strong>${st.name}</strong><small>${st.desc}</small></div>`).join('')}</div></div>
        <button onclick="chooseSetupAndAudition()">オーディションへ進む</button>
      </div>
      <div class="card"><div class="section-title"><h2>ロゴプレビュー</h2><span class="muted">ゲーム内で常に表示される</span></div><div class="brand-logo-preview">${getAgencyLogoPreview()}</div><hr class="sep"><div class="help-box">ここで決めた <strong>事務所名 / グループ名 / ロゴ</strong> は、会社画面・ニュース・グループ一覧・ロゴ表示に反映される。<br>「推しが生まれる画面」を目指して、世界観が伝わる設定にしよう。</div></div>
    </div></div>`;
}
function auditionScreen(){
  return `<div class="container"><div class="topbar"><div><h1>オーディション</h1><div class="muted">ステップ2 / 2 / 5人を選抜</div></div><div class="card" style="padding:12px 14px"><strong>${escapeHTML(state.agencyName)}</strong><br><span class="muted">${escapeHTML(setupForm.groupName)} / ${selectedConcept().name} / ${selectedProducer().name}</span></div></div>
    <div class="card" style="margin-bottom:16px"><div class="split"><div><strong>選択中：${selection.size} / 5</strong><div class="muted">気になった子を5人選んでデビューさせよう。画像・能力・雰囲気を見ながら選べる。</div></div><button onclick="confirmMembers()" ${selection.size===5?``:`disabled`}>この5人でデビュー</button></div></div>
    <div class="audition-grid">${state.candidates.map(candidateCard).join('')}</div></div>`;
}
function gameShell(){
  const g=currentGroup();
  return `<div class="container">
    <div class="topbar">
      <div><h1>${escapeHTML(state.agencyName)}</h1><div class="muted">${state.year}年目 / ${state.month}月 ・ 運営中グループ：${escapeHTML(g.name)}</div></div>
      <div class="stack"><button class="secondary" onclick="saveGame()">セーブ</button><button class="ghost" onclick="resetGame()">リセット</button></div>
    </div>
    <div class="hero-grid">
      <div class="card"><div class="split"><div><strong>${escapeHTML(g.name)}</strong><div class="muted">${(CONCEPTS.find(c=>c.id===g.conceptId)||{}).name || ''} / ${((PRODUCER_TYPES.find(p=>p.id===g.producerId)||{}).name)||''}</div></div><span class="pill">業界ランク ${g.tier}</span></div><div class="brand-logo-preview" style="min-height:160px;margin-top:12px">${getGroupLogo(g)}</div></div>
      <div class="card"><div class="help-box"><strong>今月の目安</strong><br>・総合力 ${g.power} / ファン ${g.fans.toLocaleString()}人<br>・資金を見ながら育成と露出を回す<br>・疲労が高い子は休養も大事<br>・センターと選抜で人気の伸び方が変わる</div></div>
    </div>
    <div class="group-switcher" style="margin-top:16px">${state.groups.map(gr=>`<button class="${gr.id===state.activeGroupId?'active':'secondary'}" onclick="switchGroup('${gr.id}')">${escapeHTML(gr.name)}</button>`).join('')}</div>
    <div class="kpis">${kpi('会社資金', money(state.cash))}${kpi('グループファン', g.fans.toLocaleString())}${kpi('総合力', g.power)}${kpi('成長率', (g.growth>=0?'+':'') + g.growth + '%')}${kpi('ランク', g.tier)}</div>
    <div class="mini-grid">${kpi('全体ファン数', totalFans().toLocaleString())}${kpi('事務所評価', state.companyReputation)}${kpi('持分', state.companyEquity + '%')}${kpi('事務所Lv', state.officeLevel)}</div>
    <div class="help-box" style="margin-top:12px"><strong>指標の見方</strong><br><b>総合力</b>：今のグループの強さ。大きな会場解禁に必要。　<b>成長率</b>：今月どれだけファンが伸びたか。<br><b>ランク</b>：総合力をE〜S+で表した業界評価。　<b>事務所評価</b>：大型案件・投資家・移籍交渉に影響。　<b>持分</b>：会社を自分が何％所有しているか。</div>
    <div class="nav">${navBtn('home','ホーム')}${navBtn('members','メンバー')}${navBtn('music','楽曲・世界観')}${navBtn('live','ライブ')}${navBtn('business','収益')}${navBtn('office','事務所')}${navBtn('company','会社経営')}${navBtn('media','メディア')}${navBtn('history','履歴')}${navBtn('map','勢力図')}</div>
    ${tabContent()}
  </div>`;
}
function tabContent(){ switch(state.tab){ case 'members': return membersTab(); case 'music': return musicTab(); case 'live': return liveTab(); case 'business': return businessTab(); case 'office': return officeTab(); case 'company': return companyTab(); case 'media': return mediaTab(); case 'history': return historyTab(); case 'map': return mapTab(); default: return homeTab(); } }
function homeTab(){
  const g=currentGroup();
  return `<div class="section-title"><h2>今月の行動を選ぶ</h2><span class="muted">1か月につき1つ選択して進行</span></div>
    <div class="grid grid3">
      ${actionCard('training','レッスン強化','能力成長 / 覚醒抽選','¥120,000')}
      ${actionCard('sns','SNS攻勢','新規ファン獲得 / バズ抽選','¥80,000')}
      ${actionCard('song','新曲制作','新曲追加 / 話題化','¥350,000')}
      ${actionCard('live','ワンマンライブ','ライブタブで会場選択','会場費')}
      ${actionCard('handshake','特典会','コアファン増加 / 収益化','¥70,000')}
      ${actionCard('media','メディア営業','認知拡大 / 会社評価UP','¥100,000')}
      ${actionCard('rest','休養月間','疲労回復 / 気分回復','¥20,000')}
    </div>
    <div style="margin-top:14px" class="stack"><button onclick="executeMonth()" ${state.selectedAction?'':'disabled'}>この方針で1か月進める</button><span class="muted">選択中：${ state.selectedAction ? ({training:'レッスン強化',sns:'SNS攻勢',song:'新曲制作',live:'ワンマンライブ',handshake:'特典会',media:'メディア営業',rest:'休養月間'}[state.selectedAction]) : '未選択' }</span></div>
    ${state.year>=2 && !g.secondGenDone ? `<div class="section-title"><h2>2期生</h2></div><div class="card"><div class="split"><div><strong>${g.name} 2期生オーディション解禁</strong><div class="muted">新しい推し候補を追加できる。</div></div><button onclick="startSecondGen()">2期生を追加</button></div></div>`:''}
    ${state.year>=3 && state.groups.length<3 ? `<div class="section-title"><h2>事務所拡大</h2></div><div class="card"><div class="split"><div><strong>新グループ設立が可能</strong><div class="muted">複数グループ経営へ進む。</div></div><button onclick="createNewGroup()" ${state.cash<700000?'disabled':''}>新グループを設立</button></div></div>`:''}
    <div class="section-title"><h2>注目メンバー</h2><span class="muted">推しが生まれる画面</span></div>
    <div class="grid grid5">${activeMembers(g).slice().sort((a,b)=>b.popularity-a.popularity).map(m=>memberMini(m,g)).join('')}</div>
    <div class="info-grid" style="margin-top:18px">
      <div><div class="section-title"><h2>ファンの内訳</h2></div><div class="card">${fanSegmentsHTML(g)}</div></div>
      <div><div class="section-title"><h2>最新ニュース</h2></div><div class="card">${state.news.length?state.news.slice(0,8).map(n=>`<div class="news"><span>📰</span><span>${escapeHTML(n)}</span></div>`).join(''):`<span class="muted">まだニュースはありません。</span>`}</div></div>
    </div>`;
}
function actionCard(id,title,desc,cost){ return `<div class="card action-card ${state.selectedAction===id?'selected':''}" onclick="selectAction('${id}')"><h3 style="margin:0 0 6px">${title}</h3><div class="muted">${desc}</div><div style="margin-top:12px"><strong>${cost}</strong></div></div>`; }
function membersTab(){
  const g=currentGroup(); const active=activeMembers(g).slice().sort((a,b)=>b.popularity-a.popularity); const inactive=g.members.filter(m=>m.status!=="active");
  return `<div class="section-title"><h2>メンバー管理</h2><span class="muted">センター / 選抜 / 個人状態を確認</span></div>
    <div class="member-grid">${active.map((m,i)=>memberManageCard(m,i,g)).join('')}</div>
    ${inactive.length?`<div class="section-title"><h2>休止・卒業メンバー</h2></div><div class="grid grid3">${inactive.map(m=>`<div class="card"><strong>${m.name}</strong><div class="muted">${m.status==='graduate'?'卒業':'活動休止'}</div></div>`).join('')}</div>`:''}`;
}
function memberManageCard(m, i, g){
  const selected = g.selectedIds.includes(m.id);
  return `<div class="card member-card">
    <img src="${getPortraitPath(m)}" alt="${escapeHTML(m.name)}">
    <div class="name-row"><div><strong>#${i+1} ${m.name}</strong></div>${g.centerId===m.id?`<span class="center-ribbon">センター</span>`:''}</div>
    <div class="stack"><span class="badge">${m.trait}</span><span class="pill small">${m.popularity.toLocaleString()} 個人ファン</span></div>
    ${statBar('ビジュアル', m.stats.visual)}${statBar('歌', m.stats.vocal)}${statBar('ダンス', m.stats.dance)}${statBar('SNS', m.stats.sns)}${statBar('ステージ', m.stats.stage)}
    ${statBar('気分', m.mood,'good')}${statBar('疲労', m.fatigue, m.fatigue>=70?'bad':'')}
    <div class="stack" style="margin-top:12px">
      <button class="secondary" onclick="setCenter('${m.id}')">センターにする</button>
      <button class="secondary ${selected?'active':''}" onclick="toggleSelectedMember('${m.id}')">${selected?'選抜中':'選抜に入れる'}</button>
      <button onclick="openMember('${m.id}')">詳細を見る</button>
    </div>
  </div>`;
}
function musicTab(){
  const g=currentGroup();
  return `<div class="section-title"><h2>楽曲・世界観</h2><span class="muted">楽曲、MV、衣装、ロゴでブランドを育てる</span></div>
    <div class="grid grid2"><div class="card"><strong>現在のレーベル：${currentLabel().name}</strong><div class="muted">宣伝力 +${currentLabel().promo} / 売上分配率 ${currentLabel().share}%</div><div class="stack" style="margin-top:12px">${LABELS.map(l=>`<button class="secondary ${state.labelId===l.id?'active':''}" onclick="signLabel('${l.id}')" ${avgCompanyPower()<l.minPower||state.labelId===l.id?'disabled':''}>${l.name}</button>`).join('')}</div></div><div class="card"><strong>グループロゴ</strong><div class="brand-logo-preview" style="min-height:180px;margin-top:12px">${getGroupLogo(g)}</div></div></div>
    <div class="section-title"><h2>新曲・MV・衣装</h2></div>
    <div class="grid grid3"><div class="card"><h3>新曲制作</h3><div class="muted">ホームタブの「新曲制作」でリリース。</div>${g.songs.length?`<div class="list-compact">${g.songs.slice().reverse().slice(0,4).map(s=>`<div><strong>${s.title}</strong><div class="muted">楽曲評価 ${s.score} / バズ力 ${s.viral} / ライブ適性 ${s.live}</div></div>`).join('')}</div>`:`<div class="muted" style="margin-top:10px">まだ楽曲はありません。</div>`}</div><div class="card"><h3>MV制作</h3><div class="muted">公開するとブランド力やライト層が伸びる。</div><div class="stack" style="margin-top:12px"><button onclick="produceMV(300000)" ${state.cash<300000?'disabled':''}>簡易MV ¥300,000</button><button class="secondary" onclick="produceMV(900000)" ${state.cash<900000?'disabled':''}>本格MV ¥900,000</button></div><div class="muted" style="margin-top:10px">累計 ${g.mvLibrary.length}本</div></div><div class="card"><h3>衣装制作</h3><div class="muted">世界観が強まり、女性ファン・ブランドが伸びる。</div><div class="stack" style="margin-top:12px"><button onclick="produceOutfit(250000)" ${state.cash<250000?'disabled':''}>新衣装 ¥250,000</button><button class="secondary" onclick="produceOutfit(700000)" ${state.cash<700000?'disabled':''}>豪華衣装 ¥700,000</button></div><div class="muted" style="margin-top:10px">累計 ${g.outfits.length}着</div></div></div>`;
}
function liveTab(){
  const g=currentGroup(); const active=selectedMembers(g);
  return `<div class="section-title"><h2>ライブ</h2><span class="muted">会場選択・ツアー・自社フェス</span></div>
    <div class="card"><strong>出演選抜</strong><div class="muted">${active.map(m=>m.name).join(' / ') || '未設定'} ｜ 勝負曲：${getActiveSong(g)?.title || 'なし'}</div></div>
    <div class="section-title"><h2>会場選択</h2></div>
    <div class="grid grid3">${VENUES.map(v=>`<div class="card venue-card ${g.selectedVenueId===v.id?'active':''}" onclick="${g.power<v.minPower?'':`currentGroup().selectedVenueId='${v.id}';render()`}"><h3>${v.name}</h3><div>キャパ ${v.cap.toLocaleString()}人</div><div>会場費 ${money(v.cost)}</div><div>チケット ${money(v.ticket)}</div><div class="muted">必要総合力 ${v.minPower}</div>${g.power<v.minPower?`<span class="badge">未解禁</span>`:''}</div>`).join('')}</div>
    <div class="section-title"><h2>全国ツアー</h2></div>
    <div class="card">${TOUR_CITIES.map(c=>`<div class="tour-stop"><div><strong>${c.name}</strong><div class="muted">会場費 ${money(c.cost)} / 目安キャパ ${c.cap.toLocaleString()}人</div></div><span>${money(c.cost)}</span><button onclick="runTourStop('${c.name}')" ${state.cash<c.cost?'disabled':''}>開催</button></div>`).join('')}</div>
    <div class="section-title"><h2>自社フェス</h2></div>
    <div class="card"><div class="split"><div><strong>${escapeHTML(state.agencyName)} FEST</strong><div class="muted">所属グループ合同の自社フェス。会社全体を伸ばせる。</div></div><button onclick="runOwnFestival()" ${state.cash<1800000?'disabled':''}>開催 ¥1,800,000</button></div></div>`;
}
function businessTab(){
  const g=currentGroup();
  return `<div class="section-title"><h2>収益</h2><span class="muted">特典会・グッズ・スポンサー</span></div>
    <div class="grid grid2"><div class="card"><h3>特典会コアファン</h3><div class="big-number">${g.handshakeFans.toLocaleString()}</div><div class="muted">累計コアファン</div></div><div class="card"><h3>グッズ累計売上</h3><div class="big-number">${money(g.goodsSales)}</div><div class="muted">累計</div></div></div>
    <div class="section-title"><h2>グッズ展開</h2></div>
    <div class="grid grid3">${GOODS.map(item=>`<div class="card"><h3>${item.name}</h3><div class="muted">原価 ${money(item.cost)} / 販売価格 ${money(item.price)}</div><button style="margin-top:10px" onclick="sellGoods('${item.id}')" ${state.cash<item.cost?'disabled':''}>販売する</button></div>`).join('')}</div>
    <div class="section-title"><h2>スポンサー契約</h2></div>
    <div class="grid grid3">${SPONSORS.map(s=>`<div class="card"><h3>${s.name}</h3><div>${money(s.fee)}</div><div class="muted">${s.desc} / 契約${s.months}か月</div><button style="margin-top:10px" onclick="signSponsor('${s.id}')" ${state.sponsors.some(x=>x.id===s.id)?'disabled':''}>契約する</button></div>`).join('')}</div>`;
}
function officeTab(){
  return `<div class="section-title"><h2>事務所</h2><span class="muted">スタッフ採用・グループ一覧・ロゴ管理</span></div>
    <div class="office-grid">
      <div><div class="card"><div class="split"><div><h3 style="margin:0">事務所レベル ${state.officeLevel}</h3><div class="muted">最大スタッフ ${2+state.officeLevel*2}名 / 現在 ${state.staff.length}名</div></div><button onclick="upgradeOffice()" ${state.cash<state.officeLevel*1200000?'disabled':''}>拡張 ${money(state.officeLevel*1200000)}</button></div></div>
        <div class="section-title"><h2>スタッフ採用</h2></div><div class="grid grid2">${STAFF_POOL.map(s=>`<div class="card staff-item"><h3>${s.name}</h3><div>${money(s.salary)}/月</div><div class="muted">${s.desc}</div><button style="margin-top:10px" onclick="hireStaff('${s.id}')" ${hasStaff(s.id)||state.staff.length>=2+state.officeLevel*2?'disabled':''}>採用する</button></div>`).join('')}</div>
      </div>
      <div><div class="section-title"><h2>所属グループ</h2></div><div class="portfolio-list">${state.groups.map(g=>`<div class="card portfolio-card ${g.id===state.activeGroupId?'active':''}" onclick="switchGroup('${g.id}')"><div class="thumb-logo">${getGroupLogo(g)}</div><h3>${g.name}</h3><div class="muted">${(CONCEPTS.find(c=>c.id===g.conceptId)||{}).name||''}</div><div>ファン ${g.fans.toLocaleString()} / 総合力 ${g.power} / ${g.tier}</div></div>`).join('')}</div><div class="section-title"><h2>稼働中スタッフ</h2></div><div class="card">${state.staff.length?state.staff.map(s=>`<div class="news"><span>👔</span><span><strong>${s.name}</strong><br><span class="muted">${money(s.salary)}/月 ・ ${s.desc}</span></span></div>`).join(''):`<span class="muted">まだスタッフはいません。</span>`}</div></div>
    </div>`;
}
function companyTab(){
  const salary=state.staff.reduce((s,x)=>s+x.salary,0), activeSponsors=state.sponsors.reduce((s,x)=>s + x.fee/Math.max(1,x.months), 0);
  if(!state.marketMembers.length) refreshTalentMarket();
  return `<div class="section-title"><h2>会社経営</h2><span class="muted">PL・大型案件・投資家・移籍市場</span></div>
    <div class="company-pl">
      <div class="pl-card"><div class="label">今月売上</div><div class="value pl-positive">${money(state.pl.lastRevenue)}</div></div>
      <div class="pl-card"><div class="label">今月費用</div><div class="value pl-negative">${money(state.pl.lastExpenses)}</div></div>
      <div class="pl-card"><div class="label">今月利益</div><div class="value ${state.pl.lastProfit>=0?'pl-positive':'pl-negative'}">${money(state.pl.lastProfit)}</div></div>
      <div class="pl-card"><div class="label">現金残高</div><div class="value">${money(state.cash)}</div></div>
    </div>
    <div class="grid grid2" style="margin-top:16px"><div class="card"><h3>固定費構造</h3><div>スタッフ給与 ${money(salary)}</div><div>事務所維持費 ${money(state.officeLevel*90000)}</div><div class="muted">スポンサー月換算 ${money(activeSponsors)}</div></div><div class="card"><h3>資本構成</h3><div>創業者持分 ${state.companyEquity}%</div><div>外部調達累計 ${money(state.investorCashRaised)}</div><div>借入金 ${money(state.debt)}</div></div></div>
    <div class="section-title"><h2>大型案件</h2></div><div class="grid grid2">${BIG_DEALS.map(d=>`<div class="card deal-card"><h3>${d.name}</h3><div class="muted">${d.desc}</div><div>報酬 ${money(d.pay)} / 必要事務所評価 ${d.need}</div><button style="margin-top:10px" onclick="takeBigDeal('${d.id}')" ${state.companyReputation<d.need?'disabled':''}>受注する</button></div>`).join('')}</div>
    <div class="section-title"><h2>投資家</h2></div><div class="grid grid3">${INVESTORS.map(i=>`<div class="card investor-card"><h3>${i.name}</h3><div>${money(i.cash)}</div><div class="muted">持分 ${i.equity}% を要求</div><button style="margin-top:10px" onclick="raiseInvestment('${i.id}')" ${state.companyEquity<=i.equity?'disabled':''}>資金調達</button></div>`).join('')}</div>
    <div class="section-title"><h2>タレント市場</h2></div><div class="grid grid3">${state.marketMembers.map(m=>`<div class="card market-member"><img src="${m.portrait}" alt="${escapeHTML(m.name)}" style="width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:14px;margin-bottom:10px"><h3>${m.name}</h3><div class="muted">元所属：${m.formerGroup} / ${m.trait}</div><div>スター性 ${m.hidden.star} / ポテンシャル ${m.hidden.potential}</div><div>移籍金 ${money(m.transferFee)}</div><button style="margin-top:10px" onclick="poachMember('${m.id}')" ${state.cash<m.transferFee?'disabled':''}>獲得交渉</button></div>`).join('')}</div>`;
}
function mediaTab(){
  const g=currentGroup();
  return `<div class="section-title"><h2>メディア・個人仕事</h2><span class="muted">メンバー単位で認知を伸ばす</span></div><div class="grid grid3">${activeMembers(g).map(m=>`<div class="card"><img src="${getPortraitPath(m)}" alt="${escapeHTML(m.name)}" style="width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:14px;margin-bottom:10px"><h3>${m.name}</h3><div class="muted">${m.trait}</div><div>スター性 ${m.hidden.star} / トーク ${m.stats.talk} / ビジュアル ${m.stats.visual}</div><button style="margin-top:10px" onclick="openMember('${m.id}')">仕事を選ぶ</button></div>`).join('')}</div>`;
}
function historyTab(){
  return `<div class="section-title"><h2>履歴</h2><span class="muted">受賞・タイムライン</span></div><div class="grid grid2"><div class="card"><h3>受賞歴</h3>${state.awards.length?state.awards.slice().reverse().map(a=>`<div class="award"><strong>${a.year}年目 ${a.title}</strong><div class="muted">${a.detail}</div></div>`).join(''):`<div class="muted">まだ受賞歴はありません。</div>`}</div><div class="card"><h3>タイムライン</h3>${state.history.length?state.history.slice().reverse().slice(0,32).map(h=>`<div class="timeline-item"><strong>${h.year}年目 / ${h.month}月</strong><div>${h.group || ''} ${h.action?`・${h.action}`:''}</div><div class="muted">${h.headline}</div></div>`).join(''):`<div class="muted">まだ履歴はありません。</div>`}</div></div>`;
}
function mapTab(){
  const rows=[...state.rivals,...state.groups.map(g=>({name:g.name,power:g.power,growth:g.growth,tier:g.tier,self:g.id===state.activeGroupId}))].sort((a,b)=>b.power-a.power);
  return `<div class="section-title"><h2>アイドル勢力図</h2><span class="muted">業界内での現在地</span></div><div class="card">${rows.map((r,i)=>`<div class="rankrow ${r.self?'rank-self':''}"><strong>#${i+1}</strong><span>${escapeHTML(r.name)}${r.self?' ★':''}</span><span>総合力 ${r.power}</span><span>${r.growth>=0?'+':''}${r.growth}%</span><strong>${r.tier}</strong></div>`).join('')}</div>`;
}
function memberModal(id){
  const g=currentGroup(); const m=getMember(id,g); if(!m) return '';
  const rels = activeMembers(g).filter(x=>x.id!==id).map(x=>({name:x.name,val:g.relationships[id]?.[x.id]||0})).sort((a,b)=>b.val-a.val);
  return `<div class="modal-bg" onclick="if(event.target===this)closeMember()"><div class="modal"><div class="split"><div><h2 style="margin:0">${m.name}</h2><div class="muted">${g.name} ・ ${m.age}歳 ・ ${m.trait}</div></div><button class="ghost" onclick="closeMember()">閉じる</button></div>
    <div class="profile-grid" style="margin-top:18px"><div class="profile-left"><img src="${getPortraitPath(m)}" alt="${escapeHTML(m.name)}" class="portrait-main"><div class="card"><div class="split"><strong>個人ファン</strong><span class="pill">${m.popularity.toLocaleString()}人</span></div>${statBar('気分', m.mood,'good')}${statBar('疲労', m.fatigue, m.fatigue>=70?'bad':'')}${statBar('スター性', m.hidden.star)}${statBar('ポテンシャル', m.hidden.potential)}<div class="stack" style="margin-top:12px"><button class="secondary" onclick="manualRest('${m.id}')">休養させる</button><button class="secondary" onclick="graduateMember('${m.id}')">卒業させる</button></div></div></div>
      <div class="profile-right"><div class="card"><h3 style="margin-top:0">能力</h3>${statBar('ビジュアル', m.stats.visual)}${statBar('歌', m.stats.vocal)}${statBar('ダンス', m.stats.dance)}${statBar('トーク', m.stats.talk)}${statBar('SNS', m.stats.sns)}${statBar('ステージ', m.stats.stage)}${statBar('メンタル', m.stats.mental)}</div>
      <div class="card"><h3 style="margin-top:0">個人仕事</h3><div class="grid grid2">${JOBS.map(job=>`<div class="card" style="padding:12px"><strong>${job.name}</strong><div class="muted">報酬 ${money(job.pay)} / 期待ファン +${job.fans}</div><button style="margin-top:10px" onclick="takePersonalJob('${m.id}','${job.id}')">受ける</button></div>`).join('')}</div></div>
      <div class="card"><h3 style="margin-top:0">相性の良いメンバー</h3>${rels.length?rels.slice(0,5).map(r=>`<div class="news"><span>🤝</span><span>${r.name}<br><span class="muted">相性 ${r.val}</span></span></div>`).join(''):`<span class="muted">まだデータがありません。</span>`}</div>
    </div></div></div></div>`;
}
function eventModal(e){ return `<div class="modal-bg"><div class="modal"><div class="muted">スペシャルイベント</div><h2>${e.title}</h2><p>${e.text}</p><div class="stack">${e.options.map((o,i)=>`<button class="${i?`secondary`:``}" onclick="resolveEvent(${i})">${o}</button>`).join('')}</div></div></div>`; }
function resultScreen(){
  const r=lastResult;
  return `<div class="hero"><div class="hero-card"><div class="muted">今月の結果</div><h1 style="margin-top:8px">${r.headline}</h1><div class="grid grid3" style="margin-top:20px">${resultCard('ファン増加', `+${r.fanGain.toLocaleString()}`, 'result-positive')}${resultCard('資金増減', `${r.cashDelta>=0?'+':''}${money(r.cashDelta)}`, r.cashDelta>=0?'result-positive':'result-negative')}${resultCard('総合力変化', `${r.powerGain>=0?'+':''}${r.powerGain}`, r.powerGain>=0?'result-positive':'result-negative')}</div><div class="grid grid3" style="margin-top:14px">${resultCard('現在ファン', r.fans.toLocaleString())}${resultCard('現在資金', money(r.cash))}${resultCard('現在ランク', `${r.tier} / 総合力 ${r.power}`)}</div><div class="stack" style="margin-top:20px"><button onclick="backGame()">ゲームに戻る</button></div></div></div>`;
}
function render(){
  // body直下に残った古いモーダルを毎回消す
  document.querySelectorAll('.modal-bg').forEach(el=>el.remove());
  const app=document.getElementById('app'); if(!app) return;
  if(state.screen==='title') app.innerHTML=titleScreen();
  else if(state.screen==='setup') app.innerHTML=setupScreen();
  else if(state.screen==='audition') app.innerHTML=auditionScreen();
  else if(state.screen==='game') app.innerHTML=gameShell();
  else if(state.screen==='result') app.innerHTML=resultScreen();
  if(state.modalMemberId) document.body.insertAdjacentHTML('beforeend', memberModal(state.modalMemberId));
  if(state.pendingEvent) document.body.insertAdjacentHTML('beforeend', eventModal(state.pendingEvent));
}
render();
