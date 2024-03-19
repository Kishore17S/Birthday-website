import '../../assets/css/Kids.css';
import Adults1 from '../../assets/images/adults1.jpeg';
import Adults2 from '../../assets/images/adults2.jpeg';
import Adults3 from '../../assets/images/adults3.jpeg';

const Adults = () => {
  return (
    <div className="kids_bimage">
    <div className='kids_head'>ADULTS BIRTHDAY PARTY DESIGN</div>
    <div className='kids_head_side'>ENJOY YOUR LIFE!!!</div>

    <div className="kids_card">
  <img src={Adults1} alt="Avatar" style={{height:"50vh",width:"100%"}} />
  <div class="kids_container">
    <h4><b>Ceiling Art Decoration</b></h4>
    <p>Amount: $50 <div className='kids_tax'>tax included</div></p>
    </div>
    </div>

    <div className="kids1_card">
    <img src={Adults2} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="kids1_container">
      <h4><b>Balloon Decoration</b></h4>
      <p>Amount: $70 <div className='kids_tax'>tax included</div></p>
      </div>
      </div>
  
      <div className="kids2_card">
    <img src={Adults3} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="kids2_container">
      <h4><b>Light and Balloon Birthday Party</b></h4>
      <p>Amount: $50 <div className='kids_tax'>tax included</div></p>

      </div>
      </div>
      <br/>
      <br/>

    </div>
  )
}

export default Adults
