export default function Product(props) {
  return (
    <article className="product">
      <div className="product__content">
        <h4 className="product__title">{props.title}</h4>
        <p className="product__subscript">{props.subscript}</p>
        <small className="product__price">{props.price}</small>
      </div>
      <div
        className="product__img"
        style={{ backgroundImage: `url(${props.imageSrc})` }}
      ></div>
    </article>
  );
}
