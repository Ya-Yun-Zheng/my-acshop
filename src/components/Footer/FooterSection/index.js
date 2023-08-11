import "./FooterSection.scss";

function FooterSection(props) {
    return (
        <section class="footer-section">
            {props.title && <h2 class="section-title">{props.title}</h2>}
            <div class="section-content">
                {props.children}
            </div>
        </section>
    )
}

export default FooterSection;