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
    <div className="relative mb-4 font-[family-name:var(--font-poppins)] mt-[-52] md:mt-[-72]  md:w-1/2 shadow-lg rounded-xl px-5 pt-6 pb-8 z-20  bg-white">
     <p className="text-xs md:text-base font-semibold mb-4 capitalize">what are you looking for?</p>
     <div className="flex justify-center items-center gap-2 w-full">
       <input
        type="text"
        placeholder="search for warehouse products"
        className="w-full border border-1 border-primary rounded-full py-2 px-4 text-xs md:text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-primary py-2 px-4 rounded-full text-xs md:text-sm"
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
    </div>
  );
}
