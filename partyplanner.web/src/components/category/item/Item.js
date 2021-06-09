export default function Item({ item }) {
    return (
        <div className='subitem'>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
        </div>
    )
}