import "./FooterSection.scss";

function FooterSection(props) {
    return (
        <section className="footer-section">
            {props.title && <h2 className="section-title">{props.title}</h2>}
            <div className="section-content">
                {props.children}
            </div>
        </section>
    )
}

export default FooterSection;