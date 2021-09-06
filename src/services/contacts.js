import Axios from 'axios'

const url = "https://ingrwf08-1d60c.firebaseio.com/contacts.json"

export default  {
    addContact(newContact) {
        return Axios({
            url,
            method: "post",
            data: newContact
        })
        .then(response => response.data)
    },
    listContacts() {
        return Axios({
            url,
            method: "get"
        })
        .then(response => response.data)
    }
}