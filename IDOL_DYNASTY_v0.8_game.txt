
const $=s=>document.querySelector(s);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[rand(0,a.length-1)];
const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
const money=n=>'¥'+Math.round(n).toLocaleString('ja-JP');
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const SAVE='idol_dynasty_v08_producers_story';

const PORTRAITS=Array.from({length:8},(_,i)=>`assets/char_${i+1}.png`);
const NAMES=['羽音','凛','美月','ひより','玲奈','七海','紗良','莉央'];
const TRAITS=['負けず嫌い','天才肌','努力家','ファンサ職人','表現者','ムードメーカー','研究熱心','SNS強者'];
const COLORS=['#78cef5','#ff9ac9','#a993ff','#ffd16b','#79d8bb','#ff9e8e','#7ea6ff','#e29bff'];
const CONCEPTS=[
 ['王道清楚','正統派。ライブとファンの信頼を積み上げやすい。'],
 ['儚い青春','物語性が強く、女性ファンと作品評価が伸びやすい。'],
 ['かわいい','SNSと特典会に強く、ライト層を獲得しやすい。'],
 ['クール','ブランドとダンス評価に強い。'],
 ['ロック','現場熱量とライブ勢に強い。']
];
const ACTIONS=[
 {id:'lesson',icon:'🎧',name:'集中レッスン',cost:70000,desc:'歌・ダンス・ステージを鍛える',impact:'実力↑ 疲労↑'},
 {id:'sns',icon:'📱',name:'SNS企画',cost:45000,desc:'画像・ショート動画で話題を狙う',impact:'話題↑ ライト層↑'},
 {id:'bond',icon:'🫶',name:'メンバー時間',cost:30000,desc:'対話・撮影・企画で関係性を深める',impact:'絆↑ ストーリー発生率↑'},
 {id:'street',icon:'🎤',name:'対バン遠征',cost:120000,desc:'現場で新規を掴む',impact:'ライブ勢↑ 実戦力↑'},
 {id:'media',icon:'📺',name:'メディア営業',cost:90000,desc:'番組・雑誌・タイアップを狙う',impact:'認知↑ ブランド↑'},
 {id:'rest',icon:'🫧',name:'休養と作戦会議',cost:20000,desc:'疲労を回復し次の戦略を練る',impact:'疲労↓↓ 気分↑'}
];
const VENUES=[
 {id:'club',name:'100人ライブハウス',cap:100,cost:90000,ticket:3000,need:0},
 {id:'hall300',name:'300人ライブハウス',cap:300,cost:190000,ticket:3500,need:15},
 {id:'hall800',name:'800人ホール',cap:800,cost:450000,ticket:4500,need:28},
 {id:'zepp',name:'Zepp級',cap:2000,cost:1050000,ticket:5800,need:42},
 {id:'budokan',name:'武道館級',cap:10000,cost:4200000,ticket:7800,need:66}
];
const VIBES=['王道キラキラ','青春エモ','甘かわ','疾走ロック','都会的クール','儚いバラード'];
const TARGETS=['ライト層','現場勢','女性ファン','コアファン','海外ファン'];
const STAFF=[
 {id:'trainer',name:'育成ディレクター',cost:220000,effect:'レッスン成長量UP'},
 {id:'sns',name:'SNSプロデューサー',cost:200000,effect:'SNSバズ率UP'},
 {id:'manager',name:'現場マネージャー',cost:180000,effect:'疲労を軽減'},
 {id:'creative',name:'クリエイティブD',cost:260000,effect:'楽曲評価UP'}
];
const RIVAL_NAMES=['LUMINA','MELTY HOUR','NOIR PARADE','CANDY LOOP','ASTER','NEON RIOT'];
const FAN_LINES=['推し決まった','この5人の空気感すき','次の現場行きたい','センター良すぎる','新曲刺さった','まだ古参名乗れる？','衣装かわいい','ライブ動画で気になった'];
const STORY_TYPES=['rivalry','bond','ambition','confidence'];

let draft={agency:'LUMIERE PRODUCTION',group:'ASTERIA',concept:0};
let state=freshState();
let selectedCandidates=new Set();

