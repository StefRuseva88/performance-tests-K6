import http from 'k6/http'
import { sleep } from 'k6';

export const options = {
   stages: [
        {
           target: 10000,
           duration: "2m"
        },

        {
           target: 0,
           duration: "1m"
        }
   ]
};

export default function () {

    http.get('https://test.k6.io/news.php');
    sleep(1);

}