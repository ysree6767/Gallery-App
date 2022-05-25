// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onSelectThumbnail = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-image">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onSelectThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
