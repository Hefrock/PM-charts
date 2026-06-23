(function() {
  var CHARTS = [
    { n:'01', title:'Gantt chart',              file:'01-gantt.html',              cat:'Schedule', col:'#D85A30' },
    { n:'02', title:'S-Curve',                  file:'02-s-curve.html',            cat:'Schedule', col:'#D85A30' },
    { n:'03', title:'Priority roadmap',         file:'03-priority-roadmap.html',   cat:'Reference',col:'#534AB7' },
    { n:'04', title:'Risk matrix',              file:'04-risk-matrix.html',        cat:'Risk',     col:'#E24B4A' },
    { n:'05', title:'Critical path',            file:'05-critical-path.html',      cat:'Schedule', col:'#D85A30' },
    { n:'06', title:'Stakeholder grid',         file:'06-stakeholder-grid.html',   cat:'People',   col:'#1D9E75' },
    { n:'07', title:'Burn-down chart',          file:'07-burn-down.html',          cat:'Schedule', col:'#D85A30' },
    { n:'08', title:'RACI matrix',              file:'08-raci-matrix.html',        cat:'People',   col:'#1D9E75' },
    { n:'09', title:'Resource histogram',       file:'09-resource-histogram.html', cat:'People',   col:'#1D9E75' },
    { n:'10', title:'EVM curves',               file:'10-evm-curves.html',         cat:'Finance',  col:'#BA7517' },
    { n:'11', title:'Pareto chart',             file:'11-pareto-chart.html',       cat:'Finance',  col:'#BA7517' },
    { n:'12', title:'Tornado diagram',          file:'12-tornado-diagram.html',    cat:'Risk',     col:'#E24B4A' },
    { n:'13', title:'Cumulative flow diagram',  file:'13-cumulative-flow.html',    cat:'Schedule', col:'#D85A30' },
    { n:'14', title:'Control chart',            file:'14-control-chart.html',      cat:'Risk',     col:'#E24B4A' },
    { n:'15', title:'Fishbone diagram',         file:'15-fishbone.html',           cat:'Reference',col:'#534AB7' },
  ];

  var currentFile = window.location.pathname.split('/').pop();
  var isIndex = !currentFile || currentFile === '' || currentFile === 'index.html';
  var currentIdx = CHARTS.findIndex(function(c){ return c.file === currentFile; });
  var prev = currentIdx > 0 ? CHARTS[currentIdx - 1] : null;
  var next = currentIdx < CHARTS.length - 1 ? CHARTS[currentIdx + 1] : null;
  var progress = currentIdx >= 0 ? Math.round((currentIdx + 1) / CHARTS.length * 100) : 0;

  var navHTML = '<nav style="background:var(--pm-surface);border-bottom:0.5px solid var(--pm-border-strong);padding:10px 20px;display:flex;align-items:center;gap:12px;position:sticky;top:0;z-index:100;flex-wrap:wrap">'
    + '<a href="' + (isIndex ? '#' : '../index.html') + '" style="font-size:13px;font-weight:500;color:var(--pm-coral-400);text-decoration:none;white-space:nowrap">PM Chart Library</a>';

  if (!isIndex && currentIdx >= 0) {
    navHTML += '<span style="color:var(--pm-border-strong)">|</span>'
      + '<span style="font-size:12px;color:var(--pm-tx-secondary);white-space:nowrap">' + (currentIdx + 1) + ' of ' + CHARTS.length + '</span>'
      + '<div style="flex:1;min-width:60px;height:3px;background:var(--pm-border);border-radius:2px;overflow:hidden">'
      + '<div style="height:100%;width:' + progress + '%;background:var(--pm-coral-400);border-radius:2px;transition:width .3s"></div>'
      + '</div>'
      + '<div style="display:flex;gap:6px;margin-left:auto">';
    if (prev) {
      navHTML += '<a href="' + prev.file + '" style="font-size:11px;color:var(--pm-tx-secondary);text-decoration:none;padding:3px 8px;border:0.5px solid var(--pm-border-strong);border-radius:20px;white-space:nowrap">&#8592; ' + prev.title + '</a>';
    }
    if (next) {
      navHTML += '<a href="' + next.file + '" style="font-size:11px;color:var(--pm-tx-secondary);text-decoration:none;padding:3px 8px;border:0.5px solid var(--pm-border-strong);border-radius:20px;white-space:nowrap">' + next.title + ' &#8594;</a>';
    }
    navHTML += '</div>';
  } else {
    navHTML += '<span style="font-size:12px;color:var(--pm-tx-secondary)">15 interactive charts for project managers</span>';
  }

  navHTML += '</nav>';

  document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById('pm-nav');
    if (el) el.innerHTML = navHTML;
  });
})();
