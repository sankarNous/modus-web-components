import {
  FunctionalComponent,
  h, // eslint-disable-line @typescript-eslint/no-unused-vars
} from '@stencil/core';
import { Cell } from '@tanstack/table-core';
import { ModusColumnDataType } from '../enums/modus-column-data-type';
import { PropertyDataType } from '../constants/constants';

interface ModusDataTableCellProps {
  cell: Cell<unknown, unknown>;
}

export const ModusDataTableCell: FunctionalComponent<
  ModusDataTableCellProps
> = (props: ModusDataTableCellProps) => {
  return (
    // Step 2:
    // <modus-tooltip text="hello there" position="bottom" >
      <td
        key={props.cell.id}
        class={`
       ${
         props.cell.column.columnDef[PropertyDataType] ===
           ModusColumnDataType.Integer ||
         props.cell.column.columnDef[PropertyDataType] ===
           ModusColumnDataType.Currency
           ? 'text-align-right'
           : ''
       }
          ${props.cell.column.getIsResizing() ? 'can-resize' : ''}
      `}
      style={{ width: `${props.cell.column.getSize()}px` }}>
        {/* Step 1:  */}
        <modus-tooltip text="hello there" position="bottom" >
        {props.cell.column.columnDef[PropertyDataType] !==
        ModusColumnDataType.Date
          ? props.cell.renderValue()
          : new Date(String(props.cell.renderValue()))?.toLocaleString()}
        </modus-tooltip>
      </td>
    // </modus-tooltip>
  );
};

// Issue description

// Step 1: wrap modus-tooltip around the td cell (overflow: hidden to show an ellipsis when text is larger than the td cell width).
// Issue: The tooltip is trapped in that TD cell because of overflow: hidden.

// Step 2: Wrap the modus-tooltip around the TD cell.
// Issue: It breaks the UI.
