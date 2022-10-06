// import useCustomForm from "components/UI/custom-form/CustomForm";
// import React from "react";
// import useSignUpForm from "./UseSignUpForm";


// const Contact = () => {
//   const login = (data) => {
//     console.log(data);
//   };

//   const validate = (values) => {
//     let errors = {};
//     if (!values.email) {
//       errors.email = "Email address is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = "Email address is invalid";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 8) {
//       errors.password = "Password must be 8 or more characters";
//     }
//     return errors;
//   };
  

//   const { formInputs, errors, handleInputChange, handleFormSubmit } =
//     useCustomForm(login, validate);


//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div>
//         <label className="label">Email Address</label>
//         <div className="control">
//           <input
//             className={`input ${errors.email && "is-danger"}`}
//             type="text"
//             name="email"
//             onChange={handleInputChange}
//             value={formInputs.email || ""}
//           />
//           {errors.email && <p className="help is-danger">{errors.email}</p>}
//         </div>

//         <label>First Name</label>
//         <input
//           type="text"
//           name="firstName"
//           onChange={handleInputChange}
//           value={formInputs.firstName}
//         />

//         <label>Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           onChange={handleInputChange}
//           value={formInputs.lastName}
//         />
//       </div>
//       <label className="label">Password</label>
//       <div className="control">
//         <input
//           className={`input ${errors.password && "is-danger"}`}
//           type="password"
//           name="password"
//           onChange={handleInputChange}
//           value={formInputs.password || ""}
//         />
//       </div>
//       {errors.password && <p className="help is-danger">{errors.password}</p>}

//       <button type="submit">Sign up</button>
//     </form>
//   );
// };

// export default Contact;
