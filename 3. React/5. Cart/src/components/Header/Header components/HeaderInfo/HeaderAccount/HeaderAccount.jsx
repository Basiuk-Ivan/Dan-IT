import account from '../../../../../assets/img/Header/iconInfo/account.svg';
import s from '../../../../../style/components/header.module.scss';

const HeaderAccount = () => {
    return (
        <div className={s.headerAccount}>
                <img src={account} alt={'account'}></img>
        </div>
    );
};

export default HeaderAccount;
