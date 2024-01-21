import React from "react";
import { Button, Card, Col, Row } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import { useContext, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BasketItemContext } from "../../context/BasketItemContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Menu = () => {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(BasketItemContext);
  const [open,setOpen] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:3000/menu");
      setProducts(response.data);
    };
    data();
  }, []);
  console.log("products", products);
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <section>
        <div className="container">
          <div>
            <div>
              <span>OUR MENU</span>
              <h1>Discover Our Exclusive Menu</h1>
            </div>
            <div>
              <Row gutter={16}>
                {products.map((product, index) => {
                  return (
                    <>
                      <Col key={index} xl={12}>
                        <Card bordered={false}>
                          <span
                            onClick={() => {
                              navigate(`/detail/${product._id}`);
                            }}
                          >
                            Detail:{product.name}
                          </span>
                          <div>
                            <div>
                              Ingridients: {product.des}
                              <span
                                style={{
                                  marginLeft: "20px",
                                }}
                              >
                                <b>{product.price}$</b>
                                <Button
                                  onClick={() => {
                                    addBasket(product);
                                  }}
                                >
                                  Card
                                </Button>
                                <Button>
                                  {/* {Wishlist.find(item=>item._id===product._id) ? <FavoriteIcon/> : <FavoriteBorderIcon />} */}
                                </Button>
                              </span>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
