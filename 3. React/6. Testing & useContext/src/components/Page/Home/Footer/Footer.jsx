import footerLogo from '../../../../assets/img/Page/footer/footerLogo.svg';
import s from '../../../../style/components/footer.module.scss';

const Footer = () => {
    const footerDesk = ['2021 Інтернет-магазин LOYLEN', 'Всі права захищені', 'Розробка дизайну'];
    const footerTextCatalog = ['Новинки', 'Розпродаж', 'Готові зразки', 'Всі товари'];
    const footerTextCustomer = ['Особистий кабінет', 'Таблиця розмірів', 'Доставка і оплата', 'Повернення'];
    const footerTextAboutUs = ['Про бренд', 'Контакти', 'Оферта', 'Політика'];

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
                        {footerDesk.map(item => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className={s.footerInfo}>
                    <div className={s.footerInfoWrapp}>
                        <div className={s.footerInfoCatalog}>
                            <div className={s.footerInfoCatalogTitle}>Каталог</div>
                            <ul className={s.footerInfoText}>
                                {footerTextCatalog.map(item => (
                                    <li key={item}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={s.footerInfoCustomer}>
                            <div className={s.footerInfoCatalogTitle}>Покупець</div>
                            <ul className={s.footerInfoText}>
                                {footerTextCustomer.map(item => (
                                    <li key={item}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={s.footerInfoAbout}>
                            <div className={s.footerInfoCatalogTitle}>Про нас</div>
                            <ul className={s.footerInfoText}>
                                {footerTextAboutUs.map(item => (
                                    <li key={item}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
