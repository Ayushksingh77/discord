import { UsersIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const iconMap = {
  "Total Members": UsersIcon,
  "Online Users": UsersIcon,
  "Active Roles": ShieldCheckIcon,
  "Messages Today": ChatBubbleLeftRightIcon,
};

interface MetricCardProps {
  label: keyof typeof iconMap;
  value: number;
}

const MetricCard = ({ label, value }: MetricCardProps) => {
  const Icon = iconMap[label] || UsersIcon;
  if (!Icon) {
    console.error("Icon is undefined for label:", label);
    return <div className="text-red-500">Icon not found for {label}</div>;
  }
  const color = label === "Total Members" ? "bg-indigo-100 text-indigo-600"
    : label === "Online Users" ? "bg-emerald-100 text-emerald-600"
    : label === "Active Roles" ? "bg-pink-100 text-pink-600"
    : "bg-yellow-100 text-yellow-600";
  return (
    <div
      className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-xl transition"
    >
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-gray-500 dark:text-gray-300 text-sm">{label}</div>
      </div>
    </div>
  );
};

export default MetricCard; 