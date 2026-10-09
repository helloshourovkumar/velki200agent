import AgentDirectory from '@/components/agent/agent-directory';
import { subAdmins } from '@/data/agents';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'সাব অ্যাডমিন লিস্ট',
  description: 'সাব অ্যাডমিন ক্যাটাগরির তালিকা ও সংশ্লিষ্ট তথ্য দেখুন।',
};

export default function SubAdminListPage() {
  return (
    <AgentDirectory
      title="সাব অ্যাডমিন লিস্ট"
      description="সাব অ্যাডমিন ক্যাটাগরির তালিকা ও প্রকাশিত তথ্য এখানে দেখুন।"
      agents={subAdmins}
    />
  );
}
