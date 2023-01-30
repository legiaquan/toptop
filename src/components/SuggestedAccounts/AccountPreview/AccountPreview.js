import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountPreview = (props) => {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1674288000&x-signature=ssacI73h4sDiWs5vw2ZXOu72wQ8%3D"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>theanh123123</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>The Anh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <strong className={cx('label')}>Followers</strong>
                    <strong className={cx('value')}>8.2M</strong>
                    <strong className={cx('label')}>Likes</strong>
                </p>
            </div>
        </div>
    );
};

// AccountPreview.propTypes = {};

export default AccountPreview;