function freshMember(i,gen=1){
 const base=rand(45,72);
 return {
  id:`m${Date.now()}_${i}_${rand(100,999)}`,name:NAMES[i%NAMES.length],portrait:PORTRAITS[i%PORTRAITS.length],
  color:COLORS[i%COLORS.length],trait:TRAITS[i%TRAITS.length],gen,age:rand(16,22),
  stats:{vocal:clamp(base+rand(-12,10),25,90),dance:clamp(base+rand(-12,10),25,90),visual:clamp(base+rand(-8,16),25,95),talk:clamp(base+rand(-15,12),20,90),sns:clamp(base+rand(-15,15),20,95),stage:clamp(base+rand(-12,12),25,90)},
  star:rand(45,92),potential:rand(55,98),mood:rand(68,88),fatigue:rand(5,18),popularity:rand(40,130),
  ambition:rand(35,88),confidence:rand(45,82),promise:null,storyFlags:[],status:'active'
 }
}
function freshState(){
 return {
  screen:'title',tab:'board',agency:'LUMIERE PRODUCTION',group:'ASTERIA',concept:0,
  year:1,month:1,week:1,cash:2500000,fans:0,buzz:8,brand:8,trust:70,livePower:8,
  members:[],centerId:null,relationships:{},rivalry:{},songs:[],activeSongId:null,
  rivals:RIVAL_NAMES.map((n,i)=>({name:n,power:rand(18,48)+i*2,fans:rand(1200,9000),growth:rand(-2,10)})),
  fandom:{light:55,core:10,female:15,live:15,overseas:5},staff:[],selectedAction:null,
  mission:{type:'live',title:'初ワンマンを満員にする',target:100,current:0,deadline:4},
  feed:[],history:[],pendingStory:null,decisionMemory:[],selectedVenue:'club',
  studio:{title:'',vibe:0,target:0,budget:400000,centerId:null},livePlan:{venue:'club',setlist:[]},
  liveRun:null,lastResult:null
 }
}
function members(){return state.members.filter(m=>m.status==='active')}
function member(id){return state.members.find(m=>m.id===id)}
function center(){return member(state.centerId)||members()[0]}
function hasStaff(id){return state.staff.includes(id)}
function teamStat(k){return Math.round(avg(members().map(m=>m.stats[k])))}
function power(){
 const m=members(); if(!m.length)return 0;
 return Math.round((teamStat('vocal')+teamStat('dance')+teamStat('stage')+teamStat('visual'))/8 + Math.log10(state.fans+10)*8 + state.brand*.18 + state.livePower*.22);
}
function tier(){const p=power();return p>=80?'S':p>=65?'A':p>=50?'B':p>=35?'C':p>=20?'D':'E'}
function addFeed(icon,title,text){state.feed.unshift({icon,title,text,time:`${state.year}年 ${state.month}月 W${state.week}`});state.feed=state.feed.slice(0,24)}
function toast(t){document.querySelectorAll('.toast').forEach(e=>e.remove());document.body.insertAdjacentHTML('beforeend',`<div class="toast">${esc(t)}</div>`);setTimeout(()=>document.querySelector('.toast')?.remove(),1700)}
function save(){localStorage.setItem(SAVE,JSON.stringify(state));toast('保存しました 💾')}
function load(){const r=localStorage.getItem(SAVE);if(!r)return;try{state=JSON.parse(r);state.screen='game';state.pendingStory=null;render()}catch(e){}}
function reset(){if(confirm('タイトルへ戻りますか？')){state=freshState();selectedCandidates.clear();render()}}
function startNew(){state=freshState();draft={agency:'LUMIERE PRODUCTION',group:'ASTERIA',concept:0};state.screen='setup';render()}
function setDraft(k,v){draft[k]=v}
function chooseConcept(i){draft.concept=i;render()}
function goAudition(){
 state.agency=draft.agency.trim()||'LUMIERE PRODUCTION';state.group=draft.group.trim()||'ASTERIA';state.concept=draft.concept;
 state.members=Array.from({length:8},(_,i)=>freshMember(i));
 selectedCandidates.clear();state.screen='audition';render()
}
function toggleCandidate(id){selectedCandidates.has(id)?selectedCandidates.delete(id):selectedCandidates.size<5&&selectedCandidates.add(id);render()}
function finishAudition(){
 if(selectedCandidates.size!==5){toast('5人選んでください');return}
 state.members=state.members.filter(m=>selectedCandidates.has(m.id));state.centerId=state.members.slice().sort((a,b)=>b.star-a.star)[0].id;
 initRelations();state.mission={type:'live',title:'初ワンマンを満員にする',target:100,current:0,deadline:4};
 addFeed('🎤','プロジェクト始動',`${state.group}、5人で活動開始。最初の目標は100人ワンマン。`);
 state.screen='game';render()
}
function initRelations(){
 state.relationships={};state.rivalry={};
 members().forEach(a=>{state.relationships[a.id]={};state.rivalry[a.id]={};members().forEach(b=>{if(a.id!==b.id){state.relationships[a.id][b.id]=rand(35,70);state.rivalry[a.id][b.id]=rand(10,48)}})})
}
function relationship(a,b){return state.relationships[a]?.[b]||0}
function rivalry(a,b){return state.rivalry[a]?.[b]||0}
function setTab(t){state.tab=t;render()}
function selectAction(id){state.selectedAction=id;render()}
function monthlyFixed(){return state.staff.reduce((s,id)=>s+(STAFF.find(x=>x.id===id)?.cost||0),0)}

function executeWeek(){
 const a=ACTIONS.find(x=>x.id===state.selectedAction);if(!a)return;
 if(state.cash<a.cost){toast('資金が足りません');return}
 const before={fans:state.fans,cash:state.cash,power:power(),buzz:state.buzz};
 state.cash-=a.cost;let headline='';
 if(a.id==='lesson'){
  members().forEach(m=>{const b=hasStaff('trainer')?rand(3,7):rand(2,5);m.stats.vocal=clamp(m.stats.vocal+rand(0,b),0,100);m.stats.dance=clamp(m.stats.dance+rand(0,b),0,100);m.stats.stage=clamp(m.stats.stage+rand(0,b),0,100);m.fatigue=clamp(m.fatigue+rand(6,11),0,100)});
  headline='レッスンの密度を上げた。振りの揃い方が変わってきた。'
 }
 if(a.id==='sns'){
  const m=pick(members()),mult=hasStaff('sns')?1.45:1;const gain=Math.round((rand(70,260)+m.stats.sns*3)*mult);
  state.fans+=gain;state.buzz=clamp(state.buzz+rand(3,8),0,100);m.popularity+=Math.round(gain*.42);m.fatigue=clamp(m.fatigue+5,0,100);
  headline=`${m.name}の投稿が伸びた。「${pick(FAN_LINES)}」という反応が増えている。`
 }
 if(a.id==='bond'){
  const [a1,a2]=pickPair();const add=rand(7,15);state.relationships[a1.id][a2.id]=clamp(relationship(a1.id,a2.id)+add,0,100);state.relationships[a2.id][a1.id]=state.relationships[a1.id][a2.id];
  a1.mood=clamp(a1.mood+4,0,100);a2.mood=clamp(a2.mood+4,0,100);headline=`${a1.name}と${a2.name}の距離が縮まった。ファンも2人の空気感に気づき始めた。`
 }
 if(a.id==='street'){
  const gain=rand(90,260)+state.livePower*4;state.fans+=gain;state.livePower=clamp(state.livePower+rand(2,4),0,100);state.fandom.live=clamp(state.fandom.live+2,0,100);
  members().forEach(m=>{m.stats.stage=clamp(m.stats.stage+rand(1,3),0,100);m.fatigue=clamp(m.fatigue+rand(7,11),0,100)});
  headline='対バンで手応え。終演後、初見の客が特典会に並んだ。'
 }
 if(a.id==='media'){
  const hit=Math.random()<(.34+state.brand/180);if(hit){const gain=rand(180,600);state.fans+=gain;state.brand=clamp(state.brand+rand(2,5),0,100);state.cash+=rand(60000,220000);headline='メディア案件が決まった。グループ名を知らなかった層に届き始める。'}else{state.brand++;headline='営業を積んだ。まだ表には出ないが、次につながる話が残った。'}
 }
 if(a.id==='rest'){
  members().forEach(m=>{m.fatigue=clamp(m.fatigue-rand(12,22),0,100);m.mood=clamp(m.mood+rand(4,8),0,100)});headline='休養と作戦会議。メンバーの表情に余裕が戻った。'
 }
 applyWeeklyCondition();
 updateRivals();
 state.selectedAction=null;
 addFeed(a.icon,a.name,headline);
 const res={headline,fanGain:state.fans-before.fans,cashDelta:state.cash-before.cash,powerGain:power()-before.power,buzzGain:state.buzz-before.buzz,face:pick(members()).id};
 state.lastResult=res;
 advanceWeek();
 maybeCreateStory();
 if(state.pendingStory){state.screen='game'} else {state.screen='result'}
 render()
}
function applyWeeklyCondition(){
 members().forEach(m=>{if(!hasStaff('manager'))m.fatigue=clamp(m.fatigue+2,0,100);if(m.fatigue>75)m.mood=clamp(m.mood-rand(3,7),0,100);if(m.mood>80)m.confidence=clamp(m.confidence+1,0,100)});
}
function advanceWeek(){
 state.week++;
 if(state.week>4){
  state.week=1;state.month++;state.cash-=monthlyFixed();
  state.mission.deadline--;
  if(state.month>12){state.month=1;state.year++;awardSeason()}
  if(state.mission.deadline<=0)checkMission()
 }
}
function awardSeason(){
 const top=[...state.rivals,{name:state.group,power:power(),fans:state.fans,self:true}].sort((a,b)=>b.power-a.power)[0];
 addFeed('🏆','IDOL AWARDS',top.self?`${state.group}が年間トップに立った。`:`${top.name}が年間トップ。来年の標的ができた。`)
}
function checkMission(){
 if(state.mission.current>=state.mission.target){
  addFeed('🏆','目標達成',`${state.mission.title}を達成。次のステージへ。`);state.brand=clamp(state.brand+5,0,100);state.trust=clamp(state.trust+5,0,100);
  const next=VENUES.find(v=>v.cap>state.mission.target)||VENUES[VENUES.length-1];
  state.mission={type:'live',title:`${next.name}を満員にする`,target:next.cap,current:0,deadline:6}
 }else{
  addFeed('⚠️','目標未達',`${state.mission.title}は未達。期限を2か月延長した。`);state.trust=clamp(state.trust-3,0,100);state.mission.deadline=2
 }
}
function updateRivals(){
 state.rivals.forEach(r=>{r.growth=rand(-2,8);r.power=clamp(r.power+Math.round(r.growth/4),10,95);r.fans=Math.max(100,r.fans+rand(30,420))});
 if(Math.random()<.22){const r=pick(state.rivals);addFeed('⚔️',`${r.name}が動いた`,pick([`${r.name}が新曲を発表。SNSで比較されている。`,`${r.name}が大型フェス出演を発表。`,`${r.name}のセンターが話題になっている。`]))}
}
function nearestRival(){return [...state.rivals].sort((a,b)=>Math.abs(a.power-power())-Math.abs(b.power-power()))[0]}
function pickPair(){const a=pick(members());let b=pick(members().filter(x=>x.id!==a.id));return[a,b]}

