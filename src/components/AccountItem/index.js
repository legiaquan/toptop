import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/53717d55fc6695235b9bd588ffcba8e5~c5_300x300.webp?x-expires=1662825600&x-signature=yn9jJxBKXQp6VKwB9H66n7wRhLI%3D" alt="" />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <h4>Nguyen Van A</h4>
                    <FontAwesomeIcon className={cx("icon-check")} icon={faCheckCircle} />
                </p>
                <span className={cx("username")}>eqweq</span>
            </div>
        </div>
    );
}

export default AccountItem;