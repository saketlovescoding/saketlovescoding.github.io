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
            updateStreakTheme();
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
            updateStreakTheme();
        });
    });

    /* Stats page: the streak SVG is drawn by a third party, so pass it our palette */
    function updateStreakTheme() {
        var img = document.getElementById('streak-img');
        if (!img) return;
        var dark = root.getAttribute('data-theme') === 'dark';
        var bg = dark ? '1F2228' : 'FFFFFF';
        var label = dark ? 'E2E4E8' : '1A1C1F';
        var nums = dark ? '8E939A' : '696D73';
        var ring = dark ? 'D17A4F' : 'B85C38';
        img.src = 'https://github-readme-streak-stats.herokuapp.com/?user=saketlovescoding&hide_border=true' +
            '&background=' + bg + '&ring=' + ring + '&fire=' + ring +
            '&currStreakLabel=' + label + '&sideLabels=' + label + '&currStreakNum=' + label +
            '&sideNums=' + nums + '&dates=' + nums;
    }

    syncModeButtons();
    updateStreakTheme();
})();
