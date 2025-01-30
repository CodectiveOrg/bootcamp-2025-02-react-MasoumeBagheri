import { Button } from "../button";

import { IconAdd } from "../icons/icons";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Button className="add" shape="circle" size="medium">
        <IconAdd fill="var(--color-surface)" />
      </Button>
    </footer>
  );
};
