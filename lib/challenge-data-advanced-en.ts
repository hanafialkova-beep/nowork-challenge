import type { ChallengeDay } from "./types";

export const challengeDataAdvancedEN: ChallengeDay[] = [
  {
    day: 0,
    title: "Welcome to the Advanced version. This is a different level.",
    subject: "Advanced start: systems, frameworks, leverage.",
    preheader: "For those who already have the basics. Now it's time to go deeper.",
    concept: [
      "You're here because you've moved past the basics. You know how to give AI a task. Maybe you use it every day. And yet you sense there's more — that you're getting a fraction of what AI could actually offer.",
      "That's exactly why this version of the challenge exists.",
      "We're not starting with what AI is or how to use it. We're starting with the question: how do you build a system that works even when you're not there?",
      "This challenge has three layers:",
      [
        "3C framework — Capture, Clean, Connect: how to turn knowledge chaos into something you can actually use",
        "PACT framework — Projects, Agents, Context, Tools: how to think about AI as a system, not a bag of tricks",
        "Superpowers — five capabilities you genuinely gain through AI collaboration: perception, intelligence, memory, creation, connection",
      ],
      "Each day takes 5–10 minutes. Theory days are shorter. Practice days are more concrete. The goal is to build — not just read.",
      "Here's the first thing we'll do: reflect on where AI currently falls short for you.",
      "Not where you think AI could theoretically help. But where specifically in your work it lets you down — where you have to rewrite the output, where the result is useless, where you lose more time with AI than without it.",
      "This is your starting point. It's not self-criticism — it's mapping the terrain. The next 28 days will be more useful if you know where you're beginning.",
    ],
    taskIntro:
      "Write 3 areas where AI currently falls short for you or where you want to go significantly deeper. Be specific — not 'I want to prompt better', but 'client-facing outputs always need full rewrites' or 'I don't know how to bring AI into strategic planning.'",
    taskItems: [],
    taskType: "text",
    taskFallback: `If you're not sure where to start, try answering these questions:
– Where do I always have to heavily rework AI output?
– What do I do repeatedly where AI doesn't help me the way I'd want?
– Where do I feel like others are getting more out of AI than I am?

In practice — three specific answers:
→ Client deliverables are always generic — I have to rewrite everything into the project's context.
→ I don't know how to use AI for strategic planning without results being shallow.
→ I use AI for content creation but have no system for keeping what works.`,
    taskExample: `Input: "Where does AI currently fall short for me?"

AI output — three concrete entries:
1. Preparing client proposals: AI suggests a structure but doesn't know the project or client context — I rewrite about 60% of the result every time.
2. Project retrospectives: I have no system for capturing lessons from projects and feeding them back to AI as context for future work.
3. Delegating AI tasks to my team: I use AI myself but don't know how to introduce a system that works for everyone.

These are exactly the areas this challenge will address.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we'll introduce the 3C framework — and why knowledge chaos holds back even the best prompts.",
  },
  {
    day: 1,
    title: "3C framework: Capture, Clean, Connect as one system.",
    subject: "Why knowledge chaos holds back even good prompts.",
    preheader: "Knowledge without a system isn't knowledge. It's just data.",
    concept: [
      "One of the most common reasons AI outputs are mediocre has nothing to do with the prompt itself.",
      "It has everything to do with the input. With what you give AI to work with.",
      "If you're working with chaos — notes scattered everywhere, ideas unwritten, project lessons buried in emails — even the best prompt produces average results. Garbage in, garbage out applies twice as hard with AI.",
      "The 3C framework is a system for working with knowledge in an AI context:",
      [
        "Capture — what's worth saving and what isn't. Filtering is a skill, not just a habit.",
        "Clean — transforming raw material into usable knowledge. This is the step most people skip.",
        "Connect — linking old knowledge to current work. An old insight can unlock a new solution.",
      ],
      "Three steps, one system. It only works as a whole.",
      "Capture without Clean = a pile of notes you never use.",
      "Clean without Connect = isolated knowledge with no context.",
      "Connect without Capture = linking things you never actually saved.",
      "Over the next few days we'll break each step into theory and practice. Today's goal: understand why a system matters more than any single prompt.",
      "The best AI outputs don't come from the smartest prompts. They come from the best context. And context comes from a system.",
    ],
    taskIntro:
      "Reflect on how you currently work with knowledge from your job. Answer these three questions:",
    taskItems: [
      "Where do you capture insights, ideas, and important information from your work? (One place, or scattered chaos?)",
      "How do you process raw material — notes, transcripts, rough drafts — into something usable?",
      "How do you return to old knowledge and insights when tackling a new problem?",
    ],
    taskType: "ol",
    taskFallback: `If you don't know how to answer, try this prompt:

"Help me map how I currently work with knowledge from my job. Ask me 5 specific questions that help me understand where the gaps are in my knowledge management system."

AI will ask you questions — answer them and ask it to summarize the state of your system.`,
    taskExample: `Input: "How I work with knowledge from my job — current state"

AI output (after filling in answers):
Capture: I use an inbox in Notion but fill it inconsistently — sometimes I capture project insights, sometimes I don't.
Clean: I rarely process raw material (meeting notes). Occasionally I summarize key points, but with no consistent format.
Connect: I rarely return to old insights — I rely on memory.

Conclusion: Capture partly works. Clean barely exists. Connect is accidental.
Priority: Introduce Clean as a regular step after every meeting and project.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we look at the first step — Capture: what's worth saving and what isn't.",
  },
  {
    day: 2,
    title: "Capture: not everything is worth saving.",
    subject: "Capture — filtering is a skill, not just a habit.",
    preheader: "Capturing everything is just as bad as capturing nothing.",
    concept: [
      "The first step of the 3C system is Capture — saving valuable information from your work.",
      "But here's the trap most people fall into: they try to capture everything. The result is a pile of notes they never actually use.",
      "Capture isn't about maximum collection. It's about filtering.",
      "Filter principles — what's worth capturing:",
      [
        "Lessons from practice: what worked, what didn't, what you'd decide differently next time",
        "Recurring patterns: what keeps happening — in projects, communication, decisions",
        "Context for AI: information you'll want to give AI as context — about a client, a project, yourself",
        "Decisions and their reasons: not just what was decided, but why",
      ],
      "What you don't need to capture:",
      [
        "General information that's easy to look up",
        "Facts without context or connection to your actual work",
        "Things that probably won't come up again and aren't transferable",
      ],
      "Quality Capture is selective. Better to save less but meaningfully — than everything and use none of it.",
      "Today's goal: understand your own filter and set up one place where you capture things that matter.",
    ],
    taskIntro:
      "Capture 5 things from this work week that are worth keeping. They don't need to be polished thoughts — raw captured material is fine. For each one, write one sentence: why you captured it.",
    taskItems: [],
    taskType: "text",
    taskFallback: `If you're not sure what to capture, use this prompt:

"Help me capture the key things from this work week. Ask me 5 questions focused on: what worked, what didn't, what decision I made and why, what surprised me, and what I'd do differently next time."

Answer the questions — you'll have the basis for 5 captured items.`,
    taskExample: `Input (raw material from the week, given to AI):
"This week: client meeting about contract renewal, report draft, internal project retrospective, new vendor — first call, Q2 budget rejected."

AI output — 5 things worth capturing:
1. Client meeting: what specific objections came up and how I responded (Why: be better prepared next time).
2. Retrospective: three things the team would do differently (Why: recurring patterns).
3. New vendor: first impression, key parameters of the relationship (Why: context for future conversations).
4. Rejected budget: what the real reason for rejection was (Why: pattern for future requests).
5. Report draft: what worked in the structure, what was unclear (Why: foundation for a template).`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we look at what to do with that raw material — the Clean step: processing is not the same as storing.",
  },
  {
    day: 3,
    title: "Clean: processing is not the same as storing.",
    subject: "Clean — raw material isn't enough. You need usable knowledge.",
    preheader: "Saving a note and processing it are two very different things.",
    concept: [
      "You have things recorded. Meeting notes. A call transcript. A rough draft of an idea. An email with key information.",
      "And for most people, that's where it ends. The material sits there, never processed further.",
      "Clean is the step most people skip — and that's exactly why their 'knowledge system' doesn't work.",
      "Processing is not the same as storing. Saving a raw meeting note is not Clean. Clean is transforming raw material into usable knowledge.",
      "What that looks like in practice:",
      [
        "Raw notes → structured summary with key decisions and next steps",
        "Rough draft → clean text with clear structure and redundancies removed",
        "Transcript → extract with the most important points and context",
        "Pile of notes → set of organized entries with categories",
      ],
      "Why this step is critical for AI work: AI works best with clean, structured input. If you give it a raw transcript, you get an average output. If you give it a structured summary with context, the output is an order of magnitude better.",
      "Clean doesn't have to take hours. With AI it can take 5–10 minutes. The key is consistency — not perfection.",
    ],
    taskIntro:
      "Take one piece of raw material from your work (meeting notes, a transcript, a rough draft, or a pile of thoughts) and process it with AI into a structured output. Steps:",
    taskItems: [
      "Copy the raw material into AI",
      "Prompt: 'Process this material into a structured summary. List: key points, decisions, open questions, and suggested next steps. Format: clear bullet points.'",
      "Save the result as a clean document — not a copy of the raw material",
    ],
    taskType: "ol",
    taskFallback: `If you don't have suitable material on hand, use this practice example:

Raw input (copy into AI):
"Meeting with Alex and Sarah about Q3 planning. Alex said something about shifting priorities, Sarah wants more focus on product, I brought up the marketing thing, then we got to budget, some tension there, eventually agreed that Alex will summarize by Friday but it's not clear in what format, and we also talked about hiring."

Prompt: "Process this raw meeting record into a structured summary: key points, decisions made, open questions, next steps with ownership."`,
    taskExample: `Input (raw meeting notes):
"Today's meeting on onboarding a new client. Jamie mentioned they have an internal system we should respect. Chris said the timeline is tight. We agreed on a pilot phase. Someone brought up reporting but I'm not sure who's responsible for it. Next meeting probably in 2 weeks."

AI output (after Clean):
Key points:
– Client has an internal system that needs to be integrated into the collaboration process
– Timeline is tight — risk needs to be managed from the start

Decisions:
– Collaboration will begin with a pilot phase (scope to be defined)

Open questions:
– Who is responsible for reporting? (not decided)
– What exactly does the client's internal system look like?

Next steps:
– Define pilot scope by [date]
– Resolve reporting ownership
– Schedule follow-up meeting in 2 weeks`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we add the third step of the 3C system: Connect — how an old insight unlocks a new solution.",
  },
  {
    day: 4,
    title: "Connect: old insight, new solution.",
    subject: "Connect — link what you know to what you're solving.",
    preheader: "The biggest leverage isn't in new information. It's in old information, used well.",
    concept: [
      "The third step of the 3C system is the least intuitive — and the most valuable.",
      "Connect means linking old knowledge to current work. Finding connections between what you already know and what you're working on right now.",
      "Why it's so valuable: most problems you face are variations of problems you've faced before. They just look different, have a different name, a different context.",
      "Without a Connect system, knowledge sits in a drawer — captured, processed, but unused.",
      "How Connect works in practice with AI:",
      [
        "Give AI the context of an old project or insight and the current problem",
        "Ask it for connections, analogies, or transferable lessons",
        "AI helps surface parallels you might have missed on your own",
      ],
      "Connect is most powerful when you have a solid Capture and Clean base. The higher the quality of your processed knowledge, the more precise and valuable the connections AI will suggest.",
      "What this sounds like in practice: 'Here's a situation I'm dealing with. Here are insights from a similar project last year. What connections do you see? What could I apply — and what should I avoid?'",
      "This is how you stop solving every problem from scratch. You start building on what you already know.",
    ],
    taskIntro:
      "Take a current problem or challenge you're working on and one old insight, project, or situation that might be relevant. Feed this pair to AI and ask for connections.",
    taskItems: [
      "Describe the current situation or problem (3–5 sentences)",
      "Add context from an old project, decision, or experience that came to mind",
      "Prompt: 'What connections do you see between these two situations? What could be transferred, what should be avoided, and what is the key difference in context?'",
    ],
    taskType: "ol",
    taskFallback: `If no specific example comes to mind, try this prompt:

"Help me find Connect between old and new knowledge. Ask me about a current challenge I'm working on and three projects or situations from the past that might be relevant. Then help me identify transferable lessons."

AI will help you surface both the material and the connections.`,
    taskExample: `Input:
Current situation: "We're rolling out a new content approval process in the team. It's taking longer than expected and people are bypassing it."
Old insight: "Two years ago we introduced a new reporting system — we hit similar resistance, but eventually simplified the form to 3 fields and adoption jumped."

AI output (Connect):
Core connection: In both cases this is about friction — a new process adds steps without an immediate benefit for the person who has to follow it.

What to transfer:
– Simplify the first version of the process to the minimum required steps (analogous to: 3 fields vs. a full form)
– Show a quick win for the user, not just for management

What not to do:
– Don't push for compliance before the benefit is visible

Key contextual difference:
Content work has a creative dimension — an overly rigid process can hurt quality. Reporting was purely administrative. The content approval process should be lighter.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we run through the full 3C system in practice — and see where the gaps are in your approach.",
  },
  {
    day: 5,
    title: "3C in practice: Capture, Clean, Connect as one movement.",
    subject: "Run the full 3C system on one real example.",
    preheader: "Theory is done. Now run the whole system from start to finish.",
    concept: [
      "You understand Capture, Clean, and Connect as individual steps. Today it's time to connect them into a single movement.",
      "The 3C system works as a loop, not a one-time procedure. Capture → Clean → Connect → back into work → new things to Capture.",
      "When to trigger the loop: after every meeting, after closing a project, after a decision, after reading important content, after feedback from a client or colleague.",
      "How fast it goes with AI: the whole loop can take 10–15 minutes once you know what you're doing.",
      "The full 3C loop with AI:",
      [
        "Capture: What's worth saving? (2-minute filter)",
        "Clean: Feed raw material to AI and have it structured (5 minutes)",
        "Connect: Add context and ask for connections to old knowledge or analogies (3–5 minutes)",
      ],
      "At the end you have a clean, usable output connected to what you already know. This output then serves as context for future work.",
      "Today's goal is to run through the entire loop once, start to finish — on real material from your work.",
    ],
    taskIntro:
      "Choose one piece of material from this week (a meeting, project, decision, or feedback) and run it through the full 3C loop. Three steps in sequence:",
    taskItems: [
      "Capture: Write why this material is worth saving and what specifically is worth keeping in it",
      "Clean: Feed the raw material to AI and have it structured into a clear summary",
      "Connect: Add one piece of old context and ask AI for connections — what to transfer, what to avoid",
    ],
    taskType: "ol",
    taskFallback: `If you don't have material on hand, practice the 3C loop on this scenario:

"This week I attended a workshop on agile planning. There was a lot of information — some I knew, some was new. I'm not sure what's actually relevant to my work."

Capture: What from the workshop is worth keeping?
Clean: Feed the key points to AI for structuring
Connect: How does this relate to how you currently plan at work?`,
    taskExample: `Input (raw material — project retrospective):
"The project was overall okay, but client communication broke down in the final third. Deadlines kept slipping. Alex said the client wasn't available, I think we could have escalated sooner. The output was good, client satisfied. Next time we should have clearer milestones."

3C output:

Capture — why it's worth saving:
A recurring pattern: communication breakdowns in the final phase of a project. Relevant for the next project with a similar client profile.

Clean (AI output):
Key points: Project successfully completed, client satisfied. Communication broke down in the final third — missing escalation protocol.
Decision: Set clear milestones and an escalation path for the next project.
Next step: Create a template for managing communication in the closing phase of a project.

Connect (connection to old project):
Old context: A similar situation came up with client X — what helped was introducing a weekly check-in email in the final month.
Connection: Apply the same check-in system with clients who have low availability.
Risk: Not all clients respond the same way to structured communication — adjust frequency accordingly.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: reflection — where your 3C system works, where the gaps are, and one concrete step to improve.",
  },
  {
    day: 6,
    title: "3C reflection: where the system works and where the gaps are.",
    subject: "Week 1 done — time to look at where you stand.",
    preheader: "Reflection isn't evaluation. It's setting the compass for the next 7 days.",
    concept: [
      "You've been through the whole first week: the 3C framework from theory to practice.",
      "Reflection isn't about self-criticism. It's about looking at what works and identifying one concrete step to improve.",
      "Three questions for your 3C reflection:",
      [
        "Capture: Do you capture things systematically, or only when you remember? Do you have one place, or chaos across multiple locations?",
        "Clean: Do you process material regularly, or does it pile up unprocessed? Do you have a format that's worked for you?",
        "Connect: Do you return to old knowledge deliberately, or do you rely on memory and chance?",
      ],
      "The goal of reflection isn't to answer 'everything works perfectly'. The goal is to identify one concrete step — not the whole system, but one step — that you'll take next week.",
      "Examples of a concrete step:",
      [
        "I'll block 10 minutes every Friday afternoon for Clean",
        "I'll create one place in Notion just for captured project insights",
        "Next time I start a new problem, I'll check old notes from similar projects first",
      ],
      "A small step applied consistently creates a bigger shift than a perfect system applied once.",
    ],
    taskIntro:
      "Run through your 3C reflection. Write the status for Capture, Clean, and Connect — what works, what doesn't. Then choose one concrete step to improve and write when and how you'll do it.",
    taskItems: [
      "Capture — status: what works, what doesn't",
      "Clean — status: what works, what doesn't",
      "Connect — status: what works, what doesn't",
      "One concrete improvement step: what, when, how",
    ],
    taskType: "ol",
    taskFallback: `If you're not sure how to approach the reflection, try this prompt:

"Help me do a reflection on my 3C knowledge system. Ask me questions about each of the three steps — Capture, Clean, Connect — then help me identify one concrete step to improve."

AI will ask questions and help you structure the reflection.`,
    taskExample: `Input (reflection given to AI):
"Capture: I capture inconsistently — mostly important things, but not regularly. Clean: Almost never — notes pile up unprocessed. Connect: I rely on memory."

AI output (reflection + recommendation):
Status:
– Capture: Partly functional. Filtering is good, but consistency and a single place are missing.
– Clean: Critical gap. Raw material accumulates not because of missing Capture but because Clean never happens.
– Connect: Weakest link. Without clean knowledge there's nothing to connect.

Priority for improvement:
Clean is the bottleneck of the whole system. Without processing, even captured things are unusable.

Concrete step:
Every Friday, 10 minutes: open notes from the week and process the most important ones into a structured summary using AI. One summary per week is better than zero.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Next week we move to the PACT framework — and start thinking about AI as a system, not a bag of tricks.",
  },
  {
    day: 7,
    title: "PACT framework: Projects, Agents, Context, Tools.",
    subject: "Why a framework beats random tool-picking.",
    preheader: "Without structure, AI becomes just another tool adding noise.",
    concept: [
      "Week 2 of the challenge is about the PACT framework — a way to think about AI in a work context systematically.",
      "PACT has four elements:",
      [
        "Projects — how to bring AI into real projects with clear structure and outputs",
        "Agents — when AI agents and multi-step workflows make sense, and when they're unnecessarily complex",
        "Context — why context determines output quality more than the prompt itself",
        "Tools — how to choose tools based on function, not hype",
      ],
      "Why a framework beats random selection: without structure, AI becomes another tool you use ad hoc. With a framework, it becomes part of how you work.",
      "The difference in practice: without PACT, you ask 'What AI tool should I try?' With PACT, you ask 'What result do I want, and how can AI systematically help me get there?'",
      "PACT isn't a rigid methodology. It's a way of thinking. Four questions you ask whenever you're thinking about bringing in AI:",
      [
        "Is this a project with clear structure, or a one-off task?",
        "Is this a complex recurring task where an agent or workflow would help?",
        "Do I have enough context for the output to be high quality?",
        "What tool is actually right for this situation?",
      ],
      "This week we'll break each PACT element into theory and practice. The goal: by the end of the week, know exactly how to bring AI into your work systematically.",
    ],
    taskIntro:
      "Reflect on your current work and answer the four PACT questions. The goal isn't perfect answers — it's mapping where you are right now.",
    taskItems: [
      "Projects: Which current project could have a clear AI-assisted structure? (one example)",
      "Agents: Do you have a complex recurring task where a multi-step workflow might work? (one example or 'not sure yet')",
      "Context: What context about yourself, your role, or your work does AI not have — and that would meaningfully improve outputs?",
      "Tools: Which AI tools do you use and why — or are you using them randomly without clear reasons?",
    ],
    taskType: "ol",
    taskFallback: `If you're not sure how to answer the PACT questions, try this prompt:

"Help me map how I use AI at work through the PACT framework. Ask me questions about Projects, Agents, Context, and Tools — then help me identify where the biggest opportunity for improvement is."`,
    taskExample: `Input: "How I use AI at work — PACT analysis"

AI output (after answering questions):
Projects: I use AI for individual tasks, not for project structure. Tried WBS once — it worked. Opportunity: introduce WBS as a standard step at the start of every project.
Agents: I have a workflow on paper but haven't used it consistently. Opportunity: simplify to 2 steps so it's actually usable.
Context: AI doesn't know my industry specifics, internal terminology, or typical objections in business conversations.
Tools: Claude for writing, ChatGPT for quick answers — but the choice isn't systematic, it's just habit.

Biggest opportunity: Context. Investing in a system prompt with role and client context will immediately improve output quality.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we dig into Projects — how to plan a real project with AI using WBS.",
  },
  {
    day: 8,
    title: "Projects: plan a real project with AI using WBS.",
    subject: "Projects — AI as a collaborator on project structure.",
    preheader: "AI doesn't know your project. But if you describe it, it can help you break it down.",
    concept: [
      "The first element of the PACT framework is Projects — how to bring AI into real project work.",
      "The most common mistake: AI gets used for individual parts of a project (write an email, summarize a document), but not for the project as a whole. The result is fragmented help with no added value at the whole-project level.",
      "Work Breakdown Structure (WBS) is a technique that breaks a project into clear layers of outputs and steps. With AI, you can create it quickly — and the result serves as a foundation for the entire project.",
      "How WBS with AI works: you describe the project — goal, scope, key constraints — and AI helps you:",
      [
        "Identify main phases and deliverables",
        "Break phases down into concrete steps",
        "Flag dependencies and risks",
        "Suggest a rough time estimate",
      ],
      "WBS with AI isn't a final plan. It's a starting point — a quick overview that you then adjust to reality.",
      "When AI really helps with Projects: when you have a project that's complex or new, where the scope isn't clear, or where you need a structure quickly for stakeholder communication.",
      "Today's goal: take one real project and have AI create a WBS for it.",
    ],
    taskIntro:
      "Choose one current project — ideally one where the scope or structure isn't fully clear. Give AI a description of the project and ask for a WBS.",
    taskItems: [
      "Write a project description: what's the goal, what's in scope, who's involved, what's the rough timeline",
      "Prompt: 'Create a WBS for this project. Break it into main phases, key deliverables in each phase, and concrete steps. Flag dependencies and potential risks.'",
      "Review the result and adjust to reality — add what AI missed, remove what doesn't make sense",
    ],
    taskType: "ol",
    taskFallback: `If you don't have a suitable project on hand, use this practice scenario:

Project: "Introducing a new onboarding process for new employees. Goal: reduce the time to full productivity from 3 months to 6 weeks. Involved: HR, direct manager, IT. Timeline: Q3."

Feed this description to AI with a WBS request and review the result.`,
    taskExample: `Input:
"Project: Customer portal redesign. Goal: improve UX and reduce support ticket volume by 30%. Scope: frontend and navigation only, no backend changes. Involved: product team, UX designer, development, customer support. Timeline: 4 months."

AI output (WBS):
Phase 1 — Discovery (4 weeks)
– Analysis of current support tickets: categorize issues
– User research: 5–8 interviews with key users
– Heuristic analysis of the current portal
– Output: Discovery report with prioritized problems

Phase 2 — Design (6 weeks)
– Wireframes for key flows
– User testing of wireframes
– Hi-fi prototype
– Output: Approved design ready for development

Phase 3 — Development (8 weeks)
– Frontend implementation by component
– QA testing
– Output: Functional portal ready for deployment

Phase 4 — Launch & Monitoring (2 weeks)
– Staged rollout
– Track support tickets and UX metrics
– Output: Evaluation and next steps

Dependencies: Design must be approved before development begins.
Risk: User research may uncover issues outside scope — clear boundaries needed.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: Agents — what AI agents are, when they make sense, and when they're overkill.",
  },
  {
    day: 9,
    title: "Agents: when they make sense and when they're overkill.",
    subject: "Agents — what AI agents are and how to think about them.",
    preheader: "An agent isn't magic. It's a workflow. And a workflow has to make sense.",
    concept: [
      "The second element of PACT is Agents — AI agents and automated workflows.",
      "What an AI agent is: simply put, it's AI that doesn't just do one task but a sequence of steps — reacting to the output of the previous step, deciding what to do next, and potentially calling tools or other AI models.",
      "When agents make sense:",
      [
        "A complex recurring task with a clear sequence of steps",
        "A task where each step depends on the result of the previous one",
        "A task where human intervention is unnecessary or too slow",
      ],
      "When agents don't make sense:",
      [
        "A simple task that one prompt can handle",
        "Situations where context or judgment requires a human",
        "Prototyping or exploratory work — agents add complexity without value",
      ],
      "The most common mistake: using an agent just because it sounds advanced. Agents add complexity — and that only makes sense if it adds proportional value.",
      "A practical rule: start with a simple prompting workflow. Add automation or agents only when you feel that manual steps are the bottleneck.",
      "Today is a theory day — the goal is to understand when and why, not to start building. Tomorrow we'll try a multi-step workflow in practice.",
    ],
    taskIntro:
      "Reflect on your work and identify 2–3 complex recurring tasks where a multi-step workflow or agent might make sense. For each task, assess:",
    taskItems: [
      "What is the task and how often does it recur?",
      "What steps does it involve — are they dependent on each other?",
      "Where is the bottleneck: time, consistency, or quality?",
      "Does an agent or workflow make sense, or would a better prompt be enough?",
    ],
    taskType: "ol",
    taskFallback: `If you're not sure how to approach the analysis, try this prompt:

"Help me identify complex recurring tasks in my work where an AI agent or multi-step workflow might make sense. Ask me about my most frequent recurring tasks and help me assess where automation adds value and where it's unnecessary."`,
    taskExample: `Input: "Recurring tasks suitable for agent/workflow analysis"

Task 1: Weekly management summary
Steps: Gather data from Notion + email + Slack → structure → write summary → send.
Dependencies: Yes (summary depends on data).
Bottleneck: Time (45 min/week), format consistency.
Verdict: Suitable for a workflow — but start with a manual prompt using a template. Add automation after 4 weeks.

Task 2: Follow-up after every meeting
Steps: Open notes → structure → write follow-up email → send.
Dependencies: Minimal.
Bottleneck: Quality and time.
Verdict: A good prompt and a template are enough. An agent is overkill.

Task 3: New client onboarding
Steps: Welcome email → system access → briefing documentation → first meeting agenda.
Dependencies: Yes (sequential).
Bottleneck: Consistency and time.
Verdict: Suitable for a multi-step workflow. Worth setting up.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we actually break down one complex recurring task into a multi-step workflow.",
  },
  {
    day: 10,
    title: "Agents in practice: build a multi-step workflow for a complex recurring task.",
    subject: "Build a workflow that works even when you're not there.",
    preheader: "The best workflow is one you can run in 2 minutes tomorrow.",
    concept: [
      "You know the theory of agents and when they make sense. Today we actually build one multi-step workflow.",
      "A multi-step AI workflow works like this: a series of connected prompts where the output of one step is the input of the next. You don't need special software — just a clear sequence and the discipline to follow it.",
      "The basic building blocks of a workflow:",
      [
        "Trigger: what starts the workflow? (a meeting, a new project, end of the week, an incoming email)",
        "Steps: what happens in each step? (input, prompt, expected output)",
        "Output: what is the final result of the whole workflow?",
        "Storage: where does the result go and in what format?",
      ],
      "Example of a simple workflow: Post-meeting processing",
      [
        "Trigger: meeting ends",
        "Step 1: Copy notes or key points into AI → Clean (structured summary)",
        "Step 2: Output of Step 1 → Connect (what connections to old projects or decisions?)",
        "Step 3: Output of Step 2 → Follow-up email draft",
        "Output: Clean summary + follow-up email → saved in Notion + sent",
      ],
      "Key principle: the workflow must be simple enough that you'll actually return to it. A complex workflow you never use is worse than a simple prompt you use every day.",
    ],
    taskIntro:
      "Take one of the complex recurring tasks you identified yesterday and build a multi-step workflow for it. Document it in this structure:",
    taskItems: [
      "Workflow name and trigger (what starts it)",
      "Step 1: input → prompt → output",
      "Step 2: input (= output of step 1) → prompt → output",
      "Step 3 (if needed): input → prompt → output",
      "Final output and where it's stored",
    ],
    taskType: "ol",
    taskFallback: `If you're not sure where to start, build a workflow for this scenario:

Workflow: Processing output from a webinar or online course
Trigger: I finish a webinar or online course
Step 1: Webinar notes → AI Clean → structured summary of key points
Step 2: Summary → AI Connect → what's relevant to my current work or projects?
Step 3: Relevant points → AI Action → concrete steps I'll take this week
Final output: Actionable document saved to Notion`,
    taskExample: `Workflow: Preparing for a strategic meeting
Trigger: Strategic meeting is on the calendar 48 hours out

Step 1 — Context:
Input: Meeting description + agenda
AI prompt: "Summarize what the goal of this meeting is and what I need to know or decide. What questions should be answered?"
Output: Overview of goal and key questions

Step 2 — Preparation:
Input: Output of Step 1 + relevant materials (old project, data, feedback)
Prompt: "Based on these materials, draft a meeting agenda, key arguments, and potential objections."
Output: Agenda + arguments + risks

Step 3 — Brief:
Input: Output of Step 2
Prompt: "Condense the whole preparation into a one-page brief I'll read 30 minutes before the meeting."
Output: One-page brief

Final output: Brief saved in Notion + shared with relevant colleagues`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we look at Context — why context determines output quality more than the prompt itself.",
  },
  {
    day: 11,
    title: "Context: why context decides more than the prompt.",
    subject: "Context — the most underestimated element of the entire PACT framework.",
    preheader: "Two identical prompts. Two completely different results. The only difference: context.",
    concept: [
      "The third element of PACT is Context — and it's probably the most underestimated of all four.",
      "Here's the key insight: two people give AI the exact same prompt. One gets a mediocre result, the other gets an excellent one. What's different? Context.",
      "Context isn't just the role you assign AI ('You are an experienced...'). Context is everything AI needs to know for the output to be relevant — to you, your situation, your customer, your market.",
      "Layers of context:",
      [
        "Personal context: who you are, what you do, what company, what market",
        "Project context: what kind of project, what phase, who the stakeholders are",
        "Communication context: who the output is for, what their background is, what they need to know",
        "Preference context: what the output should look like — tone, length, format, what to avoid",
      ],
      "Why most people skip this: it seems tedious. But investing in a good system prompt (context document) takes 20–30 minutes once — and then you use it for months.",
      "The practical impact: with good context, an average prompt produces a good output. Without context, even a great prompt won't produce results you can use directly.",
      "Tomorrow you'll write your own working system prompt. Today's goal: understand why context decides.",
    ],
    taskIntro:
      "Run an experiment with two prompts. Give AI the same task twice — once without context, once with rich context. Compare the results.",
    taskItems: [
      "Choose one specific work task (an email, a summary, an analysis, a recommendation)",
      "Give it to AI without context — exactly as someone who doesn't know how to use AI would",
      "Give it again with full context: who you are, for whom, in what context, what the output must achieve",
      "Compare the two results: how do they differ? Which would you actually use?",
    ],
    taskType: "ol",
    taskFallback: `If you're not sure what task to pick, try this pair:

Without context:
"Write a recommendation for a customer."

With context:
"You are a senior consultant at a B2B SaaS company focused on HR technology. Write a recommendation for a customer (HR director at a manufacturing company, 500 employees) who is considering implementing a new onboarding system. The customer is skeptical about technology changes and needs to see ROI within 12 months. Tone: professional and concrete. Length: max 200 words."`,
    taskExample: `Experiment: recommendation email

Without context — prompt:
"Write an email with a recommendation for a client."
AI output: Generic formal email, 8 sentences, nothing adapted to the situation — would need a complete rewrite.

With context — prompt:
"You are a project manager at a technology consulting firm. The client is the CFO of an e-commerce company considering a switch to a new ERP system. The client is data-driven and prefers concise, direct communication. The project costs $250k, implementation is 8 months. Write an email recommending we move to a pilot phase. Tone: matter-of-fact and confident. Max 150 words."
AI output: Email precisely targeted at the CFO, referencing specific ROI expectations, proposing a pilot phase with a clear next step — sent it directly.

Conclusion: The contextualized prompt produced a usable result. The non-contextualized prompt produced garbage.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll write a system prompt for your work context — and from that point, every output will be an order of magnitude better.",
  },
  {
    day: 12,
    title: "Context in practice: write your working system prompt.",
    subject: "System prompt — invest once, benefit every day.",
    preheader: "One document that turns every AI output into a result ready to use.",
    concept: [
      "You understand why context decides. Today you write it.",
      "A system prompt is a document you give AI as context at the start of every session or project. It contains the most important things AI needs to know for its outputs to be relevant to you.",
      "What a good working system prompt includes:",
      [
        "Who you are: role, company, industry, experience",
        "Who you work for: type of clients or stakeholders, their background, what matters to them",
        "How you communicate: tone, length, formats, what to avoid",
        "What AI must never do: what would ruin outputs or not fit your situation",
        "Specific context: terminology, internal rules, constraints",
      ],
      "Your system prompt doesn't need to be perfect from the start. Begin with a first draft and refine it as you learn what works.",
      "How to use it: paste it into every new project or session as the first message. Or set it as instructions in Claude Projects, ChatGPT Projects, or Gemini.",
      "Long-term effect: with a good system prompt, you stop spending time re-explaining context over and over. AI starts functioning like a colleague who knows your situation.",
    ],
    taskIntro:
      "Write the first draft of your working system prompt. Use this approach:",
    taskItems: [
      "Prompt AI: 'Help me write a working system prompt. Ask me 8–10 questions about my role, clients, communication style, and preferences for AI outputs.'",
      "Answer the AI's questions — be specific, not generic",
      "Ask AI: 'Based on my answers, write a system prompt in the first person that I'll use as context for my work.'",
      "Review the result, adjust anything that doesn't match reality, and save it as 'My working system prompt'",
    ],
    taskType: "ol",
    taskFallback: `If you want to start without AI, use this template and fill it in:

I am a [role] at a [type of company/industry]. I primarily work with [type of clients/colleagues/stakeholders].
I communicate [tone: formally/informally] and prefer [length: concise/detailed] outputs.
Outputs should be in [format: bullet points/paragraphs/tables].
I avoid [what you don't want: jargon, generalities, excessive formality...].
Key terminology from my field: [3–5 terms].
What AI must know about my context: [company specifics, clients, projects].`,
    taskExample: `Output (example working system prompt):

I am a product manager at a B2B SaaS company focused on HR technology. I work with an internal development team (8 people), C-level leadership (CEO, CTO), and key customers (HR directors at companies with 200–2,000 employees).

I communicate directly and concisely — I prefer bullet points over paragraphs, outputs max 200 words unless specified otherwise. I avoid buzzwords, vague recommendations, and phrases like 'it depends on the situation' without concrete guidance.

Outputs for customers: friendly and confident tone, focused on results and ROI.
Outputs for the internal team: direct, technical tone where needed, oriented toward decisions and next steps.
Outputs for leadership: concise, focused on strategic impact, always with a recommendation.

Specifics: our company is at Series A stage, primary market is the US. Customers are conservative and adopt technology changes slowly.

Never: suggest solutions that assume significant internal IT resources on the customer's side.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we wrap up Week 2 with a PACT checkpoint — what from the framework you're actually using and where the gaps are.",
  },
  {
    day: 13,
    title: "PACT checkpoint: what from the framework you're actually using.",
    subject: "Week 2 done — PACT reflection and gaps in your approach.",
    preheader: "A framework is a tool. If you're not using it, it's just theory.",
    concept: [
      "You've been through the full PACT framework: Projects, Agents, Context, Tools.",
      "A checkpoint isn't about grading yourself. It's about looking at what from the framework actually works in your day-to-day — and what stayed theoretical.",
      "Four questions for your PACT checkpoint:",
      [
        "Projects: Are you bringing AI into projects systematically with a clear structure, or just ad hoc for individual tasks?",
        "Agents: Do you have at least one workflow that functions and that you use regularly?",
        "Context: Do you have a system prompt or some other way of giving AI context systematically?",
        "Tools: Do you choose tools deliberately based on the task, or out of habit or hype?",
      ],
      "Most common gaps people find:",
      [
        "Context: investing in a system prompt keeps getting delayed — yet it's the biggest source of leverage",
        "Agents: the workflow exists on paper but isn't used in real work",
        "Projects: AI gets brought in for execution, not planning — missing the strategic value",
      ],
      "What to focus on: don't pick three things to improve. Pick one — the one with the biggest impact on your daily work — and do it really well.",
      "Week 3 brings Superpowers — five capabilities you genuinely gain through AI collaboration. Get ready.",
    ],
    taskIntro:
      "Run through your PACT checkpoint. For each of the four elements, write: status (what works and what doesn't) and one concrete opportunity to improve. Then pick the single most important step.",
    taskItems: [
      "Projects — status and opportunity",
      "Agents — status and opportunity",
      "Context — status and opportunity",
      "Tools — status and opportunity",
      "The single most important step: what, why, by when",
    ],
    taskType: "ol",
    taskFallback: `If you're not sure how to approach the reflection, try this prompt:

"Help me do a PACT checkpoint. Ask me questions about how I'm currently using Projects, Agents, Context, and Tools at work. Then help me identify the biggest gap and one concrete step to improve."`,
    taskExample: `Input: "PACT checkpoint — status after two weeks"

AI output (after answering questions):

Projects: I use AI for individual tasks, not project structure. Tried WBS once — it worked. Opportunity: make WBS a standard step at the start of every project.

Agents: Workflow exists on paper but I've only used it twice in a week. Opportunity: simplify to 2 steps so it's realistically usable.

Context: I wrote a system prompt but don't use it consistently. Opportunity: save it as default instructions in Claude Projects.

Tools: Using Claude and ChatGPT without a clear reason for choosing which. Opportunity: define when I use which and why.

Most important step: Context — set the system prompt as default instructions and use it in every session for 2 weeks. Impact: immediate improvement in output quality with no additional effort.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Next week we move to Superpowers — five real capabilities you gain through AI collaboration.",
  },
  {
    day: 14,
    title: "PACT Tools: choosing the right tool for the right task.",
    subject: "A chatbot isn't enough. Here's how to choose AI tools intentionally.",
    preheader: "Tools in PACT: not what's newest, but what fits your work.",
    concept: [
      "The fourth element of PACT is Tools — and it's probably the most underestimated. Most people reach for a tool out of habit, not strategy.",
      "The key question isn't: which tool is best? It's: which tool is best for this specific task, this context, and this output?",
      "There are four core criteria for choosing an AI tool:",
      [
        "Type of task — conversation and writing (chatbot), workflow automation (workflow tool), data analysis (specialized tool), content generation (generator)",
        "Context and integration — where do you work? Do you need a tool integrated into your existing environment or standalone?",
        "Quality and reliability — for what outputs is this tool genuinely good? Not what it can do in general, but where it excels.",
        "Sustainability — can you afford it, learn it, and use it consistently? The best tool is the one you'll actually use.",
      ],
      "A practical approach: instead of testing every new tool, build your own intentional stack of 3–4 tools with clearly defined roles. Each tool has its zone — and you know exactly when to reach for which.",
      "Example of a simple stack: Claude for writing, analysis, and complex prompts. ChatGPT for quick answers and brainstorming. Perplexity for research with current data. Notion AI for working directly in documents.",
      "You don't need a perfect stack right away. You just need an intentional one — and to keep refining it based on what you actually use.",
    ],
    taskIntro: "Map your current AI tool stack and assign a clear role to each:",
    taskItems: [
      "What AI tools do you currently use (even occasionally)?",
      "What type of tasks do you actually use each one for?",
      "Where do they overlap — and where is there a gap (a task you do manually where AI would help)?",
      "What would your ideal stack of 3–4 tools with a clear role for each look like?",
    ],
    taskType: "ol",
    taskPrompt: `Help me map my AI tool stack.

Tools I use: [list them]
Tasks I use them for: [list them]

Based on this:
1. Where do the tools overlap and where are there gaps?
2. What would an effective 3–4 tool stack look like with a clear role for each?
3. What should I stop doing manually and hand to AI?`,
    taskFallback: `If you're not sure where to start, try this prompt:

"I use Claude and ChatGPT but I'm not clear on when to use which. Help me define a clear role for each tool based on what I do at work: [describe your work in 3 sentences]."

AI will suggest a specific role split adapted to your context.`,
    taskExample: `Input: "I use Claude, ChatGPT, and Notion AI. I work in marketing — I write copy, analyze campaign results, and communicate with clients."

AI output:

Suggested stack with roles:
→ Claude: long-form writing, strategic documents, analyzing client feedback. Excels at nuance and depth.
→ ChatGPT: quick ideas, brainstorming variants, subject lines. Fast and straightforward.
→ Notion AI: working directly in documents — summarizing meeting notes, rewriting briefs. No tool-switching needed.

Gap: you don't have a tool for research with current data (campaign results, trends). Consider Perplexity or Claude with web access.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we move to Superpowers — five areas where AI collaboration genuinely expands what you can do.",
  },
  {
    day: 15,
    title: "Five superpowers you gain through AI collaboration.",
    subject: "Perception, Intelligence, Memory, Creation, Connection.",
    preheader: "It's not about tools. It's about capabilities that go beyond any tool.",
    concept: [
      "Over the past two weeks you've worked on mindset, systems, and tools. Now comes the layer that ties it all together: superpowers.",
      "Superpowers aren't a metaphor. They're concrete ways of working that open up when AI stops being a tool for specific tasks and becomes a permanent part of how you think.",
      "There are five areas where AI fundamentally changes how you work:",
      [
        "Perception — you see more. You can quickly grasp large amounts of information, find patterns and conclusions that would otherwise escape you.",
        "Intelligence — you make better decisions. You can analyze complex situations from multiple angles, test scenarios, and uncover blind spots in your thinking.",
        "Memory — you forget nothing. AI-integrated systems function as an extension of your memory — capturing what you did, said, and what worked.",
        "Creation — you create at a different level. The speed and quality of creation shifts so that outputs that used to take days can be done in hours.",
        "Connection — you communicate and collaborate better. With AI you prepare prompts for people, templates for teams, and tailor communication precisely for specific situations.",
      ],
      "Each superpower has its own Week 3 day — theory and practice. Today you'll get an overview and identify which one resonates most with you right now.",
      "One important thing: superpowers don't depend on which tool you use. They depend on how you integrate AI into the way you think. That's exactly what the rest of this week is about.",
    ],
    taskIntro: "Review the five superpowers and for each one, write:",
    taskItems: [
      "Where do you use it least right now?",
      "Where would you most want to strengthen it?",
      "What specific task in your work would change the most with this superpower?",
    ],
    taskType: "ol",
    taskFallback: `Not sure which superpower is most relevant to you? Try answering these questions:

– Do you feel you're missing an overview when making decisions? → Intelligence
– Do you lose information or forget what you decided? → Memory
– Does it take you too long to produce outputs? → Creation
– Do you struggle to adapt communication for different people? → Connection
– Do you overlook important things in data or documents? → Perception

In practice:
Input: "It takes me too long to prepare materials for presentations and I'm always afraid I've forgotten something."
AI output: That's two superpowers at once — Creation (producing materials) and Memory (a system that captures important things). Start with Creation.`,
    taskExample: `In practice — overview of the five superpowers with real examples:

Perception:
Input: Annual report PDF, 80 pages.
AI output: Key trends over 3 years, 5 risk areas, comparison to industry average. Time: 4 minutes.

Intelligence:
Input: "I'm considering expanding into the UK market. What are the risks?"
AI output: 7 concrete risks with likelihood and impact, 3 scenarios, 2 blind spots I hadn't considered.

Memory:
Input: Meeting notes (raw notes).
AI output: Structured record, action items with owners, summary in 5 sentences for the team.

Creation:
Input: "I need a pitch for an investor, I only have rough bullet points."
AI output: Complete pitch deck structure, 3 variants for the opening slide, key messages for each section.

Connection:
Input: "I'm giving feedback to a colleague who repeatedly misses deadlines."
AI output: 4 feedback variants — direct, diplomatic, coaching, written — with explanation of when to use each.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: the first superpower in practice — Perception — how to see more with AI than without it.",
  },
  {
    day: 16,
    title: "Perception: you see patterns that would otherwise escape you.",
    subject: "Analyze a document or dataset with AI — see what you've been missing.",
    preheader: "AI doesn't replace your judgment. It expands what you're even able to see.",
    concept: [
      "Perception — the ability to notice and understand things — is the first of the five superpowers. And it's the one that most changes how you work with information.",
      "Every day you work with documents, data, feedback, reports. Most of the time you read them linearly: start to finish, take notes, draw conclusions. But linear reading has limits — you see what comes up in sequence. You miss patterns, outliers, and what's not there at all.",
      "With AI, Perception changes in three ways:",
      [
        "Speed — an 80-page document takes 5 minutes to grasp, not an hour.",
        "Breadth — AI catches things you'd skip or undervalue with linear reading.",
        "Depth — you can ask targeted questions: 'what are the three biggest risks?', 'what patterns are in this dataset?', 'where are the gaps in the argument?'",
      ],
      "The most powerful way to use Perception isn't just 'summarize this for me'. It's the combination: first a summary, then targeted questions, then your own interpretation.",
      "Today's practice: take a real document or dataset from your work — a report, a spreadsheet, customer feedback, a meeting transcript — and go through it with AI. You won't just see the content. You'll see the patterns.",
    ],
    taskIntro: "Choose a document or dataset from your work and run it through AI in three steps:",
    taskItems: [
      "Paste the document (or a key section) and ask for a structured summary — key points, most important numbers, main conclusions.",
      "Ask 2–3 targeted questions: 'What patterns are there?', 'Where are the outliers or exceptions?', 'What is missing from this document?'",
      "Write your own interpretation — what surprised you, what confirmed your assumption, what you want to investigate further.",
    ],
    taskType: "ol",
    taskFallback: `Don't have a suitable document on hand? Try this approach with any text you have:

Input: Feedback from 5 customers over the last month (copy into AI).
AI output: Three recurring themes: delivery speed, packaging quality, website clarity. One outlier: one customer mentioned a problem with the payment gateway — the others didn't. Recommendation: investigate the payment gateway as a potentially hidden issue.

Or for a spreadsheet:
Input: Q1 sales table (values for 12 products, 3 months).
AI output: Product X shows consistent decline across all three months, while Product Y has the highest fluctuations. The trend suggests a seasonal pattern in categories A and B.`,
    taskExample: `In practice — working with a real document:

Input: "I have notes from a 4-hour strategic workshop (2,200 words). Summarize the key conclusions, identify 3 main themes, and tell me what's missing or ambiguous in the notes."

AI output:
Key conclusions: The team agreed on three priorities for Q3 but didn't agree on their order. Two initiatives have no assigned owner.

Three main themes: 1) expansion to new markets, 2) internal processes and efficiency, 3) customer retention.

