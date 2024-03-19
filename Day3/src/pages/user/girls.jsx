import '../../assets/css/Kids.css';
import Girls1 from '../../assets/images/womens1.jpg';
import Girls2 from '../../assets/images/womens2.jpg';
import Girls3 from '../../assets/images/womens3.jpg';

const girls = () => {
  return (
    <div className="kids_bimage">
    <div className='kids_head'>KIDS BIRTHDAY PARTY</div>
    <div className='kids_head_side'>SPECIALLY FOR GIRLS</div>

    <div className="kids_card">
  <img src={Girls1} alt="Avatar" style={{height:"50vh",width:"100%"}} />
  <div class="kids_container">
    <h4><b>Animals Decoration</b></h4>
    <p>Amount: $100 <div className='kids_tax'>tax included</div></p>
    </div>
    </div>

    <div className="kids1_card">
    <img src={Girls2} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="kids1_container">
      <h4><b>Micky Decoration</b></h4>
      <p>Amount: $50 <div className='kids_tax'>tax included</div></p>
      </div>
      </div>
  
      <div className="kids2_card">
    <img src={Girls3} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="kids2_container">
      <h4><b>Barbie Decoration</b></h4>
      <p>Amount: $100 <div className='kids_tax'>tax included</div></p>

      </div>
      </div>
      <br/>
      <br/>

    </div>
  )
}

export default girls
