# Fidgi Grow

An ADHD support app that never mentions ADHD on its cover.

---

## Project Meta

- **Project:** Fidgi Grow — gender-inclusive ADHD support app
- **Course:** 2025 · Interdisciplinary design studio `[待確認課名]`
- **Team:** 5 members — UI design, research, writing, industrial design
- **Duration:** `[待填：幾週]`
- **My role:** UI design · Research & strategy
- **Tools:** Figma · `[其他你用到的]`
- **Tags:** Mobile, Healthcare, ADHD, Inclusive design, Hardware-software integration

---

## My Role

A 5-person team project across UX research, UI design, writing, and industrial design (the physical fidget toy).

My specific contributions:
- **Research synthesis** — compiled the "Real Voice of ADHD" from online communities, organized the findings into the six pain points that drove our design priorities
- **UI design** — `[待填：2–3 個你實際畫的畫面。例如「onboarding flow 的 gender-inclusive registration」、「calendar 頁的 hormone phase 整合」、「tracking system 的 gamified overview」]`
- **Strategy discussions** — participated in defining the "optimized for ADHD women, built for everyone" positioning, which shaped how we framed the product's entire narrative

Team-level work (all 5 members): concept ideation, persona development, feature prioritization, design iteration.

Industrial design of the physical fidget toy was led by another team member; I contributed to how the toy's data integrated into the app's UI.

---

## The Question

Most productivity apps aimed at ADHD users announce it on the cover. Notion for ADHD. Tiimo for ADHD. Inflow for ADHD.

We spent the first week of the project assuming we'd do the same — and then the research broke that assumption.

---

## 1. What the research showed

### Women's ADHD is a gendered blind spot

ADHD in women isn't rarer — it's under-recognized. The childhood diagnosis ratio skews male 2:1, but in adulthood the ratio balances out. That gap is a story about what gets seen, not what exists. Women's symptoms tend to be internalized rather than hyperactive: distractibility, forgetfulness, planning paralysis. These look less like "ADHD" and more like "bad at life" — which is exactly how many women come to describe themselves.

### The voices that changed our direction

We collected posts from Chinese-language ADHD communities (Dcard, PTT, online forums). A recurring pattern emerged:

> 「我就是那個從小到大注意力都沒在線上的人。」
>
> 「我以為自己只是懶惰、沒有紀律——工作被辭退三次，才被朋友帶去身心科。」
>
> 「這個描述完全符合我，但我還是怕自己只是想太多，根本沒有 ADHD。」

A clear pattern: many women suspect, then doubt, then dismiss. They won't download an app labeled "ADHD" — doing so would be admitting something they've been trained to see as a character flaw.

This was the research moment that changed our brief.

### The six pain points

From the voices, we organized six recurring challenges, each of which mapped to a later design feature:

| Pain point | What it looks like |
|---|---|
| **Weak working memory** | Plans vanish the moment you stop actively holding them |
| **Difference in gender presentation** | Symptoms read as inattentive, so no one (including the user) names them |
| **Misinterpretation** | Executive function failures mistaken for laziness, eroding self-confidence |
| **Time blindness** | Tasks take 3× longer than estimated, every time |
| **Daily forgetfulness** | Appointments, bills, promises — gone |
| **Planning burnout** | The effort of organizing thought itself becomes the exhausting part |

---

## 2. The strategic decision

After the research, the team landed on a positioning statement that shaped every subsequent design choice:

> **Optimized for ADHD women. Built for everyone.**

We chose not to put ADHD in the product name or the front-page copy.

The reasoning — developed across several team discussions I participated in — had two parts:

**Empathy reason:** Many of our target users don't yet know they have ADHD. Labelling the app would activate the very self-doubt we were trying to relieve. A woman quietly wondering if she's "just bad at life" isn't going to search for "ADHD app."

**Strategic reason:** A neurotypical-friendly productivity app with ADHD-informed design serves both populations. An ADHD-branded app only serves the already-diagnosed. Most competitors had made the second choice.

This is the spine of the whole project. Every feature below exists because we committed to this position.

---

## 3. Three design decisions that carry the strategy

The app has more features than this — task management, educational blogs, widgets, a cycle tracker (full list below). But these three are the ones where the "for ADHD women, for everyone" strategy shows up most clearly in the interface.

### 3.1 Gender-inclusive registration

`[待填：插入 registration flow 的三張截圖]`

Onboarding asks for sex (woman / man / trans woman / trans man), then optionally logs the user's last menstrual cycle.

Why this matters as a design decision:

- **For women with ADHD**, hormone fluctuations measurably affect attention, emotional regulation, and executive function. Ignoring this is a common failure mode of generic productivity apps.
- **For trans users**, the four-option sex field (rather than a male/female binary) signals that the product was designed with them in mind, not retrofitted.
- **The skip button is non-negotiable.** Forcing users to disclose hormone data before they've earned any value from the app would break trust immediately.

The onboarding is the first place the strategy becomes tangible — we're asking for information most productivity apps don't ask, while being explicit that you don't have to share it.

### 3.2 Hormone-aware calendar

`[待填：插入 calendar 頁截圖 + hormone phase close-up]`

The calendar doesn't just show tasks — it shows hormone phase alongside them.

