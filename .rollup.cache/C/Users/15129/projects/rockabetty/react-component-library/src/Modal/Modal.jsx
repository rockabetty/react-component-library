import React, { useEffect } from 'react';
import classNames from 'classnames';
import '../design/style.css';
import './Modal.css';
import Icon from '../Icon';
import { Button, ButtonSet } from '../Button';
const Modal = ({ actionButtonLabel = '', ariaLabel = '', children, classes = '', closeButtonLabel = 'Close', heading, isAlert, id = '', isOpen, isWarning, onAction = () => { }, onClose = () => { }, onKeyDown = () => { }, persistent, size, scrolls, }) => {
    const doButtonBay = function () {
        return actionButtonLabel;
    };
    const trapFocus = function () {
        if (isOpen) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.focus();
            }
        }
    };
    useEffect(() => {
        trapFocus();
    }, [isOpen]);
    const checkEscape = function (e) {
        if (e.code === 'Escape') {
            if (!persistent) {
                onClose();
            }
        }
    };
    const checkClickOut = function (e) {
        const clickedNode = e.target;
        const classList = clickedNode.classList.value.split(' ');
        if (classList.includes('modal')) { // then we are clicking outside of the content
            if (!persistent) {
                onClose();
            }
        }
    };
    return (<>
      <div tabIndex={0} onFocus={trapFocus}>
      </div>
      <dialog aria-hidden={!isOpen} aria-label={ariaLabel ? ariaLabel : heading || 'Modal'} className={`modal ${classes} ${classNames({
            Open: isOpen,
            Closed: !isOpen,
            Alert: isAlert,
            Warning: isWarning,
            Medium: size === 'md' || !!size,
            Large: size === 'lg',
            Small: size === 'sm'
        })}`
            .trim()} id={id} onClick={(e) => { checkClickOut(e); }} onKeyUp={(e) => { checkEscape(e); }} onKeyDown={(e) => { onKeyDown(e); }} role={isAlert ? 'alertdialog' : 'dialog'} tabIndex={-1} open={isOpen}>
        <div className={`modal_content ${classNames({
            Scrolling: scrolls,
            Small: size === 'sm',
            Medium: size === 'md',
            Large: size === 'lg',
        })}`.trim()}>
          <div className="modal_header">
            <span className="modal_title">{heading}</span>
            <button type="button" className="modal_close" onClick={() => { onClose(); }} aria-label={closeButtonLabel}>
              <Icon id={`${id}-close-icon`} width={24} height={24} viewbox={'0 0 16 16'} name="close"/>
            </button>
          </div>
          <div className="modal_body">
            {children}
          </div>
          {doButtonBay() ?
            (<div className="modal_footer">
                  <ButtonSet>
                    <Button id={`${id}-close`} type="button" onClick={() => { onClose(); }} look="muted">
                      {closeButtonLabel}
                    </Button>
                    <Button id={`${id}-action`} type="button" onClick={() => { onAction(); }} look="primary">
                      {actionButtonLabel}
                    </Button>
                  </ButtonSet>
                </div>)
            :
                null}
        </div>
      </dialog>
      <div tabIndex={0} onFocus={trapFocus}>
      </div>
    </>);
};
export default Modal;
//# sourceMappingURL=Modal.jsx.map