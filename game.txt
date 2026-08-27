
const $=s=>document.querySelector(s);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[rand(0,a.length-1)];
const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;
const money=n=>'¥'+Math.round(n).toLocaleString('ja-JP');
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const SAVE='idol_dynasty_v0121_25d_fix';

const CANDIDATE_IMAGES=Array.from({length:13},(_,i)=>`https://raw.githubusercontent.com/ryu8maru-lang/IDOL-GAME/main/assets/%20%20%20%20candidates/candidate_${String(i+1).padStart(2,'0')}.png`);
const VISUAL_TYPES=['王道清楚','クールビューティー','元気ポップ','儚い透明感','ロックエース','お姉さん系','妹系ふわふわ','ダンス特化','モデル系','あざとかわいい'];
const APPEAL_LINES=['絶対センターに立ちたいです！','歌なら誰にも負けません','ステージで一番輝きたいです','ファンの心を掴みたいです','ダンスで会場を沸かせます','私にしかない色を見つけたいです','この事務所で夢を叶えたいです'];
const COSTUME_THEMES=[
 {id:'sky_princess',name:'Sky Princess',desc:'水色×白。王道・きらめき・清楚',bonus:'安定したファン獲得'},
 {id:'pure_white',name:'Pure White',desc:'白×銀。透明感・神秘・上品',bonus:'ブランド評価に強い'},
 {id:'sweet_pop',name:'Sweet Pop',desc:'ピンク系。かわいい・元気',bonus:'SNSとライト層に強い'},
 {id:'midnight_cool',name:'Midnight Cool',desc:'紺×銀。都会的・クール',bonus:'ビジュアルとブランドに強い'},
 {id:'crimson_rock',name:'Crimson Rock',desc:'黒×赤。強気・ロック',bonus:'ライブ熱量に強い'},
 {id:'lavender_dream',name:'Lavender Dream',desc:'紫×白。幻想・物語性',bonus:'コアファンに強い'}
];
const NAMES=['羽音','凛','美月','ひより','玲奈','七海','紗良','莉央','真白','灯','すず','遥','美空','夏帆','凪','千紘'];

const SURNAMES=['白石','一ノ瀬','月城','神谷','小鳥遊','桜庭','水瀬','朝倉','橘','藤宮','天野','黒川','森下','相沢','早川','星野','如月','七瀬','雨宮','南條','柊','西園寺','篠崎','花村','瀬戸','宮本','青木','川島','高梨','北川','成瀬','東雲','葉山','綾瀬','佐倉','浅倉','長谷川','石原','三浦','松永','倉橋','高瀬','望月','柏木','木崎','春日','永瀬','小泉'];
const GIVEN_NAMES=['澪','ひなた','凛々花','レイ','乃愛','結衣','琴音','彩葉','美羽','咲良','杏奈','瑠奈','詩','芽依','柚葉','心春','紬','朱里','茉白','優月','美玲','莉子','雫','陽菜','栞','千夏','藍','桃花','玲','奏','怜奈','美月','凪紗','羽音','灯','すず','七海','紗良','莉央','遥','美空','夏帆','千紘','花音','結月','真帆','雪乃','叶愛','梨央','碧','舞香','里桜','美桜','あかり','こはる','瑞希','麻衣','佳奈','沙耶','りん'];
const HOMETOWNS=['東京都','神奈川県','千葉県','埼玉県','愛知県','大阪府','京都府','兵庫県','福岡県','北海道','宮城県','石川県','長野県','静岡県','広島県','熊本県','沖縄県','新潟県','岡山県','香川県'];
const BACKGROUNDS=[
 '地方のダンススクールで7年間レッスンを続けてきた','歌は未経験だが文化祭のステージをきっかけに応募した','元子役。芸能活動から一度離れ、アイドルとして再挑戦している',
 '高校の軽音部でボーカルを担当していた','SNSの弾き語り動画が少し話題になったことがある','地下アイドルを半年で卒業し、もう一度大きな舞台を目指している',
 'バレエを10年間続けてきた','陸上部出身。体力と負けず嫌いだけは誰にも負けない','人前が苦手だったが、アイドルに救われて応募した',
 '読者モデル経験があり撮影には慣れている','家族に芸能活動を反対されながらオーディションを受けた','姉の影響で幼い頃からライブに通っていた',
 '声優養成所に通っていた','地元のご当地イベントでMC経験がある','何度もオーディションに落ちて今回が5回目の挑戦',
 'ダンス動画を毎日投稿していた','学校では目立たないタイプだったがステージだけは別人になる','ミュージカル経験があり歌と表現に自信がある'
];
const DREAMS=['東京ドームに立つ','自分の歌で誰かを救う','グループの絶対的センターになる','女優としても活躍する','紅白歌合戦に出る','地元で凱旋ライブをする','女性が憧れるアイドルになる','世界ツアーをする','メンバー全員で長く活動する','自分の名前がついた冠番組を持つ'];
const SPECIALTIES=['振付を覚えるのが速い','ハモり','表情管理','即興ダンス','ピアノ','ギター','料理','イラスト','動画編集','モノマネ','英会話','アクロバット','ファンサ','MC','写真撮影'];
const WEAKNESSES=['緊張すると早口になる','朝が弱い','自己評価が低い','負けると顔に出る','歌の高音が苦手','SNS投稿を考えすぎる','人に頼るのが苦手','体力配分が下手','トークで空回りしやすい','完璧主義で抱え込む'];
const SPEECH_STYLES=['丁寧でまっすぐ','明るく距離が近い','少しクール','おっとり','負けず嫌いで強気','人見知り気味','天然','姉御肌','慎重','感情が顔に出やすい'];
const AUDITION_PAST=[
 '中学3年で初めてアイドルオーディションを受け、二次審査で落選。',
 '高校1年の文化祭で初めてセンターを経験。「またステージに立ちたい」と思った。',
 '応募前夜までエントリーフォームを送るか迷っていた。',
 '最終審査経験はあるが、デビューには届かなかった。',
 '友人に背中を押され、締切10分前に応募した。',
 '親との約束は「大学進学も諦めないこと」。',
 '憧れのアイドルの卒業ライブを見て応募を決めた。',
 '歌唱審査で歌詞を飛ばした経験があり、それ以来毎日練習している。',
 '前の活動で悔しい思いをし、「次は途中で逃げない」と決めている。',
 '芸能経験はゼロ。今回が人生初のオーディション。'
];

function makeFullName(i){
 const s=SURNAMES[(i*7+rand(0,SURNAMES.length-1))%SURNAMES.length];
 const g=GIVEN_NAMES[(i*11+rand(0,GIVEN_NAMES.length-1))%GIVEN_NAMES.length];
 return `${s} ${g}`;
}
const TRAITS=['負けず嫌い','天才肌','努力家','ファンサ職人','表現者','ムードメーカー','研究熱心','SNS強者','リーダー型','マイペース','歌姫候補','ダンスエース','不思議ちゃん','王道アイドル','トーク職人','静かな野心家'];
const COLORS=['#78cef5','#ff9ac9','#a993ff','#ffd16b','#79d8bb','#ff9e8e','#7ea6ff','#e29bff','#65d3e6','#f6a6b9','#94cb77','#f2c55e'];
const CONCEPTS=[
 ['王道清楚','正統派。ライブとファンの信頼を積み上げやすい。'],
 ['儚い青春','物語性が強く、女性ファンと作品評価が伸びやすい。'],
 ['かわいい','SNSと特典会に強く、ライト層を獲得しやすい。'],
 ['クール','ブランドとダンス評価に強い。'],
 ['ロック','現場熱量とライブ勢に強い。'],
 ['個性派','メンバーのキャラクターと関係性で伸びる。']
];

const ACTIONS=[
 {id:'lesson',icon:'🎧',name:'集中レッスン',cost:70000,desc:'歌・ダンス・ステージを鍛える',impact:'実力↑ / 疲労↑',gain:'直接収益なし',risk:'疲労 +6〜11'},
 {id:'sns',icon:'📱',name:'SNS企画',cost:45000,desc:'画像・ショート動画で話題を狙う',impact:'話題↑ / 新規ファン↑',gain:'ファン +約100〜500',risk:'費用 ¥45,000'},
 {id:'bond',icon:'🫶',name:'メンバー時間',cost:30000,desc:'対話・撮影・企画で関係性を深める',impact:'絆↑ / 物語発生率↑',gain:'関係性・気分改善',risk:'費用 ¥30,000'},
 {id:'street',icon:'🎤',name:'対バン遠征',cost:120000,desc:'現場で新規を掴む',impact:'現場力↑ / ライブ勢↑',gain:'ファン +約100〜400',risk:'疲労↑ / ¥120,000'},
 {id:'media',icon:'📺',name:'メディア営業',cost:90000,desc:'番組・雑誌・タイアップを狙う',impact:'認知↑ / ブランド↑',gain:'成功時 ¥60,000〜220,000',risk:'不発の可能性あり'},
 {id:'rest',icon:'🫧',name:'休養と作戦会議',cost:20000,desc:'疲労を回復し次の戦略を練る',impact:'疲労↓↓ / 気分↑',gain:'コンディション改善',risk:'成長・露出は小さい'}
];

const VENUES=[
 {id:'club',name:'100人ライブハウス',cap:100,cost:90000,ticket:3000,need:0},
 {id:'hall300',name:'300人ライブハウス',cap:300,cost:190000,ticket:3500,need:15},
 {id:'hall800',name:'800人ホール',cap:800,cost:450000,ticket:4500,need:28},
 {id:'zepp',name:'Zepp級',cap:2000,cost:1050000,ticket:5800,need:42},
 {id:'hall5000',name:'5000人ホール',cap:5000,cost:2400000,ticket:6800,need:55},
 {id:'budokan',name:'武道館級',cap:10000,cost:4200000,ticket:7800,need:66},
 {id:'arena',name:'アリーナ級',cap:15000,cost:6800000,ticket:9000,need:75},
 {id:'dome',name:'ドーム級',cap:50000,cost:24000000,ticket:12000,need:90}
];

const MILESTONES=[
 {title:'初ワンマンを満員にする',target:100,venue:'club',months:4,rewardRep:4},
 {title:'300人ワンマンを満員にする',target:300,venue:'hall300',months:5,rewardRep:5},
 {title:'800人ホールを満員にする',target:800,venue:'hall800',months:6,rewardRep:7},
 {title:'Zepp級を満員にする',target:2000,venue:'zepp',months:7,rewardRep:9},
 {title:'5000人ホールを満員にする',target:5000,venue:'hall5000',months:8,rewardRep:12},
 {title:'武道館級を満員にする',target:10000,venue:'budokan',months:10,rewardRep:15},
 {title:'アリーナ単独公演を満員にする',target:15000,venue:'arena',months:12,rewardRep:18},
 {title:'ドーム公演を成功させる',target:50000,venue:'dome',months:18,rewardRep:25}
];

