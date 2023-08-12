import "./Footer.scss";
import FooterSection from "./FooterSection";
import LogoContainer from "./FooterSection/LogoContainer";
import PageLink from "./FooterSection/PageLink";
import SocialIconGroup from "./FooterSection/SocialIconGroup";
import TelInfo from "./FooterSection/TelInfo";

function Footer() {
    return (
        <footer class="site-footer">
            <div class="footer-container">
                <FooterSection>
                    <LogoContainer />
                </FooterSection>
                <FooterSection title="客戶服務">
                    <PageLink href="#">運送說明</PageLink>
                    <PageLink href="#">退換貨相關</PageLink>
                    <PageLink href="#">付款資訊</PageLink>
                    <PageLink href="#">FAQ</PageLink>
                </FooterSection>
                <FooterSection title="關於我們">
                    <PageLink href="#">品牌故事</PageLink>
                    <PageLink href="#">媒體聯繫</PageLink>
                    <PageLink href="#">Press kit</PageLink>
                </FooterSection>
                <FooterSection title="資訊">
                    <PageLink href="#">隱私權政策</PageLink>
                    <PageLink href="#">Cookie</PageLink>
                    <PageLink href="#">GDPR</PageLink>
                </FooterSection>
                <FooterSection title="追蹤 ALPHA Shop">
                    <TelInfo>+886 02123-45678</TelInfo>
                    <SocialIconGroup icons={[
                        "/icons/facebook.svg",
                        "/icons/instagram.svg",
                        "/icons/whatsapp.svg"
                    ]}/>
                </FooterSection>
            </div>
        </footer>
    )
    
}

export default Footer;