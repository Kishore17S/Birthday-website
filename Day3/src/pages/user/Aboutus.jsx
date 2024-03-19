import '../../assets/css/Aboutus.css';
import aboutusimg from '../../assets/images/aboutus.jpg';

const Aboutus = () => {
  return (

    <div className='aboutus'>
    <img src={aboutusimg} alt="Avatar" style={{height:"120vh",width:"45%"}} className='aboutusimage'/>
    <div className='aboutus_move'>
    <header className="aboutus_header">
      <h1>About Us</h1>
    </header>
    <div className="aboutus_container">
    
      <p >Welcome to our Momentous Endeavours</p>
      <h2 className='aboutushtag'>Our Mission</h2>
      <p>At Birthday Bash Organizer, we are committed to creating unforgettable birthday experiences for our clients and their loved ones. Our mission is to bring joy, excitement, and happiness to every celebration we organize.</p>
      <h2 className='aboutushtag'>Our Services</h2>
      <p>We offer a comprehensive range of services to ensure that every aspect of your birthday event is taken care of:</p>
      <ul>
        <li>Themed party planning</li>
        <li>Venue selection and decoration</li>
        <li>Customized invitations and RSVP management</li>
        <li>Catering and menu customization</li>
        <li>Entertainment and activities coordination</li>
        <li>Gift registry and party favors</li>
        {/* Add more services as needed */}
      </ul>
      <h2 className='aboutushtag'>Why Choose Us?</h2>
      <p>With years of experience in event management, our team of dedicated professionals goes above and beyond to turn your birthday vision into reality. We prioritize creativity, attention to detail, and client satisfaction, ensuring that your event is a resounding success.</p>
      <h2 className='aboutushtag'>Contact Us</h2>
      <p>If you're ready to start planning the ultimate birthday bash, get in touch with us today!</p>
      <p>Email: momentousendeavours18@gmail.com</p>
      <p>Phone: +91 9145627308</p>
      <br />


    </div>
    </div>
    </div>
  )
}

export default Aboutus
