import SocialIcon from "./SocialIcon";

function SocialIconGroup(props) {
    return <div className="social-icon-group">
        {props.icons.map((icon, index) => <SocialIcon key={index} src={icon} />)}
    </div>
}

export default SocialIconGroup;