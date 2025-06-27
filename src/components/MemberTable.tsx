"use client";
import { useState } from "react";
import { useData } from "../context/DataContext";
import Modal from "./Modal";
import { motion } from "framer-motion";

export default function MemberTable() {
  const { members, setMembers, roles } = useData();
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [sort, setSort] = useState<"name" | "date">("name");
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ username: "", role: roles[0]?.name || "", avatar: "" });
  const [page, setPage] = useState(1);
  const perPage = 5;

  let filtered = members.filter((m) =>
    m.username.toLowerCase().includes(search.toLowerCase()) &&
    (!roleFilter || m.role === roleFilter)
  );
  filtered = filtered.sort((a, b) =>
    sort === "name"
      ? a.username.localeCompare(b.username)
      : new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime()
  );
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setMembers([
      ...members,
      {
        id: Date.now().toString(),
        avatar: form.avatar || "/avatars/1.png",
        username: form.username,
        joinDate: new Date().toISOString().slice(0, 10),
        role: form.role,
      },
    ]);
    setForm({ username: "", role: roles[0]?.name || "", avatar: "" });
    setModalOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 flex-1 dark:bg-gray-900"
          placeholder="Search by username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded px-2 py-1 dark:bg-gray-900"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          {[...new Set(members.map((m) => m.role))].map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
        <select
          className="border rounded px-2 py-1 dark:bg-gray-900"
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
        >
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Join Date</option>
        </select>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition flex items-center gap-2"
          onClick={() => setModalOpen(true)}
        >
          + Add Member
        </button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Avatar</th>
            <th>Username</th>
            <th>Join Date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((m) => (
            <motion.tr
              key={m.id}
              className="border-b last:border-0"
              whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <td className="py-2"><img src={m.avatar} alt="avatar" className="w-8 h-8 rounded-full" /></td>
              <td>{m.username}</td>
              <td>{m.joinDate}</td>
              <td>{m.role}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add New Member">
        <form onSubmit={handleAdd} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            Username
            <input
              className="border rounded px-2 py-1 dark:bg-gray-900"
              value={form.username}
              onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            Role
            <select
              className="border rounded px-2 py-1 dark:bg-gray-900"
              value={form.role}
              onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
              required
            >
              {roles.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            Avatar URL (optional)
            <input
              className="border rounded px-2 py-1 dark:bg-gray-900"
              value={form.avatar}
              onChange={e => setForm(f => ({ ...f, avatar: e.target.value }))}
              placeholder="/avatars/1.png"
            />
          </label>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition mt-2">Add Member</button>
        </form>
      </Modal>
    </div>
  );
} 