const VIBES=['王道キラキラ','青春エモ','甘かわ','疾走ロック','都会的クール','儚いバラード','ダンスチューン','エモロック'];
const TARGETS=['ライト層','現場勢','女性ファン','コアファン','海外ファン'];
const STAFF=[
 {id:'trainer',name:'育成ディレクター',cost:220000,effect:'全グループのレッスン成長量UP'},
 {id:'sns',name:'SNSプロデューサー',cost:200000,effect:'全グループのSNSバズ率UP'},
 {id:'manager',name:'現場マネージャー',cost:180000,effect:'全所属メンバーの疲労を軽減'},
 {id:'creative',name:'クリエイティブD',cost:260000,effect:'全グループの楽曲評価UP'},
 {id:'sales',name:'営業責任者',cost:280000,effect:'メディア案件成功率UP'},
 {id:'finance',name:'経営管理責任者',cost:300000,effect:'事務所固定費を8%圧縮'}
];
const OFFICE_LEVELS=[
 {level:1,name:'小さな芸能事務所',slots:1,cost:0,needRep:0},
 {level:2,name:'成長中のプロダクション',slots:2,cost:1500000,needRep:12},
 {level:3,name:'中堅芸能事務所',slots:3,cost:4500000,needRep:30},
 {level:4,name:'大手プロダクション',slots:5,cost:12000000,needRep:60}
];
const RIVAL_NAMES=['LUMINA','MELTY HOUR','NOIR PARADE','CANDY LOOP','ASTER','NEON RIOT','PURELY','AMBER5'];
const FAN_LINES=['推し決まった','この5人の空気感すき','次の現場行きたい','センター良すぎる','新曲刺さった','まだ古参名乗れる？','衣装かわいい','ライブ動画で気になった','このコンビずっと見てたい','最近一気に垢抜けた','ライブ強くなってる','この子もっと前に出して','運営の采配わりと好き','新規だけど沼りそう','今のメンバーが好き','次のセンター予想つかない'];

let draft={president:'あなた',agency:'LUMIERE PRODUCTION',group:'ASTERIA',concept:0,costumeTheme:'sky_princess'};
let state=freshState();
let selectedCandidates=new Set();

function freshMember(i,gen=1){
 const base=rand(45,72), idx=rand(0,CANDIDATE_IMAGES.length-1);
 const originalImage=CANDIDATE_IMAGES[idx];
 const background=pick(BACKGROUNDS), hometown=pick(HOMETOWNS), dream=pick(DREAMS);
 return {
  id:`m${Date.now()}_${i}_${rand(100,999)}`,name:makeFullName(i),portrait:originalImage,originalImage,groupImage:null,
  visualType:pick(VISUAL_TYPES),appealComment:pick(APPEAL_LINES),
  color:COLORS[i%COLORS.length],trait:pick(TRAITS),gen,age:rand(15,22),
  hometown,background,dream,specialty:pick(SPECIALTIES),weakness:pick(WEAKNESSES),speechStyle:pick(SPEECH_STYLES),
  auditionHistory:[pick(AUDITION_PAST),`今回の審査では「${pick(APPEAL_LINES)}」と話した。`],
  stats:{vocal:clamp(base+rand(-12,10),25,90),dance:clamp(base+rand(-12,10),25,90),visual:clamp(base+rand(-8,16),25,95),talk:clamp(base+rand(-15,12),20,90),sns:clamp(base+rand(-15,15),20,95),stage:clamp(base+rand(-12,12),25,90)},
  star:rand(45,92),potential:rand(55,98),mood:rand(68,88),fatigue:rand(5,18),popularity:rand(40,130),
  ambition:rand(35,88),confidence:rand(45,82),trustToPresident:rand(40,65),promise:null,storyFlags:[],status:'active'
 }
}
function freshGroup(name='ASTERIA',concept=0,id='g1',costumeTheme='sky_princess'){
 return {
  id,name,concept,costumeTheme,createdYear:1,members:[],centerId:null,relationships:{},rivalry:{},
  fans:0,buzz:8,brand:8,trust:70,livePower:8,fandom:{light:55,core:10,female:15,live:15,overseas:5},
  songs:[],activeSongId:null,selectedAction:null,missionIndex:0,mission:{...MILESTONES[0],current:0},
  selectedVenue:'club',studio:{title:'',vibe:0,target:0,budget:400000,centerId:null},livePlan:{venue:'club',setlist:[]},
  history:[],generation:1
 }
}
function freshState(){
 return {
  screen:'title',tab:'board',president:'あなた',agency:'LUMIERE PRODUCTION',
  year:1,month:1,week:1,cash:2500000,reputation:5,officeLevel:1,staff:[],
  groups:[],activeGroupId:null,rivals:RIVAL_NAMES.map((n,i)=>({name:n,power:rand(18,48)+i*2,fans:rand(1200,9000),growth:rand(-2,10)})),
  feed:[],history:[],pendingStory:null,storyOutcome:null,decisionMemory:[],modalMemberId:null,
  auditionMode:null,auditionCandidates:[],auditionGroupId:null,newGroupDraft:{name:'',concept:0,costumeTheme:'sky_princess'},
  liveRun:null,lastResult:null,lastLiveResult:null,liveEmotion:null
 }
}
function themeInfo(id){return COSTUME_THEMES.find(x=>x.id===id)||COSTUME_THEMES[0]}
function costumeImage(theme,index){const n=String((index%5)+1).padStart(2,'0');return `assets/costumes/${theme}/${theme}_${n}.webp`}
function displayImage(m,g=currentGroup()){return m?.originalImage||m?.portrait||m?.groupImage||CANDIDATE_IMAGES[0]}
function assignGroupVisuals(g){
 const used=new Set();
 members(g).forEach((m,i)=>{
   let slot=i%5;
   while(used.has(slot)&&used.size<5)slot=(slot+1)%5;
   used.add(slot);
   m.groupImage=costumeImage(g.costumeTheme,slot);
   m.portrait=m.groupImage;
 });
}
function themeBonus(g,type){
 const t=g.costumeTheme;
 if(type==='sns'&&t==='sweet_pop')return 1.12;
 if(type==='live'&&t==='crimson_rock')return 1.12;
 if(type==='brand'&&(t==='pure_white'||t==='midnight_cool'))return 1.10;
 if(type==='fans'&&t==='sky_princess')return 1.06;
 if(type==='core'&&t==='lavender_dream')return 1.10;
 return 1;
}
function currentGroup(){return state.groups.find(g=>g.id===state.activeGroupId)||state.groups[0]}
function groupById(id){return state.groups.find(g=>g.id===id)}
function members(g=currentGroup()){return (g?.members||[]).filter(m=>m.status==='active')}
function member(id,g=currentGroup()){return g?.members.find(m=>m.id===id)}
function center(g=currentGroup()){return member(g?.centerId,g)||members(g)[0]}
function hasStaff(id){return state.staff.includes(id)}
function teamStat(k,g=currentGroup()){return Math.round(avg(members(g).map(m=>m.stats[k])))}
function groupPower(g=currentGroup()){
 if(!g||!members(g).length)return 0;
 return Math.round((teamStat('vocal',g)+teamStat('dance',g)+teamStat('stage',g)+teamStat('visual',g))/8 + Math.log10(g.fans+10)*8 + g.brand*.18 + g.livePower*.22);
}
function tier(g=currentGroup()){const p=groupPower(g);return p>=90?'S+':p>=80?'S':p>=70?'A+':p>=60?'A':p>=50?'B+':p>=40?'B':p>=30?'C':p>=20?'D':'E'}
function office(){return OFFICE_LEVELS.find(x=>x.level===state.officeLevel)||OFFICE_LEVELS[0]}
function monthlyFixed(){
 let n=state.staff.reduce((s,id)=>s+(STAFF.find(x=>x.id===id)?.cost||0),0);
 n+=state.groups.length*80000;
 if(hasStaff('finance'))n=Math.round(n*.92);
 return n
}
function totalFans(){return state.groups.reduce((s,g)=>s+g.fans,0)}
function agencyPower(){return Math.round(avg(state.groups.map(groupPower)))||0}
function addFeed(icon,title,text){state.feed.unshift({icon,title,text,time:`${state.year}年 ${state.month}月 W${state.week}`});state.feed=state.feed.slice(0,36)}
function toast(t){document.querySelectorAll('.toast').forEach(e=>e.remove());document.body.insertAdjacentHTML('beforeend',`<div class="toast">${esc(t)}</div>`);setTimeout(()=>document.querySelector('.toast')?.remove(),1800)}
function save(){localStorage.setItem(SAVE,JSON.stringify(state));toast('保存しました 💾')}
function load(){const r=localStorage.getItem(SAVE);if(!r)return;try{state=JSON.parse(r);state.screen='game';state.pendingStory=null;render()}catch(e){}}
function reset(){if(confirm('タイトルへ戻りますか？')){state=freshState();selectedCandidates.clear();render()}}
function startNew(){state=freshState();draft={president:'あなた',agency:'LUMIERE PRODUCTION',group:'ASTERIA',concept:0,costumeTheme:'sky_princess'};state.screen='setup';render()}
function setDraft(k,v){draft[k]=v}
function chooseConcept(i){draft.concept=i;render()}

function goAudition(){
 state.president=draft.president.trim()||'あなた';state.agency=draft.agency.trim()||'LUMIERE PRODUCTION';
 const g=freshGroup(draft.group.trim()||'ASTERIA',draft.concept,'g1',draft.costumeTheme);state.groups=[g];state.activeGroupId=g.id;
 openAudition('initial',g.id,5);
}
function openAudition(mode,groupId,count=5){
 state.auditionMode=mode;state.auditionGroupId=groupId;
 const g=groupById(groupId);const gen=mode==='add'?g.generation+1:1;
 state.auditionCandidates=Array.from({length:12},(_,i)=>freshMember(i+rand(0,8),gen));
 state.auditionSelectCount=count;selectedCandidates.clear();state.screen='audition';render()
}
function toggleCandidate(id){
 if(selectedCandidates.has(id))selectedCandidates.delete(id);
 else if(selectedCandidates.size<state.auditionSelectCount)selectedCandidates.add(id);
 render()
}
function finishAudition(){
 if(selectedCandidates.size!==state.auditionSelectCount){toast(`${state.auditionSelectCount}人選んでください`);return}
 const g=groupById(state.auditionGroupId);const picked=state.auditionCandidates.filter(m=>selectedCandidates.has(m.id));
 if(state.auditionMode==='initial'||state.auditionMode==='newGroup'){
  g.members=picked;g.centerId=[...picked].sort((a,b)=>b.star-a.star)[0].id;initRelations(g);assignGroupVisuals(g);
  addFeed('🎤',`${g.name} 始動`,`${picked.length}人で活動開始。最初の目標は100人ワンマン。`);
 }else{
  g.generation++;picked.forEach(m=>m.gen=g.generation);g.members.push(...picked);extendRelations(g,picked);assignGroupVisuals(g);
  addFeed('🌱',`${g.name} 新メンバー加入`,`${g.generation}期生 ${picked.map(x=>x.name).join('、')} が加入。`);
  state.reputation=clamp(state.reputation+1,0,100);
 }
 state.auditionMode=null;state.auditionCandidates=[];state.screen='debut';state.tab='board';render()
}
function initRelations(g){
 g.relationships={};g.rivalry={};
 members(g).forEach(a=>{g.relationships[a.id]={};g.rivalry[a.id]={};members(g).forEach(b=>{if(a.id!==b.id){g.relationships[a.id][b.id]=rand(35,70);g.rivalry[a.id][b.id]=rand(10,48)}})})
}
function extendRelations(g,newMembers){
 newMembers.forEach(a=>{g.relationships[a.id]={};g.rivalry[a.id]={};g.members.forEach(b=>{if(a.id!==b.id){const bond=rand(30,60),rv=rand(10,45);g.relationships[a.id][b.id]=bond;g.rivalry[a.id][b.id]=rv;g.relationships[b.id]=g.relationships[b.id]||{};g.rivalry[b.id]=g.rivalry[b.id]||{};g.relationships[b.id][a.id]=bond;g.rivalry[b.id][a.id]=rv}})})
}
function relationship(a,b,g=currentGroup()){return g.relationships[a]?.[b]||0}
function rivalry(a,b,g=currentGroup()){return g.rivalry[a]?.[b]||0}
function setTab(t){state.tab=t;render()}
function selectAction(id){currentGroup().selectedAction=id;render()}
function switchGroup(id){state.activeGroupId=id;state.tab='board';render()}

