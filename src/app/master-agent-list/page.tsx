import AgentDirectory from '@/components/agent/agent-directory';
import { masterAgents } from '@/data/agents';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'মাস্টার এজেন্ট লিস্ট',
  description: 'মাস্টার এজেন্ট ক্যাটাগরির তালিকা, প্রোফাইল ও সংশ্লিষ্ট তথ্য দেখুন।',
};

export default function MasterAgentListPage() {
  return (
    <AgentDirectory
      title="মাস্টার এজেন্ট লিস্ট"
      description="মাস্টার এজেন্ট ক্যাটাগরির তালিকা ও প্রকাশিত তথ্য এখানে দেখুন।"
      agents={masterAgents}
    />
  );
}
