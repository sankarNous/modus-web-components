import { html } from 'lit-html';
// @ts-ignore: JSX/MDX with Stencil
import docs from './modus-data-table-storybook-docs.mdx';

const MockColumns: unknown[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
    id: 'first-name',
    dataType: 'text',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
    id: 'last-name',
    dataType: 'text',
  },
  {
    header: 'Age',
    accessorKey: 'age',
    id: 'age',
    dataType: 'text',
  },
  {
    header: 'Visits',
    accessorKey: 'visits',
    id: 'visits',
    dataType: 'text',
  },
  {
    header: 'Status',
    accessorKey: 'status',
    id: 'status',
    dataType: 'text',
  },
  {
    header: 'Profile Progress',
    accessorKey: 'progress',
    id: 'progress',
    dataType: 'text',
  },
];

const MockData: unknown[] = [
  {
    firstName: 'Gordon',
    lastName: 'Lemke',
    age: 40,
    visits: 434,
    progress: 97,
    status: 'single',
  },
  {
    firstName: 'Elliott',
    lastName: 'Bosco',
    age: 21,
    visits: 348,
    progress: 60,
    status: 'complicated',
  },
  {
    firstName: 'Agnes',
    lastName: 'Breitenberg',
    age: 34,
    visits: 639,
    progress: 84,
    status: 'single',
  },
  {
    firstName: 'Nicolette',
    lastName: 'Stamm',
    age: 13,
    visits: 518,
    progress: 28,
    status: 'relationship',
  },
  {
    firstName: 'Anjali',
    lastName: 'Ratke',
    age: 22,
    visits: 585,
    progress: 7,
    status: 'single',
  },
];

export default {
  title: 'Components/Data Table',
  argTypes: {
    columns: {
      name: 'columns',
      description: 'Table header columns',
      control: 'object',
      table: {
        type: { summary: 'array' },
      },
      type: { required: true },
    },
    data: {
      name: 'data',
      description: 'Table data',
      control: 'object',
      table: {
        type: { summary: 'object' },
      },
      type: { required: true },
    },
    hover: {
      name: 'hover',
      description: 'Enables hover on table rows',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      type: { required: false },
    },
    sort: {
      name: 'sort',
      description: 'Sort table data',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      type: { required: false },
    },
    showSortIconOnHover: {
      name: 'showSortIconOnHover',
      description: 'Sort icon on hover of table header',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      type: { required: false },
    },
    summaryRow: {
      name: 'summary-row',
      description: 'Adds a summary row as footer',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      type: { required: false },
    },
    pagination: {
      name: 'pagination',
      description: 'Enable pagination on table data',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      type: { required: false },
    },
    columnResize: {
      name: 'column-resize',
      description: 'Enables the column resizing for table',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      type: { required: false },
    },
  },
  parameters: {
    actions: {
      handles: ['sortChange'],
    },
    controls: { expanded: true, sort: 'requiredFirst' },
    docs: {
      page: docs,
    },
    options: {
      isToolshown: true,
      enableShortcuts: false,
    },
  },
};

const Template = ({ columns, data, hover }) => html`
  <modus-data-table
    columns="${columns}"
    data="${data}"
    hover="${hover}"></modus-data-table>
`;

export const Default = Template.bind({});
Default.args = {
  columns: MockColumns,
  data: MockData,
  hover: false,
};

export const Hover = Template.bind({});
Hover.args = {
  columns: MockColumns,
  data: MockData,
  hover: true,
};

// export const Default = () => html`
//   <div style="width: 950px">
//     <modus-data-table />
//   </div>
//   ${defaultTable()}
// `;

// // The <script> tag cannot be used in the MDX file, so we use this method to
// // set the table data for the default story.
// const defaultTable = () => {
//   const tag = document.createElement('script');
//   tag.innerHTML = `
//     document.querySelector('modus-data-table').columns = [{ header: 'First Name', accessorKey: 'firstName', id: 'first-name', dataType: 'text', }, { header: 'Last Name', accessorKey: 'lastName', id: 'last-name', dataType: 'text', }, { header: 'Age', accessorKey: 'age', id: 'age', dataType: 'integer' }, { header: 'Visits', accessorKey: 'visits', id: 'visits', dataType: 'integer', }, { header: 'Status', accessorKey: 'status', id: 'status', dataType: 'text' }, { header: 'Profile Progress', accessorKey: 'progress', id: 'progress', dataType: 'integer', },];
//     document.querySelector('modus-data-table').data = [{ firstName: 'Gordon', lastName: 'Lemke', age: 40, visits: 434, progress: 97, status: 'single', createdAt: '2002-11-21T12:48:51.739Z', }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: '2012-02-08T12:14:22.776Z', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: '1995-04-07T07:24:57.577Z', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: '2009-07-28T14:29:51.505Z', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: '2000-09-10T12:45:15.824Z', }];
//   `;
//   return tag;
// };

