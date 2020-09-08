import Axios from 'axios';

export function getEventList(params: any) {
    console.log(params, 'params')
    return Axios({
        method: 'GET',
        url: 'http://127.0.0.1:7001/v3/events',
        responseType: 'json',
        params,
    }).then((res: any) => {
        const { data, status } = res;
        if(status === 200){
            return data.data.eventList.data;
        }
    });
}
