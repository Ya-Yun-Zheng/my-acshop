import SocialIcon from "./SocialIcon";

function SocialIconGroup(props) {
    return <div class="social-icon-group">
        {props.icons.map(icon => <SocialIcon src={icon} />)}
    </div>
}

export default SocialIconGroup;