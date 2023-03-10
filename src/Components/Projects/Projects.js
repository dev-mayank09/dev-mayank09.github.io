import './Projects.css';
import ProjectCard from '../ProjectCard/Projectcard';

function Projects(props) {
    return <div className="Projects">
        <h1>PROJECTS</h1>
        <ProjectCard image="./project_image_1.png" title="BEWAKOOF.COM CLONE" desc="Online Shopping Site for Men, Women & Accessories. Choose from the best in Men Clothing and Women Fashion Wear. Trendiest designs and styles available at Bewakoof.com. Select from a diverse range of clothes online. Shop from the best online shopping site for clothes. Free Shipping, Easy Returns, COD Available!" type="A collaborative project, built in 5 days by a team of 4 developers." tech_stack={["HTML", "CSS", "Javascript"]} github_link="https://github.com/DenishFuletra/ProjectBewkoof" website_link="https://bewakoof-clone-cw.netlify.app" />
        <ProjectCard image="./project_image_2.png" title="ASOS.COM CLONE" desc="Shop for the latest fashion styles and trends for men and women at ASOS. Discover our range of men's and women's clothes, accessories, beauty, activewear, shoes, bags, watches and more." type="A collaborative project, built in 5 days by a team of 5 developers." tech_stack={["HTML", "CSS", "Javascript"]} github_link="https://github.com/nitika02/Asos" website_link="https://asos-clone-cw.netlify.app" />
        <ProjectCard image="./project_image_3.png" title="MYFITNESSPAL CLONE" desc="Myfitnesspal is a health and fitness management website where users get customized diet and calorie requirements based on their lifestyle and fitness goals. The users can keep a track of their everyday meals and workouts and monitor their health effectively." type="A collaborative project, built in 5 days by a team of 4 developers." tech_stack={["HTML", "CSS", "Javascript", "React"]} github_link="https://github.com/dilasathapa/myfitnesspal-clone" website_link="https://cw-06-myfitnesspal.netlify.app/" />
    </div>
}

export default Projects;