// Portfolio content. Copied from the Claude Design handoff (Portfolio v4).

const CASES = [
  { num:'01', category:'Enterprise SaaS · Healthcare', title:'Claim Management Software', duration:'6 months',
    summary:'End-to-end UX redesign of a complex insurance claim processing platform for healthcare providers, reducing claim rejection rates and accelerating reimbursement cycles.',
    role:'Lead Product Designer + Scrum Master', platform:'Web app (desktop-first)', tools:'Figma · FigJam · Claude.ai · Storybook', shot:'claim workspace — hero screen',
    metrics:[{v:'↓22%',l:'Claim rejection rate'},{v:'57%',l:'Faster submission time'},{v:'81',l:'CSAT score (was 54)'},{v:'96%',l:'Task completion rate'}],
    problem:'Billing specialists faced a 34% claim rejection rate driven by coding errors, a fragmented 11-click submission workflow across 3 disconnected legacy screens, and zero real-time validation feedback, costing healthcare providers millions in delayed reimbursements annually.',
    phases:[
      {label:'Research',title:'Understanding the claims chaos',stats:[{v:'34%',l:'Avg. claim rejection'},{v:'11',l:'Clicks per submission'},{v:'3',l:'Disconnected screens'},{v:'0',l:'Real-time validation'}],tags:['12 interviews','40+ hrs transcripts','VOC analysis','Claude.ai synthesis'],shot:'insight clusters / affinity map',
       body:'Conducted 12 stakeholder interviews with billing specialists, practice managers and insurance coordinators. Used Claude.ai to synthesise 40+ hours of interview transcripts into structured insight clusters. VOC analysis surfaced the top pain points: a 34% rejection rate due to coding errors, an 11-click multi-screen workflow, and no real-time validation feedback.'},
      {label:'Define',title:'Framing the problem space',stats:[{v:'3',l:'User personas'},{v:'6',l:'Critical failure points'}],tags:['Journey mapping','HMW statements','Impact–effort matrix','Information architecture'],shot:'current-state journey map',
       body:'Created 3 personas (Billing Specialist, Practice Manager, Compliance Officer) and mapped a current-state journey exposing 6 critical failure points. The design challenge: "How might we give billing teams real-time confidence at every step of a claim\'s lifecycle without requiring retraining?" Features were prioritised on an impact–effort matrix with product and engineering leads.'},
      {label:'Design',title:'Redesigning the claim lifecycle',stats:[{v:'3→1',l:'Screens consolidated'},{v:'80+',l:'Components'}],tags:['Unified workspace','Real-time validation','Storybook docs','WCAG 2.1 AA'],shot:'unified workspace + inline code validator',
       body:'Consolidated 3 legacy screens into a single claim workspace with a contextual sidebar. Designed an inline ICD/CPT code validator that flags errors before submission, and a claim timeline showing adjudication status at a glance. Claude.design and Figma Make generated layout alternatives quickly. Delivered a Figma design system of 80+ components documented in Storybook.'},
      {label:'Prototype',title:'Interactive prototyping & stakeholder validation',stats:[{v:'5',l:'Core flows'},{v:'3',l:'Iteration rounds'}],tags:['Figma prototype','Lovable live demo','Batch processing','ERA reconciliation'],shot:'prototype flow — claim edit & resubmission',
       body:'Built a high-fidelity Figma prototype covering 5 core flows: new claim entry, edit & resubmission, batch processing, ERA reconciliation and dashboard reporting. A Lovable coded prototype let executives use the real UI in a browser. Three rounds of review with product, engineering and compliance refined the status workflow and notifications.'},
      {label:'Testing',title:'Usability testing & measurable impact',stats:[{v:'4.2→1.8',l:'Minutes per submission'},{v:'54→81',l:'CSAT'}],tags:['8 billing specialists','2 moderated sessions','Post-launch metrics'],shot:'before / after metrics dashboard',
       body:'Moderated usability testing with 8 billing specialists across 2 sessions measured task completion, time-on-task and error rate. After launch, submission time dropped from 4.2 to 1.8 minutes, rejection fell 22 points in the first quarter, and CSAT rose from 54 to 81. The redesign became the foundation for a platform-wide design system rollout.'}]},
  { num:'02', category:'E-commerce · Life Sciences', title:'E-commerce Platform for Life Science Products', duration:'8 months',
    summary:'A dual-tier B2B purchasing experience for high-value laboratory instruments and low-value consumables, serving researchers, procurement managers and lab technicians.',
    role:'Lead UX / Product Designer', platform:'Web responsive · B2B e-commerce', tools:'Figma · Claude.ai · Figma Make · Miro', shot:'adaptive product detail page',
    metrics:[{v:'+31%',l:'Quote-to-order conversion'},{v:'+44%',l:'Repeat consumable orders'},{v:'61%',l:'Faster approval cycle'},{v:'4.6/5',l:'Usability score'}],
    problem:'A life science distributor needed one B2B platform for two radically different buyers: researchers making 6-week, multi-stakeholder $500K instrument decisions, and lab technicians doing weekly $50 consumable replenishments. One UX couldn\'t serve both modes without breaking one.',
    phases:[
      {label:'Research',title:'Two buyer modes, one platform',stats:[{v:'15',l:'User interviews'},{v:'6 wks',l:'High-value cycle'},{v:'3–6',l:'Stakeholders per purchase'},{v:'2',l:'Buyer modes'}],tags:['Contextual inquiry','Claude.ai synthesis','Behaviour patterns'],shot:'buyer-mode research synthesis',
       body:'Contextual inquiry with 15 research scientists, procurement officers and department heads. Claude.ai helped segment purchase behaviour by product tier. High-value purchases ($5K–$500K) involve 3–6 approvers and 2–8 week cycles, while consumables are reordered weekly by one technician. Two fundamentally different journeys had to live in one product.'},
      {label:'Define',title:'Separating the two purchase journeys',stats:[{v:'4',l:'Personas'},{v:'9',l:'Design principles'}],tags:['Dual journey architecture','Quote request flow','Quick reorder flow'],shot:'considered vs quick-reorder journeys',
       body:'Four personas: Researcher, Lab Tech, Procurement Officer and Department Head. A Considered Purchase Flow handles quotes, comparison and multi-approver sign-off; a Quick Reorder Flow offers saved lists, bulk add-to-cart and subscriptions. Nine design principles guided the dual-mode architecture.'},
      {label:'Design',title:'A platform that knows what you\'re buying',stats:[{v:'12',l:'Grid variants explored'},{v:'120+',l:'Components'}],tags:['Adaptive PDP','Multi-approver checkout','Subscribe & save','Role-based UI'],shot:'high-value vs consumable PDP modes',
       body:'An adaptive product page switches between High-Value Mode (spec tables, documents, comparison drawer, quote CTA, demo scheduling) and Consumable Mode (quantity, pack sizes, reorder history, subscribe-and-save). Checkout supports role-based states for requesters, approvers and budget holders. Figma Make generated 12 catalogue grid variants; 120+ components shipped.'},
      {label:'Prototype',title:'Simulating both journeys at once',stats:[{v:'2',l:'Parallel prototypes'},{v:'3',l:'Iteration rounds'}],tags:['Scenario walkthroughs','Quote → PO flow','Express checkout'],shot:'parallel prototype flows',
       body:'Two parallel Figma prototypes: browse → compare → quote → approval → PO, and saved list → bulk add → express checkout → subscription. Walkthroughs with a procurement manager and a lab technician side by side exposed conflicts in shared navigation, cart and account components.'},
      {label:'Testing',title:'Validating across both buyer types',stats:[{v:'11',l:'Participants'},{v:'9→3.5',l:'Days to approve'}],tags:['Moderated testing','Post-launch tracking'],shot:'usability findings board',
       body:'Separate rounds with 6 procurement/researcher profiles and 5 lab technicians. Fixes included a sticky comparison drawer, in-context approval email previews and clearer reorder-list styling. After launch, quote conversion rose 31%, repeat orders grew 44%, and approval time fell from 9 days to 3.5.'}]},
  { num:'03', category:'AI Product · Life Sciences', title:'AI Agent for E-commerce Content Generation', duration:'5 months',
    summary:'UX for an AI content agent that writes product titles, descriptions, spec tables and SEO metadata for 50,000+ life science SKUs, cutting content production time by 80%.',
    role:'Lead Product Designer · AI Workflow Designer', platform:'Internal web tool · AI SaaS', tools:'Claude.ai · Figma · Figma Make · Lovable', shot:'split-panel AI content workspace',
    metrics:[{v:'16×',l:'Content production speed'},{v:'71%',l:'AI acceptance rate'},{v:'12K',l:'SKUs cleared in month 1'},{v:'320',l:'SKUs per editor per day'}],
    problem:'The platform had 50,000+ SKUs with incomplete or missing descriptions. At 20 descriptions per editor per day, full coverage would take 7 years. The challenge went beyond automation: editors had to trust AI output enough to use it rather than ignore it.',
    phases:[
      {label:'Research',title:'The content bottleneck',stats:[{v:'50K+',l:'SKUs needing content'},{v:'7 yrs',l:'Manual completion time'},{v:'20',l:'Descriptions / editor / day'},{v:'3',l:'Trust constraints'}],tags:['Stakeholder interviews','Claude.ai analysis','Trust framing'],shot:'content gap analysis',
       body:'Interviews with content managers, catalogue editors and product owners, supported by Claude.ai transcript analysis, showed one editor produced about 20 quality descriptions a day. Three constraints emerged: scientific accuracy was non-negotiable, brand voice had to stay consistent, and editors needed to control AI content rather than simply accept it.'},
      {label:'Define',title:'Designing for human–AI collaboration',stats:[{v:'3',l:'Personas'},{v:'4',l:'Workflow modes'}],tags:['Transparency','Control','Auditability','Approval gates'],shot:'human–AI collaboration model',
       body:'Personas: Content Editor, Catalogue Manager and Product Owner. The question: "How might we make AI-generated content feel like a trusted first draft rather than a black box?" A principle-led framework of Transparency (confidence scores), Control (inline edits) and Auditability (track human vs AI edits) shaped four workflow modes, from single-item generation to gated publishing.'},
      {label:'Design',title:'The AI content workspace',stats:[{v:'14',l:'Content field types'},{v:'100–500',l:'SKUs per batch'}],tags:['Split-panel workspace','Confidence indicators','Tone studio','Batch review grid'],shot:'confidence indicators + batch review grid',
       body:'A split-panel workspace places raw product data on the left and live AI content on the right, with green/amber/red confidence per field and change tracking on every edit. A Tone & Template Studio lets brand managers feed voice rules into the prompt pipeline, and a Batch Review Grid triages hundreds of SKUs with accept/edit/reject.'},
      {label:'Prototype',title:'Making AI feel tangible',stats:[{v:'Live',l:'Claude.ai API'},{v:'3',l:'Sprint cycles'}],tags:['Animated AI states','Lovable prototype','Real model output'],shot:'live prototype — generation states',
       body:'A Figma prototype simulated typing states, confidence population and inline editing. A Lovable prototype connected to a real Claude.ai endpoint, so editors reacted to actual AI descriptions rather than mockups. As Scrum Master I folded engineering feasibility feedback into each of 3 sprint reviews.'},
      {label:'Testing',title:'Building trust in AI content',stats:[{v:'10',l:'Content editors'},{v:'71%',l:'Acceptance (target 60%)'}],tags:['Trust Score KPI','2 testing rounds'],shot:'trust score results',
       body:'Two rounds with 10 editors measured a Trust Score: how often AI output was accepted unedited. Editors initially distrusted amber fields even when correct, so the confidence tooltip was redesigned to explain the reason for each score. The final round reached 71% acceptance and 320 SKUs per editor per day, a 16× gain; 12,000 SKUs were cleared in the first month.'}]}
];
CASES.forEach(c => c.phases.forEach((p, i) => p.n = '0' + (i + 1)));

