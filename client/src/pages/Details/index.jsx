import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/menu/${id}`);
        setData(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
console.log("data",data)
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-12">
          <div className="text-center">
            <span>{data.name} </span>
            <span>{data.des}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
