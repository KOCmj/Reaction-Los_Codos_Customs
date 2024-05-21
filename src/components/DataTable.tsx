import { useState } from 'react';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hideable: true },
    { field: 'name', headerName: 'Cars', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'make', headerName: 'Make', flex: 2 }
];

function DataTable() {
    const [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteData = () => {
      for (let i = 0; i < selectionModel.length; i++){
        if (i in selectionModel){
          server_calls.delete(selectionModel[i]);
          getData();
          console.log(`Selection Model: ${selectionModel}`);
          setTimeout(() => { window.location.reload() }, 500);
        }
      }
    }


    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className='flex flex-row'>
                <div>
                    <button
                        className='border border-black m-3 p-3 bg-red-600 rounded hover:bg-red-800 hover:text-slate-300'
                        onClick={() => handleOpen()}
                    >
                        Create A Car
                    </button>
                    <button onClick={handleOpen} className='border px-8 border-black m-3 p-3 bg-red-600 rounded hover:bg-red-800 hover:text-slate-300'>Update</button>
                    <button onClick={deleteData} className='border px-8 border-black m-3 p-3 bg-red-600 rounded hover:bg-red-800 hover:text-slate-300'>Delete</button>
                </div>
            </div>
            <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"} style={{ height: 400, width: '100%' }}>
                <h2 className="p-3 bg-red-700 my-2 rounded">Los Cars</h2>
                <DataGrid
                    rows={contactData}
                    columns={columns}
                    rowCount={5}
                    checkboxSelection={true}
                    onRowSelectionModelChange={(item: any) => { setSelectionModel(item) }}
                />
            </div>
        </>
    )
}

export default DataTable;
