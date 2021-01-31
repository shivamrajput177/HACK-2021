import React from 'react' 
import Navbar from '../components/Navbar'
import { Container,Row, Col, Button } from 'react-bootstrap';

export default function ImgView() {
    const [image, setImage] = React.useState("");
    const imageRef = React.useRef(null);
  
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
      <div className="App" style={{"width": "300px",
                                  "display": "block",
                                  "marginTop": "20%",
                                  "margin": "auto",
                                  "padding": "50px",
                                  }}>
        <div>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
            uploader(e);
          }}
        />
        </div>
        
        {result && 
            <Container fluid>
                <Row>
                <Col xs={6} md={6}>
                <img src={result} alt="Chosen Image" />
                </Col>
                <Col xs={6} md={6}>
                <img src={result} alt="Result Image" />
                </Col>                   
                </Row>
            </Container>
        }
        </div>
      </div>
    );
  }