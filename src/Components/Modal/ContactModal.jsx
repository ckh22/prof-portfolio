import React, {useState} from 'react'
import {
    Modal,
    Button,
    Form,

    Divider,

} from 'semantic-ui-react'

const ContactModal = ({open, setOpen}) => {
    const skeleton = {name: '', email: '', message: '', role: '', company: '', position: ''}
    const [contact, setContact] = useState(skeleton)

    const handleChange = (e) => {
        let value = e.target.value;
        setContact({...contact, [e.target.name]: value})
        console.log(contact)
    }

    const handleSubmit = () => {
        console.log(contact)
        setOpen(!open)
        setContact(skeleton)
    }



    return (
        <Modal onClose={
                () => setOpen(false)
            }
            onOpen={
                () => setOpen(true)
            }
            trigger={
                <Button>Contact</Button>
            }
            open={open}
            closeIcon
            dimmer='blurring'
            size='large'>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content>
                <Form unstackable error onSubmit={(e) => handleSubmit()} netlify data-netlify="true" name='contacts'>
                <Form.Group widths={2} >
                        <Form.Input name='name' label='Name' placeholder='Your name...' required onChange={(e) => handleChange(e)} value={contact.name}/>
                        <Form.Input name='email' label='Email' placeholder='Your email...' required onChange={(e) => handleChange(e)} value={contact.email} />
                    </Form.Group>
                    <Form.Group widths={2} >
                        <Form.Input name='company' label='Company' placeholder='Your company...' onChange={(e) => handleChange(e)} value={contact.company}/>
                        <Form.Input name='position' label='Position' placeholder='Your position...' onChange={(e) => handleChange(e)} value={contact.position} />
                    </Form.Group>
                    <Divider />
                    <Form.TextArea name='message' rows={5} placeholder='Your message...' value={contact.message !== null ? contact.message : ''} onChange={(e) => handleChange(e)} />
                    <Form.Button type='submit' content='Submit'/>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default ContactModal
