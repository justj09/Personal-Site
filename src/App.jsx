import Sidebar from "./components/Sidebar.jsx";
import Carousel from "./components/Carousel.jsx";
import banner from './assets/Untitled.png';
import ProjectCard from "./components/ProjectCard.jsx";

function App() {
  return (
    <div id="page">
      <Sidebar />
      <div id="main-container">
        <img id="banner" src={banner} />
        <div id="main-content">
          <div>
            <Carousel>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
            </Carousel>
          </div>
        </div>

        <div id="spacer"/>

        <div className="footer">
          <p>asikjdsajlkdjhnsaljkjdnhsjkahdakjs</p>
        </div>
      </div>
    </div>
  )
}

export default App;