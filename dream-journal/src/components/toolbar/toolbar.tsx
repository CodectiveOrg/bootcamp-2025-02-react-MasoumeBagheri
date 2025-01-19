import { Button } from "../button";
import { DreamFilter } from "../dream-filter";
import { IconLight } from "../icons/icons";
import { SearchBox } from "../search-box";

export const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <SearchBox />
      <DreamFilter />
      <Button className="theme">
        <IconLight />
      </Button>
    </div>
  );
};
