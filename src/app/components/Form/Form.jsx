import React from 'react';
import './Form.scss';
import Button from "@/app/components/Button/Button";

const Form = () => (
   <form>
     <div>
       <label style={{ display: "none" }}>Nom</label>
       <input type="text" name="name" placeholder="NOM" required />
     </div>
     <div>
       <label style={{ display: "none" }}>Email</label>
       <input type="email" name="email" placeholder="ADRESSE MAIL" required />
     </div>
     <div>
       <label style={{ display: "none" }}>Téléphone</label>
       <input type="tel" name="phone" placeholder="TELEPHONE" required />
     </div>
     <div>
       <label style={{ display: "none" }}>Message</label>
       <textarea name="message" placeholder="MESSAGE" required />
     </div>
     <Button buttonText="Envoyer"/>
   </form>
);

export default Form;