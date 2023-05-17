declare module 'html2pdf.js' {
  export type jsPDFWithPlugin = import('jspdf').jsPDF & {
    putTotalPages?: (totalPagesExp: string) => void;
    totalPages?: number;
  };

  export type Options = {
    margin?: number | number[];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: object;
    jsPDF?: import('jspdf').jsPDFOptions;
    pagebreak?: {
      mode?: 'auto' | 'avoid' | 'css' | 'legacy' | 'always';
      before?: string;
      after?: string;
      avoid?: string;
      html2canvas?: object;
      image?: { type?: string; quality?: number };
      jspdf?: jsPDFWithPlugin;
    };
    page?: {
      format?: string | number[] | null;
      orientation?: string | null;
      unit?: string | null;
      width?: number | null;
      height?: number | null;
    };
    jsPDFEditor?: object;
    jsPDFContext?: object;
  };

  export function set(options: Options): {
    from: (element: HTMLElement) => {
      toPdf: (callback?: () => void) => jsPDFWithPlugin;
      toBlob: (callback?: (blob: Blob) => void, mimeType?: string, quality?: any) => void;
      toCanvas: (callback?: (canvas: HTMLCanvasElement) => void, options?: object) => void;
      toImg: (callback?: (img: HTMLImageElement) => void, mimeType?: string, quality?: any) => void;
      output: (type?: string, options?: object) => any;
      save: (filename?: string) => void;
    };
  };

  export as namespace html2pdf;
  export = html2pdf;
}
