/*import { Contact } from "./contatcs.js";

function fetchContactsJSON() {
	const contacts = '../json/contacts.json';
	fetch(contacts, {
	mode: "cors"})
		.then((res) => {
			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}
			return res.json();
		})
		.then((data) => {
			console.log(data)
		})
		.catch((error) =>
			console.error("Unable to fetch data:", error));
}
fetchContactsJSON();

let c = new Contact();
c.addCard();
c.addCard();
c.addCard();
c.addCard();
c.addCard();
*/
