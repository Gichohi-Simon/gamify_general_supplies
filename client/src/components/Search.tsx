import {useState} from "react";
import { useRouter, useSearchParams} from "next/navigation";

export default function Search() {
  const router = useRouter();
  const params = useSearchParams();

  const initialQuery = params.get("q") || "";
  const [text, setText] = useState(initialQuery);

  const handleSearch = () => {
    const query = text?.trim();
    setText("");
    router.push(`/shop?q=${query}&page=1`);
  }

  const clearSearch = () => {
    setText("");
    router.push("/shop?page=1");
  };

  return (
    <div className="mb-4 font-[family-name:var(--font-poppins)] flex justify-start items-center mt-6 gap-2 w-full">
      <input
        type="text"
        placeholder="search products"
        className="w-full md:w-3/4 border border-1 border-primary rounded-lg md:rounded-lg py-2 px-2 text-xs md:text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-primary py-2 px-2 rounded-lg text-xs md:text-sm"
      onClick={handleSearch}
      >
        search
      </button>
       {initialQuery && (
        <button
          className="bg-secondary text-black py-2 px-3 rounded-lg text-xs md:text-sm"
          onClick={clearSearch}
        >
          Clear search
        </button>
      )}
    </div>
  );
}
