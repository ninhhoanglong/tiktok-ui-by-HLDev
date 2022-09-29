import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWraper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWraper>
                    <AccountPreview />
                </PopperWraper>
            </div>
        );
    };
    return (
        <>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1669930250749954.jpeg?x-expires=1663772400&x-signature=VIMMznQr%2FlDtaVbIaN%2BV%2FEQ4hiQ%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>ninhhoanglong</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Ninh Hoàng Long</p>
                    </div>
                </div>
            </Tippy>
        </>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
