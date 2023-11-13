import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row,Modal, Form, FormControl, FormCheck, Col, Toast } from "react-bootstrap";
import TUTORScss from './tourials.module.css'
import {EnvelopeOpen, Facebook, Github, Instagram, PencilSquare, PlusLg, Twitter } from "react-bootstrap-icons";
import Tutors from './tourials.json'

export default function Tutorial() {

  const [jsonData,setJsonData]= useState(Tutors)
  const [name,setName]= useState("")
  const [course,setCourse]= useState("")
  const [img,setImg]= useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(img)
  const handleSubmit = (save) => {
    save={name,course,img}
    let upDateData=[...jsonData,save]
    console.log(save)
    handleClose()
    setJsonData(upDateData)
  }

    return(
        <section className={TUTORScss.TUTORS}>
            <Container>
                <h2 className={`text-center pt-4 pb-3 ${TUTORScss.header}`}>OUR TUTORS</h2>
                <Row xl={3} lg={3} md={2} sm={2} xs={1}>
                    {/* where tutors data are mapped out. */}
                    {jsonData.map((ourTutors,index,jsonData)=>{
                        return(
                        <div key={index}>
                                <Card  className={`text-center ${TUTORScss.ourTutorscard} my-2 rounded-4`} >
                                    <div className={`text-center mt-4 ${TUTORScss.cardImg}`}>
                                        <img src={ ourTutors.img} className={`${TUTORScss.cardimg}`}/>
                                    </div>
                                    <Card.Body className="text-center">
                                        <Card.Title className={TUTORScss.ourTutorsname}>{ourTutors.name}</Card.Title>
                                        <Card.Subtitle className={TUTORScss.ourTutorscourse}>Course: {ourTutors.course}</Card.Subtitle>
                                        <div className="mt-3">
                                           <Button className="rounded-5 btn btn-primary mx-1 btn-sm"><Instagram/></Button>
                                            <Button  className="rounded-5 btn btn-primary mx-1 btn-sm"><Twitter/></Button>
                                            <Button  className="rounded-5 btn btn-primary mx-1 btn-sm"><Github/></Button>
                                        </div>
                                    </Card.Body>
                                    <div>
                                        <Button className={`btn mb-4 px-5 mt-3 ${TUTORScss.cardBtn}`}> <b> EDIT </b></Button>
                                    </div>
                                </Card>
                        </div>
                        )
                    })}
                </Row>
            </Container>
            <div className="position-relative">
                <Button className="btn btn-light rounded-5 my-3 mx-2 position-absolute bottom-0 end-0"  onClick={handleShow}><PlusLg/></Button>
            </div>
            <Modal show={show} onHide={handleClose} className="bg-light">
                <Modal.Header closeButton className="border-0">
                <Modal.Title><b>Add Your Tutors</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <FormControl type="text"  size="sm" placeholder="Enter your full Name" onChange={(e)=>setName(e.target.value)} required/>
                            </Col>
                            <Col>
                                <FormControl type="text"  size="sm" placeholder="Enter your course of choice" onChange={(e)=>setCourse(e.target.value)} required/>
                            </Col>
                            <Form.Group controlId="formFile" className="mt-3">
                                <Form.Control type="file" size="sm" onChange={(e)=>setImg(e.target.files[0])} required accept="image/*" />
                            </Form.Group>
                            <Form.Text>
                                 choose an image from your file and upload
                            </Form.Text>
                        </Row>                  
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=> handleSubmit()}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>                    
        </section>
    )
}