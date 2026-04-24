# Fidgi Grow

An ADHD support app that keeps "ADHD" out of its name.

---

## Project Meta

- **Project:** Fidgi Grow — a hormone-aware, gender-inclusive ADHD support app
- **Course:** 2025 · Interdisciplinary design studio `[待確認課名]`
- **Team:** 5 members — UI design, research, writing, industrial design
- **Duration:** `[待填：幾週]`
- **My role:** UI design · Research & strategy
- **Tools:** Figma · `[其他你用到的]`
- **Tags:** Mobile, Healthcare, ADHD, Inclusive design, Hardware-software integration

---

## My Role

A 5-person team project spanning UX research, UI design, writing, and industrial design (the physical fidget toy).

My specific contributions:
- **Research synthesis** — organized findings into the six pain points that drove the design priorities, and helped shape the "Real Voice of ADHD" evidence that anchored our brief
- **UI design** — `[待填：2–3 個你實際畫的畫面，例如「registration 的 gender-inclusive 三頁 flow」、「calendar 頁的 hormone phase 整合」、「tracking system 的 gamified overview」]`
- **Strategy discussions** — participated in shaping the "Optimized for ADHD women, built for everyone" positioning, which defined how the product framed itself

Team-level work (all 5 members): concept ideation, persona development, feature prioritization, design iteration.

The physical fidget toy was led by our industrial design teammate; I contributed to how the toy's data integrated into the app UI.

---

## The Question

Most productivity apps aimed at ADHD users announce it on the cover. Notion for ADHD. Tiimo for ADHD. Inflow for ADHD.

We spent the first week assuming we'd do the same — and then the research broke that assumption.

---

## 1. The landscape

### A saturated market with a specific blind spot

Before we could justify building anything, we looked at what already existed. The productivity market is crowded with task and focus tools (Todoist, Notion), and there's a smaller neurodivergent-specific segment (Inflow, Tiimo). Both are useful, but they share the same shape of gap: they treat ADHD symptoms as static and universal, and rarely account for **hormonal fluctuation** or **internalized symptom patterns** — exactly the things that make ADHD look different in women.

| Competitor category | Primary strength | Primary weakness |
|---|---|---|
| **Robust platforms** (Todoist, Notion) | Flexible, powerful, huge user base | Too overwhelming for executive dysfunction; no ADHD-specific tooling |
| **Neurodivergent tools** (Inflow, Tiimo) | Relevant features — timers, routines, education | Expensive; less focus on the mental load of inattentive presentations |
| **Single-purpose** (Forest) | Excellent at one thing | Forces users to juggle multiple apps |

### Women's ADHD is under-recognized, not absent

ADHD in women isn't rarer — it's under-diagnosed. Childhood diagnosis skews male roughly 2:1; in adulthood the ratio evens out. That gap is a story about what gets noticed, not what exists.

Women's symptoms tend to present as **internalized** rather than hyperactive: distractibility, forgetfulness, planning paralysis. They're also **emotionally masked**, and frequently dismissed as personality or "hormonal." The result is that the symptoms look less like "ADHD" than like "bad at life" — which is exactly how many women end up describing themselves.

The design question we ended up with:

> **How might we design adaptive support for women with ADHD that responds to changing cognitive and emotional states across work, study, and daily life?**

### The voices that shaped the brief

We gathered accounts from people with ADHD to ground the project in actual language. A pattern kept repeating:

> *"I'm quiet and seem calm, but my mind is always running — like too many browser tabs open at once."*
>
> *"I thought I was lazy and undisciplined. After years of mistakes and being fired, I finally realized my attention was never really online."*
>
> *"This fits me perfectly, but I'm still scared I'm just overthinking it and don't actually have ADHD."*
>
> *"I can see what I need to do, but I can't find the key to start. The anxiety builds, but my body won't move."*

A clear sequence: suspect, then doubt, then dismiss. Someone who's been trained to read her own symptoms as a character flaw isn't going to download an app labeled "ADHD." This was the research moment that changed our brief.

### Persona

