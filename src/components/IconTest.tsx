import { UsersIcon } from "@heroicons/react/24/outline";

export default function IconTest() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-xl font-bold mb-4">Heroicons Test</h2>
      <UsersIcon className="h-12 w-12 text-blue-500" />
      <div className="mt-2 text-gray-700">If you see a blue user icon above, Heroicons are working!</div>
    </div>
  );
}
