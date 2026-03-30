export interface ChallengeDay {
  day: number;
  title: string;
  subject: string;
  preheader: string;
  concept: (string | string[])[];  // string = paragraph, string[] = bullet list
  taskIntro: string;
  taskItems: string[];
  taskType: "ul" | "ol" | "text";
  taskPrompt?: string;   // copyable AI prompt for this day's task
  taskFallback?: string; // "stuck?" example ready to copy
  taskExample?: string;  // sample input → output to show what "done" looks like
  taskTip?: string;      // where to record tip
  teaser: string;
}