function maybeCreateStory(){
 if(Math.random()>.42||state.pendingStory)return;
 const type=pick(STORY_TYPES),m1=pick(members()),others=members().filter(x=>x.id!==m1.id),m2=pick(others);
 if(type==='ambition'){
  state.pendingStory={type,title:`${m1.name}からの直談判`,text:`「次の曲、センターを本気で狙いたいです」`,people:[m1.id],choices:[
   ['約束する','期待は上がる。守れないと後で効いてくる。'],
   ['実力で勝ち取れ','成長意欲が上がるが、信頼は少し揺れる。'],
   ['今はチーム優先','チームは安定するが、野心は残る。']
  ]}
 }else if(type==='rivalry'){
  state.pendingStory={type,title:`${m1.name}と${m2.name}の火花`,text:`リハーサル後、2人の間に微妙な空気が残った。センター争いが原因らしい。`,people:[m1.id,m2.id],choices:[
   ['競わせる','競争心を成長に変える。'],
   ['2人で話させる','関係改善を狙う。'],
   ['あえて触れない','自然に任せる。']
  ]}
 }else if(type==='bond'){
  state.pendingStory={type,title:`ファンが見つけた関係性`,text:`${m1.name}と${m2.name}のオフショットが「尊い」と話題に。`,people:[m1.id,m2.id],choices:[
   ['ユニット企画にする','関係性をコンテンツ化する。'],
   ['自然体のままにする','信頼と絆を優先する。'],
   ['SNSで連投する','短期バズを狙う。']
  ]}
 }else{
  state.pendingStory={type,title:`${m1.name}の迷い`,text:`「私、このグループでちゃんと必要とされてますか？」`,people:[m1.id],choices:[
   ['役割を言葉で伝える','自信と信頼が上がる。'],
   ['次の現場で証明しよう','ステージ意欲が上がる。'],
   ['少し休ませる','疲労を下げ、気分を戻す。']
  ]}
 }
}
function resolveStory(i){
 const e=state.pendingStory;if(!e)return;const ps=e.people.map(member);
 if(e.type==='ambition'){
  const m=ps[0];if(i===0){m.promise='次曲センター';m.ambition=clamp(m.ambition+8,0,100);m.mood=clamp(m.mood+6,0,100);state.decisionMemory.push(`${m.name}に次曲センターを約束`)}
  if(i===1){m.ambition=clamp(m.ambition+12,0,100);m.confidence=clamp(m.confidence+4,0,100);m.mood=clamp(m.mood-2,0,100)}
  if(i===2){m.ambition=clamp(m.ambition+5,0,100);state.trust=clamp(state.trust+1,0,100)}
 }
 if(e.type==='rivalry'){
  const[a,b]=ps;if(i===0){state.rivalry[a.id][b.id]=clamp(rivalry(a.id,b.id)+15,0,100);state.rivalry[b.id][a.id]=state.rivalry[a.id][b.id];a.stats.stage++;b.stats.stage++}
  if(i===1){state.relationships[a.id][b.id]=clamp(relationship(a.id,b.id)+12,0,100);state.relationships[b.id][a.id]=state.relationships[a.id][b.id];state.rivalry[a.id][b.id]=clamp(rivalry(a.id,b.id)-8,0,100)}
  if(i===2){state.rivalry[a.id][b.id]=clamp(rivalry(a.id,b.id)+5,0,100)}
 }
 if(e.type==='bond'){
  const[a,b]=ps;if(i===0){state.buzz=clamp(state.buzz+6,0,100);state.fans+=rand(80,240);state.relationships[a.id][b.id]=clamp(relationship(a.id,b.id)+5,0,100)}
  if(i===1){state.relationships[a.id][b.id]=clamp(relationship(a.id,b.id)+12,0,100);state.relationships[b.id][a.id]=state.relationships[a.id][b.id]}
  if(i===2){state.buzz=clamp(state.buzz+9,0,100);a.fatigue+=4;b.fatigue+=4}
 }
 if(e.type==='confidence'){
  const m=ps[0];if(i===0){m.confidence=clamp(m.confidence+12,0,100);m.mood=clamp(m.mood+8,0,100)}
  if(i===1){m.stats.stage=clamp(m.stats.stage+4,0,100);m.ambition=clamp(m.ambition+4,0,100)}
  if(i===2){m.fatigue=clamp(m.fatigue-18,0,100);m.mood=clamp(m.mood+5,0,100)}
 }
 addFeed('🎭','プロデューサー判断',`${e.title}。「${e.choices[i][0]}」を選んだ。`);
 state.pendingStory=null;state.screen='result';render()
}

function setCenter(id){
 const old=center(),m=member(id);if(!m)return;
 state.centerId=id;m.mood=clamp(m.mood+4,0,100);m.confidence=clamp(m.confidence+5,0,100);
 if(old&&old.id!==id)old.mood=clamp(old.mood-2,0,100);
 addFeed('👑','センター変更',`${m.name}をセンターに指名。`);
 render()
}
function openMember(id){state.modalMemberId=id;render()}
function closeModal(){state.modalMemberId=null;document.querySelectorAll('.modal-bg').forEach(e=>e.remove())}

