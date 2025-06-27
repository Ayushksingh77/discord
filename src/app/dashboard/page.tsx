import MetricCard from '../../components/MetricCard';
import Chart from '../../components/Chart';

const metrics = [
  { label: "Total Members", value: 1280 },
  { label: "Online Users", value: 234 },
  { label: "Active Roles", value: 8 },
  { label: "Messages Today", value: 542 },
] as const;

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m) => (
          <MetricCard key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-2">Member Growth</h2>
        <Chart />
      </div>
    </div>
  );
} 