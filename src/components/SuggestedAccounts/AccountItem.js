import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function AccountItem() {
    const [acountSidebar, setAccountSidebar] = useState([]);
    const page = 1;
    const per_page = 5;
    useEffect(() => {
        try {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=${page}&per_page=${per_page}`)
                .then((res) => res.json())
                .then((res) => {
                    setAccountSidebar(res.data);
                    console.log(res.data);
                });
        } catch (error) {
            throw error;
        }
    }, []);

    return (
        <div className={cx('account-item')}>
            {acountSidebar.map((data, index) => {
                return (
                    <div className={cx('account-item-sidebar')}>
                        <div>
                            <img
                                className={cx('avatar')}
                                src={data.avatar}
                                alt=""
                            />
                        </div>
                        <div className={cx('item-info')}>
                            <h4 className={cx('nickname')}>
                                <strong>{data.nickname}</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </h4>
                            <p className={cx('name')}>{data.first_name} {data.last_name}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;