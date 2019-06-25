window.$docsify.plugins = [
    function(hook) {
        var header = [
            '<header>Header</header>'
        ].join('');

        var footer = [
          '<hr/>',
          '<footer>Footer</footer>'
        ].join('');

        hook.beforeEach(function(html) {
            return header + html;
        });

        hook.afterEach(function(html) {
          return html + footer;
        });
    }
];