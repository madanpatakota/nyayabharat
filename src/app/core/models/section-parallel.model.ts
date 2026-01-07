export interface SectionParallel {
  ipcSectionId: number;
  ipcSectionNumber: string;

  mappingType: 'Renumbered' | 'Omitted' | 'Merged' | 'Split';

  bnsSectionId?: number;
  bnsSectionNumber?: string;
  bnsSectionTitle?: string;

  notes?: string;
}
