import { useState } from "react";
import { fakeUsers } from "@/data/fakeUsers";
import { useNavigate } from "react-router-dom";
import { IconMenu, IconMenu2 } from "@tabler/icons-react";

export default function AllUsersPage() {
  const router = useNavigate();
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [verified, setVerified] = useState("");
  const [country, setCountry] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const countries = [...new Set(fakeUsers.map((u) => u.country))];

  const filtered = fakeUsers
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .filter((u) => (role ? u.role === role : true))
    .filter((u) => (status ? u.status === status : true))
    .filter((u) =>
      verified ? (verified === "verified" ? u.verified : !u.verified) : true
    )
    .filter((u) => (country ? u.country === country : true))
    .sort((a, b) =>
      sortBy === "recent"
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Users</h1>
        <button
          onClick={() => router(-1)}
          className="text-sm text-indigo-600 dark:text-white hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded dark:text-gray-200 dark:bg-gray-900"
        />
        <select
          onChange={(e) => setRole(e.target.value)}
          className="p-3 rounded dark:text-gray-200 dark:bg-gray-900"
        >
          <option value="">Filter by role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="p-3 rounded dark:text-gray-200 dark:bg-gray-900"
        >
          <option value="">Filter by status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="online">Online</option>
          <option value="away">Away</option>
        </select>
        <select
          onChange={(e) => setVerified(e.target.value)}
          className="p-3 rounded dark:text-gray-200 dark:bg-gray-900"
        >
          <option value="">Email verified?</option>
          <option value="verified">Verified</option>
          <option value="not">Not Verified</option>
        </select>
        <select
          onChange={(e) => setCountry(e.target.value)}
          className="p-3 rounded dark:text-gray-200 dark:bg-gray-900"
        >
          <option value="">Filter by country</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="p-3 rounded dark:text-gray-200 dark:bg-gray-900"
        >
          <option value="recent">Recent</option>
          <option value="old">Oldest</option>
        </select>
      </div>

      {/* User list */}
      <div className="bg-white dark:bg-transparent p-4 rounded-xl shadow divide-y">
        {/* table header */}
        <div className="hidden sm:grid grid-cols-5 gap-4 px-3 text-xs text-gray-500 uppercase tracking-wide mb-3">
          <p>User</p>
          <p>Role</p>
          <p>Status</p>
          <p>Created</p>
          <p className="text-right">Menu</p>
        </div>
        {filtered.length > 0 ? (
          filtered.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm mb-2"
            >
              {/* 👤 Avatar + Name */}
              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                  {user.initials}
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.name}
                </p>
              </div>

              {/* 🧷 Role */}
              <p className="text-sm text-gray-800 dark:text-white hidden sm:block">
                {user.role}
              </p>

              {/* ✅ Status */}
              <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-fit capitalize hidden sm:block">
                {user.status}
              </span>

              {/* 📅 Date */}
              <p className="text-xs text-gray-500 hidden sm:block">
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>

              {/* Menu Button */}
              <button className="text-gray-500 hover:text-gray-700 dark:hover:text-white justify-self-end">
                &#8942;
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500 text-sm">
            Your selection did not match any users.
          </div>
        )}
      </div>
    </div>
  );
}
