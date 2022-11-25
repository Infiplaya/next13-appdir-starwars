async function getMovie(id: number) {
  const res = await fetch(`https://swapi.dev/api/films/${id}`);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: any) {
  const movie = await getMovie(params.id);
  return (
    <div className="container mx-auto">
      <p className="text-3xl">{movie.title}</p>
      <p className="text-xl">Episode {movie.episode_id}</p>
      <p className="text-lg">{movie.opening_crawl}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`https://swapi.dev/api/films`);

  const movies = await res.json();
  console.log(movies)

  return movies.results.map((movie: any) => ({
    id: movie.url.charAt(movie.url.length - 2),
  }));
}
