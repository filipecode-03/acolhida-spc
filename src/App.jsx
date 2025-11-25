import logoAcolhida from './assets/images/Mask_group.png'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className='bg-[#003049] flex gap-3 py-5 px-5'>
        <img src={logoAcolhida} alt="logo" className='h-[80px] w-[80px] ml-auto' />
        <div className='flex flex-col justify-center mr-auto'>
          <h1 className="font-bold text-white uppercase leading-none">
            <span className="block">Operação</span>
            <span className="block">Acolhida</span>
          </h1>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App
