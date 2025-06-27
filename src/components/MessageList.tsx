"use client";
import { useData } from "../context/DataContext";
import { motion } from "framer-motion";

export default function MessageList() {
  const { messages, setMessages } = useData();
  const handleDelete = (id: string) => {
    setMessages(messages.filter((m) => m.id !== id));
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <ul className="space-y-4">
        {messages.map((msg) => (
          <motion.li
            key={msg.id}
            className="flex items-start gap-3 border-b last:border-0 pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={msg.avatar} alt="avatar" className="w-8 h-8 rounded-full mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{msg.username}</span>
                <span className="text-xs text-gray-400">{msg.timestamp}</span>
              </div>
              <div className="text-gray-700 dark:text-gray-200">{msg.content}</div>
            </div>
            <button
              className="ml-2 text-red-500 hover:underline text-sm"
              onClick={() => handleDelete(msg.id)}
              aria-label={`Delete message from ${msg.username}`}
            >
              Delete
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
} 