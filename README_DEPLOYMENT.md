Deploying Your Next.js Site to cPanel

This guide covers two ways to deploy to cPanel:
- Option A (easiest): Static Export — for sites that don’t need server-side rendering, API routes, or on-the-fly image optimization.
- Option B: Node.js Runtime — for sites that use server-side features and when your cPanel host supports Node.js apps.

Check with your host which option is available. If they don’t offer a Node.js app environment, use the Static Export.

Prerequisites
- cPanel access (File Manager and, optionally, Terminal).
- Domain/subdomain set up in cPanel (e.g., example.com or app.example.com).
- If using Node.js runtime: your host must support “Node.js App” (Application Manager) and Node 18+.

Option A — Static Export (Recommended if your site is static)
1) Prepare your app for static export:
   - Ensure you do NOT rely on:
     - Server-side rendering (SSR/Server Components that require runtime rendering)
     - API routes
     - Next.js image optimization
   - In next.config.js, ensure a static export configuration, for example:
     module.exports = {
       output: 'export',
       images: { unoptimized: true },
       // If deploying under a subdirectory like example.com/site:
       // basePath: '/site',
       // assetPrefix: '/site/',
       // trailingSlash can help on some hosts:
       // trailingSlash: true,
     };

   Notes:
   - If deploying to a subdirectory, add basePath and assetPrefix so all links and assets resolve correctly.
   - If you have dynamic routes, they must be pre-rendered at build time or they’ll 404 after export.

2) Build and export locally:
   - Install dependencies: npm ci
   - Build: npm run build
   - Export: npx next export
   - You’ll get a static site in the out/ directory.

3) Upload to cPanel:
   - Zip the contents of out/ (the files inside it, not the folder itself if you want the site at the domain root).
   - In cPanel > File Manager:
     - For the main domain: open public_html/
     - For an addon domain/subdomain: open that domain’s document root
   - Upload the zip, then Extract. You should see index.html at the document root.

4) Test:
   - Visit your domain. Clear caches or use a private window if you updated an existing site.

5) Optional: .htaccess for caching (static assets):
   You can add caching rules in public_html/.htaccess to help performance. This is optional for initial deployment.

Common static export gotchas:
- 404s when hosting in a subdirectory: ensure basePath and assetPrefix are set to the sub-path.
- Client-side-only routes in SPAs: static export needs actual files generated for each route; otherwise use Node.js runtime.
- Next Image: use images.unoptimized: true for static hosting.

Option B — Node.js Runtime on cPanel (if your host supports Node.js App)
Use this if you have SSR, API routes, or features requiring a Node server.

1) Verify Node.js support:
   - In cPanel, look for “Application Manager” or “Setup Node.js App.”
   - Confirm Node version (prefer Node 18+).

2) Prepare the build:
   - On the server (recommended to avoid binary mismatch) or locally:
     - npm ci
     - npm run build
   - If building locally, upload the entire project including the .next directory and package.json/package-lock.json.

3) Create a startup server file (server.js):
   - This runs your Next.js app in production:
     const next = require('next');
     const http = require('http');

     const port = process.env.PORT || 3000;
     const app = next({ dev: false });
     const handle = app.getRequestHandler();

     app.prepare().then(() => {
       http.createServer((req, res) => handle(req, res)).listen(port, () => {
         console.log(`Next.js server running on port ${port}`);
       });
     });

   - Place server.js at your app root in cPanel.

4) Configure the app in cPanel:
   - cPanel > Setup Node.js App (or Application Manager)
     - Application root: e.g., /home/USER/nodeapps/myapp
     - Application URL: choose your domain/subdomain
     - Application mode: Production
     - Node version: 18+ (if available)
     - Startup file: server.js
   - Click “Create Application” (or Update if editing).

5) Install dependencies on the server:
   - Use the “Run NPM Install” button (if provided) or open cPanel Terminal, cd to the app root, and run:
     npm ci
     npm run build
   - Ensure the .next/ build output exists on the server.

6) Start/restart the app:
   - Use the “Restart” or “Run” button in cPanel’s Node.js App page.
   - Passenger will manage the process and route traffic to your app. Your app should not bind to a fixed public port; the above server.js uses process.env.PORT, which Passenger sets.

7) Point your domain:
   - If you created the app on a subdomain, it’s usually linked automatically.
   - For main domain at root, set the application document root to public_html (or move your app there). Some hosts prefer keeping Node apps outside public_html and mapping the domain to the app’s document root—follow your host’s instructions.

Environment variables and HTTPS:
- Add environment variables in the Node.js app configuration page (e.g., NEXT_PUBLIC_*).
- Use AutoSSL/SSL in cPanel for HTTPS. Prefer relative URLs in your app so both HTTP/HTTPS work during setup.

File permissions:
- Files: 644; Folders: 755 is typical. If you see permission errors, confirm ownership matches your cPanel user.

Troubleshooting
- White page/404 on static deploy: verify index.html is at the document root; confirm basePath/assetPrefix if using a subdirectory.
- Broken images/CSS on static deploy: paths likely don’t match your final URL; set basePath/assetPrefix; consider trailingSlash: true.
- 500 on Node.js app: check cPanel app logs and the terminal output. Ensure npm run build completed on the server and Node version is compatible.
- Memory/timeouts during build on shared hosts: build locally and upload .next, or ask host to raise limits.

Quick decision guide
- No SSR/APIs and want simplest path: Static Export (upload the out/ folder to public_html).
- Uses SSR/APIs or dynamic features: Node.js Runtime via cPanel’s Node.js App with a server.js starter.

That’s it! Pick the option that matches your hosting capabilities and follow the steps above to go live.
