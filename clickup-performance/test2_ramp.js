import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '30s', target: 100 },
  ],
};

const TOKEN = __ENV.CLICKUP_API_TOKEN;

export default function () {
  const res = http.get('https://api.clickup.com/api/v2/user', {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
