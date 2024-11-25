import { getSubs } from "@/lib/api_get";

async function getSubscribers() {
  const subs = await getSubs();

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-blue-500 text-center text-2xl font-bold mb-4">
        All Subscribers
      </h1>
      <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
        {subs.map((sub) => (
          <li
            key={sub.id}
            className="bg-blue-100 p-2 rounded-md shadow-sm text-center"
          >
            {sub.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default getSubscribers;
