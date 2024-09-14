import Sidebar from "./components/Sidebar.jsx";
import Carousel from "./components/Carousel.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import banner from './assets/banner.jpeg';

function App() {
    return (
        <div className="flex-horizontal">
        <Sidebar />
        <div className="flex-vertical flex-fill">
            <img className="banner" src={banner} />
            <div id="main-content">
                <div id="about-section" className="section">
                    <h2 className="underscore-header">Title</h2>
                    <p>This is the content </p>
                </div>
                <div className="divider"/>
                <div id="project-section" className="section">
                    <div>
                    <h2 className="underscore-header">My Projects</h2>
                    </div>
                    <Carousel>
                    <ProjectCard description="asdass"/>
                    <ProjectCard description="asdcvas"/>
                    <ProjectCard description="asdsadasdsasada dasdsasada dasdasdaasdaa dasdsasada dasdasdaasdaa dasdasdaasdaasda"/>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    </Carousel>
                    <div className="divider"/>
                </div>
                <div id="bbb" className="section">b</div>
                <div className="spacer"/>
                <div className="spacer"/>
                <div className="spacer"/>
                <div id="ccc" className="section">c</div>
            </div>

            <div className="spacer"/>

            <div className="footer">
            <p>asikjdsajlkdjhnsaljkjdnhsjkahdakjs</p>
            </div>
        </div>
        </div>
    )
}

export default App;