// Write your code here.
import './index.css'

const CardItem = props => {
  const {carddetails} = props
  const {title, description, imgUrl, className} = carddetails
  return (
    <div>
      <li className={`${className} class-item`}>
        <h1 className="titleStyle">{title}</h1>
        <p className="descriptionStyle">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="dbImg" alt={title} />
        </div>
      </li>
    </div>
  )
}

export default CardItem
