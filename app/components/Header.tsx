import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center h-20 p-4 bg-[#ffe600] gap-[20px]">
      <Link href={"/"} className="flex items-center">
        MercadoLiebre
      </Link>
      <form action={"/items"} className="flex">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Nunca dejes de buscar!"
          className="bg-[#ffffff] p-2 w-[500px] text-black"
        />
        <button type="submit" className="bg-[#ffffff] border-l p-2">
          🔎
        </button>
      </form>
    </header>
  );
};

export default Header;
