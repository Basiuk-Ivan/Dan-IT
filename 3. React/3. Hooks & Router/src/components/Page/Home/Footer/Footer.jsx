import footerLogo from '../../../../assets/img/Page/footer/footerLogo.svg';
import s from '../../../../style/components/footer.module.scss';

const Footer = () => {
    return (
        <>
            <div className={s.footer}>
                <div className={s.footerContact}>
                    <div className={s.footerLogo}>
                        <img src={footerLogo} alt={'footerLogo'}></img>
                    </div>
                    <div className={s.footerContacts}>
                        <p>Потрібна допомога з замовленням?</p>
                        <p>
                            <a href="tel:+380993242484">+380 99 324 24 84</a>
                        </p>
                        <p>
                            <a href="mailto:info@loylen.com">info@loylen.com</a>
                        </p>
                    </div>
                    <div className={s.footerDesk}>
                        <p>2021 Інтернет-магазин LOYLEN</p>
                        <p>Всі права захищені</p>
                        <p>Розробка дизайну</p>
                    </div>
                </div>
                <div className={s.footerInfo}>
                    <div className={s.footerInfoWrapp}>
                        <div className={s.footerInfoCatalog}>
                            <div className={s.footerInfoCatalogTitle}>Каталог</div>
                            <ul className={s.footerInfoText}>
                                <li>
                                    <a href="#">Новинки</a>
                                </li>
                                <li>
                                    <a href="#">Розпродаж</a>
                                </li>
                                <li>
                                    <a href="#">Готові зразки</a>
                                </li>
                                <li>
                                    <a href="#">Всі товари</a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.footerInfoCustomer}>
                            <div className={s.footerInfoCatalogTitle}>Покупець</div>
                            <ul className={s.footerInfoText}>
                                <li>
                                    <a href="#">Особистий кабінет</a>
                                </li>
                                <li>
                                    <a href="#">Таблиця розмірів</a>
                                </li>
                                <li>
                                    <a href="#">Доставка і оплата</a>
                                </li>
                                <li>
                                    <a href="#">Повернення</a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.footerInfoAbout}>
                            <div className={s.footerInfoCatalogTitle}>Про нас</div>
                            <ul className={s.footerInfoText}>
                                <li>
                                    <a href="#">Про бренд</a>
                                </li>
                                <li>
                                    <a href="#">Контакти</a>
                                </li>
                                <li>
                                    <a href="#">Оферта</a>
                                </li>
                                <li>
                                    <a href="#">Політика</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
