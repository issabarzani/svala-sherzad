/* Svala Sherzad — shared data, languages, footer, WhatsApp and case viewer for all versions */
(function(){
const WA='9647502101881';
const P=[
 ['avana','Avana','b',{ku:'براندینگی چێشتخانە',en:'Restaurant branding',ar:'هوية مطعم'}],
 ['baklava-inn','Baklava Inn','b',{ku:'براند و کەمپەین',en:'Brand & campaign',ar:'هوية وحملة'}],
 ['radiant','Radiant','b',{ku:'براندینگی کافێ و نانەواخانە',en:'Café & bakery branding',ar:'هوية مقهى ومخبز'}],
 ['baghy-shaqlawa','Baghy Shaqlawa','s',{ku:'سۆشیال میدیا · خانووبەرە',en:'Social media · Real estate',ar:'سوشيال ميديا · عقارات'}],
 ['vast','Vast Agency','b',{ku:'ناسنامەی ئاژانس',en:'Agency identity',ar:'هوية وكالة'}],
 ['sina','Restaurant Sina','s',{ku:'سۆشیال میدیا · چێشتخانە',en:'Social media · Restaurant',ar:'سوشيال ميديا · مطعم'}],
 ['marmi','Marmi','b',{ku:'لۆگۆ و ناسنامەی بینراو',en:'Logo & visual identity',ar:'شعار وهوية بصرية'}],
 ['hadan','Hadan Real Estate','s',{ku:'سۆشیال میدیا · خانووبەرە',en:'Social media · Real estate',ar:'سوشيال ميديا · عقارات'}],
 ['amazon','Amazon Café','s',{ku:'ناوەڕۆکی سۆشیال میدیا',en:'Social media content',ar:'محتوى سوشيال ميديا'}],
 ['ibrahim-phone','Ibrahim Phone','b',{ku:'براندینگی فرۆشگا',en:'Retail branding',ar:'هوية متجر'}],
 ['hella','Hella Agency','s',{ku:'سۆشیال میدیا · ئاژانس',en:'Social media · Agency',ar:'سوشيال ميديا · وكالة'}],
 ['iqraa','Iqraa','p',{ku:'دیزاینی کتێب',en:'Book design',ar:'تصميم كتاب'}],
 ['shovash','Shovash','b',{ku:'لۆگۆ و براندینگ',en:'Logo & branding',ar:'شعار وهوية'}],
 ['rekar','Rekar Real Estate','s',{ku:'سۆشیال میدیا · خانووبەرە',en:'Social media · Real estate',ar:'سوشيال ميديا · عقارات'}],
 ['khwenari-kara','Khwenari Kara','s',{ku:'سۆشیال میدیا · ٢٠٢١–٢٠٢٢',en:'Social media · 2021–22',ar:'سوشيال ميديا · ٢٠٢١–٢٠٢٢'}],
 ['al-delal','Al Delal','s',{ku:'سۆشیال میدیا · خزمەتگوزاری ئۆتۆمبێل',en:'Social media · Car services',ar:'سوشيال ميديا · خدمات سيارات'}],
 ['fm-pzishki','FM Pzishki','s',{ku:'سۆشیال میدیا · تەندروستی',en:'Social media · Health',ar:'سوشيال ميديا · صحة'}],
 ['behnoosh','Behnoosh Printing','s',{ku:'سۆشیال میدیا · چاپخانە',en:'Social media · Print house',ar:'سوشيال ميديا · مطبعة'}]
];
const CAT={all:{ku:'هەموو',en:'All',ar:'الكل'},b:{ku:'براندینگ',en:'Branding',ar:'هوية'},s:{ku:'سۆشیال میدیا',en:'Social media',ar:'سوشيال ميديا'},p:{ku:'چاپ',en:'Print',ar:'طباعة'}};
const SERV=[
 ['M4 5h16v11H4zM8 20h8M12 16v4',{ku:['بەڕێوەبردنی سۆشیال میدیا','پلانی ناوەڕۆک، بڵاوکردنەوە و گەشەپێدانی هەژمارەکانت بە شێوەیەکی ڕێکخراو.'],en:['Social media management','Content planning, publishing and steady growth for your brand accounts.'],ar:['إدارة السوشيال ميديا','تخطيط المحتوى والنشر والنمو المنتظم لحسابات علامتك.']}],
 ['M4 4h16v16H4zM4 15l5-5 4 4 3-3 4 4',{ku:['دیزاینی پۆست و ناوەڕۆک','پۆست، ستۆری و کەمپەینی بینراو کە لەگەڵ ناسنامەی براندەکەت دەگونجێن.'],en:['Post & content design','Posts, stories and campaign visuals that stay true to your identity.'],ar:['تصميم المنشورات والمحتوى','منشورات وستوريات وحملات بصرية متناسقة مع هويتك.']}],
 ['M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12 4 7.5',{ku:['ناسنامەی براند','لۆگۆ، ڕەنگ، فۆنت و ڕێنمایی براند بۆ دەستپێکێکی بەهێز.'],en:['Brand identity','Logo, colour, type and guidelines for a strong start.'],ar:['الهوية التجارية','شعار وألوان وخطوط ودليل هوية لانطلاقة قوية.']}],
 ['M3 7h12v10H3zM15 10l6-3v10l-6-3',{ku:['ڤیدیۆی بازرگانی','وێنەگرتنی ڤیدیۆی ڕیکلامی و ناساندنی بەرهەم بە شێوازی سینەمایی.'],en:['Commercial videography','Promotional and product films shot with a cinematic eye.'],ar:['تصوير فيديو تجاري','أفلام ترويجية وإعلانية بلمسة سينمائية.']}],
 ['M4 6h16M4 12h16M4 18h16M8 4v4M15 10v4M11 16v4',{ku:['مۆنتاژی ڤیدیۆ','مۆنتاژ، ڕەنگ و دەنگ بۆ ڕیڵز و ڤیدیۆی کورت و درێژ.'],en:['Video editing','Cutting, colour and sound for reels and long-form video.'],ar:['مونتاج الفيديو','مونتاج وتلوين وصوت للريلز والفيديوهات الطويلة.']}],
 ['M3 11l15-6v14L3 13zM7 13l1 6h3l-1-5',{ku:['کەمپەینی ڕیکلامی','بیرۆکە و جێبەجێکردنی کەمپەین بۆ کردنەوە، وەرز و ئۆفەرەکان.'],en:['Promotional campaigns','Ideas and execution for launches, seasons and offers.'],ar:['حملات ترويجية','أفكار وتنفيذ حملات للافتتاحات والمواسم والعروض.']}]
];
const STEPS=[{ku:['گوێگرتن','ناسینی براند، ئامانج و بینەرەکانت.'],en:['Listen','Your brand, goals and audience.'],ar:['الاستماع','علامتك وأهدافك وجمهورك.']},{ku:['بیرۆکە','دیدی بینراو و پلانی ناوەڕۆک.'],en:['Concept','Visual direction and a content plan.'],ar:['الفكرة','اتجاه بصري وخطة محتوى.']},{ku:['بەرهەمهێنان','دیزاین، وێنەگرتن و مۆنتاژ.'],en:['Produce','Design, shooting and editing.'],ar:['الإنتاج','تصميم وتصوير ومونتاج.']},{ku:['بڵاوکردنەوە','بڵاوکردنەوە و پێوانەکردنی ئەنجام.'],en:['Launch','Publishing and measuring results.'],ar:['الإطلاق','النشر وقياس النتائج.']}];
const SOC=[
 ['WhatsApp','+964 750 210 1881','https://wa.me/'+WA],
 ['Instagram','@svala_sherzad','https://www.instagram.com/svala_sherzad/'],
 ['Behance','svaladesigner18','https://www.behance.net/svaladesigner18'],
 ['LinkedIn','Svala Sherzad','https://www.linkedin.com/in/svala-sherzad-366663161/'],
 ['Telegram','t.me/svaladesign','https://t.me/svaladesign']
];
const T={
ku:{nWork:'کارەکان',nAbout:'دەربارە',nServ:'خزمەتگوزاری',nContact:'پەیوەندی',hire:'واتسئاپ',first:'سڤالا',last:'شێرزاد',role:'پسپۆڕی سۆشیال میدیا · دیزاینەر · ڤیدیۆگرافەر',roleShort:'پسپۆڕی سۆشیال میدیا',heroLead:'لە هەولێرەوە، ناسنامەی براندەکان دەگۆڕم بۆ ناوەڕۆکی بینراو کە خەڵک ڕادەگرێت — لە پۆستی سۆشیال میدیاوە تا ڤیدیۆی بازرگانی و براندینگی تەواو.',seeWork:'بینینی کارەکان',startProj:'دەستپێکردنی پڕۆژە',st1:'پڕۆژەی هەڵبژێردراو',st2:'ساڵی دەستپێکردنی کار',st3:'زمانی کارکردن',workT:'کارە هەڵبژێردراوەکان',workL:'براندینگ، دیزاینی سۆشیال میدیا و چاپ بۆ چێشتخانە، کۆمپانیای خانووبەرە، ئاژانس و فرۆشگاکان.',city:'هەولێر',country:'هەولێر، کوردستان',aboutT:'چیرۆک بە وێنە دەگێڕمەوە',bio1:'من ڤیدیۆگرافەر و مۆنتاژکارێکی بەپەرۆشم لە هەولێر، عێراق، بە حەزێکی بەهێزەوە بۆ گێڕانەوەی چیرۆک بە وێنە، داهێنان و بەرهەمهێنانی ناوەڕۆکی سینەمایی.',bio2:'پسپۆڕم لە دروستکردنی ڤیدیۆی بازرگانی، ناوەڕۆکی ڕیکلامی و ئەزموونی بینراو کە یارمەتی براندەکان دەدەن ناسنامەی خۆیان بگەیەنن و پەیوەندی لەگەڵ بینەرەکانیان دروست بکەن. ڕێبازەکەم تێکەڵەیەکە لە دیدی داهێنەرانە، وردبینی و هەستێکی بەهێزی جوانکاری بۆ گەیاندنی ئەنجامی بەرز.',lKu:'کوردی',lEn:'ئینگلیزی',lAr:'عەرەبی',native:'زمانی دایک',good:'باش',servT:'چی دەکەم',procT:'چۆن کار دەکەین',cT:'با پێکەوە شتێکی جوان دروست بکەین',cL:'بۆ پڕۆژەی نوێ، بەڕێوەبردنی سۆشیال میدیا یان وێنەگرتنی ڤیدیۆ، ڕاستەوخۆ نامە بنێرە.',fT:'کورتەی پڕۆژە',fName:'ناوت',fServ:'خزمەتگوزاری',fMsg:'دەربارەی پڕۆژەکەت',fSend:'ناردن لە واتسئاپ',fNote:'نامەکەت لە واتسئاپ ئامادە دەکرێت؛ تەنها کلیک لە ناردن بکە.',hi:'سڵاو سڤالا',from:'ناو',srv:'خزمەتگوزاری',msg:'پڕۆژە',view:'بینینی پڕۆژە',scroll:'بڕۆ خوارەوە',close:'داخستن',prev:'پێشوو',next:'دواتر',loading:'ئامادەکردن',rights:'هەموو مافەکان پارێزراون',powered:'دروستکراوە لەلایەن',followMe:'فۆڵۆم بکە',projects:'پڕۆژە'},
en:{nWork:'Work',nAbout:'About',nServ:'Services',nContact:'Contact',hire:'WhatsApp',first:'Svala',last:'Sherzad',role:'Social Media Specialist · Designer · Videographer',roleShort:'Social Media Specialist',heroLead:'From Erbil, I turn brand identities into visual content people stop for — from social posts to commercial video and complete branding.',seeWork:'See the work',startProj:'Start a project',st1:'selected projects',st2:'started working with brands',st3:'working languages',workT:'Selected work',workL:'Branding, social media design and print for restaurants, real-estate firms, agencies and shops.',city:'Erbil',country:'Erbil, Kurdistan',aboutT:'I tell stories in pictures',bio1:'I am a passionate Videographer and Video Editor based in Erbil, Iraq, with a strong interest in visual storytelling, creativity, and cinematic content production.',bio2:'I specialize in creating commercial videos, promotional content, and visual experiences that help brands communicate their identity and connect with their audiences. My approach combines creative vision, attention to detail, and a strong sense of visual aesthetics to deliver high-quality results.',lKu:'Kurdish',lEn:'English',lAr:'Arabic',native:'Native',good:'Good',servT:'What I do',procT:'How we work',cT:"Let's make something beautiful",cL:'For a new project, social media management or a video shoot, message me directly.',fT:'Project brief',fName:'Your name',fServ:'Service',fMsg:'About your project',fSend:'Send on WhatsApp',fNote:'Your message opens ready in WhatsApp — just tap send.',hi:'Hello Svala',from:'Name',srv:'Service',msg:'Project',view:'View project',scroll:'Scroll',close:'Close',prev:'Previous',next:'Next',loading:'Loading',rights:'All rights reserved',powered:'Powered by',followMe:'Follow me',projects:'projects'},
ar:{nWork:'الأعمال',nAbout:'نبذة',nServ:'الخدمات',nContact:'تواصل',hire:'واتساب',first:'سڤالا',last:'شيرزاد',role:'أخصائية سوشيال ميديا · مصممة · مصورة فيديو',roleShort:'أخصائية سوشيال ميديا',heroLead:'من أربيل، أحوّل هويات العلامات التجارية إلى محتوى بصري يلفت الانتباه — من منشورات السوشيال ميديا إلى الفيديو التجاري والهوية الكاملة.',seeWork:'شاهد الأعمال',startProj:'ابدأ مشروعاً',st1:'مشروعاً مختاراً',st2:'سنة بدء العمل',st3:'لغات العمل',workT:'أعمال مختارة',workL:'هوية بصرية وتصميم سوشيال ميديا وطباعة لمطاعم وشركات عقارات ووكالات ومتاجر.',city:'أربيل',country:'أربيل، كردستان',aboutT:'أروي القصص بالصورة',bio1:'أنا مصورة فيديو ومونتيرة شغوفة مقيمة في أربيل، العراق، ولدي اهتمام كبير بالسرد البصري والإبداع وإنتاج المحتوى السينمائي.',bio2:'أتخصص في إنتاج الفيديوهات التجارية والمحتوى الترويجي والتجارب البصرية التي تساعد العلامات على إيصال هويتها والتواصل مع جمهورها. يجمع أسلوبي بين الرؤية الإبداعية والاهتمام بالتفاصيل والحس الجمالي لتقديم نتائج عالية الجودة.',lKu:'الكردية',lEn:'الإنجليزية',lAr:'العربية',native:'اللغة الأم',good:'جيد',servT:'ماذا أقدّم',procT:'كيف نعمل',cT:'لنصنع شيئاً جميلاً معاً',cL:'لمشروع جديد أو إدارة سوشيال ميديا أو تصوير فيديو، راسلني مباشرة.',fT:'ملخص المشروع',fName:'اسمك',fServ:'الخدمة',fMsg:'عن مشروعك',fSend:'أرسل عبر واتساب',fNote:'ستُفتح رسالتك جاهزة في واتساب — فقط اضغط إرسال.',hi:'مرحباً سڤالا',from:'الاسم',srv:'الخدمة',msg:'المشروع',view:'عرض المشروع',scroll:'مرّر',close:'إغلاق',prev:'السابق',next:'التالي',loading:'جارٍ التحميل',rights:'جميع الحقوق محفوظة',powered:'بواسطة',followMe:'تابعني',projects:'مشروعاً'}
};
const ICON={
 WhatsApp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a17 17 0 0 1-1.7-.6 13.4 13.4 0 0 1-5.1-4.5c-.4-.5-1.3-1.7-1.3-3.3s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.8-.2 1.6Z"/></svg>',
 Instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
 Behance:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.2 11.4c.9-.4 1.4-1.1 1.4-2.2C9.6 7 8 6 6 6H1v12h5.2c2.2 0 4.1-1 4.1-3.4 0-1.5-.7-2.7-2.1-3.2ZM3.6 8h2c.8 0 1.5.2 1.5 1.1 0 .9-.6 1.2-1.4 1.2H3.6V8Zm2.2 8H3.6v-3.2h2.3c.9 0 1.6.4 1.6 1.6 0 1.2-.8 1.6-1.7 1.6ZM20.5 7h-5.4V5.7h5.4V7Zm1.4 6.6c0-2.6-1.5-4.7-4.2-4.7-2.6 0-4.4 2-4.4 4.6 0 2.7 1.7 4.5 4.4 4.5 2 0 3.4-.9 4-2.9h-2.1c-.2.7-1.1 1.1-1.8 1.1-1.3 0-2-.8-2-2.1h6.1v-.5Zm-6.1-1c.1-1 .8-1.7 1.9-1.7 1 0 1.6.6 1.7 1.7h-3.6Z"/></svg>',
 LinkedIn:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5Z"/></svg>',
 Telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 18.7 19.5c-.2 1-.9 1.3-1.7.8l-4.8-3.6-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2l-11 6.9L1.8 12c-1-.3-1-1 .2-1.5L20.6 3.4c.9-.3 1.6.2 1.3.9Z"/></svg>',
 arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
 close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
 left:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m15 6-6 6 6 6"/></svg>',
 right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 6 6 6-6 6"/></svg>'
};
const subs=[];let L='ku';
try{const q=localStorage.getItem('svala-lang');if(q&&T[q])L=q}catch(e){}
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const SV={P,CAT,SERV,STEPS,SOC,T,ICON,WA,reduce,
 get lang(){return L},
 t(k){return (T[L]&&T[L][k])??T.en[k]??k},
 extend(o){for(const l in o)Object.assign(T[l],o[l])},
 on(f){subs.push(f)},
 setLang(l){
  L=l;const r=document.documentElement;r.lang=l==='ku'?'ckb':l;r.dir=l==='en'?'ltr':'rtl';
  document.querySelectorAll('[data-i]').forEach(e=>{const v=T[l][e.dataset.i];if(v!=null)e.textContent=v});
  document.querySelectorAll('[data-l]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===l));
  try{localStorage.setItem('svala-lang',l)}catch(e){}
  subs.forEach(f=>{try{f(l)}catch(e){console.error(e)}});
 },
 waLink(name,serv,msg){const t=T[L];return 'https://wa.me/'+WA+'?text='+encodeURIComponent(`${t.hi}\n${t.from}: ${name||'-'}\n${t.srv}: ${serv||'-'}\n${t.msg}: ${msg||'-'}`)},
 /* wires a brief form: #fName, #fServ (select), #fMsg, #fSend (a) inside root */
 brief(root){
  const q=s=>root.querySelector(s);
  const fill=()=>{q('.fServ').innerHTML=SERV.map(s=>`<option>${s[1][L][0]}</option>`).join('');upd()};
  const upd=()=>{q('.fSend').href=SV.waLink(q('.fName').value.trim(),q('.fServ').value,q('.fMsg').value.trim())};
  root.addEventListener('input',upd);root.addEventListener('submit',e=>e.preventDefault());
  SV.on(fill);fill();
 },
 socials(cls){return SOC.map(s=>`<a class="${cls||''}" href="${s[2]}" target="_blank" rel="noopener">${ICON[s[0]]}<span>${s[0]}</span><small dir="ltr">${s[1]}</small></a>`).join('')},
 /* Bazho footer — mandatory on every site */
 footer(el,variant){
  const logo=variant==='light'?'bazho.png':'bazho-white.png';
  const draw=()=>{el.innerHTML=`<div class="sv-foot"><span>© ${new Date().getFullYear()} Svala Sherzad · ${SV.t('country')} · ${SV.t('rights')}</span><a class="sv-bazho" href="https://bazho.pages.dev" target="_blank" rel="noopener" aria-label="Powered by BAZHO GROUP"><span>${SV.t('powered')}</span><img src="../assets/${logo}" alt="" width="30" height="21"><b>BAZHO GROUP</b></a></div>`};
  SV.on(draw);draw();
 },
 /* full-length case viewer */
 viewer(){
  if(SV._v)return SV._v;
  const v=document.createElement('div');v.className='sv-viewer';v.setAttribute('role','dialog');v.setAttribute('aria-modal','true');
  v.innerHTML=`<div class="sv-vbar"><div class="sv-vt"><b></b><small></small></div><span class="sv-vc"></span><button class="sv-ib sv-flip" data-a="p">${ICON.left}</button><button class="sv-ib sv-flip" data-a="n">${ICON.right}</button><button class="sv-ib" data-a="x">${ICON.close}</button></div><div class="sv-vbody"><img alt=""></div><div class="sv-vprog"><i></i></div>`;
  document.body.appendChild(v);
  const body=v.querySelector('.sv-vbody'),img=v.querySelector('img'),bar=v.querySelector('.sv-vprog i');let i=0,last;
  const lbl=()=>{v.querySelector('[data-a=p]').setAttribute('aria-label',SV.t('prev'));v.querySelector('[data-a=n]').setAttribute('aria-label',SV.t('next'));v.querySelector('[data-a=x]').setAttribute('aria-label',SV.t('close'))};
  const show=n=>{i=(n+P.length)%P.length;const p=P[i];v.querySelector('b').textContent=p[1];v.querySelector('small').textContent=CAT[p[2]][L]+' · '+p[3][L];v.querySelector('.sv-vc').textContent=String(i+1).padStart(2,'0')+' / '+P.length;img.classList.remove('in');img.onload=()=>img.classList.add('in');img.src='../assets/full/'+p[0]+'.webp';img.alt=p[1];body.scrollTop=0;bar.style.transform='scaleX(0)'};
  const open=n=>{lbl();show(n);if(!v.classList.contains('open')){last=document.activeElement;v.classList.add('open');document.documentElement.classList.add('sv-lock');SV.lenis&&SV.lenis.stop();v.querySelector('[data-a=x]').focus()}};
  const close=()=>{v.classList.remove('open');document.documentElement.classList.remove('sv-lock');SV.lenis&&SV.lenis.start();last&&last.focus()};
  body.addEventListener('scroll',()=>{bar.style.transform=`scaleX(${body.scrollTop/Math.max(1,body.scrollHeight-body.clientHeight)})`});
  v.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;if(a==='x')close();if(a==='n')show(i+1);if(a==='p')show(i-1)});
  addEventListener('keydown',e=>{if(!v.classList.contains('open'))return;const rtl=document.documentElement.dir==='rtl';if(e.key==='Escape')close();if(e.key==='ArrowRight')show(i+(rtl?-1:1));if(e.key==='ArrowLeft')show(i+(rtl?1:-1))});
  SV._v={open,close};return SV._v;
 },
 /* language switch markup */
 langSwitch(){return `<div class="sv-lang" role="group" aria-label="Language"><button data-l="ku">کو</button><button data-l="en">EN</button><button data-l="ar">ع</button></div>`},
 bindLang(){document.addEventListener('click',e=>{const b=e.target.closest('[data-l]');if(b)SV.setLang(b.dataset.l)})},
 /* split text into words/chars for animation (keeps Arabic script joined: words only for rtl) */
 split(el,mode){
  const txt=el.textContent;el.setAttribute('aria-label',txt);
  const rtl=/[؀-ۿ]/.test(txt);const m=rtl?'w':(mode||'c');
  el.innerHTML=txt.split(' ').map(w=>`<span class="sv-w" aria-hidden="true"><span class="sv-wi">${m==='c'?[...w].map(c=>`<span class="sv-c">${c}</span>`).join(''):w}</span></span>`).join(' ');
  return el.querySelectorAll(m==='c'?'.sv-c':'.sv-wi');
 },
 smooth(){
  if(reduce||!window.Lenis)return null;
  const l=new Lenis({lerp:.09,smoothWheel:true});SV.lenis=l;
  if(window.gsap&&window.ScrollTrigger){l.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>l.raf(t*1000));gsap.ticker.lagSmoothing(0)}
  else{const f=t=>{l.raf(t);requestAnimationFrame(f)};requestAnimationFrame(f)}
  document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();l.scrollTo(t,{offset:-70})}});
  return l;
 },
 /* magnetic hover for buttons */
 magnetic(sel,str){if(reduce||matchMedia('(hover:none)').matches)return;document.querySelectorAll(sel).forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*(str||.3)}px,${(e.clientY-r.top-r.height/2)*(str||.3)}px)`});b.addEventListener('pointerleave',()=>{b.style.transform=''})})}
};
window.SV=SV;
})();
