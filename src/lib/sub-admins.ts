// lib/sub-admins.ts

/**
 * Single source of truth for Sub Admin data.
 * Add, edit, or remove entries here — every page updates automatically.
 */
export type SubAdmin = {
  id: number;
  code: string;
  name: string;
};

const RAW_SUB_ADMINS: Omit<SubAdmin, 'id'>[] = [
  { code: 'Sub-Admin-201', name: 'রামিম মালিক' },
  { code: 'Sub-Admin-305', name: 'তানিয়া রহমান' },
  { code: 'Sub-Admin-418', name: 'সাব্বির মালিক' },
  { code: 'Sub-Admin-526', name: 'রুবাইয়া ইসলাম' },
];

export const SUB_ADMINS: SubAdmin[] = RAW_SUB_ADMINS.map((admin, index) => ({
  ...admin,
  id: index + 1,
}));
