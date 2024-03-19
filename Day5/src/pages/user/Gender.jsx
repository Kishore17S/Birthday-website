import { useNavigate } from 'react-router-dom';
import '../../assets/css/Gender.css';
import boy from '../../assets/images/boygender.webp';
import girl from '../../assets/images/girlgender.jpg';

const Gender = () => {
    const navigate=useNavigate();

    const handlekids =()=>
    {
      navigate("/user/kids")
    }
    const handlegirls =()=>
    {
      navigate("/user/girls")
    }
  return (
    <div className="gender_bimage">
    <div className='gender_head'>SELECT YOUR CATEGORY</div>
    <br />
   

    <div className="gender_card" onClick={handlekids}>
  <img src={boy} alt="Avatar" style={{height:"50vh",width:"100%"}} />
  <div class="gender_container">
    <h4><b>BOYS</b></h4>

    </div>
    </div>

    <div className="gender1_card" onClick={handlegirls}>
    <img src={girl} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="gender1_container">
      <h4><b>GIRLS</b></h4>
      </div>
      </div> 
      <br/>
      <br/>

      </div>
  )
}

export default Gender
