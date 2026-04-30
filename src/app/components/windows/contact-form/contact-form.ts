import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import emailjs from "@emailjs/browser";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-contact-form",
  imports: [FormsModule],
  templateUrl: "./contact-form.html",
  styleUrl: "./contact-form.css",
})
export class ContactForm {
  contact = {
    name: "",
    email: "",
    message: "",
  };

  onSubmit() {
    let isLoading: boolean = false;

    emailjs
      .send(
        environment.emails_serviceId,
        environment.emails_templateId,
        this.contact,
        environment.emails_publicKey,
      )
      .then(() => {
        alert(`Thank you ${this.contact.name}, your message was sent`);
        this.contact = { name: "", email: "", message: "" };
      })
      .catch((err) => {
        alert("Error during send");
        console.log(err);
      });
  }
}
// Loading function
