export interface Act {
  actId: number;
  actName: string;
  actShortName: string;
  actType: string;
  enactedYear: number;
  authority: string;
  status: string;

  // UI-only property
   // 🔽 ADD THESE (UI-only helpers)
  pinned?: boolean;
  displayBadge?: string;
  subType?: string;
}
