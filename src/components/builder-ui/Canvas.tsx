'use client';

import { SheetConfig } from '@/types/sheet';
import styles from './Canvas.module.scss';

const Canvas = () => {

  const defaultConfig: SheetConfig = {
    pageSize: 'letter',
    pageMargin: 0.5,
    gridRows: 20,
    gridColumns: 12,
    cellGap: 8
  };

  return (
    <div
      className={styles.canvas}
      style={{
        width: `${defaultConfig.pageSize === 'letter' ? 8.5 : 8.27}in`,
        height: `${defaultConfig.pageSize === 'letter' ? 11 : 11.69}in`,
        padding: `${defaultConfig.pageMargin}in`
      }}
    >
      <h2>Canvas</h2>
      <p>This is where the canvas will be rendered.</p>
      {/* Canvas rendering logic will go here */}
    </div>
  )
}

export default Canvas;
