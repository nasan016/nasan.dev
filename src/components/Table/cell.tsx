interface CellProps {
  index: string,
  title1?: string,
  title2?: string,
  title3?: string,
  link: string,
}

function Cell(props: CellProps) {

  const openLink = () => {
    window.open(props.link, "_blank")    
  }

  const openEmail = () => {
    window.open(`mailto:${props.link}`, "_self")
  }

  const open = props.title1 === "Email" ? openEmail : openLink

  return (
    <button className="projects-container"
      onClick={() => open()}
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

      <div className="desc-link mobile-no-show">
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
