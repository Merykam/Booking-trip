import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  PDFViewer,
} from "@react-pdf/renderer";

import { useEffect } from "react";

const TicketPdf = ({ Ticket }) => {
  const styles = StyleSheet.create({
    pdf: {
      display: "flex",

      alignItems: "center",
    },
    page: {
      flexDirection: "column",
      backgroundColor: "#f0f0f0",
      padding: 20,
    },
    header: {
      fontWeight: "bold",
      fontSize: 32,
      marginBottom: 20,
      textAlign: "center",
    },
    section: {
      marginBottom: 10,
    },
    sectionTitle: {
      fontWeight: "bold",
      marginBottom: 5,
      fontSize: 16,
    },
    sectionContent: {
      fontSize: 14,
    },
    totalAmount: {
      fontSize: 18,
      textAlign: "right",
      marginTop: 20,
      fontWeight: "bold",
    },
    ticketContainer: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  });

  useEffect(() => {
    console.log(Ticket[0]);
  }, [Ticket]);

  return (
    <PDFViewer width={"100%"} style={styles.pdf} height={400}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.header}>Booking Ticket</Text>
          <View style={styles.ticketContainer}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Booking ID:</Text>
              <Text style={styles.sectionContent}>{Ticket[0]?._id}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Full Name:</Text>
              <Text style={styles.sectionContent}>
                {Ticket[0]?.user_id.name}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Destination name:</Text>
              <Text style={styles.sectionContent}>
                {Ticket[0]?.package_id.destination?.name}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Depart date:</Text>
              <Text style={styles.sectionContent}>
                {new Date(
                  Ticket[0]?.package_id.depart_date
                ).toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Reservation Date:</Text>
              <Text style={styles.sectionContent}>
                {new Date(Ticket[0]?.reservation_date).toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Seats reserved:</Text>
              <Text style={styles.sectionContent}>
                {Ticket[0]?.number_of_seats_reserved}
              </Text>
            </View>
            <View style={styles.totalAmount}>
              <Text>Total: ${Ticket[0]?.total_price}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default TicketPdf;
