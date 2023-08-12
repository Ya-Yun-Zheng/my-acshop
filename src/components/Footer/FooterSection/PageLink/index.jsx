import "./PageLink.scss";

function PageLink(props) {
    return <a class="page-link" href={props.href}>{props.children}</a>
}

export default PageLink;