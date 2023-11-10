import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row,Modal, Form, FormControl, FormCheck, Col, Toast } from "react-bootstrap";
import TUTORScss from './tourials.module.css'
import {EnvelopeOpen, PencilSquare, PlusLg } from "react-bootstrap-icons";
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
                <h2 className={`text-center py-3 ${TUTORScss.header}`}>OUR TUTORIALS</h2>
                <Row xl={3} lg={3} md={2} sm={2} xs={1}>
                    {/* where tutors data are mapped out. */}
                    {jsonData.map((ourTutors,index,jsonData)=>{
                        return(
                        <div key={index}>
                                <Card  className={` ${TUTORScss.ourTutorscard} my-2 border-0`} >
                                    <Card.Img src={ ourTutors.img || ourTutors.img.name} className="img-fluid"/>
                                    <p className={TUTORScss.ourTutorsname}>{ourTutors.name}</p>
                                    <Card.Body className="text-center">
                                        <Card.Subtitle className={TUTORScss.ourTutorscourse}>Course: {ourTutors.course}</Card.Subtitle>
                                    </Card.Body>
                                    <Card.Footer className="text-center border-0">
                                        <div>                                           
                                            <Button className={`${TUTORScss.cardFooterBtn}btn btn-primary btn-sm mx-3 pb-2 px-2   rounded-5`}>
                                            <EnvelopeOpen className={`  ${TUTORScss.cardicon}`} title="send E-mail"/>
                                            </Button>                                        
                                            <Button className={`${TUTORScss.cardFooterBtn}btn btn-danger btn-sm mx-3 pb-2 px-2   rounded-5`}>
                                                <PencilSquare className={` ${TUTORScss.cardicon}`} title="Edit profile"/>
                                            </Button>                                            
                                        </div>
                                    </Card.Footer>
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