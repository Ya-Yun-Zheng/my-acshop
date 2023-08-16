import "./PageLink.scss";

function PageLink(props) {
    return <a className="page-link" href={props.href}>{props.children}</a>
}

export default PageLink;