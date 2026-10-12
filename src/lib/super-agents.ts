// lib/super-agents.ts

export type SuperAgent = {
  id: number;
  code: string;
  name: string;
};

// শুধু code ও name লিখুন — id স্বয়ংক্রিয়ভাবে বসবে
const RAW_SUPER_AGENTS: Omit<SuperAgent, 'id'>[] = [
  { code: 'Super-710', name: 'রাফি আহমেদ' },
  { code: 'Super-205', name: 'সাদিয়া ইসলাম' },
  { code: 'Super-306', name: 'সামিন হোসাইন' },
  { code: 'Super-412', name: 'রাইয়ান তালুকদার' },
];

export const SUPER_AGENTS: SuperAgent[] = RAW_SUPER_AGENTS.map(
  (agent, index) => ({ ...agent, id: index + 1 }),
);
