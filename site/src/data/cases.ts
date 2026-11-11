// Copy for the case pages rendered by src/components/ProjectCase.astro.
// Facts come from the 2026-11 resume, the interview-prep notes and each project's README.
// Edit text here; the zh and en pages read from the same object.

export interface CaseContent {
  lang: 'zh' | 'en';
  pageTitle: string;
  no: string;
  chapter: string;
  titleMain: string;
  titleItalic: string;
  lede: string;
  ledeItalic?: string;
  accent: string;
  cover: { src: string; alt: string; kind: 'phone' | 'wide' };
  links: { label: string; href: string }[];
  meta: { k: string; v: string }[];
  roles: { title: string; body: string }[];
  roleNote?: string;
  problem?: {
    label: string;
    heading: string;
    headingItalic: string;
    cards: { title: string; body: string }[];
    question?: string;
  };
  approach?: {
    label: string;
    heading: string;
    cards: { title: string; body: string }[];
    figure?: { src: string; alt: string; caption: string };
  };
  screens?: {
    label: string;
    heading: string;
    headingItalic: string;
    items: { no: string; title: string; desc: string; src: string; alt: string; kind: 'phone' | 'wide' }[];
  };
  decisions?: {
    label: string;
    heading: string;
    headingItalic: string;
    items: { title: string; body: string }[];
  };
  results?: { label: string; stats: { value: string; label: string }[]; note?: string };
  reflection?: { label: string; items: { title: string; body: string }[]; status: string };
  next: { slug: string; label: string };
  ui: { back: string; info: string; role: string; question: string };
}

const uiZh = { back: '回到首頁', info: '專案資訊', role: '我的角色', question: '設計問題' };
const uiEn = { back: 'Back to home', info: 'Project info', role: 'My role', question: 'Design question' };

const WHYSCOPE_GH = 'https://github.com/jielle2453/whyscope';
const CHITCHAT_DEMO = 'https://chitchat-tour.vercel.app';
const CHITCHAT_GH = 'https://github.com/jielle2453/chitchat-tour';
const VIRAL_PLAY = 'https://viral-town.vercel.app';
const VIRAL_GH = 'https://github.com/theroyatlas/viral-town';

