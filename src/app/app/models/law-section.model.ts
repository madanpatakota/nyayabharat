export interface BadgeProps {
  cognizable: boolean;
  bailable: boolean;
  compoundable: boolean;
}

export interface LawSectionIndex {
  id: number;
  number: string;      // e.g., "BNS 101"
  slug: string;        // e.g., "theft"
  title: string;
  chapter: string;
  tags: string[];
  badges: BadgeProps;
}
