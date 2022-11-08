import http from 'k6/http';
import { check, group, sleep } from 'k6';

// export let options = {
//    stages: [
//        { duration: '0.5m', target: 3 }, // simulate ramp-up of traffic from 1 to 3 virtual users over 0.5 minutes.
//        { duration: '0.5m', target: 4}, // stay at 4 virtual users for 0.5 minutes
//        { duration: '0.5m', target: 0 }, // ramp-down to 0 users
//      ],
// };

export const options = {
  vus: 1000, // Virtual Users
  duration: '20s'
};

// const allProducts = `http://localhost:3000/products?page=${Math.floor(Math.random() * 200)}&count=${Math.floor(Math.random() * 100)}`;
// const product = `http://localhost:3000/products/${Math.floor(Math.random() * 1000000) + 1}`;
// const styles = `http://localhost:3000/products/${Math.floor(Math.random() * 1000000) + 1}/styles`;
const related = `http://localhost:3000/products/${Math.floor(Math.random() * 1000000) + 1}/related`;

  // export let options = {
  //   scenarios: {
  //     constant_request_rate: {
  //       executor: "constant-arrival-rate",
  //       rate: 100,
  //       timeUnit: "1s",
  //       duration: "30s",
  //       preAllocatedVUs: 100,
  //       maxVUs: 100,
  //     },
  //   },
  // };

// export default () => {
//   let randomId = Math.round(Math.random() * 100000);
//   http.get(product
//   );
// };

export default function test() {
  // group('getAllProducts', () => {
  //   const allProductsResponse = http.get(allProducts);
  //   check(allProductsResponse, {
  //     'transaction time 10ms': (r) => r.timings.duration < 10,
  //     'transaction time 50ms': (r) => r.timings.duration < 50,
  //     'transaction time 200ms': (r) => r.timings.duration < 200,
  //     'transaction time 500ms': (r) => r.timings.duration < 500,
  //     'transaction time 1000ms': (r) => r.timings.duration < 1000,
  //     'transaction time 2000ms': (r) => r.timings.duration < 2000,
  //     'transaction time 5000ms': (r) => r.timings.duration < 5000,
  //     'transaction time 10s': (r) => r.timings.duration < 10000,
  //     'transaction time 20s': (r) => r.timings.duration < 20000,
  //   });
  // });

  // group('getProduct', () => {
  //   const getProductResponse = http.get(product);
  //   check(getProductResponse, {
  //     'transaction time 10ms': (r) => r.timings.duration < 10,
  //     'transaction time 50ms': (r) => r.timings.duration < 50,
  //     'transaction time 200ms': (r) => r.timings.duration < 200,
  //     'transaction time 500ms': (r) => r.timings.duration < 500,
  //     'transaction time 1000ms': (r) => r.timings.duration < 1000,
  //     'transaction time 2000ms': (r) => r.timings.duration < 2000,
  //     'transaction time 5000ms': (r) => r.timings.duration < 5000,
  //     'transaction time 10s': (r) => r.timings.duration < 10000,
  //     'transaction time 20s': (r) => r.timings.duration < 20000,
  //   });
  // });

  // group('getStyles', () => {
  //   const stylesResponse = http.get(styles);
  //   check(stylesResponse, {
  //     'transaction time 10ms': (r) => r.timings.duration < 10,
  //     'transaction time 50ms': (r) => r.timings.duration < 50,
  //     'transaction time 200ms': (r) => r.timings.duration < 200,
  //     'transaction time 500ms': (r) => r.timings.duration < 500,
  //     'transaction time 1000ms': (r) => r.timings.duration < 1000,
  //     'transaction time 2000ms': (r) => r.timings.duration < 2000,
  //     'transaction time 5000ms': (r) => r.timings.duration < 5000,
  //     'transaction time 10s': (r) => r.timings.duration < 10000,
  //     'transaction time 20s': (r) => r.timings.duration < 20000,
  //   });
  // });

  group('related', () => {
    const relatedResponse = http.get(related);
    check(relatedResponse, {
      'transaction time 10ms': (r) => r.timings.duration < 10,
      'transaction time 50ms': (r) => r.timings.duration < 50,
      'transaction time 200ms': (r) => r.timings.duration < 200,
      'transaction time 500ms': (r) => r.timings.duration < 500,
      'transaction time 1000ms': (r) => r.timings.duration < 1000,
      'transaction time 2000ms': (r) => r.timings.duration < 2000,
      'transaction time 5000ms': (r) => r.timings.duration < 5000,
      'transaction time 10s': (r) => r.timings.duration < 10000,
      'transaction time 20s': (r) => r.timings.duration < 20000,
    });
  });
}
