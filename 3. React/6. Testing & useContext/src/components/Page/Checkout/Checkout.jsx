import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/slice/cartItems';
import Footer from '../Home/Footer/Footer';
import s from '../../../style/components/pageCheckout/pageCheckout.module.scss';

export const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems.cartItems);

    const total = cartItems.reduce((acum, product) => {
        return acum + product.price;
    }, 0);

    const currency = cartItems.find(prod => prod.currency)?.currency;

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            city: '',
            street: '',
            house: '',
            appartment: '',
        },

        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Заповніть поле'),
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Заповніть поле'),
            age: Yup.number().required('Заповніть поле'),
            email: Yup.string().email('Введіть коректний email адрес').required('Заповніть поле'),
            city: Yup.string().required('Заповніть поле'),
            street: Yup.string().required('Заповніть поле'),
            house: Yup.number().required('Заповніть поле'),
            appartment: Yup.number().required('Заповніть поле'),
        }),

        onSubmit: (values, { resetForm }) => {
            console.log(values);
            console.log('cartItems:', cartItems);
            // dispatch({ type: types.CLEAR_CART });
            dispatch(clearCart());

            const article = cartItems[0].article;

            localStorage.removeItem('cartItem_' + article);
            localStorage.removeItem('cartItems');
            resetForm();
            alert('Замовлення відправлено');
        },
    });
    return (
        <>
            <div className={s.title}>Оформлення замовлення</div>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <div className={s.formBody}>
                    <div className={s.formPerson}>
                        <input
                            className={s.input}
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Введіть ваше ім'я"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? <div className={s.error}>{formik.errors.firstName}</div> : null}

                        <input
                            className={s.input}
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Введіть ваше прізвище"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? <div className={s.error}>{formik.errors.lastName}</div> : null}

                        <input
                            className={s.input}
                            id="age"
                            name="age"
                            type="number"
                            placeholder="Введіть ваш вік"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.age}
                        />
                        {formik.touched.age && formik.errors.age ? <div className={s.error}>{formik.errors.age}</div> : null}

                        <input
                            className={s.input}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Введіть вашу електронну пошту"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? <div className={s.error}>{formik.errors.email}</div> : null}
                    </div>
                    <div className={s.formAdress}>
                        <input
                            className={s.input}
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Введіть ваше місто"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                        />
                        {formik.touched.city && formik.errors.city ? <div className={s.error}>{formik.errors.city}</div> : null}

                        <input
                            className={s.input}
                            id="street"
                            name="street"
                            type="text"
                            placeholder="Введіть вашу вулицю"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.street}
                        />
                        {formik.touched.street && formik.errors.street ? <div className={s.error}>{formik.errors.street}</div> : null}

                        <input
                            className={s.input}
                            id="house"
                            name="house"
                            type="number"
                            placeholder="Введіть номер будинку"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.house}
                        />
                        {formik.touched.house && formik.errors.house ? <div className={s.error}>{formik.errors.house}</div> : null}

                        <input
                            className={s.input}
                            id="appartment"
                            name="appartment"
                            type="number"
                            placeholder="Введіть номер квартири"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.appartment}
                        />
                        {formik.touched.appartment && formik.errors.appartment ? <div className={s.error}>{formik.errors.appartment}</div> : null}
                    </div>
                    <div className={s.formButton}>
                        <div className={s.totalPrice}>
                            <div className={s.priceTogether}>Разом до оплати</div>
                            <div className={s.priceAll}>
                                <div className={s.priceTogether}>{total}</div>
                                <div className={s.priceTogether}>{currency}</div>
                            </div>
                        </div>
                        {cartItems.length ? (
                            <button className={s.buttonCheckout} type="submit">
                                Замовлення підтверджую
                            </button>
                        ) : (
                            <button className={s.buttonCheckout} type="submit">
                                Замовлення відправлено
                            </button>
                        )}
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
};
