import lookBook from '../../../../assets/img/Page/lookBook/lookBook.png';
import s from '../../../../style/components/pageHome/lookBook.module.scss';

const LookBook = () => {
    return (
        <>
            <div className={s.lookBook}>
                <div className={s.lookBookImg}>
                    <img src={lookBook} alt="lookBook"></img>
                </div>
                <div className={s.lookBookInfo}>
                    <div className={s.lookBookInfoWrapp}>
                        <div className={s.lookBookTitle}>LOOKBOOK</div>
                        <div className={s.lookBookText}>При створені коллекцій ми враховуємо, щоб всі вироби поєднувались. Це дозволяє підібрати повний образ на всі випадки життя.</div>
                        <button className={s.lookBookButton}>Дивитись</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LookBook;
