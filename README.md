# streamhub-epg

Test fixtures for [streamhub](https://tv.muhammadhassaanjaved.com), a personal media app. `fixtures/xt/` is a synthetic Xtream-codes provider (`get.php`, `player_api.php`, `xmltv.php`) with a matching XMLTV guide, used to verify the app's Xtream support end to end without a real provider account. `fixtures/xt/movie/u/p/2003.m3u8` points at Mux's public Big Buck Bunny test stream.

## Retired 2026-10-19

This repository used to publish a scheduled sports guide and a built-in anime playlist. Both were removed on 2026-10-19, together with the workflow that generated the guide, and neither is in this repository's history. Only the fixtures remain.
