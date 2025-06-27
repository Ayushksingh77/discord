"use client";
import { useState } from "react";
import { useData } from "../context/DataContext";

export default function RoleList() {
  const { roles, setRoles } = useData();
  const [editing, setEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleToggle = (id: string) => {
    setRoles(roles.map(r => r.id === id ? { ...r, visible: !r.visible } : r));
  };
  const handleEdit = (id: string, name: string) => {
    setEditing(id);
    setEditValue(name);
  };
  const handleSave = (id: string) => {
    setRoles(roles.map(r => r.id === id ? { ...r, name: editValue } : r));
    setEditing(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <ul className="space-y-3">
        {roles.map((role) => (
          <li key={role.id} className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full" style={{ background: role.color }} />
            {editing === role.id ? (
              <input
                className="border rounded px-2 py-1 dark:bg-gray-900"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                onBlur={() => handleSave(role.id)}
                onKeyDown={e => e.key === 'Enter' && handleSave(role.id)}
                autoFocus
              />
            ) : (
              <span className="font-medium cursor-pointer" onClick={() => handleEdit(role.id, role.name)}>{role.name}</span>
            )}
            <label className="ml-auto flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={role.visible}
                onChange={() => handleToggle(role.id)}
                className="accent-indigo-600"
                aria-label={`Toggle visibility for ${role.name}`}
              />
              <span className="text-sm">Visible</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
} 