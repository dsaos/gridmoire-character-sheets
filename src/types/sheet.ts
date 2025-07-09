export interface SheetConfig {
  pageSize: "letter" | "a4" | "legal" | "tabloid";
  pageMargin: number; // in inches
  gridRows: number;
  gridColumns: number;
  cellGap: number; // in pixels
}

export interface PageSizeOption {
  value: "letter" | "a4" | "legal" | "tabloid";
  label: string;
  dimensions: string;
  widthIn: number;
  heightIn: number;
}

// Constants
export const PAGE_SIZE_OPTIONS: PageSizeOption[] = [
  { value: "letter", label: "Letter", dimensions: '8.5" × 11"', widthIn: 8.5, heightIn: 11 },
  { value: "a4", label: "A4", dimensions: '8.27" × 11.69"', widthIn: 8.27, heightIn: 11.69 },
  { value: "legal", label: "Legal", dimensions: '8.5" × 14"', widthIn: 8.5, heightIn: 14 },
  { value: "tabloid", label: "Tabloid", dimensions: '11" × 17"', widthIn: 11, heightIn: 17 },
];

export const MARGIN_OPTIONS = [
  { value: 0.25, label: "¼ inch" },
  { value: 0.5, label: "½ inch" },
  { value: 0.75, label: "¾ inch" },
  { value: 1, label: "1 inch" },
];

export const GRID_PRESETS = [
  { rows: 20, cols: 12, label: "Standard (12×20)" },
  { rows: 24, cols: 16, label: "Dense (16×24)" },
  { rows: 16, cols: 10, label: "Sparse (10×16)" },
  { rows: 30, cols: 20, label: "Fine (20×30)" },
];

export const GAP_OPTIONS = [
  { value: 2, label: "2px - Tight" },
  { value: 4, label: "4px - Compact" },
  { value: 8, label: "8px - Standard" },
  { value: 12, label: "12px - Spacious" },
  { value: 16, label: "16px - Loose" },
];
