// Write your code here.
import './index.css'

const CardItem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="card-image">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