We built around a composite persona — a 24-year-old creative worker, full of ideas, but with unstable daily efficiency. Her desk is often messy, with too many windows open at once. Her quote captured the whole brief in one sentence:

> *"I know what I should do, but I just can't start until the last minute."*

Her goals were modest: get started on boring-but-necessary tasks, focus on one thing at a time, see some feedback after each task. Her emotional needs mattered more than her feature list — wanting to feel in control instead of rushing, and needing small wins to stay motivated.

### The six pain points

From the voices and persona, we organized six recurring challenges, each of which later mapped to a feature:

| Pain point | What it looks like |
|---|---|
| **Weak working memory** | Plans and detailed steps vanish the moment you stop actively holding them |
| **Difference in gender presentation** | Symptoms read as inattentive rather than hyperactive, so they go unnamed |
| **Misinterpretation** | Executive function failures mistaken for laziness or stupidity, eroding self-confidence |
| **Time blindness** | Inability to accurately sense how long tasks will take |
| **Daily forgetfulness** | Chronic struggles with remembering daily tasks, items, and appointments |
| **Planning burnout** | Exhaustion from the mental effort of organizing thought itself |

---

## 2. The strategic decision

After the research, the team landed on a positioning statement that shaped every subsequent design choice:

> **Optimized for ADHD women. Built for everyone.**

We chose not to put ADHD in the product name or on the front-page copy. The reasoning had two sides:

**Empathy.** Many of our target users don't yet know they have ADHD. Labelling the app would activate the very self-doubt we were trying to relieve. Someone quietly wondering whether she's "just bad at life" isn't going to search for an ADHD app.

**Strategy.** A productivity app with ADHD-informed design serves both populations — the diagnosed and the not-yet-diagnosed. An ADHD-branded app only serves the first. Most competitors had made the second choice.

The goal we agreed on: make the solutions so effective that users **naturally notice their own cognitive patterns** through use, and feel empowered rather than labeled.

This is the spine of the whole project. Every feature below exists because we committed to this position.

---

## 3. Three design decisions that carry the strategy

The app has more features than this — task management, widgets, educational blogs, a cycle tracker (list below). But these three are where the "for ADHD women, for everyone" strategy shows up most visibly in the interface.

### 3.1 Gender-inclusive registration

`[待填：插入 registration flow 的三張截圖]`

Onboarding asks for sex (woman / man / trans woman / trans man), then optionally logs the user's last menstrual cycle before generating a personalized plan.

Why this is a design decision, not just a form:

- **For women with ADHD**, hormone fluctuations measurably affect attention, emotional regulation, and executive function. Ignoring this is a standard failure mode of generic productivity apps.
- **For trans users**, the four-option field (rather than a male/female binary) signals that the product was designed with them in mind, not retrofitted.
- **The skip button is non-negotiable.** Forcing users to disclose hormone data before earning any value from the app would break trust at the door.

Onboarding is the first place the strategy becomes tangible — we're asking for information most productivity apps don't, while making it explicit that you don't have to share it.

### 3.2 Hormone-aware calendar

`[待填：插入 calendar 頁截圖 + hormone phase close-up]`

The calendar doesn't just show tasks — it shows hormone phase alongside them, with clear color coding separating due, overdue, and completed items to reduce cognitive load and decision fatigue.

When the user enters the luteal phase (often associated with heightened inattention, emotional dysregulation, and forgetfulness for women with ADHD), the calendar surfaces a gentle acknowledgment:

> *"You will likely be more emotional than usual. Be nicer to yourself."*

What we wanted to avoid: making this feel like a warning or a disability notice.
What we wanted instead: something closer to a weather forecast — information that helps you plan, without telling you how to feel.

Trade-offs we had to navigate:

- **Visibility vs. privacy.** The hormone panel is easy to reach but not front and centre. Someone using the app at work shouldn't have their cycle plastered across the home screen.
- **Informative vs. prescriptive.** The app only tells users what's *likely*, never what they should do. It doesn't say "take it easy today" — it gives them the data and lets them decide.

### 3.3 Fidget toy

`[待填：插入 fidget toy 實體照]`

