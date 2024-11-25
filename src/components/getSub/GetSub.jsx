import { getSubs } from "../lib/api_get";

async function getSubscribers() {
  const subs = await getSubs();

  return (
    <div>
      <h1 className="text-blue-500 text-center text-4xl">All subscribers</h1>
      <br />
      <ul className="list-disc list-inside text-blue-500 text-lg text-center">
        {subs.map((sub) => (
          <li key={sub.id}>{sub.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default getSubscribers;
