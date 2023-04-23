"use strict";

const Reader = require('./read');
const Writer = require('./write'); 
const CustomersBook = Reader.readerVetStanica('./customer.json')

Writer.ispisPodataka(CustomersBook)