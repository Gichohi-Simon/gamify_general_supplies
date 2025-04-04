import {
  Popover,
  Transition,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

interface Categories {
  name: string;
  id: number;
}

const categories: Categories[] = [
  {
    id: 1,
    name: "strecthing film",
  },
  {
    id: 2,
    name: "paint",
  },
  {
    id: 3,
    name: "tape",
  },
];

export default function Categories() {
  return (
    <div className="font-[family-name:var(--font-poppins)] w-full max-w-sm">
      <Popover className="relative flex justify-end">
          <>
            <PopoverButton
              className={`
                group inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium focus:outline-none gap-2`}
            >
              <AdjustmentsHorizontalIcon className="size-3 md:size-6"/>
              <span className="text-xs md:text-sm">Categories</span>
              <ChevronDownIcon
                className={`ml-2 h-5 w-5 transition duration-150 ease-in-out`}
                aria-hidden="true"
              />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-60 md:left-[280px] z-10 mt-12 w-52 -translate-x-1/2 transform bg-secondary">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative px-3 py-2">
                    {categories.map((category) => (
                      <div key={category.id}>
                        <div className="py-3 px-2 rounded-sm cursor-pointer">
                          <input id="link-checkbox" type="checkbox" value={category.name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer" />
                          <label htmlFor="link-checkbox" className="ms-2 text-xs md:text-sm font-medium text-gray-900">{category.name}</label>
                        </div>
                      </div>
                    ))}
                    <div>
                      <button className="bg-primary px-2 py-2 w-full text-xs md:text-md font-semibold rounded-sm"
                      onClick={() => alert('filter')}
                      >
                        filter
                      </button>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
      </Popover>
    </div>
  );
}
