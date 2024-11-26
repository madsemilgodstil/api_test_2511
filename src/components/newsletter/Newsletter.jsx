import { postSub } from "@/lib/supabase";

import Link from "next/link";

import { revalidatePath } from "next/cache";

export default async function Home() {
  async function post(formData) {
    "use server";
    const data = {
      navn: formData.get("name"),
      email: formData.get("email"),
    };

    await postSub(data);

    revalidatePath("/");
  }

  return (
    <div className="max-w-lg mx-auto p-6 flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-800">Subscribe</h1>
      <form action={post} className="w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded-md shadow-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Indtast dit navn"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md shadow-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Indtast din email"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
