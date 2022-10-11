import api from "utils/api";



const createContact = (data) => {
  return api.post("/contact", data);
};



const ContactService = {
  createContact
};

export default ContactService;
