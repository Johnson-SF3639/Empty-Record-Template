ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data.slice(0, 5),
    emptyRecordTemplate: '#emptytemplate',
    allowPaging: true,
    allowFiltering: true,
    // enableVirtualization: true, 
    // enableColumnVirtualization: true,
    // height: 200,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    // frozenColumns: 1,
    // frozenRows: 2,
    columns: [
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', width: 250, textAlign: 'Right' },
        { field: 'CustomerName', headerText: 'Customer Name', width: 250 },
        { field: 'Freight', width: 250, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 250 },
    ],
});
grid.appendTo('#Grid');