function executeWeek(){
 const g=currentGroup(),a=ACTIONS.find(x=>x.id===g.selectedAction);if(!a)return;
 if(state.cash<a.cost){toast('事務所資金が足りません');return}
 const before={fans:g.fans,cash:state.cash,power:groupPower(g),buzz:g.buzz};
 state.cash-=a.cost;let headline='';
 if(a.id==='lesson'){
  members(g).forEach(m=>{const b=hasStaff('trainer')?rand(3,7):rand(2,5);m.stats.vocal=clamp(m.stats.vocal+rand(0,b),0,100);m.stats.dance=clamp(m.stats.dance+rand(0,b),0,100);m.stats.stage=clamp(m.stats.stage+rand(0,b),0,100);m.fatigue=clamp(m.fatigue+rand(6,11),0,100)});
  headline='レッスンの密度を上げた。振りの揃い方が変わってきた。'
 }
 if(a.id==='sns'){
  const m=pick(members(g)),mult=hasStaff('sns')?1.45:1;const gain=Math.round((rand(70,260)+m.stats.sns*3)*mult*themeBonus(g,'sns'));
  g.fans+=gain;g.buzz=clamp(g.buzz+rand(3,8),0,100);m.popularity+=Math.round(gain*.42);m.fatigue=clamp(m.fatigue+5,0,100);
  headline=`${m.name}の投稿が伸びた。「${pick(FAN_LINES)}」という反応が増えている。`
 }
 if(a.id==='bond'){
  const [a1,a2]=pickPair(g);const add=rand(7,15);addRel(a1,a2,add,g);a1.mood=clamp(a1.mood+4,0,100);a2.mood=clamp(a2.mood+4,0,100);
  headline=`${a1.name}と${a2.name}の距離が縮まった。ファンも2人の空気感に気づき始めた。`
 }
 if(a.id==='street'){
  const gain=Math.round((rand(90,260)+g.livePower*4)*themeBonus(g,'live'));g.fans+=gain;g.livePower=clamp(g.livePower+rand(2,4),0,100);g.fandom.live=clamp(g.fandom.live+2,0,100);
  members(g).forEach(m=>{m.stats.stage=clamp(m.stats.stage+rand(1,3),0,100);m.fatigue=clamp(m.fatigue+rand(7,11),0,100)});
  headline='対バンで手応え。終演後、初見の客が特典会に並んだ。'
 }
 if(a.id==='media'){
  const bonus=hasStaff('sales')?.10:0;const hit=Math.random()<(.34+g.brand/180+bonus);
  if(hit){const gain=rand(180,600);g.fans+=gain;g.brand=clamp(g.brand+Math.round(rand(2,5)*themeBonus(g,'brand')),0,100);state.cash+=rand(60000,220000);headline='メディア案件が決まった。知らなかった層に名前が届き始める。'}
  else{g.brand++;headline='営業を積んだ。まだ表には出ないが、次につながる話が残った。'}
 }
 if(a.id==='rest'){members(g).forEach(m=>{m.fatigue=clamp(m.fatigue-rand(12,22),0,100);m.mood=clamp(m.mood+rand(4,8),0,100)});headline='休養と作戦会議。メンバーの表情に余裕が戻った。'}
 applyWeeklyCondition(g);simulateOtherGroups(g.id);updateRivals();g.selectedAction=null;
 addFeed(a.icon,`${g.name} / ${a.name}`,headline);
 state.lastResult={groupId:g.id,headline,fanGain:g.fans-before.fans,cashDelta:state.cash-before.cash,powerGain:groupPower(g)-before.power,buzzGain:g.buzz-before.buzz,face:pick(members(g)).id};
 advanceWeek();maybeCreateStory(g);state.screen=state.pendingStory?'game':'result';render()
}
function applyWeeklyCondition(g){
 members(g).forEach(m=>{if(!hasStaff('manager'))m.fatigue=clamp(m.fatigue+2,0,100);if(m.fatigue>75)m.mood=clamp(m.mood-rand(3,7),0,100);if(m.mood>80)m.confidence=clamp(m.confidence+1,0,100)})
}
function simulateOtherGroups(activeId){
 state.groups.filter(g=>g.id!==activeId).forEach(g=>{
   const gain=rand(15,80)+Math.round(groupPower(g)*1.5);g.fans+=gain;
   if(Math.random()<.25)g.livePower=clamp(g.livePower+1,0,100);
   members(g).forEach(m=>{m.fatigue=clamp(m.fatigue+rand(-2,4),0,100);m.mood=clamp(m.mood+rand(-2,2),0,100)})
 })
}
function advanceWeek(){
 state.week++;
 if(state.week>4){
  state.week=1;state.month++;state.cash-=monthlyFixed();
  state.groups.forEach(g=>{g.mission.months=Math.max(0,g.mission.months-1);if(g.mission.months===0&&g.mission.current<g.mission.target){addFeed('⚠️',`${g.name} 目標期限`,`${g.mission.title}は未達。期限を2か月延長。`);g.trust=clamp(g.trust-2,0,100);g.mission.months=2}})
  if(state.month>12){state.month=1;state.year++;awardSeason()}
 }
}
function awardSeason(){
 const rows=[...state.rivals,...state.groups.map(g=>({name:g.name,power:groupPower(g),fans:g.fans,self:true}))].sort((a,b)=>b.power-a.power);
 addFeed('🏆','IDOL AWARDS',rows[0].self?`${rows[0].name}が年間トップに立った。`:`${rows[0].name}が年間トップ。所属グループの来年の標的になった。`)
}
function completeMissionIfReady(g){
 if(g.mission.current<g.mission.target)return;
 const old=g.mission;state.reputation=clamp(state.reputation+old.rewardRep,0,100);g.brand=clamp(g.brand+5,0,100);g.trust=clamp(g.trust+5,0,100);
 addFeed('🏆',`${g.name} 目標達成`,`${old.title}を達成。事務所評判 +${old.rewardRep}。`);
 g.missionIndex++;
 if(g.missionIndex<MILESTONES.length)g.mission={...MILESTONES[g.missionIndex],current:0};
 else g.mission={title:'伝説を更新し続ける',target:50000,venue:'dome',months:12,rewardRep:5,current:0}
}
function updateRivals(){
 state.rivals.forEach(r=>{r.growth=rand(-2,8);r.power=clamp(r.power+Math.round(r.growth/4),10,98);r.fans=Math.max(100,r.fans+rand(30,420))});
 if(Math.random()<.20){const r=pick(state.rivals);addFeed('⚔️',`${r.name}が動いた`,pick([`${r.name}が新曲を発表。SNSで比較されている。`,`${r.name}が大型フェス出演を発表。`,`${r.name}のセンターが話題になっている。`]))}
}
function nearestRival(g=currentGroup()){return [...state.rivals].sort((a,b)=>Math.abs(a.power-groupPower(g))-Math.abs(b.power-groupPower(g)))[0]}
function pickPair(g=currentGroup()){const a=pick(members(g)),b=pick(members(g).filter(x=>x.id!==a.id));return[a,b]}
function addRel(a,b,n,g=currentGroup()){if(!a||!b)return;g.relationships[a.id][b.id]=clamp(relationship(a.id,b.id,g)+n,0,100);g.relationships[b.id][a.id]=g.relationships[a.id][b.id]}
function addRivalry(a,b,n,g=currentGroup()){if(!a||!b)return;g.rivalry[a.id][b.id]=clamp(rivalry(a.id,b.id,g)+n,0,100);g.rivalry[b.id][a.id]=g.rivalry[a.id][b.id]}


function effectLabel(k,v,ps,g){
 const sign=v>0?'+':'';
 const names={fans:'ファン',buzz:'話題度',brand:'ブランド',trust:'グループ信頼',bond:'2人の絆',rivalry:'ライバル意識',
 fandomCore:'コア層',fandomLight:'ライト層',fandomFemale:'女性ファン',fandomLive:'現場勢',
 p1_ambition:`${ps?.[0]?.name||'本人'} 野心`,p1_confidence:`${ps?.[0]?.name||'本人'} 自信`,p1_mood:`${ps?.[0]?.name||'本人'} 気分`,p1_fatigue:`${ps?.[0]?.name||'本人'} 疲労`,p1_stage:`${ps?.[0]?.name||'本人'} ステージ`,
 p2_ambition:`${ps?.[1]?.name||'相手'} 野心`,p2_confidence:`${ps?.[1]?.name||'相手'} 自信`,p2_mood:`${ps?.[1]?.name||'相手'} 気分`,p2_fatigue:`${ps?.[1]?.name||'相手'} 疲労`,p2_stage:`${ps?.[1]?.name||'相手'} ステージ`};
 return `${names[k]||k} ${sign}${v}`;
}
function effectSummary(effects,ps,g){return Object.entries(effects||{}).map(([k,v])=>effectLabel(k,v,ps,g)).join(' / ')}
function memberVoice(m,text){return {speaker:m?.name||'スタッフ',image:m?.originalImage||CANDIDATE_IMAGES[0],text}}

