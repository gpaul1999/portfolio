// Statically-prerendered `/` page that redirects to /en or /vi on the
// client, honoring the saved language cookie and falling back to the
// browser language. Replaces the former proxy.ts (Node.js middleware),
// which platforms like Cloudflare's OpenNext adapter cannot run.
const redirectScript = `(function(){try{var m=document.cookie.match(/(?:^|; )lang=(en|vi)/);var l=m?m[1]:(((navigator.language||"en").toLowerCase().indexOf("vi")===0)?"vi":"en");location.replace("/"+l+location.search+location.hash)}catch(e){location.replace("/en")}})()`;

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <p style={{ fontFamily: "system-ui", padding: "2rem" }}>
          <a href="/en">English</a> · <a href="/vi">Tiếng Việt</a>
        </p>
      </noscript>
    </>
  );
}
