"use strict";

 module.exports = class PetAmbulance101 {
    #firstName = '/';
    #lastName = '/';
    #email = '/';
    #telephone = '/';
    #petKind = '/';
    #petBreed = '/';
    #petName = '/';
    #status = '/';
    #note = '/';

    constructor(firstName, lastName, email, telephone, petKind, petBreed, petName, status,) {
        if((firstName !== '') && (firstName !== null) && (firstName !== undefined)) {
            this.#firstName = firstName;
        }

        if((lastName !== '') && (lastName !== null) && (lastName !== undefined)) {
            this.#lastName = lastName;
        }

        if((email !== '') && (email !== null) && (email !== undefined)) {
            this.#email = email;
        }

        if((telephone !== '') && (telephone !== null) && (telephone !== undefined)) {
            this.#telephone = telephone;
        }

        if((petKind !== '') && (petKind !== null) && (petKind !== undefined)) {
            this.#petKind = petKind;
        }

        if((petBreed !== '') && (petBreed !== null) && (petBreed !== undefined)) {
            this.#petBreed = petBreed;
        }

        if((petName !== '') && (petName !== null) && (petName !== undefined)) {
            this.#petName = petName;
        }

        if((status !== '') && (status !== null) && (status !== undefined)) {
            this.#status = status;
        }


    }
    getFullName() {
        return `${this.#firstName} ${this.#lastName}`
    }
    getTelAndMail() {
        return `Tel: ${this.#telephone} , Email: ${this.#email}`
    }
    getPetName() {
        return `${this.#petName}`;
    }
    getPetKind() {
        return `${this.#petKind}`
    }
    getPetBreed() {
        return `${this.#petBreed}`;
    }
    getPetStatus() {
        return `${this.#status}`;
    }
}

