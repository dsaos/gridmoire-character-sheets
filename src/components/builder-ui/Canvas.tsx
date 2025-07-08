'use client';

import { SheetConfig } from '@/types/sheet';

import styles from './Canvas.module.scss';

const Canvas = ({config, showGuides}: {config: SheetConfig, showGuides: boolean}) => {

  return (
    <div
      className={styles.canvas}
      style={{
        width: `${config.pageSize === 'letter' ? 8.5 : 8.27}in`,
        height: `${config.pageSize === 'letter' ? 11 : 11.69}in`,
        padding: `${config.pageMargin}in`,
      }}
    >
      <div
        className={styles.guides}
        style={{
          display: showGuides ? 'grid' : 'none',
          gridTemplateColumns: `repeat(${config.gridColumns}, 1fr)`,
          gridTemplateRows: `repeat(${config.gridRows}, 1fr)`,
          gap: `${config.cellGap}px`,
          padding: `${config.pageMargin}in`
        }}
      >
        {Array.from({ length: config.gridRows * config.gridColumns }).map((_, i) => (
          <div key={i} className={styles.guideBox} />
        ))}
      </div>
      <div className={styles.gridContent}>
        <h2>Canvas</h2>
        <p>This is where the canvas will be rendered.</p>
      </div>
    </div>
  )
}

export default Canvas;
