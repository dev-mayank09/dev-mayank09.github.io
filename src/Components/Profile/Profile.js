import "./Profile.css";

function Profile() {
    return (
        <div className="UserProfile" id="profile">
            <div className="intro-div">
                <h1>Hi, I am Mayank Sharma.</h1>
                <p>I am a Full Stack Web Developer with knowledge in Frontend and Backend technologies and I make user-friendly websites.</p>
                <button className="resume-button">
                    <a href="Mayank_Sharma_Resume.pdf" download>Download Resume</a>
                </button>
            </div>
            <div className="avatar-div">
                <img id="avatar" src="my-photo-1.jpg" alt="avatar" />
            </div>

        </div>
    );
}

export default Profile;