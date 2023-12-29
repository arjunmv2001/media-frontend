import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { getVideoHistory } from '../services/allAPI';
import { Link } from 'react-router-dom';

function Watchhistory() {
  const [history,setHistory] = useState([])
  const handleHistory=async()=>{
    //make an api
    const {data} =await getVideoHistory()
    console.log(data);
    setHistory(data)
  }
  console.log(history);

  useEffect(()=>{
    handleHistory()
  },[])
  return (
    <div className='container m-5'>
      <h3 className='text-center'>Watch History</h3>
          <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th className='text-light' scope='col'>Id</th>
          <th className='text-light' scope='col'>Caption</th>
          <th className='text-light' scope='col'>URL</th>
          <th className='text-light' scope='col'>Timestamp</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          history?history.map((item)=>(
            <tr>
          <th className='text-light' scope='row'>{item.id}</th>
          <td className='text-light'>{item.caption}</td>
          <td className='text-light'>{item.embedLink}</td>
          <td className='text-light'>{item.timestamp}</td>
        </tr>
          )):"No Data Found"
        }
      </MDBTableBody>
    </MDBTable>
    <div className='text-center mt-5'>
      <Link to={'/'}>
      <button className='btn bg-primary'>Back To Home</button>
      </Link>
      </div>  
    </div>
  )
}

export default Watchhistory