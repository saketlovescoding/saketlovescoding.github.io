(function () {
    var root = document.documentElement;

    /* ---- Theme toggle ---- */

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', theme);
            try { localStorage.setItem('theme', theme); } catch (e) { /* private mode */ }
            updateStreakTheme();
        });
    }

    /* Stats page: the streak SVG is drawn by a third party, so pass it our palette */
    function updateStreakTheme() {
        var img = document.getElementById('streak-img');
        if (!img) return;
        var dark = root.getAttribute('data-theme') === 'dark';
        var bg = dark ? '232120' : 'FFFFFF';
        var label = dark ? 'E7E3DD' : '1C1917';
        var nums = dark ? '9A938B' : '6B6560';
        var ring = dark ? 'D17A4F' : 'B85C38';
        img.src = 'https://github-readme-streak-stats.herokuapp.com/?user=saketlovescoding&hide_border=true' +
            '&background=' + bg + '&ring=' + ring + '&fire=' + ring +
            '&currStreakLabel=' + label + '&sideLabels=' + label + '&currStreakNum=' + label +
            '&sideNums=' + nums + '&dates=' + nums;
    }

    updateStreakTheme();
})();
