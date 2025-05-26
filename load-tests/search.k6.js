//Goal: Fail the CI build if performance drops (e.g. latency > 1s)

import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<1000'], // 95% of requests must complete < 1s
    http_req_failed: ['rate<0.01'], // less than 1% failure rate
  },
};

export default function () {
  const res = http.get('https://www.moe.gov.sg/search?q=primary');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
