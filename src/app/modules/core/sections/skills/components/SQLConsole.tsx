"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { MdOutlineKey } from "react-icons/md";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { VscPlay } from "react-icons/vsc";
import initSqlJs, { type Database } from "sql.js";
import { technologies } from "./technologiesIndex";
import Cell from "./Cell";

const ROWS_PER_PAGE = 11;

const DEFAULT_QUERY = "SELECT * FROM skills ORDER BY id;";

const SEED_SQL = `
CREATE TABLE skills (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL,
  owner TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
${technologies
  .map(
    (t) =>
      `INSERT INTO skills VALUES (${t.id}, '${t.language.replace(/'/g, "''")}', '${t.type}', '${t.description.replace(/'/g, "''")}', '${t.status}', '${t.owner.replace(/'/g, "''")}', '${t.createdAt}', '${t.updatedAt}');`,
  )
  .join("\n")}
`;

const SQLConsole = () => {
  const [db, setDb] = useState<Database | null>(null);
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowCount, setRowCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const init = async () => {
      const SQL = await initSqlJs({
        locateFile: () => "/sql-wasm.wasm",
      });
      const database = new SQL.Database();
      database.run(SEED_SQL);
      setDb(database);
    };
    void init();
  }, []);

  const executeQuery = useCallback(
    (sql: string) => {
      if (!db) return;
      setError(null);
      try {
        const results = db.exec(sql);
        if (results.length > 0) {
          const result = results[0]!;
          setColumns(result.columns);
          setRows(result.values.map((row) => row.map(String)));
          setRowCount(result.values.length);
        } else {
          setColumns([]);
          setRows([]);
          setRowCount(0);
        }
        setCurrentPage(1);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Query error");
        setColumns([]);
        setRows([]);
        setRowCount(0);
      }
    },
    [db],
  );

  useEffect(() => {
    if (db) {
      executeQuery(DEFAULT_QUERY);
    }
  }, [db, executeQuery]);

  const handleRun = () => {
    executeQuery(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleRun();
    }
  };

  const totalPages = Math.max(1, Math.ceil(rowCount / ROWS_PER_PAGE));
  const startIdx = (currentPage - 1) * ROWS_PER_PAGE;
  const visibleRows = rows.slice(startIdx, startIdx + ROWS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const hasIdColumn = columns.length > 0 && columns[0] === "id";

  const headerCellClass =
    "flex w-full justify-center items-center h-full border-[1px] border-[#474747] select-none gap-x-2 text-sm font-medium";

  const columnTypeMap: Record<string, string> = {
    id: "int",
    name: "text",
    type: "text",
    description: "text",
    status: "text",
    owner: "text",
    created_at: "timestamp",
    updated_at: "timestamp",
  };

  return (
    <div className="flex w-full flex-col gap-2 2xl:ml-4">
      <div className="flex items-end gap-2">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            rows={2}
            className="w-full resize-none rounded-md border border-[#474747] bg-[#0f0f0f] px-4 py-3 pr-10 font-mono text-sm text-color30 placeholder-[#666] outline-none transition-colors focus:border-color10"
            placeholder="SELECT * FROM skills WHERE type = 'framework';"
          />
          <span className="pointer-events-none absolute bottom-2 right-3 font-mono text-[10px] text-[#555]">
            Ctrl+Enter
          </span>
        </div>
        <button
          onClick={handleRun}
          className="flex h-[52px] items-center gap-1 rounded-md bg-[#2f2f2f] px-4 text-sm font-medium text-color30 transition-colors hover:bg-color10 hover:text-color60"
          aria-label="Run SQL query"
        >
          <VscPlay className="h-4 w-4" />
          Run
        </button>
      </div>

      {error && (
        <div className="rounded-md border border-red-900/50 bg-red-950/30 px-4 py-2 font-mono text-xs text-red-400">
          ERROR: {error}
        </div>
      )}

      <div className="h-[416px] min-h-fit w-full overflow-hidden rounded-md bg-[#0f0f0f] shadow-xl">
        <div className="h-full w-full overflow-auto rounded-md">
          <header className="flex h-8 items-center justify-between rounded-t-lg bg-[#141414] px-4">
            <span className="flex h-6 min-w-28 items-center justify-center gap-x-2 rounded-sm border-[1px] border-[#474747] bg-[#2f2f2f] text-sm font-light">
              <span className="text-xs font-extralight text-[#999999]">
                role
              </span>{" "}
              postgres
            </span>
            <span className="text-xs font-extralight text-[#999999]">
              {rowCount} row{rowCount !== 1 ? "s" : ""} returned
            </span>
          </header>

          {columns.length > 0 ? (
            <div className="h-[352px] w-full overflow-auto">
              <table
                className="w-full border-collapse"
                style={{ minWidth: `${columns.length * 140}px` }}
              >
                <thead className="sticky top-0 z-10 bg-color60">
                  <tr>
                    {columns.map((col, index) => (
                      <th
                        key={index}
                        className="h-7 border border-[#474747] px-4 text-sm font-medium"
                      >
                        <span className="flex items-center justify-center gap-x-2">
                          {hasIdColumn && index === 0 ? (
                            <span className="flex items-center">
                              <MdOutlineKey className="mr-1 h-4 w-auto text-color10" />
                              {col}
                            </span>
                          ) : (
                            <span>{col}</span>
                          )}
                          <span className="text-xs font-extralight text-[#999999]">
                            {columnTypeMap[col] ?? "text"}
                          </span>
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((val, colIdx) => (
                        <td key={colIdx} className="h-7 p-0">
                          <Cell value={val} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex h-[352px] items-center justify-center text-sm font-thin text-[#666]">
              {error ? "Query returned an error." : "No results."}
            </div>
          )}

          <footer className="flex h-8 w-full items-center justify-between place-self-end bg-[#141414] px-4">
            <span className="text-xs font-thin">
              {visibleRows.length} of {rowCount} items
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
    </div>
  );
};

export default SQLConsole;