Fidgeting is a common self-regulation behaviour for ADHD — but most productivity apps treat it as a distraction to eliminate. We wanted the opposite: let fidgeting count as engagement. The hardware makes that possible.

The physical fidget toy (designed by our industrial design teammate) attaches to the back of the phone via magnetic snap and mechanical clip for quick, secure swapping. Inside the base case: embedded magnets and NFC zones. Connectivity: NFC or magnetic reed sensing. The toy comes in multiple colour profiles, which also unlock as the user levels up inside the app.

The design logic: meet users where they already are. Fidgeting isn't a failure state — it's something many ADHD users do naturally to regulate focus. Building hardware around that behaviour removes the shame, and gives the app something to work with.

### 3.4 Gamified tracking system

`[待填：插入 tracking system 三張截圖]`

The tracking system is the app's side of the fidget toy connection. When the toy detects movement, it feeds the user's **virtual hamster avatar** — sitting at the centre of the home screen with a focus timer running around it. The avatar is the main feedback loop the user sees while working.

Behind that home screen, the system tracks two layers of progress:

- **Weekly overview** — a bar chart of fidget cycles logged per day, alongside total cycles and hours focused for the week. One bar highlights the current day; the pattern across the week makes attention habits visible without requiring conscious logging.
- **Collections + achievements** — hamster skins unlock as the user progresses: Default, Painting, Amazing, Fast Eating, Skating, and more. Achievements work as milestone markers, not streaks. Hitting a level doesn't punish you for the days you missed getting there.

My contribution was specifically on this side of the system — designing the weekly overview layout, the collection grid, and how achievement states communicated progress without tipping into pressure.

---

## 4. Other features

### 4.1 Manage Task (Smart Breakdown)

`[待填：插入 manage task 三張截圖]`

The task list is the day's entry point. Today's tasks appear with colour-coded status (tracking, overdue, complete), and each task can be expanded into a focus session: the hamster avatar reappears inside a focus timer, with quick access to "Take a Break" and "Take a Note" without leaving the screen.

The core feature here is **Smart Breakdown**: the system automatically deconstructs a complex task into smaller steps, which the user can then customize. The goal is to eliminate the activation energy problem — where the task feels so large that starting it is the hardest part. With sub-steps already laid out, the question shifts from "how do I even begin this" to "which small thing do I do first."

Progress is shown as a percentage ring with deadline and time-spent data alongside it, so the user can see how their estimate compares to reality — which over time builds a more accurate sense of how long things actually take (directly addressing time blindness).

**Pain points addressed:** Daily Forgetfulness · Planning Burnout · Time Blindness

### 4.2 Customizable widgets

`[待填：插入 widget 三張截圖（含 lock screen 實機）]`

The widget system lets users see tasks, the fidget timer, cycle tracker, and mood without opening the app. This matters because one of the core failure modes for ADHD users is out-of-sight / out-of-mind: an app you have to actively open to remember is an app you'll forget to open.

Users can place and resize three widget types independently:

- **Fidget Tracker** — shows the current focus ring and running timer
- **Task Tracker** — shows today's tasks with colour-coded status and a "Start Tracking" button
- **Calendar** — shows the month view with due / overdue / finished colour coding

The lock screen implementation (shown in the mockup with the physical phone) demonstrates how this looks in practice: a task card with a running timer and status badge, a mood note for the day, and the task list — all visible before unlocking. For a user whose working memory can't hold plans between glances, having the plan persist on the surface of the phone is structural, not cosmetic.

**Pain points addressed:** Weak Working Memory · Daily Forgetfulness

### 4.3 Educational blogs and Cycle Record

Two supporting features, briefly:

- **Educational blogs** — clarify misconceptions about ADHD (executive dysfunction, rejection sensitivity) and gently encourage users to seek formal diagnosis when the patterns resonate. Positioned inside the app so they surface at the right moment, not as a separate step the user has to seek out.
- **Cycle Record** — logs menstrual flow and today's symptoms (inattention spikes, emotional dysregulation, forgetfulness), feeding into the calendar's hormone-phase layer. Users can select from common symptoms or add their own.

