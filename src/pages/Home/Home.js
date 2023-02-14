import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.scss';

const cx = classNames.bind(styles);

function Home() {
    const [video1, setVideo1] = useState([]);
    const page = 1;
    const per_page = 5;
    useEffect(() => {
        try {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=${page}&per_page=${per_page}`)
                .then((res) => res.json())
                .then((res) => {
                    setVideo1(res.data);
                });
        } catch (error) {
            throw error;
        }
    }, []);

    return (
        <div className={cx('wrapper')}>
            {video1?.map((data, index) => {
                return (
                    <div className={cx('video-wrapper')} key={index}>
                        <a href="">
                            <img className={cx('avatar')} src={data.avatar} alt="avatar" />
                        </a>
                        <div className={cx('video-content')}>
                            <div className={cx('video-info')}>
                                <div className={cx('video-info__text')}>
                                    <a href="">
                                        <p className={cx('video-info__text__name')}>{data.nickname}</p>
                                    </a>
                                    <p className={cx('video-info__caption')}>{data.popular_video.description}</p>
                                    <div className={cx('video-info__music')}>
                                        <svg
                                            className="Video_icon__SFRNy"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 48 48"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
                                            ></path>
                                        </svg>
                                        <a className={cx('name-of-song')} href="">
                                            {data.popular_video.music}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('video-video')}>
                                <div className={cx('video-video__card')}>
                                    <video
                                        className={cx('video-video__card__video')}
                                        controls
                                        autoPlay="autoPlay"
                                        src={data.popular_video.file_url}
                                        type="video/mp4"
                                    ></video>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
