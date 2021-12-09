import { Button, Card, CardImg,
    CloseButton, Col, Container, ListGroup, Modal, ModalBody, ModalFooter, ModalTitle, Row, Table } from 'react-bootstrap';
import React, { useState } from 'react';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

const Model = (props)=>{
  
   console.log(props);
 
const occ=props.occupation;

const app=props.appearance;
console.log(occ,app);

 

return (
   <>
   <Modal {...props} size='xl' backdrop='static'>
       <ModalHeader className='mh'>
        <ModalTitle className="mt">WIKI INFORMATION</ModalTitle>
        <CloseButton variant='white' onClick={props.onHide}/>
       </ModalHeader>

       <ModalBody className='mb'>
       <Container>
           <Row>
               <Col className='col1' xs={6} md={4}>
               <Card style={{ width: '22rem' }}>
           <CardImg variant='center' src={props.img} alt={props.name}/>
          </Card>

               </Col>
           

               <Col className='col2' xs={12} md={8}>

               <Table bordered >
             <tbody>

                 <tr>
                 <th>Name</th>
                 <td>{props.name}</td>
                 </tr>

                 <tr>
                 <th>Birthday</th>
                 <td>{props.birthday}</td>
                 </tr>
                 
                   <tr>
                 <th>Occupation</th>
                 <td>{props.occupation }</td>
                 </tr>

                 <tr>
                 <th>Status</th>
                 <td>{props.status}</td>
                 </tr>

                 <tr>
                 <th>Nickname</th>
                 <td>{props.nickname}</td>
                 </tr>

                 <tr>
                 <th>Appearance</th>
                 <td>{props.appearance}</td>
                 </tr>

                 <tr>
                 <th>Portrayed By Actor</th>
                 <td>{props.portrayed}</td>
                 </tr>

            </tbody>

            </Table>
               </Col>
           </Row>
       </Container>


 
       
       </ModalBody>

       <ModalFooter className='mf'>
           <Button variant='primary' onClick={props.onHide}>Close</Button>
       </ModalFooter>
   </Modal>
   </>
)
}


const EachCharacter = ({cast}) => {
 const [show,setShow]=useState(false);
 const [tempData,setTempData]=useState([]);
 const handleClose = ()=> setShow(false);
 const handleShow= ()=> setShow(true);

const getCastsData = (name,birthday,occupation,img,status,nickname,appearance,portrayed)=>{

   let occup = occupation.join(',');
   let app = appearance.join(',');
let tempData = [name,birthday,occup,img,status,nickname,app,portrayed];

console.log(tempData);
setTempData(item =>[1,...tempData])
return setShow(true);
}
   console.log(cast);
   return (
       <div className='cardd'>
           
          <div className='card-hover'>

           <div className='card-img'>
               <img src={cast.img} alt=''/>
                  {/* // <!-- Trigger the modal with a button --> */}

             <Button  className='h1' 
              onClick={()=>getCastsData(cast.name,cast.birthday,cast.occupation,cast.img,
                                         cast.status,cast.nickname,cast.appearance,cast.portrayed)}>
                  {cast.name}</Button>
           </div>
           
           <div className='cardinfo'>
                 <h1 >{cast.name}</h1>
                <ul>
                    <li>
                        <strong>Actor : </strong> {cast.portrayed}
                    </li>
                    <li>
                        <strong>Occupation : </strong> {cast.occupation}
                    </li>
                    <li>
                        <strong>DOB : </strong> {cast.birthday}
                    </li>
                    <li>
                        <strong>Status : </strong> {cast.status}
                    </li>
                </ul>
             </div>

             <Model show={show} onHide={handleClose} name={tempData[1]} birthday={tempData[2]} occupation={tempData[3]}  
             img={tempData[4]}  status={tempData[5]} nickname={tempData[6]} appearance={tempData[7]} portrayed={tempData[8]} 
                 /> 

           </div>
          

           
       </div>
 
 

       
   )
}


export default EachCharacter;