Each addresses a specific pain point from Section 1. Full prototype: `[待填：Figma 連結]`.

---

## 5. Design iteration

`[待填：插入 before / after iteration 圖]`

An earlier version of the app leaned pink and soft, with a feed-style home screen mixing smart reminders, hormone tracker, a social community, and blog posts. We rebuilt the visual system around the three design values below: higher-contrast blue and yellow, a focus-forward home screen anchored by the hamster avatar and a focus timer, and a cleaner task list. The iteration sharpened what the app was *for* — less wellness-feed, more daily companion.

---

## 6. User testing

We ran qualitative testing with participants who self-identify as having ADHD. A full SUS-style quantitative comparison wasn't in scope — what we were testing was whether the product's core premise resonated.

One participant response captured what we were going for:

> *"As someone with ADHD, I think this design is incredibly ADHD-friendly. I believe it can be a huge help in reducing distractions and managing my day-to-day. The toy and hormone function differentiate the app than other productivity apps."*

The last sentence is what mattered to us most. The differentiation we'd been arguing about in team meetings for weeks had actually landed.

---

## 7. Design values

The whole product ran on three values we agreed on early and kept returning to:

- **Cognitive accessibility** — bright colours, high contrast, and clear colour coding to reduce cognitive load and support quick visual recognition. For users with ADHD or dyslexia traits, immediate visual cues outperform minimal, low-contrast interfaces. (Which meant resisting the urge to make it look like a generic Scandinavian wellness app.)
- **Positive reinforcement** — gamified elements and collectible characters as gentle motivation, not surveillance. No streaks that punish you for missing a day. The design prioritizes encouragement and consistency over pressure or productivity guilt.
- **Readability** — larger, rounded typography to reduce visual strain during attention fatigue, supporting users dealing with reading difficulty or cognitive overload.

---

## 8. Reflection

**What the project taught me.**

The most valuable moment wasn't a design decision — it was the research finding that forced us to rewrite our brief. We'd started assuming we were building "an ADHD app for women." We ended up building "a productivity app that happens to be ADHD-informed" — because we'd learned that the first framing would have excluded the users we most wanted to reach.

The lesson: research isn't a box to check before design starts. It can — and should — reshape the fundamental premise of what you're making.

**What I'd do differently.**

We didn't run a head-to-head test against a competitor (Todoist, Tiimo) to validate that our specific design choices made the ADHD-women use case measurably easier. That's the study I'd run next — and without it, the honest version of our claim is "our target users found it differentiated," not "our target users found it more effective." Good case studies say both.

**What I'd bring into my next project.**

Inclusive design decisions (like the four-option sex field) are cheap to make at design time and expensive to retrofit later. This project pushed me to make them at the start, not as a later accessibility pass.

---

## 9. Credits & Disclaimer

Team project, 2025. Industrial design (fidget toy) led by Pei-Hua. UI design led by Raven and Jielle, with my contribution on `[待填：具體的頁面 / flow]`. Writing led by Jidapa. My specific contributions are listed in the "My Role" section.

This is an independent academic design project. It is **not a medical product** and is not intended to diagnose, treat, or substitute professional care for ADHD. Users who recognize their patterns in the app's content are always encouraged to seek formal evaluation from qualified healthcare providers.

---

## Links

- **UI Prototype (Figma):** `[待填：從報告最後一頁貼上 Figma URL]`
- **Fidget Toy Demonstration:** `[待填：從報告最後一頁貼上 Google Drive URL]`
- **Prototype Video:** `[待填：從報告最後一頁貼上 Google Drive URL]`

---

## ✏️ 還需要你補的資訊

1. **My Role**：你實際畫了哪 2–3 個畫面？（這讓貢獻具體化）
2. **Project Meta**：課名 + 時長
3. **截圖**：Registration flow、Calendar 頁、Tracking system、Fidget toy 實體照、Design iteration 的 before/after
4. **連結**：報告最後一頁有附 UI prototype、Fidget Toy Demo、Prototype Video 三條 URL，可以直接貼進 Links 區塊
