import React from "react";
import { withTranslator } from "../../../hoc/withTranslator";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';

import "./PackagesTable.scss";

function createPackages(name, premium, optimal, light) {
    return { name, premium, optimal, light };
}

function PackagesTable ( { translate } ) {

    const rows = [
        createPackages('HD quality', <DoneIcon/>, <DoneIcon/>, <DoneIcon/>),
        createPackages('Professional translation', <DoneIcon/>, <DoneIcon/>, <DoneIcon/>),
        createPackages('Without advertising', <DoneIcon/>, <DoneIcon/>, ),
        createPackages('Paid channels', <DoneIcon/>,),
        createPackages('Film and series premieres', <DoneIcon/>,),
        createPackages('PRICE (per month)', '25$', '15$', '10$'),
      ];


    return (
        <>
            <div className="packages-table">
                <TableContainer component={Paper}>
                    <Table 
                        // sx={{ minWidth: 650 }} aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">{translate("packages.table.premium")}</TableCell>
                                <TableCell align="center">{translate("packages.table.optimal")}</TableCell>
                                <TableCell align="center">{translate("packages.table.light")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    // sx={{ '&:first-child td, &:first-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="center">{row.premium}</TableCell>
                                    <TableCell align="center">{row.optimal}</TableCell>
                                    <TableCell align="center">{row.light}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default withTranslator(PackagesTable);