import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const Search = () => {
  const [value, setValue] = useState("");
  const [tooltip, setTooltip] = useState(false);

  const ref = useRef();
  const tooltipRef = useRef();

  useClickAway(ref, (event) => {
    if (tooltipRef.current && tooltipRef.current.contains(event.target)) {
      return;
    }
    setTooltip(false);
  });

  return (
    <div
      className="sticky top-0 bg-black min-h-8 h-[53px] mb-3 flex items-center w-full"
      ref={ref}
    >
      <label className="bg-[#202327] flex w-full rounded-full h-[44px] group relative focus-within:bg-black border border-transparent focus-within:border-blue-500">
        <button className="w-[56px] h-full z-50 flex items-center justify-center absolute top-0 left-0 pointer-events-none">
          <FaSearch className="min-w-8 text-neutral-400 group-focus-within:text-blue-500" />
        </button>
        <input
          type="text"
          id="search-input"
          className="w-full h-full bg-transparent rounded-full px-12 outline-none text-white text-sm placeholder:text-gray-300/50"
          placeholder="Search"
          onFocus={() => setTooltip(true)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <button
            className="h-full absolute top-0 right-2 rounded-full flex items-center justify-center invisible group-focus-within:visible"
            type="button"
            onClick={() => setValue("")}
          >
            <div className="bg-blue-500 w-5 h-5 flex items-center justify-center rounded-full text-black">
              <IoClose />
            </div>
          </button>
        )}
        {tooltip && (
          <div
            ref={tooltipRef}
            className="bg-black absolute overflow-hidden top-full w-full shadow-md border border-neutral-600/70 min-h-[100px] max-h-48 rounded-lg shadow-neutral-600/70 py-5 px-4"
          >
            <p className="text-sm text-neutral-400/80">
              {value ? (
                <>
                  Search for{" "}
                  <span className="italic">
                    "
                    {value.trim().length > 25
                      ? `${value.slice(0, 25)}...`
                      : value}
                    "
                  </span>
                </>
              ) : (
                "Search for people, lists or keywords"
              )}
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

export default Search;