const W = (title, category, group, kind) => ({ title, category, group, kind });
const WORK = [
  W('nTouch','Mobile App','Consumer','Figma'), W('Techies4Tech','Web App','Enterprise','Figma'), W('Soco','Social App','Consumer','Figma'),
  W('Breez Security','Security App','Consumer','Figma'), W('PUMA','Enterprise','Enterprise','Figma'), W('Bonds India','Fintech','Fintech','Figma'),
  W('SocietyRax','Healthcare','Healthcare','Figma'), W('MyBzz','HRM Platform','Enterprise','Figma'), W('SSE — Sports Stock Exchange','E-commerce','Fintech','Figma'),
  W('Appswave','Legal Tech','Enterprise','Figma'), W('Dixels','EdTech','Consumer','Figma'), W('Royal Oman Police','Social Media','Consumer','Figma'),
  W('ADAA','Food Delivery','Consumer','Figma'), W('QICDRC','Wellness','Healthcare','Figma'), W('AAH','Real Estate','Consumer','Figma'),
  W('Madinaty','Sports','Consumer','Figma'), W('National Archive','Travel','Consumer','Figma'), W('FRC','B2B SaaS','Enterprise','Figma'),
  {title:'Nivano Physicians',category:'Healthcare website',group:'Healthcare',kind:'Live',href:'https://www.nivanophysicians.com/'},
  {title:'Cosmeti Suite',category:'Healthcare website',group:'Healthcare',kind:'Live',href:'https://www.cosmetisuite.com/'},
  {title:'Dr. Catalyst',category:'Healthcare website',group:'Healthcare',kind:'Live',href:'https://www.drcatalyst.com/'},
  {title:'Apollo Managed Care',category:'Healthcare website',group:'Healthcare',kind:'Live',href:'https://www.apollomanagedcare.com/'}
];
const FIGMA = {"nTouch":"https://www.figma.com/design/B5x9cng6Mfigd1OOJh1INP/ntouch---shared","Techies4Tech":"https://www.figma.com/design/JF18KMhry2u29ZaHOsZnLc/Techies4Tech-Application","Soco":"https://www.figma.com/design/5naNrr6PEJ0rBP1L9KZl13/Social-Comment---SOCO","Breez Security":"https://www.figma.com/design/t2WutB6qVsaAvFlEyHUt31/Breez-Design---Shared","PUMA":"https://www.figma.com/file/jp2gdBmI86PdcbOpanwFUZ/ACE-iHUB-and-PUMAA","Bonds India":"https://www.figma.com/file/wtQ29HB6l4MufpBNbFqfya/Bond-Login-page-design","SocietyRax":"https://www.figma.com/design/Nhp1LL1kxWkV4o8GsUvEPR/Society-Rax","MyBzz":"https://www.figma.com/file/02PjRNbWwWFTxAqbNjjjNT/Mybzz","SSE — Sports Stock Exchange":"https://www.figma.com/file/OUWrmoSFC1X4WmBXYhhKCo/Sports-stock-exchange","Appswave":"https://www.figma.com/design/rWSXpECH4qlpp6cNwsBTx7/Appswave-Website","Dixels":"https://www.figma.com/design/D0mA5GeHcECuZBxObychwE/Dixels-(Copy)","Royal Oman Police":"https://www.figma.com/file/MtEuMZjvoAXLDoTo4pGson/Royal-Oman-Police-(ROP)","ADAA":"https://www.figma.com/file/0F7p33SQMpY4cpzwVubFVu/ADAA","QICDRC":"https://www.figma.com/file/vxd6GlFPh2S9NxhpOU6JEG/QICDRC","AAH":"https://www.figma.com/file/yBLrIc3pxsiEuSoFKMZKmx/AAH","Madinaty":"https://www.figma.com/file/6jT4gEUwoc1tWnsWTsNJ8Z/Madinaty","National Archive":"https://www.figma.com/file/1Ac0WMuiopY7yQiHgLwtgg/National-Archive","FRC":"https://www.figma.com/file/1jvtqejXfWiGiWl2evVRTq/FRC-UI"};
WORK.forEach(w => { if (FIGMA[w.title]) w.href = FIGMA[w.title]; });
const CLIENTS = ['Matrix Comsec','Meditab','Cayzen Technologies','HCI Active','i-Engineering','Appswave','GSPANN','Danaher','Leica Microsystems','ContentHubGPT','MeshIQ','Decision Point','PayoBank','i8Labs','Sports Exchange','MyBzz','Breez Security','SocietyRx','Techies4Tech','Defx','iPatientCare','Bonds India'];

