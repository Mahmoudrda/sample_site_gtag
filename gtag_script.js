document.querySelector('.navbar').addEventListener('click', function(event) {
    var link = event.target
    var link_classes = link.getAttribute("class")
    var link_domain = link.hostname
    var link_id = link.getAttribute("id")
    var link_url = link.href

    gtag('event', 'navbar_click', {
        'link_classes': link_classes,
        'link_domain': link_domain,
        'link_id': link_id,
        'link_url': link_url
    })
})

var links = document.querySelectorAll('a')
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        var link = event.target
        var link_classes = link.getAttribute("class")
        var link_domain = link.hostname
        var link_id = link.getAttribute("id")
        var link_url = link.href
        //var internal_links = [window.location.hostname, /e-norlaunchpad/]
        var internalLinkRegex = new RegExp(`(${window.location.hostname}|e-norlaunchpad|tel|mailto)`)
        var is_outbound = !internalLinkRegex.test(link_url)
        var download_extension_regex = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pps|pptx?|7z|pkg|rar|gz|zip|avi|mov|mp4|mpeg|mpg|wmv|midi?|mp3|wav|wma|mailto|tel)$/i
        var is_download = download_extension_regex.test(link_url)


        if (is_outbound && !is_download) {
            gtag('event', 'click', {
                'link_classes': link_classes,
                'link_domain': link_domain,
                'link_id': link_id,
                'link_url': link_url,
                'outbound': is_outbound
            })
        }
    })
}
