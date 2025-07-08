import Header from "@/components/builder-ui/Header";
import Canvas from "@/components/builder-ui/Canvas";

import styles from './page.module.scss';

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

  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.container}>
        <Canvas />
      </main>
    </div>
  )
}
