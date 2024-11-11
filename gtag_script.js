document.addEventListener('DOMContentLoaded', function() {
    var cookieMatch = document.cookie.match(/ga1\.\w\.\w+\.\w+/i)
    var cookieValue = cookieMatch ? cookieMatch[0] : ''
    var client_id = cookieValue ? cookieValue.split('.')[2] + '.' + cookieValue.split('.')[3] : ''
    var user_id = localStorage.getItem('user_id')
    var login_status = localStorage.getItem('login_status')
    var page_type = window.location.pathname.split('/')[2].split('.')[0] || 'Home'

    gtag('config', 'G-4FN9HFPY81', {
        'client_id': client_id,
        'user_id': user_id,
        'login_status': login_status,
        'page_type': page_type
    })
    
    gtag('set', 'navbar_click', {
        'login_status': login_status,
        'page_type': page_type,
        'client_id': client_id,
        'user_id': user_id
    })
})

document.querySelector('.login_btn').addEventListener('click', function(event) {
    if (localStorage.getItem('login_status') === 'false') {
        var cookieMatch = document.cookie.match(/ga1\.\w\.\w+\.\w+/i)
        var cookieValue = cookieMatch ? cookieMatch[0] : ''
        var client_id = cookieValue ? cookieValue.split('.')[2] + '.' + cookieValue.split('.')[3] : ''
        var user_id = localStorage.getItem('user_id')
        var login_status = localStorage.getItem('login_status')
        var page_type = window.location.pathname.split('/')[2].split('.')[0] || 'Home'

        gtag('config', 'G-4FN9HFPY81', {
            'client_id': client_id,
            'user_id': user_id,
            'login_status': login_status,
            'page_type': page_type
        })
    }
})

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
