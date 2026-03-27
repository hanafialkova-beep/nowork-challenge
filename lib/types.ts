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
  taskTip?: string;      // where to record tip
  teaser: string;
}
