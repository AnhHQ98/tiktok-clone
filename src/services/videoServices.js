import * as httpRequest from '~/utils/httpRequest';

export const videoService = async (page = 1, per_page = 5) => {
    try {
        const res = await httpRequest.get('https://tiktok.fullstack.edu.vn/api/users/suggested?', {
            params: {
                page,
                per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
