export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-white border-r">
          {/* TODO: Navigation */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">EdgeVoice</h2>
            <nav className="space-y-2">
              <a href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-100">
                Dashboard
              </a>
              <a href="/dashboard/agents" className="block px-4 py-2 rounded hover:bg-gray-100">
                Agents
              </a>
              <a href="/dashboard/conversations" className="block px-4 py-2 rounded hover:bg-gray-100">
                Conversations
              </a>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
