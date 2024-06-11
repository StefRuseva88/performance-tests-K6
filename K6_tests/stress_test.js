import http from 'k6/http'
import { sleep } from 'k6';

export const options = {
   stages: [
        {
           target: 20,
           duration: "15s"
        },

        {
           target: 20,
           duration: "1m"
        },

        {
           target: 0,
           duration: "15s"
        }
   ]
};

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);

}