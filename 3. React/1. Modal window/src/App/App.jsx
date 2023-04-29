import { Component } from 'react';
import Button from '../Button';
import s from './App.module.scss';
import Modal from '../Modal';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openFirstModal: false,
            openSecondModal: false,
        };
    }

    openModal = nameModal => {
        this.setState({
            [nameModal]: true,
        });
    };

    closeModal = () => {
        this.setState({
            openFirstModal: false,
            openSecondModal: false,
        });
    };

    handleApprove = message => {
        alert(message);
        this.closeModal();
    };

    // ================================== //

    render() {
        const firstModal = () => {
            const modalText = (
                <div className={s.modalTextOrange}>
                    <p>Once you delete this file, it won't be possible to undo this action. </p>
                    <p>Are you sure you want to delete it?</p>
                </div>
            );
            const modalActions = (
                <div className={s.modalActions}>
                    <Button background={'darkorange'} text={'Ok'} onClick={() => this.handleApprove('You are agreed!')} />
                    <Button background={'darkorange'} text={'Cansel'} onClick={this.closeModal} />
                </div>
            );

            const modalData = {
                opened: this.state.openFirstModal,
                closed: this.closeModal,
                headerStyle: 'modalHeaderOrange',
                bodyStyle: 'modalBodyOrange',
                headerText: 'Do you want to delete this file?',
                iconClose: <div className={s.iconClose} onClick={this.closeModal}></div>,
                text: modalText,
                actions: modalActions,
            };
            return modalData;
        };

        const secondModal = () => {
            const modalText = (
                <div className={s.modalTextBlack}>
                    <p>All your changes will be deleted and you will no longer be able to access them. </p>
                </div>
            );
            const modalActions = (
                <div className={s.modalActions}>
                    <Button background={'white'} text={'Cansel'} onClick={this.closeModal} />
                    <Button background={'green'} text={'Yes, I’m sure'} onClick={() => this.handleApprove('You are agreed!')} />
                </div>
            );

            const modalData = {
                opened: this.state.openSecondModal,
                closed: this.closeModal,
                headerStyle: 'modalHeaderWhite',
                bodyStyle: 'modalBodyWhite',
                headerText: 'Are you sure?',
                iconClose: <div className={s.iconClose} onClick={this.closeModal}></div>,
                text: modalText,
                actions: modalActions,
            };
            return modalData;
        };

        return (
            <div className={s.App}>
                <Button background={'orangeTitular'} text={'Open first modal'} onClick={() => this.openModal('openFirstModal')} />
                <Button background={'greenTitular'} text={'Open second modal'} onClick={() => this.openModal('openSecondModal')} />

                <Modal {...firstModal()} />
                <Modal {...secondModal()} />
            </div>
        );
    }
}

export default App;
