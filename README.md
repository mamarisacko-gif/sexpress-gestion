<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="theme-color" content="#0B1F4A">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="S Express">
<title>S Express Medical</title>
<link rel="manifest" href="data:application/manifest+json;base64,eyJuYW1lIjoiUyBFeHByZXNzIE1lZGljYWwiLCJzaG9ydF9uYW1lIjoiUyBFeHByZXNzIiwiZGVzY3JpcHRpb24iOiJDb21tYW5kZXogdm90cmUgbGl2cmFpc29uIG1lZGljYWxlIGEgQmFtYWtvIiwic3RhcnRfdXJsIjoiLi9pbmRleC5odG1sIiwiZGlzcGxheSI6InN0YW5kYWxvbmUiLCJvcmllbnRhdGlvbiI6InBvcnRyYWl0IiwiYmFja2dyb3VuZF9jb2xvciI6IiMwQjFGNEEiLCJ0aGVtZV9jb2xvciI6IiMwQjFGNEEiLCJsYW5nIjoiZnIiLCJpY29ucyI6W3sic3JjIjoiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxOTIgMTkyJyUzRSUzQ3JlY3Qgd2lkdGg9JzE5MicgaGVpZ2h0PScxOTInIHJ4PSczMCcgZmlsbD0nJTIzMEIxRjRBJy8lM0UlM0N0ZXh0IHk9JzE0MCcgeD0nOTYnIGZvbnQtc2l6ZT0nMTUwJyBmb250LWZhbWlseT0nQXJpYWwnIGZvbnQtd2VpZ2h0PSc5MDAnIGZpbGw9JyUyM0U4MzAyQScgdGV4dC1hbmNob3I9J21pZGRsZSclM0VTJTNDL3RleHQlM0UlM0Mvc3ZnJTNFIiwic2l6ZXMiOiIxOTJ4MTkyIiwidHlwZSI6ImltYWdlL3N2Zyt4bWwiLCJwdXJwb3NlIjoiYW55In1dfQ==">
<meta name="theme-color" content="#0B1F4A">
<script>
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    const swCode = `const C='sexpress-client-v1';self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>self.clients.claim());self.addEventListener('fetch',e=>{if(e.request.url.includes('supabase'))return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok){const cl=r.clone();caches.open(C).then(ca=>ca.put(e.request,cl));}return r;}).catch(()=>c)));});`;
    const blob = new Blob([swCode], {type:'application/javascript'});
    navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(()=>{});
  });
}
</script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --navy:#0B1F4A;--navy2:#0F2660;--red:#E8302A;--red2:#C0201A;
  --green:#16A34A;--green2:#22C55E;--gold:#F5C518;
  --wave:#1A75FF;--orange-money:#FF6600;
  --white:#FAFBFF;--gray:#F1F5FB;--border:#E2E8F5;
  --text:#0F172A;--muted:#64748B;
  --shadow:0 4px 20px rgba(11,31,74,.10);
  --shadow-lg:0 16px 48px rgba(11,31,74,.18);
  --radius:16px;
  --safe-top:env(safe-area-inset-top,0px);
  --safe-bot:env(safe-area-inset-bottom,0px);
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body{height:100%;overflow:hidden;}
body{font-family:'Outfit',sans-serif;background:var(--gray);color:var(--text);max-width:480px;margin:0 auto;height:100%;}

/* SPLASH */
.splash{position:fixed;inset:0;z-index:9999;background:var(--navy);display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .5s,transform .5s;}
.splash.hide{opacity:0;transform:scale(1.05);pointer-events:none;}
.splash-s{font-weight:900;font-size:100px;color:var(--red);line-height:1;animation:sIn .6s .2s both;}
.splash-name{font-weight:800;font-size:22px;color:white;letter-spacing:6px;animation:sIn .6s .4s both;}
.splash-sub{font-size:12px;color:rgba(255,255,255,.3);letter-spacing:2px;margin-top:4px;animation:sIn .6s .5s both;}
.splash-bar{width:48px;height:3px;background:rgba(255,255,255,.1);border-radius:2px;margin-top:40px;overflow:hidden;animation:sIn .6s .6s both;}
.splash-progress{height:100%;background:var(--gold);border-radius:2px;animation:prog 2s .6s ease forwards;}
@keyframes sIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes prog{from{width:0}to{width:100%}}

/* APP */
.app{display:flex;flex-direction:column;height:100%;padding-top:var(--safe-top);padding-bottom:var(--safe-bot);}

/* HEADER */
.header{background:var(--navy);padding:14px 20px 12px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
.hl-s{font-weight:900;font-size:32px;color:var(--red);line-height:1;}
.hl-express{font-weight:800;font-size:14px;color:white;letter-spacing:1.5px;display:block;}
.hl-medical{font-weight:600;font-size:10px;color:var(--green2);letter-spacing:2px;display:block;}
.header-tel{font-weight:700;font-size:13px;color:var(--gold);}
.header-status{display:flex;align-items:center;gap:4px;font-size:10px;color:rgba(255,255,255,.4);}
.dot-on{width:6px;height:6px;background:var(--green2);border-radius:50%;animation:blink 1.5s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.guide-btn{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:white;padding:5px 10px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;}

/* GUIDE OVERLAY */
.guide-overlay{position:fixed;inset:0;z-index:800;pointer-events:none;}
.guide-overlay.active{pointer-events:all;}
.guide-bg{position:absolute;inset:0;background:rgba(0,0,0,.72);backdrop-filter:blur(2px);opacity:0;transition:opacity .3s;}
.guide-overlay.active .guide-bg{opacity:1;}
.spotlight{position:absolute;border:3px solid var(--gold);border-radius:14px;box-shadow:0 0 0 9999px rgba(0,0,0,.72);animation:glow 1.5s infinite alternate;transition:all .4s ease;pointer-events:none;z-index:801;display:none;}
@keyframes glow{from{box-shadow:0 0 0 9999px rgba(0,0,0,.72),0 0 0 4px rgba(245,197,24,.3)}to{box-shadow:0 0 0 9999px rgba(0,0,0,.72),0 0 0 10px rgba(245,197,24,.5)}}
.tooltip-box{position:absolute;background:white;border-radius:18px;padding:18px 20px;max-width:290px;box-shadow:0 12px 40px rgba(0,0,0,.35);z-index:802;opacity:0;transform:translateY(10px);transition:all .35s cubic-bezier(.34,1.56,.64,1);}
.tooltip-box.show{opacity:1;transform:translateY(0);}
.tt-step{font-size:9px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px;}
.tt-icon{font-size:30px;margin-bottom:8px;}
.tt-title{font-weight:800;font-size:17px;color:var(--text);margin-bottom:6px;}
.tt-body{font-size:13px;color:var(--muted);line-height:1.55;}
.tt-nav{display:flex;gap:8px;margin-top:14px;}
.tt-skip{flex:1;padding:9px;border-radius:10px;border:1.5px solid var(--border);background:white;font-family:'Outfit',sans-serif;font-weight:600;font-size:13px;color:var(--muted);cursor:pointer;}
.tt-next{flex:2;padding:9px;border-radius:10px;border:none;background:var(--navy);color:white;font-family:'Outfit',sans-serif;font-weight:700;font-size:13px;cursor:pointer;}
.tt-dots{display:flex;gap:5px;justify-content:center;margin-top:10px;}
.tt-dot{width:6px;height:6px;border-radius:3px;background:var(--border);transition:all .3s;}
.tt-dot.active{width:18px;background:var(--navy);}

/* HINT BUBBLE */
.hint-bubble{position:absolute;background:var(--navy);color:white;padding:7px 12px;border-radius:8px;font-size:11px;font-weight:600;white-space:nowrap;z-index:200;pointer-events:none;opacity:0;transform:translateY(5px);transition:all .25s;box-shadow:var(--shadow);top:calc(100% + 8px);left:0;}
.hint-bubble::before{content:'';position:absolute;top:-6px;left:18px;border:6px solid transparent;border-top:none;border-bottom-color:var(--navy);}
.hint-bubble.show{opacity:1;transform:translateY(0);}
.hint-wrap{position:relative;}

/* SCROLL */
.scroll-area{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px;}

/* DEPART */
.depart-card{background:linear-gradient(135deg,var(--navy),var(--navy2));border-radius:var(--radius);padding:14px 16px;display:flex;align-items:center;gap:12px;margin-bottom:10px;border:1px solid rgba(255,255,255,.05);}
.depart-toggle{display:flex;gap:8px;margin-bottom:10px;}
.dt-btn{flex:1;padding:11px 8px;border-radius:12px;border:1.5px solid var(--border);background:white;color:var(--muted);font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;}
.dt-btn.active{background:var(--navy);color:white;border-color:var(--navy);}
.map-wrap{display:none;}
.libre-wrap{display:none;flex-direction:column;gap:12px;margin-bottom:10px;background:white;border-radius:var(--radius);padding:14px;border:1px solid var(--border);}
.libre-wrap.show{display:flex;}
.libre-field{position:relative;}
.libre-lbl{display:block;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:7px;}
.libre-search{position:relative;}
.libre-search .search-input{width:100%;padding:13px 14px;border:1.5px solid var(--border);border-radius:12px;font-size:15px;font-family:inherit;background:#f7f9fc;}
.libre-search .suggestions{position:absolute;top:100%;left:0;right:0;}
.dc-label{font-size:9px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.8px;}
.dc-name{font-weight:700;font-size:15px;color:white;margin-top:1px;}
.dc-sub{font-size:11px;color:rgba(255,255,255,.35);}
.dc-badge{background:rgba(245,197,24,.15);color:var(--gold);border:1px solid rgba(245,197,24,.25);padding:3px 8px;border-radius:6px;font-size:9px;font-weight:700;}

/* SEARCH */
.search-wrap{position:relative;margin-bottom:16px;}
.search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none;}
.search-clear{position:absolute;right:14px;top:50%;transform:translateY(-50%);font-size:16px;cursor:pointer;display:none;}
.search-clear.show{display:block;}
.search-input{width:100%;padding:14px 44px;border:2px solid var(--border);border-radius:var(--radius);font-family:'Outfit',sans-serif;font-size:15px;font-weight:500;color:var(--text);background:white;outline:none;transition:all .2s;box-shadow:var(--shadow);}
.search-input:focus{border-color:var(--navy);box-shadow:0 0 0 4px rgba(11,31,74,.08);}
.search-input::placeholder{color:var(--muted);font-weight:400;}
.suggestions{position:absolute;top:calc(100% + 6px);left:0;right:0;background:white;border-radius:var(--radius);box-shadow:var(--shadow-lg);border:1px solid var(--border);z-index:100;overflow:hidden;display:none;max-height:280px;overflow-y:auto;}
.suggestions.open{display:block;}
.sugg-item{padding:12px 16px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:background .15s;border-bottom:1px solid var(--border);}
.sugg-item:last-child{border:none;}
.sugg-item:active{background:var(--gray);}
.sugg-zone-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}
.sugg-name{font-weight:700;font-size:14px;color:var(--text);}
.sugg-detail{font-size:11px;color:var(--muted);margin-top:1px;}
.sugg-price{font-family:'DM Mono',monospace;font-weight:600;font-size:13px;color:var(--navy);flex-shrink:0;}

/* TARIF CARD */
.tarif-card{background:white;border-radius:var(--radius);box-shadow:var(--shadow);border:1px solid var(--border);overflow:hidden;margin-bottom:12px;display:none;animation:slideUp .3s cubic-bezier(.34,1.56,.64,1);}
.tarif-card.show{display:block;}
@keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.tc-hero{padding:18px 18px 14px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:flex-start;}
.tc-dest{font-weight:800;font-size:18px;color:var(--text);line-height:1.2;}
.tc-dist{font-size:11px;color:var(--muted);margin-top:3px;}
.tc-zone-badge{padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;flex-shrink:0;margin-left:10px;}
.tc-price-row{padding:14px 18px;background:var(--gray);display:flex;align-items:center;justify-content:space-between;}
.tc-price-main{font-family:'DM Mono',monospace;font-weight:600;font-size:32px;color:var(--navy);}
.tc-meta{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);border-top:1px solid var(--border);}
.tc-meta-item{background:white;padding:10px 14px;}
.tc-meta-label{font-size:9px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;}
.tc-meta-val{font-size:13px;font-weight:700;color:var(--text);margin-top:2px;}