When the user enters the luteal phase (often associated with heightened inattention and emotional dysregulation for ADHD women), the calendar surfaces a gentle acknowledgment: "You'll likely be more emotional than usual. Be nicer to yourself."

What we were trying to avoid: making this feel like a warning or a disability notice. What we wanted: something closer to a weather forecast — information that helps you plan, without telling you how to feel.

Design trade-offs we had to navigate:

- **Visibility vs. privacy.** The hormone panel is easy to reach but not front and center. Someone using the app at work shouldn't have their cycle plastered across the home screen.
- **Informative vs. prescriptive.** We only tell users what's likely, never what they should do. The app doesn't say "take it easy today" — it gives them data and lets them decide.

### 3.3 Fidget toy + gamified tracking

`[待填：插入 tracking system 三張截圖 + fidget toy 實體照]`

Fidgeting is a common self-regulation behaviour for ADHD — but most productivity apps treat it as a distraction to eliminate. We wanted to do the opposite: let fidgeting count as engagement.

The system works in two layers:
1. A **physical fidget toy** (designed by our industrial design teammate) with embedded magnets / NFC, attached to the back of the phone.
2. The app detects fidget movement and **feeds a virtual hamster avatar**. Task completion evolves the avatar and unlocks new skins.

The design logic: reward the behaviour that actually happens, rather than punish the behaviour the user can't help. Positive reinforcement without productivity guilt is one of the project's three core design values — the app never shames the user for missing a day or losing a streak.

My contribution to this feature was on the app side: designing how the toy's signal integrated into the tracking UI — the weekly overview, the collection system, and the achievement badges.

---

## 4. Other features (in brief)

To keep this case study focused, I'm listing the rest briefly rather than walking through each:

- **Smart Task Breakdown** — auto-decomposes tasks into smaller steps, reducing the activation energy to start
- **Customizable widgets** — keeps tasks visible outside the app to counter working memory gaps
- **Educational blogs** — clarify misconceptions about ADHD and gently encourage users to seek formal diagnosis when patterns resonate
- **Cycle Record** — tracks menstrual flow, symptoms, and ADHD-adjacent experiences like brain fog, anxiety, trouble organizing

Each exists to address a specific pain point from Section 1. Full details in the `[待填：Figma 連結]`.

---

## 5. User testing

We ran qualitative testing with participants who self-identify as having ADHD. A full SUS-style quantitative comparison wasn't in scope for this project — what we were testing was whether the product's core premise resonated.

One participant response captured what we were going for:

> *"As someone with ADHD, I think this design is incredibly ADHD-friendly. The toy and hormone function differentiate the app from other productivity apps."*

The second sentence is what mattered to us most. The differentiation we'd been arguing about in team meetings for weeks had actually landed.

---

## 6. Design values

The whole product ran on three values we agreed on early and kept returning to:

- **Cognitive accessibility** — bright colours, high contrast, clear colour coding. For ADHD or dyslexia traits, immediate visual cues outperform minimalist low-contrast interfaces. (Which meant resisting the urge to make it look like a generic Scandinavian wellness app.)
- **Positive reinforcement** — no streaks that punish you for missing a day. No guilt trips for overdue tasks. Gamification as gentle motivation, not surveillance.
- **Readability** — larger, rounded typography to reduce visual strain during attention fatigue.

---

## 7. Reflection

**What the project taught me.**

The most valuable moment of the project wasn't a design decision — it was the research finding that forced us to rewrite our brief. We'd started assuming we were building "an ADHD app for women." We ended up building "a productivity app that happens to be ADHD-informed" — because we learned that the first framing would have excluded the users we most wanted to reach.

The lesson: research isn't a box to check before design starts. It can — and should — reshape the fundamental premise of what you're making.

**What I'd do differently.**

We didn't run a head-to-head test against a competitor app (Todoist, Tiimo) to validate that our specific design choices made the ADHD-women use case measurably easier. That's the study I'd run next — and without it, the strongest claim I can make is "our target users found it differentiated," not "our target users found it more effective." Honest case studies say both.

**What I'd bring into my next project.**

Inclusive design decisions (like the four-option sex field) are cheap to make at design time and costly to retrofit later. This project pushed me to make them at the start, not as a later accessibility pass.

---

## 8. Credits & Disclaimer

Team project, 2025. Industrial design (fidget toy) led by Pei-Hua. UI design led by Raven and Jielle, myself contributing `[待填：具體的頁面 / flow]`. Writing led by Jidapa. My specific contributions are listed in the "My Role" section.

This is an independent academic design project. It is **not a medical product** and is not intended to diagnose, treat, or substitute professional care for ADHD. Users who recognize their patterns in the app's content are always encouraged to seek formal evaluation from qualified healthcare providers.

---

## ✏️ 需要你補的部分

只剩三個具體資訊：

1. **My Role 那段**：你實際畫了哪 2–3 個畫面？（這讓你的貢獻具體化）
2. **課名 + 時長**（Project Meta）
3. **Final Design 段落的三處 `[待填：插入 XX 截圖]`**：把報告裡對應的 mockup 圖抓出來放進網站

其他內容都是根據你報告寫的定稿，可以直接上線。
