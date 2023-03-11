import "./Profile.css";

function Profile() {
    return (
        <div className="UserProfile" id="profile">
            <div>
                <h1>Hi, I am Mayank Sharma.</h1>
                <p>I am a Full Stack Web Developer with knowledge in Frontend and Backend technologies and I make user-friendly websites.</p>
                <button className="resume-button">
                    <a href="mayank-resume.pdf" download>Download Resume</a>
                </button>
            </div>
            <div>
                <img style={{ height: "300px", borderRadius: "50%", boxShadow: "0 0 10px black" }} src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512" alt="avatar" />
            </div>

        </div>
    );
}

export default Profile;