/* OPTIONS */
.options-section{padding:14px 18px;border-top:1px solid var(--border);}
.opt-title{font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px;}
.opt-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;border:1.5px solid var(--border);background:white;margin-bottom:6px;cursor:pointer;transition:all .15s;-webkit-user-select:none;user-select:none;}
.opt-item.selected{border-color:var(--navy);background:#F0F4FF;}
.opt-check{width:20px;height:20px;border-radius:6px;border:2px solid var(--border);background:white;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s;font-size:11px;}
.opt-item.selected .opt-check{background:var(--navy);border-color:var(--navy);color:white;}
.opt-text{flex:1;font-size:13px;font-weight:500;color:var(--text);}
.opt-price{font-family:'DM Mono',monospace;font-weight:600;font-size:12px;color:var(--red);}

/* TOTAL */
.total-row{margin:14px 18px 0;background:var(--navy);border-radius:12px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;}
.total-val{font-family:'DM Mono',monospace;font-weight:600;font-size:26px;color:var(--gold);}

/* BOUTONS */
.btn-commander{display:flex;align-items:center;justify-content:center;gap:8px;width:calc(100% - 36px);margin:12px 18px 6px;padding:15px;border-radius:12px;background:linear-gradient(135deg,var(--red),var(--red2));color:white;border:none;font-family:'Outfit',sans-serif;font-weight:700;font-size:15px;cursor:pointer;box-shadow:0 6px 20px rgba(232,48,42,.3);transition:all .2s;}
.btn-commander:active{transform:scale(.97);}
.pay-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0 18px 8px;display:none;}
.pay-btns.show{display:grid;}
.btn-wave{display:flex;align-items:center;justify-content:center;gap:6px;padding:11px;border-radius:12px;background:white;color:var(--wave);border:2px solid var(--wave);font-family:'Outfit',sans-serif;font-weight:700;font-size:13px;cursor:pointer;transition:all .2s;}
.btn-orange{display:flex;align-items:center;justify-content:center;gap:6px;padding:11px;border-radius:12px;background:white;color:var(--orange-money);border:2px solid var(--orange-money);font-family:'Outfit',sans-serif;font-weight:700;font-size:13px;cursor:pointer;transition:all .2s;}
.btn-whatsapp{display:flex;align-items:center;justify-content:center;gap:8px;width:calc(100% - 36px);margin:0 18px 16px;padding:12px;border-radius:12px;background:white;color:#16A34A;border:2px solid #16A34A;font-family:'Outfit',sans-serif;font-weight:700;font-size:13px;cursor:pointer;}

/* ZONES */
.sec-title{font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;display:flex;align-items:center;gap:6px;}
.sec-title::after{content:'';flex:1;height:1px;background:var(--border);}
.zones-grid{display:flex;flex-direction:column;gap:6px;margin-bottom:80px;}
.zone-row{background:white;border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:12px;border:1px solid var(--border);cursor:pointer;transition:all .15s;box-shadow:var(--shadow);}
.zone-row:active{transform:scale(.98);}
.zone-indicator{width:4px;height:36px;border-radius:2px;flex-shrink:0;}
.zone-name{font-weight:700;font-size:14px;color:var(--text);}
.zone-detail{font-size:11px;color:var(--muted);margin-top:2px;}
.zone-price{font-family:'DM Mono',monospace;font-weight:600;font-size:14px;color:var(--navy);}
.zone-ex{font-size:10px;color:var(--muted);text-align:right;max-width:110px;}

/* SUIVI */
.suivi-page{display:none;flex-direction:column;flex:1;overflow:hidden;}
.suivi-page.show{display:flex;flex-direction:column;}
.empty-suivi{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;gap:12px;}
.empty-icon{font-size:56px;opacity:.3;}
.empty-title{font-size:17px;font-weight:700;color:var(--muted);}
.empty-sub{font-size:13px;color:var(--muted);line-height:1.5;}
.order-card{background:white;border-radius:var(--radius);padding:16px;margin:0 16px 10px;border:1px solid var(--border);box-shadow:var(--shadow);animation:slideUp .3s both;}
.oc-id{font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);}
.oc-dest{font-weight:700;font-size:15px;color:var(--text);margin:4px 0 2px;}
.oc-footer{display:flex;justify-content:space-between;align-items:center;margin-top:12px;padding-top:10px;border-top:1px solid var(--border);}
.oc-price{font-family:'DM Mono',monospace;font-weight:600;font-size:16px;color:var(--navy);}
.oc-status{padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;}
.s-new{background:#EFF6FF;color:#1D4ED8;}.s-assigned{background:#FEFCE8;color:#854D0E;}
.s-transit{background:#FFF7ED;color:#9A3412;}.s-done{background:#F0FDF4;color:#15803D;}
.s-cancel{background:#FEF2F2;color:#B91C1C;}
.pt-tracker{display:flex;align-items:center;margin:12px 0 6px;}
.pt-step{display:flex;flex-direction:column;align-items:center;flex:1;}
.pt-dot{width:24px;height:24px;border-radius:50%;border:2px solid var(--border);background:white;display:flex;align-items:center;justify-content:center;font-size:11px;transition:all .3s;}
.pt-dot.done{background:var(--green);border-color:var(--green);color:white;}
.pt-dot.active{background:var(--navy);border-color:var(--navy);color:white;box-shadow:0 0 0 4px rgba(11,31,74,.1);}
.pt-line{flex:1;height:2px;background:var(--border);transition:background .3s;}
.pt-line.done{background:var(--green);}
.pt-label{font-size:9px;font-weight:600;color:var(--muted);margin-top:4px;text-align:center;}
.pt-label.active{color:var(--navy);}

/* AIDE */
.aide-page{display:none;flex-direction:column;flex:1;overflow:hidden;}
#page-pro.show{display:flex;}
.pro-hero{background:linear-gradient(135deg,#0B1F4A,#0a1838);border-radius:18px;padding:22px;color:#fff;margin-bottom:16px;}
.pro-hero-badge{display:inline-block;background:#F5C518;color:#0B1F4A;font-size:11px;font-weight:800;letter-spacing:1px;padding:5px 12px;border-radius:20px;margin-bottom:12px;}
.pro-hero-title{font-size:24px;font-weight:800;line-height:1.1;}
.pro-hero-sub{font-size:14px;color:#cdd6e6;margin-top:10px;line-height:1.4;}
.pro-why{background:#fff;border-radius:14px;padding:16px;margin-bottom:18px;border:1px solid #eef0f5;}
.pro-why-item{display:flex;align-items:center;gap:10px;font-size:14px;color:#0B1F4A;font-weight:600;padding:6px 0;}
.pro-why-item span{color:#16A34A;font-weight:800;}
.pro-section-title{font-size:16px;font-weight:800;color:#0B1F4A;margin:8px 0 14px;text-transform:uppercase;letter-spacing:.5px;}
.pro-card{background:#fff;border-radius:16px;padding:20px;margin-bottom:14px;border:2px solid #eef0f5;position:relative;}
.pro-card-featured{border-color:#F5C518;box-shadow:0 8px 24px rgba(245,197,24,.15);}
.pro-card-tag{position:absolute;top:-11px;left:20px;background:#F5C518;color:#0B1F4A;font-size:11px;font-weight:800;padding:4px 12px;border-radius:20px;letter-spacing:.5px;}
.pro-card-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;}
.pro-card-name{font-size:20px;font-weight:800;color:#0B1F4A;}
.pro-card-price{font-size:24px;font-weight:800;color:#E8302A;}
.pro-card-price span{font-size:13px;color:#888;font-weight:600;}
.pro-card-courses{font-size:13px;color:#16A34A;font-weight:700;background:#F0FDF4;padding:8px 12px;border-radius:10px;margin-bottom:12px;}
.pro-card-feats{display:flex;flex-direction:column;gap:7px;margin-bottom:12px;}
.pro-card-feats div{font-size:14px;color:#444;font-weight:500;}
.pro-card-for{font-size:12px;color:#888;font-style:italic;border-top:1px solid #f0f0f0;padding-top:10px;}
.pro-note{font-size:12px;color:#888;text-align:center;line-height:1.5;margin:8px 0 18px;padding:0 10px;}
.pro-cta{width:100%;padding:16px;border:none;border-radius:14px;background:linear-gradient(135deg,#E8302A,#c41f1a);color:#fff;font-size:16px;font-weight:800;cursor:pointer;font-family:inherit;}
.aide-page.show{display:flex;flex-direction:column;}
.aide-scroll{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px;}
.aide-section{font-weight:800;font-size:16px;color:var(--navy);margin:16px 0 10px;display:flex;align-items:center;gap:6px;}
.step-card{background:white;border-radius:12px;border:1px solid var(--border);padding:14px 16px;margin-bottom:8px;display:flex;gap:12px;align-items:flex-start;box-shadow:var(--shadow);}
.step-num{width:28px;height:28px;border-radius:50%;background:var(--navy);color:white;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;}
.step-title{font-weight:700;font-size:14px;color:var(--text);margin-bottom:3px;}
.step-desc{font-size:12px;color:var(--muted);line-height:1.55;}
.faq-item{background:white;border-radius:12px;border:1px solid var(--border);margin-bottom:8px;overflow:hidden;box-shadow:var(--shadow);}
.faq-q{padding:14px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-weight:600;font-size:14px;color:var(--text);}
.faq-a{display:none;padding:0 16px 14px;font-size:13px;color:var(--muted);line-height:1.6;border-top:1px solid var(--border);padding-top:12px;}
.faq-item.open .faq-a{display:block;}
.faq-chevron{transition:transform .25s;font-size:12px;color:var(--muted);}
.faq-item.open .faq-chevron{transform:rotate(180deg);}
.btn-restart{width:100%;padding:14px;border-radius:12px;background:var(--navy);color:white;border:none;font-family:'Outfit',sans-serif;font-weight:700;font-size:14px;cursor:pointer;margin-top:4px;display:flex;align-items:center;justify-content:center;gap:8px;}
.contact-card{background:linear-gradient(135deg,var(--navy),var(--navy2));border-radius:12px;padding:16px;margin-bottom:8px;display:flex;align-items:center;gap:12px;cursor:pointer;}
.contact-icon{font-size:24px;}
.contact-title{font-weight:700;font-size:14px;color:white;}
.contact-sub{font-size:11px;color:rgba(255,255,255,.4);}

/* BOTTOM NAV */
.bottom-nav{background:white;border-top:1px solid var(--border);display:flex;padding:8px 0 calc(8px + var(--safe-bot));flex-shrink:0;}
.bn-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px;cursor:pointer;transition:all .15s;border:none;background:none;font-family:'Outfit',sans-serif;}
.bn-icon{font-size:20px;}
.bn-label{font-size:9px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;}
.bn-item.active .bn-label{color:var(--navy);}
.bn-item.active .bn-icon{transform:scale(1.15);}

/* MODAL SHEET */
.modal-bg{position:fixed;inset:0;background:rgba(11,31,74,.5);backdrop-filter:blur(8px);z-index:500;display:none;align-items:flex-end;}
.modal-bg.open{display:flex;}
.modal-sheet{background:white;width:100%;border-radius:24px 24px 0 0;padding:24px 20px calc(24px + var(--safe-bot));animation:sheetUp .35s cubic-bezier(.34,1.56,.64,1);max-height:92vh;overflow-y:auto;}
@keyframes sheetUp{from{transform:translateY(100%)}to{transform:none}}
.sheet-handle{width:40px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 20px;}
.sheet-title{font-weight:800;font-size:20px;color:var(--text);margin-bottom:4px;}
.sheet-sub{font-size:13px;color:var(--muted);margin-bottom:20px;}
.input-group{margin-bottom:14px;}
.input-label{font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;display:block;}
.input-field{width:100%;padding:13px 14px;border:2px solid var(--border);border-radius:12px;font-family:'Outfit',sans-serif;font-size:15px;font-weight:500;color:var(--text);background:var(--gray);outline:none;transition:all .2s;}
.input-field:focus{border-color:var(--navy);background:white;}
.summary-box{background:var(--gray);border-radius:12px;padding:14px;margin-bottom:14px;}
.sum-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid var(--border);font-size:13px;}
.sum-row:last-child{border:none;}
.sum-label{color:var(--muted);}
.sum-val{font-weight:600;color:var(--text);}
.sum-total{background:var(--navy);border-radius:10px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;}
.sum-total-label{font-weight:700;font-size:14px;color:rgba(255,255,255,.6);}
.sum-total-val{font-family:'DM Mono',monospace;font-weight:600;font-size:24px;color:var(--gold);}
.pay-title{font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px;}
.pay-options{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;}
.pay-opt{padding:12px;border-radius:12px;border:2px solid var(--border);background:white;cursor:pointer;text-align:center;transition:all .2s;font-family:'Outfit',sans-serif;}
.pay-opt:active{transform:scale(.97);}
.pay-opt.selected{border-color:var(--navy);background:#F0F4FF;}
.pay-opt-icon{font-size:22px;margin-bottom:4px;}
.pay-opt-name{font-weight:700;font-size:12px;color:var(--text);}
.pay-opt-sub{font-size:10px;color:var(--muted);margin-top:1px;}
.btn-confirm{width:100%;padding:15px;border-radius:14px;background:linear-gradient(135deg,var(--green),var(--green2));color:white;border:none;font-family:'Outfit',sans-serif;font-weight:800;font-size:16px;cursor:pointer;box-shadow:0 6px 20px rgba(22,163,74,.3);transition:all .2s;display:flex;align-items:center;justify-content:center;gap:8px;}
.btn-confirm:active{transform:scale(.97);}
.btn-cancel-sheet{width:100%;padding:13px;border-radius:14px;background:transparent;color:var(--muted);border:none;font-family:'Outfit',sans-serif;font-weight:600;font-size:14px;cursor:pointer;margin-top:8px;}

/* SUCCESS */
.success-overlay{position:fixed;inset:0;background:white;z-index:900;display:none;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;}
.success-overlay.show{display:flex;}
.success-check{width:80px;height:80px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:20px;animation:pop .5s cubic-bezier(.34,1.56,.64,1);}
@keyframes pop{from{transform:scale(0)}to{transform:scale(1)}}
.success-title{font-weight:800;font-size:24px;color:var(--text);margin-bottom:8px;}
.success-sub{font-size:14px;color:var(--muted);line-height:1.6;margin-bottom:28px;}
.success-btn{padding:14px 32px;background:var(--navy);color:white;border:none;border-radius:12px;font-family:'Outfit',sans-serif;font-weight:700;font-size:15px;cursor:pointer;}

/* ═══ STYLES ADMIN (scopes) ═══ */
#admin-mode :root {
  --bg:#070E1F; --bg2:#0D1730; --bg3:#111D3A;
  --card:#121E3D; --card2:#162244;
  --border:rgba(255,255,255,.07); --border2:rgba(255,255,255,.12);
  --red:#EF4444; --green:#22C55E; --gold:#F5C518;
  --blue:#3B82F6; --orange:#F97316; --purple:#A855F7;
  --white:#F8FAFF; --muted:#64748B; --text:#E2E8F4;
  --safe-top:env(safe-area-inset-top,0px);
  --safe-bot:env(safe-area-inset-bottom,0px);
}#admin-mode * { margin:0; padding:0; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }#admin-mode html, #admin-mode body { height:100%; overflow:hidden; font-family:'Outfit',sans-serif; background:var(--bg); color:var(--text); }#admin-mode /* ── LOGIN ── */
.login-page {
  position:fixed; inset:0; background:var(--bg);
  display:flex; align-items:center; justify-content:center;
  flex-direction:column; gap:24px; padding:24px; z-index:999;
}#admin-mode .login-page.hide { display:none; }#admin-mode .login-logo { text-align:center; }#admin-mode .login-s { font-weight:900; font-size:72px; color:#EF4444; line-height:1; }#admin-mode .login-name { font-weight:800; font-size:18px; color:white; letter-spacing:3px; }#admin-mode .login-sub { font-size:11px; color:var(--muted); letter-spacing:1px; margin-top:4px; }#admin-mode .login-card { background:var(--card); border:1px solid var(--border2); border-radius:20px; padding:28px; width:100%; max-width:360px; }#admin-mode .login-title { font-weight:700; font-size:18px; color:var(--white); margin-bottom:6px; }#admin-mode .login-hint { font-size:12px; color:var(--muted); margin-bottom:20px; }#admin-mode .login-input { width:100%; padding:13px 16px; background:var(--bg3); border:1.5px solid var(--border2); border-radius:12px; color:var(--white); font-family:'Outfit',sans-serif; font-size:15px; outline:none; margin-bottom:12px; transition:border-color .2s; }#admin-mode .login-input:focus { border-color:var(--blue); }#admin-mode .login-input::placeholder { color:var(--muted); }#admin-mode .login-btn { width:100%; padding:14px; background:linear-gradient(135deg,var(--blue),#1D4ED8); color:white; border:none; border-radius:12px; font-family:'Outfit',sans-serif; font-weight:700; font-size:15px; cursor:pointer; transition:all .2s; }#admin-mode .login-btn:active { transform:scale(.97); }#admin-mode .login-error { color:var(--red); font-size:12px; text-align:center; display:none; margin-top:8px; }#admin-mode /* ── APP ── */
.app { height:100%; display:flex; flex-direction:column; display:none; }#admin-mode .app.show { display:flex; }#admin-mode /* ── HEADER ── */
.header { background:var(--bg2); border-bottom:1px solid var(--border); padding:12px 16px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0; padding-top:calc(12px + var(--safe-top)); }#admin-mode .header-left { display:flex; align-items:center; gap:10px; }#admin-mode .h-s { font-weight:900; font-size:28px; color:var(--red); line-height:1; }#admin-mode .h-title { font-weight:700; font-size:14px; color:var(--white); }#admin-mode .h-sub { font-size:10px; color:var(--muted); }#admin-mode .h-right { display:flex; align-items:center; gap:8px; }#admin-mode .live-dot { width:8px; height:8px; background:var(--green); border-radius:50%; animation:blink 1.5s infinite; }
@#admin-mode keyframes blink {0%,100%{opacity:1}50%{opacity:.3}}#admin-mode .live-txt { font-size:11px; color:var(--green); font-weight:600; }#admin-mode .logout-btn { background:none; border:1px solid var(--border2); color:var(--muted); padding:5px 10px; border-radius:8px; font-family:'Outfit',sans-serif; font-size:11px; cursor:pointer; }#admin-mode /* ── STATS STRIP ── */
.stats-strip { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--border); border-top:1px solid var(--border); border-bottom:1px solid var(--border); flex-shrink:0; }#admin-mode .stat-box { background:var(--bg2); padding:10px; text-align:center; }#admin-mode .stat-val { font-family:'DM Mono',monospace; font-weight:600; font-size:20px; color:var(--white); }#admin-mode .stat-lbl { font-size:8px; font-weight:700; color:var(--muted); text-transform:uppercase; letter-spacing:.5px; margin-top:2px; }#admin-mode /* ── SCROLL ── */
.scroll { flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch; padding:12px; }#admin-mode /* ── FILTERS ── */
.filters { display:flex; gap:6px; overflow-x:auto; padding-bottom:2px; margin-bottom:12px; -webkit-overflow-scrolling:touch; scrollbar-width:none; }#admin-mode .filters::-webkit-scrollbar { display:none; }#admin-mode .f-btn { padding:6px 14px; border-radius:20px; font-size:12px; font-weight:600; cursor:pointer; border:1px solid var(--border2); background:transparent; color:rgba(255,255,255,.5); font-family:'Outfit',sans-serif; white-space:nowrap; transition:all .15s; flex-shrink:0; }#admin-mode .f-btn.active { background:var(--blue); border-color:var(--blue); color:white; }#admin-mode /* ── ORDER CARDS ── */
.order-card {
  background:var(--card); border:1px solid var(--border);
  border-radius:14px; margin-bottom:10px; overflow:hidden;
  animation:slideUp .3s both;
  position:relative;
}
@#admin-mode keyframes slideUp {from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}#admin-mode .order-card.new-order { border-left:3px solid var(--blue); }#admin-mode .order-card.transit { border-left:3px solid var(--orange); }#admin-mode .order-card.done { border-left:3px solid var(--green); opacity:.75; }#admin-mode .order-card.cancel { border-left:3px solid var(--red); opacity:.6; }#admin-mode .oc-top { padding:12px 14px; display:flex; align-items:flex-start; justify-content:space-between; gap:8px; }#admin-mode .oc-id { font-family:'DM Mono',monospace; font-size:10px; color:var(--muted); margin-bottom:2px; }#admin-mode .oc-client { font-weight:700; font-size:15px; color:var(--white); }#admin-mode .oc-tel { font-size:12px; color:var(--muted); margin-top:1px; }#admin-mode .oc-right { display:flex; flex-direction:column; align-items:flex-end; gap:4px; }#admin-mode .oc-time { font-size:10px; color:var(--muted); font-family:'DM Mono',monospace; }#admin-mode .status-pill { padding:3px 10px; border-radius:20px; font-size:10px; font-weight:700; }#admin-mode .s-new { background:rgba(59,130,246,.15); color:#60A5FA; }#admin-mode .s-assigned { background:rgba(245,197,24,.12); color:var(--gold); }#admin-mode .s-transit { background:rgba(249,115,22,.12); color:var(--orange); }#admin-mode .s-done { background:rgba(34,197,94,.12); color:var(--green); }#admin-mode .s-cancel { background:rgba(239,68,68,.12); color:var(--red); }#admin-mode .oc-route { padding:0 14px 10px; display:flex; align-items:center; gap:8px; font-size:13px; }#admin-mode .oc-route-from { color:var(--muted); }#admin-mode .oc-route-arrow { color:var(--muted); }#admin-mode .oc-route-to { font-weight:700; color:var(--white); }#admin-mode .oc-km { font-size:11px; color:var(--muted); }#admin-mode .oc-opts { padding:0 14px 10px; display:flex; gap:4px; flex-wrap:wrap; }#admin-mode .opt-tag { background:rgba(168,85,247,.12); color:#C084FC; padding:2px 8px; border-radius:6px; font-size:10px; font-weight:600; }#admin-mode .oc-note { padding:0 14px 10px; font-size:11px; color:var(--muted); background:rgba(255,255,255,.02); }#admin-mode .oc-note strong { color:var(--gold); }#admin-mode .oc-bottom { padding:10px 14px; border-top:1px solid var(--border); display:flex; align-items:center; gap:8px; }#admin-mode .oc-price { font-family:'DM Mono',monospace; font-weight:600; font-size:16px; color:var(--gold); flex-shrink:0; }#admin-mode .livreur-sel { flex:1; background:var(--bg3); border:1px solid var(--border2); color:var(--text); padding:7px 10px; border-radius:9px; font-family:'Outfit',sans-serif; font-size:12px; cursor:pointer; outline:none; min-width:0; }#admin-mode .action-row { display:flex; gap:6px; }#admin-mode .btn-act { padding:7px 12px; border-radius:8px; font-size:11px; font-weight:700; cursor:pointer; border:none; font-family:'Outfit',sans-serif; transition:all .15s; white-space:nowrap; }#admin-mode .btn-transit { background:rgba(249,115,22,.15); color:var(--orange); border:1px solid rgba(249,115,22,.3); }#admin-mode .btn-done { background:rgba(34,197,94,.15); color:var(--green); border:1px solid rgba(34,197,94,.3); }#admin-mode .btn-cancel { background:rgba(239,68,68,.1); color:var(--red); border:1px solid rgba(239,68,68,.2); }#admin-mode .btn-maps { background:rgba(59,130,246,.12); color:var(--blue); border:1px solid rgba(59,130,246,.2); }#admin-mode .btn-act:active { transform:scale(.95); }#admin-mode /* ── EMPTY ── */
.empty { text-align:center; padding:60px 20px; }#admin-mode .empty-icon { font-size:48px; opacity:.3; margin-bottom:12px; }#admin-mode .empty-txt { font-size:15px; font-weight:600; color:rgba(255,255,255,.3); }#admin-mode .empty-sub { font-size:12px; color:var(--muted); margin-top:6px; }#admin-mode /* ── BOTTOM NAV ── */
.bottom-nav { background:var(--bg2); border-top:1px solid var(--border); display:flex; padding:8px 0 calc(8px + var(--safe-bot)); flex-shrink:0; }#admin-mode .bn { flex:1; display:flex; flex-direction:column; align-items:center; gap:2px; padding:6px; cursor:pointer; background:none; border:none; font-family:'Outfit',sans-serif; }#admin-mode .bn-icon { font-size:20px; }#admin-mode .bn-label { font-size:9px; font-weight:600; color:var(--muted); text-transform:uppercase; }#admin-mode .bn.active .bn-label { color:var(--blue); }#admin-mode /* ── LIVREURS PAGE ── */
.livreur-card { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:16px; margin-bottom:10px; border-top:3px solid var(--blue); }#admin-mode .lc-name { font-weight:800; font-size:18px; color:var(--white); margin-bottom:12px; }#admin-mode .lc-stat { display:flex; justify-content:space-between; font-size:13px; padding:5px 0; border-bottom:1px solid var(--border); }#admin-mode .lc-stat:last-of-type { border:none; }#admin-mode .lc-lbl { color:var(--muted); }#admin-mode .progress { height:4px; background:var(--border); border-radius:2px; margin-top:10px; overflow:hidden; }#admin-mode .progress-fill { height:100%; background:linear-gradient(90deg,var(--green),#4ade80); border-radius:2px; transition:width .5s; }#admin-mode /* ── TOAST ── */
#toast { position:fixed; bottom:calc(70px + var(--safe-bot)); right:16px; left:16px; z-index:9999; background:var(--card2); color:var(--white); padding:13px 18px; border-radius:14px; font-size:14px; font-weight:600; box-shadow:0 8px 32px rgba(0,0,0,.4); transform:translateY(100px); opacity:0; transition:all .35s cubic-bezier(.34,1.56,.64,1); border-left:4px solid var(--green); pointer-events:none; text-align:center; }#admin-mode /* ── NEW ORDER BANNER ── */
.new-banner { background:linear-gradient(135deg,rgba(59,130,246,.2),rgba(11,31,74,.4)); border:1px solid rgba(59,130,246,.3); border-radius:12px; padding:12px 16px; margin-bottom:12px; display:none; align-items:center; gap:10px; animation:pulse-bg 1s infinite; }#admin-mode .new-banner.show { display:flex; }
@#admin-mode keyframes pulse-bg {0%,100%{background:linear-gradient(135deg,rgba(59,130,246,.2),rgba(11,31,74,.4))}50%{background:linear-gradient(135deg,rgba(59,130,246,.3),rgba(11,31,74,.5))}}#admin-mode .nb-icon { font-size:24px; animation:bounce .6s infinite alternate; }
@#admin-mode keyframes bounce {from{transform:translateY(0)}to{transform:translateY(-4px)}}#admin-mode .nb-text { flex:1; }#admin-mode .nb-title { font-weight:700; font-size:14px; color:var(--white); }#admin-mode .nb-sub { font-size:11px; color:rgba(255,255,255,.5); }

.brd-modal{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.6);display:none;align-items:flex-end;justify-content:center;}
.brd-modal.open{display:flex;}
.brd-sheet{background:#fff;width:100%;max-width:480px;max-height:92vh;overflow-y:auto;border-radius:20px 20px 0 0;animation:brdUp .3s ease;}
@keyframes brdUp{from{transform:translateY(100%)}to{transform:none}}
.brd-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid #eee;position:sticky;top:0;background:#fff;}
.brd-title{font-size:18px;font-weight:800;color:#0B1F4A;}
.brd-x{width:34px;height:34px;border:none;background:#f0f2f7;border-radius:50%;font-size:16px;cursor:pointer;color:#555;}
.brd-body{padding:20px;}
.brd-num{font-family:'DM Mono',monospace;font-size:22px;font-weight:700;color:#E8302A;text-align:center;}
.brd-info{text-align:center;color:#777;font-size:13px;margin-bottom:18px;}
.brd-lbl{display:block;font-size:13px;font-weight:700;color:#0B1F4A;margin:16px 0 7px;}
.brd-photo-btn{width:100%;padding:14px;border:2px dashed #cbd5e1;border-radius:12px;background:#f7f9fc;color:#0B1F4A;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;}
.brd-photo-preview{width:100%;max-height:200px;object-fit:contain;border-radius:12px;margin-top:10px;border:1px solid #eee;}
.brd-input{width:100%;padding:13px 14px;border:1.5px solid #e2e8f0;border-radius:12px;font-size:15px;font-family:inherit;box-sizing:border-box;}
.brd-confirm-tabs{display:flex;gap:8px;margin-bottom:10px;}
.brd-ct{flex:1;padding:11px;border:1.5px solid #e2e8f0;border-radius:10px;background:#fff;color:#777;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;}
.brd-ct.active{background:#0B1F4A;color:#fff;border-color:#0B1F4A;}
.brd-hint{font-size:11px;color:#999;margin-top:6px;}
.brd-canvas{width:100%;height:150px;border:1.5px solid #e2e8f0;border-radius:12px;background:#fff;touch-action:none;}
.brd-clear-sign{margin-top:8px;padding:8px 14px;border:1px solid #e2e8f0;border-radius:8px;background:#fff;color:#E8302A;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;}
.brd-generate{width:100%;margin-top:22px;padding:16px;border:none;border-radius:14px;background:linear-gradient(135deg,#16A34A,#15803d);color:#fff;font-size:16px;font-weight:800;cursor:pointer;font-family:inherit;}
</style>
</head>
<body>

<!-- SPLASH -->
<div class="splash" id="splash">
  <div class="splash-s">S</div>
  <div class="splash-name">EXPRESS MEDICAL</div>
  <div class="splash-sub">HALLES DE BAMAKO · MALI</div>
  <div class="splash-bar"><div class="splash-progress"></div></div>
</div>

<!-- GUIDE OVERLAY -->
<div class="guide-overlay" id="guide-overlay">
  <div class="guide-bg" onclick="skipGuide()"></div>
  <div class="spotlight" id="spotlight"></div>
  <div class="tooltip-box" id="tooltip-box">
    <div class="tt-step" id="tt-step">Étape 1 / 6</div>
    <div class="tt-icon" id="tt-icon">👋</div>
    <div class="tt-title" id="tt-title">Bienvenue !</div>
    <div class="tt-body" id="tt-body"></div>
    <div class="tt-nav">
      <button class="tt-skip" onclick="skipGuide()">Passer</button>
      <button class="tt-next" id="tt-next" onclick="nextStep()">Suivant →</button>
    </div>
    <div class="tt-dots" id="tt-dots"></div>
  </div>
</div>

<!-- APP -->
<div class="app" id="app">

  <!-- HEADER -->
  <div class="header">
    <div style="display:flex;align-items:center;gap:8px;">
      <div class="hl-s">S</div>
      <div><span class="hl-express">EXPRESS</span><span class="hl-medical">MEDICAL</span></div>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="text-align:right;">
        <div class="header-tel">📞 90 04 24 00</div>
        <div class="header-status"><div class="dot-on"></div> Service actif</div>
      </div>
      <button class="guide-btn" onclick="startGuide()">❓ Guide</button>
    </div>
  </div>

  <!-- PAGE COMMANDER -->
  <div id="page-home" style="display:flex;flex-direction:column;flex:1;overflow:hidden;">
    <div class="scroll-area">

      <!-- Départ : Halles (défaut) OU libre -->
      <div class="depart-card hint-wrap" id="el-depart">
        <div style="font-size:22px;">📍</div>
        <div style="flex:1;">
          <div class="dc-label">Point de départ</div>
          <div class="dc-name" id="dc-depart-name">Halles de Bamako</div>
          <div class="dc-sub" id="dc-depart-sub">Sogoniko · Bamako, Mali</div>
        </div>
        <div class="dc-badge" id="dc-depart-badge">BASE</div>
      </div>

      <!-- Choix du mode de départ -->
      <div class="depart-toggle">
        <button class="dt-btn active" id="dt-halles" onclick="setDepartMode('halles')">🏠 Depuis les Halles</button>
        <button class="dt-btn" id="dt-libre" onclick="setDepartMode('libre')">📍 Autre quartier de départ</button>
      </div>

      <!-- Mode départ libre : 2 listes de quartiers (PAS de carte) -->
      <div class="libre-wrap" id="libre-wrap">
        <div class="libre-field">
          <label class="libre-lbl">📍 Quartier de départ (où récupérer)</label>
          <div class="libre-search">
            <input class="search-input" id="from-input" type="text" placeholder="Ex: Kalaban Coura, ACI 2000..."
              autocomplete="off" oninput="onLibreSearch('from',this.value)" onkeydown="if(event.key==='Escape')closeLibreSugg('from')">
            <div class="suggestions" id="from-sugg"></div>
          </div>
        </div>
        <div class="libre-field">
          <label class="libre-lbl">🏁 Quartier d'arrivée (où livrer)</label>
          <div class="libre-search">
            <input class="search-input" id="to-input" type="text" placeholder="Ex: Médina Coura, Point G..."
              autocomplete="off" oninput="onLibreSearch('to',this.value)" onkeydown="if(event.key==='Escape')closeLibreSugg('to')">
            <div class="suggestions" id="to-sugg"></div>
          </div>
        </div>
      </div>

      <!-- Recherche -->
      <div class="search-wrap hint-wrap" id="el-search">
        <span class="search-icon">🏁</span>
        <input class="search-input" id="search-input" type="text"
          placeholder="Où livrer ? Tapez un quartier..."
          autocomplete="off" autocorrect="off"
          oninput="onSearch(this.value)"
          onfocus="showHint('hint-search')"
          onblur="hideHint('hint-search')"
          onkeydown="if(event.key==='Escape')closeSugg()">
        <span class="search-clear" id="search-clear" onclick="clearSearch()">✕</span>
        <div class="hint-bubble" id="hint-search">💡 Ex: "Kalaban", "ACI", "Médina Coura", "Point G"</div>
        <div class="suggestions" id="suggestions"></div>
      </div>

      <!-- Tarif -->
      <div class="tarif-card" id="el-tarif">
        <div class="tc-hero">
          <div>
            <div class="tc-dest" id="tc-dest">—</div>
            <div class="tc-dist" id="tc-dist">—</div>
          </div>
          <div class="tc-zone-badge" id="tc-badge">—</div>
        </div>
        <div class="tc-price-row">
          <div>
            <div style="font-size:12px;color:var(--muted);font-weight:500;">Tarif de base</div>
            <div style="font-size:11px;color:var(--muted);">FCFA</div>
          </div>
          <div class="tc-price-main" id="tc-price">—</div>
        </div>
        <div class="tc-meta">
          <div class="tc-meta-item"><div class="tc-meta-label">⏱ Durée estimée</div><div class="tc-meta-val" id="tc-duree">—</div></div>
          <div class="tc-meta-item"><div class="tc-meta-label">📏 Distance</div><div class="tc-meta-val" id="tc-km">—</div></div>
          <div class="tc-meta-item"><div class="tc-meta-label">🗺 Zone tarifaire</div><div class="tc-meta-val" id="tc-zone">—</div></div>
          <div class="tc-meta-item"><div class="tc-meta-label">🏍 Livreurs dispo</div><div class="tc-meta-val">5 disponibles</div></div>
        </div>

        <!-- Options -->
        <div class="options-section" id="el-options">
          <div class="opt-title">Options supplémentaires <span style="font-size:10px;color:var(--muted);font-weight:400;">(optionnel — cochez si besoin)</span></div>
          <div class="opt-item" id="opt-urgent" onclick="toggleOpt(this,500,'urgent')">
            <div class="opt-check" id="chk-urgent"></div>
            <div class="opt-text">⚡ Livraison urgente — prioritaire</div>
            <div class="opt-price">+500 F</div>
          </div>
          <div class="opt-item" id="opt-lourd" onclick="toggleOpt(this,1000,'lourd')">
            <div class="opt-check" id="chk-lourd"></div>
            <div class="opt-text">📦 Colis lourd ou volumineux</div>
            <div class="opt-price">+1 000 F</div>
          </div>
          <div class="opt-item" id="opt-pharma" onclick="toggleOpt(this,1500,'pharma')">
            <div class="opt-check" id="chk-pharma"></div>
            <div class="opt-text">🔬 PharmaCare — vérification commande</div>
            <div class="opt-price">+1 500 F</div>
          </div>
          <div class="opt-item" id="opt-nuit" onclick="toggleOpt(this,500,'nuit')">
            <div class="opt-check" id="chk-nuit"></div>
            <div class="opt-text">🌙 Hors horaires (nuit / dimanche)</div>
            <div class="opt-price">+500 F</div>
          </div>
        </div>

        <!-- Total -->
        <div class="total-row">
          <div style="font-weight:700;font-size:13px;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.5px;">Total à payer</div>
          <div style="text-align:right;">
            <div class="total-val" id="tc-total">—</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);">FCFA</div>
          </div>
        </div>

        <!-- Bouton principal -->
        <button class="btn-commander" id="el-btn-cmd" onclick="ouvrirSheet()">🏍️ Commander cette livraison</button>

        <!-- Paiement direct Wave / Orange -->
        <div class="pay-btns" id="pay-btns-direct">
          <button class="btn-wave" onclick="payerWave()">📱 Payer Wave</button>
          <button class="btn-orange" onclick="payerOrangeMoney()">🟠 Orange Money</button>
        </div>

        <!-- WhatsApp -->
        <button class="btn-whatsapp" onclick="commanderWhatsApp()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Commander par WhatsApp
        </button>
      </div>

      <!-- Zones référence -->
      <div class="sec-title">Tarifs depuis les Halles de Bamako</div>
      <div class="zones-grid" id="zones-grid"></div>

    </div>
  </div>

  <!-- PAGE SUIVI -->
  <div id="page-suivi" class="suivi-page">
    <div class="scroll-area" style="padding-top:16px;"><div id="suivi-content"></div></div>
  </div>

  <!-- PAGE AIDE -->
  <div id="page-aide" class="aide-page">
    <div class="aide-scroll">

      <div class="aide-section">🚀 Comment utiliser l'application</div>

      <div class="step-card">
        <div class="step-num">1</div>
        <div>
          <div class="step-title">Entrez votre destination</div>
          <div class="step-desc">Tapez le nom du quartier où vous voulez livrer. Exemples : "Kalaban", "ACI 2000", "Point G", "Médina". Des suggestions apparaissent — choisissez dans la liste.</div>
        </div>
      </div>
      <div class="step-card">
        <div class="step-num">2</div>
        <div>
          <div class="step-title">Consultez le tarif automatique</div>
          <div class="step-desc">Le prix s'affiche immédiatement selon la zone. Zone 1 = proche des Halles (1 000 F). Plus c'est loin, plus le numéro de zone est grand.</div>
        </div>
      </div>
      <div class="step-card">
        <div class="step-num">3</div>
        <div>
          <div class="step-title">Ajoutez des options si nécessaire</div>
          <div class="step-desc"><strong>Urgent</strong> : votre colis passe en priorité. <strong>PharmaCare</strong> : notre pharmacien vérifie votre commande article par article avant livraison. <strong>Lourd</strong> : colis de plus de 5 kg.</div>
        </div>
      </div>
      <div class="step-card">
        <div class="step-num">4</div>
        <div>
          <div class="step-title">Choisissez comment payer</div>
          <div class="step-desc">
            🏍️ <strong>Commander</strong> = paiement en espèces au livreur à l'arrivée<br>
            📱 <strong>Wave</strong> = paiement direct depuis votre app Wave<br>
            🟠 <strong>Orange Money</strong> = paiement via Orange Money<br>
            💬 <strong>WhatsApp</strong> = envoyer la commande par message
          </div>
        </div>
      </div>
      <div class="step-card">
        <div class="step-num">5</div>
        <div>
          <div class="step-title">Suivez votre livraison en temps réel</div>
          <div class="step-desc">Allez dans l'onglet "Mes commandes". Vous verrez la progression : Reçue → Livreur assigné → En route → Livré.</div>
        </div>
      </div>

      <div class="aide-section">❓ Questions fréquentes</div>

      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Combien de temps pour une livraison ? <span class="faq-chevron">▼</span></div>
        <div class="faq-a">Zone 1 (0–4 km) : 10–15 min · Zone 2 (4–8 km) : 15–25 min · Zone 3 (8–14 km) : 25–40 min · Zone 4 : 35–55 min · Zone 5 : 45–80 min. Ces durées dépendent de la circulation.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Comment fonctionne PharmaCare ? <span class="faq-chevron">▼</span></div>
        <div class="faq-a">Le service PharmaCare est assuré par notre pharmacien diplômé. Il vérifie votre commande médicale : péremptions, dosages, conformité avec votre bon de commande. Supplément : 1 500 F.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Comment payer avec Wave ? <span class="faq-chevron">▼</span></div>
        <div class="faq-a">Cliquez sur "Payer Wave" après avoir choisi votre destination. L'application Wave s'ouvre automatiquement avec le montant exact. Confirmez depuis votre téléphone.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Que faire si ma livraison est en retard ? <span class="faq-chevron">▼</span></div>
        <div class="faq-a">Appelez directement le 90 04 24 00 ou envoyez un message WhatsApp. Notre équipe répond immédiatement.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Livrez-vous en dehors de Bamako ? <span class="faq-chevron">▼</span></div>
        <div class="faq-a">Oui — Kati, Moribabougou, Baguineda, Dialakorodji (Zone 5). Pour Koulikoro, Siby ou plus loin, appelez le 90 04 24 00 pour un devis.</div>
      </div>
      <div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-q">Quels types de colis livrez-vous ? <span class="faq-chevron">▼</span></div>
        <div class="faq-a">Médicaments, ordonnances, résultats d'analyses, matériels médicaux, colis pharmaceutiques, documents confidentiels. Tout est traité avec discrétion par notre équipe.</div>
      </div>

      <div class="aide-section">📞 Nous contacter</div>

      <div class="contact-card" onclick="window.open('tel:+22390042400')">
        <div class="contact-icon">📞</div>
        <div>
          <div class="contact-title">Appeler le 90 04 24 00</div>
          <div class="contact-sub">Service client disponible tous les jours</div>
        </div>
      </div>
      <div class="contact-card" onclick="window.open('https://wa.me/22390042400','_blank')">
        <div class="contact-icon">💬</div>
        <div>
          <div class="contact-title">WhatsApp</div>
          <div class="contact-sub">Envoyer un message directement</div>
        </div>
      </div>

      <button class="btn-restart" onclick="startGuide();showPage('home')">🎯 Relancer le guide interactif</button>
      <div style="height:16px;"></div>
      <button onclick="openAdminLogin()" style="width:100%;padding:13px;background:transparent;border:1px solid rgba(0,0,0,.12);border-radius:10px;color:#888;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">🔒 Espace gérant</button>
      <div style="height:10px;"></div>
      <button onclick="openLivreurSpace()" style="width:100%;padding:13px;background:transparent;border:1px solid rgba(11,31,74,.15);border-radius:10px;color:#0B1F4A;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">🏍️ Espace livreur</button>
      <div style="height:24px;"></div>
    </div>
  </div>

  <!-- PAGE PRO (ABONNEMENTS) -->
  <div id="page-pro" class="aide-page">
    <div class="aide-scroll">
      <div class="pro-hero">
        <div class="pro-hero-badge">💼 OFFRE PROFESSIONNELLE</div>
        <div class="pro-hero-title">Abonnement S Express Medical</div>
        <div class="pro-hero-sub">Pour les cliniques, laboratoires, cabinets, pharmacies, grossistes et ONG. Des livraisons régulières, un tarif avantageux, une facture mensuelle.</div>
      </div>

      <div class="pro-why">
        <div class="pro-why-item"><span>✓</span> Tarif réduit garanti sur chaque course</div>
        <div class="pro-why-item"><span>✓</span> Bordereau certifié pour chaque livraison</div>
        <div class="pro-why-item"><span>✓</span> Facture mensuelle claire (comptabilité facile)</div>
        <div class="pro-why-item"><span>✓</span> Priorité de traitement de vos demandes</div>
      </div>

      <div class="pro-section-title">Nos formules</div>

      <!-- BRONZE -->
      <div class="pro-card">
        <div class="pro-card-head">
          <div class="pro-card-name">🥉 Bronze</div>
          <div class="pro-card-price">25 000 <span>F/mois</span></div>
        </div>
        <div class="pro-card-courses">20 courses incluses · 1 250 F / course</div>
        <div class="pro-card-feats">
          <div>✓ Tarif fixe préférentiel</div>
          <div>✓ Bordereau certifié</div>
          <div>✓ Facturation mensuelle</div>
        </div>
        <div class="pro-card-for">Idéal : petit cabinet, petite pharmacie</div>
      </div>

      <!-- SILVER (mis en avant) -->
      <div class="pro-card pro-card-featured">
        <div class="pro-card-tag">★ LE PLUS CHOISI</div>
        <div class="pro-card-head">
          <div class="pro-card-name">🥈 Silver</div>
          <div class="pro-card-price">50 000 <span>F/mois</span></div>
        </div>
        <div class="pro-card-courses">45 courses incluses · ~1 100 F / course</div>
        <div class="pro-card-feats">
          <div>✓ Tout le Bronze, plus :</div>
          <div>✓ Priorité sur vos courses</div>
          <div>✓ 1 course urgente / jour offerte</div>
        </div>
        <div class="pro-card-for">Idéal : clinique, laboratoire actif</div>
      </div>

      <!-- GOLD -->
      <div class="pro-card">
        <div class="pro-card-head">
          <div class="pro-card-name">🥇 Gold</div>
          <div class="pro-card-price">90 000 <span>F/mois</span></div>
        </div>
        <div class="pro-card-courses">90 courses incluses · 1 000 F / course</div>
        <div class="pro-card-feats">
          <div>✓ Tout le Silver, plus :</div>
          <div>✓ Livreur dédié possible</div>
          <div>✓ Courses urgentes illimitées</div>
          <div>✓ Bilan mensuel détaillé</div>
        </div>
        <div class="pro-card-for">Idéal : gros labo, grossiste, ONG</div>
      </div>

      <div class="pro-note">Les courses au-delà du forfait sont facturées au tarif réduit de votre formule. Engagement mensuel, sans frais cachés.</div>

      <button class="pro-cta" onclick="proContact()">📲 Souscrire / Demander un devis</button>
      <div style="height:24px;"></div>
    </div>
  </div>

  <!-- BOTTOM NAV -->
  <div class="bottom-nav">
    <button class="bn-item active" id="btn-home" onclick="showPage('home')">
      <span class="bn-icon">🏍️</span><span class="bn-label">Commander</span>
    </button>
    <button class="bn-item" id="btn-suivi" onclick="showPage('suivi')">
      <span class="bn-icon">📦</span><span class="bn-label">Mes commandes</span>
    </button>
    <button class="bn-item" id="btn-pro" onclick="showPage('pro')">
      <span class="bn-icon">💼</span><span class="bn-label">Pro</span>
    </button>
    <button class="bn-item" id="btn-aide" onclick="showPage('aide')">
      <span class="bn-icon">❓</span><span class="bn-label">Aide</span>
    </button>
  </div>
</div>

<!-- SHEET -->
<div class="modal-bg" id="modal-bg" onclick="closeSheet(event)">
  <div class="modal-sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">Finaliser la commande</div>
    <div class="sheet-sub">Remplissez vos informations pour confirmer</div>
    <div class="input-group">
      <label class="input-label">Votre nom / structure *</label>
      <input class="input-field" id="cli-nom" type="text" placeholder="Ex: Pharmacie Alpha, Dr. Coulibaly...">
    </div>
    <div class="input-group">
      <label class="input-label">Téléphone *</label>
      <input class="input-field" id="cli-tel" type="tel" placeholder="Ex: 70 00 00 00" inputmode="tel">
    </div>
    <div class="input-group">
      <label class="input-label">Note pour le livreur (optionnel)</label>
      <input class="input-field" id="cli-note" type="text" placeholder="Ex: Portail bleu, appeler avant d'arriver...">
    </div>
    <div class="summary-box" id="summary-box"></div>
    <div class="sum-total">
      <span class="sum-total-label">TOTAL À PAYER</span>
      <span class="sum-total-val" id="sheet-total">—</span>
    </div>
    <div class="pay-title">Mode de paiement</div>
    <div class="pay-options">
      <div class="pay-opt selected" id="pay-cash" onclick="selectPay('cash')">
        <div class="pay-opt-icon">💵</div>
        <div class="pay-opt-name">À la livraison</div>
        <div class="pay-opt-sub">Espèces au livreur</div>
      </div>
      <div class="pay-opt" id="pay-wave" onclick="selectPay('wave')">
        <div class="pay-opt-icon">📱</div>
        <div class="pay-opt-name">Wave</div>
        <div class="pay-opt-sub">Paiement direct</div>
      </div>
      <div class="pay-opt" id="pay-orange" onclick="selectPay('orange')">
        <div class="pay-opt-icon">🟠</div>
        <div class="pay-opt-name">Orange Money</div>
        <div class="pay-opt-sub">Paiement direct</div>
      </div>
      <div class="pay-opt" id="pay-whatsapp" onclick="selectPay('whatsapp')">
        <div class="pay-opt-icon">💬</div>
        <div class="pay-opt-name">WhatsApp</div>
        <div class="pay-opt-sub">Via message</div>
      </div>
    </div>
    <button class="btn-confirm" onclick="confirmerCommande()">✅ Confirmer et envoyer</button>
    <button class="btn-cancel-sheet" onclick="closeSheet()">Annuler</button>
  </div>
</div>

<!-- SUCCESS -->
<div class="success-overlay" id="success">
  <div class="success-check">✓</div>
  <div class="success-title">Commande envoyée !</div>
  <div class="success-sub" id="success-sub">Un livreur va vous contacter très bientôt.</div>
  <button class="success-btn" onclick="closeSuccess()">Suivre ma commande →</button>
</div>

<script>
// ═══════════════════════ SUPABASE ═══════════════════════
const SB_URL = "https://ynatpckhrclwzzcakilh.supabase.co";
const SB_KEY = "sb_publishable_YhSt4ibzzob6TfgHQmpKEQ_ZiexF4B2";
const WAVE_NUM = "90042400";
const ORANGE_NUM = "90042400";

let sb=null, firebaseOk=false;
try{ sb = supabase.createClient(SB_URL, SB_KEY); window.__sbShared = sb; firebaseOk=true; }
catch(e){ console.warn('Supabase mode local'); }

// ═══════════════════════ DONNÉES ═══════════════════════
const ZONES=[
  {num:1,label:'Zone 1',color:'#16A34A',shade:'#F0FDF4',tarif:1000,dist:'0–4 km',duree:'10–15 min',exemples:'Sogoniko, Faladié, Magnambougou, Niamakoro'},
  {num:2,label:'Zone 2',color:'#0891B2',shade:'#E0F7FA',tarif:1500,dist:'4–8 km',duree:'15–25 min',exemples:'Kalaban Coura, Golf, Sébénicoro, Yirimadio'},
  {num:3,label:'Zone 3',color:'#EA580C',shade:'#FFF7ED',tarif:2000,dist:'8–14 km',duree:'25–40 min',exemples:'Médina Coura, ACI 2000, Hippodrome, Point G'},
  {num:4,label:'Zone 4',color:'#7C3AED',shade:'#F3E8FF',tarif:2500,dist:'14–22 km',duree:'35–55 min',exemples:'Titibougou, Boulkassobougou, Kalabancoro'},
  {num:5,label:'Zone 5',color:'#E8302A',shade:'#FFF0EF',tarif:3500,dist:'22 km+',duree:'45–80 min',exemples:'Kati, Moribabougou, Dialakorodji, Baguineda'},
];
const DESTS=[
  {name:'Sogoniko',z:1,lat:12.6047,lng:-7.9661,km:1.2},{name:'Faladié',z:1,lat:12.6039,lng:-7.9457,km:2.0},
  {name:'Magnambougou',z:1,lat:12.615,lng:-7.9566,km:2.3},{name:'Niamakoro',z:1,lat:12.5863,lng:-7.962,km:1.0},
  {name:'Faladié Sema',z:1,lat:12.602,lng:-7.94,km:2.5},{name:'Sogoniko Marché',z:1,lat:12.599,lng:-7.97,km:0.8},
  {name:'Kalaban Coura',z:2,lat:12.5617,lng:-7.9805,km:4.5},{name:'Kalaban Coura ACI',z:2,lat:12.568,lng:-7.975,km:4.0},
  {name:'Guarantiguibougou',z:2,lat:12.567,lng:-8.0005,km:5.8},{name:'Golf',z:2,lat:12.61,lng:-7.99,km:4.2},
  {name:'Sébénicoro',z:2,lat:12.592,lng:-7.999,km:4.6},{name:'Badalabougou',z:2,lat:12.62,lng:-7.998,km:5.5},
  {name:'Yirimadio',z:2,lat:12.585,lng:-7.92,km:5.5},{name:'Sabalibougou',z:2,lat:12.57,lng:-7.95,km:4.2},
  {name:'Dianéguela',z:2,lat:12.575,lng:-7.94,km:4.6},{name:'Sokorodji',z:2,lat:12.605,lng:-7.935,km:4.0},
  {name:'Daoudabougou',z:2,lat:12.632,lng:-7.973,km:5.9},{name:'Kabala',z:2,lat:12.56,lng:-7.96,km:4.8},
  {name:'Médina Coura',z:3,lat:12.6552,lng:-7.9933,km:9.0},{name:'Bozola',z:3,lat:12.658,lng:-7.998,km:9.5},
  {name:'Quinzambougou',z:3,lat:12.66,lng:-8.005,km:10.0},{name:'Niarela',z:3,lat:12.653,lng:-8.002,km:9.8},
  {name:'Hippodrome',z:3,lat:12.649,lng:-8.01,km:10.5},{name:'ACI 2000',z:3,lat:12.64,lng:-8.025,km:11.0},
  {name:'Hamdallaye ACI',z:3,lat:12.643,lng:-8.02,km:10.8},{name:'Lafiabougou',z:3,lat:12.645,lng:-8.03,km:11.5},
  {name:'Korofina Nord',z:3,lat:12.67,lng:-8.005,km:10.3},{name:'Missira',z:3,lat:12.661,lng:-8.0,km:9.7},
  {name:'Niamana',z:3,lat:12.61,lng:-7.9,km:8.5},{name:'Sénou',z:3,lat:12.53,lng:-7.95,km:9.5},
  {name:'Point G',z:3,lat:12.675,lng:-8.02,km:12.0},{name:'Koulouba',z:3,lat:12.675,lng:-8.03,km:12.5},
  {name:'Banconi',z:3,lat:12.682,lng:-8.015,km:11.8},{name:'Djélibougou',z:3,lat:12.675,lng:-8.007,km:11.0},
  {name:'Sikoroni',z:3,lat:12.678,lng:-8.03,km:12.2},{name:'Taliko',z:3,lat:12.655,lng:-8.035,km:11.8},
  {name:'Boulkassobougou',z:4,lat:12.705,lng:-8.02,km:14.5},{name:'Titibougou',z:4,lat:12.6695,lng:-7.9136,km:15.0},
  {name:"N'Gabacoro",z:4,lat:12.66,lng:-7.89,km:16.0},{name:'Kalabancoro',z:4,lat:12.59,lng:-7.88,km:14.2},
  {name:'Dialakorobougou',z:4,lat:12.61,lng:-7.87,km:15.8},{name:'Samanko',z:4,lat:12.54,lng:-7.92,km:16.5},
  {name:'Sénou Extension',z:4,lat:12.51,lng:-7.95,km:17.0},{name:'Baguineda entrée',z:4,lat:12.60,lng:-7.85,km:18.5},
  {name:'Kati Centre',z:5,lat:12.75,lng:-8.07,km:22.0},{name:'Kati Extension',z:5,lat:12.77,lng:-8.09,km:25.0},
  {name:'Dialakorodji',z:5,lat:12.65,lng:-8.10,km:23.0},{name:'Moribabougou',z:5,lat:12.6997,lng:-7.8486,km:26.0},
  {name:'Baguineda',z:5,lat:12.615,lng:-7.83,km:24.0},{name:'Sanankoroba',z:5,lat:12.45,lng:-8.0,km:28.0},
];

// ═══════════════════════ STATE ═══════════════════════
let sel=null, basePrice=0, selectedPay='cash';
// Coordonnées de ta base (Halles de Bamako, Sogoniko)
const BASE_COORDS={lat:12.6047,lng:-7.9661};
// Mode de départ : 'halles' ou 'libre'
let departMode='halles';
// Points choisis sur la carte (mode libre)
let fromPoint=null, toPoint=null;
// Frais d'approche calculé (mode libre)
let approachFee=0;

// Distance en km entre 2 points GPS (formule de Haversine)
function gpsDistance(a,b){
  const R=6371, toRad=x=>x*Math.PI/180;
  const dLat=toRad(b.lat-a.lat), dLng=toRad(b.lng-a.lng);
  const lat1=toRad(a.lat), lat2=toRad(b.lat);
  const h=Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLng/2)**2;
  return R*2*Math.asin(Math.sqrt(h));
}
// Convertir une distance (km) en zone tarifaire
function zoneFromKm(km){
  if(km<=4) return 1;
  if(km<=8) return 2;
  if(km<=14) return 3;
  if(km<=22) return 4;
  return 5;
}
// Frais d'approche selon distance base -> point de départ
function approachFromKm(km){
  if(km<3) return 0;
  if(km<7) return 300;
  if(km<12) return 500;
  return 750;
}

const opts={urgent:false,lourd:false,pharma:false,nuit:false};
const optVals={urgent:500,lourd:1000,pharma:1500,nuit:500};
const optLabels={urgent:'⚡ Urgent',lourd:'📦 Colis lourd',pharma:'🔬 PharmaCare',nuit:'🌙 Hors horaires'};
function total(){ let t=basePrice+approachFee; Object.keys(opts).forEach(k=>{if(opts[k])t+=optVals[k];}); return t; }
function fmt(n){ return (n||0).toLocaleString('fr-FR'); }
function fmtTime(ts){ return new Date(ts).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}); }

// ═══════════════════════ GUIDE ═══════════════════════
const STEPS=[
  {icon:'👋',title:'Bienvenue sur S Express Medical !',body:'Application de livraison médicale rapide à Bamako. Ce guide vous explique tout en quelques étapes.',target:null},
  {icon:'📍',title:'Choisissez votre point de départ',body:'Par défaut, les livraisons partent des <strong>Halles de Bamako</strong>. Mais vous pouvez choisir <strong>un autre quartier de départ</strong> avec « 📍 Autre quartier de départ », puis indiquer le quartier de départ et celui d\'arrivée.',target:'el-depart',pos:'below'},
  {icon:'🔍',title:'Recherchez votre destination',body:'Tapez le nom du <strong>quartier</strong> où vous livrez. Ex : "Kalaban", "ACI 2000", "Point G". Choisissez dans la liste qui apparaît.',target:'el-search',pos:'below'},
  {icon:'💰',title:'Le tarif s\'affiche automatiquement',body:'Dès que vous choisissez un quartier, le <strong>prix exact</strong> s\'affiche. La distance et la durée estimée aussi.',target:'el-tarif',pos:'below',showCard:true},
  {icon:'⚙️',title:'Options supplémentaires',body:'Cochez <strong>Urgent</strong> si c\'est prioritaire. Cochez <strong>PharmaCare</strong> si vous voulez que notre pharmacien vérifie votre commande médicale.',target:'el-options',pos:'below',showCard:true},
  {icon:'🏍️',title:'3 façons de commander',body:'• <strong>Commander</strong> = payer le livreur en cash à l\'arrivée<br>• <strong>Wave / Orange Money</strong> = payer depuis votre téléphone maintenant<br>• <strong>WhatsApp</strong> = envoyer la commande par message',target:'el-btn-cmd',pos:'above',showCard:true},
];
let guideIdx=0;

function startGuide(){
  guideIdx=0;
  document.getElementById('guide-overlay').classList.add('active');
  renderStep(0);
}
function renderStep(i){
  const s=STEPS[i];
  document.getElementById('tt-step').textContent=`Étape ${i+1} / ${STEPS.length}`;
  document.getElementById('tt-icon').textContent=s.icon;
  document.getElementById('tt-title').textContent=s.title;
  document.getElementById('tt-body').innerHTML=s.body;
  document.getElementById('tt-next').textContent=i===STEPS.length-1?'✅ Terminer':'Suivant →';
  document.getElementById('tt-dots').innerHTML=STEPS.map((_,j)=>`<div class="tt-dot ${j===i?'active':''}"></div>`).join('');
  const tip=document.getElementById('tooltip-box');
  const spot=document.getElementById('spotlight');
  if(s.showCard) document.getElementById('el-tarif').classList.add('show');
  if(s.target){
    const el=document.getElementById(s.target);
    if(el){
      el.scrollIntoView({behavior:'smooth',block:'nearest'});
      setTimeout(()=>{
        const r=el.getBoundingClientRect();
        spot.style.cssText=`left:${r.left-6}px;top:${r.top-6}px;width:${r.width+12}px;height:${r.height+12}px;display:block;`;
        const tTop = s.pos==='below' ? r.bottom+14 : Math.max(r.top-240,8);
        const tLeft = Math.min(Math.max(r.left,8), window.innerWidth-306);
        tip.style.cssText=`top:${tTop}px;left:${tLeft}px;transform:none;`;
        tip.classList.add('show');
      },300);
    }
  } else {
    spot.style.display='none';
    tip.style.cssText='top:50%;left:50%;transform:translate(-50%,-50%);';
    tip.classList.add('show');
  }
}
function nextStep(){
  document.getElementById('tooltip-box').classList.remove('show');
  if(guideIdx<STEPS.length-1){ setTimeout(()=>{ guideIdx++; renderStep(guideIdx); },200); }
  else skipGuide();
}
function skipGuide(){
  document.getElementById('guide-overlay').classList.remove('active');
  document.getElementById('tooltip-box').classList.remove('show');
  document.getElementById('spotlight').style.display='none';
  localStorage.setItem('sx_guide_done','1');
  if(!sel) document.getElementById('el-tarif').classList.remove('show');
}

// ═══════════════════════ HINTS ═══════════════════════
let hintT={};
function showHint(id){ clearTimeout(hintT[id]); const e=document.getElementById(id); if(e){e.classList.add('show'); hintT[id]=setTimeout(()=>hideHint(id),4000);} }
function hideHint(id){ const e=document.getElementById(id); if(e) e.classList.remove('show'); }

// ═══════════════════════ SEARCH ═══════════════════════
function onSearch(v){
  const s=v.trim().toLowerCase();
  document.getElementById('search-clear').classList.toggle('show',s.length>0);
  const box=document.getElementById('suggestions');
  if(!s){ box.classList.remove('open'); return; }
  const res=DESTS.filter(d=>d.name.toLowerCase().includes(s)).slice(0,7);
  if(!res.length){
    box.innerHTML=`<div class="sugg-item"><div style="color:var(--muted);font-size:13px;">Aucun résultat — essayez un autre quartier</div></div>`;
  } else {
    box.innerHTML=res.map(d=>{
      const z=ZONES[d.z-1];
      return `<div class="sugg-item" onclick="selectDest(${DESTS.indexOf(d)})">
        <div class="sugg-zone-dot" style="background:${z.color}"></div>
        <div style="flex:1;min-width:0;">
          <div class="sugg-name">${d.name}</div>
          <div class="sugg-detail">${z.label} · ${d.km} km · ${z.duree}</div>
        </div>
        <div class="sugg-price">${fmt(z.tarif)} F</div>
      </div>`;
    }).join('');
  }
  box.classList.add('open');
}
function closeSugg(){ document.getElementById('suggestions').classList.remove('open'); }
function clearSearch(){
  document.getElementById('search-input').value='';
  document.getElementById('search-clear').classList.remove('show');
  closeSugg();
  document.getElementById('el-tarif').classList.remove('show');
  document.getElementById('pay-btns-direct').classList.remove('show');
  sel=null;
}
document.addEventListener('click',e=>{ if(!e.target.closest('.search-wrap')) closeSugg(); });

// ═══════════════════════ DÉPART LIBRE (2 quartiers, sans carte) ═══════════════════════
let fromDest=null, toDest=null;

function setDepartMode(mode){
  departMode=mode;
  document.getElementById('dt-halles').classList.toggle('active',mode==='halles');
  document.getElementById('dt-libre').classList.toggle('active',mode==='libre');
  const libreWrap=document.getElementById('libre-wrap');
  const searchWrap=document.querySelector('.search-wrap');
  if(mode==='halles'){
    libreWrap.classList.remove('show');
    searchWrap.style.display='';
    document.getElementById('dc-depart-name').textContent='Halles de Bamako';
    document.getElementById('dc-depart-sub').textContent='Sogoniko · Bamako, Mali';
    document.getElementById('dc-depart-badge').textContent='BASE';
    approachFee=0;
    fromDest=null; toDest=null;
    if(sel) updateTotal();
  } else {
    libreWrap.classList.add('show');
    searchWrap.style.display='none';
    document.getElementById('dc-depart-name').textContent='Quartiers au choix';
    document.getElementById('dc-depart-sub').textContent='Choisissez départ et arrivée';
    document.getElementById('dc-depart-badge').textContent='LIBRE';
    document.getElementById('el-tarif').classList.remove('show');
    document.getElementById('pay-btns-direct').classList.remove('show');
    sel=null;
  }
}

// Recherche de quartier pour départ ou arrivée
function onLibreSearch(which,v){
  const s=v.trim().toLowerCase();
  const box=document.getElementById(which+'-sugg');
  if(!s){ box.classList.remove('open'); return; }
  const res=DESTS.filter(d=>d.name.toLowerCase().includes(s)).slice(0,7);
  if(!res.length){
    box.innerHTML=`<div class="sugg-item"><div style="color:var(--muted);font-size:13px;">Aucun quartier trouvé</div></div>`;
  } else {
    box.innerHTML=res.map(d=>{
      const z=ZONES[d.z-1];
      return `<div class="sugg-item" onclick="pickLibre('${which}',${DESTS.indexOf(d)})">
        <div class="sugg-zone-dot" style="background:${z.color}"></div>
        <div style="flex:1;min-width:0;"><div class="sugg-name">${d.name}</div></div>
      </div>`;
    }).join('');
  }
  box.classList.add('open');
}
function closeLibreSugg(which){ document.getElementById(which+'-sugg').classList.remove('open'); }

function pickLibre(which,i){
  const d=DESTS[i];
  if(which==='from'){ fromDest=d; document.getElementById('from-input').value=d.name; }
  else { toDest=d; document.getElementById('to-input').value=d.name; }
  closeLibreSugg(which);
  if(fromDest&&toDest) computeLibrePrice();
}

function computeLibrePrice(){
  // Facteur routier : le vol d'oiseau sous-estime la vraie distance de route.
  // x1.4 = standard pour estimer la distance réelle par les rues (cohérent avec les km enregistrés).
  const ROUTE_FACTOR=1.4;
  // distance course (départ -> arrivée) via coordonnées des quartiers
  const courseKm=gpsDistance({lat:fromDest.lat,lng:fromDest.lng},{lat:toDest.lat,lng:toDest.lng})*ROUTE_FACTOR;
  // distance d'approche (base -> départ)
  const approachKm=gpsDistance(BASE_COORDS,{lat:fromDest.lat,lng:fromDest.lng})*ROUTE_FACTOR;
  const zn=zoneFromKm(courseKm);
  const z=ZONES[zn-1];
  basePrice=z.tarif;
  approachFee=approachFromKm(approachKm);
  sel={name:fromDest.name+' → '+toDest.name, z:zn, lat:toDest.lat, lng:toDest.lng,
       km:Math.round(courseKm*10)/10, fromName:fromDest.name, toName:toDest.name,
       fromLat:fromDest.lat, fromLng:fromDest.lng,
       approachKm:Math.round(approachKm*10)/10, libre:true};
  document.getElementById('tc-dest').textContent=fromDest.name+' → '+toDest.name;
  document.getElementById('tc-dist').textContent=sel.km+' km de course';
  document.getElementById('tc-price').textContent=fmt(z.tarif);
  document.getElementById('tc-duree').textContent=z.duree;
  document.getElementById('tc-km').textContent=sel.km+' km';
  document.getElementById('tc-zone').textContent=z.label;
  const b=document.getElementById('tc-badge');
  b.textContent=z.label; b.style.background=z.shade; b.style.color=z.color;
  Object.keys(opts).forEach(k=>{ opts[k]=false; document.getElementById('opt-'+k).classList.remove('selected'); document.getElementById('chk-'+k).textContent=''; });
  updateTotal();
  document.getElementById('el-tarif').classList.add('show');
  document.getElementById('pay-btns-direct').classList.add('show');
  document.getElementById('el-tarif').scrollIntoView({behavior:'smooth',block:'nearest'});
}

// Fermer les suggestions libre en cliquant ailleurs
document.addEventListener('click',e=>{ if(!e.target.closest('.libre-field')){ closeLibreSugg('from'); closeLibreSugg('to'); } });

function selectDest(i){
  sel=DESTS[i];
  approachFee=0;
  const z=ZONES[sel.z-1];
  basePrice=z.tarif;
  document.getElementById('search-input').value=sel.name;
  document.getElementById('search-clear').classList.add('show');
  closeSugg();
  document.getElementById('tc-dest').textContent=sel.name;
  document.getElementById('tc-dist').textContent=sel.km+' km depuis les Halles de Bamako';
  document.getElementById('tc-price').textContent=fmt(z.tarif);
  document.getElementById('tc-duree').textContent=z.duree;
  document.getElementById('tc-km').textContent=sel.km+' km';
  document.getElementById('tc-zone').textContent=z.label+' — '+z.dist;
  const b=document.getElementById('tc-badge');
  b.textContent=z.label; b.style.background=z.shade; b.style.color=z.color;
  Object.keys(opts).forEach(k=>{ opts[k]=false; document.getElementById('opt-'+k).classList.remove('selected'); document.getElementById('chk-'+k).textContent=''; });
  updateTotal();
  document.getElementById('el-tarif').classList.add('show');
  document.getElementById('pay-btns-direct').classList.add('show');
  document.getElementById('el-tarif').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function toggleOpt(el,v,k){ opts[k]=!opts[k]; el.classList.toggle('selected',opts[k]); document.getElementById('chk-'+k).textContent=opts[k]?'✓':''; updateTotal(); }
function updateTotal(){
  document.getElementById('tc-total').textContent=fmt(total());
  // ligne frais d'approche dans la carte tarif
  let af=document.getElementById('tc-approach-line');
  if(approachFee>0){
    if(!af){
      af=document.createElement('div');
      af.id='tc-approach-line';
      af.className='tc-price-row';
      af.style.cssText='border-top:1px dashed rgba(255,255,255,.15);padding-top:8px;';
      af.innerHTML='<div><div style="font-size:12px;color:var(--gold);font-weight:600;">🛵 Frais d\'approche</div><div style="font-size:11px;color:var(--muted);">départ hors base</div></div><div class="tc-price-main" style="font-size:18px;color:var(--gold);">+'+fmt(approachFee)+'</div>';
      const pr=document.querySelector('#el-tarif .tc-price-row');
      if(pr&&pr.parentNode) pr.parentNode.insertBefore(af,pr.nextSibling);
    } else {
      af.querySelector('.tc-price-main').textContent='+'+fmt(approachFee);
      af.style.display='';
    }
  } else if(af){ af.style.display='none'; }
}

// ═══════════════════════ PAIEMENT DIRECT ═══════════════════════
function payerWave(){
  if(!sel){ alert('Sélectionnez d\'abord une destination.'); return; }
  const m=total();
  window.location.href=`wave://send?phone=${WAVE_NUM}&amount=${m}&note=SExpress-${sel.name}`;
  setTimeout(()=>{ if(confirm(`Payer ${fmt(m)} F à S Express Medical via Wave (${WAVE_NUM}) ?`)) window.open(`https://wave.com/out/send?phone=${WAVE_NUM}`,'_blank'); },1500);
}
function payerOrangeMoney(){
  if(!sel){ alert('Sélectionnez d\'abord une destination.'); return; }
  const m=total();
  alert(`Orange Money\n\nEnvoyez ${fmt(m)} F au numéro :\n📱 ${ORANGE_NUM}\n\nOuvrez votre application Orange Money pour effectuer le paiement.`);
}

// ═══════════════════════ SHEET ═══════════════════════
function selectPay(t){ selectedPay=t; ['cash','wave','orange','whatsapp'].forEach(p=>document.getElementById('pay-'+p).classList.toggle('selected',p===t)); }

function ouvrirSheet(){
  if(!sel) return;
  const z=ZONES[sel.z-1];
  const departLabel = sel.libre ? 'Quartier choisi' : 'Halles de Bamako';
  let rows=`
    <div class="sum-row"><span class="sum-label">📍 Départ</span><span class="sum-val">${departLabel}</span></div>
    <div class="sum-row"><span class="sum-label">🏁 Destination</span><span class="sum-val">${sel.name}</span></div>
    <div class="sum-row"><span class="sum-label">📏 Distance</span><span class="sum-val">${sel.km} km</span></div>
    <div class="sum-row"><span class="sum-label">⏱ Durée</span><span class="sum-val">${z.duree}</span></div>
    <div class="sum-row"><span class="sum-label">💰 Tarif base</span><span class="sum-val">${fmt(z.tarif)} F</span></div>`;
  if(approachFee>0) rows+=`<div class="sum-row"><span class="sum-label">🛵 Frais d'approche</span><span class="sum-val" style="color:var(--gold)">+${fmt(approachFee)} F</span></div>`;
  Object.keys(opts).forEach(k=>{ if(opts[k]) rows+=`<div class="sum-row"><span class="sum-label">${optLabels[k]}</span><span class="sum-val" style="color:var(--red)">+${fmt(optVals[k])} F</span></div>`; });
  document.getElementById('summary-box').innerHTML=rows;
  document.getElementById('sheet-total').textContent=fmt(total());
  selectPay('cash');
  document.getElementById('modal-bg').classList.add('open');
}
function closeSheet(e){ if(e&&e.target!==document.getElementById('modal-bg')) return; document.getElementById('modal-bg').classList.remove('open'); }

function confirmerCommande(){
  const nom=document.getElementById('cli-nom').value.trim();
  const tel=document.getElementById('cli-tel').value.trim();
  if(!nom){ alert('Veuillez entrer votre nom ou structure.'); return; }
  if(!tel){ alert('Veuillez entrer votre numéro de téléphone.'); return; }
  if(selectedPay==='whatsapp'){ commanderWhatsApp(); return; }
  if(selectedPay==='wave') payerWave();
  else if(selectedPay==='orange') payerOrangeMoney();
  const note=document.getElementById('cli-note').value.trim();
  const z=ZONES[sel.z-1];
  const noteFull = (sel.libre ? `[Départ: ${sel.fromName} → Arrivée: ${sel.toName}] ` : '') + note;
  const order={
    id:Date.now(),timestamp:Date.now(),client:nom,tel,
    dest:sel.name,lat:sel.lat,lng:sel.lng,km:sel.km,
    zone:sel.z,duree:z.duree,base_price:z.tarif,
    options:Object.keys(opts).filter(k=>opts[k]).map(k=>optLabels[k]),
    total:total(),note:noteFull,paiement:selectedPay,status:'new',livreur:'',
  };
  if(firebaseOk&&sb){
    sb.from('commandes').insert(order).then(({error})=>{
      if(error){ console.warn(error); saveLocal(order); }
      orderOK(order);
    });
  } else { saveLocal(order); orderOK(order); }
}

function saveLocal(o){
  const list=JSON.parse(localStorage.getItem('sx_orders')||'[]'); list.push(o); localStorage.setItem('sx_orders',JSON.stringify(list));
  const my=JSON.parse(localStorage.getItem('sx_my_orders')||'[]'); my.push(o.id); localStorage.setItem('sx_my_orders',JSON.stringify(my));
}
function orderOK(o){
  const my=JSON.parse(localStorage.getItem('sx_my_orders')||'[]');
  if(!my.includes(o.id)){ my.push(o.id); localStorage.setItem('sx_my_orders',JSON.stringify(my)); }
  document.getElementById('modal-bg').classList.remove('open');
  const pl={cash:'Paiement à la livraison',wave:'Paiement Wave',orange:'Paiement Orange Money',whatsapp:'Commande WhatsApp'};
  document.getElementById('success-sub').textContent=`Commande #${String(o.id).slice(-4)} envoyée. Un livreur vous contactera au ${o.tel}. ${pl[o.paiement]||''}.`;
  document.getElementById('success').classList.add('show');
  // Alerte automatique au gérant via WhatsApp (notification fiable)
  notifyManager(o);
}

// Notifie le gérant par WhatsApp avec le récap de la commande
function notifyManager(o){
  const z=ZONES[(o.zone||1)-1]||{};
  const trajet = (o.note&&o.note.includes('Départ:')) ? o.note.split(']')[0].replace('[','') : ('Halles → '+(o.dest||''));
  const pl={cash:'À la livraison (espèces)',wave:'Wave',orange:'Orange Money',whatsapp:'WhatsApp'};
  const msg=`🔔 *NOUVELLE COMMANDE — S Express Medical*\n\n#${String(o.id).slice(-4)}\n👤 Client : ${o.client}\n📞 Tél : ${o.tel}\n📍 ${trajet}\n📏 ${o.km||'—'} km\n💰 *${fmt(o.total||0)} FCFA*\n💳 ${pl[o.paiement]||o.paiement}\n\n⏰ ${new Date(o.timestamp).toLocaleString('fr-FR')}`;
  // Bouton d'alerte visible sur l'écran de succès
  const box=document.getElementById('success-sub');
  if(box){
    let alertBtn=document.getElementById('notify-mgr-btn');
    if(!alertBtn){
      alertBtn=document.createElement('button');
      alertBtn.id='notify-mgr-btn';
      alertBtn.style.cssText='margin-top:16px;width:100%;padding:14px;background:#25D366;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:800;cursor:pointer;font-family:inherit;';
      box.parentNode.insertBefore(alertBtn, box.nextSibling);
    }
    alertBtn.textContent='📲 Prévenir S Express (WhatsApp)';
    alertBtn.onclick=()=>{ window.open('https://wa.me/22390042400?text='+encodeURIComponent(msg),'_blank'); };
  }
}
function closeSuccess(){ document.getElementById('success').classList.remove('show'); clearSearch(); showPage('suivi'); }

function commanderWhatsApp(){
  if(!sel){ alert('Sélectionnez d\'abord une destination.'); return; }
  const z=ZONES[sel.z-1];
  const o=Object.keys(opts).filter(k=>opts[k]).map(k=>optLabels[k]);
  let depart, dest;
  if(sel.libre){
    depart=`📍 Départ : *${sel.fromName}*`;
    dest=`🏁 Arrivée : *${sel.toName}*`;
  } else {
    depart='📍 Départ : Halles de Bamako';
    dest=`🏁 Destination : *${sel.name}*`;
  }
  const approachTxt = approachFee>0 ? `\n🛵 Frais d'approche : +${fmt(approachFee)} F` : '';
  const msg=`🏍️ *COMMANDE S EXPRESS MEDICAL*\n\n${depart}\n${dest}\n📏 Distance : ${sel.km} km\n⏱ Durée : ${z.duree}\n🗺 ${z.label}${approachTxt}${o.length?'\n⚙️ Options : '+o.join(', '):''}\n\n💰 *TOTAL : ${fmt(total())} FCFA*\n\nMerci de confirmer ma commande.`;
  window.open(`https://wa.me/22390042400?text=${encodeURIComponent(msg)}`, '_blank');
}

// ═══════════════════════ SUIVI ═══════════════════════
const SMAP={
  new:{label:'En attente',cls:'s-new',steps:[true,false,false,false]},
  assigned:{label:'Livreur assigné',cls:'s-assigned',steps:[true,true,false,false]},
  transit:{label:'En route 🏍',cls:'s-transit',steps:[true,true,true,false]},
  done:{label:'Livré ✅',cls:'s-done',steps:[true,true,true,true]},
  cancel:{label:'Annulé',cls:'s-cancel',steps:[false,false,false,false]},
};
function renderSuivi(){
  const ids=JSON.parse(localStorage.getItem('sx_my_orders')||'[]');
  const c=document.getElementById('suivi-content');
  if(!ids.length){ c.innerHTML=`<div class="empty-suivi"><div class="empty-icon">📭</div><div class="empty-title">Aucune commande</div><div class="empty-sub">Vos commandes apparaîtront ici après confirmation.</div></div>`; return; }
  if(firebaseOk&&sb){
    const fetchMine = () => {
      sb.from('commandes').select('*').in('id', ids).then(({data,error})=>{
        if(error){ console.warn(error); return; }
        displayOrders(data||[], c);
      });
    };
    fetchMine();
    // Temps réel : rafraîchir dès qu'une commande change
    if(!window._sxClientChan){
      window._sxClientChan = sb.channel('commandes_client_rt')
        .on('postgres_changes',{event:'*',schema:'public',table:'commandes'}, fetchMine)
        .subscribe();
    }
  }
  else { const a=JSON.parse(localStorage.getItem('sx_orders')||'[]'); displayOrders(a.filter(o=>ids.includes(o.id)),c); }
}
function displayOrders(orders,c){
  if(!orders.length){ c.innerHTML=`<div class="empty-suivi"><div class="empty-icon">📭</div><div class="empty-title">Aucune commande</div></div>`; return; }
  const sl=['Reçue','Assignée','En route','Livrée'];
  c.innerHTML=[...orders].sort((a,b)=>b.timestamp-a.timestamp).map(o=>{
    const s=SMAP[o.status]||SMAP.new;
    const steps=o.status!=='cancel'?s.steps:[false,false,false,false];
    return `<div class="order-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <div class="oc-id">#${String(o.id).slice(-4)} · ${fmtTime(o.timestamp)}</div>
          <div class="oc-dest">📍 ${o.dest}</div>
          <div style="font-size:11px;color:var(--muted);">${o.km} km · Zone ${o.zone} · ${o.duree}</div>
          ${o.livreur?`<div style="font-size:12px;color:var(--green);margin-top:4px;">🏍 Livreur : <strong>${o.livreur}</strong></div>`:''}
        </div>
        <span class="oc-status ${s.cls}">${s.label}</span>
      </div>
      <div class="pt-tracker">
        ${sl.map((l,i)=>{
          const d=steps[i], ac=!d&&(i===0||steps[i-1])&&o.status!=='cancel';
          return `${i>0?`<div class="pt-line ${steps[i-1]?'done':''}"></div>`:''}
          <div class="pt-step">
            <div class="pt-dot ${d?'done':ac?'active':''}">${d?'✓':i+1}</div>
            <div class="pt-label ${d||ac?'active':''}">${l}</div>
          </div>`;
        }).join('')}
      </div>
      <div class="oc-footer">
        <div class="oc-price">${fmt(o.total)} F</div>
        ${o.note?`<div style="font-size:11px;color:var(--muted);">📝 ${o.note}</div>`:''}
      </div>
    </div>`;
  }).join('');
}

// ═══════════════════════ NAVIGATION ═══════════════════════
function showPage(p){
  document.getElementById('page-home').style.display=p==='home'?'flex':'none';
  document.getElementById('page-suivi').classList.toggle('show',p==='suivi');
  document.getElementById('page-aide').classList.toggle('show',p==='aide');
  document.getElementById('page-pro').classList.toggle('show',p==='pro');
  ['home','suivi','pro','aide'].forEach(pg=>{ const b=document.getElementById('btn-'+pg); if(b) b.classList.toggle('active',pg===p); });
  if(p==='suivi') renderSuivi();
}
function proContact(){
  const msg='💼 *DEMANDE ABONNEMENT PRO — S Express Medical*\n\nBonjour, je gère une structure médicale et je souhaite des informations sur vos formules d\'abonnement (Bronze / Silver / Gold).\n\nNom de la structure : \nType (clinique/labo/cabinet/pharmacie/ONG) : \nNombre de courses estimé par mois : \n\nMerci de me recontacter.';
  window.open('https://wa.me/22390042400?text='+encodeURIComponent(msg),'_blank');
}

// ═══════════════════════ ZONES ═══════════════════════
function renderZones(){
  document.getElementById('zones-grid').innerHTML=ZONES.map(z=>`
    <div class="zone-row" onclick="filterZone(${z.num})">
      <div class="zone-indicator" style="background:${z.color}"></div>
      <div style="flex:1;">
        <div class="zone-name">${z.label} — ${z.dist}</div>
        <div class="zone-detail">${z.duree}</div>
      </div>
      <div style="text-align:right;">
        <div class="zone-price">${fmt(z.tarif)} F</div>
        <div class="zone-ex">${z.exemples.split(',')[0].trim()}…</div>
      </div>
    </div>`).join('');
}
function filterZone(n){ const e=DESTS.find(d=>d.z===n); if(e){ document.getElementById('search-input').value=e.name; onSearch(e.name); } }

// ═══════════════════════ INIT ═══════════════════════
window.addEventListener('load',()=>{
  renderZones();
  setTimeout(()=>{
    document.getElementById('splash').classList.add('hide');
    setTimeout(()=>{
      document.getElementById('splash').remove();
      if(!localStorage.getItem('sx_guide_done')) startGuide();
    },600);
  },2200);
});
</script>

<!-- ═══ MODE ADMINISTRATEUR ═══ -->
<div id="admin-mode" style="display:none; position:fixed; inset:0; z-index:99999; background:#0B1124; overflow:auto;">


<!-- LOGIN -->
<div class="login-page" id="login-page">
  <div class="login-logo">
    <div class="login-s">S</div>
    <div class="login-name">EXPRESS MEDICAL</div>
    <div class="login-sub">ESPACE ADMINISTRATEUR</div>
  </div>
  <div class="login-card">
    <div class="login-title">Connexion Admin</div>
    <div class="login-hint">Réservé au gestionnaire S Express Medical</div>
    <input class="login-input" type="text" id="login-user" placeholder="Identifiant" autocomplete="off">
    <input class="login-input" type="password" id="login-pass" placeholder="Mot de passe" onkeydown="if(event.key==='Enter')login()">
    <button class="login-btn" onclick="login()">Se connecter →</button>
    <div class="login-error" id="login-err">Identifiant ou mot de passe incorrect</div>
  </div>
</div>

<!-- APP -->
<div class="app" id="admin-app">

  <!-- HEADER -->
  <div class="header">
    <div class="header-left">
      <div class="h-s">S</div>
      <div>
        <div class="h-title">Admin · S Express Medical</div>
        <div class="h-sub">Halles de Bamako · Mali</div>
      </div>
    </div>
    <div class="h-right">
      <div class="live-dot"></div>
      <span class="live-txt">Live</span>
      <button class="logout-btn" onclick="logout()">Déco.</button>
    </div>
  </div>

  <!-- STATS -->
  <div class="stats-strip">
    <div class="stat-box"><div class="stat-val" id="s-new" style="color:#60A5FA;">0</div><div class="stat-lbl">Nouvelles</div></div>
    <div class="stat-box"><div class="stat-val" id="s-transit" style="color:var(--orange);">0</div><div class="stat-lbl">En route</div></div>
    <div class="stat-box"><div class="stat-val" id="s-done" style="color:var(--green);">0</div><div class="stat-lbl">Livrées</div></div>
    <div class="stat-box"><div class="stat-val" id="s-ca" style="color:var(--gold);">0</div><div class="stat-lbl">CA (F)</div></div>
  </div>

  <!-- CONTENU PAGES -->
  <div class="scroll" id="main-scroll">

    <!-- PAGE COMMANDES -->
    <div id="page-orders">
      <div class="new-banner" id="new-banner">
        <div class="nb-icon">🆕</div>
        <div class="nb-text">
          <div class="nb-title" id="new-banner-txt">Nouvelle commande !</div>
          <div class="nb-sub">Appuyez pour voir les détails</div>
        </div>
      </div>
      <div class="filters" id="filters">
        <button class="f-btn active" onclick="setFilter('all',this)">Toutes</button>
        <button class="f-btn" onclick="setFilter('new',this)">🆕 Nouvelles</button>
        <button class="f-btn" onclick="setFilter('assigned',this)">👤 Assignées</button>
        <button class="f-btn" onclick="setFilter('transit',this)">🏍 En route</button>
        <button class="f-btn" onclick="setFilter('done',this)">✅ Livrées</button>
        <button class="f-btn" onclick="setFilter('cancel',this)">❌ Annulées</button>
      </div>
      <div id="orders-list"></div>
    </div>

    <!-- PAGE LIVREURS -->
    <div id="page-livreurs" style="display:none;">
      <div id="livreurs-list"></div>
    </div>

    <!-- PAGE ABONNÉS -->
    <div id="page-abonnes" style="display:none;">
      <div style="padding:12px 4px;">
        <button onclick="openAbonneForm()" style="width:100%;padding:14px;background:linear-gradient(135deg,#16A34A,#15803d);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:800;cursor:pointer;font-family:inherit;margin-bottom:14px;">+ Ajouter un abonné pro</button>
      </div>
      <div id="abonnes-list"></div>
    </div>

  </div>

  <!-- BOTTOM NAV -->
  <div class="bottom-nav">
    <button class="bn active" id="bn-orders" onclick="admShowPage('orders')">
      <span class="bn-icon">📦</span>
      <span class="bn-label">Commandes</span>
    </button>
    <button class="bn" id="bn-livreurs" onclick="admShowPage('livreurs')">
      <span class="bn-icon">🏍️</span>
      <span class="bn-label">Livreurs</span>
    </button>
    <button class="bn" id="bn-abonnes" onclick="admShowPage('abonnes')">
      <span class="bn-icon">💼</span>
      <span class="bn-label">Abonnés</span>
    </button>
    <button class="bn" onclick="openClientApp()">
      <span class="bn-icon">🌐</span>
      <span class="bn-label">Voir app</span>
    </button>
    <button class="bn" onclick="exportData()">
      <span class="bn-icon">💾</span>
      <span class="bn-label">Exporter</span>
    </button>
  </div>

</div>
</div>
<!-- fin admin-mode -->

<div id="toast"></div>

<!-- ═══════════ ESPACE LIVREUR ═══════════ -->
<div id="livreur-mode" style="display:none;position:fixed;inset:0;z-index:99998;background:#f0f2f7;overflow:auto;">
  <!-- Écran 1 : choix du livreur -->
  <div id="lv-login" style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px;">
    <div style="font-size:54px;">🏍️</div>
    <div style="font-family:'Bebas Neue',sans-serif;font-size:34px;color:#0B1F4A;letter-spacing:1px;margin-top:8px;">ESPACE LIVREUR</div>
    <div style="color:#888;font-size:14px;margin-bottom:30px;">Choisissez votre nom pour voir vos courses</div>
    <div id="lv-names" style="width:100%;max-width:340px;display:flex;flex-direction:column;gap:12px;"></div>
    <button onclick="closeLivreurSpace()" style="margin-top:24px;background:transparent;border:none;color:#999;font-size:13px;cursor:pointer;text-decoration:underline;">← Retour à l'application</button>
  </div>

  <!-- Écran 2 : courses du livreur -->
  <div id="lv-dashboard" style="display:none;min-height:100vh;">
    <div style="background:linear-gradient(135deg,#0B1F4A,#0a1838);color:#fff;padding:18px 20px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10;">
      <div>
        <div style="font-size:12px;color:#F5C518;letter-spacing:1px;">ESPACE LIVREUR</div>
        <div id="lv-name" style="font-size:20px;font-weight:800;">—</div>
      </div>
      <button onclick="lvLogout()" style="background:rgba(255,255,255,.12);border:none;color:#fff;padding:9px 14px;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;">Changer</button>
    </div>
    <div style="padding:14px 16px;display:flex;gap:10px;">
      <div style="flex:1;background:#fff;border-radius:12px;padding:14px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,.05);">
        <div id="lv-stat-todo" style="font-size:26px;font-weight:800;color:#F97316;">0</div>
        <div style="font-size:12px;color:#888;">À livrer</div>
      </div>
      <div style="flex:1;background:#fff;border-radius:12px;padding:14px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,.05);">
        <div id="lv-stat-done" style="font-size:26px;font-weight:800;color:#16A34A;">0</div>
        <div style="font-size:12px;color:#888;">Livrées aujourd'hui</div>
      </div>
    </div>
    <div id="lv-courses" style="padding:0 16px 30px;"></div>
  </div>
</div>

<!-- Modal bordereau livreur (réutilise les fonctio