function createSong(){
 const s=state.studio,m=member(s.centerId)||center();if(!m){toast('センターを選んでください');return}
 const title=(s.title||`${state.group} NEW SONG`).trim();const cost=Number(s.budget);
 if(state.cash<cost){toast('制作資金が足りません');return}
 state.cash-=cost;
 let quality=Math.round((teamStat('vocal')+teamStat('dance')+m.star)/3 + Math.log10(cost/10000+1)*5 +(hasStaff('creative')?8:0)+rand(-8,8));
 quality=clamp(quality,30,100);
 const viral=clamp(Math.round((m.stats.sns+m.visual+state.buzz)/3+rand(-10,12)),20,100);
 const live=clamp(Math.round((teamStat('stage')+teamStat('dance')+state.livePower)/3+rand(-8,8)),20,100);
 const song={id:'s'+Date.now(),title,vibe:VIBES[s.vibe],target:TARGETS[s.target],centerId:m.id,cost,quality,viral,live,released:false,created:`${state.year}.${state.month}`};
 state.songs.unshift(song);state.activeSongId=song.id;m.popularity+=rand(40,120);m.mood=clamp(m.mood+5,0,100);
 if(m.promise==='次曲センター'){m.promise=null;m.mood=clamp(m.mood+10,0,100);state.trust=clamp(state.trust+3,0,100);addFeed('🤝','約束を守った',`${m.name}とのセンター約束を実現。信頼が深まった。`)}
 addFeed('♫','新曲完成',`${title} / ${song.vibe} / センター ${m.name}`);
 state.studio.title='';render()
}
function releaseSong(id){
 const s=state.songs.find(x=>x.id===id);if(!s||s.released)return;
 s.released=true;const m=member(s.centerId);const gain=Math.round(s.quality*5+s.viral*7+state.buzz*3+rand(50,280));
 state.fans+=gain;state.buzz=clamp(state.buzz+Math.round(s.viral/12),0,100);state.brand=clamp(state.brand+Math.round(s.quality/25),0,100);m.popularity+=Math.round(gain*.28);
 shiftFandom(s.target,4);addFeed('🚀','新曲リリース',`${s.title}を公開。ファン +${gain.toLocaleString()}。`);
 updateRivals();render()
}
function shiftFandom(target,n){
 const map={'ライト層':'light','現場勢':'live','女性ファン':'female','コアファン':'core','海外ファン':'overseas'};const k=map[target];if(k)state.fandom[k]=clamp(state.fandom[k]+n,0,100)
}

function setVenue(id){state.selectedVenue=id;state.livePlan.venue=id;render()}
function toggleSetlist(id){
 const a=state.livePlan.setlist;const i=a.indexOf(id);if(i>=0)a.splice(i,1);else if(a.length<3)a.push(id);render()
}
function startLive(){
 const v=VENUES.find(x=>x.id===state.livePlan.venue);if(!v)return;
 if(power()<v.need){toast(`総合力 ${v.need} 以上推奨`);return}
 if(state.cash<v.cost){toast('開催資金が足りません');return}
 if(!state.livePlan.setlist.length&&state.songs.length){state.livePlan.setlist=[state.songs[0].id]}
 state.cash-=v.cost;
 const demand=Math.round(state.fans*(.18+state.livePower/180)+state.buzz*5+rand(20,90));
 const attendance=Math.min(v.cap,Math.max(20,demand));
 state.liveRun={venue:v,attendance,phase:0,heat:clamp(Math.round(45+teamStat('stage')/4+state.buzz/6),20,80),score:0,log:[]};
 state.screen='liveRun';render()
}
const LIVE_PHASES=[
 {title:'OPENING',text:'最初の30秒。会場の空気を掴め。',choices:[['センターを抜く','star'],['全員ダンスで圧倒','dance'],['煽りから入る','stage']]},
 {title:'MIDDLE / MC',text:'中盤。熱量をもう一段上げたい。',choices:[['エモいMC','talk'],['ユニット演出','bond'],['新曲初披露','song']]},
 {title:'LAST SONG',text:'最後の1曲。今日を伝説にする。',choices:[['銀テープ演出','brand'],['客席大合唱','trust'],['センター覚醒演出','star']]}
];
function liveChoice(i){
 const run=state.liveRun,p=LIVE_PHASES[run.phase],c=p.choices[i],m=center();let value=0;
 if(c[1]==='star')value=m.star;
 if(c[1]==='dance')value=teamStat('dance');
 if(c[1]==='stage')value=teamStat('stage');
 if(c[1]==='talk')value=teamStat('talk');
 if(c[1]==='bond')value=Math.round(avg(members().flatMap(a=>members().filter(b=>b.id!==a.id).map(b=>relationship(a.id,b.id)))));
 if(c[1]==='song'){const s=state.songs.find(x=>x.id===state.activeSongId)||state.songs[0];value=s?.live||45}
 if(c[1]==='brand')value=state.brand;
 if(c[1]==='trust')value=state.trust;
 const delta=Math.round((value-45)/5)+rand(3,11);run.heat=clamp(run.heat+delta,0,100);run.score+=delta;run.log.push(`${p.title}: ${c[0]} → 熱量 ${delta>=0?'+':''}${delta}`);
 run.phase++;
 if(run.phase>=LIVE_PHASES.length)finishLive();else render()
}
function finishLive(){
 const r=state.liveRun,v=r.venue;const satisfaction=clamp(Math.round(r.heat+teamStat('stage')/6+rand(-5,8)),35,100);
 const gain=Math.round(r.attendance*(satisfaction/100)*(.65+state.trust/180));
 const revenue=r.attendance*v.ticket;state.cash+=revenue;state.fans+=gain;state.livePower=clamp(state.livePower+Math.round(satisfaction/18),0,100);state.brand=clamp(state.brand+Math.round(satisfaction/30),0,100);
 state.mission.current=Math.max(state.mission.current,r.attendance);
 members().forEach(m=>{m.fatigue=clamp(m.fatigue+rand(10,18),0,100);m.popularity+=Math.round(gain/5)});
 state.lastLiveResult={attendance:r.attendance,cap:v.cap,satisfaction,gain,revenue,heat:r.heat,venue:v.name};
 state.history.unshift(`${state.year}.${state.month} ${v.name} ${r.attendance}/${v.cap}`);
 addFeed('🔥','LIVE RESULT',`${v.name} ${r.attendance}/${v.cap}人。満足度 ${satisfaction}。新規ファン +${gain}。`);
 state.screen='liveResult';state.liveRun=null;render()
}
function backFromLive(){state.screen='game';state.tab='board';render()}

