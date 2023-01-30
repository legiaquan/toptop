import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function AccountItem({ data, ...props }) {
    const renderPreivew = () => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <HeadlessTippy
            interactive
            delay={[500, 0]}
            offset={[-15, 0]}
            placement="bottom"
            render={renderPreivew}
        >
            <div className={cx('account-item')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1674288000&x-signature=ssacI73h4sDiWs5vw2ZXOu72wQ8%3D"
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>theanh123123</strong>
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    </p>
                    <p className={cx('name')}>The Anh</p>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default AccountItem;
