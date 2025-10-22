
export type SectionID = 'intro' | 'overview' | 'tech' | 'collaboration' | 'business' | 'policy' | 'vision';

export interface MenuItem {
  id: SectionID;
  title: string;
  subtitle: string;
}