const LOGO_DOMAINS = {"Matrix Comsec":"matrixcomsec.com","Meditab":"meditab.com","Cayzen Technologies":"cayzen.com","HCI Active":"hciactive.com","GSPANN":"gspann.com","Danaher":"danaher.com","Leica Microsystems":"leica-microsystems.com","MeshIQ":"meshiq.com","iPatientCare":"ipatientcare.com","Appswave":"appswave.io","Bonds India":"bondsindia.com","Decision Point":"decisionpoint.ai","PayoBank":"payobank.com","i8Labs":"i8labs.com","ContentHubGPT":"contenthubgpt.com","Techies4Tech":"techies4tech.com","Breez Security":"breezsecurity.com","Defx":"defx.com","i-Engineering":"i-engineering.com","Sports Exchange":"sportsexchange.com","MyBzz":"mybzz.com","SocietyRx":"societyrx.com"};
const SERVICES = [
  {title:'UX Research',body:'VOC, retros, user interviews, persona development and journey mapping.',tags:['User research','VOC analysis','Personas','WCAG']},
  {title:'Product Design',body:'End-to-end product design from wireframes to high-fidelity mockups and prototypes.',tags:['Wireframing','Prototyping','Figma Make']},
  {title:'Design Systems',body:'Scalable component libraries, tokens and documentation for consistent product UI.',tags:['Components','Variants','Auto layout','Dev mode']},
  {title:'Interaction Design',body:'Micro-animations, transitions and interactive prototypes that delight users.',tags:['Micro-interactions','Lovable','Claude AI']},
  {title:'Mobile & Web',body:'Responsive UI across iOS, Android, tablet and web platforms.',tags:['iOS','Android','iPad','Responsive']},
  {title:'Front-End Dev',body:'HTML5, CSS3, SCSS, Bootstrap, Semantic UI and React component implementation.',tags:['HTML5','CSS3/SCSS','React UI','Webflow']}
].map((s, i) => ({ ...s, n: '0' + (i + 1) }));

