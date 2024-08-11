import './index.css'

const VisitedCountry = props => {
  const {eachItem, onRemove} = props
  const {id, name, isVisited, imageUrl} = eachItem
  const onDelete = () => {
    onRemove(id)
  }
  return (
    <li className="list-item">
      <img src={imageUrl} alt="thumbnail" className="flag-image" />
      <div className="country-info-container">
        <p className="text-styling">{name}</p>
        <button
          type="button"
          className="remove-button-styling"
          onClick={onDelete}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
