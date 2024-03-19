import '../../assets/css/Kids.css';
import Baby1 from '../../assets/images/baby1.webp';
import Baby2 from '../../assets/images/baby2.webp';
import Baby3 from '../../assets/images/baby3.jpg';
const Toddler = () => {
  return (
    <div className="kids_bimage">
    <div className='kids_head'>TODDLER'S BIRTHDAY PARTY</div>
    <div className='kids_head_side'>CHEERS TO MORE FUN!!!</div>

    <div className="kids_card">
  <img src={Baby1} alt="Avatar" style={{height:"50vh",width:"100%"}} />
  <div class="kids_container">
    <h4><b>Cats and Balloon Decoration</b></h4>
    <p>Amount: $100 <div className='kids_tax'>tax included</div></p>
    </div>
    </div>

    <div className="kids1_card">
    <img src={Baby2} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="kids1_container">
      <h4><b>Animals Decoration</b></h4>
      <p>Amount: $200 <div className='kids_tax'>tax included</div></p>
      </div>
      </div>
  
      <div className="kids2_card">
    <img src={Baby3} alt="Avatar" style={{height:"50vh",width:"100%"}} />
    <div class="kids2_container">
      <h4><b>King or Queen Birthday Party</b></h4>
      <p>Amount: $500 <div className='kids_tax'>tax included</div></p>

      </div>
      </div>
      <br/>
      <br/>

    </div>
    
  )
}

export default Toddler
