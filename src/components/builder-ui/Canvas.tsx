'use client';

import React from 'react';
import { SheetConfig } from '@/types/sheet';
import Moveable from 'react-moveable';
import Selecto from 'react-selecto';

import styles from './Canvas.module.scss';
import BaseContainer from '../containers/BaseContainer';

const Canvas = ({config, showGuides}: {config: SheetConfig, showGuides: boolean}) => {
  const [targets, setTargets] = React.useState<Array<SVGElement | HTMLElement>>([]); const moveableRef = React.useRef<Moveable>(null);
  const selectoRef = React.useRef<Selecto>(null);

  // Calculate canvas size in px
  const inchToPx = 96; // 1in = 96px in browsers
  const canvasWidth = (config.pageSize === 'letter' ? 8.5 : 8.27) * inchToPx;
  const canvasHeight = (config.pageSize === 'letter' ? 11 : 11.69) * inchToPx;
  const pageMarginPx = config.pageMargin * inchToPx;

  // Calculate grid guidelines (positions in px relative to canvas)
  const colCount = config.gridColumns;
  const rowCount = config.gridRows;
  const cellGap = config.cellGap;
  const gridWidth = canvasWidth - 2 * pageMarginPx;
  const gridHeight = canvasHeight - 2 * pageMarginPx;
  const colWidth = (gridWidth - (colCount - 1) * cellGap) / colCount;
  const rowHeight = (gridHeight - (rowCount - 1) * cellGap) / rowCount;

  // Vertical guidelines (x positions)
  // Subtract pageMarginPx so 0 aligns with the left edge of the grid content
  const verticalGuidelines = Array.from({ length: colCount + 1 }, (_, i) =>
    Math.round(i * (colWidth + cellGap))
  );
  // Horizontal guidelines (y positions)
  const horizontalGuidelines = Array.from({ length: rowCount + 1 }, (_, i) =>
    Math.round(i * (rowHeight + (i === 0 ? 0 : cellGap)))
  );

  console.log(horizontalGuidelines, verticalGuidelines);
  return (
    <div
      className={styles.canvas}
      style={{
        width: `${canvasWidth}px`,
        height: `${canvasHeight}px`,
        padding: `${pageMarginPx}px`,
        position: 'relative',
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
        <h2>Stuff</h2>
        <div className={styles.moveableTarget} style={{height: rowHeight *3, width: colWidth * 3}} role="region">
          <BaseContainer />
        </div>
        <div className={styles.moveableTarget} style={{ left: colWidth*3 }} role="region">
          <BaseContainer />
        </div>
        <Moveable
          ref={moveableRef}
          target={targets}
          draggable={true}
          resizable={true}
          snappable={true}
          verticalGuidelines={verticalGuidelines}
          horizontalGuidelines={horizontalGuidelines}
          snapHorizontalThreshold={100}
          snapVerticalThreshold={100}
          isDisplayGridGuidelines={true}
          bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: 'css' }}
          throttleDrag={1}
          onDrag={e => {
            e.target.style.transform = e.transform;
          }}
          onDragGroup={e => {
            e.events.forEach(ev => {
              ev.target.style.transform = ev.transform;
            });
          }}
          onResize={e => {
            e.target.style.width = `${e.width}px`;
            e.target.style.height = `${e.height}px`;
            e.target.style.transform = e.drag.transform;
          }}
          onBound={e => {
            console.log(e);
          }}
        />
        <Selecto
          ref={selectoRef}
          dragContainer={typeof window !== "undefined" ? window : undefined}
          selectableTargets={['div[role="region"]']}
          selectByClick={true}
          selectFromInside={false}
          toggleContinueSelect={["shift"]}
          ratio={0}
          onDragStart={e => {
            const moveable = moveableRef.current!;
            const target = e.inputEvent.target;
            if (
              moveable.isMoveableElement(target)
              || targets.some(t => t === target || t.contains(target))
            ) {
              e.stop();
            }
          }}
          onSelectEnd={e => {
            const moveable = moveableRef.current!;
            if (e.isDragStart) {
              e.inputEvent.preventDefault();

              moveable.waitToChangeTarget().then(() => {
                moveable.dragStart(e.inputEvent);
              });
            }
            setTargets(e.selected);
          }}
        />
      </div>
    </div>
  )
}

export default Canvas;
