import { useBuilderContext } from "@/context/BuilderContext";
import { ActionIcon, Switch } from "@mantine/core";
import { DiamondPlus, FileCog, } from "lucide-react";

import styles from "./Header.module.scss";

const Header = () => {
  const { showGuides, toggleGuides } = useBuilderContext();

  return (
    <header className={styles.header}>
      <h6>Gridmoire</h6>
      <ActionIcon variant="default">
        <DiamondPlus />
      </ActionIcon>
      <ActionIcon variant="default">
        <FileCog />
      </ActionIcon>
      <Switch
        checked={showGuides}
        label="Show guides"
        onChange={() => {
          toggleGuides();
        }}
      />
    </header>
  );
};

export default Header;
