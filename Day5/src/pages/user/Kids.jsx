import '../../assets/css/Kids.css';
import Kids1 from '../../assets/images/kids1.jpg';
import Kids2 from '../../assets/images/kids2.webp';
import Kids4 from '../../assets/images/kids4.jpg';

const Kids = () => {
  return (
    <div className="kids_bimage">
    <div className='kids_head'>KIDS BIRTHDAY PARTY</div>
    <div className='kids_head_side'>SPECIALLY FOR BOYS</div>

    <img src={Kids1} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div className="kids_card">
  <div class="kids_container">
    <h4><b>Avengers Decoration</b></h4>
    <p>Amount: $60 <div className='kids_tax'>tax included</div></p>
    </div>
    </div>

    <div className="kids1_card">
    <img src={Kids4} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="kids1_container">
      <h4><b>Cars Decoration</b></h4>
      <p>Amount: $50 <div className='kids_tax'>tax included</div></p>
      </div>
      </div>
  
      <div className="kids2_card">
    <img src={Kids2} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="kids2_container">
      <h4><b>Black panther Decoration</b></h4>
      <p>Amount: $100 <div className='kids_tax'>tax included</div></p>

      </div>
      </div>
      <br/>
      <br/>

    </div>
  )
}

export default Kids