function hire(id){
 const st=STAFF.find(x=>x.id===id);if(!st||hasStaff(id))return;state.staff.push(id);addFeed('🏢','スタッフ加入',`${st.name}を採用。`);render()
}
function fireStaff(id){state.staff=state.staff.filter(x=>x!==id);render()}

function titleScreen(){
 return `<div class="splash"><div class="splash-inner"><div class="eyebrow">IDOL MANAGEMENT SIMULATOR</div><div class="splash-logo">IDOL DYNASTY</div><div style="font-weight:950;font-size:18px">v0.8 PRODUCER'S STORY</div><p class="splash-sub">5人を選び、曲を作り、センターを決め、ライブを演出する。<br>友情も嫉妬も、ライバルも、あなたの決断から始まる。</p><div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap"><button onclick="startNew()">新しい物語を始める</button>${localStorage.getItem(SAVE)?'<button class="secondary" onclick="load()">続きから</button>':''}</div></div></div>`
}
function setupScreen(){
 return `<div class="setup-wrap"><div class="setup-grid"><div class="hero-card"><div class="eyebrow">STEP 1 / AGENCY</div><h1>あなたの事務所をつくる</h1><div class="form-row"><label>事務所名</label><input value="${esc(draft.agency)}" oninput="setDraft('agency',this.value)"></div><div class="form-row"><label>デビューグループ名</label><input value="${esc(draft.group)}" oninput="setDraft('group',this.value)"></div><div class="form-row"><label>グループコンセプト</label><div class="option-grid">${CONCEPTS.map((c,i)=>`<div class="option ${draft.concept===i?'active':''}" onclick="chooseConcept(${i})"><strong>${c[0]}</strong><div style="font-size:10px;color:var(--muted);margin-top:4px">${c[1]}</div></div>`).join('')}</div></div><button style="width:100%" onclick="goAudition()">オーディションへ →</button></div><div class="card"><div class="eyebrow">VISION</div><h2>${esc(draft.group)}</h2><p style="color:var(--muted);line-height:1.7">ここから先、選んだ5人の関係性・センター争い・作品・ライブ実績がすべて履歴として残ります。</p><div style="padding:16px;border-radius:18px;background:linear-gradient(135deg,#eafaff,#fff1f8);margin-top:10px"><strong>${CONCEPTS[draft.concept][0]}</strong><p style="font-size:11px;color:var(--muted);margin:5px 0 0">${CONCEPTS[draft.concept][1]}</p></div></div></div></div>`
}
function auditionScreen(){
 return `<div class="app"><div class="section-head"><div><div class="eyebrow">STEP 2 / AUDITION</div><h2>5人を選ぶ</h2></div><div><strong>${selectedCandidates.size}/5</strong></div></div><div class="member-grid">${state.members.map(m=>`<div class="card member-card" onclick="toggleCandidate('${m.id}')" style="${selectedCandidates.has(m.id)?'box-shadow:0 0 0 3px rgba(92,203,247,.28),var(--shadow)':''}"><img src="${m.portrait}"><div class="member-body"><div class="member-name"><strong>${m.name}</strong><span class="tag">${m.trait}</span></div><div class="subline">${m.age}歳 / スター性 ${m.star} / ポテンシャル ${m.potential}</div>${miniStat('歌',m.stats.vocal)}${miniStat('ダンス',m.stats.dance)}${miniStat('SNS',m.stats.sns)}</div></div>`).join('')}</div><div style="position:sticky;bottom:78px;margin-top:10px"><button style="width:100%" onclick="finishAudition()" ${selectedCandidates.size!==5?'disabled':''}>この5人でデビューする</button></div></div>`
}
function miniStat(n,v,cls=''){return `<div class="mini-stat"><span>${n}</span><div class="bar ${cls}"><i style="width:${v}%"></i></div><strong>${v}</strong></div>`}
function shell(content){
 return `<div class="app">${topbar()}${content}${nav()}</div>${state.modalMemberId?memberModal(state.modalMemberId):''}${state.pendingStory?storyModal(state.pendingStory):''}`
}
function topbar(){
 return `<div class="topbar"><div class="brandline"><div class="brandmark">✦</div><div class="brandcopy"><div class="eyebrow">${state.agency} / ${state.year}年 ${state.month}月 W${state.week}</div><h1>${state.group}</h1></div></div><div class="top-actions"><button class="secondary icon-btn" onclick="save()">💾</button><button class="secondary icon-btn" onclick="reset()">⌂</button></div></div><div class="statusbar"><div class="status"><span>POWER / TIER</span><strong>${power()} / ${tier()}</strong></div><div class="status"><span>FANS</span><strong>${state.fans.toLocaleString()}</strong></div><div class="status"><span>CASH</span><strong>${money(state.cash)}</strong></div><div class="status"><span>BUZZ</span><strong>${state.buzz}</strong></div></div>`
}
function nav(){
 const a=[['board','⌂','司令室'],['members','♡','メンバー'],['studio','♫','楽曲'],['live','★','ライブ'],['world','⚔','世界']];
 return `<div class="nav">${a.map(x=>`<button class="${state.tab===x[0]?'active':''}" onclick="setTab('${x[0]}')"><span class="ni">${x[1]}</span><span>${x[2]}</span></button>`).join('')}</div>`
}
function gameShell(){
 let c=state.tab==='board'?boardTab():state.tab==='members'?membersTab():state.tab==='studio'?studioTab():state.tab==='live'?liveTab():worldTab();
 return shell(c)
}
function boardTab(){
 const prog=clamp(Math.round(state.mission.current/state.mission.target*100),0,100),r=nearestRival();
 return `<div class="board-grid"><div class="card mission"><div class="eyebrow">NEXT MILESTONE</div><div class="mission-row"><div class="mission-icon">🎯</div><div><h2>${state.mission.title}</h2><div style="font-size:11px;color:var(--muted)">この目標が、今のグループの物語を前に進める。</div></div></div><div class="progress"><div style="width:${prog}%"></div></div><div class="deadline"><span>${state.mission.current.toLocaleString()} / ${state.mission.target.toLocaleString()}</span><span>残り ${state.mission.deadline}か月</span></div></div><div class="card next-decision"><div class="decision-title"><div><div class="eyebrow">THIS WEEK</div><h2>今週、何を仕掛ける？</h2></div><span style="font-size:23px">🎛️</span></div><div class="action-list">${ACTIONS.map(a=>`<div class="action ${state.selectedAction===a.id?'active':''}" onclick="selectAction('${a.id}')"><div class="action-head"><span class="action-icon">${a.icon}</span><strong>${a.name}</strong></div><div class="mini">${a.desc}</div><div class="impact">${a.impact}</div></div>`).join('')}</div><div class="commit-row"><div><strong>${state.selectedAction?ACTIONS.find(a=>a.id===state.selectedAction).name:'行動を選択'}</strong><div style="font-size:9px;color:var(--muted)">選択が、数週間後のドラマに残ります。</div></div><button onclick="executeWeek()" ${!state.selectedAction?'disabled':''}>決断する →</button></div></div></div>
 <div class="pulse-grid"><div class="card pulse-card"><div class="section-head" style="margin-top:0"><h3>今の5人</h3><button class="ghost" onclick="setTab('members')">詳しく</button></div><div class="idol-strip">${members().map(m=>`<div class="idol-chip ${m.id===state.centerId?'center':''}" onclick="openMember('${m.id}')"><img src="${m.portrait}">${m.id===state.centerId?'<span class="crown">CENTER</span>':''}<div class="shade">${m.name}</div></div>`).join('')}</div>${producerMemo()}</div><div class="card pulse-card"><div class="section-head" style="margin-top:0"><h3>今、業界で起きていること</h3></div>${state.feed.slice(0,4).map(f=>`<div class="feed-item"><div class="feed-icon">${f.icon}</div><div><strong>${esc(f.title)}</strong><p>${esc(f.text)}</p></div></div>`).join('')||'<p style="color:var(--muted);font-size:11px">デビューしたばかり。最初の一手を決めよう。</p>'}<div class="alert"><div class="ico">⚔️</div><div><strong>${r.name}まで Power ${r.power-power()>=0?`あと ${r.power-power()}`:`${Math.abs(r.power-power())} リード`}</strong><small>${r.name} ${r.fans.toLocaleString()} fans / growth ${r.growth>=0?'+':''}${r.growth}</small></div><button class="secondary" onclick="setTab('world')">見る</button></div></div></div>`
}
function producerMemo(){
 const tired=[...members()].sort((a,b)=>b.fatigue-a.fatigue)[0],amb=[...members()].sort((a,b)=>b.ambition-a.ambition)[0];
 if(tired?.fatigue>=72)return `<div class="alert"><div class="ico">🫧</div><div><strong>${tired.name}の疲労が高い</strong><small>疲労 ${tired.fatigue}。このまま攻めるとストーリーが悪化する可能性。</small></div></div>`;
 if(amb?.ambition>=78)return `<div class="alert"><div class="ico">👑</div><div><strong>${amb.name}がセンターを意識している</strong><small>野心 ${amb.ambition}。次の楽曲で動くかもしれない。</small></div></div>`;
 return `<div class="alert"><div class="ico">✨</div><div><strong>チームの空気は良好</strong><small>今は攻めの施策を選びやすい。</small></div></div>`
}
function membersTab(){
 const rels=relationshipCards();
 return `<div class="section-head"><div><div class="eyebrow">CAST & CHEMISTRY</div><h2>推しが生まれる場所</h2></div></div><div class="member-grid">${members().map(m=>memberCard(m)).join('')}</div><div class="section-head"><h2>関係性</h2><span style="font-size:10px;color:var(--muted)">友情・競争はイベントで変化する</span></div><div class="relationships">${rels}</div>`
}
function memberCard(m){
 return `<div class="card member-card" onclick="openMember('${m.id}')"><img src="${m.portrait}"><div class="member-body"><div class="member-name"><strong><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${m.color};margin-right:5px"></span>${m.name}</strong>${m.id===state.centerId?'<span class="tag gold">CENTER</span>':'<span class="tag">'+m.trait+'</span>'}</div><div class="subline">人気 ${m.popularity.toLocaleString()} / 気分 ${m.mood} / 疲労 ${m.fatigue}</div>${miniStat('スター',m.star)}${miniStat('実戦',m.stats.stage)}${miniStat('野心',m.ambition,'rival')}</div></div>`
}
function relationshipCards(){
 let pairs=[];members().forEach((a,i)=>members().slice(i+1).forEach(b=>pairs.push({a,b,bond:relationship(a.id,b.id),rival:rivalry(a.id,b.id)})));
 pairs.sort((x,y)=>Math.max(y.bond,y.rival)-Math.max(x.bond,x.rival));
 return pairs.slice(0,4).map(p=>{const type=p.rival>p.bond*.85&&p.rival>45?'ライバル':p.bond>68?'名コンビ':'同期';const d=type==='ライバル'?`競争心 ${p.rival}。センター争いで化ける可能性。`:type==='名コンビ'?`絆 ${p.bond}。ファンが関係性に気づいている。`:`絆 ${p.bond} / 競争 ${p.rival}`;return `<div class="card rel-card"><div class="rel-type">${type}</div><div class="rel-people"><img src="${p.a.portrait}"><img src="${p.b.portrait}"></div><strong>${p.a.name} × ${p.b.name}</strong><div class="rel-desc">${d}</div></div>`}).join('')
}
function studioTab(){
 const s=state.studio,c=member(s.centerId)||center();
 return `<div class="section-head"><div><div class="eyebrow">CREATIVE STUDIO</div><h2>作品をプロデュースする</h2></div></div><div class="studio-grid"><div class="card studio-controls"><div class="form-row"><label>曲名</label><input value="${esc(s.title)}" oninput="state.studio.title=this.value;updateStudioPreview()"></div><div class="form-row"><label>曲の方向性</label><select onchange="state.studio.vibe=Number(this.value);render()">${VIBES.map((v,i)=>`<option value="${i}" ${s.vibe===i?'selected':''}>${v}</option>`).join('')}</select></div><div class="form-row"><label>狙うファン層</label><select onchange="state.studio.target=Number(this.value);render()">${TARGETS.map((v,i)=>`<option value="${i}" ${s.target===i?'selected':''}>${v}</option>`).join('')}</select></div><div class="form-row"><label>センター</label><select onchange="state.studio.centerId=this.value;render()">${members().map(m=>`<option value="${m.id}" ${(s.centerId||state.centerId)===m.id?'selected':''}>${m.name}</option>`).join('')}</select></div><div class="form-row"><label>制作予算</label><select onchange="state.studio.budget=Number(this.value);render()">${[200000,400000,800000,1500000].map(v=>`<option value="${v}" ${s.budget===v?'selected':''}>${money(v)}</option>`).join('')}</select></div><button style="width:100%" onclick="createSong()">この作品を作る</button></div><div><div class="jacket"><img src="${c?.portrait||PORTRAITS[0]}"><div class="jacket-copy"><div class="eyebrow" style="color:#fff">${state.group}</div><div class="song-title" id="studioTitle">${esc(s.title||'NEW SONG')}</div><div class="song-meta">${VIBES[s.vibe]} / CENTER ${c?.name||''}</div></div></div></div></div><div class="section-head"><h2>作品カタログ</h2></div><div class="song-list">${state.songs.length?state.songs.map(songCard).join(''):'<div class="card" style="grid-column:1/-1;color:var(--muted);font-size:11px">まだ作品がありません。最初の1曲を作ろう。</div>'}</div>`
}
function updateStudioPreview(){const el=$('#studioTitle');if(el)el.textContent=state.studio.title||'NEW SONG'}
function songCard(s){
 const m=member(s.centerId);return `<div class="card song-card"><div class="song-thumb"><img src="${m?.portrait||PORTRAITS[0]}"></div><div><strong>${esc(s.title)}</strong><small>${s.vibe} / CENTER ${m?.name}</small><small>作品 ${s.quality} / バズ ${s.viral} / LIVE ${s.live}</small>${s.released?'<span class="tag" style="display:inline-block;margin-top:6px">RELEASED</span>':`<button style="margin-top:6px;padding:6px 9px;font-size:9px" onclick="releaseSong('${s.id}')">リリース</button>`}</div></div>`
}
function liveTab(){
 const v=VENUES.find(x=>x.id===state.livePlan.venue),ordered=[...members()].sort((a,b)=>(a.id===state.centerId?-1:b.id===state.centerId?1:b.popularity-a.popularity));
 return `<div class="section-head"><div><div class="eyebrow">LIVE DIRECTOR</div><h2>本番を演出する</h2></div></div><div class="live-grid"><div class="card"><div class="venue-list">${VENUES.map(x=>`<div class="venue ${state.livePlan.venue===x.id?'active':''}" onclick="setVenue('${x.id}')"><strong>${x.name}</strong><small>${x.cap.toLocaleString()}人 / 開催費 ${money(x.cost)} / 推奨 Power ${x.need}</small></div>`).join('')}</div><div class="section-head"><h2 style="font-size:14px">SETLIST</h2><span style="font-size:9px;color:var(--muted)">最大3曲</span></div>${state.songs.length?state.songs.map(s=>`<div class="venue ${state.livePlan.setlist.includes(s.id)?'active':''}" onclick="toggleSetlist('${s.id}')"><strong>${esc(s.title)}</strong><small>${s.vibe} / LIVE ${s.live}</small></div>`).join(''):'<div style="font-size:10px;color:var(--muted)">楽曲を作るとセットリストを組めます。</div>'}<button style="width:100%;margin-top:10px" onclick="startLive()">LIVE START →</button></div><div class="poster"><div class="poster-copy"><div class="eyebrow" style="color:#fff">IDOL DYNASTY LIVE</div><h2>${esc(state.group)}</h2><p>${v.name}<br>${state.year}.${state.month} / PRODUCED BY YOU</p></div><div class="poster-people">${ordered.map(m=>`<img class="${m.id===state.centerId?'center-person':''}" src="${m.portrait}">`).join('')}</div></div></div>`
}
function worldTab(){
 const rows=[...state.rivals,{name:state.group,power:power(),fans:state.fans,growth:0,self:true}].sort((a,b)=>b.power-a.power);
 return `<div class="section-head"><div><div class="eyebrow">IDOL WORLD</div><h2>あなたのグループは、世界の中にいる</h2></div><button class="secondary" onclick="openOffice()">事務所</button></div><div class="world-grid"><div class="card"><h3>勢力図</h3>${rows.map((r,i)=>`<div class="rank-row ${r.self?'self':''}"><strong>#${i+1}</strong><strong>${r.self?'★ ':''}${r.name}</strong><span>P ${r.power}</span><span>${r.fans.toLocaleString()}</span></div>`).join('')}</div><div class="card"><h3>ファンダム生態系</h3><div class="fan-grid">${fanType('ライト層',state.fandom.light,'入口。SNSとメディアで増える')}${fanType('コアファン',state.fandom.core,'長期支持。作品と信頼で増える')}${fanType('女性ファン',state.fandom.female,'世界観と関係性に反応')}${fanType('現場勢',state.fandom.live,'ライブ熱量の核')}${fanType('海外ファン',state.fandom.overseas,'SNSと作品性で伸びる')}</div><div class="section-head"><h2 style="font-size:14px">最近の歴史</h2></div>${state.history.slice(0,5).map(x=>`<div class="feed-item"><div class="feed-icon">📖</div><div><strong>${esc(x)}</strong></div></div>`).join('')||'<div style="font-size:10px;color:var(--muted)">伝説はまだ始まったばかり。</div>'}</div></div>`
}
function fanType(n,v,d){return `<div class="fan-type"><strong>${n}</strong><span>${v}</span><small>${d}</small></div>`}
function openOffice(){state.tab='office';render()}
function officeTab(){
 return `<div class="section-head"><div><div class="eyebrow">AGENCY</div><h2>事務所を強くする</h2></div></div><div class="office-grid"><div class="card"><h3>スタッフ</h3><div class="staff-grid">${STAFF.map(s=>`<div class="staff"><strong>${s.name}</strong><small>${s.effect}<br>月給 ${money(s.cost)}</small>${hasStaff(s.id)?`<button class="secondary" onclick="fireStaff('${s.id}')">契約中</button>`:`<button onclick="hire('${s.id}')">採用</button>`}</div>`).join('')}</div></div><div class="card"><h3>経営状況</h3>${bigLine('現金',money(state.cash))}${bigLine('月固定費',money(monthlyFixed()))}${bigLine('ブランド',state.brand)}${bigLine('ファン信頼',state.trust)}<p style="font-size:10px;color:var(--muted);line-height:1.6;margin-top:12px">スタッフは強いが、固定費も増える。売れる前に抱えすぎると資金が尽きる。</p></div></div>`
}
function bigLine(n,v){return `<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #e8f2f6"><span style="font-size:11px;color:var(--muted)">${n}</span><strong>${v}</strong></div>`}

