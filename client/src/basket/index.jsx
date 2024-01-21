import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BasketItemContext } from "../context/BasketItemContext";
import { Button } from "@mui/material";

const Basket = () => {
  const { basketItem,setBasketItem,handleIncrease,handleDecrease } = useContext(BasketItemContext);
    const deleteItem = async(item)=>{
        console.log("item",item)
        setBasketItem(basketItem.filter((x)=>x._id !== item._id))
    }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Increase</TableCell>
              <TableCell align="left">Decrease</TableCell>
              <TableCell align="left">Total price</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basketItem.map((item, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="left">{item.des}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                <TableCell align="left">{item.quantity}</TableCell>
                <TableCell align="left">
                  <Button onClick={()=>{
                    handleIncrease(item)
                  }}>+</Button>
                </TableCell>
                <TableCell align="left">
                  <Button onClick={()=>{
                    handleDecrease(item)
                  }}> -</Button>
                </TableCell>
                <TableCell align="left">
                    {item.quantity*item.price}
                </TableCell>
                <TableCell align="left">
                  <Button onClick={()=>{
                    deleteItem(item)
                  }}>
                    Delete 
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Basket;
