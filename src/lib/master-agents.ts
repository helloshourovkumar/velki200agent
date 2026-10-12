// lib/master-agents.ts

/**
 * Single source of truth for Master Agent data.
 * Add, edit, or remove agents here — every page updates automatically.
 */
export type MasterAgent = {
  id: number;
  code: string;
  name: string;
};

export const MASTER_AGENTS: MasterAgent[] = [
  { id: 1, code: 'Master-512', name: 'আরিয়ান আহমেদ' },
  { id: 2, code: 'Master-453', name: 'আয়ান রহমান' },
  { id: 3, code: 'Master-306', name: 'জোভান চৌধুরী' },
  { id: 4, code: 'Master-720', name: 'রায়ান খান' },
  { id: 5, code: 'Master-420', name: 'জায়রা খান' },
  { id: 6, code: 'Master-342', name: 'তানভীর আহমেদ' },
  { id: 7, code: 'Master-825', name: 'আইরা রহমান' },
  { id: 8, code: 'Master-772', name: 'হাসান মাহমুদ' },
  { id: 9, code: 'Master-892', name: 'ফারুক হোসেন' },
  { id: 10, code: 'Master-995', name: 'মেহবিশ চৌধুরী' },
];
