import http from 'k6/http'
import { sleep } from 'k6';

export const options = {
   stages: [

        {
           target: 1000,
           duration: "5m"
        },

        {
           target: 1000,
           duration: "24h"
        },

        {
           target: 0,
           duration: "5m"
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