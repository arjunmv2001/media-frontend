import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Row } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { uploadVideo } from '../services/allAPI';



function Add({setuploadVideoServerResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video,setVideo]=useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(video);

  const getEmbedLink=(e)=>{
    const {value}=e.target
    if(value){
    console.log(value.slice(-31));
      const link =`https://www.youtube.com/embed/${value.slice(-31)}`
      setVideo({...video,embedLink:link})
    }
    else{
      setVideo({...video,embedLink:""})
    }
  }
  const handleAdd=async()=>{
    const {id,caption,url,embedLink}=video
    if(!id||!caption||!url||!embedLink){
      alert("Please enter valid details")
    }
    else{
      //make an api call to add video details to db.json
      const response = await uploadVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<=300){
        setuploadVideoServerResponse(response.data)
        alert(`${response.data.caption} Video Added Successfully`)
        handleClose()
      }
      else{
        alert('Please enter valid details')
      }
    }
  }
  return (
    <div>
      <Row>
      <Col xl={6} className='text-center d-flex justify-content-center m-5' >
            <h4>Upload Video</h4>
            <MDBBtn  onClick={handleShow} className='btn  mx-4'><i class="fa-solid fa-plus"></i></MDBBtn>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-light'>
       
      <MDBInput onChange={(e)=>setVideo({...video,id:e.target.value})} label='Video Id' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setVideo({...video,caption:e.target.value})} label='Video Caption' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setVideo({...video,url:e.target.value})} label='Video Image URL' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={getEmbedLink} label='Youtube Video Link' id='formControlLg' type='text' size='lg' />
      <br />
     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add Video</Button>
        </Modal.Footer>
      </Modal>
        </Col>
        <Col className='text-center' xl={4}>
          <Link to='/watch-history'>
          <h4 className='m-5 text-light'>Watch History</h4>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default Add