"use client";
import { MdOutlineKey } from "react-icons/md";
import { technologies as allTables } from "./technologiesIndex";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useEffect, useState } from "react";

import Dropdown from "./Dropdown";
import Cell from "./Cell";

const ROWS_PER_PAGE = 11;

const SQLinterface = () => {
  type TableOption = { type: string; label: string };
  const [selectedTable, setSelectedTable] = useState({
    type: "all",
    label: "All tables",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTable, setCurrentTable] = useState(allTables);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentTable]);

  const handleSelect = (option: TableOption) => {
    setSelectedTable(option);
    if (option.type === "all") {
      setCurrentTable(allTables);
    } else {
      setCurrentTable(allTables.filter((item) => item.type === option.type));
    }
  };

  const totalPages = Math.max(1, Math.ceil(currentTable.length / ROWS_PER_PAGE));
  const startIdx = (currentPage - 1) * ROWS_PER_PAGE;
  const visibleRows = currentTable.slice(startIdx, startIdx + ROWS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
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

  const headerCellClass =
    "h-7 border border-[#474747] px-4 text-sm font-medium";

  const SQLInterfaceHeaders = [
    {
      name: (
        <span className="flex items-center justify-center gap-x-2">
          <span className="flex items-center">
            <MdOutlineKey className="mr-1 h-4 w-auto text-color10" />
            id
          </span>
          <span className="text-xs font-extralight text-[#999999]">int</span>
        </span>
      ),
    },
    {
      name: (
        <span className="flex items-center justify-center gap-x-2">
          <span>language</span>
          <span className="text-xs font-extralight text-[#999999]">text</span>
        </span>
      ),
    },
    {
      name: (
        <span className="flex items-center justify-center gap-x-2">
          <span>description</span>
          <span className="text-xs font-extralight text-[#999999]">text</span>
        </span>
      ),
    },
    {
      name: (
        <span className="flex items-center justify-center gap-x-2">
          <span>status</span>
          <span className="text-xs font-extralight text-[#999999]">text</span>
        </span>
      ),
    },
    {
      name: (
        <span className="flex items-center justify-center gap-x-2">
          <span>owner</span>
          <span className="text-xs font-extralight text-[#999999]">text</span>
        </span>
      ),
    },
    {
      name: (
        <span className="flex items-center justify-center gap-x-2">
          <span>created_at</span>
          <span className="text-xs font-extralight text-[#999999]">timestamp</span>
        </span>
      ),
    },
    {
      name: (
        <span className="flex items-center justify-center gap-x-2">
          <span>updated_at</span>
          <span className="text-xs font-extralight text-[#999999]">timestamp</span>
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-fit w-full overflow-hidden rounded-md bg-[#0f0f0f] shadow-xl 2xl:ml-4">
      <div className="h-full w-full overflow-auto rounded-md">
        <header className="flex h-8 items-center justify-between rounded-t-lg bg-[#141414] px-4">
          <span className="flex h-6 min-w-28 items-center justify-center gap-x-2 rounded-sm border-[1px] border-[#474747] bg-[#2f2f2f] text-sm font-light">
            <span className="text-xs font-extralight text-[#999999]">
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
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: "1024px" }}>
            <thead className="sticky top-0 z-10 bg-color60">
              <tr>
                {SQLInterfaceHeaders.map(({ name }, index) => (
                  <th key={index} className={headerCellClass}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((item) => (
                <tr key={item.id}>
                  <td className="h-7 p-0">
                    <Cell value={String(item.id)} />
                  </td>
                  <td className="h-7 p-0">
                    <Cell value={item.language} />
                  </td>
                  <td className="h-7 p-0">
                    <Cell value={item.description} />
                  </td>
                  <td className="h-7 p-0">
                    <Cell value={item.status} />
                  </td>
                  <td className="h-7 p-0">
                    <Cell value={item.owner} />
                  </td>
                  <td className="h-7 p-0">
                    <Cell value={item.createdAt} />
                  </td>
                  <td className="h-7 p-0">
                    <Cell value={item.updatedAt} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="flex h-8 w-full items-center justify-between place-self-end bg-[#141414] px-4">
          <span className="text-xs font-thin">
            {visibleRows.length} of {currentTable.length} items
          </span>
          <span className="flex items-center gap-1 text-xs font-light">
            <span
              className="h-4 w-fit hover:cursor-pointer"
              onClick={handlePreviousPage}
            >
              <FiArrowLeftCircle className="h-full w-auto text-[#525252]" />
            </span>
            <span className="h-fit border-[1px] border-color60shade bg-color60 px-2 py-1">
              {currentPage}
            </span>
            <span
              className="h-4 w-fit hover:cursor-pointer"
              onClick={handleNextPage}
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