const PROCESS = [
  {title:'Research',body:'Interviews, VOC and contextual inquiry, with Claude.ai synthesising hours of transcripts into clear insight clusters.',tools:'Interviews · VOC · Claude.ai'},
  {title:'Define',body:'Personas, journey maps and HMW statements, then priorities agreed on an impact–effort matrix with product and engineering.',tools:'FigJam · Miro · IA'},
  {title:'Design',body:'Layout options generated fast, then refined by hand into a documented, accessible component system.',tools:'Figma · Figma Make · Storybook'},
  {title:'Prototype',body:'High-fidelity flows in Figma and live coded prototypes in Lovable so stakeholders can try the real thing.',tools:'Figma · Lovable'},
  {title:'Test & measure',body:'Moderated usability sessions before launch, then CSAT, completion and time-on-task tracked after.',tools:'Usability tests · GA'}
].map((s, i) => ({ ...s, n: '0' + (i + 1) }));

const TESTIMONIALS = [
  {quote:'Client or manager testimonial goes here: a short, specific quote about working with Umesh.',name:'Name Surname',role:'Role, Company'},
  {quote:'Second testimonial: ideally from a product manager or engineering lead on a shipped project.',name:'Name Surname',role:'Role, Company'},
  {quote:'Third testimonial: a freelance client speaking to outcomes and collaboration.',name:'Name Surname',role:'Role, Company'}
];
const WRITING = [
  {type:'Article',title:'Article title from Medium — add link'},
  {type:'Article',title:'Article title from Medium — add link'},
  {type:'Talk / workshop',title:'Talk or training session title — add link'}
];

