import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            // Handle change language
            break;
        default:
    }
    console.log('menuItem: ', menuItem);
};

function Header() {
    const [searchResult, setSearchResult] = useState('');
    const inputSearch = useRef(null);

    useEffect(() => {
        inputSearch.current.addEventListener('input', () => {
            setSearchResult(inputSearch.current.value);
        });

        return () =>
            inputSearch.current.removeEventListener('oninput', () => {
                setSearchResult(inputSearch.current.value);
            });
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img height="42" width="118" src={images.logo} alt="Logo" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult?.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Search..."
                            name="search"
                            id="search"
                            ref={inputSearch}
                        />
                        <button className={cx('clear')}>
                            {/* clear search*/}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>

                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-button')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
