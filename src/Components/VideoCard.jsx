import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteAVideo, watchVideoHistory } from '../services/allAPI';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function VideoCard({displayData,setdeleteVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    //make an api call to get the video watch history
    const{caption,embedLink}=displayData

    //date and time
    let today = new Date()
    console.log(today);
    const timestamp=new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',
    day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);

    let videoDetails = {
      caption,
      embedLink,
      timestamp
    }

    await watchVideoHistory(videoDetails)
  }

  //deleting a video
  const deleteVideo=async(id)=>{
    //make api call
  const response = await deleteAVideo(id)
  console.log(response);
  setdeleteVideoStatus(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag started"+id,e);
    e.dataTransfer.setData("videoId",id) //Data transfer
    // console.log(e.dataTransfer.setData("VideoId",id)); 
    
  }
  return (
    <div>
      <MDBCard draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} style={{width:'18rem'}} className='m-5'>
      <MDBCardImage style={{height:'200px'}} onClick={handleShow} src={displayData.url} position='top' alt='...' />
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={displayData.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <MDBCardBody>
        <MDBCardTitle className='text-center fs-3 fw-bold'>{displayData.caption}</MDBCardTitle>
        <div className='text-center mt-5'>
        <MDBBtn onClick={()=>deleteVideo(displayData.id)} className='bg-danger border-danger'> <i class="fa-solid fa-trash"></i> Delete</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default VideoCard