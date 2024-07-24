import './index.css'

const HistoryItems = props => {
  const {historyList, deleteHistory, key, updateSearch} = props
  const {id, timeAccessed, title, logoUrl, domainUrl} = historyList

  const onDelete = () => {
    deleteHistory(id)
  }
  const onClicking = () => {
    updateSearch(title)
  }

  return (
    <li className="list-elements" onClick={onClicking}>
      <div className="card">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domian">{domainUrl}</p>
        <button
          data-testid="delete"
          type="button"
          onClick={onDelete}
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
