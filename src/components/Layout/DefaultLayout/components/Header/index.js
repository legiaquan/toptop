import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img height="42" width="118" src={images.logo} alt="Logo" />
            </div>
            <div className={cx('search')}>
                <input type="text" placeholder='Search...' />
                <button className={cx('clear')}>
                    {/* clear search*/}
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('actions')}>

            </div>
        </div>
    </header>
}

export default Header;