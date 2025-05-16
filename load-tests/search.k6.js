import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 10, // users
  duration: '30s', // test duration
};

export default function () {
  const res = http.get('https://www.moe.gov.sg/search?q=primary');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 1s': (r) => r.timings.duration < 1000,
  });
  sleep(1);
}
