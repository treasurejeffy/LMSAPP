import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row,Modal, Form, FormControl, FormCheck, Col } from "react-bootstrap";
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
                                    <Card.Img src={ ourTutors.img} className="img-fluid"/>
                                    <p className={TUTORScss.ourTutorsname}>{ourTutors.name}</p>
                                    <Card.Body className="text-center">
                                    <Card.Subtitle className={TUTORScss.ourTutorscourse}>Course: {ourTutors.course}</Card.Subtitle>
                                    </Card.Body>
                                    <Card.Footer className="text-center border-0">
                                        <div>
                                            <EnvelopeOpen className={`text-primary mx-4 ${TUTORScss.cardicon}`} title="send E-mail"/>
                                            <PencilSquare className={`text-danger mx-4  ${TUTORScss.cardicon}`} title="Edit profile"/>
                                        </div>
                                    </Card.Footer>
                                </Card>
                        </div>
                        )
                    })}
                </Row>
            </Container>
            <Button className="btn btn-light rounded-5 my-3 mx-2"  onClick={handleShow}><PlusLg/></Button>
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
                                <Form.Control type="file" size="sm" onChange={(e)=>setImg(e.target.files)} required accept="image/*" />
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