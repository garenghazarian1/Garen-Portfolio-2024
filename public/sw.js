// Empty service worker to prevent 404 errors
// This file exists to satisfy browser requests for service worker

self.addEventListener("install", function (event) {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  // Take control of all pages immediately
  event.waitUntil(self.clients.claim());
});

// No fetch event handler - let all requests pass through normally
