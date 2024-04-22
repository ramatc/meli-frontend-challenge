import Image from "next/image";
import api from "@/app/api/route";

export default async function ItemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await api.item.fetch(id);

  return (
    <section className="mx-auto max-w-screen-lg mt-10 bg-white p-4 grid gap-2">
      <article>
        <div className="flex flex-wrap justify-between">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={300}
            height={300}
            className="w-2/3"
          />
          <div className="w-1/4">
            <p className="font-bold text-xl">{item.title}</p>
            <p className="py-2 text-4xl">
              {Number(item.price).toLocaleString("es-AR", {
                style: "currency",
                currency: item.currency_id,
              })}
            </p>
            <button className="rounded text-white bg-[#3682f6] w-full p-2">
              Comprar
            </button>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-4">Descripción del producto</p>
          <p>{item.description}</p>
        </div>
      </article>
    </section>
  );
}
