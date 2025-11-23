export default function AgentsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Agents</h1>
        <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
          Create Agent
        </button>
      </div>
      {/* TODO: Liste agents */}
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">TODO: Agents list</p>
      </div>
    </div>
  );
}
