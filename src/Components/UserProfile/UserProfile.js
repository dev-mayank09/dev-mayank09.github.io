import Button from "../Button/Button";
import "./UserProfile.css";

function UserProfile() {
    return (
        <div className="UserProfile">
            <div>
                <h1>Hi, I am Mayank Sharma.</h1>
                <p>I am Full Stack Web Developer and I have knowledge in HTML, CSS, JS, REACT and I make user-friendly websites.</p>
                <Button text="Download Resume" />
            </div>
            <div>
                <img style={{height: "300px", borderRadius: "50%"}} src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512" alt="avatar" />
            </div>

        </div>
    );
}

export default UserProfile;