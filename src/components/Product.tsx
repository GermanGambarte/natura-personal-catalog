interface Props {
  name: string
  image: string
  description: string
  previousPrice: number
  currentPrice: number
}
export const Product: React.FC<Props> = ({
  name,
  image,
  description,
  previousPrice,
  currentPrice
}) => {
  const formatPrice = (value: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(value)
  }
  return (
    <article className='w-80 bg-custom-bg-secondary rounded-2xl overflow-hidden'>
      <img src={image} alt={`imagen de ${description} ${name}`} />
      <div className='p-4 grid gap-4 justify-between'>
        <h2 className='text-2xl text-custom-fg-secondary font-bold'>
          {description} {name}
        </h2>
        {previousPrice !== 0 && (
          <p className='text-custom-disable line-through text-2xl'>
            {formatPrice(previousPrice)}
          </p>
        )}
        <p className='text-custom-accent-primary text-3xl'>
          {formatPrice(currentPrice)}
        </p>
      </div>
    </article>
  )
}
