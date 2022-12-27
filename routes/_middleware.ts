import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 416,
  site: "stape",
  domains: ["stape.deco.site"],
});