import Image from "next/image";
import Link from "next/link";
import api from "@/app/api/route";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { results } = await api.item.search(searchParams.search);

  return (
    <section className="max-w-screen-lg mx-auto mt-20 bg-white rounded shadow-xl">
      <article className="grid gap-4">
        {results.map((product) => (
          <Link
            href={`/items/${product.id}`}
            key={product.id}
            className="flex gap-4 p-6 border-b-2"
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
            />
            <div>
              <p>
                {Number(product.price).toLocaleString("es-AR", {
                  style: "currency",
                  currency: product.currency_id,
                })}
              </p>
              <p>{product.title}</p>
            </div>
            <span className="ml-auto text-sm opacity-50 capitalize">
              {product.seller.nickname.toLowerCase()}
            </span>
          </Link>
        ))}
      </article>
    </section>
  );
}
