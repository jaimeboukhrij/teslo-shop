export const Resume = () => {
  return (
    <div className='flex flex-col  gap-6'>
      <div className='flex flex-col gap-6 py-8'>
        <div>
          <h3 className='font-semibold md:text-2xl'>Direccion de entrega</h3>
          <p>Jaime Boukhrij</p>
          <p>Calle real 27</p>
          <p>Madrid, Madrid</p>
          <p>CP 28702</p>
          <p>684343434</p>
        </div>
        <div className='h-0.5 bg-gray-200 w-full rounded-lg' />
        <h3 className='font-semibold md:text-2xl'>Resumen del pedido</h3>
        <div className='flex justify-between text-sm md:text-lg '>
          <span>Envio</span>
          <span>Gratis</span>
        </div>
        <div className='flex justify-between font-semibold  md:text-xl'>
          <span>Subtotal</span>
          <span>130,00€</span>
        </div>
      </div>

    </div>
  )
}
