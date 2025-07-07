// //  import { Column } from 'react-table';



// export const data = [
//   {
//     job: 'Launch campaign',
//     date: '2025-07-10',
//     status: 'In Progress',
//     submitter: 'Priya Gautam',
//     url: 'www.project.com',
//     assigned: 'Aakash',
//     priority: 'High',
//     due: '2025-07-20',
//     amount: '₹5,00,000'
//   },
//   {
//     job: 'Update kit',
//     date: '2025-07-01',
//     status: 'Pending',
//     submitter: 'Rahul Sharma',
//     url: 'www.updatekit.com',
//     assigned: 'Sneha',
//     priority: 'Medium',
//     due: '2025-07-15',
//     amount: '₹2,50,000'
//   }
// ];

// // export const columns: Column<typeof data[0]>[] = [
// //   { Header: 'Job Request', accessor: 'job' },
// //   { Header: 'Date', accessor: 'date' },
// //   { Header: 'Status', accessor: 'status' },
// //   { Header: 'Submitter', accessor: 'submitter' },
// //   { Header: 'URL', accessor: 'url' },
// //   { Header: 'Assigned', accessor: 'assigned' },
// //   { Header: 'Priority', accessor: 'priority' },
// //   { Header: 'Due Date', accessor: 'due' },
// //   { Header: 'Est. Value', accessor: 'amount' },
// // ];


// export const columns: any[] = [
//     { Header: 'Job Request', accessor: 'job' },
//     { Header: 'Date', accessor: 'date' },
//     { Header: 'Status', accessor: 'status' },
//     { Header: 'Submitter', accessor: 'submitter' },
//     { Header: 'URL', accessor: 'url' },
//     { Header: 'Assigned', accessor: 'assigned' },
//     { Header: 'Priority', accessor: 'priority' },
//     { Header: 'Due Date', accessor: 'due' },
//     { Header: 'Est. Value', accessor: 'amount' },
//   ];
  



export type RowData = {
    job: string;
    date: string;
    status: string;
    submitter: string;
    url: string;
    assigned: string;
    priority: string;
    due: string;
    amount: string;
  };
  
  export const data: RowData[] = [
    {
      job: 'Launch campaign',
      date: '2025-07-10',
      status: 'In Progress',
      submitter: 'Priya Gautam',
      url: 'www.project.com',
      assigned: 'Aakash',
      priority: 'High',
      due: '2025-07-20',
      amount: '₹5,00,000',
    },
    {
      job: 'Update kit',
      date: '2025-07-01',
      status: 'Pending',
      submitter: 'Rahul Sharma',
      url: 'www.updatekit.com',
      assigned: 'Sneha',
      priority: 'Medium',
      due: '2025-07-15',
      amount: '₹2,50,000',
    },
  ];
  
  export const columns = [
    { Header: 'Job Request', accessor: 'job' },
    { Header: 'Date', accessor: 'date' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Submitter', accessor: 'submitter' },
    { Header: 'URL', accessor: 'url' },
    { Header: 'Assigned', accessor: 'assigned' },
    { Header: 'Priority', accessor: 'priority' },
    { Header: 'Due Date', accessor: 'due' },
    { Header: 'Est. Value', accessor: 'amount' },
  ];
  