function memberModal(id){
 const m=member(id);if(!m)return '';const best=members().filter(x=>x.id!==m.id).sort((a,b)=>relationship(m.id,b.id)-relationship(m.id,a.id))[0];
 return `<div class="modal-bg" onclick="if(event.target===this)closeModal()"><div class="modal"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><div class="eyebrow">IDOL PROFILE</div><button class="ghost" onclick="closeModal()">✕</button></div><div class="profile-head"><img src="${m.portrait}"><div><h2><span style="color:${m.color}">●</span> ${m.name}</h2><div style="font-size:11px;color:var(--muted)">${m.age}歳 / ${m.trait} / ${m.gen}期生</div><div class="traits"><span class="tag">スター ${m.star}</span><span class="tag">野心 ${m.ambition}</span><span class="tag">自信 ${m.confidence}</span></div><div class="quote">「${profileQuote(m)}」</div>${m.id!==state.centerId?`<button style="margin-top:9px" onclick="setCenter('${m.id}');closeModal()">センターに指名</button>`:'<span class="tag gold" style="display:inline-block;margin-top:9px">CURRENT CENTER</span>'}</div></div><div class="section-head"><h2 style="font-size:15px">能力</h2></div>${miniStat('歌',m.stats.vocal)}${miniStat('ダンス',m.stats.dance)}${miniStat('ビジュアル',m.stats.visual)}${miniStat('トーク',m.stats.talk)}${miniStat('SNS',m.stats.sns)}${miniStat('ステージ',m.stats.stage)}<div class="section-head"><h2 style="font-size:15px">今の状態</h2></div>${bigLine('個人人気',m.popularity.toLocaleString())}${bigLine('気分',m.mood)}${bigLine('疲労',m.fatigue)}${bigLine('一番近いメンバー',best?`${best.name} / 絆 ${relationship(m.id,best.id)}`:'-')}</div></div>`
}
function profileQuote(m){
 if(m.promise)return '約束、忘れてないですよね。';
 if(m.fatigue>75)return 'ちょっとだけ、休みたいかも。';
 if(m.ambition>78)return 'もっと前に出たい。私ならできると思う。';
 if(m.confidence<50)return '私にしかできないこと、見つけたいです。';
 return pick(['この5人で大きいステージに行きたいです。','次のライブ、絶対もっと良くできます。','ファンの顔、ちゃんと覚えてます。','まだここからです。'])
}
function storyModal(e){
 return `<div class="modal-bg"><div class="modal story-event"><div class="eyebrow">STORY EVENT</div><div class="faces">${e.people.map(id=>`<img src="${member(id).portrait}">`).join('')}</div><h2>${esc(e.title)}</h2><p style="color:var(--muted);font-size:12px;line-height:1.7">${esc(e.text)}</p><div class="choice-list">${e.choices.map((c,i)=>`<button class="choice-btn" onclick="resolveStory(${i})"><strong>${c[0]}</strong><small>${c[1]}</small></button>`).join('')}</div></div></div>`
}
function resultScreen(){
 const r=state.lastResult,m=member(r.face)||center();
 return `<div class="result"><div class="eyebrow">WEEK RESULT</div><div style="font-size:42px;margin-top:8px">${pick(['✨','📈','🎤','🩵'])}</div><h1>${esc(r.headline)}</h1><div class="result-stats"><div class="result-stat"><span>FANS</span><strong class="${r.fanGain>=0?'up':'down'}">${r.fanGain>=0?'+':''}${r.fanGain}</strong></div><div class="result-stat"><span>POWER</span><strong class="${r.powerGain>=0?'up':'down'}">${r.powerGain>=0?'+':''}${r.powerGain}</strong></div><div class="result-stat"><span>CASH</span><strong class="${r.cashDelta>=0?'up':'down'}">${r.cashDelta>=0?'+':''}${money(r.cashDelta)}</strong></div><div class="result-stat"><span>BUZZ</span><strong>${state.buzz}</strong></div></div><div class="card" style="display:grid;grid-template-columns:85px 1fr;gap:12px;text-align:left;margin-top:10px;align-items:center"><img src="${m.portrait}" style="width:85px;height:105px;object-fit:cover;object-position:center top;border-radius:16px"><div><div class="eyebrow">THIS WEEK'S FACE</div><strong style="font-size:17px">${m.name}</strong><p style="font-size:11px;color:var(--muted);margin:6px 0">「${profileQuote(m)}」</p><div style="font-size:10px">SNS: ${pick(FAN_LINES)} / ${pick(FAN_LINES)}</div></div></div><button style="width:100%;margin-top:10px" onclick="state.screen='game';render()">次の週へ →</button></div>`
}
function liveRunScreen(){
 const r=state.liveRun,p=LIVE_PHASES[r.phase],ordered=[...members()].sort((a,b)=>(a.id===state.centerId?-1:b.id===state.centerId?1:b.popularity-a.popularity));
 return `<div class="live-stage"><div class="stage-top"><div class="eyebrow">LIVE DIRECTOR MODE</div><h1>${p.title}</h1><p style="color:var(--muted);font-size:12px">${p.text}</p></div><div class="heat-wrap"><div class="heat-label"><span>AUDIENCE HEAT</span><strong>${r.heat}</strong></div><div class="heat"><div style="width:${r.heat}%"></div></div></div><div class="stage-visual"><div class="stage-lights"></div><div class="stage-people">${ordered.map(m=>`<img class="${m.id===state.centerId?'center-person':''}" src="${m.portrait}">`).join('')}</div><div class="crowd"></div></div><div class="live-choice">${p.choices.map((c,i)=>`<button onclick="liveChoice(${i})">${c[0]}</button>`).join('')}</div></div>`
}
function liveResultScreen(){
 const r=state.lastLiveResult;
 return `<div class="result"><div class="eyebrow">LIVE RESULT</div><div style="font-size:50px;margin-top:7px">🔥</div><h1>${r.venue}</h1><p style="color:var(--muted)">今日のライブは、グループの歴史に残った。</p><div class="result-stats"><div class="result-stat"><span>ATTENDANCE</span><strong>${r.attendance}/${r.cap}</strong></div><div class="result-stat"><span>SATISFACTION</span><strong>${r.satisfaction}</strong></div><div class="result-stat"><span>NEW FANS</span><strong class="up">+${r.gain}</strong></div><div class="result-stat"><span>REVENUE</span><strong>${money(r.revenue)}</strong></div></div><div class="card" style="margin-top:10px;text-align:left"><strong>ファンの反応</strong><p style="font-size:11px;color:var(--muted);line-height:1.7">🩵「${pick(FAN_LINES)}」<br>💗「${pick(FAN_LINES)}」<br>💜「${pick(FAN_LINES)}」</p></div><button style="width:100%;margin-top:10px" onclick="backFromLive()">プロデューサー司令室へ</button></div>`
}

function render(){
 document.querySelectorAll('.modal-bg,.toast').forEach(e=>e.remove());
 const app=$('#app');if(!app)return;
 if(state.screen==='title')app.innerHTML=titleScreen();
 else if(state.screen==='setup')app.innerHTML=setupScreen();
 else if(state.screen==='audition')app.innerHTML=auditionScreen();
 else if(state.screen==='result')app.innerHTML=`<div class="app">${topbar()}${resultScreen()}${nav()}</div>`;
 else if(state.screen==='liveRun')app.innerHTML=`<div class="app">${topbar()}${liveRunScreen()}</div>`;
 else if(state.screen==='liveResult')app.innerHTML=`<div class="app">${topbar()}${liveResultScreen()}${nav()}</div>`;
 else {
  if(state.tab==='office')app.innerHTML=shell(officeTab());
  else app.innerHTML=gameShell();
 }
 if(state.modalMemberId)document.body.insertAdjacentHTML('beforeend',memberModal(state.modalMemberId));
 if(state.pendingStory&&state.screen!=='liveRun')document.body.insertAdjacentHTML('beforeend',storyModal(state.pendingStory))
}
render();
