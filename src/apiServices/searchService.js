import * as http from '../utils/http';

export const search = async (query, type = 'less') => {
    try {
        const res = await http.get('users/search', {
            params: { q: query, type: type },
        });

        return res.data;
    } catch (error) {
        console.log('error: ', error);
    }
};