function emotionFromEvent(e){
 const t=(e?.title||'')+' '+(e?.text||'');
 if(/泣|不安|卒業|悔|落ち|怖|心配/.test(t))return 'sad';
 if(/怒|格差|対立|ライバル|揺れ/.test(t))return 'tense';
 if(/テレビ|人気|成功|嬉|喜|夢/.test(t))return 'happy';
 return 'neutral';
}
function emotionFromChoice(c){
 const t=(c?.[0]||'')+' '+(c?.[1]||'');
 if(/安心|話す|一緒|守る|優先/.test(t))return 'soft';
 if(/競争|覚悟|明確|人気順/.test(t))return 'determined';
 if(/変更|負担|卒業|個人/.test(t))return 'tense';
 return 'neutral';
}
function characterFigure(m,g,emotion='neutral',talking=false,extra=''){
 const img=displayImage(m,g);
 return `<div class="character-stage ${emotion} ${talking?'talking':''} ${extra}">
   <div class="char-aura"></div>
   <div class="char-shadow"></div>
   <div class="char-body-wrap">
     <img class="char-body" src="${img}" alt="${esc(m?.name||'idol')}">
     <div class="blink-mask"></div>
     <div class="char-highlight"></div>
   </div>
 </div>`;
}
function maybeCreateStory(g=currentGroup()){
 if(Math.random()>.18||state.pendingStory||members(g).length<2)return;
 const p1=pick(members(g)),p2=pick(members(g).filter(x=>x.id!==p1.id)),r=pick(state.rivals),c=center(g),boss=state.president;
 const events=[
  {title:`${p1.name}から${boss}社長へ相談`,text:`「${boss}社長、次の曲でもっと前に出たいです。私、本気でセンターを狙ってます」`,people:[p1.id],choices:[
   ['次の選抜で考える','期待を与える',{p1_ambition:8,p1_confidence:5}],
   ['実力で勝ち取れ','競争心に火をつける',{p1_ambition:12,p1_stage:3,p1_mood:-2}],
   ['今の役割を磨こう','焦らせず育てる',{p1_confidence:4,p1_mood:3}]
  ]},
  {title:`${p1.name}と${p2.name}の火花`,text:`${boss}社長、リハ後の2人の空気が少し張っています。センターへの考え方がぶつかったようです。`,people:[p1.id,p2.id],choices:[
   ['競わせる','競争を成長へ',{rivalry:14,p1_stage:2,p2_stage:2}],
   ['2人で話させる','関係改善を狙う',{bond:10,rivalry:-5}],
   ['対談企画にする','物語をコンテンツに',{buzz:6,bond:4}]
  ]},
  {title:`${p1.name}が自信をなくしている`,text:`「${boss}社長、私ってこのグループに必要ですか？」`,people:[p1.id],choices:[
   ['必要な理由を伝える','自信を戻す',{p1_confidence:12,p1_mood:8}],
   ['次のライブで証明しよう','挑戦させる',{p1_stage:4,p1_ambition:5}],
   ['少し休ませる','疲労を下げる',{p1_fatigue:-15,p1_mood:5}]
  ]},
  {title:`“${p1.name}×${p2.name}”がファンに見つかる`,text:`オフショットが拡散され、2人の関係性に愛称までつき始めました。`,people:[p1.id,p2.id],choices:[
   ['公式ユニット化','関係性を育てる',{bond:8,buzz:8,fandomFemale:4}],
   ['自然体のまま','本人たちを優先',{bond:12,trust:2}],
   ['動画を連投','短期バズを狙う',{buzz:11,fans:180,p1_fatigue:4,p2_fatigue:4}]
  ]},
  {title:`古参ファンから${boss}社長への不満`,text:`「最近、新規向けばかり」と長期ファンの一部がSNSで語っています。`,people:[c.id],choices:[
   ['古参向け企画を作る','コア層を守る',{fandomCore:6,trust:4}],
   ['新規獲得を続ける','成長速度優先',{fandomLight:6,fans:220,trust:-2}],
   ['両方をつなぐ企画','バランス型',{fandomCore:3,fandomLight:3,trust:2}]
  ]},
  {title:`${r.name}とのフェス共演決定`,text:`同じステージに立つことが決まり、SNSでは早くも比較が始まっています。`,people:[c.id],choices:[
   ['攻めのセットリスト','ライブ勝負',{livePower:5,buzz:5,fandomLive:4}],
   ['世界観で差別化','ブランド勝負',{brand:5,fandomFemale:3}],
   ['交流を見せる','敵対より物語へ',{buzz:4,trust:3}]
  ]},
  {title:`${p1.name}が将来を相談`,text:`「${boss}社長、いつか演技もやってみたいです。でもアイドルも中途半端にしたくない」`,people:[p1.id],choices:[
   ['個人仕事も応援する','長期キャリア支援',{p1_confidence:7,p1_mood:5,brand:2}],
   ['今はグループ一本','集中させる',{p1_ambition:4,p1_mood:-1}],
   ['小さく試す','両立を探る',{p1_confidence:4,p1_fatigue:3,brand:2}]
  ]},
  {title:`2期生の噂にメンバーが揺れる`,text:`「${boss}社長、新しい子って入るんですか？」現メンバーも気にしています。`,people:[p1.id,p2.id],choices:[
   ['今は現体制で行く','安心感を与える',{bond:7,trust:4,p1_mood:4,p2_mood:4}],
   ['将来はあり得る','競争を促す',{rivalry:4,p1_ambition:5,p2_ambition:5}],
   ['必要なら入れる','社長判断を明確に',{brand:2,trust:-1}]
  ]},
  {title:`テレビ収録と大事なライブリハが重なった`,text:`${p1.name}だけにテレビ出演のオファー。だが、その日は次のワンマンに向けた全体リハの日でもあります。`,people:[p1.id,p2.id],choices:[
   ['テレビへ行かせる','個人人気を取りに行く',{fans:260,brand:4,p1_confidence:6,p2_mood:-3}],
   ['全体リハを優先','グループを優先する',{livePower:5,bond:5,p1_mood:-2}],
   ['リハ時間を変更','全員に負担を分散',{brand:2,p1_fatigue:4,p2_fatigue:4,trust:3}]
  ]},
  {title:`センターが本番直前に泣いている`,text:`${c.name}が楽屋で一人。「社長、今日だけは自信がないです」と小さくこぼしました。`,people:[c.id],choices:[
   ['隣で最後まで話す','安心を最優先',{p1_confidence:12,p1_mood:8,trust:3}],
   ['ステージに送り出す','覚悟を信じる',{p1_stage:5,p1_ambition:6,p1_mood:-2}],
   ['急きょセンター変更','公演成功を優先',{livePower:2,p1_confidence:-8,trust:-2}]
  ]},
  {title:`人気格差が数字に出始めた`,text:`物販売上で${p1.name}と${p2.name}に大きな差。スタッフから配置変更の提案が出ています。`,people:[p1.id,p2.id],choices:[
   ['人気順を明確にする','競争を可視化',{buzz:4,rivalry:12,p1_ambition:5,p2_mood:-5}],
   ['人気が低い子を前へ','育成を優先',{brand:2,p2_confidence:8,p1_mood:-2}],
   ['序列を見せない','チーム感を守る',{bond:8,trust:4}]
  ]},
  {title:`${p1.name}から卒業という言葉が出る`,text:`「今すぐじゃないです。でも、アイドルの次の人生も考えるようになりました」`,people:[p1.id],choices:[
   ['将来まで一緒に考える','信頼を深める',{p1_confidence:8,p1_mood:7,trust:4}],
   ['今は目標に集中しよう','現在を優先',{p1_ambition:5,p1_mood:-2}],
   ['個人仕事を増やす','次の道を準備',{brand:4,p1_fatigue:5,p1_confidence:5}]
  ]}
 ];
 state.pendingStory={groupId:g.id,...pick(events)}
}
function applyEffects(effects,ps,g){
 const p1=ps[0],p2=ps[1];
 const adj=(m,k,v)=>{if(!m)return;if(k in m)m[k]=clamp((m[k]||0)+v,0,100);else if(k in m.stats)m.stats[k]=clamp((m.stats[k]||0)+v,0,100)};
 Object.entries(effects||{}).forEach(([k,v])=>{
  if(k==='fans')g.fans=Math.max(0,g.fans+v);else if(k==='buzz')g.buzz=clamp(g.buzz+v,0,100);else if(k==='brand')g.brand=clamp(g.brand+v,0,100);else if(k==='trust')g.trust=clamp(g.trust+v,0,100);
  else if(k==='bond')addRel(p1,p2,v,g);else if(k==='rivalry')addRivalry(p1,p2,v,g);
  else if(k==='fandomCore')g.fandom.core=clamp(g.fandom.core+v,0,100);else if(k==='fandomLight')g.fandom.light=clamp(g.fandom.light+v,0,100);else if(k==='fandomFemale')g.fandom.female=clamp(g.fandom.female+v,0,100);else if(k==='fandomLive')g.fandom.live=clamp(g.fandom.live+v,0,100);
  else if(k.startsWith('p1_'))adj(p1,k.slice(3),v);else if(k.startsWith('p2_'))adj(p2,k.slice(3),v)
 })
}
function resolveStory(i){
 const e=state.pendingStory;if(!e)return;const g=groupById(e.groupId),ps=e.people.map(id=>member(id,g)).filter(Boolean),c=e.choices[i];
 const before=JSON.parse(JSON.stringify({fans:g.fans,buzz:g.buzz,brand:g.brand,trust:g.trust,people:ps.map(p=>({id:p.id,mood:p.mood,confidence:p.confidence,ambition:p.ambition,fatigue:p.fatigue,stage:p.stats.stage}))}));
 applyEffects(c[2],ps,g);
 const reactions=[
  `${ps[0]?.name||'メンバー'}は少し考えてから、あなたの言葉を受け止めた。`,
  `${ps[0]?.name||'メンバー'}の表情がわずかに変わった。この判断は後にも残りそうだ。`,
  `その場では答えが出なくても、事務所の空気は確かに変わった。`,
  `${ps[0]?.name||'メンバー'}は「分かりました、社長」と短くうなずいた。`
 ];
 state.decisionMemory.push({time:`${state.year}.${state.month}.W${state.week}`,group:g.name,event:e.title,choice:c[0]});
 state.storyOutcome={groupId:g.id,title:e.title,choice:c[0],sub:c[1],effects:effectSummary(c[2],ps,g),reaction:pick(reactions),people:e.people};
 addFeed('🎭',`${g.name} / 社長判断`,`${e.title}。「${c[0]}」を選んだ。`);
 state.pendingStory=null;state.screen='storyResult';render()
}

function setCenter(id){const g=currentGroup(),old=center(g),m=member(id,g);if(!m)return;g.centerId=id;m.mood=clamp(m.mood+4,0,100);m.confidence=clamp(m.confidence+5,0,100);if(old&&old.id!==id)old.mood=clamp(old.mood-2,0,100);addFeed('👑',`${g.name} センター変更`,`${m.name}をセンターに指名。`);render()}
function openMember(id){state.modalMemberId=id;render()}
function closeModal(){state.modalMemberId=null;document.querySelectorAll('.modal-bg').forEach(e=>e.remove())}

