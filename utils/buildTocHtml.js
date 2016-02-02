var path = require('path'),
    fs = require('fs'),
    configFilePath = './_config.yml',
    baseurl;

var getMeta = function(filename) {
    if (filename && fs.existsSync(path.resolve(filename))) {
        var file = fs.readFileSync(path.resolve(filename), 'utf-8'),
            meta = {},
            line,
            start = false,
            content = file.split('\n');

        for (var i = 0; i < content.length; i++) {
            line = content[i].trim('\r');
            if (line === '---') {
                if (start) {
                    return meta;
                } else start = true;
            } else if (start) {
                var vals = line.split(':'),
                    key = vals[0].trim(),
                    value = vals[1].trim();
                meta[key] = value;
            }
        }
    } else return '';
};

var getClassFromLink = function(permalink) {
    if (permalink) {
        var startIndex = 0,
            endIndex = permalink.indexOf('.html') != -1 ? permalink.indexOf('.html') : permalink.length;
            var finalLink = permalink.substring(startIndex, endIndex).replace(/\/$/, '').replace(/\//g, '-');
            finalLink = finalLink.split('.').join('-');
        return (finalLink + ' ');
    } else return '';
};
var getBaseUrl = function() {
    fs.readFileSync(configFilePath).toString().split('\n').forEach(function(line) {
        if(line.indexOf('baseurl:') === 0) {
            baseurl = line.substr(line.indexOf(':')+1).trim();
        }
    });
}
getBaseUrl();
var buildToc = function(toc, isChild, level0) {
    var result = '\n' ,cat_entry, i;
    //result += JSON.stringify(toc);
        for(i = 0;i<toc.length;i++)
        {
            cat_entry = toc[i];
           // result += cat_entry;
            function genData(toc,isChild,level0)
                {
                    var entry,i,data_res='<ul class="nav-list' + (isChild ? '' : ' master-nav') + '">\n';
                    
                        for (i = 0; i < toc.length; i++) {
                        entry = toc[i];
                        //data_res += entry.children;
                    
                        if (entry.children && entry.children.length) {
                            if (entry.title && entry.title != '') {

                                data_res += '<li class="parent ' + (isChild ? 'child' : '') + '">\n' +
                                    '<i class="fa fa-angle-right arrow-dropdown"></i>\n' +
                                    '<a>' + entry.title + '</a>\n';
                                data_res += genData(entry.children, true, (isChild ? level0 : entry.title));
                                data_res += '</li>\n';
                            }
                        } else {
                            var pageMeta = getMeta(entry.path),
                                link;

                            if (entry.link && entry.link.length) {
                                link = entry.link;
                            } else if (pageMeta && pageMeta.permalink) {
                                link = pageMeta.permalink;
                            } else {
                                link = entry.path.replace('.md', '.html');
                            }
                            link = baseurl + link;
                            data_res += '<li data-parent="' + (isChild ? level0 : (entry.title || pageMeta.title)) + '" class="' + getClassFromLink(link) + (isChild ? 'child' : '') + '">\n<a href="' + link + '">' +
                                (entry.title || pageMeta.title) + '</a>\n</li>\n';
                        }
                    }
                    
                    data_res += "</ul>\n";
                    return data_res
                }
            if(cat_entry['category'])
            {
                result += "<div class='category_name'> "+cat_entry['category']+"</div>";
                var cat_name = cat_entry['category'].toLowerCase().trim().replace(/\s|\W/g,"-").replace("'",""); 
                result += "<div class='toc-category "+cat_name+"'>"+genData(cat_entry['data'],false)+"</div><hr>";
            }
           else
            {
                result +="<div class='no-category'>"+ genData(cat_entry['data'])+"</div><hr>";
            }
        }
    result += '\n';
    return result;
};

var tocHtml = '<div class="toc">\n' +
    '<div class="div-search">\n<input type="text" class="toc-search search-query" placeholder="TOC Search" autocomplete="off">\n' +
    '<i class="fa fa-search search-icon"></i>\n</div>\n<div class="toc-list">\n' +
    
    buildToc(JSON.parse(fs.readFileSync(path.resolve('utils/tocMeta.json'), 'utf-8')), false) +
    '</div>\n<div class="no-match"></div>\n</div>\n';

fs.writeFileSync(path.resolve('_includes/toc.html'), tocHtml, 'utf-8');
