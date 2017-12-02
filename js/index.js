function dynamicallyLoadScript(url) {
    var script = document.createElement('script');
    script.src = url;

    document.head.appendChild(script);
}

var pathArr = window.location.pathname.split( '/' ),
pageName = pathArr[pathArr.length - 1];

switch(pageName) {
  case '':
  case 'index.html':
    dynamicallyLoadScript('js/hotkeys.js');
    dynamicallyLoadScript('js/gallery.js');
    dynamicallyLoadScript('js/appearance.js');
    dynamicallyLoadScript('js/canvas.js');
    break;
  case 'blog.html':
    dynamicallyLoadScript('js/validation.js');
    dynamicallyLoadScript('js/appearance.js');
    break;
  case 'ai.html':
  case 'blog.html':
  case 'hobbies.html':
  case 'plans.html':
  case 'programming_languages.html':
  case 'subjects.html':
    dynamicallyLoadScript('js/appearance.js');
}
