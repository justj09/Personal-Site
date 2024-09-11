import Sidebar from "./components/Sidebar.jsx";
import Carousel from "./components/Carousel.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import banner from './assets/banner.jpeg';

function App() {
  return (
    <div className="flex-horizontal">
      <Sidebar />
      <div className="flex-vertical flex-fill">
        <img id="banner" src={banner} />
        <div id="main-content">
          <div>
            <h1>Title</h1>
            <p>This is the content </p>
          </div>
          <div className="divider"/>
          <Carousel>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
          </Carousel>
          <div className="divider"/>
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