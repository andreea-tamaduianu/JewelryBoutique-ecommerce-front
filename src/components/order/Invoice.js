import React from "react";
import { Document, Page, Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";
import logo from '../../images/logo2.png'
import moment from 'moment-business-days'


const Invoice = ({ order }) => {
  // var formatter = new Intl.DateTimeFormat("ro-RO");
  // console.log(formatter)
  const  dataComanda=new Date(order.paymentIntent.created * 1000)
  // dataExpediere.setDate(dataExpediere.getDate()+1)
 
  //console.log(dataComanda.toLocaleString('ro-RO'))
  moment.updateLocale('ro-RO');

  //console.log(moment(dataComanda.toLocaleString("ro-RO"),'DD.MM.YYYY').nextBusinessDay()._d)
  const dataExpediere= new Date(moment(dataComanda.toLocaleString("ro-RO"),'DD.MM.YYYY, HH:mm:ss').nextBusinessDay()._d)
  console.log('expediere: ', dataExpediere.toLocaleString('ro-RO'))
  return ( 
  <Document>
    <Page style={styles.body}>
    <View style={styles.image}>
        <Image src={logo}/>
      </View>
      
      <Text style={styles.title}>Factura</Text>
      <Text style={styles.author}>Jewelry Boutique</Text>
      <Text style={styles.subtitle}>Rezumat factura</Text>

      <Table>
        <TableHeader>
          <TableCell>Articol</TableCell>
          <TableCell>Dimensiune</TableCell>
          <TableCell>Pret unitar in RON</TableCell>
          <TableCell>Pret total (TVA inclus) in RON</TableCell>
          <TableCell>TVA</TableCell>
          <TableCell>Cantitate</TableCell>
         
        </TableHeader>
      </Table>

      <Table data={order.products}>
        <TableBody>
          <DataTableCell getContent={(x) => x.product.title} />
          <DataTableCell getContent={(x) => x.size} />
          <DataTableCell getContent={(x) => `${(Math.round(x.product.price*0.81 * 100) / 100).toFixed(2)}`} />
          <DataTableCell getContent={(x) => `${x.product.price}`} />
          <DataTableCell getContent={(x) => `19%`}/>
          <DataTableCell getContent={(x) => x.count} />
       
          
        </TableBody>
      </Table>

      <Text style={styles.text}>
        <Text>
          Data comenzii: {"               "}
          {dataComanda.toLocaleString("ro-RO")}
        </Text>
        {"\n"}
        <Text>
          Data expedierii: {"               "}
          {dataExpediere.toLocaleString("ro-RO")}
        </Text>
        {"\n"}
        <Text>
          Numar factura: {"         "}
          {order.paymentIntent.id}
        </Text>
        {"\n"}
        <Text>
          Total factura: {"      "} 
          {order.paymentIntent.amount} RON
        </Text>
      </Text>

      <Text style={styles.footer}> ~ Multumim ca ati cumparat de la noi! Va mai asteptam! ~ </Text>
      <Text style={styles.header} fixed>
        ~ {new Date().toLocaleString('ro-RO')} ~
      </Text>
    </Page>
  </Document>
  )};

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    
    width: '50%',
    display: 'block',
    marginLeft:'auto',
    marginRight: 'auto',
   
   
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    padding: "100px",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Invoice;