// export const Hover = () => html`
//   <div style="width: 950px">
//     <modus-data-table hover="true" />
//   </div>
//   ${hoverTable()}
// `;

// const hoverTable = () => {
//   const tag = document.createElement('script');
//   tag.innerHTML = `
//     document.querySelector('modus-data-table').columns = [{ header: 'First Name', accessorKey: 'firstName', id: 'first-name', dataType: 'text', }, { header: 'Last Name', accessorKey: 'lastName', id: 'last-name', dataType: 'text', }, { header: 'Age', accessorKey: 'age', id: 'age', dataType: 'integer' }, { header: 'Visits', accessorKey: 'visits', id: 'visits', dataType: 'integer', }, { header: 'Status', accessorKey: 'status', id: 'status', dataType: 'text' }, { header: 'Profile Progress', accessorKey: 'progress', id: 'progress', dataType: 'integer', }];
//     document.querySelector('modus-data-table').data = [{ firstName: 'Gordon', lastName: 'Lemke', age: 40, visits: 434, progress: 97, status: 'single', createdAt: '2002-11-21T12:48:51.739Z', }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: '2012-02-08T12:14:22.776Z', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: '1995-04-07T07:24:57.577Z', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: '2009-07-28T14:29:51.505Z', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: '2000-09-10T12:45:15.824Z', }];
//   `;
//   return tag;
// };

// export const Borderless = () => html`
//   <div style="width: 950px">
//     <modus-data-table hover="true" />
//   </div>
//   ${borderlessTable()}
// `;

// const borderlessTable = () => {
//   const tag = document.createElement('script');
//   tag.innerHTML = `
//     document.querySelector('modus-data-table').columns = [{ header: 'First Name', accessorKey: 'firstName', id: 'first-name', dataType: 'text', }, { header: 'Last Name', accessorKey: 'lastName', id: 'last-name', dataType: 'text', }, { header: 'Age', accessorKey: 'age', id: 'age', dataType: 'integer' }, { header: 'Visits', accessorKey: 'visits', id: 'visits', dataType: 'integer', }, { header: 'Status', accessorKey: 'status', id: 'status', dataType: 'text' }, { header: 'Profile Progress', accessorKey: 'progress', id: 'progress', dataType: 'integer', }];
//     document.querySelector('modus-data-table').data = [{ firstName: 'Gordon', lastName: 'Lemke', age: 40, visits: 434, progress: 97, status: 'single', createdAt: '2002-11-21T12:48:51.739Z', }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: '2012-02-08T12:14:22.776Z', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: '1995-04-07T07:24:57.577Z', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: '2009-07-28T14:29:51.505Z', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: '2000-09-10T12:45:15.824Z', }];
//     document.querySelector('modus-data-table').displayOptions = { borderless: true, cellBorderless: true }
//   `;
//   return tag;
// };

// export const Sorting = () => html`
//   <div style="width: 950px">
//     <modus-data-table hover="true" sort="true" show-sort-icon-hover="false" />
//   </div>
//   ${sortingTable()}
// `;

// const sortingTable = () => {
//   const tag = document.createElement('script');
//   tag.innerHTML = `
//     document.querySelector('modus-data-table').columns = [{ header: 'First Name', accessorKey: 'firstName', id: 'first-name', dataType: 'text', }, { header: 'Last Name', accessorKey: 'lastName', id: 'last-name', dataType: 'text', }, { header: 'Age', accessorKey: 'age', id: 'age', dataType: 'integer' }, { header: 'Visits', accessorKey: 'visits', id: 'visits', dataType: 'integer', }, { header: 'Status', accessorKey: 'status', id: 'status', dataType: 'text' }, { header: 'Profile Progress', accessorKey: 'progress', id: 'progress', dataType: 'integer', }];
//     document.querySelector('modus-data-table').data = [{ firstName: 'Gordon', lastName: 'Lemke', age: 40, visits: 434, progress: 97, status: 'single', createdAt: '2002-11-21T12:48:51.739Z', }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: '2012-02-08T12:14:22.776Z', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: '1995-04-07T07:24:57.577Z', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: '2009-07-28T14:29:51.505Z', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: '2000-09-10T12:45:15.824Z', }];
//     document.querySelector('modus-data-table').displayOptions = { borderless: false, cellBorderless: false }
//   `;
//   return tag;
// };

// export const ColumnResize = () => html`
//   <div style="width: 950px">
//     <modus-data-table
//       hover="true"
//       sort="true"
//       column-resize="true"
//       full-width="false" />
//   </div>
//   ${columnResize()}
// `;

