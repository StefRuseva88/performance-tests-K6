import http from 'k6/http'
import { sleep } from 'k6';

export const options = {
   ext: {
      loadimpact: {
      projectID:3690409
      }
  },
   stages: [

        {
           target: 10,
           duration: "15s"
        },

        {
           target: 10,
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