const EXPERIENCE = [
  {dates:'Aug 2019 – Present',current:true,company:'Cayzen Technologies',role:'Sr. Product Designer · Scrum Master',project:'View project: GARDIANT ↗',href:'https://www.figma.com/file/jp2gdBmI86PdcbOpanwFUZ/ACE-iHUB-and-PUMAA',
   points:['Lead product discovery sessions, stakeholder workshops and UX strategy planning.','Create scalable design systems, user stories, process flows, wireframes, prototypes and high-fidelity mockups.','Collaborate with product managers and engineers; contribute front-end in HTML5, CSS3, SCSS and React.','As Scrum Master, facilitate sprint planning, standups, retrospectives and backlog grooming.'],
   tags:['Claude.ai','Claude.design','Figma Make','Lovable','Storybook','Prompt engineering']},
  {dates:'Sep 2017 – Jul 2019',company:'Meditab Software',role:'Sr. UI/UX Designer & Web Designer',project:'View project: IMS / EHR ↗',href:'https://uxid.vercel.app/images/portfolio/website/9.jpg',
   points:['Designed responsive web applications and healthcare product interfaces.','Led UX strategy from requirement analysis through wireframing, prototyping and delivery.','Created assets for iOS, iPad and Android; delivered accessible, W3C-valid code.'],tags:[]},
  {dates:'Mar 2015 – Aug 2017',company:'Matrix Comsec',role:'Sr. UI/UX Designer',project:'View project: COSEC Cloud ↗',href:'https://www.figma.com/design/B5x9cng6Mfigd1OOJh1INP/ntouch---shared',
   points:['Designed enterprise web and desktop application interfaces.','Created wireframes, prototypes and interactive UI solutions.','Built front-end with HTML, CSS and Bootstrap alongside backend teams.'],tags:[]},
  {dates:'Jun 2013 – Feb 2015',company:'Concept Securities',role:'Web & Graphics Designer',project:'',
   points:['Designed web applications, landing pages and branding materials.','Delivered dynamic web content using HTML and CSS.'],tags:[]}
];
const TOOLS = [['Figma','Design & prototype'],['FigJam','Brainstorming'],['Claude.ai','AI-powered UX'],['Figma Make','AI iteration'],['Lovable','Live prototypes'],['Miro','Whiteboarding'],['Whimsical','Flows & maps'],['Photoshop','Image editing'],['Webflow','No-code web'],['Storybook','Component docs'],['Jira','Agile sprints'],['Git','Version control']].map(([name,use]) => ({name,use}));
const EDUCATION = [
  {degree:'B.Tech – Computer Engineering',school:'CHARUSAT University (CSPIT, Changa)',years:'2009–2013',score:'CGPA 8.5'},
  {degree:'H.S.C – Science',school:'GHSEB (RKVB)',years:'2008–2009',score:'86%'},
  {degree:'S.S.C – General',school:'GSEB (RKVB)',years:'2006–2007',score:'84.92%'}
];


