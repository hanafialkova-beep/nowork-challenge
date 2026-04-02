export interface ChallengeDay {
  day: number;
  title: string;
  subject: string;
  preheader: string;
  concept: (string | string[])[];  // string = paragraph, string[] = bullet list
  taskIntro: string;
  taskItems: string[];
  taskType: "ul" | "ol" | "text";
  taskPrompt?: string;    // copyable AI prompt for this day's task
  taskFallback?: string; // fallback task if user has no AI tool yet
  taskExample?: string;  // example output or worked example
  taskTip?: string;      // where to record tip
  teaser: string;
}
