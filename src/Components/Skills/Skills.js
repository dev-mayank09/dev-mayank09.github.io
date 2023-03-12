import SkillCard from '../SkillCard/SkillCard';
import './Skills.css';

function Skills(props) {
    return <div className="Skills" id="skills">
        <h1 className='section-heading'>SKILLS</h1>
        <div className="skillsContainer">
            <SkillCard image="icons/html-icon.png" skill_name="HTML" />
            <SkillCard image="icons/css-icon.png" skill_name="CSS" />
            <SkillCard image="icons/js-icon.png" skill_name="JavaScript" />
            <SkillCard image="icons/react-icon.png" skill_name="ReactJS" />
            <SkillCard image="icons/redux-icon.svg" skill_name="Redux" />
            <SkillCard image="icons/nodejs-icon.svg" skill_name="NodeJS" />
            <SkillCard image="icons/express-icon.svg" skill_name="ExpressJS" />
            <SkillCard image="icons/mongodb-icon.svg" skill_name="MongoDB" />
            <SkillCard image="icons/github-icon.png" skill_name="Git/Github" />
            <SkillCard image="icons/postman-icon.svg" skill_name="Postman" />
        </div>
    </div>
}

export default Skills;