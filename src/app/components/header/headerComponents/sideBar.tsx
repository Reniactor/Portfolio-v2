import { roboto } from "@/utils/fontIndex";
import Link from "next/link";

const SideBar = ({
  visibility,
  routes,
  handleClick,
}: {
  visibility: boolean;
  routes: { name: string; route: string }[];
  handleClick: () => void;
}) => {
  return (
    <div
      className={`absolute left-0 top-0 z-40 flex h-screen w-screen transition-transform duration-300 ${visibility ? "translate-x-0" : "translate-x-full "} flex-col justify-center gap-8 bg-color60shade px-12`}
    >
      {routes.map(({ name, route }) => {
        return (
          <div
            className="w-fit duration-200 hover:border-color10 hover:text-color10/90"
            key={name}
          >
            <Link
              href={route}
              key={name}
              className={`${roboto.className} h-fit text-3xl font-semibold uppercase tracking-tight duration-200 focus:text-color10/90`}
              onClick={handleClick}
            >
              {name}
            </Link>
            <div className="w-1/2 border-b-2" />
          </div>
        );
      })}
    </div>
  );
};
export default SideBar;
