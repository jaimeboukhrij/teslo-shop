export const Resume = () => {
  return (
    <div className='flex flex-col  gap-6'>
      <div className='flex flex-col gap-6 py-8'>
        <h3 className='font-semibold'>Resumen del pedido</h3>
        <div className='flex justify-between text-sm'>
          <span>Envio</span>
          <span>Gratis</span>
        </div>
        <div className='flex justify-between font-semibold'>
          <span>Subtotal</span>
          <span>130,00€</span>
        </div>
      </div>

    </div>
  )
}
