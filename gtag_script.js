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
        var internal_links = [window.location.hostname, /e-norlaunchpad/]
        var is_outbound = !internal_links.includes(link_domain)

        if (is_outbound) {
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
