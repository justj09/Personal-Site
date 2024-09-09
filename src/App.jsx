import Sidebar from "./components/Sidebar.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import banner from './assets/banner.jpg';

function App() {
  return (
    <div id="page">
      <Sidebar />
      <div id="main-container">
        <img id="banner" src={banner} />
        <div id="main-content">
          <div>
            <ProjectCard 
              img="/placeholder.jpg"
              name="Name"
              description="This is where the description of the project goes."
            />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;