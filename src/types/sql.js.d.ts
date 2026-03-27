declare module "sql.js" {
  interface QueryExecResult {
    columns: string[];
    values: (string | number | null | Uint8Array)[][];
  }

  interface Database {
    run(sql: string): Database;
    exec(sql: string): QueryExecResult[];
    close(): void;
  }

  interface SqlJsStatic {
    Database: new () => Database;
  }

  interface InitSqlJsOptions {
    locateFile?: (file: string) => string;
  }

  export type { Database };
  export default function initSqlJs(
    options?: InitSqlJsOptions,
  ): Promise<SqlJsStatic>;
}
