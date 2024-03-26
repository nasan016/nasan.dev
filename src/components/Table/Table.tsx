import Cell from './cell'

interface Item {
  title1: string,
  title2?: string,
  title3?: string,  
  link: string
}

interface TableProps {
  title1: string,
  title2?: string,
  title3?: string,  
  cells: Array<Item>,
}

function Table(props: TableProps) {

  const tableCells= props.cells.map((ele, idx) => {
    return idx !== props.cells.length - 1 
          ? <Cell
              index = {"0 " + (idx + 1).toString()}
              title1={ele.title1}
              title2={ele.title2}
              title3={ele.title3}
              link={ele.link}
            />
          : <div style={{borderBottom: "solid 1px"}}>
              <Cell
              index = {"0 " + (idx + 1).toString()}
              title1={ele.title1}
              title2={ele.title2}
              title3={ele.title3}
              link={ele.link}
            />
          </div>
  })

  return (
    <div>
      <div className="projects-header">
        <div className="first-half">
          <h2 className="project-name">
              { props.title1 }
          </h2>
          <h2 className="project-language">
              { props.title2 }
          </h2>
        </div>
        <h2 className="project-description mobile-no-show">
            { props.title3 }
        </h2>
      </div>
      <div>
          { tableCells }
      </div>
    </div>
  )
}

export {
  Table
}

export default Table
