"use client"
import React, {useState} from 'react';
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import {Modal} from "react-bootstrap";
const List = () => {

    const [loader,setLoader]=useState(false);
    const [show, setShow] = useState(false);

    const [method,setMethod] = useState([           {
        "name": "VISA",
        "type": "visa",
        "logo": "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw/visa.png",
        "gw": "visacard",
        "r_flag": "1",
        "redirectGatewayURL": "https://sandbox.sslcommerz.com/gwprocess/v4/bankgw/indexhtmlOTP.php?mamount=1000.00&ssl_id=2310191520231MLVg8ZTsa9Ld4k&Q=REDIRECT&SESSIONKEY=9CE83C4562A96645C7652AF10D220C37&tran_type=success&cardname=visavard"
    },]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const PaymentOption = async () => {
            setLoader(true)
            let res=await fetch("/api/payment",{method:'POST'});
            let JSON=await res.json();
            setLoader(false);
            setShow(true);
            setMethod(JSON['data']['desc'])
    }


    const PayNow = (PayURL) => {
        window.location.replace(PayURL);
    }



    return (
        <div>
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3">
                                                <a href="#!" className="text-body">Continue shopping</a>
                                            </h5>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have 4 items in your cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="text-muted">Sort by:</span>{" "}
                                                        <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Shopping item" style={{ width: 65 }}/>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Iphone 11 pro</h5>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: 50 }}>
                                                                <h5 className="fw-normal mb-0">2</h5>
                                                            </div>
                                                            <div style={{ width: 80 }}>
                                                                <h5 className="mb-0">$900</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <i className="fas fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp" className="img-fluid rounded-3" alt="Shopping item" style={{ width: 65 }}/>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Samsung galaxy Note 10 </h5>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: 50 }}>
                                                                <h5 className="fw-normal mb-0">2</h5>
                                                            </div>
                                                            <div style={{ width: 80 }}>
                                                                <h5 className="mb-0">$900</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <i className="fas fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp" className="img-fluid rounded-3" alt="Shopping item" style={{ width: 65 }}/>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>Canon EOS M50</h5>
                                                                <p className="small mb-0">Onyx Black</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: 50 }}>
                                                                <h5 className="fw-normal mb-0">1</h5>
                                                            </div>
                                                            <div style={{ width: 80 }}>
                                                                <h5 className="mb-0">$1199</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <i className="fas fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-3 mb-lg-0">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp" className="img-fluid rounded-3" alt="Shopping item" style={{ width: 65 }}/>
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>MacBook Pro</h5>
                                                                <p className="small mb-0">1TB, Graphite</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: 50 }}>
                                                                <h5 className="fw-normal mb-0">1</h5>
                                                            </div>
                                                            <div style={{ width: 80 }}>
                                                                <h5 className="mb-0">$1799</h5>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <i className="fas fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card bg-light  rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Shipping details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{ width: 45 }} alt="Avatar"/>
                                                    </div>

                                                    <div className="mt-2">
                                                        <div className="form-outline form-white mb-2">
                                                            <label className="form-label" htmlFor="typeName">Shipping Name</label>
                                                            <input type="text" id="typeName" className="form-control form-control-sm"  placeholder="Name"/>
                                                            <label className="form-label" htmlFor="typeName">Shipping City</label>
                                                            <input type="text" id="typeName" className="form-control form-control-sm"  placeholder="City"/>
                                                            <label className="form-label" htmlFor="typeName">Shipping Phone No</label>
                                                            <input type="text" id="typeName" className="form-control form-control-sm"  placeholder="Phone No"/>
                                                            <label className="form-label" htmlFor="typeName">Shipping Address</label>
                                                            <input type="text" id="typeName" className="form-control form-control-sm"  placeholder="Address"/>
                                                        </div>
                                                    </div>
                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">$4798.00</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping</p>
                                                        <p className="mb-2">$20.00</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">$4818.00</p>
                                                    </div>
                                                    <SubmitButton onClick={PaymentOption} submit={loader} className="btn btn-primary" text="Checkout"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <h6>Pay Now</h6>
                </Modal.Header>
                <Modal.Body className="bg-white">

                    <div className="container-fluid ">
                        <div className="row">

                            {
                                method.map((item,i)=>{
                                    return(
                                        <div className="col-md-2 col-lg-2 col-6 p-1">
                                            <div className="card  h-100 bg-white shadow-sm">
                                                <a onClick={()=>{PayNow(item['redirectGatewayURL'])}}>
                                                    <img className="w-100 pay-img" src={item['logo']}/>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }





                        </div>
                    </div>
                </Modal.Body>
            </Modal>


        </div>
    );
};

export default List;