function createSong(){
 const g=currentGroup(),s=g.studio,m=member(s.centerId,g)||center(g);if(!m){toast('センターを選んでください');return}
 const title=(s.title||`${g.name} NEW SONG`).trim(),cost=Number(s.budget);if(state.cash<cost){toast('制作資金が足りません');return}state.cash-=cost;
 const quality=clamp(Math.round(((teamStat('vocal',g)+teamStat('dance',g)+m.star)/3+Math.log10(cost/10000+1)*5+(hasStaff('creative')?8:0)+rand(-8,8))*themeBonus(g,'brand')),30,100);
 const viral=clamp(Math.round((m.stats.sns+m.stats.visual+g.buzz)/3+rand(-10,12)),20,100),live=clamp(Math.round((teamStat('stage',g)+teamStat('dance',g)+g.livePower)/3+rand(-8,8)),20,100);
 const song={id:'s'+Date.now(),title,vibe:VIBES[s.vibe],target:TARGETS[s.target],centerId:m.id,cost,quality,viral,live,released:false,created:`${state.year}.${state.month}`};
 g.songs.unshift(song);g.activeSongId=song.id;m.popularity+=rand(40,120);m.mood=clamp(m.mood+5,0,100);addFeed('♫',`${g.name} 新曲完成`,`${title} / ${song.vibe} / CENTER ${m.name}`);g.studio.title='';render()
}
function releaseSong(id){
 const g=currentGroup(),s=g.songs.find(x=>x.id===id);if(!s||s.released)return;s.released=true;const m=member(s.centerId,g),gain=Math.round(s.quality*5+s.viral*7+g.buzz*3+rand(50,280));
 g.fans+=gain;g.buzz=clamp(g.buzz+Math.round(s.viral/12),0,100);g.brand=clamp(g.brand+Math.round(s.quality/25),0,100);m.popularity+=Math.round(gain*.28);shiftFandom(g,s.target,4);
 addFeed('🚀',`${g.name} 新曲リリース`,`${s.title}を公開。ファン +${gain.toLocaleString()}。`);state.reputation=clamp(state.reputation+1,0,100);render()
}
function shiftFandom(g,target,n){const map={'ライト層':'light','現場勢':'live','女性ファン':'female','コアファン':'core','海外ファン':'overseas'},k=map[target];if(k)g.fandom[k]=clamp(g.fandom[k]+n,0,100)}

function setVenue(id){const g=currentGroup();g.selectedVenue=id;g.livePlan.venue=id;render()}
function toggleSetlist(id){const a=currentGroup().livePlan.setlist,i=a.indexOf(id);if(i>=0)a.splice(i,1);else if(a.length<3)a.push(id);render()}
function startLive(){
 const g=currentGroup(),v=VENUES.find(x=>x.id===g.livePlan.venue);if(!v)return;if(groupPower(g)<v.need){toast(`総合力 ${v.need} 以上推奨`);return}if(state.cash<v.cost){toast('開催資金が足りません');return}
 if(!g.livePlan.setlist.length&&g.songs.length)g.livePlan.setlist=[g.songs[0].id];state.cash-=v.cost;
 const demand=Math.round(g.fans*(.18+g.livePower/180)+g.buzz*5+rand(20,90)),attendance=Math.min(v.cap,Math.max(20,demand));
 state.liveRun={groupId:g.id,venue:v,attendance,phase:0,heat:clamp(Math.round(45+teamStat('stage',g)/4+g.buzz/6),20,80),score:0,log:[]};state.screen='liveRun';render()
}
const LIVE_PHASES=[
 {title:'OPENING',text:'最初の30秒。会場の空気を掴め。',choices:[['センターを抜く','star'],['全員ダンスで圧倒','dance'],['煽りから入る','stage']]},
 {title:'MIDDLE / MC',text:'中盤。熱量をもう一段上げたい。',choices:[['エモいMC','talk'],['ユニット演出','bond'],['新曲初披露','song']]},
 {title:'LAST SONG',text:'最後の1曲。今日を伝説にする。',choices:[['銀テープ演出','brand'],['客席大合唱','trust'],['センター覚醒演出','star']]}
];
function liveChoice(i){
 const run=state.liveRun,g=groupById(run.groupId),p=LIVE_PHASES[run.phase],c=p.choices[i],m=center(g);let value=0;
 if(c[1]==='star')value=m.star;if(c[1]==='dance')value=teamStat('dance',g);if(c[1]==='stage')value=teamStat('stage',g);if(c[1]==='talk')value=teamStat('talk',g);
 if(c[1]==='bond')value=Math.round(avg(members(g).flatMap(a=>members(g).filter(b=>b.id!==a.id).map(b=>relationship(a.id,b.id,g)))));
 if(c[1]==='song'){const s=g.songs.find(x=>x.id===g.activeSongId)||g.songs[0];value=s?.live||45}if(c[1]==='brand')value=g.brand;if(c[1]==='trust')value=g.trust;
 const delta=Math.round((value-45)/5)+rand(3,11);run.heat=clamp(run.heat+delta,0,100);run.score+=delta;run.log.push(`${p.title}: ${c[0]} → 熱量 ${delta>=0?'+':''}${delta}`);run.phase++;if(run.phase>=LIVE_PHASES.length)finishLive();else render()
}
function finishLive(){
 const r=state.liveRun,g=groupById(r.groupId),v=r.venue,satisfaction=clamp(Math.round(r.heat+teamStat('stage',g)/6+rand(-5,8)),35,100),gain=Math.round(r.attendance*(satisfaction/100)*(.65+g.trust/180)),revenue=r.attendance*v.ticket;
 state.cash+=revenue;g.fans+=gain;g.livePower=clamp(g.livePower+Math.round(satisfaction/18),0,100);g.brand=clamp(g.brand+Math.round(satisfaction/30),0,100);g.mission.current=Math.max(g.mission.current,r.attendance);
 members(g).forEach(m=>{m.fatigue=clamp(m.fatigue+rand(10,18),0,100);m.popularity+=Math.round(gain/Math.max(1,members(g).length))});
 state.lastLiveResult={groupId:g.id,attendance:r.attendance,cap:v.cap,satisfaction,gain,revenue,heat:r.heat,venue:v.name};g.history.unshift(`${state.year}.${state.month} ${v.name} ${r.attendance}/${v.cap}`);
 addFeed('🔥',`${g.name} LIVE RESULT`,`${v.name} ${r.attendance}/${v.cap}人。満足度 ${satisfaction}。新規ファン +${gain}。`);
 completeMissionIfReady(g);state.reputation=clamp(state.reputation+(r.attendance>=v.cap?2:1),0,100);state.screen='liveResult';state.liveRun=null;render()
}
function backFromLive(){state.screen='game';state.tab='board';render()}

function hire(id){const st=STAFF.find(x=>x.id===id);if(!st||hasStaff(id))return;state.staff.push(id);addFeed('🏢','スタッフ加入',`${st.name}を採用。`);render()}
function fireStaff(id){state.staff=state.staff.filter(x=>x!==id);render()}
function upgradeOffice(){
 const next=OFFICE_LEVELS.find(x=>x.level===state.officeLevel+1);if(!next)return;
 if(state.reputation<next.needRep){toast(`事務所評判 ${next.needRep} 必要`);return}if(state.cash<next.cost){toast('拡張資金が足りません');return}
 state.cash-=next.cost;state.officeLevel=next.level;addFeed('🏢','事務所拡張',`${next.name}へ成長。所属グループ枠 ${next.slots}。`);render()
}
function startNewGroupSetup(){
 if(state.groups.length>=office().slots){toast('所属グループ枠がありません');return}
 state.newGroupDraft={name:`PROJECT ${state.groups.length+1}`,concept:0,costumeTheme:'sky_princess'};state.screen='newGroupSetup';render()
}
function setNewGroupDraft(k,v){state.newGroupDraft[k]=v}
function confirmNewGroup(){
 const d=state.newGroupDraft,g=freshGroup((d.name||`PROJECT ${state.groups.length+1}`).trim(),Number(d.concept),`g${Date.now()}`,d.costumeTheme||'sky_princess');g.createdYear=state.year;state.groups.push(g);state.activeGroupId=g.id;
 openAudition('newGroup',g.id,5)
}
function addMemberAudition(){
 const g=currentGroup();if(g.members.length>=12){toast('現在の実装では1グループ最大12名です');return}
 openAudition('add',g.id,Math.min(3,12-g.members.length))
}

