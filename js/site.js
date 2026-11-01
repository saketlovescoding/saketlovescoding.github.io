(function () {
    var root = document.documentElement;

    function store(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
    }

    /* ---- Theme (light / dark) ---- */

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', theme);
            store('theme', theme);
        });
    }

    /* ---- Mode (professional / personal) ---- */

    /* Pages that belong to one mode carry data-page-mode on their head script */
    var pageModeEl = document.querySelector('script[data-page-mode]');
    var pageMode = pageModeEl ? pageModeEl.getAttribute('data-page-mode') : null;

    function syncModeButtons() {
        var mode = root.getAttribute('data-mode') || 'professional';
        document.querySelectorAll('[data-mode-btn]').forEach(function (btn) {
            btn.setAttribute('aria-pressed', String(btn.getAttribute('data-mode-btn') === mode));
        });
    }

    document.querySelectorAll('[data-mode-btn]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var mode = btn.getAttribute('data-mode-btn');
            if ((root.getAttribute('data-mode') || 'professional') === mode) return;
            store('mode', mode);
            /* This page only exists in the other mode: go to that mode's home */
            if (pageMode && pageMode !== mode) {
                window.location.href = document.querySelector('.logo').getAttribute('href');
                return;
            }
            root.setAttribute('data-mode', mode);
            syncModeButtons();
        });
    });

    syncModeButtons();
})();
