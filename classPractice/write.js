"use strict";

module.exports = class Write {
    static ispisPodataka(CustomersBook){
        CustomersBook.forEach(function (ime, index, niz) {
            console.log(`ID: ${index}`)

            console.log(`Vlasnik: ${ime.getFullName()}`)
            console.log(`Kontakt: ${ime.getTelAndMail()}`);
            console.log(`Ljubimac: ${ime.getPetKind()}`)
            console.log(`Rasa: ${ime.getPetBreed()}`)
            console.log(`Ime: ${ime.getPetName()}`);
            console.log(`Status: ${ime.getPetStatus()}`);

            console.log('=========================')
        })
    }
}