// const columnResize = () => {
//   const tag = document.createElement('script');
//   tag.innerHTML = `
//   document.querySelector('modus-data-table').columns = [{header: 'First Name',accessorKey: 'firstName',id: 'first-name',dataType: 'text',size: 150,minSize: 80},{header: 'Last Name',accessorKey: 'lastName',id: 'last-name',dataType: 'text',size: 150,minSize: 80},{header: 'Age',accessorKey: 'age',id: 'age',dataType: 'integer',size: 100,minSize: 60},{header: 'Visits',accessorKey: 'visits',id: 'visits',dataType: 'integer',maxSize: 150,minSize: 80,enableResizing: false,},{header: 'Status',accessorKey: 'status',id: 'status',dataType: 'text' ,minSize: 80},{header: 'Profile Progress',accessorKey: 'progress',id: 'progress',dataType: 'integer',minSize: 100},];
//   document.querySelector('modus-data-table').data = [{ firstName: 'Gordon', lastName: 'Lemke', age: 40, visits: 434, progress: 97, status: 'single', createdAt: '2002-11-21T12:48:51.739Z', }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: '2012-02-08T12:14:22.776Z', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: '1995-04-07T07:24:57.577Z', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: '2009-07-28T14:29:51.505Z', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: '2000-09-10T12:45:15.824Z', }];
//   `;
//   return tag;
// };

// export const Pagination = () => html`
//   <div style="width: 950px">
//     <modus-data-table
//       hover="true"
//       sort="true"
//       column-resize="true"
//       pagination="true" />
//   </div>
//   ${paginationTable()}
// `;

// const paginationTable = () => {
//   const tag = document.createElement('script');
//   tag.innerHTML = `
//     document.querySelector('modus-data-table').columns = [{ header: 'First Name', accessorKey: 'firstName', id: 'first-name', dataType: 'text', }, { header: 'Last Name', accessorKey: 'lastName', id: 'last-name', dataType: 'text', }, { header: 'Age', accessorKey: 'age', id: 'age', dataType: 'integer' }, { header: 'Visits', accessorKey: 'visits', id: 'visits', dataType: 'integer', }, { header: 'Status', accessorKey: 'status', id: 'status', dataType: 'text' }, { header: 'Profile Progress', accessorKey: 'progress', id: 'progress', dataType: 'integer', }];
//     document.querySelector('modus-data-table').data = [{ age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }];
//     document.querySelector('modus-data-table').pageSizeList = [5,10,20,50,100];
//     `;
//   return tag;
// };

// export const SummaryRow = () => html`
//   <div style="width: 950px">
//     <modus-data-table
//       hover="true"
//       sort="true"
//       column-resize="true"
//       pagination="true"
//       show-sort-icon-hover="true"
//       summary-row="true" />
//   </div>
//   <div style="width: 950px">
//     <modus-data-table column-resize="true" full-width="false" />
//   </div>
//   ${summaryRowTable()}
// `;

// const summaryRowTable = () => {
//   const tag = document.createElement('script');
//   tag.innerHTML = `
//     document.querySelector('modus-data-table').columns = [{ header: 'First Name', accessorKey: 'firstName', id: 'first-name', dataType: 'text', footer: 'Total' }, { header: 'Last Name', accessorKey: 'lastName', id: 'last-name', dataType: 'text', }, { header: 'Age', accessorKey: 'age', id: 'age', dataType: 'integer' }, { header: 'Visits', accessorKey: 'visits', id: 'visits', dataType: 'integer', showTotal: true }, { header: 'Status', accessorKey: 'status', id: 'status', dataType: 'text' }, { header: 'Profile Progress', accessorKey: 'progress', id: 'progress', dataType: 'integer', showTotal: true}];
//     document.querySelector('modus-data-table').data = [{ age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', createdAt: "2002-11-21T12:48:51.739Z" }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }, { firstName: 'Elliott', lastName: 'Bosco', age: 21, visits: 348, progress: 60, status: 'complicated', }, { firstName: 'Agnes', lastName: 'Breitenberg', age: 34, visits: 639, progress: 84, status: 'single', }, { firstName: 'Nicolette', lastName: 'Stamm', age: 13, visits: 518, progress: 28, status: 'relationship', }, { firstName: 'Anjali', lastName: 'Ratke', age: 22, visits: 585, progress: 7, status: 'single', }, { firstName: 'Kamryn', lastName: 'Gerlach', age: 23, visits: 488, progress: 71, status: 'single', }, { age: 40, firstName: 'Gordon', lastName: 'Lemke', progress: 97, status: 'single', subRows: undefined, visits: 434, }];
//     document.querySelector('modus-data-table').pageSizeList = [5,10,20,50,100];
//     `;
//   return tag;
// };
