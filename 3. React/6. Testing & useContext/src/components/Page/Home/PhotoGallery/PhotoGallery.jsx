import mainPhoto from '../../../../assets/img/Page/photoGallery/1.png';
import galleryPhotoNews from '../../../../assets/img/Page/photoGallery/2.png';
import galleryPhotoSales from '../../../../assets/img/Page/photoGallery/3.png';
import s from '../../../../style/components/pageHome/photoGallery.module.scss';

const PhotoGallery = () => {
    return (
        <div className={s.galleryWrapp}>
            <div className={s.galleryPhotoMainWrapp}>
                <img className={s.galleryPhotoMain} src={mainPhoto} alt={'mainPhoto'}></img>
            </div>
            <div className={s.galleryBlock}>
                <img src={galleryPhotoNews} alt={'galleryPhotoNews'}></img>
                <img src={galleryPhotoSales} alt={'galleryPhotoSales'}></img>
            </div>
        </div>
    );
};

export default PhotoGallery;
