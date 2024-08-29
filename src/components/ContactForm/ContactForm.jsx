import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    const newContact = { name: data.name, number: data.number, id: nanoid() };
    dispatch(addContacts(newContact));
    actions.resetForm();
    console.log(data);
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <p className={css.text}>Name</p>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label}>
          <p className={css.text}>Number</p>
          <Field className={css.input} type="number" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