function debutScreen(){
 const g=currentGroup(),t=themeInfo(g.costumeTheme);
 return `<div class="app"><div class="hero-card" style="text-align:center"><div class="eyebrow">DEBUT MEMBERS</div><h1>${esc(g.name)}</h1><p style="color:var(--muted)">${CONCEPTS[g.concept][0]} / COSTUME ${t.name}</p><div class="idol-strip" style="max-width:760px;margin:18px auto">${members(g).slice(0,5).map(m=>`<div class="idol-chip ${m.id===g.centerId?'center':''}"><img class="idol-photo-alive" src="${displayImage(m,g)}">${m.id===g.centerId?'<span class="crown">CENTER</span>':''}<div class="shade">${m.name}</div></div>`).join('')}</div><div style="padding:13px;border-radius:16px;background:linear-gradient(135deg,#eefaff,#fff3f8);margin:10px auto 16px;max-width:620px"><strong>候補生から、ひとつのグループへ。</strong><div style="font-size:11px;color:var(--muted);margin-top:4px">全員が${t.name}の統一衣装に変わりました。</div></div><button onclick="state.screen='game';state.tab='board';render()">${state.president}社長として活動を始める →</button></div></div>`
}
function titleScreen(){return `<div class="splash"><div class="splash-inner"><div class="eyebrow">IDOL AGENCY MANAGEMENT SIMULATOR</div><div class="splash-logo">IDOL DYNASTY</div><div style="font-weight:950;font-size:18px">v0.12 2.5D CHARACTER</div><p class="splash-sub">数字だけでは、推しは生まれない。<br>会話し、悩み、選び、アイドルたちの人生を背負う。</p><div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap"><button onclick="startNew()">芸能事務所を設立する</button>${localStorage.getItem(SAVE)?'<button class="secondary" onclick="load()">続きから</button>':''}</div></div></div>`}
function setupScreen(){
 return `<div class="setup-wrap"><div class="setup-grid"><div class="hero-card"><div class="eyebrow">STEP 1 / AGENCY</div><h1>あなたの芸能事務所をつくる</h1><div class="form-row"><label>社長の名前</label><input value="${esc(draft.president)}" oninput="setDraft('president',this.value)" placeholder="例：山田"></div><div class="form-row"><label>事務所名</label><input value="${esc(draft.agency)}" oninput="setDraft('agency',this.value)"></div><div class="form-row"><label>最初のグループ名</label><input value="${esc(draft.group)}" oninput="setDraft('group',this.value)"></div><div class="form-row"><label>グループコンセプト</label><div class="option-grid">${CONCEPTS.map((c,i)=>`<div class="option ${draft.concept===i?'active':''}" onclick="chooseConcept(${i})"><strong>${c[0]}</strong><div style="font-size:10px;color:var(--muted);margin-top:4px">${c[1]}</div></div>`).join('')}</div></div><div class="form-row"><label>デビュー衣装テーマ</label><select onchange="draft.costumeTheme=this.value;render()">${COSTUME_THEMES.map(t=>`<option value="${t.id}" ${draft.costumeTheme===t.id?'selected':''}>${t.name} / ${t.desc}</option>`).join('')}</select><div style="font-size:10px;color:var(--muted);margin-top:6px">選んだメンバーはデビュー後、このテーマの統一衣装になります。</div></div><button style="width:100%" onclick="goAudition()">最初のオーディションへ →</button></div><div class="card"><div class="eyebrow">PRESIDENT VISION</div><h2>${esc(draft.agency)}</h2><p style="color:var(--muted);line-height:1.7">${esc(draft.president||'あなた')}社長の判断が、所属アイドルの人生と事務所の歴史に残ります。</p><div style="padding:16px;border-radius:18px;background:linear-gradient(135deg,#eafaff,#fff1f8);margin-top:10px"><strong>最初は所属1組</strong><p style="font-size:11px;color:var(--muted);margin:5px 0 0">評判を上げ、オフィスを拡張すると2組目・3組目を立ち上げられます。</p></div></div></div></div>`
}
function auditionScreen(){
 return `<div class="app"><div class="section-head"><div><div class="eyebrow">${state.auditionMode==='add'?'MEMBER AUDITION':'GROUP AUDITION'}</div><h2>${state.auditionMode==='add'?`${groupById(state.auditionGroupId).name} 新メンバーオーディション`:'デビューメンバーを選ぶ'}</h2></div><div><strong>${selectedCandidates.size}/${state.auditionSelectCount}</strong></div></div><div class="member-grid">${state.auditionCandidates.map(m=>`<div class="card member-card" onclick="toggleCandidate('${m.id}')" style="${selectedCandidates.has(m.id)?'box-shadow:0 0 0 3px rgba(92,203,247,.28),var(--shadow)':''}"><img loading="lazy" src="${m.originalImage||m.portrait}"><div class="member-body"><div class="member-name"><strong>${m.name}</strong><span class="tag">${m.visualType}</span></div><div class="subline">${m.age}歳 / ${m.hometown} / ${m.trait}<br>「${m.appealComment}」<br><span class="candidate-backstory">${m.background}</span><br>スター性 ${m.star} / ポテンシャル ${m.potential}</div>${miniStat('歌',m.stats.vocal)}${miniStat('ダンス',m.stats.dance)}${miniStat('SNS',m.stats.sns)}</div></div>`).join('')}</div><div style="position:sticky;bottom:78px;margin-top:10px"><button style="width:100%" onclick="finishAudition()" ${selectedCandidates.size!==state.auditionSelectCount?'disabled':''}>この${state.auditionSelectCount}人を選ぶ</button></div></div>`
}
function newGroupSetupScreen(){
 return `<div class="setup-wrap"><div class="setup-grid"><div class="hero-card"><div class="eyebrow">NEW GROUP PROJECT</div><h1>新しいアイドルを生み出す</h1><div class="form-row"><label>新グループ名</label><input value="${esc(state.newGroupDraft.name)}" oninput="setNewGroupDraft('name',this.value)"></div><div class="form-row"><label>コンセプト</label><select onchange="setNewGroupDraft('concept',this.value)">${CONCEPTS.map((c,i)=>`<option value="${i}" ${Number(state.newGroupDraft.concept)===i?'selected':''}>${c[0]}</option>`).join('')}</select></div><div class="form-row"><label>デビュー衣装テーマ</label><select onchange="setNewGroupDraft('costumeTheme',this.value)">${COSTUME_THEMES.map(t=>`<option value="${t.id}" ${state.newGroupDraft.costumeTheme===t.id?'selected':''}>${t.name} / ${t.desc}</option>`).join('')}</select></div><button style="width:100%" onclick="confirmNewGroup()">オーディション開催 →</button></div><div class="card"><div class="eyebrow">AGENCY EXPANSION</div><h2>${state.agency}</h2><p style="color:var(--muted);line-height:1.7">新グループも、センター・楽曲・ライブ・目標・物語を独立して持ちます。</p>${bigLine('現在の所属',`${state.groups.length}/${office().slots}組`)}${bigLine('事務所評判',state.reputation)}${bigLine('事務所資金',money(state.cash))}</div></div></div>`
}
function miniStat(n,v,cls=''){return `<div class="mini-stat"><span>${n}</span><div class="bar ${cls}"><i style="width:${v}%"></i></div><strong>${v}</strong></div>`}
function shell(content){return `<div class="app">${topbar()}${content}${nav()}</div>${state.modalMemberId?memberModal(state.modalMemberId):''}${state.pendingStory?storyModal(state.pendingStory):''}`}
function topbar(){
 const g=currentGroup();return `<div class="topbar"><div class="brandline"><div class="brandmark">✦</div><div class="brandcopy"><div class="eyebrow">${state.agency} / ${state.president}社長 / ${state.year}年 ${state.month}月 W${state.week}</div><h1>${g?.name||state.agency}</h1></div></div><div class="top-actions"><button class="secondary icon-btn" onclick="save()">💾</button><button class="secondary icon-btn" onclick="reset()">⌂</button></div></div><div class="statusbar"><div class="status"><span>GROUP POWER / TIER</span><strong>${groupPower(g)} / ${tier(g)}</strong></div><div class="status"><span>GROUP FANS</span><strong>${(g?.fans||0).toLocaleString()}</strong></div><div class="status"><span>AGENCY CASH</span><strong>${money(state.cash)}</strong></div><div class="status"><span>AGENCY REP</span><strong>${state.reputation}</strong></div></div>`
}
function nav(){
 const a=[['board','⌂','司令室'],['members','♡','メンバー'],['studio','♫','楽曲'],['live','★','ライブ'],['world','⚔','事務所']];
 return `<div class="nav">${a.map(x=>`<button class="${state.tab===x[0]?'active':''}" onclick="setTab('${x[0]}')"><span class="ni">${x[1]}</span><span>${x[2]}</span></button>`).join('')}</div>`
}
function gameShell(){
 const c=state.tab==='board'?boardTab():state.tab==='members'?membersTab():state.tab==='studio'?studioTab():state.tab==='live'?liveTab():agencyTab();return shell(c)
}
function boardTab(){
 const g=currentGroup(),prog=clamp(Math.round(g.mission.current/g.mission.target*100),0,100),r=nearestRival(g);
 return `<div class="board-grid"><div class="card mission"><div class="eyebrow">NEXT MILESTONE / ${g.name}</div><div class="mission-row"><div class="mission-icon">🎯</div><div><h2>${g.mission.title}</h2><div style="font-size:11px;color:var(--muted)">達成すると次の目標が自動で解放される。</div></div></div><div class="progress"><div style="width:${prog}%"></div></div><div class="deadline"><span>${g.mission.current.toLocaleString()} / ${g.mission.target.toLocaleString()}</span><span>残り ${g.mission.months}か月</span></div></div>
 <div class="card next-decision"><div class="decision-title"><div><div class="eyebrow">THIS WEEK</div><h2>今週、何を仕掛ける？</h2></div><span style="font-size:23px">🎛️</span></div><div class="action-list">${ACTIONS.map(a=>`<div class="action ${g.selectedAction===a.id?'active':''}" onclick="selectAction('${a.id}')"><div class="action-head"><span class="action-icon">${a.icon}</span><strong>${a.name}</strong></div><div class="mini">${a.desc}</div><div class="impact">${a.impact}</div><div style="font-size:9px;color:var(--muted);margin-top:4px">💰 ${a.gain}<br>⚠️ ${a.risk}<br>出費 ${money(a.cost)}</div></div>`).join('')}</div><div class="commit-row"><div><strong>${g.selectedAction?ACTIONS.find(a=>a.id===g.selectedAction).name:'行動を選択'}</strong><div style="font-size:9px;color:var(--muted)">利益・成長・疲労・資金のバランスを考える。</div></div><button onclick="executeWeek()" ${!g.selectedAction?'disabled':''}>決断する →</button></div></div></div>
 <div class="pulse-grid"><div class="card pulse-card"><div class="section-head" style="margin-top:0"><h3>今の所属メンバー</h3><button class="ghost" onclick="setTab('members')">詳しく</button></div><div class="idol-strip">${members(g).slice(0,5).map(m=>`<div class="idol-chip ${m.id===g.centerId?'center':''}" onclick="openMember('${m.id}')"><img class="idol-photo-alive" src="${displayImage(m,g)}">${m.id===g.centerId?'<span class="crown">CENTER</span>':''}<div class="shade">${m.name}</div></div>`).join('')}</div>${producerMemo(g)}</div><div class="card pulse-card"><div class="section-head" style="margin-top:0"><h3>今、事務所で起きていること</h3></div>${state.feed.slice(0,4).map(f=>`<div class="feed-item"><div class="feed-icon">${f.icon}</div><div><strong>${esc(f.title)}</strong><p>${esc(f.text)}</p></div></div>`).join('')||'<p style="color:var(--muted);font-size:11px">最初の一手を決めよう。</p>'}<div class="alert"><div class="ico">⚔️</div><div><strong>${r.name}まで Power ${r.power-groupPower(g)>=0?`あと ${r.power-groupPower(g)}`:`${Math.abs(r.power-groupPower(g))} リード`}</strong><small>${r.name} ${r.fans.toLocaleString()} fans</small></div><button class="secondary" onclick="setTab('world')">事務所</button></div></div></div>`
}
function producerMemo(g){
 const tired=[...members(g)].sort((a,b)=>b.fatigue-a.fatigue)[0],amb=[...members(g)].sort((a,b)=>b.ambition-a.ambition)[0];
 if(tired?.fatigue>=72)return `<div class="alert"><div class="ico">🫧</div><div><strong>${tired.name}の疲労が高い</strong><small>${state.president}社長、疲労 ${tired.fatigue}です。</small></div></div>`;
 if(amb?.ambition>=78)return `<div class="alert"><div class="ico">👑</div><div><strong>${amb.name}がセンターを意識</strong><small>野心 ${amb.ambition}。相談イベントにつながる可能性。</small></div></div>`;
 return `<div class="alert"><div class="ico">✨</div><div><strong>チームの空気は良好</strong><small>${state.president}社長、今は攻めやすい状態です。</small></div></div>`
}
function membersTab(){
 const g=currentGroup();return `<div class="section-head"><div><div class="eyebrow">CAST & GENERATIONS / ${g.name}</div><h2>所属メンバー</h2></div><button onclick="addMemberAudition()">＋ 追加オーディション</button></div><div class="member-grid">${members(g).map(m=>memberCard(m,g)).join('')}</div><div class="section-head"><h2>関係性</h2><span style="font-size:10px;color:var(--muted)">友情・競争・世代差が物語を作る</span></div><div class="relationships">${relationshipCards(g)}</div>`
}
function memberCard(m,g){return `<div class="card member-card" onclick="openMember('${m.id}')"><img class="idol-photo-alive" src="${displayImage(m,g)}"><div class="member-body"><div class="member-name"><strong><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${m.color};margin-right:5px"></span>${m.name}</strong>${m.id===g.centerId?'<span class="tag gold">CENTER</span>':`<span class="tag">${m.gen}期</span>`}</div><div class="subline">${m.trait} / 人気 ${m.popularity.toLocaleString()} / 気分 ${m.mood}</div>${miniStat('スター',m.star)}${miniStat('実戦',m.stats.stage)}${miniStat('野心',m.ambition,'rival')}</div></div>`}
function relationshipCards(g){
 let pairs=[];members(g).forEach((a,i)=>members(g).slice(i+1).forEach(b=>pairs.push({a,b,bond:relationship(a.id,b.id,g),rival:rivalry(a.id,b.id,g)})));pairs.sort((x,y)=>Math.max(y.bond,y.rival)-Math.max(x.bond,x.rival));
 return pairs.slice(0,4).map(p=>{const type=p.rival>p.bond*.85&&p.rival>45?'ライバル':p.bond>68?'名コンビ':p.a.gen!==p.b.gen?'先輩×後輩':'同期';return `<div class="card rel-card"><div class="rel-type">${type}</div><div class="rel-people"><img src="${displayImage(p.a,g)}"><img src="${displayImage(p.b,g)}"></div><strong>${p.a.name} × ${p.b.name}</strong><div class="rel-desc">絆 ${p.bond} / 競争 ${p.rival}</div></div>`}).join('')
}
function studioTab(){
 const g=currentGroup(),s=g.studio,c=member(s.centerId,g)||center(g);
 return `<div class="section-head"><div><div class="eyebrow">CREATIVE STUDIO / ${g.name}</div><h2>作品をプロデュースする</h2></div></div><div class="studio-grid"><div class="card studio-controls"><div class="form-row"><label>曲名</label><input value="${esc(s.title)}" oninput="gStudioTitle(this.value)"></div><div class="form-row"><label>曲の方向性</label><select onchange="currentGroup().studio.vibe=Number(this.value);render()">${VIBES.map((v,i)=>`<option value="${i}" ${s.vibe===i?'selected':''}>${v}</option>`).join('')}</select></div><div class="form-row"><label>狙うファン層</label><select onchange="currentGroup().studio.target=Number(this.value);render()">${TARGETS.map((v,i)=>`<option value="${i}" ${s.target===i?'selected':''}>${v}</option>`).join('')}</select></div><div class="form-row"><label>センター</label><select onchange="currentGroup().studio.centerId=this.value;render()">${members(g).map(m=>`<option value="${m.id}" ${(s.centerId||g.centerId)===m.id?'selected':''}>${m.name}</option>`).join('')}</select></div><div class="form-row"><label>制作予算</label><select onchange="currentGroup().studio.budget=Number(this.value);render()">${[200000,400000,800000,1500000,3000000].map(v=>`<option value="${v}" ${s.budget===v?'selected':''}>${money(v)}</option>`).join('')}</select></div><button style="width:100%" onclick="createSong()">この作品を作る</button></div><div><div class="jacket"><img src="${c?.portrait||PORTRAITS[0]}"><div class="jacket-copy"><div class="eyebrow" style="color:#fff">${g.name}</div><div class="song-title" id="studioTitle">${esc(s.title||'NEW SONG')}</div><div class="song-meta">${VIBES[s.vibe]} / CENTER ${c?.name||''}</div></div></div></div></div><div class="section-head"><h2>作品カタログ</h2></div><div class="song-list">${g.songs.length?g.songs.map(s=>songCard(s,g)).join(''):'<div class="card" style="grid-column:1/-1;color:var(--muted);font-size:11px">まだ作品がありません。</div>'}</div>`
}
function gStudioTitle(v){currentGroup().studio.title=v;const el=$('#studioTitle');if(el)el.textContent=v||'NEW SONG'}
function songCard(s,g){const m=member(s.centerId,g);return `<div class="card song-card"><div class="song-thumb"><img src="${m?.portrait||PORTRAITS[0]}"></div><div><strong>${esc(s.title)}</strong><small>${s.vibe} / CENTER ${m?.name}</small><small>作品 ${s.quality} / バズ ${s.viral} / LIVE ${s.live}</small>${s.released?'<span class="tag" style="display:inline-block;margin-top:6px">RELEASED</span>':`<button style="margin-top:6px;padding:6px 9px;font-size:9px" onclick="releaseSong('${s.id}')">リリース</button>`}</div></div>`}

