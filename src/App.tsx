import './App.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Table from './components/Table/Table.tsx'
import links from './store/links.ts'
import projects from './store/projects.ts'

function Tables() {
  return (
    <>
    <div className="tables">
      <Table
      title1={"Projects"}
      title2={"Language"}
      title3={"Description"}
      cells={ projects }
      />
      <Table
      title1={"Website"}
      title3={"Link to"}
      cells={ links }
      />
  </div>
  </>
  )
}

function App() {
  return (
    <>
    <Header/>
    <Tables/>
    <Footer/>
    </>
  )
}

export default App
