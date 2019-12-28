import React, { Component } from 'react'
import { createContext } from 'react';

export const ModalContext = createContext({
    component: null,
    props: {},
    isOpen: false,
    showModal: () => {},
    hideModal: () => {}
});

class ModalProvider extends Component {
    showModal = (component, props = {}) => {
        this.setState({
            component,
            props,
            isOpen: true
        });
    };

    hideModal = () => this.setState({
        isOpen: false
    });

    state = {
        component: null,
        props: {},
        isOpen: false,
        showModal: this.showModal,
        hideModal: this.hideModal
    };

    render() {
        return (
            <ModalContext.Provider value={this.state}>
                {this.props.children}
            </ModalContext.Provider>
        );
    }
}

export default ModalProvider