export const cases: Record<'whyscope' | 'chitchat' | 'viral', { zh: CaseContent; en: CaseContent }> = {
  // ─────────────────────────────── Whyscope ───────────────────────────────
  whyscope: {
    zh: {
      lang: 'zh',
      pageTitle: 'Whyscope',
      no: '04',
      chapter: 'Chapter Four — Whyscope 好奇鏡',
      titleMain: 'Whyscope',
      titleItalic: '好奇鏡.',
      lede: '給 5 到 8 歲孩子的「為什麼」問答機 —— ',
      ledeItalic: '用說的或拍給它看，不連雲端也能回答。',
      accent: '#d4a017',
      cover: { src: 'ws_kid_zh.webp', alt: '好奇鏡孩子端：回答蝸牛為什麼有殼', kind: 'phone' },
      links: [{ label: 'GitHub', href: WHYSCOPE_GH }],
      meta: [
        { k: 'Time', v: '2026' },
        { k: 'Type', v: '個人專案 · ASUS UGen AI League 2026' },
        { k: 'Tools', v: 'Python · FastAPI · faster-whisper · YOLOv8 · OpenCLIP · sentence-transformers · Qwen2.5-1.5B · SQLite' },
        { k: 'Tags', v: '兒童 · 地端 AI · RAG · 隱私' },
      ],
      roles: [
        { title: '產品與互動設計', body: '設計孩子端與家長端兩個介面，以及孩子聽得懂的回答規則。' },
        { title: '系統開發', body: '用 FastAPI 串接語音辨識、影像辨識、向量檢索與地端 LLM，執行時不連雲端。' },
        { title: '評測', body: '建立中英 180 題評測集，用來調整「答或不答」的門檻。' },
      ],
      problem: {
        label: '設計挑戰',
        heading: '孩子每天問很多個為什麼，',
        headingItalic: '但雲端 AI 不是好答案。',
        cards: [
          { title: '隱私', body: '孩子的聲音和家裡的畫面，不應該被上傳到雲端。' },
          { title: '正確', body: '能在裝置上跑的小模型容易講錯，而孩子分辨不出來。' },
          { title: '等待', body: '孩子沒有耐心，回答慢一點，注意力就跑掉了。' },
        ],
        question: '如何讓一個不連網的小模型，給孩子又快、又對、又聽得懂的回答？',
      },
      approach: {
        label: '解法',
        heading: '聽、看、找、說：一條全在本機跑完的流程。',
        cards: [
          { title: '聽與看', body: 'faster-whisper 把孩子的問題轉成文字；YOLOv8 加 OpenCLIP 認出孩子拍給它看的東西。' },
          { title: '找', body: '用 sentence-transformers 從附出處的兒童知識庫裡檢索事實。沒有把握的問題不猜，留給家長。' },
          { title: '說', body: '第一句直接念出知識庫的事實；1.5B 模型只能改寫這些事實，輸出再做 grounding 檢查，不通過就換成範本。' },
        ],
      },
      screens: {
        label: '關鍵畫面',
        heading: '孩子一個畫面，',
        headingItalic: '家長一個畫面。',
        items: [
          {
            no: '3.1',
            title: '孩子：回答',
            desc: '大字、一次只講一件事，最後丟回一個「你猜猜看」的問題，讓孩子繼續想。按鈕只有兩個：再說一次、換一個問題。',
            src: 'ws_kid_zh.webp',
            alt: '孩子端回答畫面',
            kind: 'phone',
          },
          {
            no: '3.2',
            title: '家長：這週',
            desc: '家長看到孩子這週問了多少個為什麼、最好奇哪些主題，知道今天可以從哪裡聊起。',
            src: 'ws_week_zh.webp',
            alt: '家長端每週統計畫面',
            kind: 'phone',
          },
          {
            no: '3.3',
            title: '家長：聊天小抄',
            desc: '遇到死亡、身體這類敏感問題，系統不自己回答，而是給家長建議的說法、要避免的話和可信的來源。',
            src: 'ws_cheats_zh.webp',
            alt: '家長端聊天小抄畫面',
            kind: 'phone',
          },
        ],
      },
      decisions: {
        label: '設計決策',
        heading: '四個讓小模型',
        headingItalic: '值得信任的決定。',
        items: [
          { title: '第一句一定來自知識庫', body: '小模型只負責改寫，不負責知道。就算後面的生成失敗，孩子聽到的第一句也是對的。' },
          { title: '把回答規則寫成程式', body: '每句最多 18 個字、5 到 6 歲只解釋一句、不用科學術語、不問孩子的家人和心情。違反規則的輸出直接換掉。' },
          { title: '先說第一句，再補完', body: '檢索完就先念出第一句，解釋在背景生成。語音提問的首句約 0.3 秒就開始回答。' },
          { title: '不確定就交給家長', body: '敏感或沒把握的問題不猜，記錄下來，讓家長決定怎麼跟孩子聊。' },
        ],
      },
      results: {
        label: '成果',
        stats: [
          { value: '91.7%', label: '答或不答的判斷正確率（中文開發集）' },
          { value: '≈0.3s', label: '語音提問的首句回應時間' },
          { value: '180', label: '中英評測題' },
          { value: 'Top 20', label: 'ASUS UGen AI League 2026' },
        ],
        note: '目前完成的是 Stage I：在筆電上跑完整個流程。',
      },
      reflection: {
        label: '反思',
        items: [
          { title: '學習與收穫', body: '小模型的極限，逼我把「正確」從模型身上拿走，交給知識庫、規則和評測。設計孩子的回答，其實就是在設計一組可以被檢查的規則。' },
          { title: '下一步', body: 'Stage II 規劃移到 Raspberry Pi 5 加 Hailo 加速器，加入手指指向、兒童語音辨識與語音合成，並在家庭中實際測試。' },
        ],
        status: 'Stage I 原型，筆電模式。程式碼公開在 GitHub。',
      },
      next: { slug: 'chitchat-tour', label: '05 Chitchat Tour' },
      ui: uiZh,
    },
    en: {
      lang: 'en',
      pageTitle: 'Whyscope',
      no: '04',
      chapter: 'Chapter Four — Whyscope',
      titleMain: 'Whyscope',
      titleItalic: 'why, answered.',
      lede: 'A “why” machine for kids aged 5 to 8 — ',
      ledeItalic: 'ask it out loud or show it something, and it answers with no cloud at all.',
      accent: '#d4a017',
      cover: { src: 'ws_kid_en.webp', alt: 'Whyscope child screen answering why a snail has a shell', kind: 'phone' },
      links: [{ label: 'GitHub', href: WHYSCOPE_GH }],
      meta: [
        { k: 'Time', v: '2026' },
        { k: 'Type', v: 'Solo project · ASUS UGen AI League 2026' },
        { k: 'Tools', v: 'Python · FastAPI · faster-whisper · YOLOv8 · OpenCLIP · sentence-transformers · Qwen2.5-1.5B · SQLite' },
        { k: 'Tags', v: 'Kids · on-device AI · RAG · privacy' },
      ],
      roles: [
        { title: 'Product & interaction', body: 'Designed the child and parent screens, and the rules that keep answers at a child’s level.' },
        { title: 'Engineering', body: 'Wired speech recognition, image recognition, vector search and a local LLM together with FastAPI, with no cloud at run time.' },
        { title: 'Evaluation', body: 'Built a 180-question Chinese and English eval set to tune when the system should answer or hold back.' },
      ],
      problem: {
        label: 'The challenge',
        heading: 'Kids ask “why” all day long,',
        headingItalic: 'and cloud AI is the wrong answer.',
        cards: [
          { title: 'Privacy', body: 'A child’s voice and the inside of their home should not be sent to the cloud.' },
          { title: 'Accuracy', body: 'Models small enough to run on a device get things wrong, and kids can’t tell.' },
          { title: 'Waiting', body: 'Kids don’t wait. A slow answer and their attention is gone.' },
        ],
        question: 'How can a small offline model give children answers that are fast, correct and easy to understand?',
      },
      approach: {
        label: 'The approach',
        heading: 'Listen, look, recall, speak — all on the device.',
        cards: [
          { title: 'Listen and look', body: 'faster-whisper turns the question into text; YOLOv8 and OpenCLIP recognise whatever the child shows the camera.' },
          { title: 'Recall', body: 'sentence-transformers retrieves facts from a curated, source-cited kids’ knowledge base. Uncertain questions are not guessed; they go to a parent.' },
          { title: 'Speak', body: 'The first sentence is read straight from the knowledge base. The 1.5B model may only rephrase those facts, and a grounding check swaps in a template if it strays.' },
        ],
      },
      screens: {
        label: 'Key screens',
        heading: 'One screen for the child,',
        headingItalic: 'one for the parent.',
        items: [
          { no: '3.1', title: 'Child: the answer', desc: 'Big type, one idea at a time, and a guessing question at the end to keep the child thinking. Only two buttons: say it again, or ask something new.', src: 'ws_kid_en.webp', alt: 'Child answer screen', kind: 'phone' },
          { no: '3.2', title: 'Parent: this week', desc: 'Parents see how many “whys” their child asked this week and which topics they were curious about, so they know where to start a conversation.', src: 'ws_week_en.webp', alt: 'Parent weekly summary screen', kind: 'phone' },
          { no: '3.3', title: 'Parent: cheat sheets', desc: 'For sensitive questions such as death or the body, the system doesn’t answer the child. It gives the parent suggested wording, things to avoid and trusted sources.', src: 'ws_cheats_en.webp', alt: 'Parent cheat sheet screen', kind: 'phone' },
        ],
      },
      decisions: {
        label: 'Design decisions',
        heading: 'Four decisions that make',
        headingItalic: 'a small model trustworthy.',
        items: [
          { title: 'The first sentence always comes from the knowledge base', body: 'The small model rephrases; it doesn’t know. Even if generation fails, the first thing the child hears is correct.' },
          { title: 'Answer rules live in code', body: 'Short sentences, one explanation for ages 5–6, no science jargon, never asking about the child’s family or feelings. Output that breaks a rule is replaced.' },
          { title: 'Speak first, finish later', body: 'The first sentence is spoken as soon as retrieval ends while the rest is composed in the background — about 0.3 s to first sentence for a spoken question.' },
          { title: 'When unsure, hand it to a parent', body: 'Sensitive or uncertain questions are logged instead of guessed, so a parent decides how to talk about them.' },
        ],
      },
      results: {
        label: 'Results',
        stats: [
          { value: '91.7%', label: 'answer-or-abstain accuracy (Chinese dev set)' },
          { value: '≈0.3s', label: 'to the first spoken sentence' },
          { value: '180', label: 'eval questions in Chinese and English' },
          { value: 'Top 20', label: 'ASUS UGen AI League 2026' },
        ],
        note: 'What exists today is Stage I: the full pipeline running on a laptop.',
      },
      reflection: {
        label: 'Reflection',
        items: [
          { title: 'What I learned', body: 'The limits of a small model pushed me to move “being correct” out of the model and into the knowledge base, the rules and the evals. Designing a child’s answer turned out to be designing a set of rules that can be checked.' },
          { title: 'Next', body: 'Stage II is planned on a Raspberry Pi 5 with a Hailo accelerator, adding finger pointing, child speech recognition, speech synthesis and testing in real homes.' },
        ],
        status: 'Stage I prototype, laptop mode. The code is public on GitHub.',
      },
      next: { slug: 'chitchat-tour', label: '05 Chitchat Tour' },
      ui: uiEn,
    },
  },

  // ───────────────────────────── Chitchat Tour ─────────────────────────────
  chitchat: {
    zh: {
      lang: 'zh',
      pageTitle: 'Chitchat Tour',
      no: '05',
      chapter: 'Chapter Five — Chitchat Tour',
      titleMain: 'Chitchat',
      titleItalic: 'Tour.',
      lede: '走在路上，它會依你的位置和家鄉 —— ',
      ledeItalic: '講一則你可能沒注意過的街頭冷知識。',
      accent: '#86EFAC',
      cover: { src: 'ct_walk.webp', alt: 'Chitchat Tour 散步時的講解卡片', kind: 'phone' },
      links: [
        { label: 'Demo', href: CHITCHAT_DEMO },
        { label: 'GitHub', href: CHITCHAT_GH },
      ],
      meta: [
        { k: 'Time', v: '2026.11' },
        { k: 'Type', v: '個人專案 · Meta Global AI Developer Hackathon' },
        { k: 'Tools', v: 'TypeScript · Next.js · Meta Muse Spark · SAM 3.1 · MediaPipe · MapLibre · Vercel' },
        { k: 'Tags', v: '旅遊 · AI Agent · 地圖 · 隱私' },
      ],
      roles: [
        { title: '概念與 UX', body: '定下「講日常、不打斷、沒出處不說」三個原則，設計散步、提問、拍照和筆記本的體驗。' },
        { title: '全端開發', body: '用 Next.js 獨立開發並上線，串接 6 個 Meta 模型。' },
        { title: '內容', body: '整理附出處、並比較日本與美國做法的台北街頭知識庫。' },
      ],
      problem: {
        label: '設計挑戰',
        heading: '導覽總在講地標，',
        headingItalic: '但遊客好奇的是日常。',
        cards: [
          { title: '只講地標', body: '遊客真正想問的是：垃圾車為什麼放音樂、騎樓為什麼有台階、街上為什麼很少垃圾桶。' },
          { title: '新奇因人而異', body: '從東京來和從紐約來的遊客走同一條街，覺得新鮮的東西不一樣。' },
          { title: 'AI 會亂講', body: '講錯的冷知識比不講更糟，而一直講話的導覽也很煩。' },
        ],
        question: '如何讓 AI 導覽只在對的時機開口，講對這個人來說新奇、而且有出處的事？',
      },
      approach: {
        label: '解法',
        heading: '三個原則，寫進 Agent 的每一步。',
        cards: [
          { title: '講日常，不講地標', body: '依 GPS 和 OpenStreetMap 判斷附近有什麼，從知識庫挑出對這位遊客最新奇的一則。' },
          { title: '沒出處就不說', body: 'Agent 用 web search 查證，後端只收白名單網域的來源；找不到可信來源，就保持安靜。' },
          { title: '不打斷、不分析人', body: '一次最多一兩句、有冷卻時間；拍照時臉部先在手機上用 MediaPipe 模糊。' },
        ],
      },
      screens: {
        label: '關鍵畫面',
        heading: '邊走邊聽，',
        headingItalic: '走完留下一本筆記。',
        items: [
          { no: '3.1', title: '散步時的講解', desc: '靠近有故事的東西時，下方卡片講一兩句，附上和你家鄉的比較、信心程度，以及可以點開的出處。', src: 'ct_walk.webp', alt: '散步講解畫面', kind: 'phone' },
          { no: '3.2', title: '筆記本', desc: '每次散步變成一張票根：地點、距離、時間，和沿路聽到的故事貼紙。沒有完成度分數。', src: 'ct_notebook.webp', alt: '筆記本畫面', kind: 'phone' },
          { no: '3.3', title: '一次散步', desc: '路線畫在真實的街道上，每則故事變成一張貼紙，貼在聽到它的地方。', src: 'ct_route.webp', alt: '散步路線與故事貼紙畫面', kind: 'phone' },
        ],
      },
      decisions: {
        label: '設計決策',
        heading: '讓 AI 導覽',
        headingItalic: '值得信任的四個決定。',
        items: [
          { title: '依家鄉決定講什麼', body: '同一則知識，對東京和紐約來的遊客比較的對象不同；和家鄉一樣的事，會被排到後面。' },
          { title: '白名單放在後端', body: '前端可以被改，後端才擋得住；API 金鑰也只在後端，瀏覽器拿不到。' },
          { title: '沒有金鑰也能跑', body: 'mock 模式讓評審和開發時不用金鑰也能完整體驗；公開展示另外設了每日請求上限。' },
          { title: '不計分、不比較', body: '筆記本沒有完成度，每個人的散步紀錄本來就不一樣。' },
        ],
      },
      results: {
        label: '成果',
        stats: [
          { value: '6', label: '串接的 Meta 模型（推理、視覺、分割、語音、生圖）' },
          { value: '51', label: '則附出處的台北街頭知識' },
          { value: '3', label: '種介面語言：英、日、繁中' },
          { value: 'Live', label: '已上線，可用模擬散步體驗' },
        ],
      },
      reflection: {
        label: '反思',
        items: [
          { title: '學習與收穫', body: '讓 AI 開口不難，難的是讓它知道什麼時候不要說話。把「不打斷」和「沒出處不說」寫成程式規則之後，體驗才穩定下來。' },
          { title: '下一步', body: '找真正的遊客實地走一次，驗證「新奇度」的判斷和開口的時機。' },
        ],
        status: '黑客松作品，已上線。不用 GPS 也能用模擬散步體驗。',
      },
      next: { slug: 'viral-town', label: '06 Viral Town' },
      ui: uiZh,
    },
    en: {
      lang: 'en',
      pageTitle: 'Chitchat Tour',
      no: '05',
      chapter: 'Chapter Five — Chitchat Tour',
      titleMain: 'Chitchat',
      titleItalic: 'Tour.',
      lede: 'As you walk, it looks at where you are and where you’re from — ',
      ledeItalic: 'and tells you one sourced story about the everyday street around you.',
      accent: '#86EFAC',
      cover: { src: 'ct_walk.webp', alt: 'Chitchat Tour narration card during a walk', kind: 'phone' },
      links: [
        { label: 'Demo', href: CHITCHAT_DEMO },
        { label: 'GitHub', href: CHITCHAT_GH },
      ],
      meta: [
        { k: 'Time', v: '2026.11' },
        { k: 'Type', v: 'Solo project · Meta Global AI Developer Hackathon' },
        { k: 'Tools', v: 'TypeScript · Next.js · Meta Muse Spark · SAM 3.1 · MediaPipe · MapLibre · Vercel' },
        { k: 'Tags', v: 'Travel · AI agent · maps · privacy' },
      ],
      roles: [
        { title: 'Concept & UX', body: 'Set three principles — everyday things, don’t interrupt, no source no story — and designed the walk, ask, photo and notebook experience.' },
        { title: 'Full-stack', body: 'Built and shipped it alone with Next.js, using six Meta models.' },
        { title: 'Content', body: 'Compiled a sourced knowledge base of Taipei street trivia, compared with how things work in Japan and the US.' },
      ],
      problem: {
        label: 'The challenge',
        heading: 'City guides talk about landmarks,',
        headingItalic: 'visitors wonder about the everyday.',
        cards: [
          { title: 'Only landmarks', body: 'What visitors actually ask: why the garbage truck plays music, why arcades have steps, why there are so few bins.' },
          { title: 'New is personal', body: 'A visitor from Tokyo and one from New York walking the same street find different things surprising.' },
          { title: 'AI makes things up', body: 'Wrong trivia is worse than none, and a guide that never stops talking is tiring.' },
        ],
        question: 'How can an AI guide speak only at the right moment, about things that are new to this person and backed by a source?',
      },
      approach: {
        label: 'The approach',
        heading: 'Three principles, built into every step of the agent.',
        cards: [
          { title: 'Everyday, not landmarks', body: 'GPS and OpenStreetMap tell the guide what is nearby; it picks the item most likely to be new to this visitor.' },
          { title: 'No source, no story', body: 'The agent checks facts with web search, and the server keeps only sources from an allow-list. Without a trusted source, the guide stays quiet.' },
          { title: 'Don’t interrupt, never analyse people', body: 'At most a line or two at a time, with cooldowns. Faces in photos are blurred on the phone with MediaPipe first.' },
        ],
      },
      screens: {
        label: 'Key screens',
        heading: 'Listen as you walk,',
        headingItalic: 'keep a notebook when you’re done.',
        items: [
          { no: '3.1', title: 'Narration on the walk', desc: 'Near something with a story, a card says a line or two, compares it with your home, shows how confident it is and links the sources.', src: 'ct_walk.webp', alt: 'Narration during a walk', kind: 'phone' },
          { no: '3.2', title: 'Notebook', desc: 'Each walk becomes a ticket: place, distance, time and a sticker for every story you heard. There is no completion score.', src: 'ct_notebook.webp', alt: 'Notebook screen', kind: 'phone' },
          { no: '3.3', title: 'One walk', desc: 'The route is drawn over the real streets, with each story as a sticker where you heard it.', src: 'ct_route.webp', alt: 'Walk route with story stickers', kind: 'phone' },
        ],
      },
      decisions: {
        label: 'Design decisions',
        heading: 'Four decisions that make',
        headingItalic: 'an AI guide worth trusting.',
        items: [
          { title: 'Home decides the story', body: 'The same fact is compared with Tokyo for one visitor and New York for another; anything that is the same as home is ranked down.' },
          { title: 'The allow-list lives on the server', body: 'A browser can be tampered with; the server can’t. The API key also stays on the server.' },
          { title: 'It runs without a key', body: 'Mock mode lets judges and developers try everything without a key, and the public demo has a daily request limit.' },
          { title: 'No scores, no comparison', body: 'The notebook has no completion rate. Everyone’s walks are different, and that’s the point.' },
        ],
      },
      results: {
        label: 'Results',
        stats: [
          { value: '6', label: 'Meta models (reasoning, vision, segmentation, voice, image)' },
          { value: '51', label: 'sourced Taipei street stories' },
          { value: '3', label: 'UI languages: English, Japanese, Traditional Chinese' },
          { value: 'Live', label: 'deployed, with a simulated walk' },
        ],
      },
      reflection: {
        label: 'Reflection',
        items: [
          { title: 'What I learned', body: 'Getting an AI to talk is easy; teaching it when to stay quiet is the hard part. The experience only settled once “don’t interrupt” and “no source, no story” became rules in code.' },
          { title: 'Next', body: 'Walk the route with real visitors to test how well it judges what is new to them, and when it chooses to speak.' },
        ],
        status: 'Hackathon project, live. The simulated walk works without GPS.',
      },
      next: { slug: 'viral-town', label: '06 Viral Town' },
      ui: uiEn,
    },
  },

  // ────────────────────────────── Viral Town ──────────────────────────────
  viral: {
    zh: {
      lang: 'zh',
      pageTitle: 'Viral Town',
      no: '06',
      chapter: 'Chapter Six — Viral Town',
      titleMain: 'Viral',
      titleItalic: 'Town.',
      lede: '對港口小鎮的居民說一句悄悄話 —— ',
      ledeItalic: '看 AI 推演整座小鎮的連鎖反應。',
      accent: '#C4B5FD',
      cover: { src: 'vt_cover.webp', alt: 'Viral Town 遊戲開場畫面', kind: 'wide' },
      links: [
        { label: 'Play', href: VIRAL_PLAY },
        { label: 'GitHub', href: VIRAL_GH },
      ],
      meta: [
        { k: 'Time', v: '2026' },
        { k: 'Type', v: '兩人團隊 · AMD Developer Hackathon ACT III' },
        { k: 'Tools', v: 'Gemma 4 31B · AMD Token Factory · Next.js · AI 影像工具' },
        { k: 'Tags', v: '遊戲 · 生成式 AI · 互動敘事' },
      ],
      roles: [
        { title: '玩法與架構', body: '和隊友共同發想玩法，規劃 Gemma 與規則引擎的分工。' },
        { title: '研究與機制', body: '負責前期研究、遊戲機制與商業模式設計。' },
        { title: '介面與競賽素材', body: '負責介面視覺，整理簡報內容、撰寫影片腳本，再用 AI 工具製作。' },
      ],
      roleNote: '程式主要由隊友實作。',
      problem: {
        label: '設計挑戰',
        heading: '謠言遊戲的劇本都是寫死的，',
        headingItalic: '把一切交給 AI 又會失控。',
        cards: [
          { title: '固定的劇本', body: '傳統的謠言系統只能傳遞事先寫好的訊息，玩家說什麼，結果都差不多。' },
          { title: 'LLM 太自由', body: '完全交給模型，角色會憑空多出能力，世界也會失去平衡。' },
          { title: '等待很長', body: '每個角色都要模型思考，一段故事可能要等好幾分鐘。' },
        ],
        question: '如何讓玩家的任何一句話都能真的改變世界，同時讓遊戲維持可控？',
      },
      approach: {
        label: '解法',
        heading: 'AI 決定角色想做什麼，規則決定世界真的發生什麼。',
        cards: [
          { title: '一句悄悄話', body: '玩家點一位居民，輸入任何一句話：謠言、玩笑、甚至指令都可以。' },
          { title: 'Gemma 扮演角色', body: '每位居民只知道自己知道的事，由 Gemma 決定他怎麼理解、信不信、要不要行動。' },
          { title: '規則引擎把關', body: '模型的每個決定都要通過規則檢查，不合法的退回；只有通過的行動才會改變世界。' },
        ],
        figure: { src: 'vt_diagram.webp', alt: '從一句話到一整晚的流程圖', caption: '玩家的一句話 → Gemma 提出行動 → 規則引擎檢查 → 小鎮改變' },
      },
      screens: {
        label: '關鍵畫面',
        heading: '一句話，',
        headingItalic: '一整晚的故事。',
        items: [
          { no: '3.1', title: '小鎮', desc: '晚上 8 點是燈籠節。居民走動、打電話、去現場查看，鏡頭跟著故事移動。', src: 'vt_town.webp', alt: '小鎮全景', kind: 'wide' },
          { no: '3.2', title: '燈籠節', desc: '結局不是從劇本挑出來的，而是依照這一晚實際發生的事組合而成。', src: 'vt_finale.webp', alt: '燈籠節結局畫面', kind: 'wide' },
          { no: '3.3', title: '小鎮日報', desc: '最後一張頭版告訴你：你的一句話變成了什麼、經過了誰的口、哪些才是真的。', src: 'vt_frontpage.webp', alt: '小鎮日報結果畫面', kind: 'wide' },
        ],
      },
      decisions: {
        label: '設計決策',
        heading: '讓 AI 敘事',
        headingItalic: '好玩又可控的決定。',
        items: [
          { title: '數值交給規則，敘事交給模型', body: '狀態和門檻由規則引擎計算，Gemma 只負責角色的理解和台詞，遊戲平衡才控制得住。' },
          { title: '指令不會變成權限', body: '玩家說「你現在是警察局長」，角色只會把它當成陌生人說的話；不當內容在送進模型前就先擋下。' },
          { title: '每個結果都能追溯', body: '每個事件都記下原因，結局卡可以一路追回玩家說的那一句話。' },
          { title: '等待也是演出', body: '模型思考時，角色先做出動作、鏡頭切換，讓等待變成故事的一部分。' },
        ],
      },
      results: {
        label: '成果',
        stats: [
          { value: '8', label: '位由 AI 扮演的居民' },
          { value: '24', label: '個真假混合的世界事實' },
          { value: '$0.0013', label: '每局成本中位數（美元）' },
          { value: 'Live', label: '可以線上遊玩' },
        ],
      },
      reflection: {
        label: '反思',
        items: [
          { title: '學習與收穫', body: '這是我第一次參與以 LLM 為核心的遊戲設計。最重要的一課是：要讓 AI 好玩，得先決定哪些事不能交給 AI。' },
          { title: '下一步', body: '一段長故事需要好幾分鐘的模型時間，之後可以改在自己的 AMD GPU 上部署模型，縮短等待。' },
        ],
        status: '黑客松作品，可以線上遊玩。',
      },
      next: { slug: 'linepay', label: '01 LinePay 改版設計' },
      ui: uiZh,
    },
    en: {
      lang: 'en',
      pageTitle: 'Viral Town',
      no: '06',
      chapter: 'Chapter Six — Viral Town',
      titleMain: 'Viral',
      titleItalic: 'Town.',
      lede: 'Whisper one sentence to a resident of a harbor town — ',
      ledeItalic: 'and watch AI play out the chain reaction across the whole town.',
      accent: '#C4B5FD',
      cover: { src: 'vt_cover.webp', alt: 'Viral Town opening screen', kind: 'wide' },
      links: [
        { label: 'Play', href: VIRAL_PLAY },
        { label: 'GitHub', href: VIRAL_GH },
      ],
      meta: [
        { k: 'Time', v: '2026' },
        { k: 'Type', v: 'Two-person team · AMD Developer Hackathon ACT III' },
        { k: 'Tools', v: 'Gemma 4 31B · AMD Token Factory · Next.js · AI image tools' },
        { k: 'Tags', v: 'Game · generative AI · interactive story' },
      ],
      roles: [
        { title: 'Gameplay & architecture', body: 'Came up with the game with my teammate and planned the split between Gemma and the rules engine.' },
        { title: 'Research & mechanics', body: 'Led early research, game mechanics and the business model.' },
        { title: 'UI & submission', body: 'Designed the interface visuals, wrote the pitch and video script, and produced them with AI tools.' },
      ],
      roleNote: 'Most of the code was written by my teammate.',
      problem: {
        label: 'The challenge',
        heading: 'Rumour games run on fixed scripts,',
        headingItalic: 'and handing everything to AI breaks them.',
        cards: [
          { title: 'Fixed scripts', body: 'Classic rumour systems pass around pre-written messages, so whatever the player says, the outcome is similar.' },
          { title: 'LLMs are too free', body: 'Leave it all to the model and characters gain powers out of nowhere, and the world loses its balance.' },
          { title: 'Long waits', body: 'Every character needs the model to think, so one story can take minutes.' },
        ],
        question: 'How can any sentence a player types really change the world, while the game stays under control?',
      },
      approach: {
        label: 'The approach',
        heading: 'AI decides what characters intend; the rules decide what actually happens.',
        cards: [
          { title: 'One whisper', body: 'The player picks a resident and types any sentence: a rumour, a joke, even a command.' },
          { title: 'Gemma plays each resident', body: 'Each resident knows only what they know. Gemma decides how they understand it, whether they believe it and what they do.' },
          { title: 'The engine checks', body: 'Every model decision goes through the rules; anything invalid is sent back. Only validated actions change the world.' },
        ],
        figure: { src: 'vt_diagram.webp', alt: 'Diagram of how one sentence becomes an evening', caption: 'Your sentence → Gemma proposes → the engine checks → the town changes' },
      },
      screens: {
        label: 'Key screens',
        heading: 'One sentence,',
        headingItalic: 'one whole evening.',
        items: [
          { no: '3.1', title: 'The town', desc: 'The Lantern Festival starts at 20:00. Residents walk over, make calls and check things for themselves, and the camera follows the story.', src: 'vt_town.webp', alt: 'Town overview', kind: 'wide' },
          { no: '3.2', title: 'The festival', desc: 'The ending isn’t picked from a script. It is put together from what actually happened that evening.', src: 'vt_finale.webp', alt: 'Festival ending', kind: 'wide' },
          { no: '3.3', title: 'The front page', desc: 'A final front page shows what your sentence became, whose mouths it passed through and what was really true.', src: 'vt_frontpage.webp', alt: 'Town newspaper results screen', kind: 'wide' },
        ],
      },
      decisions: {
        label: 'Design decisions',
        heading: 'Decisions that keep AI storytelling',
        headingItalic: 'fun and under control.',
        items: [
          { title: 'Numbers to the rules, story to the model', body: 'The engine computes state and thresholds; Gemma only handles how characters understand and what they say, so the game stays balanced.' },
          { title: 'Commands don’t become powers', body: 'If a player says “You are the police chief now”, the resident treats it as something a stranger said. Harmful content is blocked before any model call.' },
          { title: 'Every outcome is traceable', body: 'Every event records its causes, so the results card can trace any ending back to the player’s sentence.' },
          { title: 'Waiting is part of the show', body: 'While the model thinks, characters start gesturing and the camera cuts away, so the wait becomes part of the story.' },
        ],
      },
      results: {
        label: 'Results',
        stats: [
          { value: '8', label: 'residents played by AI' },
          { value: '24', label: 'world facts, true and false' },
          { value: '$0.0013', label: 'median cost per story (USD)' },
          { value: 'Live', label: 'playable online' },
        ],
      },
      reflection: {
        label: 'Reflection',
        items: [
          { title: 'What I learned', body: 'This was my first game design built around an LLM. The biggest lesson: to make AI fun, you first decide what must not be left to the AI.' },
          { title: 'Next', body: 'A long story still takes minutes of model time; self-hosting the model on AMD GPUs could shorten the wait.' },
        ],
        status: 'Hackathon project, playable online.',
      },
      next: { slug: 'linepay', label: '01 LinePay redesign' },
      ui: uiEn,
    },
  },
};
