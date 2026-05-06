import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 58, slack: 22, drag: 19, confidence: 45 };
assert.equal(domainReviewScore(item), 126);
assert.equal(domainReviewLane(item), "watch");
