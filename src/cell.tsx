interface CellProps {
  index: string,
  h1: string,
  h2: string | undefined,
  h3: string,
  link?: string,
}

function Cell(props: CellProps) {

  const openLink = () => {
    window.open(props.link, "_blank", "noreferrer")    
  }

  return (
    <>
      <div className="projects-container"
        onClick={() => openLink()}
        >
        <div className="idx-name">
          <div className="idx">
            { props.index }
          </div>

          <div className="name">
            { props.h1 }
          </div>

        <div className="language">
          { props.h2 }
        </div>
        </div>

        <div className="desc-link">
          <div className="description">
            { props.h3 }
          </div>
          <div className="link">
            ↪
          </div>
      </div>
      </div>
    </>
  )
}

export {
  Cell
}

export default Cell
