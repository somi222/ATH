import React, {useState} from 'react';
import '.././App.css';
import Axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import {Collapse,Accordion,Button} from 'react-bootstrap';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Wcut() {

    /* start image preview */
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
  
    const handleImageChange = (e) => {
  
      setError(false);
  
      const selected = e.target.files[0];
      const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"];
  
      if(selected && ALLOWED_TYPES.includes(selected.type)) {
        let reader = new  FileReader();
        reader.onloadend = () => {
          setImgPreview(reader.result);
        }
        reader.readAsDataURL(selected);
      } else {
        setError(true);
      }
    };
    /* end image preview */

  /* start collapse */
    const [open,setOpen]=useState(false);
  /* end collapse */

  

  const [title, setTitle] = useState("");
  const [gsm, setGsm] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [width, setWidth] = useState("");
  const [lenght, setLenght] = useState("");
  const [gusset, setGusset] = useState("");
//   const [topfold, setTopfold] = useState("");
//   const [handle, setHandle] = useState("");
//   const [piping, setPiping] = useState("");
  // const [fabricprice, setFabricprice] = useState("");
  const [wastage, setWastage] = useState("");
  const [wastagerecovery, setWastagerecovery] = useState("");
  const [cmt, setCmt] = useState("");
  const [printing, setPrinting] = useState("");
  const [packing, setPacking] = useState("");
  const [overheads, setOverheads] = useState("");
  const [profit, setProfit] = useState("");
  const [saletax, setSaletax] = useState("");
  const [incometax, setIncometax] = useState("");
  const [commission, setCommission] = useState("");


    function SubmitButton(){
      if (title && imgPreview && gsm && price && color && width && lenght && gusset && wastage
        && wastagerecovery && cmt && printing && packing && overheads && profit && saletax && incometax && commission){
        
          return <button className="btn addpbtn btn-block" onClick={addProduct}>add new product</button>
      } else {
        return <button className="btn addpbtn btn-block" disabled>add new product</button>
      };
    };

  const addProduct = () => {
    Axios.post('http://localhost:3002/create', {
      title: title,
      imgPreview: imgPreview,
      gsm: gsm,
      price: price,
      color: color,
      width: width,
      lenght: lenght,
      gusset: gusset,
      // fabricprice: fabricprice,
      wastage: wastage,
      wastagerecovery: wastagerecovery,
      cmt: cmt,
      printing: printing,
      packing: packing,
      overheads: overheads,
      profit: profit,
      saletax: saletax,
      incometax: incometax,
      commission: commission
    }).then(()=>{
      // setSucc(true);
      toast.success("Product is Added!");
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setGsm("");
  }




    return (
        <div>
        <div className="addnewp">Add New W-Cut Product</div>
        <div className="container">
        <div className="ptitle">title</div>
        <div className="row">
          <div className="col-sm-3">
            <input type="text" className="form-control tfield" onChange={(e) => {setTitle(e.target.value);}} />
          </div>
        </div>
        {/* end product title */}
        {/* start product image */}
        <div className="ptitle">upload image</div>
        <div className="row">
          <div className="col-sm-3">
          {error && <p className="errorMsg">File is not Supported</p>}
          <div className="img-holder" 
          style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : ""}}
          >
            {!imgPreview && (
              <AddPhotoAlternateOutlinedIcon className="addimg" />
            )}
          </div>
          <input type="file" id="file" onChange={handleImageChange} />
          <label htmlFor="file">
            
            {!imgPreview && (
              <div className="btn expandbtn">Choose an Image</div>
            )} 
          </label>
          <div>
            {imgPreview && (
            <div className="btn expandbtn" onClick={() => setImgPreview(null)}>Remove Image</div>
            )}
          </div>
          </div>
        </div>
      </div>
      {/* start product title */}
      {/* end product image */}
      {/* start Particulars */}
      <div className="particulars">
      <div className="particular">Particulars</div>
      <div className="container form-div">
        <div className="expandbutton">
          {!open && <button className="btn expandbtn" onClick={()=>setOpen(!open)} aria-controls="collapse"><ExpandMoreOutlinedIcon className="expand" />expand all tabs</button>}
        </div>
        <div className="closebutton">
          {open && <button className="btn expandbtn" onClick={()=>setOpen(!open)} aria-controls="collapse"><ExpandLessOutlinedIcon className="expand" />close all tabs</button>}
        </div>

        {/* start basic row */}
        <div className="basic-row">
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Button} className="btn ebasicbtn" variant="link" eventKey="1">
                Basics <ExpandMoreOutlinedIcon className="basicbtn" />
              </Accordion.Toggle>
              {/* {succ && <p className="errorproMsg">Product is inserted</p>} */}
              <ToastContainer />
          <Collapse in={open}>
              <Accordion.Collapse eventKey="1">
              <div className="row" id="collapse">
              
                <div className="col-sm-4">
                  <div className="partitle">gsm</div>
                  <input type="number" className="form-control tfield" onChange={(e) => {setGsm(e.target.value);}} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">price</div>
                  <input type="number" className="form-control tfield" onChange={(e) => {setPrice(e.target.value);}} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">color</div>
                  <input type="text" className="form-control tfield" onChange={(e) => {setColor(e.target.value);}} />
                </div>
              </div>
            </Accordion.Collapse>
        </Collapse>
          </Accordion>
      </div>
      {/* end basic row */}

        {/* start size row */}
        <div className="size-row">
        <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button} className="btn ebasicbtn" variant="link" eventKey="1">
            Size <ExpandMoreOutlinedIcon className="basicbtn" />
            </Accordion.Toggle>
            <Collapse in={open}>
          <Accordion.Collapse eventKey="1">
        <div id="collapse">
        <div className="row">
          <div className="col-sm-4">
            <div className="partitle">width</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setWidth(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">lenght</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setLenght(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">gusset</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setGusset(e.target.value);}} />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-4">
            <div className="partitle">top fold</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setTopfold(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">handle</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setHandle(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">piping</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setPiping(e.target.value);}} />
          </div>
        </div> */}
        </div>
        </Accordion.Collapse>
          </Collapse>
      </Accordion>
        </div>
        {/* end size row */}

        {/* start price row */}
        <div className="price-row">
        <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button} className="btn ebasicbtn" variant="link" eventKey="1">
            Pricing <ExpandMoreOutlinedIcon className="basicbtn" />
            </Accordion.Toggle>
            <Collapse in={open}>
          <Accordion.Collapse eventKey="1">
          <div id="collapse">
        <div className="row">
          {/* <div className="col-sm-4">
            <div className="partitle">fabic price <br/><span className="psubtitle">(Per KG)</span></div>
            <input type="number" className="form-control tfield" onChange={(e) => {setFabricprice(e.target.value);}} />
          </div> */}
          <div className="col-sm-4">
            <div className="partitle">wastage <br/><span className="psubtitle">(Per KG)</span></div>
            <input type="number" className="form-control tfield" onChange={(e) => {setWastage(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">wastage recovery <br/><span className="psubtitle">(Per KG)</span></div>
            <input type="number" className="form-control tfield" onChange={(e) => {setWastagerecovery(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">cmt <br/><span className="psubtitle">(Per KG)</span></div>
            <input type="number" className="form-control tfield" onChange={(e) => {setCmt(e.target.value);}} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="partitle">printing <br/><span className="psubtitle">(Per KG)</span></div>
            <input type="number" className="form-control tfield" onChange={(e) => {setPrinting(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">packing <br/><span className="psubtitle">(Per KG)</span></div>
            <input type="number" className="form-control tfield" onChange={(e) => {setPacking(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">over heads %</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setOverheads(e.target.value);}} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="partitle">profit %</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setProfit(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">sale tax %</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setSaletax(e.target.value);}} />
          </div>
          <div className="col-sm-4">
            <div className="partitle">income tax %</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setIncometax(e.target.value);}} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="partitle">commission %</div>
            <input type="number" className="form-control tfield" onChange={(e) => {setCommission(e.target.value);}} />
          </div>
        </div>
        </div>
        </Accordion.Collapse>
          </Collapse>
      </Accordion>
        </div>
        {/* end price row */}
        {/* <button className="btn addpbtn btn-block" onClick={addProduct}>add new product</button> */}
        <SubmitButton />
        <button className="btn addpbtn btn-block" hidden onClick={handleSubmit}>Reset Fields</button>
      </div>
      </div>
      {/* end Particulars */}
    </div>
    )
}

export default Wcut;
