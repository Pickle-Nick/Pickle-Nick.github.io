// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//create a return statement that returns an object with contacts

return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
};
//output the arguements in an object with contacts
} 


function makeContactList(id, nameFirst, nameLast) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //create an array to hold to contents of contacts
    var contacts = [];
    
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    
        
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        
        //push the contact to an object
        addContact: function(contact){
            return contacts.push(contact);
        },
        // loop through the string to add firstName and lastName to contacts
        findContact: function(fullName) {
            for (let i = 0; i < contacts.length; i++){
                if (fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
                    return contacts[i];
                }
            }
            },
        //loop through the contacts until desire contact is reached        
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++){
                //create if statement that determines if the desired contact is in the loop
                if (contacts[i] === contact) {
                    //use splice to remove contact
                    return contacts.splice(i, 1);
                }
            }
        },
        //create a function to print all contacts names seperated by a new line
        printAllContactNames: function(contact) {
            //create an empty string variable
             let contactName = "";
             //loop through the contacts
             for (let i = 0; i < contacts.length; i++) {
                 contactName += contacts[i].nameFirst + " " + contacts[i].nameLast;
                 //return contacts name sliced
                 return contactName.slice(1, contactName.length-1);
             } 
        }
            };  
    }




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
