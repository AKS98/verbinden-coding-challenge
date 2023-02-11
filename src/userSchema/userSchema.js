import * as yup from "yup";

export const userSchema= yup.object().shape({
    company: yup.string().required("Required"),
      username: yup.string().required("Required"),
      email: yup.string().email("Please Enter Valid Email").required("Required"),
      firstname: yup.string().required("Required"),
      lastname: yup.string().required("Required"),
      address: yup.string().required("Required"),
      city: yup.string().required("Required"),
      country: yup.string().required("Required"),
      postalcode: yup.number().positive().integer().required("Required"),
      aboutme: yup.string().required("Required")
})