export type AgentRecord = {
  id: number;
  code: string;
  name: string;
  category: string;
  area: string;
  updatedAt: string;
};

function createDemoAgents(prefix: string, category: string, displayName: string): AgentRecord[] {
  return Array.from({ length: 10 }, (_, index) => {
    const number = index + 1;

    return {
      id: number,
      code: `${prefix}-${String(number).padStart(2, '0')}`,
      name: `${displayName} ${String(number).padStart(2, '0')}`,
      category,
      area: 'এলাকার তথ্য যোগ করুন',
      updatedAt: 'তথ্য যাচাইয়ের তারিখ যোগ করুন',
    };
  });
}

export const masterAgents = createDemoAgents('MA', 'মাস্টার এজেন্ট', 'মাস্টার এজেন্ট');

export const superAgents = createDemoAgents('SA', 'সুপার এজেন্ট', 'সুপার এজেন্ট');

export const subAdmins = createDemoAgents('SAU', 'সাব অ্যাডমিন', 'সাব অ্যাডমিন');
