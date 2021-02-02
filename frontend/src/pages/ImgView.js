import React, { useState } from 'react' 
import ReactPlayer from "react-player";
import { Container,Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar'


export default function ImgView() {
    const [videoFilePath, setVideoFileURL] = useState(null)

    const [image, setImage] = React.useState("");
    const imageRef = React.useRef(null);
  
    const handleVideoUpload = (event) => {
      setVideoFileURL(URL.createObjectURL(event.target.files[0]));
      }
    
    function useDisplayImage() {
      const [result, setResult] = React.useState("");
  
      function uploader(e) {
        const imageFile = e.target.files[0];
  
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
          setResult(e.target.result);
        });
  
        reader.readAsDataURL(imageFile);
      }
  
      return { result, uploader };
    }
  
    const { result, uploader } = useDisplayImage();
  
    return (
       <div> 
       <Navbar />
        <div style={{width: "300px",
                    borderStyle: "double",
                    display: "block",
                    marginTop: "20px",
                    marginLeft: "40%",
                    boxAlign: "center"
                     }}>
        <h3>Choose Image</h3>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
            uploader(e);
          }}
        />
        </div>

        <div style={{width: "300px",
                     borderStyle: "double",
                     display: "block",
                     marginTop: "20px",
                     marginLeft: "40%",
                     marginBottom:"30px"
                    }}>
        <h3>Choose Video</h3>
        <input
        
         type="file" 
         onChange={handleVideoUpload} />
        </div>
        <div style={{width:"505px",height:"505px",marginLeft:"32%",marginBottom:"50px",borderStyle: "double"}}>
        <ReactPlayer style={{"display":"center"}} url={videoFilePath} width="499px" height="500px" controls={true} />
        </div>
        {result && 
            <Container fluid>
                <Row>
                <Col xs={6} md={6}>
                <div style={{marginLeft:"60px"}}>
                <img width="500px" height="500px" src={result} alt="Chosen Image" />
                </div>
                </Col>
                <Col xs={6} md={6}>
                <div>
                <img width="500px" height="500px" src={result} alt="Result Image" />
                </div>
                </Col>                   
                </Row>
            </Container>
        }
        </div>
      
    );
  }
