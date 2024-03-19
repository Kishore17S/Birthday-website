import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.png';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image8 from '../../assets/images/image8.jpg';
import image9 from '../../assets/images/image9.jpeg';
import image10 from '../../assets/images/image10.jpg';
import image11 from '../../assets/images/image11.jpeg';
import image12 from '../../assets/images/image12.jpg';
import image13 from '../../assets/images/image13.jpg';
import image14 from '../../assets/images/image14.jpg';
import image15 from '../../assets/images/image15.jpg';
// import Footer from "../../components/Footer.jsx"
// import Navbar from "../../components/navbar.jsx"
import '../../assets/css/Gallery.css';

const Gallery = () => {
  const imageUrls = [image1, image2, image3, image4,image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
  return (
    <div>
    {/*<Navbar />*/}
    <div className="gallery">
    <h2 className='galery_header'>Gallery</h2>
    <div className="gallery_image-grid">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="gallery_image-container">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
     {/* <Footer />*/}
  </div>
  )
}

export default Gallery
