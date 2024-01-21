// import React from "react";
// import { useFormik } from "formik";
// import "bootstrap/dist/css/bootstrap.css";
// import * as Yup from "yup";
// import "./add.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button } from "@mui/material";
// import {Helmet} from "react-helmet"
 
// const Add = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   console.log("search", search);
//   useEffect(() => {
//     const data = async () => {
//       const response = await axios.get("http://localhost:3000/menu");
//       const allProducts = response.data
//       // setProducts(response.data);
//       const filteredProducts = allProducts.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase().trim()))
//       setProducts(filteredProducts)
//     };
//     data();
//   }, [search]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       des: "",
//       price: 0,
//     },

//     validationSchema: Yup.object({
//       name: Yup.string()
//         .max(15, "Must be 15 characters or less")
//         .required("Required"),
//       des: Yup.string()
//         .max(30, "Must be 30 characters or less")
//         .required("Required"),
//     }),
//     onSubmit: async (values) => {
//       console.log("values", values);
//       formik.resetForm("");
//       const createProduct = {
//         name: values.name,
//         des: values.des,
//         price: values.price
//       };
//       const res = await axios.post("http://localhost:3000/menu", createProduct);
//       return res;
//     },
//   });
//   const deleteItem = async(item)=>{
//     console.log("item",item)
//     axios.delete(`http://localhost:3000/menu/${item._id}`)
//     setProducts(products.filter((x)=>x._id !== item._id))
// }
//   return (
//     <>
//     <Helmet>
//       <title> Add Page</title>
//     </Helmet>
//       <div className="text-center">
//         <form onSubmit={formik.handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             className="input"
//             id="name"
//             name="name"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//           />
//           {formik.touched.des && formik.errors.name ? (
//             <div className="req">{formik.errors.name}</div>
//           ) : null}
//           <br />

//           <label htmlFor="des">Desription:</label>
//           <input
//             className="input"
//             id="des"
//             name="des"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.des}
//           />
//           {formik.touched.des && formik.errors.des ? (
//             <div className="req">{formik.errors.des}</div>
//           ) : null}
//           <br />

//           <label htmlFor="price">Price:</label>
//           <input
//             className="input"
//             id="price"
//             name="price"
//             type="number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.price}
//           />
//           {formik.touched.price && formik.errors.price ? (
//             <div className="req">{formik.errors.price}</div>
//           ) : null}
//           <br />
//           <button className="btn" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>

//       <div>
//         <input type="text" onChange={(e)=>{
//           setSearch(e.target.value)
//         }} />
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell align="left">Description</TableCell>
//                 <TableCell align="left">Price</TableCell>
//                 <TableCell align="left">Delete</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products.map((item, idx) => (
//                 <TableRow
//                   key={idx}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     {item.name}
//                   </TableCell>
//                   <TableCell align="left">{item.des}</TableCell>
//                   <TableCell align="left">{item.price}</TableCell>
//                   <TableCell align="left">
//                     <Button
//                       onClick={() => {
//                         deleteItem(item);
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </>
//   );
// };
// export default Add;


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Add = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      des: '',
      price: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
       des: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
     
    }),
    onSubmit:async(values)=> {
      console.log("values",values)
      const createProduct={
        values:name=name,
        values:des=des,
        values:price=price
      }
      let
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};
export default App