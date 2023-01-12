import { FiSearch } from "react-icons/fi";

export function Search({ search, setSearch }: any) {
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" flex w-[345px] h-[35px] bg-[#F8FAFC] rounded-[5px] mt-[30px] my-[40px]">
      <div className="flex items-center mx-[10px] justify-center color-[#18181B]">
        <FiSearch size="14px" />
      </div>
      <div>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearch}
          placeholder="pesquisar..."
          className="text-[12px] w-[300px] h-[35px] font-[inter] color-[#18181B] border-0 outline-0"
        />
      </div>
    </div>
  );
}
