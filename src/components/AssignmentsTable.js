import { useState } from 'react';
import TablePaginationActions from './TablePaginationActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

function AssignmentsTable({ evaluations, getAssignments, getAverageRatingsForAssignment }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const assignments = getAssignments(evaluations);
    const rows = assignments.map(assignment => getAverageRatingsForAssignment(assignment));
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Assignment</TableCell>
                        <TableCell align="right">Average difficulty</TableCell>
                        <TableCell align="right">Average enjoyability</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows).map(row => (
                            <TableRow key={row.assignment}>
                                <TableCell component="th" scope="row">
                                    {row.assignment}
                                </TableCell>
                                <TableCell align="right">
                                    {row.averageDifficulty}
                                </TableCell>
                                <TableCell align="right">
                                    {row.averageEnjoyability}
                                </TableCell>
                            </TableRow>
                        ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default AssignmentsTable;