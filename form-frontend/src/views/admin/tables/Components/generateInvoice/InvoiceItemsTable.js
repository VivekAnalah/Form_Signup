import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';
import InvoiceTableFooter from './InvoiceTableFooter';

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        // borderWidth: 1,
        // borderColor: '#3778C2',
    },
});

const InvoiceItemsTable = ({ invoice }) => (
    <View style={styles.tableContainer}>
        {/* <InvoiceTableHeader /> */}
        <InvoiceTableRow items={invoice.items} />
        <InvoiceTableFooter items={invoice.items} />
    </View>
);

export default InvoiceItemsTable;