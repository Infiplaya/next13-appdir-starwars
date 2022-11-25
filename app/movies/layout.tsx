import Link from "next/link";
import React, { ReactNode } from "react";

async function getData() {
  const res = await fetch("https://swapi.dev/api/films");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Layout({ children }: any) {
  const data = await getData();
  return (
    <>
      <h1 className="text-3xl font-bold">Star wars movies</h1>
      <div className="flex gap-40">
        <ul className="flex-none">
          {data.results.map((movie: any) => (
            <li key={movie.episode_id}>
              <Link href={`/movies/${movie.url.charAt(movie.url.length - 2)}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-xl">{children}</div>
      </div>
    </>
  );
}
