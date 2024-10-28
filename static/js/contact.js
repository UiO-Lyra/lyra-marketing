
export class Contact {
	static id = 0;
	static contactsDiv = document.getElementById('contacts');

	constructor(image="../images/lyra_logo_cropped.png", name="John Doe", role="CEO", 
							email="abc@gmail.com") {
		this.image = image;
	  this.name = name;
		this.role = role;
		this.email = email;
		this.id = Contact.id;
		Contact.id++;
	}

	makeIdentifierDiv() {
		const identifierDiv = document.createElement("div");
		identifierDiv.className = "profileIdentifiers";

		const img = document.createElement("img");
		img.className = "profileImage";
		img.src = this.image;

		const name = document.createElement("h2");
		name.className = "profileName";
		name.textContent = this.name;

		const role = document.createElement("h3");
		role.className = "profileRole";
		role.textContent = this.role;

		identifierDiv.appendChild(img);
		identifierDiv.appendChild(name);
		identifierDiv.appendChild(role);
		return identifierDiv;
	}

	makeCard() {
		const card = document.createElement("div");
		card.className = "profileCard";
		card.id = "card" + this.id;

		const identifierDiv = this.makeIdentifierDiv();

		//const txt = document.createElement("p");
		//txt.className = "profileTxt";
		//txt.textContent = this.txt;

		const email = document.createElement("p");
		email.className = "profileEmail";
		email.textContent = "@: " + this.email;

		//const tlf = document.createElement("p");
		//tlf.className = "profileTlf";
		//tlf.textContent = "tlf: " + this.tlf;

		card.appendChild(identifierDiv);
		//card.appendChild(txt);
		card.appendChild(email);
		//card.appendChild(tlf);
		return card;
	}

	addCard() {
		let card = c.makeCard();
		Contact.contactsDiv.appendChild(card);
	}
}
