export interface ChallengeDay {
  day: number;
  title: string;
  subject: string;
  preheader: string;
  concept: (string | string[])[];  // string = paragraph, string[] = bullet list
  taskIntro: string;
  taskItems: string[];
  taskType: "ul" | "ol" | "text";
  teaser: string;
}
