import SumButton from '@components/SumButton';
import '../styles/SaquePage.css'

function SaquePage() {
  return (
    <div className='saque'>
      <header>
        <img src='' alt='devSaque' className='imgDevSaque'/>
      </header>
      
      <div className='block'>
        <h1>R$ 2</h1>
        <section>
          <button className="buttondeposit">-</button>
          <SumButton numero='2'/>
        </section>
      </div>

      <div className='block'>
        <h1>R$ 5</h1>
        <section>
          <button className="buttondeposit">-</button>
          <SumButton numero='5'/>
        </section>
      </div>

      <div className='block'>
        <h1>R$ 10</h1>
        <section>
          <button className="buttondeposit">-</button>
          <SumButton numero='10'/>
        </section>
      </div>

      <div className='block'>
        <h1>R$ 20</h1>
        <section>
          <button className="buttondeposit">-</button>
          <SumButton numero='20'/>
        </section>
      </div>

      <div className='block'>
        <h1>R$ 50</h1>
        <section>
          <button className="buttondeposit">-</button>
          <SumButton numero='50'/>
        </section>
      </div>

      <div className='block'>
        <h1>R$ 100</h1>
        <section>
          <button className="buttondeposit">-</button>
          <SumButton numero='100'/>
        </section>
      </div>

      <div className='block'>
        <h1>R$ 200</h1>
        <section>
          <button className="buttondeposit">-</button>
          <SumButton numero='200'/>
        </section>
      </div>
    </div>
  );
}

export default SaquePage;