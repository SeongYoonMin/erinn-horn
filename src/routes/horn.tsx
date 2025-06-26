import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/horn")({
  component: Horn,
});

function Horn() {
  return <div>Horn</div>;
}
