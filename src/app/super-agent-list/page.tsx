import AgentDirectory from '@/components/agent/agent-directory';
import { superAgents } from '@/data/agents';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'সুপার এজেন্ট লিস্ট',
  description: 'সুপার এজেন্ট ক্যাটাগরির তালিকা ও সংশ্লিষ্ট তথ্য দেখুন।',
};

export default function SuperAgentListPage() {
  return (
    <AgentDirectory
      title="সুপার এজেন্ট লিস্ট"
      description="সুপার এজেন্ট ক্যাটাগরির তালিকা ও প্রকাশিত তথ্য এখানে দেখুন।"
      agents={superAgents}
    />
  );
}
