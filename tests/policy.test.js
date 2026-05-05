import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 58,
    "capacity": 75,
    "latency": 11,
    "risk": 11,
    "weight": 7,
    "score": 134,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 93,
    "capacity": 77,
    "latency": 19,
    "risk": 15,
    "weight": 7,
    "score": 158,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 82,
    "capacity": 74,
    "latency": 17,
    "risk": 6,
    "weight": 9,
    "score": 205,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
