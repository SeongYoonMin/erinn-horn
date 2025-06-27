import { createFileRoute } from "@tanstack/react-router";
import { HornContainer } from "../components/container";

export const Route = createFileRoute("/horn")({
  component: HornPage,
});

function HornPage() {
  return <HornContainer />;
}
