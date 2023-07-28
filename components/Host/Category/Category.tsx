import { Listbox, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction } from "react";
import { BsChevronExpand } from "react-icons/bs";

// const category = [
//   "dance",
//   "music",
//   "cultural",
//   "tech",
//   "academic",
//   "public speaking",
//   "debate",
//   "cosplay",
// ];

type CategoryProps = {
  selected: any;
  setSelected: Dispatch<SetStateAction<any>>;
  category: string[];
};

export default function Catogary({
  setSelected,
  selected,
  category,
}: CategoryProps) {
  return (
    <div className=" w-full text-lg mt-2 ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg  py-2.5 border pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selected ? selected : "Choose Event"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BsChevronExpand className="h-5 w-5 " aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50  mt-1 max-h-60 w-full  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm overflow-auto overflow-scrollbar ">
              {category.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative  select-none py-2 pl-10 pr-4 cursor-pointer ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    } `
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
