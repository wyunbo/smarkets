import Axios from 'axios';

export function getEventList(params: any) {
    const { REACT_APP_API_URL } = process.env;
    return Axios({
        method: 'GET',
        url: `${REACT_APP_API_URL}/v3/events`,
        responseType: 'json',
        params,
    }).then((res: any) => {
        const { data, status } = res;
        if(status === 200){
            return data.data.eventList;
        }
    });
}
