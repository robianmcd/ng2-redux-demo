(function () {
    var packages = {
        'app': {defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        '@ngrx/core': {
            main: 'index.js',
            format: 'cjs'
        },
        '@ngrx/store': {
            main: 'index.js',
            format: 'cjs'
        }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    ngPackageNames.forEach(function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js'};
    });

    var config = {
        map: {
            '@angular': 'node_modules/@angular',
            'rxjs': 'node_modules/rxjs',
            '@ngrx': 'node_modules/@ngrx'
        },
        packages: packages
    };
    System.config(config);
})();
