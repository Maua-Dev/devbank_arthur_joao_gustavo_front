import '../styles/Depositpage.css'
import '@components/LessButton'
import '@components/SumButton'

function DepositPage() {
  return (
    <div className='deposito'>
      <h1>Pagina de deposito</h1>
      <div className='block'>
       <h1>R$ 2</h1>
       <section>
        <button className="buttondeposit">-</button>
        <button className="buttondeposit">+</button>
       </section> 
      </div>

      <div className='block'>
       <h1>R$ 5</h1>
       <section>
        <button className="buttondeposit">-</button>
        <button className="buttondeposit">+</button>
       </section>
      </div>

      <div className='block'>
       <h1>R$ 10</h1>
       <section>
        <button className="buttondeposit">-</button>
        <button className="buttondeposit">+</button>
       </section>
      </div>

      <div className='block'>
       <h1>R$ 20</h1>
       <section>
        <button className="buttondeposit">-</button>
        <button className="buttondeposit">+</button>
       </section>
      </div>

      <div className='block'>
       <h1>R$ 50</h1>
       <section>
        <button className="buttondeposit">-</button>
        <button className="buttondeposit">+</button>
       </section>
      </div>

      <div className='block'>
       <h1>R$ 100</h1>
       <section>
        <button className="buttondeposit">-</button>
        <button className="buttondeposit">+</button>
       </section>
      </div>
      
      <div className='block'>
       <h1>R$ 200</h1>
       <section>
        <button className="buttondeposit">-</button>
        <button className="buttondeposit">+</button>
       </section>
      </div>
      
    </div>
  );
}

export default DepositPage;