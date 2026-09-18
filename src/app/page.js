export default function Home() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 h-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <p className="text-gray-600">
        Welcome to the CRM MQTL. Here you can manage your clients, projects, and laboratory operations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-blue-800 text-lg">Total Clients</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="font-semibold text-green-800 text-lg">Active Projects</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">0</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <h3 className="font-semibold text-purple-800 text-lg">Reports Generated</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">0</p>
        </div>
      </div>
    </div>
  );
}
