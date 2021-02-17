import React, {useState} from 'react';
import '.././App.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
// import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Accordion,Button} from 'react-bootstrap';
// import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
// import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StitchedCosting = () => {

    const [width, setWidth] = useState();
    const [lenght, setLenght] = useState();
    const [gusset, setBottomGusset] = useState(0);
    const [gsm, setGsm] = useState();
    const [wastage, setWastage] = useState(1);
    const [fabricp, setFabricp] = useState();
    const [cmt, setCmt] = useState();
    const [packing, setPacking] = useState();
    const [printing, setPrinting] = useState();
    // const [wastagerec, setWastagerec] = useState();
    const [overheads, setOverheads] = useState();
    const [profit, setProfit] = useState();
    const [saletax, setSaletax] = useState();
    const [incometax, setIncometax] = useState();
    const [commission, setCommission] = useState(0);
    const [topfold, setTopfold] = useState();
    const [handle1, setHandle1] = useState(0);
    const [handle2, setHandle2] = useState(0);
    const [piping, setPiping] = useState();
    const [qbag, setQbag] = useState();

    
    const new_width = width+1;
    const new_length = lenght*2+1;
    const new_gusset = gusset+1;
    const new_topfold = topfold*2;
    const new_handle1 = handle1*2;

    const fabricreq_per = 10/100;
    const fabricreq = ((lenght*4)+(gusset*2))*piping+((lenght*4)+(gusset*2))*piping*fabricreq_per;
    const round_fabricreq = Math.round(fabricreq*1)/1;

    const fabricconsump = (((new_length+new_gusset+new_topfold)*new_width)+(((new_width+topfold)*new_gusset)*2)+((new_handle1*handle2)+(round_fabricreq)))*gsm/1550/1000;
    const round_fc = Math.round(fabricconsump*1000)/1000;

    const fabric_cost = round_fc*fabricp;
    const round_fcost = Math.round(fabric_cost*100)/100;

    const fabric_ckg = round_fcost/round_fc*1;
    const round_fabric_ckg = Math.round(fabric_ckg*1)/1;
    
    // const wastage_per = wastage/100;
    const wastagef = (round_fcost+cmt+printing)*wastage/100;
    const round_wf = Math.round(wastagef*100)/100;

    const wastage_kg = (round_wf/round_fc*1);
    const round_wkg = Math.round(wastage_kg*1)/1;
    
    const cmt_f = cmt;
    const round_cmt_f = Math.round(cmt_f*100)/100;

    const cmt_kg = round_cmt_f/round_fc*1;
    const round_cmt_kg = Math.round(cmt_kg*1)/1;
    
    const packing_f = packing;
    const round_pf = Math.round(packing_f*100)/100;

    const packing_kg = round_pf/round_fc*1;
    const round_packing_kg = Math.round(packing_kg*1)/1;

    const printing_p = printing;
    const round_printing_p = Math.round(printing_p*100)/100;

    const printing_kg = round_printing_p/round_fc*1;
    const round_printing_kg = Math.round(printing_kg*1)/1;

    // const wastage_reckg = round_wkg*(wastagerec/fabricp);
    // const round_wrkg = Math.round(wastage_reckg*1)/1;

    // const wastage_rp = round_wrkg*round_fc;
    // const round_wastage_rp = Math.round(wastage_rp*100)/100;

    const overheads_p = (round_fcost+round_wf+round_cmt_f+round_printing_p+round_pf)*overheads/100;
    const round_overheads_p = Math.round(overheads_p*100)/100;

    const overheads_kg = round_overheads_p/round_fc*1;
    const round_overheads_kg = Math.round(overheads_kg*1)/1;

    const profit_p = (round_fcost+round_wf+round_cmt_f+round_printing_p+round_pf+round_overheads_p)*profit/100;
    const round_profit_p = Math.round(profit_p*100)/100;

    const profit_kg = round_profit_p/round_fc*1;
    const round_profit_kg = Math.round(profit_kg*1)/1;

    const saletax_p = (round_fcost+round_wf+round_cmt_f+round_printing_p+round_pf+round_overheads_p+round_profit_p)*saletax/100;
    const round_saletax_p = Math.round(saletax_p*100)/100;

    const saletax_kg = round_saletax_p/round_fc*1;
    const round_saletax_kg = Math.round(saletax_kg*1)/1;

    const incometax_p = (round_fcost+round_wf+round_cmt_f+round_printing_p+round_pf+round_overheads_p+round_profit_p+round_saletax_p)*incometax/100;
    const round_incometax_p = Math.round(incometax_p*100)/100;

    const incometax_kg = round_incometax_p/round_fc*1;
    const round_incometax_kg = Math.round(incometax_kg*1)/1;

    const commission_p = (round_fcost+round_wf+round_cmt_f+round_printing_p+round_pf+round_overheads_p+round_profit_p+round_saletax_p+round_incometax_p)*commission/100;
    const round_commission_p = Math.round(commission_p*100)/100;

    const commission_kg = round_commission_p/round_fc*1;
    const round_commission_kg = Math.round(commission_kg*1)/1;

    const selling_p = (round_fcost+round_wf+round_cmt_f+round_printing_p+round_pf+round_overheads_p+round_profit_p+round_saletax_p+round_incometax_p+round_commission_p);
    const round_selling_p = Math.round(selling_p*100)/100;

    const selling_kg = (round_fabric_ckg+round_wkg+round_cmt_kg+round_packing_kg+round_printing_kg+round_overheads_kg+round_profit_kg+round_saletax_kg+round_incometax_kg+round_commission_kg);

    const wast_per = wastage/100;
    const wast_mul = round_fc*wast_per;
    const wast_min = round_fc-wast_mul;
    const wast_div = 1/wast_min;
    const round_qbag_kg = Math.round(wast_div*1)/1;

    const fabricR_kg = round_fc*qbag;

    const fabricR_mt =  (fabricR_kg*39370/gsm/60);
    const round_fabricR_mt1 = Math.round(fabricR_mt*1)/1;
    const fabricR_mt2 = fabricR_mt*wast_per;
    const round_fabricR_mt2 = Math.round(fabricR_mt2*1)/1;
    const round_fabricR_mt_final = round_fabricR_mt1+round_fabricR_mt2;

    const remarks = qbag*round_profit_p;
    const round_remarks = Math.round(remarks*1)/1;

  return (
    <div className="App">
      <div className="addnewp">Costing for D-Cut</div>
      {/* start Costing */}
      <div className="particulars">
      <div className="container">
        {/* start finished size row */}
        <div className="basic-row">
            <Accordion defaultActiveKey="1">
              <Accordion.Toggle as={Button} className="btn ebasicbtn" variant="link" eventKey="1">
              Finished Size <ExpandMoreOutlinedIcon className="basicbtn" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
              <div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="partitle">Width</div>
                  <input type="number" className="form-control tfield" value={width} onChange={e => setWidth(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Length</div>
                  <input type="number" className="form-control tfield" value={lenght} onChange={e => setLenght(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Bottom Gusset</div>
                  <input type="number" className="form-control tfield" value={gusset} onChange={e => setBottomGusset(+e.target.value)}/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="partitle">CMT</div>
                  <input type="number" className="form-control tfield" value={cmt} onChange={e => setCmt(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Packing <span className="subtc">(Per KG)</span></div>
                  <input type="number" className="form-control tfield" value={packing} onChange={e => setPacking(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Printing <span className="subtc">(Per KG)</span></div>
                  <input type="number" className="form-control tfield" value={printing} onChange={e => setPrinting(+e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="partitle">gsm</div>
                  <input type="number" className="form-control tfield" value={gsm} onChange={e => setGsm(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Wastage <span className="subtc">(%)</span></div>
                  <input type="number" disabled className="form-control tfield" value={wastage} onChange={e => setWastage(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Fabric Price <span className="subtc">(Per KG)</span></div>
                  <input type="number" className="form-control tfield" value={fabricp} onChange={e => setFabricp(+e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                    <div className="partitle">Piping</div>
                    <input type="number" className="form-control tfield" value={piping} onChange={e => setPiping(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Over Heads %</div>
                  <input type="number" className="form-control tfield" value={overheads} onChange={e => setOverheads(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Profit %</div>
                  <input type="number" className="form-control tfield" value={profit} onChange={e => setProfit(+e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="partitle">Sale Tax %</div>
                  <input type="number" className="form-control tfield" value={saletax} onChange={e => setSaletax(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Income Tax %</div>
                  <input type="number" className="form-control tfield" value={incometax} onChange={e => setIncometax(+e.target.value)} />
                </div>
                <div className="col-sm-4">
                  <div className="partitle">Commission %</div>
                  <input type="number" className="form-control tfield" value={commission} onChange={e => setCommission(+e.target.value)} />
                </div>
              </div>
              <div className="row">
                  <div className="col-sm-4">
                      <div className="partitle">Top Fold</div>
                      <input type="number" className="form-control tfield" value={topfold} onChange={e => setTopfold(+e.target.value)} />
                  </div>
                  <div className="col-sm-4">
                      <div className="partitle">Handle One</div>
                      <input type="number" className="form-control tfield" value={handle1} onChange={e => setHandle1(+e.target.value)} />
                  </div>
                  <div className="col-sm-4">
                      <div className="partitle">Handle Two</div>
                      <input type="number" className="form-control tfield" value={handle2} onChange={e => setHandle2(+e.target.value)} />
                  </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                    <div className="partitle">Quantity Bags</div>
                    <input type="number" className="form-control tfield" value={qbag} onChange={e => setQbag(+e.target.value)} />
                </div>
              </div>
              </div>
            </Accordion.Collapse>
          </Accordion>
      </div>
      {/* end finished size row */}
      <div className="price_row">
        <div className="row">
            <div className="col-sm-6">
              <div className="costing_div">Fabric Required</div>
              <input type="number" disabled className="form-control tfield" value={round_fabricreq} />
            </div>
            <div className="col-sm-6">
              <div className="costing_div">Fabric Consumption</div>
              <input type="number" disabled className="form-control tfield" value={round_fc} />
            </div>
        </div>
      </div>
      <div className="basic-row">
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Button} className="btn ebasicbtn" variant="link" eventKey="1">
                Costing Per Piece <ExpandMoreOutlinedIcon className="basicbtn" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
              <div>
                <div className="row">
                  <div className="col-sm-3">
                      <div className="partitle">Fabric Cost</div>
                      <input type="number" disabled className="form-control tfield" value={round_fcost} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">CMT</div>
                    <input type="number" disabled className="form-control tfield" value={round_cmt_f} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Wastage</div>
                    <input type="number" disabled className="form-control tfield" value={round_wf} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Packing</div>
                    <input type="number" disabled className="form-control tfield" value={round_pf} />
                  </div>
                  {/* <div className="col-sm-3">
                    <div className="partitle">Wastage Recovery</div>
                    <input type="number" disabled className="form-control tfield" value={round_wastage_rp} />
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="partitle">Printing</div>
                    <input type="number" disabled className="form-control tfield" value={round_printing_p} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Over Heads</div>
                    <input type="number" disabled className="form-control tfield" value={round_overheads_p} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Profit</div>
                    <input type="number" disabled className="form-control tfield" value={round_profit_p} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Sale Tax</div>
                    <input type="number" disabled className="form-control tfield" value={round_saletax_p} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="partitle">Income Tax</div>
                    <input type="number" disabled className="form-control tfield" value={round_incometax_p} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Commission</div>
                    <input type="number" disabled className="form-control tfield" value={round_commission_p} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Selling Price</div>
                    <input type="number" disabled className="form-control tfield" value={round_selling_p} />
                  </div>
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>
      </div>

        <div className="basic-row">
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Button} className="btn ebasicbtn" variant="link" eventKey="1">
                Costing Per KG <ExpandMoreOutlinedIcon className="basicbtn" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
              <div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="partitle">Fabric Cost</div>
                    <input type="number" disabled className="form-control tfield" value={round_fabric_ckg} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">CMT</div>
                    <input type="number" disabled className="form-control tfield" value={round_cmt_kg} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Wastage</div>
                    <input type="number" disabled className="form-control tfield" value={round_wkg} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Packing</div>
                    <input type="number" disabled className="form-control tfield" value={round_packing_kg} />
                  </div>
                  {/* <div className="col-sm-3">
                    <div className="partitle">Wastage Recovery</div>
                    <input type="number" disabled className="form-control tfield" value={round_wrkg} />
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="partitle">Printing</div>
                    <input type="number" disabled className="form-control tfield" value={round_printing_kg} />
                  </div>
                  <div className="col-sm-3">
                      <div className="partitle">Over Heads</div>
                      <input type="number" disabled className="form-control tfield" value={round_overheads_kg} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Profit</div>
                    <input type="number" disabled className="form-control tfield" value={round_profit_kg} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Sale Tax</div>
                    <input type="number" disabled className="form-control tfield" value={round_saletax_kg} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="partitle">Income Tax</div>
                    <input type="number" disabled className="form-control tfield" value={round_incometax_kg} />
                  </div>
                  <div className="col-sm-3">
                      <div className="partitle">Commission</div>
                      <input type="number" disabled className="form-control tfield" value={round_commission_kg} />
                  </div>
                  <div className="col-sm-3">
                    <div className="partitle">Selling Price</div>
                    <input type="number" disabled className="form-control tfield" value={selling_kg} />
                  </div>
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>
      </div>
      <div className="price_row">
        <div className="row">
            <div className="col-sm-3">
              <div className="costing_div">Quantity Bags</div>
              <input type="number" disabled className="form-control tfield" value={round_qbag_kg} />
            </div>
            <div className="col-sm-3">
              <div className="costing_div">Fabric Required (KG)</div>
              <input type="number" disabled className="form-control tfield" value={fabricR_kg} />
            </div>
            <div className="col-sm-3">
              <div className="costing_div">Fabric Required (MT)</div>
              <input type="number" disabled className="form-control tfield" value={round_fabricR_mt_final} />
            </div>
            <div className="col-sm-3">
              <div className="costing_div">Remarks</div>
              <input type="number" disabled className="form-control tfield" value={round_remarks} />
            </div>
        </div>
      </div>
      
        {/* <button className="btn addpbtn btn-block" >add new product</button> */}
      </div>
      </div>
      {/* end Costing */}
    </div>
  );
}

export default StitchedCosting;
