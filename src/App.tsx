import './App.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Table from './Table.tsx'
import links from './links.ts'
import projects from './projects.ts'

function App() {
  return (
    <>
      <div>
        <div className="header">
          <Header/>
        </div>

        <div className="tables">
        <Table
          h1={"Projects"}
          h2={"Language"}
          h3={"Description"}
          cells={ projects }
        />
        <Table
          h1={"Website"}
          h3={"Link to"}
          cells={ links }
        />
        </div>

        </div>
      <Footer/>
    </>
  )
}

export default App