const GAL = [];
const addG = (type, folder, items) => items.forEach(([n, title]) => GAL.push({ type, group: type, src: 'img/' + folder + '-' + n + '.jpg', title }));
addG('Web app','web',[[10,'Insurance Portal'],[12,'Stock Dashboard'],[11,'Custom Dashboard'],[1,'Booking System'],[3,'Office Mato Web'],[2,'Define X'],[9,'Engage Web'],[5,'Cosec Web'],[6,'SAMAS'],[7,'DR Catalyst'],[8,'ShowItBig']]);
addG('Mobile app','mobile',[[15,'SSE — Sports Stock Exchange'],[2,'Job Portal'],[14,'MyBZZ'],[13,'Office Mato'],[9,'Netwok Mobile'],[8,'Cosec Apta'],[3,'PayQuick'],[12,'Engage'],[4,'Study Science'],[5,'Quick Realtor'],[6,'Pizza Stand']]);
addG('Website','website',[[1,'QICDRC'],[24,'AAH'],[23,'MMQ'],[21,'Surge'],[3,'beáh'],[4,'Vcare'],[20,'Social Connect'],[22,'Codemaster'],[5,'Vastu'],[6,'Dulles'],[8,'MG Hosting'],[9,'Allergy EHR'],[10,'Dr. Paul'],[11,'Nivano Physicians'],[12,'Netwok'],[13,'NJ Experts'],[14,'Cosmetisuite'],[15,'NorthVally Family Physicians'],[16,'Dr Catalyst'],[17,'Website4MD'],[19,'Immunology Specialist']]);
addG('Visual design','other',[[1,'Brand Identity'],[2,'UI Components'],[3,'Icon Set'],[4,'Illustration'],[5,'Marketing']]);
const ORDER = []; const byType = {}; GAL.forEach(g => (byType[g.type] = byType[g.type] || []).push(g));
for (let i = 0; i < 25; i++) ['Web app','Mobile app','Website','Visual design'].forEach(t => byType[t][i] && ORDER.push(byType[t][i]));
const GTYPES = ['All','Web app','Mobile app','Website','Visual design'];
const GLABEL = { 'All':'All', 'Web app':'Web apps', 'Mobile app':'Mobile apps', 'Website':'Websites', 'Visual design':'Visual design' };
const COVERS = ['img/web-10.jpg','img/web-11.jpg','img/web-12.jpg'];
