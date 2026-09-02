# streamhub-epg

Scheduled EPG (XMLTV) generator for [streamhub](https://tv.muhammadhassaanjaved.com) - a personal
media app. A GitHub Actions cron runs the [iptv-org/epg](https://github.com/iptv-org/epg) grabber
over a curated sports-channel list and publishes `guides/sports.xml.gz`, which streamhub fetches
like any other XMLTV feed (raw.githubusercontent.com).

- `sports.channels.xml` - the curated grab list (sport channels that exist in the iptv-org
  playlists). Regenerate by filtering iptv-org/epg's `sites/*/*.channels.xml` against the live
  `iptv-org.github.io/iptv/categories/sports.m3u` tvg-ids.
- `idmap.json` - channel-id rewrite map (grabber `xmltv_id` -> the playlist's tvg-id variant),
  so programme data joins onto streamhub's channels despite `@SD/@HD/@Region` suffix drift.
- `guides/sports.xml.gz` - the published guide (CI-managed; history is squashed each run).

Public because raw.githubusercontent.com requires auth on private repos and Actions minutes are
free on public repos. The data itself is programme listings - not sensitive.
