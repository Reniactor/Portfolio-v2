import { CiHashtag } from "react-icons/ci";

const Tag = ({ techName }: { techName: string }) => {
  return (
    <li
      aria-labelledby={`${techName}-tag`}
      className="flex items-center rounded-full bg-[#2e2e2e] px-2 py-1 text-xs font-medium text-color30 "
    >
      <CiHashtag />
      {techName}
    </li>
  );
};
export default Tag;
