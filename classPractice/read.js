"use strict";

const fs = require("fs");
const customer = require("./class");
module.exports = class Read {
   static readerVetStanica(HappyVet) {

        const data = fs.readFileSync(HappyVet);
        const customers = JSON.parse(data);

        let CustomersBook = [];

        customers.forEach(function (cust, index, niz) {
            const ime = new customer (
                cust.firstName, cust.lastName,
                cust.email,     cust.telephone,
                cust.petKind,   cust.petBreed,
                cust.petName,   cust.status,
            )
            CustomersBook.push(ime);
        })
        return CustomersBook;
    }
}