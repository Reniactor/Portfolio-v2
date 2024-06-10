"use client";
import { MdOutlineKey } from "react-icons/md";
import { technologies as allTables } from "./technologiesIndex";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useState } from "react";

import type { technology } from "./technologiesIndex";
import Dropdown from "./Dropdown";
import Cell from "./cell";

const SQLinterface = () => {
  type TableOption = { type: string; label: string };
  const [selectedTable, setSelectedTable] = useState({
    type: "all",
    label: "All tables",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [currentStartingIndex, setCurrentStartingIndex] = useState(0);
  const [currentEndIndex, setCurrentEndIndex] = useState(12);
  const [currentTable, setCurrentTable] = useState(allTables);

  const handleSelect = (option: TableOption) => {
    setSelectedTable(option);
    if (option.type === "all") {
      setCurrentTable(allTables);
    } else {
      setCurrentTable(allTables.filter((item) => item.type === option.type));
    }
  };

  const handleNextPage = (currentPageNumber: number, array: technology[]) => {
    const maxNumberOfColumnsPerPage = 11;
    if (
      Math.ceil(array.length / maxNumberOfColumnsPerPage) === currentPageNumber
    )
      return;

    setCurrentStartingIndex((prev) => {
      const newStartingIndex = prev + 7;
      return newStartingIndex;
    });

    setCurrentEndIndex((prev) => {
      const newEndIndex = prev + 7;
      return newEndIndex;
    });

    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentStartingIndex === 0) return;
    setCurrentStartingIndex((prev) => {
      const newStartingIndex = prev - 7;
      return newStartingIndex;
    });

    setCurrentEndIndex((prev) => {
      const newEndIndex = prev - 7;
      return newEndIndex;
    });

    setCurrentPage((prev) => prev - 1);
  };

  const tableOptions = [
    { type: "all", label: "All tables" },
    { type: "language", label: "Languages" },
    { type: "framework", label: "Frameworks" },
    { type: "database", label: "Databases" },
    { type: "library", label: "Libraries" },
    { type: "runtime", label: "Runtime" },
    { type: "cloud", label: "Cloud" },
  ];

  const currentItemsDisplayed = currentTable.slice(
    currentStartingIndex,
    currentEndIndex,
  ).length;
  //Static headers stylings
  const universalHeadersClassnames =
    "flex w-full justify-center items-center h-full border-[1px] border-[#474747] ";

  //Defining the static headers for each SQL table
  const SQLInterfaceHeaders = [
    {
      key: 0,
      name: (
        <span className="flex items-center">
          <MdOutlineKey className="mr-1 h-4 w-auto text-color10" />
          id
        </span>
      ),
      format: "int",
    },
    {
      key: 1,
      name: <span>language</span>,
      format: "text",
    },
    {
      key: 2,
      name: <span>description</span>,
      format: "text",
    },
    {
      key: 3,
      name: <span>status</span>,
      format: "text",
    },
    {
      key: 4,
      name: <span>owner</span>,
      format: "text",
    },
    {
      key: 5,
      name: <span>created_at</span>,
      format: "timestampt",
    },
    {
      key: 6,
      name: <span>updated_at</span>,
      format: "timestampt",
    },
  ];

  return (
    <div className="h-[416px] min-h-fit w-full overflow-hidden rounded-md bg-[#0f0f0f] shadow-xl">
      <div className="h-full w-full overflow-auto rounded-md">
        <header className="flex h-8 items-center justify-between rounded-t-lg bg-[#141414] px-4">
          <span className="flex h-6 min-w-28 items-center justify-center gap-x-2 rounded-sm border-[1px] border-[#474747] bg-[#2f2f2f] text-sm font-light">
            <span className="text-xs font-extralight text-[#999999] ">
              role
            </span>{" "}
            postgres
          </span>
          <Dropdown
            options={tableOptions}
            selected={selectedTable}
            onSelect={handleSelect}
          />
        </header>
        <div className="h-[352px] w-full overflow-x-auto">
          <div className="grid h-full min-w-[1024px] grid-cols-7 grid-rows-12 ">
            <header className="col-span-7 row-span-1 grid h-full w-full grid-cols-7 place-items-center border-[#474747] bg-color60 ">
              {
                //Mapping through the headers to
                //dynamically assign them to each column
                SQLInterfaceHeaders.map(({ name, format }, index) => {
                  return (
                    <div
                      key={index}
                      className={`${universalHeadersClassnames} select-none gap-x-2 text-sm font-medium`}
                    >
                      {name}
                      <span className="text-xs font-extralight text-[#999999] ">
                        {format}
                      </span>
                    </div>
                  );
                })
              }
            </header>
            <div className="col-span-7 row-span-11 grid h-full w-full grid-cols-7 grid-rows-11">
              {currentTable
                .slice(
                  currentStartingIndex,
                  currentEndIndex > currentTable.length
                    ? currentTable.length
                    : currentEndIndex,
                )
                .map((item, higherLevelIndex) => {
                  return (
                    <div
                      key={higherLevelIndex}
                      className="col-span-7 row-span-1 grid grid-cols-7"
                    >
                      {Object.entries(item).map(([key, value], index) => (
                        <Cell
                          key={index}
                          value={
                            index === 0
                              ? String(higherLevelIndex)
                              : String(value)
                          }
                        />
                      ))}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <footer className="flex h-8 w-full items-center justify-between place-self-end bg-[#141414] px-4">
          <h4 className="text-xs font-thin">
            {currentItemsDisplayed} items listed
          </h4>
          <span className="flex items-center gap-1 text-xs font-light">
            <span
              className="h-4 w-fit hover:cursor-pointer"
              onClick={() => handlePreviousPage()}
            >
              <FiArrowLeftCircle className="h-full w-auto text-[#525252]" />
            </span>
            <span className="h-fit border-[1px] border-color60shade bg-color60 px-2 py-1 ">
              {currentPage}
            </span>
            <span
              className="h-4 w-fit hover:cursor-pointer"
              onClick={() => handleNextPage(currentPage, currentTable)}
            >
              <FiArrowRightCircle className="h-full w-auto text-[#525252]" />
            </span>
          </span>
        </footer>
      </div>
    </div>
  );
};
export default SQLinterface;
