import './Projects.css';
import ProjectCard from '../ProjectCard/Projectcard';

function Projects(props) {
    return <div className="Projects" id="projects">
        <h1 className='section-heading'>PROJECTS</h1>
        <ProjectCard image="project-images/project_image_1.png" title="Bewakoof.com Clone" desc="Bewkoof.com is the clone of an Ecommerce Website which deliver products to their customers . We have used lots of functionality in this website. The tech stack is used here is Html, Css and Javascript" type="A collaborative project, built in 5 days by a team of 4 developers." tech_stack={["HTML", "CSS", "Javascript"]} github_link="https://github.com/DenishFuletra/ProjectBewkoof" website_link="https://bewakoof-clone-cw.netlify.app" />
        <ProjectCard image="project-images/project_image_2.png" title="Asos.com Clone" desc="A global online fashion and beauty retailer. It offers branded and own label products, including women's wear, men's wear, footwear, accessories and jewelry and beauty products.This is a clone of the e-commerce website asos.com" type="A collaborative project, built in 5 days by a team of 5 developers." tech_stack={["HTML", "CSS", "Javascript"]} github_link="https://github.com/nitika02/Asos" website_link="https://asos-clone-cw.netlify.app" />
        <ProjectCard image="project-images/project_image_3.png" title="MyFitnessPal Clone" desc="Myfitnesspal is a health and fitness management website where users get customized diet and calorie requirements based on their lifestyle and fitness goals. The users can keep a track of their everyday meals and workouts and monitor their health effectively." type="A collaborative project, built in 5 days by a team of 4 developers." tech_stack={["HTML", "CSS", "Javascript", "React", "Redux"]} github_link="https://github.com/dilasathapa/myfitnesspal-clone" website_link="https://cw-06-myfitnesspal.netlify.app/" />
    </div>
}

export default Projects;