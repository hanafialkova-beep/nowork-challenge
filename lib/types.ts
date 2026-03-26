export interface ChallengeDay {
  day: number;
  title: string;
  subject: string;
  preheader: string;
  concept: string[];   // array of paragraphs
  taskIntro: string;
  taskItems: string[];
  taskType: "ul" | "ol" | "text";
  teaser: string;
}
