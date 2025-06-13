# ClickUp API Performance Testing

This repository contains performance tests for the ClickUp API using [k6](https://k6.io), focusing on the `GET /user` endpoint (Get Authorized User).

##  Target Endpoint

**GET** `https://api.clickup.com/api/v2/user`

Used to validate authorized users via API token.

---

##  Test Scenarios

### test1_spike.js
Simulates:
-  10 users/sec for 20 seconds
-  Spike to 100 users/sec for 5 seconds
-  Back to 10 users/sec for 20 seconds

### test2_ramp.js
Simulates:
-  20 users/sec for 20 seconds
-  Ramp up to 100 users/sec over 30 seconds

---

##  Project Structure