function liveCinematic(kind='before',g=currentGroup()){
 const ms=members(g),center=member(g.centerId,g)||ms[0],venue=VENUES.find(v=>v.id===g.selectedVenue)||VENUES[0];
 if(!center)return '';
 return `<div class="card live-cinematic">
   <div class="eyebrow">BACKSTAGE / 10 MINUTES TO SHOW <span class="mode-badge">2.5D LIVE</span></div>
   <div class="live-cine-grid">
     <div>${characterFigure(center,g,'determined',true,'live-character')}</div>
     <div class="live-cine-copy">
       <h2>開演10分前。</h2>
       <p>${center.name}はステージ袖で深呼吸している。${venue.name}。客席のざわめきが壁越しに聞こえる。</p>
       <div class="live-quote">「社長、行ってきます。今日の私たち、ちゃんと見ててください。」</div>
     </div>
   </div>
 </div>`;
}

function liveTab(){
 const g=currentGroup(),v=VENUES.find(x=>x.id===g.livePlan.venue),ordered=[...members(g)].sort((a,b)=>(a.id===g.centerId?-1:b.id===g.centerId?1:b.popularity-a.popularity));
 return `${liveCinematic("before",g)}<div class="section-head"><div><div class="eyebrow">LIVE DIRECTOR / ${g.name}</div><h2>本番を演出する</h2></div></div><div class="live-grid"><div class="card"><div class="venue-list">${VENUES.map(x=>`<div class="venue ${g.livePlan.venue===x.id?'active':''}" onclick="setVenue('${x.id}')"><strong>${x.name}</strong><small>${x.cap.toLocaleString()}人 / 開催費 ${money(x.cost)} / 推奨 Power ${x.need}</small></div>`).join('')}</div><div class="section-head"><h2 style="font-size:14px">SETLIST</h2></div>${g.songs.length?g.songs.map(s=>`<div class="venue ${g.livePlan.setlist.includes(s.id)?'active':''}" onclick="toggleSetlist('${s.id}')"><strong>${esc(s.title)}</strong><small>${s.vibe} / LIVE ${s.live}</small></div>`).join(''):'<div style="font-size:10px;color:var(--muted)">楽曲を作るとセットリストを組めます。</div>'}<button style="width:100%;margin-top:10px" onclick="startLive()">LIVE START →</button></div><div class="poster"><div class="poster-copy"><div class="eyebrow" style="color:#fff">${state.agency}</div><h2>${esc(g.name)}</h2><p>${v.name}<br>${state.year}.${state.month} / PRESIDENT ${esc(state.president)}</p></div><div class="poster-people">${ordered.slice(0,5).map(m=>`<img class="${m.id===g.centerId?'center-person':''}" src="${displayImage(m,g)}">`).join('')}</div></div></div>`
}
function agencyTab(){
 const next=OFFICE_LEVELS.find(x=>x.level===state.officeLevel+1);
 return `<div class="section-head"><div><div class="eyebrow">AGENCY MANAGEMENT</div><h2>${state.agency}を大きくする</h2></div>${state.groups.length<office().slots?'<button onclick="startNewGroupSetup()">＋ 新グループ</button>':''}</div>
 <div class="world-grid"><div class="card"><h3>所属グループ</h3>${state.groups.map(g=>`<div class="rank-row ${g.id===state.activeGroupId?'self':''}" style="grid-template-columns:1fr 70px 80px 90px"><strong>${g.name}<small style="display:block;color:var(--muted);font-weight:600">${themeInfo(g.costumeTheme).name}</small></strong><span>P ${groupPower(g)}</span><span>${g.fans.toLocaleString()}人</span><button class="secondary" onclick="switchGroup('${g.id}')">運営する</button></div>`).join('')}<div style="margin-top:10px">${bigLine('所属枠',`${state.groups.length}/${office().slots}組`)}${bigLine('総ファン',totalFans().toLocaleString())}${bigLine('事務所評判',state.reputation)}</div></div>
 <div class="card"><h3>事務所成長</h3>${bigLine('社長',`${state.president}社長`)}${bigLine('現在',office().name)}${bigLine('事務所資金',money(state.cash))}${bigLine('月固定費',money(monthlyFixed()))}${next?`<div style="padding:12px;margin-top:10px;border-radius:15px;background:#f8fdff;border:1px solid var(--line)"><strong>次：${next.name}</strong><div style="font-size:10px;color:var(--muted);margin:5px 0">所属枠 ${next.slots}組 / 必要評判 ${next.needRep} / 費用 ${money(next.cost)}</div><button onclick="upgradeOffice()">オフィス拡張</button></div>`:'<div class="tag gold" style="display:inline-block;margin-top:10px">最大規模</div>'}</div></div>
 <div class="section-head"><h2>スタッフ</h2></div><div class="staff-grid">${STAFF.map(s=>`<div class="staff"><strong>${s.name}</strong><small>${s.effect}<br>月給 ${money(s.cost)}</small>${hasStaff(s.id)?`<button class="secondary" onclick="fireStaff('${s.id}')">契約中</button>`:`<button onclick="hire('${s.id}')">採用</button>`}</div>`).join('')}</div>
 <div class="section-head"><h2>アイドル業界勢力図</h2></div><div class="card">${[...state.rivals,...state.groups.map(g=>({name:g.name,power:groupPower(g),fans:g.fans,self:true}))].sort((a,b)=>b.power-a.power).map((r,i)=>`<div class="rank-row ${r.self?'self':''}"><strong>#${i+1}</strong><strong>${r.self?'★ ':''}${r.name}</strong><span>P ${r.power}</span><span>${r.fans.toLocaleString()}</span></div>`).join('')}</div>`
}
function bigLine(n,v){return `<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #e8f2f6"><span style="font-size:11px;color:var(--muted)">${n}</span><strong>${v}</strong></div>`}
function memberModal(id){
 const g=currentGroup(),m=member(id,g);if(!m)return'';const others=members(g).filter(x=>x.id!==m.id),best=others.sort((a,b)=>relationship(m.id,b.id,g)-relationship(m.id,a.id,g))[0];
 return `<div class="modal-bg" onclick="if(event.target===this)closeModal()"><div class="modal"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><div class="eyebrow">IDOL PROFILE / ${g.name} <span class="mode-badge">2.5D ACTIVE</span></div><button class="ghost" onclick="closeModal()">✕</button></div>
 <div class="profile-head profile-25d">${characterFigure(m,g,m.mood<55?'sad':m.confidence>75?'happy':'neutral',false,'profile-character')}<div><h2><span style="color:${m.color}">●</span> ${m.name}</h2><div style="font-size:11px;color:var(--muted)">${m.age}歳 / ${m.hometown||'-'} / ${m.trait} / ${m.gen}期生</div><div class="traits"><span class="tag">${m.visualType}</span><span class="tag">スター ${m.star}</span><span class="tag">野心 ${m.ambition}</span><span class="tag">自信 ${m.confidence}</span></div><div class="quote">「${profileQuote(m)}」</div>${m.id!==g.centerId?`<button style="margin-top:9px" onclick="setCenter('${m.id}');closeModal()">センターに指名</button>`:'<span class="tag gold" style="display:inline-block;margin-top:9px">CURRENT CENTER</span>'}</div></div>
 <div class="bio-grid"><div><span>加入前</span><strong>${m.background||'-'}</strong></div><div><span>夢</span><strong>${m.dream||'-'}</strong></div><div><span>特技</span><strong>${m.specialty||'-'}</strong></div><div><span>苦手</span><strong>${m.weakness||'-'}</strong></div><div><span>話し方</span><strong>${m.speechStyle||'-'}</strong></div><div><span>社長への信頼</span><strong>${m.trustToPresident||50}</strong></div></div>
 <div class="section-head"><h2 style="font-size:15px">能力</h2></div>${miniStat('歌',m.stats.vocal)}${miniStat('ダンス',m.stats.dance)}${miniStat('ビジュアル',m.stats.visual)}${miniStat('トーク',m.stats.talk)}${miniStat('SNS',m.stats.sns)}${miniStat('ステージ',m.stats.stage)}
 <div class="section-head"><h2 style="font-size:15px">今の状態</h2></div>${bigLine('個人人気',m.popularity.toLocaleString())}${bigLine('気分',m.mood)}${bigLine('疲労',m.fatigue)}${bigLine('一番近いメンバー',best?`${best.name} / 絆 ${relationship(m.id,best.id,g)}`:'-')}
 <div class="section-head"><h2 style="font-size:15px">候補生ヒストリー</h2></div><div class="history-card"><img src="${m.originalImage}"><div><strong>${m.name}、加入前の記録</strong>${(m.auditionHistory||[]).map(x=>`<p>・${x}</p>`).join('')}<p>・夢は「${m.dream||'大きなステージに立つ'}」。</p></div></div>
 </div></div>`
}
function profileQuote(m){if(m.fatigue>75)return `${state.president}社長、ちょっとだけ休みたいです。`;if(m.ambition>78)return `${state.president}社長、もっと前に出たいです。`;if(m.confidence<50)return `${state.president}社長、私にしかできないことを見つけたい。`;return pick([`${state.president}社長、このメンバーで大きいステージに行きたいです。`,'次のライブ、絶対もっと良くできます。','ファンの顔、ちゃんと覚えてます。','まだここからです。'])}
function storyModal(e){
 const g=groupById(e.groupId),ps=e.people.map(id=>member(id,g)).filter(Boolean),speaker=ps[0],boss=state.president,emotion=emotionFromEvent(e);
 return `<div class="modal-bg"><div class="modal story-event chat-story cinematic-story">
 <div class="eyebrow">PRESIDENT STORY / ${g.name} <span class="mode-badge">2.5D TALK</span></div><h2>${esc(e.title)}</h2>
 <div class="cinematic-dialogue">
   <div class="character-column">${speaker?characterFigure(speaker,g,emotion,true,'story-character'):''}<div class="char-nameplate">${speaker?esc(speaker.name):'MEMBER'}</div></div>
   <div class="dialogue-column">
     <div class="bubble big-bubble">${esc(e.text)}</div>
     <div class="president-reply"><div class="president-avatar">社</div><div><small>${boss}社長</small><div class="bubble president-bubble">どう答える？ この判断はメンバーの感情やグループの空気に残る。</div></div></div>
     <div class="choice-list">${e.choices.map((c,i)=>`<button class="choice-btn" onclick="resolveStory(${i})"><strong>${c[0]}</strong><small>${c[1]}</small><span class="effect-preview">${effectSummary(c[2],ps,g)}</span></button>`).join('')}</div>
   </div>
 </div>
 </div></div>`
}

