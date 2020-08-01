import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext'
import AlertContext from '../../context/alert/alertContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    const {addContact, updateContact , current, clearCurrent} = contactContext;
            const alertContext = useContext(AlertContext);
            const { setAlert } = alertContext;


    useEffect(() =>{
        if(current !== null){
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
    
            });
            

        }
    },[contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'

    });
    const {name, email,  type, phone} = contact;
    
    const onChange = (e)=>{
        setContact({...contact, [e.target.name]: e.target.value})
    }

    
    const onSubmit = e =>{
        e.preventDefault();

        // eslint-disable-next-line no-useless-escape
        if(!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone)){
            setAlert('Please include a valid phone number', 'danger')

        // eslint-disable-next-line no-useless-escape
        } else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setAlert('Please include a valid email', 'danger')

        } else {
        

        if(current === null) {
            addContact(contact);
        } else {
            updateContact(contact);


        }
        clearAll();

        
    }}
      
    const clearAll = () =>{
        clearCurrent();

    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} />
            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} />
            <input type='text' placeholder='Phone' name='phone' value={phone} onChange={onChange} />
            <h5>Contact Type</h5>
            <input type='radio' name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> Personal {' '}
            <input type='radio' name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> Professional
            <div>
                <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
                </div>}




        </form>
    )
}

export default ContactForm;