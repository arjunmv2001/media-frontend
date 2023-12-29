import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { Col, Row } from 'react-bootstrap';
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoServerResponse}) {
  const[allVideos,setAllVideo]=useState()

  const [deleteVideoStatus,setdeleteVideoStatus]=useState(false)

  const getVideo=async()=>{
    const {data} = await getAllVideos()
    console.log(data);
    setAllVideo(data)
  }
  console.log(allVideos);
  useEffect(()=>{
    getVideo()
    setdeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])
  return (
   <>
    <Row>
      {
        allVideos?.length>0? allVideos?.map((item)=>(
          <Col sm={12} md={6} lg={6} xl={6}>
                <VideoCard displayData={item} setdeleteVideoStatus={setdeleteVideoStatus}/>
          </Col>
        )):"Nothing to display"
      }
    </Row>
   </>
  )
    }
export default View