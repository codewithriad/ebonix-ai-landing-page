import { fakeUsers } from "@/data/fakeUsers";

export default function UsersCard() {
  const users = fakeUsers.slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl w-full">
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                {user.initials}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-white bg-gray-900 px-2 py-0.5 rounded-full">
                {user.status}
              </span>
              <button className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                &#8942;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
