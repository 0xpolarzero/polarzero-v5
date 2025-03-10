import { Cell, DOMUpdateType } from '@/lib/types/gas-visualizer';

type Tables = {
  getGasInDollarsCells: (
    cells: Cell[],
    gasPrice: number,
    nativePrice: number,
    nativeDecimals: number,
  ) => Promise<Cell[]>;
  calculatePriceInDollars: (
    gas: number,
    gasPrice: number,
    nativePrice: number,
    nativeDecimals: number,
  ) => number;
  getOriginalCellsAndInit: (document: Document) => Promise<Cell[]>;
  updateCellsDOM: (document: Document, cells: Cell[], type: DOMUpdateType) => void;
  replaceCellFromText: (document: Document, cell: Element, newText: string) => Element;
};

const tables: Tables = {
  /* -------------------------------------------------------------------------- */
  /*                                  GET CELLS                                 */
  /* -------------------------------------------------------------------------- */

  getOriginalCellsAndInit: async (document) => {
    const originalCells: Cell[] = [];
    const cells = document.querySelector('article')?.querySelectorAll('td');

    cells?.forEach((cell) => {
      const marked = cell.textContent?.includes('--GAS--') || false;
      const elementWithoutGas = marked
        ? tables.replaceCellFromText(document, cell, cell.textContent?.replace('--GAS--', '') || '')
        : cell;

      let elementLoading;
      if (marked) {
        const loadingCell = document.createElement('td');
        loadingCell.textContent = '...';
        elementLoading = loadingCell;
      } else {
        elementLoading = elementWithoutGas;
      }

      originalCells.push({
        marked,
        original: elementWithoutGas,
        transformed: elementWithoutGas,
        loading: elementLoading,
      });
    });

    return originalCells;
  },

  getGasInDollarsCells: async (cells, gasPrice, nativePrice, nativeDecimals) => {
    cells.forEach((cell) => {
      if (!cell.marked) return cell;

      // Match numbers (exclude %, use comma as thousands separator, and allow negative numbers)
      const numberRegex = /-?\d+(?:,\d{3})*(?:\.\d+)?(?![\d,.]*%)/g;

      const newText = cell.original.textContent?.replace(numberRegex, (match) => {
        const clean = Number(match.replace(/,/g, ''));
        if (!clean) return match;

        const dollarValue = tables.calculatePriceInDollars(
          gasPrice,
          clean,
          nativePrice,
          nativeDecimals,
        );

        const decimals = Math.abs(dollarValue) < 0.001 ? 999 : Math.abs(dollarValue) < 0.01 ? 3 : 2;

        if (decimals === 999) {
          return '$<0.001';
        }

        return dollarValue.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: decimals,
        });
      });

      cell.transformed = tables.replaceCellFromText(
        document,
        cell.original,
        newText || cell.original?.textContent || '',
      );

      return cell;
    });

    return cells;
  },

  /* -------------------------------------------------------------------------- */
  /*                                 UPDATE DOM                                 */
  /* -------------------------------------------------------------------------- */

  updateCellsDOM: (document, cells, type) => {
    const cellsDOM = document.querySelector('article')?.querySelectorAll('td');
    cellsDOM?.forEach((cellDOM, index) => {
      if (!cells[index].marked) return;

      type === 'restore'
        ? cellDOM.replaceWith(cells[index].original)
        : type === 'update'
        ? cellDOM.replaceWith(cells[index].transformed)
        : cellDOM.replaceWith(cells[index].loading);
    });
  },

  replaceCellFromText: (document, cell, newText) => {
    const newCell = document.createElement(cell.tagName);
    newCell.textContent = newText;
    return newCell;
  },

  /* -------------------------------------------------------------------------- */
  /*                                   HELPERS                                  */
  /* -------------------------------------------------------------------------- */

  calculatePriceInDollars: (
    gas: number,
    gasPrice: number,
    nativePrice: number,
    nativeDecimals: number,
  ) => {
    return (gas * gasPrice * nativePrice) / 10 ** nativeDecimals;
  },
};

export default tables;
