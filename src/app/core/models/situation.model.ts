export interface Situation {
  id: number;
  title: string;
  description: string;
  category: string;   // Police | Family | Property | Workplace | Online
  severity: number;   // 1 = Low, 2 = Medium, 3 = High
}