import React from 'react';
import './Form.scss';
import Button from "@/app/components/Button/Button";

const InputField = ({type, name, placeholder}) => (
   <div>
     <label style={{display: "none"}}>{name}</label>
     <input type={type} name={name.toLowerCase()} placeholder={placeholder} required/>
   </div>
);

const TextArea = ({name, placeholder}) => (
   <div>
     <label style={{display: "none"}}>{name}</label>
     <textarea name={name.toLowerCase()} placeholder={placeholder} required/>
   </div>
);

const Form = () => (
   <form>
     <InputField type="text" name="Nom" placeholder="NOM"/>
     <InputField type="email" name="Email" placeholder="ADRESSE MAIL"/>
     <InputField type="tel" name="Téléphone" placeholder="TELEPHONE"/>
     <TextArea name="Message" placeholder="MESSAGE"/>
     <Button buttonText="Envoyer"/>
   </form>
);

export default Form;