function storyResultScreen(){
 const o=state.storyOutcome;if(!o){state.screen='game';return shell(board())}
 const g=groupById(o.groupId),ps=(o.people||[]).map(id=>member(id,g)).filter(Boolean),m=ps[0],emotion=emotionFromChoice([o.choice,o.sub]);
 return `<div class="app"><div class="result story-result cinematic-result"><div class="eyebrow">DECISION RESULT / ${g.name}</div><h1>${esc(o.choice)}</h1>
 <div class="result-character-wrap">${m?characterFigure(m,g,emotion,false,'result-character'):''}<div class="reaction-copy"><strong>${esc(o.reaction)}</strong><p>${esc(o.sub)}</p></div></div>
 <div class="effect-result"><span>この判断で変化したもの</span><strong>${esc(o.effects||'数値変化なし')}</strong></div>
 <div class="memory-note">この判断は「社長判断の記録」に保存され、今後のイベントへつながる可能性があります。</div>
 <button onclick="state.storyOutcome=null;state.screen='result';render()">週の結果を見る →</button></div></div>`
}

function resultScreen(){
 const r=state.lastResult,g=groupById(r.groupId),m=member(r.face,g)||center(g);return `<div class="result"><div class="eyebrow">WEEK RESULT / ${g.name}</div><div style="font-size:42px;margin-top:8px">✨</div><h1>${esc(r.headline)}</h1><div class="result-stats"><div class="result-stat"><span>FANS</span><strong class="${r.fanGain>=0?'up':'down'}">${r.fanGain>=0?'+':''}${r.fanGain}</strong></div><div class="result-stat"><span>POWER</span><strong class="${r.powerGain>=0?'up':'down'}">${r.powerGain>=0?'+':''}${r.powerGain}</strong></div><div class="result-stat"><span>AGENCY CASH</span><strong class="${r.cashDelta>=0?'up':'down'}">${r.cashDelta>=0?'+':''}${money(r.cashDelta)}</strong></div><div class="result-stat"><span>REP</span><strong>${state.reputation}</strong></div></div><div class="card" style="display:grid;grid-template-columns:85px 1fr;gap:12px;text-align:left;margin-top:10px;align-items:center"><img src="${displayImage(m,g)}" style="width:85px;height:105px;object-fit:cover;object-position:center top;border-radius:16px"><div><div class="eyebrow">THIS WEEK'S FACE</div><strong style="font-size:17px">${m.name}</strong><p style="font-size:11px;color:var(--muted);margin:6px 0">「${profileQuote(m)}」</p><div style="font-size:10px">SNS: ${pick(FAN_LINES)} / ${pick(FAN_LINES)}</div></div></div><button style="width:100%;margin-top:10px" onclick="state.screen='game';render()">次の週へ →</button></div>`
}
function liveRunScreen(){
 const r=state.liveRun,g=groupById(r.groupId),p=LIVE_PHASES[r.phase],ordered=[...members(g)].sort((a,b)=>(a.id===g.centerId?-1:b.id===g.centerId?1:b.popularity-a.popularity));
 return `<div class="live-stage"><div class="stage-top"><div class="eyebrow">LIVE DIRECTOR MODE / ${g.name}</div><h1>${p.title}</h1><p style="color:var(--muted);font-size:12px">${p.text}</p></div><div class="heat-wrap"><div class="heat-label"><span>AUDIENCE HEAT</span><strong>${r.heat}</strong></div><div class="heat"><div style="width:${r.heat}%"></div></div></div><div class="stage-visual"><div class="stage-lights"></div><div class="stage-people">${ordered.slice(0,5).map(m=>`<img class="${m.id===g.centerId?'center-person':''}" src="${displayImage(m,g)}">`).join('')}</div><div class="crowd"></div></div><div class="live-choice">${p.choices.map((c,i)=>`<button onclick="liveChoice(${i})">${c[0]}</button>`).join('')}</div></div>`
}
function liveResultScreen(){
 const r=state.lastLiveResult,g=groupById(r.groupId);return `<div class="result"><div class="eyebrow">LIVE RESULT / ${g.name}</div><div style="font-size:50px;margin-top:7px">🔥</div><h1>${r.venue}</h1><p style="color:var(--muted)">今日のライブは、${state.agency}の歴史に残った。</p><div class="result-stats"><div class="result-stat"><span>ATTENDANCE</span><strong>${r.attendance}/${r.cap}</strong></div><div class="result-stat"><span>SATISFACTION</span><strong>${r.satisfaction}</strong></div><div class="result-stat"><span>NEW FANS</span><strong class="up">+${r.gain}</strong></div><div class="result-stat"><span>REVENUE</span><strong>${money(r.revenue)}</strong></div></div><div class="card" style="margin-top:10px;text-align:left"><strong>次の目標</strong><p style="font-size:11px;color:var(--muted);line-height:1.7">${g.mission.title}<br>${g.mission.current.toLocaleString()} / ${g.mission.target.toLocaleString()}</p></div><button style="width:100%;margin-top:10px" onclick="backFromLive()">プロデューサー司令室へ</button></div>`
}
function render(){
 document.querySelectorAll('.modal-bg,.toast').forEach(e=>e.remove());const app=$('#app');if(!app)return;
 if(state.screen==='title')app.innerHTML=titleScreen();else if(state.screen==='setup')app.innerHTML=setupScreen();else if(state.screen==='audition')app.innerHTML=auditionScreen();else if(state.screen==='debut')app.innerHTML=debutScreen();else if(state.screen==='newGroupSetup')app.innerHTML=newGroupSetupScreen();else if(state.screen==='storyResult')app.innerHTML=storyResultScreen();
 else if(state.screen==='result')app.innerHTML=`<div class="app">${topbar()}${resultScreen()}${nav()}</div>`;else if(state.screen==='liveRun')app.innerHTML=`<div class="app">${topbar()}${liveRunScreen()}</div>`;
 else if(state.screen==='liveResult')app.innerHTML=`<div class="app">${topbar()}${liveResultScreen()}${nav()}</div>`;else app.innerHTML=gameShell();
 if(state.modalMemberId)document.body.insertAdjacentHTML('beforeend',memberModal(state.modalMemberId));if(state.pendingStory&&state.screen!=='liveRun')document.body.insertAdjacentHTML('beforeend',storyModal(state.pendingStory))
}
render();
