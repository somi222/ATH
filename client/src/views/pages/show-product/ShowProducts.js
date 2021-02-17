import React, {useState} from 'react';
import '.././App.css';
import Axios from 'axios';
import {Card, CardBody, Table} from 'reactstrap';
// import {Table, responsive} from 'react-bootstrap';

export default function ShowProducts() {

    const [productList, setProductList] = useState([]);

    const getProducts = () => {
        Axios.get('http://localhost:3002/products').then((response)=>{
          // setSucc(true);
          console.log(response);
          setProductList(response.data);
        });
      };

    return (
        <div>
        <div className="btn expandbtn" onClick={getProducts}>Load Products</div>
            <Card>
                <CardBody>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>GSM</th>
                                <th>Price</th>
                                <th>Color</th>
                                <th>Width</th>
                                <th>Length</th>
                                <th>Gusset</th>
                                <th>Top-Fold</th>
                                <th>Handle</th>
                                <th>Piping</th>
                                <th>Wastage</th>
                                <th>Wastage Recovery</th>
                                <th>CMT</th>
                                <th>Printing</th>
                                <th>Packing</th>
                                <th>Over Heads</th>
                                <th>Profit</th>
                                <th>Sale Tax</th>
                                <th>Income Tax</th>
                                <th>Commission</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {productList.map((val, key) => {
                                return<tr>
                                <td>{val.id}</td>
                                <td>{val.pro_title}</td>
                                <td>{val.gsm}</td>
                                <td>{val.price}</td>
                                <td>{val.color}</td>
                                <td>{val.width}</td>
                                <td>{val.lenght}</td>
                                <td>{val.gusset}</td>
                                <td>{val.topfold}</td>
                                <td>{val.handle}</td>
                                <td>{val.piping}</td>
                                <td>{val.wastage}</td>
                                <td>{val.wastagerecovery}</td>
                                <td>{val.cmt}</td>
                                <td>{val.printing}</td>
                                <td>{val.packing}</td>
                                <td>{val.overheads}</td>
                                <td>{val.profit}</td>
                                <td>{val.saletax}</td>
                                <td>{val.incometax}</td>
                                <td>{val.commission}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    )
}