What's missing: The notes contain no action items with deadlines and owners. The budget topic was opened but not closed — it's unclear whether an agreement was reached.

Result: This output made it clear at the follow-up meeting what needed to be resolved — instead of another hour re-reading the notes.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: Intelligence — how AI helps make better decisions and uncover blind spots.",
  },
  {
    day: 17,
    title: "Intelligence: better decisions with AI as a thinking partner.",
    subject: "Pros/cons, scenarios, blind spots — AI as a counterweight to your thinking.",
    preheader: "AI doesn't decide for you. It helps you see what you're overlooking.",
    concept: [
      "Intelligence — the second superpower — isn't about AI being smarter than you. It's about AI being structured differently than you.",
      "Every person thinks with certain patterns, preferences, and blind spots. It's hard to see yourself from a perspective you don't naturally have. AI doesn't have your experiences or your biases — and that's exactly its value as a thinking partner.",
      "Where Intelligence helps most:",
      [
        "Decisions with multiple variables — where it's hard to hold all the criteria in your head at once.",
        "Risk scenarios — 'what could go wrong?' People tend to underestimate risks in things they're emotionally invested in.",
        "Counterarguments — 'play devil's advocate' or 'convince me why I shouldn't do this'.",
        "Blind spots — 'what's missing from my thinking?', 'what angle haven't I considered?'",
      ],
      "Key principle: AI is the best thinking partner when you're not asking it for the right answer — but for structured analysis and alternative perspectives. The decision is always yours.",
      "The most powerful Intelligence prompt: 'Here's my decision and my reasoning. Play the role of a critical advisor — what am I overlooking, what are the risks, what should I consider before deciding?'",
      "Today is a theory day. Tomorrow you'll apply Intelligence to a real decision from your work.",
    ],
    taskIntro: "Try Intelligence on a small decision you're working on — or a hypothetical scenario. Follow three steps:",
    taskItems: [
      "Describe the situation and your current thinking or decision.",
      "Ask AI for a pros/cons analysis and three alternative scenarios.",
      "Add: 'What am I overlooking in my thinking? What are my blind spots?'",
    ],
    taskType: "ol",
    taskFallback: `Input (hypothetical example — adapt it to your situation):
"I'm considering whether to accept an offer for a new role at a company. The salary is 20% higher, but the role is uncertain — the company is going through restructuring. My current job is stable but offers no career growth. What are the pros and cons? What are three possible scenarios in 12 months? What am I overlooking in my thinking?"

AI output (sample):
Pros of new role: higher income, new experience, potential leadership position.
Cons: uncertainty, need to rebuild relationships, restructuring risk.
Scenario 1: Company stabilizes → you're in a better role with higher salary.
Scenario 2: Company keeps restructuring → you're job-hunting again in 8 months.
Scenario 3: You accept the role but it doesn't meet expectations → you're frustrated and without security.
Blind spot: You don't mention how much you enjoy your current work — and that's a key variable missing from the analysis.`,
    taskExample: `In practice — Intelligence as a decision check:

Input: "We're deciding whether to launch a new product in Q2 or wait until Q4. Q2 has the advantage of speed to market, Q4 would mean better preparation. Play the role of a critical advisor — what am I overlooking?"

AI output:
Critical questions missing from the analysis:
1. What is the team's capacity in Q2 — do you have the people for a launch or will it come at the expense of another project?
2. Is Q2 actually an advantage, or just a feeling of urgency without market data?
3. What exactly would 'better preparation' in Q4 improve — and is it measurable?

Blind spot: The analysis assumes the Q4 deadline will be met. But without a clear Q4 milestone, there's a real risk of slipping into Q1 — losing the advantage of both options.

Result: The team realized they had no clear criterion for 'better preparation' — and that was exactly what was blocking the decision.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll apply Intelligence to a real decision from your work — not a hypothetical.",
  },
  {
    day: 18,
    title: "Intelligence in practice: analyze a real decision you're facing.",
    subject: "One real decision. Full analysis with AI.",
    preheader: "Theory is fine. But you only really understand it when you do it on your own.",
    concept: [
      "Yesterday you saw how Intelligence works in theory. Today you apply it to a real decision from your work.",
      "Practice differs from theory in one way: your real decision has context that a hypothetical example doesn't. And with real context, AI works best.",
      "Three types of decisions that work best with Intelligence:",
      [
        "Decisions with multiple alternatives — where you have 2–4 options and aren't sure which is right.",
        "Decisions under uncertainty — where information is missing or depends on the future.",
        "Decisions under pressure — where you feel you're deciding too fast or too emotionally.",
      ],
      "How to approach it: write AI a brief context (5–8 sentences), your current intention, and then ask for analysis. Don't be afraid to give AI more information rather than less — the more context, the more relevant the output.",
      "After the analysis, take one extra step: write down what decision you'll make and why — and how the analysis influenced or confirmed your judgment. This is the moment where Intelligence truly becomes your superpower.",
    ],
    taskIntro: "Choose one real decision you're currently working on or putting off. Then follow these steps:",
    taskItems: [
      "Describe the situation: context, your current thinking, what's blocking you.",
      "Give AI this instruction: 'Play the role of a critical advisor. Analyze pros/cons, propose 3 scenarios, name the blind spots, and tell me what's missing from my analysis.'",
      "After the output, write one sentence: 'From this analysis I learned...' — what changed or confirmed your decision.",
    ],
    taskType: "ol",
    taskFallback: `If you don't have a major decision right now, use this one:

Input: "I'm deciding whether to move our team standup from Thursday to Monday. The benefit is that Monday better frames the week. The downside is that Monday mornings people have a lot of emails and may be less focused. How should I analyze this decision?"

This type of decision is intentionally small — Intelligence works at all levels, not just for strategic decisions.`,
    taskExample: `In practice — a real work decision:

Input: "We're deciding whether to outsource customer service or continue building an internal team. Right now we have 2 people, capacity isn't enough, outsourcing would be faster, but I'm worried about quality. Play critical advisor."

AI output:
Pros of outsourcing: faster scaling, lower fixed costs, no HR overhead.
Cons: less quality control, loss of company culture in communication, dependency on a vendor.

Three scenarios:
1. Outsourcing works → capacity solved, but in 18 months you'll want to bring some back in-house.
2. Outsourcing falls short on quality → you have to build the internal team in parallel — more expensive.
3. Hybrid → outsource simple queries, internal team for complex ones — hardest to manage.

Blind spot: You didn't mention how customers currently perceive the quality of service. If it's good, the risk of outsourcing is higher. If it's average, there's room to improve.

What I learned: I hadn't mapped customer satisfaction with the current service. That's the first step before any decision.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: Memory, Creation, and Connection — the remaining three superpowers in one overview.",
  },
  {
    day: 19,
    title: "Memory, Creation, Connection: the remaining three superpowers.",
    subject: "Three different ways AI expands what you're capable of.",
    preheader: "Each works differently — and each changes a different type of work.",
    concept: [
      "Over the last two days you covered Perception and Intelligence. Three superpowers remain to complete the framework.",
      "Memory — extending your working memory.",
      "Human memory is great at recognition. It's worse at precise capturing. AI helps you with a system that doesn't forget: it captures decisions, context, results, formats. The most powerful use is a combination of templates + AI summarization + regular saving — creating a system where nothing slips through.",
      "Memory in practice:",
      [
        "Meeting notes → AI formats them and saves them in the same structure every time.",
        "Project retrospectives → AI captures what worked, what didn't, what to do differently.",
        "Personal knowledge base → notes from conferences, courses, books — AI summarizes and indexes them.",
      ],
      "Creation — producing at a different level.",
      "Creation isn't about AI creating for you. It's about you handling the full cycle with AI: from idea to structure to final output — faster and with better results. The key is iteration with full context.",
      "Creation in practice:",
      [
        "Complex presentations → from a rough idea to slide structure with key messages.",
        "Strategic documents → from a brief to polished formulations across multiple iterations.",
        "Multi-channel content → one original output adapted for different formats.",
      ],
      "Connection — communication tailored to the situation.",
      "Connection is the superpower of interpersonal communication. AI helps you prepare communication that accounts for context, relationship, goal, and tone — for each specific situation, not generically.",
      "Connection in practice:",
      [
        "Feedback → 4 variants for different relationships and situations.",
        "Difficult conversations → preparation for key points, anticipating reactions.",
        "Team communication → templates and approaches that work across different people's styles.",
      ],
      "Tomorrow you'll fully apply Creation — building a real output with full context and iteration.",
    ],
    taskIntro: "For each of the three superpowers, write one sentence answering the question:",
    taskItems: [
      "Memory: Where in my work do important pieces of information 'slip through' that I'd want to capture?",
      "Creation: What output from my work takes the longest and could be broken into structure + content + format?",
      "Connection: In what kind of communication situation would I want better preparation or more variants for how to approach it?",
    ],
    taskType: "ol",
    taskFallback: `Input: "I'm not sure where to start with Memory. How could I use AI to capture information at work?"

AI output: Start with meetings. After every meeting, copy your raw notes into AI and use this prompt: "Structure these notes: key conclusions, action items with owners, open questions. Format: bullet points, max 200 words." Save the outputs in one place. In 3 weeks you'll have the foundation of a knowledge base.`,
    taskExample: `In practice — three superpowers side by side:

Memory:
Input: Raw notes from a 60-minute workshop (450 words of scattered text).
AI output: Structured record — 3 decisions, 5 action items with owners, 2 open questions. Processing time: 2 minutes.

Creation:
Input: "I need a strategic brief for a new campaign — I only have 4 bullet points about what we know about the target audience."
AI output: Complete brief (situation, goal, target audience, key message, tone, formats, KPIs) — 3 iterations in 20 minutes. The result was used directly for the agency briefing.

Connection:
Input: "I need to give a colleague feedback on repeatedly missing deadlines — it's a sensitive topic, we have a good relationship."
AI output: 3 feedback variants — direct and factual, empathetic with questions, coaching focused on the system. Plus phrases best avoided and how to open the conversation.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: Creation in full — build a complex output from scratch with full context, structure, and iteration.",
  },
  {
    day: 20,
    title: "Creation: complex output from scratch with iteration.",
    subject: "Not 'write me an email'. The full cycle from idea to final output.",
    preheader: "Creation works differently than you think — it's all about context and iteration.",
    concept: [
      "Creation is the superpower that differs most from how most people use it.",
      "When people say 'AI will help me create', most mean: I'll write a prompt, get some text, done. But that isn't Creation — it's generation. And the results match.",
      "Real Creation works differently. It has three phases:",
      [
        "Context — AI needs to understand the situation: who reads it, why it exists, what the goal is, what already exists.",
        "Structure — before AI creates content, it proposes a skeleton. You review, comment, approve.",
        "Iteration — the final output emerges over 2–3 rounds. Each iteration sharpens and improves.",
      ],
      "Why iteration matters: the first AI output is a draft. The second, with your feedback, is noticeably better. The third can be final. Without iteration you stay at average results.",
      "Today's task is intentionally larger: you'll create a complex output — a strategic document, a presentation, a guide, or a communication plan — from start to a result ready to actually use.",
      "Key principle: the more context you give AI upfront, the fewer iterations you need. Invest 5 minutes describing the situation — save 30 minutes of rework.",
    ],
    taskIntro: "Choose a complex output you need to create (or would need to). Run through the full Creation process:",
    taskItems: [
      "Context (5–8 sentences): describe what you're creating, for whom, why, and what the reader/user needs to know or do.",
      "Ask AI for the structure of the output — just a skeleton, no content yet. Review it, adjust, approve.",
      "Ask AI for a first version of the content based on the approved structure. Give specific feedback and ask for a revised version.",
    ],
    taskType: "ol",
    taskFallback: `If you're not sure what to create, try one of these:

Option A — Strategic brief: for a project or initiative you're planning to launch.
Option B — Onboarding guide: for a new colleague, client, or vendor.
Option C — Communication plan: for sharing results or a change with your team or leadership.

Starting input: "We're creating a [output] for [recipient]. The goal is [what the output should do/say]. Context: [situation, key information]. Start with the structure — just a skeleton with headings and a short description of each section."`,
    taskExample: `In practice — Creation in three rounds:

Output: Strategic brief for a customer portal redesign.

Round 1 — Context and structure:
Input: Situation description (7 sentences) + "Propose a brief structure."
AI output: 6 sections — situation, project goal, target audience, key requirements, out of scope, definition of success. Time: 3 minutes.

Round 2 — First content version:
Input: "Write content for each section. Tone: matter-of-fact, for internal audience. Max one A4 page."
AI output: Complete brief draft. Two problems: 'target audience' section too generic, 'out of scope' missing.
Feedback: "Update target audience — add 3 specific personas. Add out of scope: mobile app, ERP integration."

Round 3 — Final version:
AI output after feedback: Brief ready to use. Full process: 35 minutes. A result that would have taken 2–3 hours manually.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow we close Week 3: which superpower comes naturally to you and which do you want to develop further?",
  },
  {
    day: 21,
    title: "Your AI superpowers: which comes naturally, which to develop further.",
    subject: "Week 3 reflection — your personal superpower profile.",
    preheader: "You'll know yourself where your natural strength is — and where there's room.",
    concept: [
      "Today is a reflection day. Over the past seven days you've been through five superpowers — and you've tried each one a little in practice.",
      "Reflection isn't just looking back. It's the foundation for what you'll develop next. Without reflection you randomly chase tools and tips. With reflection you know where to invest your energy.",
      "Three things you'll map today:",
      [
        "Natural strength — which superpower came most easily or made the most sense? Where did you feel an immediate benefit?",
        "Development potential — which superpower is most important for your work but you're not yet using to its full capacity?",
        "Concrete next step — not 'I want to improve', but one specific task or system you'll start building.",
      ],
      "Superpowers develop gradually. You don't need to be strong in all five at once. Choose one or two and go deep.",
      "A reminder of the five superpowers: Perception (you see patterns), Intelligence (better decisions), Memory (nothing slips through), Creation (outputs at a different level), Connection (communication tailored to the situation).",
    ],
    taskIntro: "Review each of the five superpowers and for each one, write one sentence answering:",
    taskItems: [
      "Where did I try it this week — what did I do?",
      "How strong is this capability in my current work (1–5)?",
      "What would my concrete next step be if I wanted to strengthen it?",
    ],
    taskType: "ol",
    taskFallback: `Input: "I'm thinking about which superpower fits me best. I enjoy working with text and communication, but I'm not an analytical type."

AI output: Based on what you're describing, Creation and Connection come most naturally to you. Creation because working with text is exactly where AI functions as a collaborator across the full cycle. Connection because communication tailored to the situation — feedback, difficult conversations, team messages — is an area where you have both interest and experience.

I recommend starting with Creation: take one output you produce repeatedly and build a full context + iteration workflow around it. That will be your foundation.`,
    taskExample: `In practice — reflection on the five superpowers:

Perception (2/5): Tried document analysis. It went well, but I'm not doing it regularly yet. Next step: for every report I receive, analyze it with AI first.

Intelligence (3/5): Analyzed one decision — biggest 'aha moment' of the week. Want to do this for every major decision. Next step: create a decision analysis template.

Memory (2/5): Not using systematically yet. Know that meetings are the weak point. Next step: next meeting → AI-structured notes within 10 minutes of it ending.

Creation (4/5): This comes naturally and I'm getting results. Want to refine iteration further. Next step: add a structure round before every major output.

Connection (3/5): Used it for preparing feedback — very useful. Want to extend to difficult conversations. Next step: prepare the next difficult conversation with AI in advance.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Next week: how to build your AI system at scale — for yourself, your team, and recurring processes.",
  },
  {
    day: 22,
    title: "Human-in-the-loop: where you must be in the AI process.",
    subject: "AI must not decide alone. Where and why you matter.",
    preheader: "The more AI does, the more it matters where you make the decisions.",
    concept: [
      "Week 4 is about the system at a larger scale. And we start with the fundamental question: where are you in the whole AI process?",
      "Human-in-the-loop is a principle that says: in a well-designed AI workflow, there is always a point where a human decides, reviews, or approves. Not because AI is unreliable. But because responsibility for the outcome is always human.",
      "Where you must always be in the process:",
      [
        "Framing and context — what AI is working on, with what information, for whom. Never delegate this entirely.",
        "Interpreting the output — AI's result is a proposal, not a decision. You assess and approve it.",
        "Ethical and strategic decisions — what we communicate to a customer, how we respond to a crisis, what we tell an investor. These are decisions with impact — and they're yours.",
        "Feedback for improvement — what worked, what didn't, how to adjust the prompt or process next time.",
      ],
      "Where AI can work more autonomously:",
      [
        "Routine generation and formatting of outputs.",
        "Data analysis without decision-making implications.",
        "Preparing variants and drafts for you to choose from.",
      ],
      "A practical question: go through one workflow you do regularly and ask: where in this process am I? Where do I decide? Where does AI help without my involvement? And are those the right places?",
      "Tomorrow you'll map or describe this workflow — with clearly marked decision points where you're in control.",
    ],
    taskIntro: "Choose one recurring workflow from your work. For each step, write:",
    taskItems: [
      "What happens in this step?",
      "Who (or what) does it — you, AI, or both together?",
      "Why is or isn't a human decision point important at this step?",
    ],
    taskType: "ol",
    taskFallback: `Input: "How do I know where in my workflow I need to be and where AI can work more autonomously?"

AI output: There are four signals for a human decision point:
1. The result has a direct impact on a customer, colleague, or the company — that's you.
2. A bad decision would be hard to reverse — that's you.
3. The decision depends on relationship, context, or emotion — that's you.
4. It's something you bear personal or professional responsibility for — that's you.

Everywhere else, AI can work more autonomously and you approve the output.`,
    taskExample: `In practice — a workflow with clear human-in-the-loop:

Workflow: Creating and sending a newsletter.

Step 1: Topic gathering → AI scans notes and proposes 5 topics. Human point: you choose 1–2 relevant ones.
Step 2: Content creation → AI writes the first version. Human point: you fix facts, add personal context.
Step 3: Tone editing → AI adjusts phrasing based on feedback. Human point: final approval.
Step 4: Technical sending → tool sends automatically. No human point — purely mechanical.
Step 5: Results analysis → AI summarizes metrics. Human point: interpretation and decision on what to do differently next time.

Result: You know exactly where you need to be and where AI saves you time. Nothing slips through.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll map or describe your own workflow — with clearly marked decision points where you're in control.",
  },
  {
    day: 23,
    title: "Map your workflow: where you are, where AI works.",
    subject: "Visualize the process — see where AI saves time and where you must be.",
    preheader: "A good workflow is visible. Today you make yours visible.",
    concept: [
      "Yesterday you thought through the human-in-the-loop principle. Today you make it concrete.",
      "Visualizing or describing a workflow has a practical purpose: only when you see it all at once do you recognize where there are unnecessary steps, where AI adds value, and where you're indispensable.",
      "How to describe or map a workflow:",
      [
        "List the steps in order — what happens, what comes after what.",
        "For each step add: who does it (me / AI / both / tool).",
        "Mark decision or approval points — these are the human-in-the-loop moments.",
        "Mark points where output goes directly to the next step without a decision — these are opportunities for automation.",
      ],
      "The format is up to you: it can be a list with annotations, a table, or an actual map in Figma, Miro, or on paper.",
      "After building the workflow, ask yourself three questions: Where do I spend the most time and could that be delegated to AI? Where is AI working without my oversight and should there be a checkpoint? Where is an entire step unnecessary?",
      "The goal isn't a perfect workflow right away. The goal is a workflow you can see — and then gradually improve.",
    ],
    taskIntro: "Choose one recurring process from your work and describe it in this format:",
    taskItems: [
      "Name of the process and how often it recurs.",
      "Steps in order — each on one line or bullet point.",
      "For each step: me / AI / both / tool. Plus label: [D] = decision (human-in-the-loop), [A] = automatable.",
    ],
    taskType: "ol",
    taskFallback: `Input: "I mapped my workflow but I'm not sure how to write it up clearly."

Try this format:

Workflow: Preparing monthly report (monthly, ~3 hours)

1. Data gathering → me [A] — can be delegated to AI based on data from the spreadsheet
2. Summarizing results → me [D] — interpretation is mine
3. Preparing visuals → me+AI [A] — AI suggests, I approve
4. Writing commentary → me+AI [D] — AI drafts, I edit
5. Final check → me [D] — always mine
6. Sending to leadership → me [A] — automatable

Result: you can see where you'll save ~45 minutes and where you must be.`,
    taskExample: `In practice — workflow for preparing a client proposal:

Workflow: Preparing a business proposal (every 2 weeks, ~5 hours)

1. Client briefing → me [D] — key needs, context
2. Internal research → me+AI [A] — AI finds precedents, I add specifics
3. Proposal structure → me+AI [D] — AI proposes, I approve or adjust
4. Content creation → me+AI [A] — AI writes the draft, I iterate
5. Pricing → me [D] — always my decision
6. Final tone editing → me+AI [A] — AI adjusts phrasing, I approve
7. Sending → me [D] — review before sending

Identified savings: steps 2, 3, 4, 6 are partly delegatable → roughly 2 hours back.
Human-in-the-loop moments: 1, 5, 7 are indispensably mine.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: how to share AI knowledge in a team — without hype, without resistance, with results.",
  },
  {
    day: 24,
    title: "AI adoption in a team: sharing knowledge without hype or resistance.",
    subject: "What works when introducing AI to a team — and what doesn't.",
    preheader: "Adoption isn't about persuading. It's about concrete results.",
    concept: [
      "One of the biggest barriers to AI adoption in teams isn't the technology. It's the way people talk about AI.",
      "Hype works short-term. 'AI will change everything', 'we need to start now', 'this will save 40% of our work' — statements like these create either inflated expectations or defensive reactions. And then, when results come more slowly, they leave disappointment or skepticism.",
      "What works instead of hype:",
      [
        "A concrete result, not a generic benefit — 'this prompt saves 20 minutes of meeting preparation every time' works better than 'AI will speed up our work'.",
        "A live demonstration, not a theory — show the workflow, don't explain it. People believe what they see.",
        "Respecting different starting points — some people are enthusiastic, some skeptical. Both are fine.",
        "Small steps, not grand transformations — one new prompt or template is an achievable goal.",
      ],
      "What doesn't work:",
      [
        "Pressure and mandates — 'from now on everyone must use AI' without support or meaning.",
        "Starting too complex — if the first step requires 3 hours, no one will do it.",
        "Ignoring concerns — fear of job loss or feeling obsolete are real. They need to be addressed openly.",
      ],
      "The best adoption approach: find one colleague, show them one concrete example that saves them time — and let them share it with others themselves. Organic spread works better than top-down mandates.",
      "Tomorrow you'll try this in practice: teach a colleague one specific AI trick — or write it up as a mini guide.",
    ],
    taskIntro: "Think about one colleague or team member that AI could help. Answer three questions:",
    taskItems: [
      "What do they do repeatedly that AI could simplify? (one specific task)",
      "What is their current experience with AI — enthusiastic, skeptical, or neutral?",
      "How would you show them the result — with a live demo, or a short guide?",
    ],
    taskType: "ol",
    taskFallback: `Input: "I'm not sure how to start with a colleague who's skeptical about AI."

AI output: The best approach is not asking 'do you want to try AI?' but showing a concrete result without advance warning.

In practice: They come to a meeting and mention they're struggling with preparing the agenda. You open Claude, enter the meeting goal, and in 2 minutes you have a structure. Don't frame it as 'let me teach you AI' — just say 'try this prompt.' Nothing more needed.

Skeptics change through their own experience, not through persuasion.`,
    taskExample: `In practice — a successful and unsuccessful adoption approach:

Unsuccessful approach:
At a team meeting: "Starting next month we'll all be using AI tools. Here are 3 tools I've chosen. Please review the documentation."

Result: Two people try it, the rest don't. In a month it's forgotten.

Successful approach:
One on one: "Hey, I have a tip for saving 15 minutes on every report you prepare. Let me show you one prompt — takes 3 minutes."

Live demo. Result visible immediately.

Result: The colleague copies the prompt. In a week they show it to another colleague. In a month four people use it — with no mandate at all.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow you'll do it: teach a colleague one trick — or write it up as a mini guide (max one page).",
  },
  {
    day: 25,
    title: "Teach a colleague one AI trick — or write it as a mini guide.",
    subject: "Knowledge that sticks when you pass it on.",
    preheader: "The best way to solidify knowledge: teach it to someone else.",
    concept: [
      "Today is the practice session for yesterday's theory. The goal is to do one thing: share a concrete piece of AI knowledge with a colleague — or write it up so anyone can use it.",
      "Why sharing? Three reasons:",
      [
        "You confirm what you actually know — only when you explain it do you find where the gaps are.",
        "You create a lasting artifact — a guide or template that stays useful after the challenge ends.",
        "You start organic spread — everyone you show can show someone else.",
      ],
      "Formats for sharing knowledge:",
      [
        "Live demo — you sit together, you show it in real time. Most effective for skeptics.",
        "Mini guide — one document, max one A4 page. Situation, prompt, output, how to use.",
        "Annotated template — a prepared template or prompt with an explanation of why it works.",
        "Short video or screen recording — for remote teams or async sharing.",
      ],
      "A good mini guide has this structure: title (what the guide solves), situation (when to use it), prompt or process (the exact input), example output (so it's clear what to expect), tips and adjustments (how to customize).",
      "Today's task is intentionally concrete: either call a colleague and show them one trick, or write a mini guide for one specific AI workflow from your work.",
    ],
    taskIntro: "Choose one of the options and do it today:",
    taskItems: [
      "Option A: Find a colleague and show them one prompt or workflow that saves you time — in real time. Note their reaction and questions.",
      "Option B: Write a mini guide (max 1 page) for one specific AI workflow. Use the structure: situation, prompt, output, how to use.",
    ],
    taskType: "ul",
    taskFallback: `Input: "I want to write a mini guide but I'm not sure how to structure it."

Try this format — copy and fill in:

Title: How to prepare a meeting structure in 2 minutes

Situation: When to use it
You have a meeting in less than an hour and need a quick structure and agenda.

Prompt:
"You are an experienced facilitator. I'm preparing a meeting on [topic]. Participants are [list]. The goal of the meeting is [goal]. Propose an agenda for [length] minutes with timing, key points for each block, and suggestions for how to open and close."

Example output: [paste a real AI output here]

Tips: Add specific participant names for better results. If it's a recurring meeting, save the output as a template.`,
    taskExample: `In practice — mini guide for preparing feedback:

Title: How to prepare constructive feedback in 5 minutes

Situation: When to use it
You need to give a colleague feedback on a specific situation and want it to be factual, clear, and not create unnecessary tension.

Prompt:
"You are an experienced coach and communication advisor. I need to give feedback to a colleague on this situation: [describe the situation]. Our relationship is [friendly/formal/strained]. The goal of the feedback is [behavior change/recognition/correction]. Write 2–3 variants — one direct, one empathetic, one coaching. Each max 4 sentences."

Example output:
Direct: "On the last three projects the deadline has slipped by more than a week. I need us to talk about what's blocking it and agree on concrete next steps."
Empathetic: "I can see you have a lot going on and the projects are demanding. At the same time we need to talk about deadlines — when would you have a moment?"
Coaching: "How do you yourself see the deadlines on the last few projects? What would help to make it work differently?"

Tips: The more specific the situation description, the more relevant the variants. The guide works for upward, downward, and horizontal feedback.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: leverage at the system level — not faster tasks, but a genuinely different way of working.",
  },
  {
    day: 26,
    title: "Leverage at the system level: tool vs. way of working.",
    subject: "Faster tasks aren't enough. It's about changing how work functions.",
    preheader: "A system works even when you're not there. A tool doesn't.",
    concept: [
      "At the start of the challenge we talked about leverage as a way of thinking. Today we return to it at a different level: leverage at the system level.",
      "Most people who use AI have it as a tool. They open ChatGPT, give it a task, get a result, close it. That's fine — and it's a starting point. But it's not a system.",
      "A system works differently. It has four properties a tool doesn't:",
      [
        "Repeatability — it works the same way every time, not just when you remember it.",
        "Spread — others can use it without you having to be there.",
        "Improvement — every use generates feedback that makes the system better.",
        "Independence — it works even when you have other things to do.",
      ],
      "The practical difference:",
      [
        "Tool: every time you open AI fresh, write a prompt from scratch, get a result.",
        "System: you have a prompt template, workflow steps, outputs saved in one place, and a way to share or hand them off.",
      ],
      "How to tell if you're using a tool or a system: ask yourself — if you were sick for a week, would it keep working? Or would it depend on you being there?",
      "Tomorrow you'll build an end-to-end mini AI system for one specific recurring task. Today: prepare the ground by choosing the task and thinking through the four system properties in your context.",
    ],
    taskIntro: "Choose one recurring task you currently do as a tool — and think through what it would look like as a system:",
    taskItems: [
      "Repeatability: what would need to be documented for it to work without you being there?",
      "Spread: who else could use this system? What would they need to do that?",
      "Improvement: how would you capture what works and what doesn't after each use?",
      "Independence: what would the system do automatically (or semi-automatically) without your input every time?",
    ],
    taskType: "ol",
    taskFallback: `Input: "How do I know if I have a tool or a system?"

AI output: Try answering these questions:
– Do I have to remember it exists every time? → Tool.
– Is it documented so a colleague could use it without asking me anything? → System.
– If you were doing it for the third time, do you start from scratch or have a starting point? → Starting from scratch again = tool.
– Does it work during your vacation? → No = tool. Yes = system.`,
    taskExample: `In practice — moving from tool to system:

Tool (how I do it now):
Every Friday morning I open AI, write roughly the same prompt for the weekly report, get a draft, edit it, send to leadership. Takes 40 minutes.

System (what it could look like):
1. Prompt template saved in Notion — I open it, fill in the numbers, send to AI. 2 minutes.
2. Report output template — AI fills in the structure, I approve. 5 minutes.
3. Output archive — every report saved in the same folder, same file name format, with date.
4. Colleague instructions — if I'm not available, colleague knows where the template is and how to use it.

Result: 40 minutes → 15 minutes. Works without my presence. Colleague can take over without a briefing.

The transition took one hour of setup. Saved ~25 minutes every week = 20 hours per year.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: you'll build an end-to-end mini AI system for one real recurring task from start to finish.",
  },
  {
    day: 27,
    title: "Build an end-to-end mini AI system.",
    subject: "Input → steps → output. A system for one complex recurring task.",
    preheader: "One hour of work today = hours saved every month.",
    concept: [
      "Today is one of the most important days of the whole challenge. You'll build an end-to-end mini AI system — a complete workflow for one recurring task.",
      "What end-to-end means: input (what enters the system), steps (how the system works), output (what comes out of the system). Every step documented, replicable, handoff-ready.",
      "Why this matters: without a documented system you stay with a tool. Every next use starts again from scratch. With a documented system you have a foundation that improves — not repeats.",
      "Structure of a mini AI system:",
      [
        "Name and description — what the system solves, for whom, how often it's used.",
        "Input — what enters the system: what data, texts, information, in what format.",
        "Steps — sequence of actions: what AI does, what the person does, what the tool does. Each step in one sentence.",
        "Prompts — exact prompt text for each AI step (or templates with variables in [square brackets]).",
        "Output — what comes out: format, length, where it's saved.",
        "Human-in-the-loop points — where you decide or approve.",
        "Tips and adjustments — what improves results, how to adapt to different situations.",
      ],
      "Today's goal isn't a perfect system. It's a version 1.0 system — usable, documented, ready for iteration.",
    ],
    taskIntro: "Choose one complex recurring task and build an end-to-end mini AI system for it. Document it in this structure:",
    taskItems: [
      "Name, description, frequency of use.",
      "Input — what enters the system.",
      "Steps in order — who or what does them, human-in-the-loop points marked [D].",
      "Prompts — exact text for each AI step.",
      "Output — format and storage location.",
    ],
    taskType: "ol",
    taskFallback: `Not sure which task to choose? These types work best for a mini AI system:

– Regular reports (daily, weekly, monthly)
– Preparing materials for recurring types of meetings
– Content creation for a specific channel (newsletter, LinkedIn, blog)
– Processing customer feedback or surveys
– Onboarding new colleagues or clients

Starting input: "Help me design the structure of a mini AI system for [task name]. I need: input description, process steps, prompts for AI steps, and output format."`,
    taskExample: `In practice — mini AI system for processing customer feedback:

Name: Monthly customer feedback analysis
Frequency: Once monthly, ~2 hours → after implementing the system ~35 minutes.

Input: Export of customer ratings and comments from CRM (CSV or copied text), current month.

Steps:
1. Data preparation → me [A] — copy data into AI, remove sensitive information.
2. Categorization → AI [A] — prompt: "Categorize this feedback into themes. Identify 5 main categories, mention counts, sentiment (positive/negative/neutral)."
3. Pattern identification → AI [D] — prompt: "What are the three recurring problems? What are the three recurring compliments? What is new compared to last month?" I approve the interpretation.
4. Recommendations → me+AI [D] — prompt: "Based on the analysis, propose three concrete actions for next month." I select and adjust.
5. Report output → AI [A] — prompt: "Write a feedback summary for leadership. Max 200 words, bullet points, key numbers."
6. Archiving → me [A] — save to folder /Customer Feedback/[year-month].

Output: Structured report for leadership + action items + archive.

Human-in-the-loop points: step 3 (interpreting patterns), step 4 (choosing recommendations).`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser:
      "Tomorrow: the final day. What you've built. Where to go next. The system that works for you.",
  },
  {
    day: 28,
    title: "What you've built. A system that works for you.",
    subject: "Challenge wrap-up — and the beginning of a new way of working.",
    preheader: "28 days. One major shift. And it's only just beginning.",
    concept: [
      "You made it. 28 days. Twenty-eight ideas, practice sessions, systems, and small shifts.",
      "At the start of the challenge you wrote down three areas where AI was falling short for you. Today you can answer: how many of them work differently now?",
      "Over 28 days you've gone through three layers of AI adoption:",
      [
        "Mindset — you understood that it's not about speed, but about leverage. That the quality of your input equals the quality of your output. That AI is a collaborator, not a search engine.",
        "Systems — you built: templates, prompts, workflows, a knowledge capture system, a foundation for a knowledge base.",
        "Superpowers — you developed Perception, Intelligence, Memory, Creation, and Connection. And you know which is your natural strength.",
      ],
      "What comes next:",
      [
        "The systems you've built are version 1.0. Every use is an opportunity to improve them.",
        "Superpowers develop through practice — not reading. Every real task is training.",
        "Sharing knowledge with your team is a multiplier — one guide or live demo can trigger adoption in others.",
        "AI evolves quickly. The key isn't knowing about every new tool — it's having a foundational system and mindset that works independently of any specific tool.",
      ],
      "One final impulse: find one system from the last 28 days that works best and use it today. Not to learn something new. But because repetition is the foundation of habit.",
      "This isn't the end. It's the foundation. You build on it from here.",
    ],
    taskIntro: "Final reflection: go through these three questions and write your answers:",
    taskItems: [
      "What is the biggest shift over 28 days? (one specific way of working, result, or system that didn't exist before the challenge)",
      "Which three things from the start of the challenge have you transformed — are they different now or don't exist anymore?",
      "What are your three concrete steps for the next 30 days? (a system, a superpower, or team adoption)",
    ],
    taskType: "ol",
    taskFallback: `Input: "I'm not sure how to describe my biggest shift over 28 days."

AI output: Try answering this question: What do you do differently today than 28 days ago? It doesn't have to be a big thing. It could be:
– One prompt you now use regularly.
– One workflow that's documented and replicable.
– One type of task where you no longer start from scratch.
– One way of thinking about prompts that you didn't have before.

That's your shift. And it's real.`,
    taskExample: `In practice — final reflection:

Biggest shift: Before the challenge I wrote every report from scratch. Now I have a prompt template and an output saved as a template. Reports take 15 minutes instead of 45.

Three things that are different:
1. Meeting notes — used to be free-form notes, now AI-structured within 5 minutes of every meeting.
2. Decision-making — now for every major decision I ask AI for an analysis first, as a thinking partner, then make my own call.
3. Content creation — instead of staring at a blank page I start with structure, then content, then iteration.

Three steps for the next 30 days:
1. Expand the knowledge base with notes from this month.
2. Show one system to a colleague — specifically the feedback analysis.
3. Deepen the Intelligence superpower: every major decision goes through AI analysis first, then mine.`,
    taskTip:
      "Work directly in Claude, ChatGPT, or Gemini – save the result to Notion, Google Docs, or Apple Notes.",
    teaser: "",
  },
];
