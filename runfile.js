import { run, option } from "runjs";

export function clean() {
  // Remove all js artifacts
  run(
    "rm -rf ./**/**/node_modules ./**/**/yarn.lock ./**/**/package-lock.json"
  );
  // Remove all builds artifacts
  run("rm -rf ./**/**/build");
}
