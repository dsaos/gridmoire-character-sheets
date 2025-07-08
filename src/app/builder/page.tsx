import Header from "@/components/builder-ui/Header";
import Canvas from "@/components/builder-ui/Canvas";
import { Metadata } from "next";
import { SheetConfig } from "@/types/sheet";

import styles from './page.module.scss';


export const metadata: Metadata = {
  title: "Gridmoire Builder",
  description: "Make your own intuitive and beautiful character sheets for tabletop RPGs like Dungeons & Dragons.",
};

export default function Builder() {

  /*
  const [sheetConfig, setSheetConfig] = useState<SheetConfig | null>(null);

  useEffect(() => {
    const storedConfig = localStorage.getItem('sheetConfig');
    if (storedConfig) {
      try {
        setSheetConfig(JSON.parse(storedConfig));
      } catch (e) {
        // handle parse error if needed
      }
    }
  }, []);

  if (!sheetConfig) {
    return <SheetSetup onComplete={setSheetConfig} />;
  }
    */


  const defaultConfig: SheetConfig = {
    pageSize: 'letter',
    pageMargin: 1,
    gridRows: 20,
    gridColumns: 12,
    cellGap: 0
  };

  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.container}>
        <Canvas config={defaultConfig} showGuides={true} />
      </main>
    </div>
  )
}
