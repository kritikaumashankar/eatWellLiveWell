import Link from 'next/link';
import {useState} from 'react';
import fetch from 'isomorphic-unfetch';
import NewReview from '../components/NewReview.js'
import { useRouter } from 'next/router';
import { Button, Modal } from '../node_modules/react-bootstrap';
import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();
const Reviews = ({reviews}) =>{
  const router = useRouter();
  const [modalId, setModalId] = useState("");

  const handleClose = () => setModalId("");
  const handleShow = (id) => setModalId(`modal${id}`);
  const deleteReview = async (review) => {
    const reviewId = review._id;
    const image = review.image;
    const desertRef = ref(storage, image);

    if(image !== "" || image !== null){
      deleteObject(desertRef).then(() => {
      // file deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error)
      });
    }
    
    try{
      const deleted = await fetch(`${process.env.DB_URL_API}/api/reviews/${reviewId}`,{
        method : "Delete"
      })
      router.push('/reviews')
    }catch(error){
      console.log(error)
    }
  }

  const showImage = (review) =>{

    return(
      <div> 
        <Button className="btn btn-primary" onClick={()=>{setModalId(`modal${review._id}`)}}>Click here!</Button>
        <Modal show={`modal${review._id}` === modalId} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>{review.reviewer}</Modal.Title>
          </Modal.Header>
          <Modal.Body ><img className="img-fluid" src={review.image} /></Modal.Body>
        </Modal>
      </div>
    )}
  return(
    <div className="container">
      <h3> Reviews </h3>

      <NewReview />
      <table>
        <thead>
        <tr>
          <th>Review</th>
          <th>Reviewer</th>
          <th>Image</th>
          <th>Priority</th>
          <th> Action</th>
        </tr>
        </thead>
        <tbody>
          {reviews===null? "No reviews to display!":reviews.map((rev,i) =>(
            <tr key={rev._id}>
              <td>{rev.review}</td>
              <td>{rev.reviewer}</td>
              <td>
                {rev.image !=="" ? showImage(rev) : ''}</td>
              <td>{rev.priority}</td>
              <td><Link href={`reviews/${rev._id}`}><button className="btn btn-primary">Edit</button></Link><br/>
              <button className="btn btn-primary" 
              onClick={() => {
                if (window.confirm('Are you sure you wish to delete this review?')) deleteReview(rev) }}>
                 Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
      padding: 1rem;
      text-align: center;
        table{
          border-spacing: 0;
          border: 1px solid black;
        }
        th,td {
          margin: 0;
          padding: 0.5rem;
          border-bottom: 1px solid black;
          border-right: 1px solid black;
        }
        td:last-child {
          border-right: 0;
        }

        .btn{
          background-color: #f95960;
          border-color: #f95960;
          color: white;
          line-height: 0.5;
          margin: 0.5rem;
        }
        @media(max-width:900px) {
          .container{
            font-size: x-small;
          }
          .btn{
            font-size: xx-small;
            margin: 0.1rem;
          }
        }
      `}
        
      </style>
    </div>
  )
}
Reviews.getInitialProps = async () =>{
  const { DB_URL_API } = process.env;
  console.log(DB_URL_API)
  const res = await fetch(DB_URL_API+'/api/reviews/')
  const { data } = await res.json();
  return { reviews: data };
}

export default Reviews;