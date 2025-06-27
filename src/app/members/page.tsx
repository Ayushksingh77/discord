import MemberTable from '../../components/MemberTable';

export default function MembersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Members</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Add Member</button>
      </div>
      <MemberTable />
    </div>
  );
} 