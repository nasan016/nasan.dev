interface CellProps {
  index: string,
  title1?: string,
  title2?: string,
  title3?: string,
  link?: string,
}

function Cell(props: CellProps) {

  const openLink = () => {
    window.open(props.link, "_blank", "noreferrer")    
  }

  return (
    <button className="projects-container"
      onClick={() => openLink()}
      >
      <div className="idx-name">
        <div className="idx">
          { props.index }
        </div>

        <div className="name">
          { props.title1 }
        </div>

      <div className="language">
        { props.title2 }
      </div>
      </div>

      <div className="desc-link">
        <div className="description">
          { props.title3 }
        </div>
        <div className="link">
          ↪
        </div>
      </div>
    </button>
  )
}

export {
  Cell
}

export default Cell
