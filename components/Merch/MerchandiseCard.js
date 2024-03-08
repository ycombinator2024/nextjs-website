export default function MerchandiseCard({item}) {
  return (
    <div>
      <img src={item.imgUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}