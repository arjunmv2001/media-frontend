import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Add from '../Components/Add';
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {
  //Create a state for lifting (In parent component)
  const [uploadVideoServerResponse,setuploadVideoServerResponse]=useState({})
  return (
    <div>
    <Row className='container' style={{width:'100%'}}>
       <Col>
       <Add setuploadVideoServerResponse={setuploadVideoServerResponse}/>
       </Col>
    </Row>

    <Row style={{width:'100%'}}>
      <Col className='m-5'>
      <h3>View All Videos</h3>
      <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </Col>
      <Col>
      <h3 className='text-center'>Category</h3>
      <Category/>
      </Col>
    </Row>
</div>

  )
}

export default Home