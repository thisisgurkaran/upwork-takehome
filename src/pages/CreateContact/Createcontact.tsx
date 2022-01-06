import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { CustomInput, Header, PageHeading } from "../../components";
const fields = [
  {
    title: "Full Name",
    required: true,
    placeHolder: "Ex. John doe",
    formField: "fullName",
    type: "text",
  },
  {
    title: "Email",
    required: true,
    placeHolder: "Ex. johndoe@gmail.com",
    formField: "email",
    type: "text",
  },
  {
    title: "Phone (Optional)",
    required: false,
    placeHolder: "Ex. +1367388893",
    formField: "phone",
    type: "text",
  },
  {
    title: "Near Account ID (optional)",
    required: false,
    placeHolder: "Ex. johndoe.near",
    formField: "accountId",
    type: "text",
  },
];
const CreateContact = () => {
  const validationSchema = yup.object({
    fullName: yup.string().required("Please enter your Name"),
    email: yup.string().email().required("Please enter your E-mail"),
    phone: yup
      .string()
      .matches(new RegExp("[0-9]{7}"), "Please provide a valid Phone Number")
      .length(10, "Please provide a valid Phone Number"),
    accountId: yup
      .string()
      .matches(/^[a-z0-9]+$/i, "Provide a valid Accound ID"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    accountId: "",
  };
  const renderError = (message: string) => <p className="">{message}</p>;
  const onSubmit = (values: typeof initialValues) => {
    //Handle the form values -> make post request
  };
  return (
    <div>
      <Header />
      <PageHeading />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          console.log(values);
        }}>
        {(props) => (
          <Form>
            {fields.map((field, i) => (
              <div className="flex place-content-center" key={i}>
                <CustomInput
                  className="bg-grey-light border-grey-dark border-2 px-20 w-310 rounded-lg h-45 justify-center mx-auto"
                  type={field.type}
                  name={field.formField}
                  title={field.title}
                  placeholder={field.placeHolder}
                  renderError={renderError}></CustomInput>
              </div>
            ))}

            <button
              className="bg-blue px-10 w-115 text-white h-40 mt-30 rounded-lg mx-auto flex m-20 justify-center"
              type="submit">
              <span className="pt-5 text-lg">{"Save  >"}</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CreateContact;
