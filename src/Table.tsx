import Cell from './cell'

interface Item {
  h1: string,
  h2?: string,
  h3: string,  
  link?: string
}

interface TableProps {
  h1: string,
  h2?: string,
  h3: string,  
  cells: Array<Item>,
}

function Table(props: TableProps) {

  let tableCells= props.cells.map((ele, idx) => {
    return idx !== props.cells.length - 1 
          ? <Cell
              index = {"0 " + (idx + 1).toString()}
              h1={ele.h1}
              h2={ele.h2}
              h3={ele.h3}
            />
          : <div style={{borderBottom: "solid 1px"}}>
              <Cell
              index = {"0 " + (idx + 1).toString()}
              h1={ele.h1}
              h2={ele.h2}
              h3={ele.h3}
            />
          </div>
  })

  return (
    <>
      <div>
      <div className="projects-header">
        <div className="first-half">
          <div className="project-name">
            { props.h1 }
          </div>
          <div className="project-language">
            { props.h2 }
          </div>
        </div>
        <div className="project-description">
          { props.h3 }
        </div>
      </div>
      <div>
        { tableCells }
      </div>
      </div>
    </>
  )
}

export {
  Table
}

export default Table
