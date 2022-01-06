import axios from "axios";

const CreateContact = {
  createContactFields() {
    return axios.get(`/organization/search`);
  },
};

export default CreateContact;
