import type { ChallengeDay } from "./types";

export const challengeDataBasicEN: ChallengeDay[] = [
  {
    day: 0,
    title: "Welcome to the challenge",
    subject: "28 days, 5–7 minutes a day. Let's start.",
    preheader: "This isn't a course. It's a habit.",
    concept: [
      "Most people try AI by typing something into ChatGPT once, getting a mediocre result, and closing the tab. This won't be that.",
      "This challenge has a different approach: instead of learning about AI, you'll use AI every day on things you already do. Small steps, every day, no overwhelm.",
      "Habit-building research shows that tiny daily actions outperform intensive one-time sessions. You don't become a better communicator by taking a weekend workshop — you become one by writing and speaking every day. The same principle applies to AI. Familiarity comes from repeated small contact, not from reading a 50-page guide.",
      [
        "5–7 minutes a day — that's all you need",
        "One topic or one task per day",
        "You save results, iterate, and build on what you've done",
        "No prior experience required — just willingness to try",
        "Each day builds on the previous one",
      ],
      "The challenge is structured in four weeks. Week 1 is about mindset and your first real outputs. Week 2 is about prompting as a skill. Week 3 is about building habits and identifying where AI fits your work. Week 4 is about creating a system that lasts after the challenge ends.",
      "You'll notice that many days feel deceptively simple. That's intentional. The goal isn't complexity — it's consistency. A small insight you actually apply is worth more than a sophisticated framework you read and forget.",
      "There's no grading, no test, no right or wrong answer. Your only job is to show up, try the task, and notice what happens. Over 28 days, that adds up to something real.",
      "Today is intentionally simple. The goal is to start — not to understand everything right away.",
    ],
    taskIntro: "Before we begin, one small task. Take a moment and write down:",
    taskItems: [
      "3 things you do repeatedly at work (or in your daily life) — weekly or daily",
      "Even mundane things count: replying to emails, prepping for meetings, writing summaries, creating reports",
      "Save them in Notion, Google Docs, or Apple Notes — we'll come back to them",
    ],
    taskType: "ol",
    taskFallback:
      "Input: Thinking about what I do repeatedly at work.\nAI output: Here's an example of what your list might look like — writing a weekly report for my manager, answering recurring client questions, preparing meeting notes, summarizing campaign results, reviewing and editing colleagues' copy.",
    taskExample:
      "Input (your list): 1. I write reports every week. 2. I answer the same questions by email over and over. 3. I put together meeting agendas.\nAI output: These are exactly the tasks where AI can save the most time. Reports can be generated from data, emails can be templated, and agendas can be structured automatically.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow we look at why AI is more than a faster Google.",
  },
  {
    day: 1,
    title: "AI isn't just a faster Google",
    subject: "A different mindset changes everything",
    preheader: "Leverage, not speed — that's the approach.",
    concept: [
      "Most people use AI like a search engine: type a question, get an answer, move on. That works — but it uses a fraction of what AI can actually do.",
      "The key mindset shift: AI isn't a tool for speed. It's a tool for leverage — for getting dramatically better results with the same or less effort.",
      "What does that look like in practice? Instead of 'how do I write this email faster,' you ask: 'what if I didn't have to write this email at all?' Or: 'how can I write this email so it actually gets the result I want?' The question changes — and so does the answer.",
      [
        "Speed: doing the same thing faster",
        "Leverage: achieving a result that otherwise wouldn't be possible",
        "Mindset: AI as a collaborator, not a shortcut",
        "Scale: doing at once what used to take days",
      ],
      "Think about the tools that changed your work before AI — spreadsheets, email, search engines. None of them were 'just faster' versions of what came before. They made entirely new things possible. AI is the same kind of shift, and most people are still using it like it's just a faster typewriter.",
      "The leverage mindset asks different questions. Not 'can AI help me write this report?' but 'can AI help me understand what belongs in this report that I'd miss on my own?' Not 'can AI draft this email?' but 'can AI help me anticipate what the recipient actually needs to hear?'",
      "This shift takes practice. You won't feel it after one session. But by the end of this week, the difference between speed-thinking and leverage-thinking will start to become visible in how you interact with AI — and in the quality of what you get back.",
      "Skipping this mindset shift is the main reason most people 'try AI and then drop it.' They don't see the leverage — they just see that the first result wasn't good enough.",
    ],
    taskIntro:
      "Take one task from your list yesterday and think about it from two angles:",
    taskItems: [
      "How could AI help me do this task faster? (speed)",
      "How could AI help me get a better result than I'd get on my own? (leverage)",
      "Write down both answers — even if the second one sounds unrealistic",
    ],
    taskType: "ol",
    taskPrompt:
      "I do [task name]. How could AI help me achieve a better result than if I did it myself — not just faster?",
    taskFallback:
      "Input: I write weekly reports for my manager. How could AI help me get a better result, not just do it faster?\nAI output: Speed: AI writes the report structure for you. Leverage: AI can analyze the data and suggest what to highlight — like a trend you might have missed, or a week-over-week comparison your manager always wants to see.",
    taskExample:
      "Input: I prepare materials for meetings. How can AI help me do it better, not just faster?\nAI output: Instead of building an agenda from scratch, AI can propose a structure based on the meeting goal, anticipate attendee questions and prep answers, or flag which items from the last meeting still need a follow-up.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow we look at what AI can and can't actually do.",
  },
  {
    day: 2,
    title: "What AI can and can't do",
    subject: "Realistic expectations = fewer disappointments",
    preheader: "AI isn't all-knowing. And that's fine.",
    concept: [
      "One of the biggest mistakes when working with AI is having expectations that are too high — or too low. Both lead to the same result: not using AI effectively.",
      "The people who get frustrated with AI usually fall into one of two camps: those who expect it to be perfect and give up when it isn't, and those who assume it can't help and never really try. Realistic expectations are the foundation of everything else.",
      "What AI is genuinely good at:",
      [
        "Structuring and rewriting text",
        "Generating variations, ideas, and drafts",
        "Summarizing long documents",
        "Explaining complex things simply",
        "Assisting with repetitive tasks",
        "Processing large amounts of text quickly",
      ],
      "What AI can't do or does poorly:",
      [
        "Access the internet in real time (without special tools)",
        "Remember past conversations (unless you set it up)",
        "Always tell the truth — AI can confidently make things up",
        "Understand your context unless you provide it",
        "Replace expert judgment in high-stakes areas",
      ],
      "The gap between these two lists is where most frustration lives. Someone asks AI to fact-check their research and gets confident-sounding errors. Someone else expects AI to understand their company culture without being told anything about it. Neither outcome is AI's fault — it's a mismatch between capability and expectation.",
      "One of the most important habits you'll build in this challenge is verification. AI is not an authority — it's a very capable drafting partner. You are still the expert on your work, your context, and your judgment. AI fills in the scaffolding; you provide the substance.",
      "The key principle: AI is your best collaborator when you know what you want — and you verify what you get.",
    ],
    taskIntro:
      "Think of one task where you're unsure whether AI would help. Test it:",
    taskItems: [
      "Pick a task you're skeptical about or where AI hasn't worked for you before",
      "Write a simple prompt and see what you get",
      "Evaluate: was it useful? Where did AI fall short? What would have helped?",
    ],
    taskType: "ol",
    taskPrompt:
      "I need help with [task]. I have [what you're working with]. The result should be [what you need].",
    taskFallback:
      "Input: I need help responding to a client complaint. I have the client's email. The result should be professional and empathetic.\nAI output: Dear [Client], thank you for your feedback. We sincerely apologize for the inconvenience and understand your frustration. We are looking into the situation and will follow up with a resolution within 3 business days.",
    taskExample:
      "Input: I need to summarize a 4-page report into 5 sentences for my manager.\nAI output: [A 5-sentence summary with key figures and conclusions — AI handles this well when given a clear instruction and a specific format.]",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow is hands-on — you'll tell AI what you do at work and let it suggest where it can help.",
  },
  {
    day: 3,
    title: "Your first real AI output",
    subject: "Describe what you do — get suggestions on where AI helps",
    preheader: "A practical day. Output guaranteed.",
    concept: [
      "Today you'll describe your work to AI — not vaguely, but specifically, with real context.",
      "Why does this matter? Because AI without context gives generic answers. AI with your context gives answers you can actually use.",
      "There's a pattern that shows up with almost every new AI user: the first prompt is vague, the result is generic, and the conclusion is 'AI can't help me with my work.' What's actually happening is that AI got no information to work with. It's like asking a new colleague to fix a problem without telling them what the problem is, who the client is, or what outcome you need.",
      [
        "Generic prompt → generic output → low usefulness",
        "Specific prompt with context → relevant output → immediately actionable",
        "Your role, tasks, and goals are the context AI is missing",
        "You only need to provide this once — then AI works with it throughout the conversation",
      ],
      "Today is about building that foundation. When you describe your work clearly, AI can make specific, relevant suggestions — not textbook examples. The output you get today might be the most useful thing you save from this entire challenge.",
      "The goal isn't to produce a perfect document. It's to have a real exchange with AI about your actual work — and to see what comes back when you give it something real to work with. Most people are surprised by how relevant the suggestions get when context is actually there.",
      "This task has two parts: first you tell AI about what you do, then you ask it where it can help. Save the result — we'll come back to it.",
    ],
    taskIntro: "Follow these steps:",
    taskItems: [
      "Open Claude, ChatGPT, or Gemini",
      "Write a prompt using the template below",
      "Save the output — the list of areas where AI suggested it can help",
    ],
    taskType: "ol",
    taskPrompt:
      "I work as [your role or field]. My regular tasks include: [list 3–5 specific tasks]. Suggest 5 concrete ways AI could help me — not in general, but specifically for my tasks.",
    taskFallback:
      "Input: I work as a marketing coordinator. My regular tasks include: writing social media posts, preparing newsletters, summarizing campaign results, communicating with our agency.\nAI output: 1. Social posts: I'll draft 5 variations from a single piece of information. 2. Newsletters: I'll write the structure and a first draft from your brief. 3. Campaign summaries: give me the numbers and I'll write the commentary. 4. Agency communication: I'll help you frame a brief or feedback clearly. 5. Content planning: I'll suggest a month of topics based on your goals.",
    taskExample:
      "Input: I work as a project manager. Tasks: running meetings, writing status updates, communicating with the team, tracking deadlines.\nAI output: 1. Meeting agenda from the meeting goal. 2. Status draft from your notes. 3. Templates for recurring emails. 4. Structuring tasks into a clear list. 5. Prep materials for retrospectives.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll learn what makes the biggest difference between a good prompt and a bad one.",
  },
  {
    day: 4,
    title: "Good prompts vs. bad prompts",
    subject: "What makes the biggest difference",
    preheader: "One detail changes the entire result.",
    concept: [
      "In most cases, a poor AI result has one cause: a poor prompt. Not a poor AI.",
      "This is both reassuring and empowering. It means the quality of what you get is largely in your control — and improving it is a learnable skill. Prompting is not about being clever or technical. It's about clarity: knowing what you want and being able to say it.",
      "What makes a prompt bad:",
      [
        "Too vague: 'write me an email'",
        "No context: AI doesn't know who it's for, why, or what tone to use",
        "No format: AI doesn't know how long or how structured",
        "No goal: AI doesn't know what the output needs to achieve",
      ],
      "What makes a prompt good:",
      [
        "Specific: 'write me an email for a client who's waiting on a quote'",
        "Has context: 'the client is a small business, expecting a price by end of week'",
        "Has format: 'short, max 5 sentences, friendly tone'",
        "Has a goal: 'I want the client to know we're working on their quote'",
      ],
      "Think of writing a prompt like briefing a smart contractor. If you say 'build me something,' you'll get something generic. If you say 'build me a two-shelf wooden storage unit for a home office, 80cm wide, light oak finish, no hardware visible' — you get something you can actually use. AI works the same way.",
      "A common misconception is that shorter prompts are simpler. In reality, a short vague prompt forces AI to make assumptions — and AI's assumptions are rarely the right ones for your specific situation. A longer, well-structured prompt saves you editing time on the back end.",
      "Rule of thumb: the more clearly you can picture the result you want, the more precise the prompt you'll write.",
    ],
    taskIntro: "Compare these two prompts and try both in AI:",
    taskItems: [
      "Bad: 'Write me an email.'",
      "Better: 'Write an email to a client waiting on a price quote. Small business, friendly tone, max 5 sentences. Goal: reassure them the quote will arrive by Friday.'",
      "Write down how the outputs differ — in quality, usability, and length",
    ],
    taskType: "ol",
    taskFallback:
      "Input (bad prompt): Write me an email.\nAI output: Dear Sir/Madam, I am writing regarding our collaboration. Please let me know if you are interested. Kind regards.\n---\nInput (good prompt): Write an email to a client waiting on a price quote. Small business, friendly tone, max 5 sentences. Goal: reassure them the quote will arrive by Friday.\nAI output: Hi [Name], just a quick note — we're working on your quote and you'll have it in your inbox by Friday. Let us know if anything has changed on your end in the meantime. Looking forward to working together!",
    taskExample:
      "Input (bad): Summarize this text.\nAI output: The text covers various topics.\n---\nInput (good): Summarize this text in 3 bullet points for a manager who doesn't have time to read the full document. Each bullet max 1 sentence.\nAI output: • The project exceeded the planned budget by 12%. • The main cause was a delayed materials delivery. • We recommend reviewing supplier contracts.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow you'll practice rewriting bad prompts into better ones.",
  },
  {
    day: 5,
    title: "Rewrite 3 bad prompts",
    subject: "Practice: from vague to specific",
    preheader: "This is a skill, not knowledge. You have to practice it.",
    concept: [
      "Rewriting prompts is like editing copy — the first version is never the best. The key is knowing what to add.",
      "Today you have three examples of weak prompts. Your job: rewrite them so they produce better output. Then test both versions.",
      "This kind of practice — taking something that doesn't work and fixing it deliberately — is one of the fastest ways to develop a skill. You're not just reading about good prompts; you're feeling the difference between them with your own hands. That's what makes it stick.",
      "What's typically missing from bad prompts:",
      [
        "The target audience or recipient",
        "Tone or communication style",
        "Required format or length",
        "Situational context or the goal of the output",
        "The specific action or result the output should achieve",
      ],
      "When you rewrite a prompt, start by asking: what does AI not know that it needs to know? Usually the answer falls into one of the four categories above. Add that information, and the output quality jumps noticeably.",
      "It's also worth testing both the original and the rewritten prompt side by side. The contrast is instructive. Once you see how differently AI responds to a rich prompt versus a bare one, you won't want to write vague prompts anymore — the payoff of specificity becomes tangible.",
      "Prompting is a muscle. Today you're training it with examples that are deliberately weak. By the end of the week, writing a strong prompt from scratch will start to feel natural.",
    ],
    taskIntro: "Rewrite these 3 prompts and test them in AI:",
    taskItems: [
      "'Write me a LinkedIn post.' → add: for whom, on what topic, what goal, what tone",
      "'Help me with my presentation.' → add: topic, audience, number of slides, desired output",
      "'Write a reply to this email.' → add: what the email said, what you want to convey, what tone",
    ],
    taskType: "ol",
    taskFallback:
      "Input (rewritten prompt): Write a short LinkedIn post for HR managers about how AI saves time in recruiting. Friendly and practical tone, max 5 sentences, no hashtags.\nAI output: Recruiting takes an average of 23 hours per role. AI can handle in 5 minutes: CV screening, interview question suggestions, and a first-draft offer letter. That leaves you time for what AI can't do — actually reading the person.",
    taskExample:
      "Input (rewritten prompt): Write a reply to an email where a client is complaining about a delayed delivery. I want to apologize, explain the reason (a carrier issue), and offer 10% off their next order. Professional and empathetic tone, max 6 sentences.\nAI output: Dear [Client], we sincerely apologize for the delay with your order. This was caused by an unexpected issue with our carrier that was outside our control. We appreciate your patience and, as a token of our thanks, we're offering you 10% off your next order. We look forward to continuing to work together.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we look at iteration — why the first AI result is never the final one.",
  },
  {
    day: 6,
    title: "Iteration — the first result is never final",
    subject: "How to work with AI like a colleague, not a search engine",
    preheader: "Good output comes in the second or third round.",
    concept: [
      "The biggest mistake when working with AI: write a prompt, get a result, and either accept it or throw it away. Both are wrong.",
      "AI works best as an iterative collaborator. The first output is a starting point — not a finished product.",
      "This is one of the most important things to internalize about working with AI. Most people treat each interaction as a single transaction — ask, receive, done. But AI is actually a conversation. The second and third outputs are usually significantly better than the first, because each follow-up gives AI more information about what you actually need.",
      "How to iterate effectively:",
      [
        "If the result is too generic: add more context or specify what's missing",
        "If the result is too long: 'shorten this to 3 sentences'",
        "If the tone is off: 'rewrite this to sound more formal / more conversational'",
        "If a detail is missing: 'expand on point number 2'",
        "If the structure is wrong: 'reformat this as a bullet list'",
      ],
      "Notice that none of those follow-ups require starting over. They're small, targeted adjustments — and each one teaches AI exactly what you want. The AI builds on what it already knows from the conversation, which is why continuing a thread is almost always better than starting fresh.",
      "There's a useful mental model here: think of the first output as a draft your smart assistant wrote before the full briefing. Now that you can see it, you can redirect precisely. 'Actually, can you make the opening less formal?' is a much better use of your time than rewriting the whole prompt.",
      "Key principle: you don't have to start over. Continue the conversation — AI remembers the context of the whole thread.",
    ],
    taskIntro:
      "Take any output from the past few days and run it through 3 iterations:",
    taskItems: [
      "Iteration 1: shorten or lengthen the output",
      "Iteration 2: change the tone (more formal or more conversational)",
      "Iteration 3: add or remove one specific piece of information",
    ],
    taskType: "ol",
    taskPrompt: "Rewrite the previous output like this: [specific instruction].",
    taskFallback:
      "Input (iteration 1): Shorten this email to max 3 sentences, keep the key information.\nAI output: We apologize for the delay caused by a carrier issue. As a thank-you for your patience, we're offering 10% off your next order. We look forward to working with you again.\n---\nInput (iteration 2): Rewrite this email in a more formal tone.\nAI output: We wish to express our regret regarding the delayed delivery and would like to offer compensation of 10% on your next order as a gesture of goodwill.",
    taskExample:
      "Input (iteration 3): Add a specific date to the previous email — when the order will arrive.\nAI output: Dear [Client], we apologize for the delay. Your order will be delivered no later than April 15th. As a thank-you for your patience, we're including 10% off your next purchase.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow is a reflection day — you'll write down 3 things that worked for you this week.",
  },
  {
    day: 7,
    title: "Week 1 reflection",
    subject: "What worked for you? Write down 3 insights.",
    preheader: "One week in. Time to pause and take stock.",
    concept: [
      "One of the most valuable habits when working with AI is reflection. Not to grade yourself — but to know what to repeat.",
      "This week you covered: mindset (D1–D2), your first real outputs (D3), prompting (D4–D5), and iteration (D6). Each day may have landed differently.",
      "That's expected and normal. Some concepts click immediately; others take more practice before they feel useful. The purpose of a weekly checkpoint isn't to check a box — it's to make the next week smarter than the last.",
      "Reflection helps you answer two questions:",
      [
        "What brought me the most value? (do more of that)",
        "What didn't work or didn't feel useful? (adapt or skip it)",
        "What do I want to try differently next week?",
      ],
      "Without this kind of reflection, it's easy to keep doing what you've always done even after a week of learning. Awareness bridges the gap between knowing something and actually changing how you work.",
      "One thing worth noticing: your reaction to AI outputs. Some people immediately want to edit and improve. Some accept the output and move on. Some get frustrated when it's not right. Your natural reaction tells you something about how you'll need to build your workflow. There's no wrong reaction — but understanding it helps you use AI more effectively.",
      "This isn't an assessment. It's a calibration — you're adjusting how you'll use AI going forward.",
    ],
    taskIntro: "Write down your answers to these questions:",
    taskItems: [
      "What from this week felt most useful — a specific day or task?",
      "What didn't work or felt unnecessary?",
      "One thing you noticed about yourself — how do you react to AI outputs?",
    ],
    taskType: "ol",
    taskFallback:
      "Input: Help me summarize my experience from week 1: most useful was D3 and D5. D1 felt too theoretical. I noticed I never use the first result as-is.\nAI output: Your strength is practical testing — you see quickly what works. Theoretical frameworks don't grab you as much. You also have a natural instinct for iteration, which is exactly the right habit. You're heading into week 2 with a solid foundation.",
    taskExample:
      "Input: I want to write down 3 insights from week 1. Help me formulate them: prompting came more naturally than I expected, but outputs are sometimes too long and I have to trim them.\nAI output: Insight 1: Prompting is more natural for you than you expected. Insight 2: Output length is a parameter you need to set explicitly. Insight 3: Trimming (iteration) is part of your workflow, not an exception.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Next week we focus on prompting as a skill — starting with structure.",
  },
  {
    day: 8,
    title: "Prompt structure",
    subject: "Role, task, context, format",
    preheader: "Four components that change everything.",
    concept: [
      "A good prompt has structure. Not to make it complicated — but so AI knows exactly what you need.",
      "Last week you learned that good prompts need context, specificity, and a clear goal. This week you'll build on that with a repeatable framework — one you can apply to any task, in any situation.",
      "The four components of a quality prompt:",
      [
        "Role: who should AI be? ('You are an experienced copywriter...')",
        "Task: what exactly should it do? ('Write an email...')",
        "Context: what does AI need to know? ('The client is waiting on a quote, small business...')",
        "Format: what should the output look like? ('Max 5 sentences, friendly tone, no jargon...')",
      ],
      "You don't always need all four. But the more you include, the more precise the result. Think of it as a dial you can turn up as needed — a quick ad-hoc request might only need Task and Format, while a complex piece of communication benefits from all four.",
      "The Role component is often underestimated. When you tell AI to be 'an experienced HR recruiter' rather than 'an assistant,' you're unlocking a different mode of response. AI shifts its vocabulary, assumptions, and priorities based on the persona you assign. A legal professional writes differently than a customer support rep — and AI adapts accordingly.",
      "In practice:",
      "Without structure: 'Write me a product description.'\nWith structure: 'You are a product copywriter. Write a product description for an online store. The product is an ergonomic office chair. Target audience: working parents aged 30–45. Max 3 sentences, friendly and practical tone.'",
      "The difference isn't just in the quality of the output — it's in how much editing you need to do afterward. A well-structured prompt often gives you something close to final. An unstructured prompt gives you a draft that needs significant work.",
    ],
    taskIntro:
      "Write one prompt with all four components for a task you regularly do:",
    taskItems: [
      "Add a role: 'You are...'",
      "Add a task: 'Write / Summarize / Suggest...'",
      "Add context: what does AI need to know",
      "Add format: length, tone, structure",
    ],
    taskType: "ol",
    taskPrompt:
      "You are [role]. [Task]. Context: [what AI needs to know]. Format: [length, tone, structure].",
    taskFallback:
      "Input: You are an experienced HR recruiter. Write a short job ad for a junior graphic designer position. Context: the company is an e-commerce startup, the team is young and informal, we're looking for someone part-time. Format: max 5 sentences, casual tone.\nAI output: We're looking for a junior designer who wants to grow in e-commerce! We offer part-time work at a young startup where your ideas will have immediate impact. You'll work on product photos, banners, and social content. If you have a foundation in Canva or Adobe and a hunger to learn, we'd love to hear from you.",
    taskExample:
      "Input: You are a sales assistant. Summarize this client email in 2 sentences for my manager. Context: the client is requesting a contract amendment due to a change in scope. Format: 2 sentences, neutral tone, no emotional language.\nAI output: The client is requesting a contract amendment due to an expansion in project scope. The request involves changes to section 3.2 relating to delivery timelines.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow we focus on context — AI doesn't know what you don't tell it.",
  },
  {
    day: 9,
    title: "Context is everything",
    subject: "AI doesn't know what you don't tell it",
    preheader: "More context = better result. Every time.",
    concept: [
      "AI has no access to your company, your colleagues, your history, or your preferences. If you don't tell it, it'll guess — and it'll guess generically.",
      "Context isn't about being verbose. It's about giving AI what it needs to produce a good result. There's a crucial difference between the two: adding irrelevant background noise actually hurts output quality, while adding the right contextual signal sharpens it dramatically.",
      "What belongs in your context:",
      [
        "Who the output is for (client, manager, team, public)",
        "What the relationship or situation is (new client, ongoing collaboration, escalation)",
        "What AI or the recipient already knows (don't repeat what's obvious)",
        "What the goal of the output is (persuade, inform, reassure, motivate)",
        "What the company or project context is (size, industry, tone)",
      ],
      "Here's a useful analogy: imagine you've just hired a brilliant freelancer who knows nothing about your organization. They're talented and eager to help — but they need a briefing. What do you tell them? That's your context. Not everything about the company — just what's relevant to this specific task.",
      "A common trap is assuming AI knows things it couldn't possibly know. 'Write a follow-up email to last week's meeting' — which meeting? Who was there? What did you agree on? None of that exists for AI unless you put it in the prompt. The more internal or specific the task, the more context you need to provide.",
      "Over time, you'll develop a sense of exactly how much context a given task needs. Some tasks are universal enough that minimal context works. Others are deeply embedded in your specific work and need a full briefing. Building that instinct is one of the most valuable skills you'll take from this challenge.",
      "Simple test: read your prompt and ask — if I read this for the first time with no prior context, would I know exactly what's being asked? If not, add more.",
    ],
    taskIntro:
      "Take the prompt you wrote in D8 and add more context to it:",
    taskItems: [
      "Who specifically is the output for? (job title, not a name)",
      "What's the situation or relationship?",
      "What's the goal — what should the recipient do or feel?",
    ],
    taskType: "ol",
    taskFallback:
      "Input (without context): Write an email about a meeting.\nAI output: Dear Sir/Madam, I would like to invite you to a meeting on Tuesday at 2pm.\n---\nInput (with context): Write an email to a business partner we worked with last year. I'm inviting them to a meeting to discuss renewing our contract. Friendly tone, mention our previous collaboration, suggest two possible times: Tuesday at 2pm or Thursday at 10am.\nAI output: Hi [Name], hope you're doing well! I'd love to reconnect and pick up where we left off last year — specifically to talk about what a continued partnership could look like. Would Tuesday at 2pm or Thursday at 10am work for you?",
    taskExample:
      "Input: Write a summary for a client who is formal and conservative and has never seen our reports before. Goal: they should understand the key results without reading the full document. Format: 3 bullet points, formal tone.\nAI output: • Total revenue for Q1 reached $1.2M, an 8% year-over-year increase. • Conversion rate improved from 2.1% to 3.4% following landing page optimization. • We recommend increasing the performance advertising budget by 15% in Q2.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll write a complete prompt with all four components for your most frequent work task.",
  },
  {
    day: 10,
    title: "A prompt for your most frequent task",
    subject: "All four components in practice — on your real work",
    preheader: "Today you write a prompt you'll actually use.",
    concept: [
      "Today is a turning point. Until now you've been practicing on examples. Today you write a prompt for something you actually do.",
      "Why is this different? Because your own context changes everything. AI with your context delivers outputs that are usable immediately — or with minimal editing. Examples in a course are useful for learning the pattern — but your own real task is where the skill becomes real.",
      "There's also something motivating about it. When AI produces something that's actually useful for your work — not a textbook scenario but your actual job — you get tangible evidence of what's possible. That evidence is worth more than any explanation.",
      [
        "Real tasks expose what you still need to work on in your prompts",
        "Real outputs show you what 'good enough to use' actually looks like",
        "Real context produces suggestions you couldn't have come up with yourself",
        "Saving real outputs gives you a foundation to build on over the coming weeks",
      ],
      "Before writing the prompt, take a moment to think: what does AI need to know to do this well? Who is the output for? What format works best? What would make this output immediately usable vs. something I'd have to heavily rewrite?",
      "Reminder of the four components: Role, Task, Context, Format. Today you use all of them together.",
      "Don't aim for perfection. Aim for useful. A prompt that produces something you'd use with minor edits is a success — and you'll refine it over time.",
    ],
    taskIntro:
      "Pick your most frequent work task and write a full prompt for it:",
    taskItems: [
      "Role: who should AI be?",
      "Task: what exactly should it do?",
      "Context: what does AI need to know about the situation?",
      "Format: length, tone, structure of the output",
    ],
    taskType: "ol",
    taskPrompt:
      "You are [role]. [Task]. Context: [specific information about the situation, recipient, project]. Format: [length, tone, structure, example if helpful].",
    taskFallback:
      "Input: You are an experienced project manager. Write a weekly status update for project stakeholders. Context: we're building a new e-commerce site, currently in the testing phase, team of 5, deadline in 3 weeks, currently 1 week behind due to technical issues. Format: 3 sections — what was completed, what's planned, what's blocking. Max 10 sentences total.\nAI output: Completed: We finished testing the payment gateway and resolved 14 critical bugs. Planned: This week we'll run user testing with 5 testers and complete mobile optimization. Blocking: ERP system integration has caused a 1-week delay — we're working with the vendor on a resolution.",
    taskExample:
      "Input: You are a content strategist. Suggest topics for 4 LinkedIn posts for a B2B SaaS company in HR tech. Context: target audience is HR managers at companies with 50–200 employees, the company wants to build authority in the space, not sell directly. Format: a list of 4 topics with one explanatory sentence each.\nAI output: 1. How to tell your onboarding isn't working (3 signals from practice). 2. What a bad hire actually costs — numbers that will surprise you. 3. Why HR managers don't trust their own data — and what to do about it. 4. One decision that cut our time-to-hire by 40%.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll learn how to fix a bad output — without starting from scratch.",
  },
  {
    day: 11,
    title: "How to fix a bad output",
    subject: "Follow-up vs. starting over",
    preheader: "A bad output isn't the end — it's the beginning.",
    concept: [
      "You get a bad result. What do you do?",
      "Most people do one of two things: accept it (even though it's not good) or start over from scratch. Both are suboptimal.",
      "The right answer is a follow-up — continue the conversation and refine the output with a targeted instruction. This single habit — knowing how to fix a bad output rather than discard it — separates occasional AI users from people who get consistent value from it.",
      "When to use a follow-up vs. starting over:",
      [
        "Follow-up: the output is roughly right but needs adjustment (tone, length, detail, structure)",
        "Starting over: the output is completely off — wrong goal, wrong context, fundamentally different from what you wanted",
      ],
      "The key to a good follow-up is being specific about what needs to change. 'Make this better' is not a useful instruction. 'Make the opening less formal and cut the third paragraph' is. The more targeted your follow-up, the more precisely AI can adjust.",
      "Examples of good follow-up instructions:",
      [
        "'Cut this to half the length.'",
        "'Add a specific example to point number 2.'",
        "'Rewrite this to sound more conversational.'",
        "'Remove the jargon and replace it with plain language.'",
        "'Add a call to action at the end.'",
      ],
      "There's also a deeper skill here: learning to diagnose what went wrong. Was the output too generic because you didn't give enough context? Too long because you didn't specify format? Off-tone because you forgot to mention the audience? Each bad output is useful information about what your next prompt needs to include.",
    ],
    taskIntro:
      "Take the output from D10 and deliberately improve it with three different follow-up instructions:",
    taskItems: [
      "Adjust the tone (more formal or more casual)",
      "Shorten or lengthen the output",
      "Add or remove a specific element",
    ],
    taskType: "ol",
    taskFallback:
      "Input (follow-up 1): Rewrite the previous status update in a more formal tone — it's going into an annual report.\nAI output: During the past week, testing of the payment gateway was completed and 14 critical defects were resolved. In the upcoming period, user testing will be conducted and mobile interface optimization finalized. The primary risk factor remains the ERP system integration.\n---\nInput (follow-up 2): Add a specific date to the ERP integration point.\nAI output: ERP system integration has caused a delay — resolution expected by April 12th.",
    taskExample:
      "Input (follow-up): The LinkedIn post topics look good, but the first one is too generic. Suggest a more specific version with a number or concrete example.\nAI output: Instead of 'How to tell your onboarding isn't working,' try: '3 things a new hire does in their first week when onboarding fails' — every HR manager can picture that immediately.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow you'll build on D10 and improve the output through 3 iterative steps.",
  },
  {
    day: 12,
    title: "Iterate — 3 follow-up steps",
    subject: "Take the output from D10 and improve it",
    preheader: "Today you'll take last week's output to a final, usable version.",
    concept: [
      "Today is purely practical. You'll take the output you created in D10 and walk it through three iterative steps.",
      "Goal: by the end of today's session, you'll have an output that's genuinely usable — or close to it.",
      "This is how professional AI users actually work. They don't expect a perfect first draft. They expect a solid starting point and then they refine. Three targeted iterations is usually enough to take something from 'interesting draft' to 'ready to use.' More than that, and you're often polishing rather than improving.",
      "Each iteration step serves a different purpose:",
      [
        "Step 1: Content refinement — what's missing or what's unnecessary?",
        "Step 2: Tone and style — does it fit the context and the recipient?",
        "Step 3: Finalization — length, structure, ready to use",
      ],
      "Separating these steps is important. When you try to fix everything at once, you lose track of what changed and why. When you refine one dimension at a time — first substance, then voice, then form — each step is clean and traceable.",
      "You'll also notice that AI responds differently to each type of follow-up. Content changes require it to add or remove information. Tone changes require it to rephrase without changing meaning. Format changes require it to restructure without adding or removing content. These are three different kinds of instruction, and they get different kinds of results.",
      "By the end of today, you won't just have a better output — you'll have practiced a workflow you can apply to any AI interaction going forward.",
    ],
    taskIntro: "Open the output from D10 and walk it through three steps:",
    taskItems: [
      "Step 1: Add or remove content — what's specifically missing or excessive?",
      "Step 2: Adjust the tone — does it work for the recipient?",
      "Step 3: Adjust length and structure — is it ready to use?",
    ],
    taskType: "ol",
    taskPrompt:
      "Step 1: [What specifically to add or remove?]\nStep 2: [How to adjust the tone?]\nStep 3: [How to adjust the length or structure?]",
    taskFallback:
      "Input (step 1): Add a mention that the team worked overtime to catch up on the delay.\nAI output: ...The team worked beyond standard capacity this week to minimize the impact of the delay on the deadline.\n---\nInput (step 2): Make the text a bit less formal — it's going on our internal Slack, not into a report.\nAI output: This week was a tough one — the team put in extra hours to catch up after the ERP integration delay. Payment gateway is done, testing is running. We should be back on track by next week.",
    taskExample:
      "Input (step 3): Shorten the whole output to max 3 bullet points. Each max 1 sentence.\nAI output: • ERP integration caused a 1-week delay, being resolved. • Payment gateway tested, 14 bugs fixed. • This week: user testing and mobile optimization.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we examine when AI genuinely helps — and when it actually adds work.",
  },
  {
    day: 13,
    title: "When AI helps and when it adds work",
    subject: "Not everything is worth automating",
    preheader: "AI isn't the answer to everything. And that's important to know.",
    concept: [
      "There are tasks where AI saves you hours. And there are tasks where AI creates more work — because you spend longer fixing the output than it would have taken to do it yourself.",
      "This is one of the most honest things you'll hear in this challenge: AI is not universally helpful. Using it strategically — knowing when it helps and when it doesn't — is more valuable than using it everywhere.",
      "When AI genuinely helps:",
      [
        "Tasks with a clear structure and a repeating pattern",
        "Writing first drafts that you then refine",
        "Summaries, rewrites, translations",
        "Generating variations (5 versions of a text, 10 ideas on a topic)",
        "Explaining or simplifying complex content",
      ],
      "When AI adds work:",
      [
        "Highly specific knowledge or internal context that AI doesn't have",
        "Creative work where your personal voice matters",
        "Tasks that require fact-checking — AI makes things up convincingly",
        "One-off short tasks where writing the prompt takes longer than just doing it",
        "Communication that requires deep empathy or knowledge of a relationship",
      ],
      "The pattern in the 'helps' list: structure, repetition, volume. AI thrives when there's a clear pattern to apply. The pattern in the 'adds work' list: specificity, authenticity, accuracy. AI struggles when the task requires things it fundamentally can't know — your relationships, your voice, your verified facts.",
      "Another useful lens: what's the cost of an error? In a first draft you'll review anyway, an AI error is cheap — you'll catch it. In a report going to a client, an AI-hallucinated statistic is expensive. Adjust how much you verify based on what's at stake.",
      "The goal isn't to avoid AI where it's imperfect. The goal is to know where to invest your editing attention and where to trust the output more freely.",
    ],
    taskIntro:
      "Go through your task list from D0 and put each item in one of three categories:",
    taskItems: [
      "AI clearly helps — saves me time or improves quality",
      "AI sometimes helps — depends on the situation",
      "AI adds work — I'm faster doing it myself",
    ],
    taskType: "ol",
    taskFallback:
      "Input: My tasks: writing newsletters, responding to client complaints, analyzing data in Excel, brainstorming topics, writing a personal reference for a colleague.\nAI output: Clearly helps: newsletters, brainstorming topics. Sometimes helps: client complaints (depends on complexity). AI adds work: Excel data analysis (you need the right tool, not just text), personal references (need to be authentic and personal).",
    taskExample:
      "Input: I want to know if it makes sense to use AI for preparing meeting materials.\nAI output: Depends on the meeting type. Recurring meetings with a similar agenda — yes, AI saves time. Strategic meetings with new clients — the prep requires knowing the relationship and context, AI can help with structure but not with substance.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow is the week 2 checkpoint — you'll write your own prompt checklist.",
  },
  {
    day: 14,
    title: "Checkpoint — your prompt checklist",
    subject: "3–5 points you're taking away from week 2",
    preheader: "Two weeks in. Time to consolidate.",
    concept: [
      "Over two weeks you've covered prompting from the ground up — structure, context, iteration, and knowing when AI actually helps. Now it's time to consolidate.",
      "A prompt checklist is your personal list of things to check before sending every prompt. It won't be the same for everyone — that's why you're writing yours.",
      "The value of a checklist isn't that it makes you slower. It's that it replaces the mental energy of remembering with a reliable system. After a few weeks of using it, the checklist items become automatic — you don't even need to consult the list because the questions are already running in the background when you write a prompt.",
      "What belongs in a checklist:",
      [
        "Things you tend to forget (and that you know hurt your results)",
        "Things that consistently work for you",
        "Shortcuts or approaches that save you time",
        "Red flags that tell you when not to use AI",
      ],
      "The most useful checklists are short. A five-point list you actually use is worth infinitely more than a comprehensive twenty-point list you ignore. Aim for the minimum set of questions that catches your most common mistakes.",
      "Think back over the past two weeks: when did you get a bad output? What was missing from the prompt that would have fixed it? When did you get a great output? What did you do that worked? Those answers are the raw material for your checklist.",
      "Example checklist (customize for yourself): Did I add context? Did I specify format? Do I have a clear output goal? Does the tone match the recipient?",
    ],
    taskIntro: "Write your personal prompt checklist — 3 to 5 points:",
    taskItems: [
      "What do you tend to forget when writing prompts, and what hurts your results?",
      "What consistently works for you that you want to remember?",
      "Write it as a checklist you can keep handy",
    ],
    taskType: "ol",
    taskFallback:
      "Input: Help me put together a prompt checklist. I know I forget format and tone. Adding a role always works for me.\nAI output: Your prompt checklist: ✓ Did I add a role? ✓ Did I specify format (length, structure)? ✓ Does the tone match the recipient? ✓ Is the output goal clear? ✓ Does AI need to know the situational context?",
    taskExample:
      "Input: I want a simple 3-point checklist that I'll actually remember.\nAI output: 1. Context: does AI know who this is for and why? 2. Format: does AI know what the output should look like? 3. Goal: does AI know what the output needs to achieve?",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Next week we start building habits — and the first step is the Leverage matrix.",
  },
  {
    day: 15,
    title: "Repetitive work is a signal",
    subject: "The Leverage matrix — where your time is best invested",
    preheader: "If you keep doing it, it's an opportunity.",
    concept: [
      "When you do something over and over, your brain stops registering it as a problem. You just do it. But repetitive work is a signal — it means there's a system or a template waiting to be built.",
      "This week is about moving from prompting as a skill to AI as a system. The difference: a skill is something you apply when you remember to. A system is something that works automatically because you built it right.",
      "The Leverage matrix helps you sort tasks into four quadrants:",
      [
        "High frequency + AI helps → priority for templates and workflows",
        "High frequency + AI doesn't help much → find another way to reduce it or delegate",
        "Low frequency + AI helps → use AI ad hoc, don't build a system",
        "Low frequency + AI doesn't help much → leave it",
      ],
      "The power of this framework is focus. Without it, people try to use AI for everything — and get inconsistent results. With it, you identify the two or three tasks where building a system will pay off most. You invest your energy there, and the return is compounding.",
      "High frequency is the key variable. A task you do once a year might benefit from AI, but it's not worth building a system for. A task you do every day — even if each instance only takes 10 minutes — adds up to hours per week. That's where the leverage is.",
      "Think about which tasks in your work are genuinely repetitive. Not just 'I do this sometimes' but 'I do this every week without exception.' Those are the candidates. Everything else can be handled ad hoc.",
      "The value of the matrix: it helps you focus energy where you get the best return. Not on what looks interesting — on what actually saves you time.",
    ],
    taskIntro:
      "Write your list of recurring tasks into AI and let it suggest where each one falls:",
    taskItems: [
      "List 5–8 tasks you do regularly",
      "For each one, estimate: how often (daily / weekly / monthly) and how time-consuming",
      "Let AI suggest where each task falls in the Leverage matrix",
    ],
    taskType: "ol",
    taskPrompt:
      "I do these recurring tasks: [list]. Place them in a Leverage matrix based on frequency and how much AI could help. Explain your reasoning.",
    taskFallback:
      "Input: My tasks: 1. Weekly report (every week, 2 hours). 2. Answering FAQ emails (every day, 30 min). 3. Preparing client proposals (twice a week, 1 hour). 4. Writing meeting notes (every week, 45 min).\nAI output: Priority: FAQ emails (high frequency, AI excels here — build templates), weekly report (high frequency, AI helps with structure and copy), proposals (medium frequency, AI generates solid drafts). Lower priority: meeting notes (depends on whether you have a transcript — without one, AI helps less).",
    taskExample:
      "Input: I write a newsletter monthly (4 hours), review and approve copy daily (1 hour), do a leadership presentation quarterly (8 hours).\nAI output: Highest leverage: daily copy review (AI can be a first filter), newsletter (monthly but time-heavy — AI draft saves hours). Leadership presentation: AI helps with structure and a first draft, but the content must be yours.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll map your 5 most frequent tasks and place them in the Leverage matrix.",
  },
  {
    day: 16,
    title: "The Leverage matrix in practice",
    subject: "Map 5 tasks and figure out where to start",
    preheader: "Knowing where your time goes is the first step to saving it.",
    concept: [
      "Today is about mapping — not theory. We'll take five of your most frequent work tasks and place them in the Leverage matrix.",
      "Why five? More than that is overwhelming, fewer doesn't give enough of a picture. Five is the actionable number.",
      "The goal of today isn't to produce a comprehensive inventory of everything you do. It's to identify your single best opportunity — the one task that, if you built a template or workflow around it, would give you back the most time.",
      "What you'll need:",
      [
        "Your list from D0 or D15",
        "A rough estimate: how often you do each task and how long it takes",
        "Honesty: what actually works with AI for you and what doesn't",
        "A willingness to name the one task with the most leverage potential",
      ],
      "Here's a useful thought experiment: if you could only build one AI system this month — one template, one workflow, one saved prompt — what would give you the biggest return? That's your priority. That's what you'll build this week.",
      "Frequency multiplied by duration gives you the rough time cost. 30 minutes twice a week is 4 hours a month. If AI can cut that in half, you get back 2 hours a month — consistently, forever. Small math, large compounding effect.",
      "After today you'll have a clear candidate for your first AI template. Tomorrow you'll learn the difference between a template and a workflow — so you know exactly what to build.",
    ],
    taskIntro: "Open AI and run through this exercise:",
    taskItems: [
      "List your 5 most frequent work tasks with an estimated frequency and duration",
      "Ask AI how it could help with each one",
      "Mark one task as 'template priority' — the one with the most leverage potential",
    ],
    taskType: "ol",
    taskPrompt:
      "My 5 most frequent tasks are: [list with frequency and duration]. How could AI help with each? Which one has the most leverage potential in your view?",
    taskFallback:
      "Input: 1. Newsletter (monthly, 3 hours). 2. Client meeting prep (twice a week, 45 min). 3. Social media posts (3x a week, 1 hour). 4. Email replies (daily, 30 min). 5. Leadership reporting (monthly, 2 hours).\nAI output: Highest leverage: social media posts (high frequency, AI generates drafts quickly). Second priority: meeting prep (repeating pattern, AI suggests agenda and questions). Newsletter and reporting: AI saves time on drafting. Emails: templates for recurring types.",
    taskExample:
      "Input: I'm marking social media posts as my priority. What could that template look like?\nAI output: Social media post template: Hook (first line that stops the scroll) → Main idea (1–2 sentences) → Context or example → Call to action or question. You fill in the topic and specifics, AI generates the variations.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we look at the difference between a template and a workflow — what they are and when to use each.",
  },
  {
    day: 17,
    title: "Template vs. workflow",
    subject: "Two different tools — when to use which",
    preheader: "A template is a pattern. A workflow is a process. Both serve different purposes.",
    concept: [
      "Two terms that often get confused — and yet they do very different things.",
      "Understanding the distinction isn't about being technically precise — it's about knowing which tool to reach for. Using a workflow when you need a template wastes time on unnecessary complexity. Using a template when you need a workflow produces outputs that miss steps and require more manual work to complete.",
      "A template is a fixed structure you fill in with new content. Each time you swap in different specifics, but the skeleton stays the same.",
      "Examples of templates:",
      [
        "Email template for onboarding a new client",
        "Presentation structure template",
        "Prompt template for your weekly report",
        "Standard brief for creative requests",
      ],
      "A workflow is a sequence of steps — one action following another. AI can be part of one or more of those steps.",
      "Examples of workflows:",
      [
        "Get a topic → ask AI for a draft → refine it → send for approval",
        "Receive a brief → AI proposes structure → I fill in the content → AI checks the tone",
        "Collect data → AI summarizes patterns → I add interpretation → output sent to stakeholders",
      ],
      "A quick diagnostic: does the task produce one thing (a document, an email, a post)? That's probably a template. Does the task involve a sequence of decisions and actions? That's probably a workflow.",
      "When to use a template: recurring outputs with the same structure. When to use a workflow: recurring processes with multiple steps and decision points.",
      "Both are worth having. But if you're starting out, templates are simpler to build and immediately useful. A workflow adds more value once you've already mastered the individual steps and want to connect them.",
    ],
    taskIntro:
      "For one of your recurring tasks, decide: template or workflow?",
    taskItems: [
      "Pick a task from the Leverage matrix in D16",
      "Ask yourself: is this more about a recurring output (template) or a recurring process (workflow)?",
      "Let AI suggest the template structure or workflow steps",
    ],
    taskType: "ol",
    taskPrompt:
      "I regularly do [task]. Is this more of a recurring output or a recurring process? Suggest a [template / workflow] for this task.",
    taskFallback:
      "Input: I regularly prepare materials for client meetings. Is this an output or a process? Suggest a workflow.\nAI output: It's a process — it has multiple steps. Workflow: 1. Review the notes from the previous meeting. 2. Identify 3 key points to cover. 3. Prepare questions you want to ask. 4. Pull together any data or materials you'll reference. 5. Set the meeting goal: what do you want to decide or advance?",
    taskExample:
      "Input: I write a weekly report for leadership. Is this an output or a process? Suggest a template.\nAI output: It's an output — it has a fixed structure. Template: [Week X] — [Date] / Key results: [3 bullets] / In progress: [2–3 points] / Risks or blockers: [if any] / Plan for next week: [3 priorities].",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow you'll create your first real template for your most frequent task.",
  },
  {
    day: 18,
    title: "Create your first template",
    subject: "Your most frequent task — as a template",
    preheader: "Build it once. Use it a hundred times.",
    concept: [
      "A template is an investment. You build it once and reuse it repeatedly — with minimal adjustment.",
      "The key word is 'once.' Most people who try to use AI for recurring tasks reinvent the wheel every time — they write a new prompt from scratch, get a result, and forget what worked. A template breaks that cycle. The first time you build it takes 15 minutes. Every use after that takes 2.",
      "What a good prompt template looks like:",
      [
        "A fixed part: role, purpose, format — this doesn't change",
        "A variable part: specific content, context, details — you fill this in each time",
        "Saved somewhere you can find it in a week",
        "Simple enough that using it takes less than a minute",
      ],
      "The fixed part is where your past learning lives. You've already discovered what role assignment works, what format specification produces the right output, what tone instruction matches your audience. That knowledge is baked into the template so you don't have to re-derive it every time.",
      "The variable part is where each instance becomes unique. The topic changes. The specifics change. The recipient might change. But the structure — the 'container' — stays the same.",
      "In practice — template vs. filled-in prompt: Template: 'You are [role]. Write [output type] for [recipient]. Context: [situation specifics]. Format: [length, tone, structure].' Filled in: 'You are an HR specialist. Write an onboarding email for a new employee. Context: they start Monday, fully remote. Format: max 8 sentences, friendly tone.'",
      "The best test for a template: can someone else use it with minimal explanation? If yes, it's well-built. If it needs a paragraph of verbal context every time, the fixed part needs more detail.",
    ],
    taskIntro: "Create a template for your most frequent task:",
    taskItems: [
      "Pick the task you do most often",
      "Draft the template structure with a fixed and a variable part",
      "Test the template in AI with a real example filled in",
    ],
    taskType: "ol",
    taskPrompt:
      "Help me create a prompt template for [task]. The template should have a fixed part (role, purpose, format) and a variable part (context, specifics). Show me a completed example with something filled in.",
    taskFallback:
      "Input: Help me create a prompt template for writing Slack status updates for my team. Fixed and variable parts. Show an example.\nAI output: Template: 'Write a short status update for the team on Slack. Topic: [WHAT is happening]. Status: [where we are]. Blockers: [what's in the way / or \"none\"]. Format: max 5 sentences, informal tone, no bullet points.'\nFilled in: 'Write a short status update for the team on Slack. Topic: new campaign launch. Status: creative is done, waiting on copy approval. Blockers: approval slipped by a day. Format: max 5 sentences.'\nOutput: Creative is ready and the campaign is good to go! Just waiting on final copy approval — it was due yesterday but we expect it today. Once that's in, we're live.",
    taskExample:
      "Input: I'm creating a template for my weekly report. How do I save it so I can find it easily?\nAI output: Simplest approach: save it as the first page in Notion or a Google Doc named 'Template — Weekly Report.' Every week you open it, fill in the variable parts, and send. It'll save you 30 minutes a week.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we look at where AI genuinely saves time — and where it paradoxically adds more.",
  },
  {
    day: 19,
    title: "Where AI saves time and where it adds work",
    subject: "An honest look at your own practice",
    preheader: "Not every use of AI is efficient. That's worth admitting.",
    concept: [
      "After three weeks of practice, you have enough experience to honestly ask: where is AI actually saving me time?",
      "There's an effect sometimes called the 'AI productivity illusion' — it feels like you're working faster or better, but in reality you're spending time fixing AI outputs or writing prompts for things that would have been quicker to do manually.",
      "This is worth taking seriously. The feeling of productivity — generating outputs, iterating, refining — can be genuinely satisfying even when the net result is neutral or negative. Honesty here is more useful than optimism.",
      "Signs AI is saving you time:",
      [
        "You used the output with minimal edits (less than 5 minutes of tweaking)",
        "The task would have taken noticeably longer without AI (more than 20 minutes difference)",
        "The quality of the output is comparable or better",
        "You handled the task without having to deeply think from scratch",
      ],
      "Signs AI is adding work:",
      [
        "You rewrote the output longer than it would have taken to write from scratch",
        "You spent 20 minutes on a prompt for a 2-minute task",
        "You had to fact-check and found errors",
        "You kept iterating without getting significantly closer to what you wanted",
      ],
      "The honest audit isn't about finding failures — it's about calibrating. If AI genuinely saved you 90 minutes on your newsletter but added 30 minutes to your data analysis, the net is still positive. But knowing that means you double down on newsletters and stop using AI for analysis — or find a better tool for it.",
      "This kind of audit, done periodically, is what separates people who use AI strategically from people who use it reflexively. Strategic use compounds over time. Reflexive use plateaus.",
    ],
    taskIntro: "Run a quick audit of the past week:",
    taskItems: [
      "List 3 moments where AI saved you time (specific examples)",
      "List 1–2 moments where AI added work or didn't help",
      "From that: where will you use AI more and where less?",
    ],
    taskType: "ol",
    taskFallback:
      "Input: I want to audit where AI helped and where it didn't this week. Help me structure it.\nAI output: Just tell me in plain terms what 'saved time' and what was 'more work than without AI' — I'll pull the structure out of that. Or try answering 3 questions: 1. What task with AI was fastest? 2. When did you have to heavily rewrite the output? 3. When did you not use AI but wish you had?",
    taskExample:
      "Input: Saved time: newsletter draft (saved ~90 minutes), client email template (5 minutes instead of 20). Added work: AI suggested a blog post with made-up statistics, had to verify everything.\nAI output: Your strengths: long-form writing and templates. Weak spot: facts and data — always verify, AI fabricates convincingly. Recommendation: use AI for writing, not for research.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll have one conscious day with AI — logging what you used and what you didn't.",
  },
  {
    day: 20,
    title: "One conscious day with AI",
    subject: "Log what you used — and what you didn't",
    preheader: "Today you're watching your own work with AI from the outside.",
    concept: [
      "Today is about awareness, not performance. You won't try to use AI more or less — you'll just notice when you do use it and when you don't.",
      "Why do this? Because most people either use AI randomly (no system) or don't use it even where it would help. Becoming aware of your pattern is the first step to changing it.",
      "There's a concept in behavioral psychology called 'implementation intention' — the idea that you're more likely to do something if you've pre-decided the exact situation in which you'll do it. Today's exercise is a form of reverse implementation intention: instead of planning when you'll use AI, you're observing when you naturally do and don't — and asking why.",
      "How to log it:",
      [
        "A quick note after each work block: 'used AI for X, saved roughly Y minutes'",
        "Or the opposite: 'could have used AI for X, but it didn't occur to me'",
        "Don't stress about accuracy — an estimate is fine",
        "Pay special attention to moments where you got stuck — those are often AI opportunities",
      ],
      "The moments you didn't use AI are often more interesting than the moments you did. If you sat stuck on something for 20 minutes and never thought to open AI, that's a gap. Not a failure — just a gap. Your goal is to close those gaps over the next week.",
      "One pattern that comes up often: people use AI for writing but forget it entirely for thinking. Brainstorming, problem diagnosis, planning a difficult conversation — all of these are things AI can help with, but the habit of reaching for it doesn't feel as natural because we're used to doing thinking in our heads.",
      "By the end of today, you'll have a clearer picture of your actual AI habits vs. your potential AI habits. That gap is your next frontier.",
    ],
    taskIntro: "At the end of the day, write down:",
    taskItems: [
      "3 moments where you used AI — and estimate how much time it saved",
      "1–2 moments where you didn't use AI but could have",
      "One takeaway: what surprised you?",
    ],
    taskType: "ol",
    taskFallback:
      "Input: Used AI three times: email draft (saved 15 min), document summary (saved 20 min), meeting agenda (saved 10 min). Didn't use AI for presentation prep, even though I knew it would have helped.\nAI output: Estimated total savings: 45 minutes in one day. Pattern: you use AI well for writing and summarizing. Gap: presentations — you probably think of them as 'too specific,' but AI handles structure and outlines very well.",
    taskExample:
      "Input: What surprised me: I didn't use AI for brainstorming campaign topics, even though I sat stuck on it for 30 minutes without coming up with anything useful.\nAI output: That's exactly a 'hidden opportunity' — tasks where you get stuck are ideal for AI. Brainstorming is one where AI generates enough ideas quickly and you pick the best ones. Next time try: 'Give me 15 campaign topic ideas for [target audience and product].'",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow is the week 3 reflection — you'll figure out what truly fits your style and what you skip.",
  },
  {
    day: 21,
    title: "Your AI style",
    subject: "What fits, what you skip — 3 things you actually do",
    preheader: "The best system is the one you actually use.",
    concept: [
      "Over three weeks you've learned a lot about AI — theory, prompting, templates, workflows. But learning and doing are two different things.",
      "Today you'll honestly write down: what do you actually do? Not what you think you should do. What you do.",
      "Why does this matter? Because your AI style is unique. Some people prefer quick prompts without structure. Some iterate carefully. Some only use AI for writing. Some for brainstorming.",
      "There's no wrong style — there's only a style you don't know you have. And a style you consciously develop.",
      "Three weeks of practice gives you real data about yourself. You've seen what works, what you skip, what frustrates you, what delights you. That's not just feedback about AI — it's feedback about how you work, how you think, and what kinds of tasks drain your energy versus which ones you do naturally.",
      [
        "Do you use AI reactively (when stuck) or proactively (before starting)?",
        "Do you prefer long structured prompts or short quick ones?",
        "Do you iterate a lot or usually accept the first output?",
        "Do you save outputs, or do you use them once and forget them?",
      ],
      "None of those answers are better than others. They just tell you where to lean in and where to build habits. Someone who never iterates needs a different habit than someone who over-iterates and never ships. Someone who saves nothing needs a second brain; someone who saves everything needs a simpler system.",
      "Week 4 is about building a durable system from what you've learned. The more honest you are today about what you actually do, the more useful the system you'll build will be.",
    ],
    taskIntro: "Write down three things you actually do:",
    taskItems: [
      "What from AI do I genuinely use regularly? (Specific examples, not categories)",
      "What from the challenge did I skip or ignore? (No judgment — just fact)",
      "One habit I want to strengthen going into week 4",
    ],
    taskType: "ol",
    taskFallback:
      "Input: I want to define my AI style. I actually use: AI for writing emails and drafts. Skipped: the Leverage matrix and templates. Want to strengthen: saving outputs regularly.\nAI output: Your AI style: reactive writer — you use AI on demand for writing, but don't have a system for reuse. Next step: one file or Notion page where you save prompts and outputs. You'll be surprised how quickly that changes your productivity.",
    taskExample:
      "Input: What I actually do: AI for brainstorming and structuring text. Skipped: workflows and templates, felt complicated. Want to strengthen: a newsletter template.\nAI output: Good news: brainstorming and structuring are the easiest AI habits — and you've got them. Templates are the natural next step. Try creating one for your newsletter — and 'complicated' stops being a reason.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Next week we build a system — starting with a second brain and saving your outputs.",
  },
  {
    day: 22,
    title: "Second brain lite",
    subject: "Why save outputs instead of searching again",
    preheader: "The best AI output is one you can find a month from now.",
    concept: [
      "One of the biggest time drains when working with AI: asking AI the same thing twice. Because you didn't save the output, or you forgot where it was.",
      "A second brain is a system for saving what you've created — outputs, templates, prompts, notes. It doesn't have to be complex. It has to be consistent.",
      "The concept of a 'second brain' comes from the idea that your human memory is unreliable for storing detailed, reusable knowledge — especially knowledge that grows and changes over time. AI outputs are exactly the kind of thing your memory won't retain: specific language, exact structure, particular phrasing that worked. You need to externalize them.",
      "Why 'lite' version?",
      [
        "You don't need a sophisticated system — one place is enough",
        "You don't need tags or categories — searchable text is enough",
        "You don't need to be perfect — just save regularly",
        "The system should add less than 30 seconds of friction to each use",
      ],
      "The 'lite' framing is intentional. Most second brain systems fail because they're too elaborate. People build beautiful folder structures, add extensive tags, create complex hierarchies — and then don't maintain them because the overhead is too high. The better approach: ruthless simplicity. One document, three sections, save anything useful.",
      "Three things worth saving:",
      [
        "Prompt templates that worked for you",
        "AI outputs you actually used",
        "Notes from your reflections (D7, D14, D21)",
      ],
      "Here's the test for whether something is worth saving: would I reach for this again? If yes, save it. If no, discard it. You'll develop good intuition for this quickly.",
    ],
    taskIntro:
      "Think about where you're currently saving (or not saving) AI outputs:",
    taskItems: [
      "Where are your outputs from the last three weeks? (Notion, Docs, nowhere?)",
      "How quickly could you find the prompt template from D18?",
      "What would change if you had one consistent place for everything?",
    ],
    taskType: "ol",
    taskFallback:
      "Input: I want to figure out if I need a system for saving AI outputs. My outputs are scattered across Notion, Docs, and the AI chat itself.\nAI output: Yes, you need one. Three different places = no place. Suggestion: create one Notion page or Google Doc called 'My AI' and move there: templates, outputs you used, your prompt checklist. A month from now you'll be glad it's all in one spot.",
    taskExample:
      "Input: What should a minimal 'second brain' for AI work actually contain?\nAI output: Minimal version: 1. Prompt templates (your 5–10 most-used). 2. Outputs you used and would reach for again (emails, reports, posts). 3. Reflections and insights (from D7, D14, D21). That's it. One document, consistent saving.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow you'll actually build that system — one place, foundation in place today.",
  },
  {
    day: 23,
    title: "Build the foundation — one place for your AI outputs",
    subject: "Today you set up the system that will work for you in a month",
    preheader: "A system you don't maintain doesn't work. Keep it simple.",
    concept: [
      "The theory of a second brain is nice — but today you're actually going to build one. Even in its minimal form.",
      "The reason most people don't have a system for their AI work isn't that they don't know they need one. It's that building a system feels like a project — and projects get deferred. Today you're making it non-negotiable by keeping the scope tiny. Fifteen minutes of setup, and you're done.",
      "What you need:",
      [
        "One place: Notion, Google Docs, Apple Notes — whatever you already use",
        "One page or document: name it 'My AI' or 'AI workspace'",
        "Three sections: Prompt templates | Outputs I've used | Notes and reflections",
      ],
      "What you move there right now:",
      [
        "The template from D18",
        "The prompt checklist from D14",
        "Your 3 insights from D21",
      ],
      "What you'll add as you go:",
      [
        "Every output you actually used",
        "Every prompt you want to use again",
        "Every note that helped you",
      ],
      "The discipline is in the 'as you go' part. The system only works if you add to it consistently — not perfectly, but consistently. The simplest rule: if you used an AI output, take 20 seconds to save a copy. That's it.",
      "A month from now, when you're back looking for that email template you built, or the prompt that produced your best weekly report — you'll be very glad you spent 15 minutes today.",
    ],
    taskIntro: "Today you do just this:",
    taskItems: [
      "Open Notion, Google Docs, or Apple Notes",
      "Create a page called 'My AI' with three sections: Templates | Outputs | Notes",
      "Move at least one thing from the past three weeks into it",
    ],
    taskType: "ol",
    taskFallback:
      "Input: Help me design the structure for a 'My AI' page in Notion.\nAI output: Suggested structure:\n\n# My AI\n\n## Prompt Templates\n- [Template 1 — task name]\n- [Template 2 — task name]\n\n## Outputs I've Used\n- [Date] [Output type] — [note on what was useful]\n\n## Notes and Reflections\n- Prompt checklist\n- Insights from weekly reflections\n- What works / what doesn't",
    taskExample:
      "Input: What's the simplest version that would be enough to start?\nAI output: Minimal version: one Google Doc, three headings (Templates / Outputs / Notes), nothing more. Whenever you use AI and the output is good, add it. Whenever you write a prompt you want to reuse, add it. Once a week, open it and see what's there.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll learn how to know whether AI is actually helping you — not just how it feels.",
  },
  {
    day: 24,
    title: "How to know AI is actually helping",
    subject: "Feedback, not feeling",
    preheader: "The feeling of productivity and real time savings are two different things.",
    concept: [
      "There's a difference between it feeling like AI is helping and it actually helping.",
      "The feeling of productivity can be deceptive — you're clicking, generating, iterating... and at the end of the day you have less done than if you'd just focused and worked directly.",
      "This isn't an argument against AI. It's an argument for measurement. You don't need elaborate tracking — you just need to ask yourself honest questions and pay attention to the answers.",
      "How to measure real AI value (simply):",
      [
        "Time: how many minutes or hours did you save? (a rough estimate is fine)",
        "Quality: is the output better than you'd have produced yourself in the same time?",
        "Frequency: do you use AI regularly, or only occasionally? Regular = habit = system",
        "Result: did the AI output lead to a real action? (Did you actually send the email? Use the report?)",
      ],
      "The 'result' metric is underrated. You can generate a beautiful AI output and then not use it because it didn't quite fit, or because editing it took too long, or because you lost it. An output that didn't get used isn't a win — it's a prompt design problem.",
      "Over time, tracking these dimensions casually — not obsessively — gives you a real picture of your AI ROI. You'll start to notice that certain types of tasks consistently deliver value, while others are inconsistent or negative. That's actionable intelligence.",
      "Key question: 'If I'd done this without AI, would the result have been worse or would it have taken longer?' If the answer is no — AI isn't actually helping you here.",
    ],
    taskIntro: "Run a simple feedback check on the past week:",
    taskItems: [
      "One case where AI genuinely helped — with an estimate of time saved or quality gained",
      "One case where AI didn't help or added work",
      "From that: what will you do differently or more of?",
    ],
    taskType: "ol",
    taskFallback:
      "Input: I want to evaluate whether AI is actually helping me. It helped: newsletter (saved 2 hours). Didn't help: data analysis — the outputs were wrong and I had to do it all manually.\nAI output: Real savings this week: 2 hours. AI works for writing text, not for data analysis without the right tool. Recommendation: for data analysis, use a specialized tool (Code Interpreter in ChatGPT or Claude with a CSV). For text, keep doing what you're doing.",
    taskExample:
      "Input: How do I set up simple AI impact tracking that takes no more than 2 minutes a week?\nAI output: Simple metric: once a week, write down three numbers — how many tasks you handled with AI, how many without, and roughly how many minutes you saved total. It doesn't have to be exact. After a month you'll see a trend — that's enough.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow you'll compare one real task — with AI vs. how you'd do it without.",
  },
  {
    day: 25,
    title: "Side-by-side comparison",
    subject: "One task with AI vs. how you'd do it without",
    preheader: "The most convincing evidence is your own.",
    concept: [
      "Today you'll run one practical experiment: take a specific task and compare what it looks like with AI vs. without.",
      "Why do this? Because abstract 'AI saves time' is less convincing than concrete 'this email took me 3 minutes instead of 20.'",
      "Personal evidence is uniquely convincing. Reading about someone else's AI productivity gain is interesting but abstract. Your own side-by-side comparison — one task, your real context, your actual time — becomes something you'll remember and refer back to. It's the kind of evidence that changes behavior.",
      "How to run the experiment:",
      [
        "Pick a task you do regularly",
        "Estimate how long it would take without AI",
        "Do it with AI and measure (or estimate) the time",
        "Compare: time, quality, energy",
        "Note whether the output needed significant editing before it was usable",
      ],
      "Don't just track time — track energy. Some tasks that take the same amount of time are genuinely draining without AI and easy with it. That's real value, even if the clock doesn't show it. Cognitive load matters.",
      "Also worth noting: did the AI output suggest something you wouldn't have thought of yourself? A better structure, a sharper phrase, a consideration you'd have missed? That's quality improvement, not just time savings — and it's often the more impactful benefit in the long run.",
      "Bonus: don't forget to assess quality, not just time. Sometimes AI doesn't save time, but the result is noticeably better.",
    ],
    taskIntro:
      "Pick one specific task and run the AI vs. no-AI comparison:",
    taskItems: [
      "Choose a task — ideally one you've done before without AI",
      "Estimate how long it would take without AI and what the result would look like",
      "Do it with AI and write down the time and your assessment of the result",
    ],
    taskType: "ol",
    taskPrompt: "Help me with [specific task]. [Context and instructions].",
    taskFallback:
      "Input: I want to compare writing a business proposal with AI vs. without. Without AI: I estimate 1.5 hours, average quality.\nIn practice:\nWith AI: I gave it context and instructions.\nAI output: [AI generates a proposal draft in 3 minutes]\nComparison: Time with AI: 15 minutes (draft + edits). Time without: estimated 90 minutes. Savings: ~75 minutes. Quality: comparable or better (AI suggested a structure I wouldn't have thought of).",
    taskExample:
      "Input: Comparing meeting agenda prep with AI vs. without. Without AI: 20 minutes, always forget something. With AI: Write an agenda for a client meeting about contract renewal. Goal: align on terms. Attendees: me and the sales director. Duration: 45 minutes.\nAI output: Agenda: 1. Welcome and meeting goal (2 min). 2. Review of the past year — key results (10 min). 3. Proposed terms for the new contract (15 min). 4. Questions and discussion (10 min). 5. Summary and next steps (8 min).\nComparison: 3 minutes vs. 20 minutes. Agenda more structured than usual.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we look at how to turn the challenge into a lasting habit.",
  },
  {
    day: 26,
    title: "Building a habit",
    subject: "From challenge to routine",
    preheader: "The challenge ends. The habit stays.",
    concept: [
      "Over 26 days you've covered mindset, prompting, templates, analysis, and systems. Now comes the most important question: what will stick after the challenge ends?",
      "The challenge has a structure that makes daily AI use easy — a prompt, a task, a teaser for tomorrow. After Day 28, that structure is gone. What replaces it is either a habit you've built or a gradual return to not using AI. The next two days are about making sure it's the former.",
      "How habits work:",
      [
        "They need to be specific: not 'I'll use AI more,' but 'every day I'll open my emails and write one with AI'",
        "They need a trigger: what will remind you to use AI?",
        "They need to be easy: your first version of a habit should take max 5 minutes",
        "They need a reward: what gives you a sense of satisfaction after doing it?",
      ],
      "The specificity requirement is critical. Vague intentions ('I'll use AI more') fail because there's no moment where they become actionable. Specific habits ('before I open my first email of the day, I'll use AI to write the draft reply to the most important one') succeed because they attach to an existing moment in your routine.",
      "Examples of small AI habits:",
      [
        "Morning: one task for the day — let AI suggest the priority",
        "Every draft: start with AI, refine it yourself",
        "Every week: check what I've saved in 'My AI'",
        "Before any meeting: ask AI to help you prepare one key question",
      ],
      "Start with one. Not three, not five — one habit that's so small and specific that skipping it would feel like a conscious choice. Once that's automatic, you can add another. Habits compound just like savings: the earlier you start, the larger the effect.",
    ],
    taskIntro: "Design one specific AI habit for yourself:",
    taskItems: [
      "What exactly will you do? (an action, not an intention)",
      "When will you do it and what's the trigger?",
      "How do you make it simple enough that you'll actually do it?",
    ],
    taskType: "ol",
    taskFallback:
      "Input: I want to set up an AI habit that will last. Realistically I have 5 minutes in the morning.\nAI output: Suggested habit: Every morning with your first coffee, open AI and write: 'What are my 3 priorities for today?' — fill in what you know about your day. AI will suggest a structure or priorities. Takes 3 minutes. Trigger: first coffee. Reward: a clear plan for the day.",
    taskExample:
      "Input: I want a habit around writing — start every draft with AI. How do I set that up so it actually sticks?\nAI output: Rule: 'Before I write anything longer than 5 sentences, I open AI.' Trigger: you open a new document or email. Action: give AI the instruction (template from D18). Takes 2 extra minutes, saves 15. After 3 weeks, it'll be automatic.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "Tomorrow you'll set up your daily AI ritual — specific and under 5 minutes.",
  },
  {
    day: 27,
    title: "Set up your daily AI ritual",
    subject: "Specific, max 5 minutes",
    preheader: "A ritual isn't a luxury. It's the system that carries you.",
    concept: [
      "A ritual is a habit with context. You don't do it just because it's on your list — you do it because it belongs to your day.",
      "The distinction between a habit and a ritual is subtle but real. A habit is a behavior you repeat. A ritual is a behavior you repeat in a specific context that gives it meaning. Morning coffee is a habit for most people. But the specific way you make it, where you sit, what you do while you drink it — that's a ritual. It's more durable because it's integrated into your environment and identity.",
      "A good daily AI ritual has three properties:",
      [
        "It's specific: you know exactly what you'll open, what you'll write, what you'll get",
        "It's short: max 5 minutes, otherwise it won't stick",
        "It delivers immediate value: after the ritual you know or can do something you couldn't before",
      ],
      "The 'immediate value' criterion is especially important. If your ritual produces something useful every time — a clearer plan, a useful draft, a solved problem — your brain starts associating it with a positive outcome. That association is what makes it self-sustaining.",
      "When to slot in your ritual:",
      [
        "Morning (start of day): priorities, planning, getting focused",
        "Before a key task: prep, brainstorming, drafting",
        "End of day: reflection, summary, prep for tomorrow",
      ],
      "You don't need a ritual for every part of your day. Start with one — you'll add others naturally.",
      "The best ritual is the one that fits your existing rhythm. If you always sit down with coffee and scan your calendar in the morning, attach your AI ritual to that moment. Don't try to create a new slot — attach to an existing one. That's the path of least resistance.",
    ],
    taskIntro: "Set up your daily AI ritual — specifically:",
    taskItems: [
      "When: morning / before a specific task / evening?",
      "What exactly will you do: which prompt or action?",
      "What's the trigger and what's the output?",
    ],
    taskType: "ol",
    taskPrompt:
      "Help me set up a daily AI ritual. I have [X minutes] [morning/evening/other]. My most common work is [type of work]. I want to achieve [ritual goal].",
    taskFallback:
      "Input: Help me set up a daily AI ritual. I have 5 minutes in the morning. My most common work is project management. I want a clear plan for the day.\nAI output: Your morning ritual:\nTrigger: second sip of coffee.\nAction: open AI and write: 'I have on my plate today: [list 3–5 things]. What's the priority? What can I delegate or push back?'\nOutput: 3 priorities and one task to move.\nTime: 4 minutes.",
    taskExample:
      "Input: I want an end-of-day ritual — summarize the day and prep for tomorrow. Max 5 minutes.\nAI output: Evening ritual:\nTrigger: closing your laptop.\nAction: write to AI: 'What I completed today: [list]. Unfinished: [list]. What's most important tomorrow?'\nOutput: a clear head and a sharp start tomorrow.\nTime: 3–4 minutes.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow is the final day — your wrap-up. What you've learned, what's next.",
  },
  {
    day: 28,
    title: "Basic wrap-up — what's next",
    subject: "28 days behind you. Now what?",
    preheader: "This isn't the end. It's the foundation.",
    concept: [
      "You've completed 28 days, 5–7 minutes at a time. That's not nothing — most people who 'start with AI' give up after the first week.",
      "Finishing something is underrated. It's easy to start a challenge, read a few emails, try a few prompts, and gradually let it fade. You didn't do that. You showed up for 28 days and built something real — a skill, a system, and a set of habits that will compound over time.",
      "What you covered over four weeks:",
      [
        "Week 1: How to think about AI — leverage, not just speed",
        "Week 2: How to write good prompts — structure, context, iteration",
        "Week 3: How to build your first habits — templates, workflows, Leverage matrix",
        "Week 4: How to build a system — second brain, feedback, routine",
      ],
      "What you have now that you didn't have 28 days ago:",
      [
        "Your own prompt checklist",
        "At least one template for a recurring task",
        "One place for your AI outputs",
        "A daily AI ritual",
        "A realistic view of where AI helps and where it doesn't",
      ],
      "Those five things are not small. They represent the difference between someone who 'uses AI sometimes' and someone who has integrated it into how they work. The first group will always be experimenting. You now have a foundation.",
      "What comes next depends on what you want. If you're satisfied with where you are — great. Maintain your ritual, keep saving outputs, keep refining your templates. The compounding effect will continue without you having to do anything dramatic.",
      "If you want to go further: deeper prompting techniques, prompt chaining, working with AI tools beyond text generation, building your own AI-assisted workflows — that's what Advanced covers. Basic taught you to walk confidently. Advanced will teach you to run.",
      "Whatever you choose: the mindset shift you made in Week 1 is the most durable thing you take from this challenge. AI as leverage, not just speed. That lens will keep changing how you see your work — long after the challenge ends.",
    ],
    taskIntro: "Final task — three things:",
    taskItems: [
      "Write down (or tell AI): what did you actually accomplish over 28 days? Be specific, not vague.",
      "What from the challenge will stick — one habit, one template, one insight?",
      "What do you want to do as your first step after the challenge ends?",
    ],
    taskType: "ol",
    taskPrompt:
      "I just completed a 28-day AI challenge. I accomplished: [what specifically]. What will stick: [habit or system]. I want to go further with: [what interests you or where you want to grow]. Summarize this as a small milestone and suggest one concrete next step.",
    taskFallback:
      "Input: I completed a 28-day AI challenge. I accomplished: writing better prompts, a newsletter template, a daily ritual. What will stick: my morning AI check-in. I want to go further: automation and AI for data analysis.\nAI output: Milestone: in 28 days you went from zero to a working system — that's not a given. You have a template, a ritual, and a realistic view of AI. First step into Advanced: try ChatGPT Code Interpreter or Claude with a CSV file — upload a data file and let AI find patterns. You'll see immediately where the edge is.",
    taskExample:
      "Input: What would AI recommend as a first step after Basic if I'm interested in deeper prompting and my own workflows?\nAI output: First step: take your most-used template from Basic and develop it into a chain-of-thought sequence — instead of one prompt, build a three-step process. Step 1: AI proposes the structure. Step 2: you fill in the content. Step 3: AI checks the tone and length. That's the foundation of workflow thinking in Advanced.",
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Advanced is waiting — deeper prompting, automation, and AI workflows. See you there.",
  },
];
