https://github.com/callemall/material-ui/tree/master/example

STYLE
http://riotdesign.eu/en/

CONTENT
http://percolatestudio.com/

HOST
ssh root@128.199.217.218
congdongmo

UPLOAD
scp team.tar.gz root@128.199.217.218:/var/www/particle4dev.com/

UNZIP
tar -zxf team.tar.gz

NGIXN
cd /etc/nginx/sites-available
vim iojs-vi

===CONTENT
server_tokens off; # for security-by-obscurity: stop displaying nginx version

# this section is needed to proxy web-socket connections
# map $http_upgrade $connection_upgrade {
    # default upgrade;
    # ''      close;
# }

# git hook
server {
  listen       9001;
  server_name  iojs-vi.com;

  location / {
    proxy_pass http://127.0.0.1:8082/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

}

# HTTP
server {
    listen 80 default_server; # if this is not a default server, remove "default_server"
    listen [::]:80 default_server ipv6only=on;

    ssl off;

    server_name iojs-vi.com; # the domain on which we want to host the application. Since we set "default_server" previously, nginx will answer all hosts anyway.

    access_log /etc/nginx/logs/iojs-vi.access;
    error_log /etc/nginx/logs/iojs-vi.error error;

    # If your application is not compatible with IE <= 10, this will redirect visitors to a page advising a browser update
    # This works because IE 11 does not present itself as MSIE anymore
    if ($http_user_agent ~ "MSIE" ) {
        return 303 https://browser-update.org/update.html;
    }
    # location ~* \.(js|jpg|png|css)$ {
        # root /var/www/iojs-vi.com/public_html;
        # expires 30d;
    # }
    # location / {
        # root /var/www/iojs-vi.com/public_html;
        # index index.html index.htm;
        # expires 30d;
    # }
    location / {
        root /var/www/iojs-vi.com/iojs-vi/_site;
        index index.html index.htm;
        expires 30d;
    }
}

# HTTP
server {
    listen 4000;

    ssl off;

    server_name jekyll.iojs-vi.com; # the domain on which we want to host the application. Since we set "default_server" previously, nginx will answer all hosts anyway.

    access_log /etc/nginx/logs/iojs-vi.access;
    error_log /etc/nginx/logs/iojs-vi.error error;

    # If your application is not compatible with IE <= 10, this will redirect visitors to a page advising a browser update
    # This works because IE 11 does not present itself as MSIE anymore
    if ($http_user_agent ~ "MSIE" ) {
        return 303 https://browser-update.org/update.html;
    }
    # location ~* \.(js|jpg|png|css)$ {
        # root /var/www/iojs-vi.com/public_html;
        # expires 30d;
    # }
    location / {
        root /var/www/iojs-vi.com/iojs-vi/_site;
        index index.html index.htm;
        expires 30d;
    }
}

# HTTP
server {
    listen 3000;

    ssl off;

    server_name jekyll.iojs-vi.com; # the domain on which we want to host the application. Since we set "default_server" previously, nginx will answer all hosts anyway.

    access_log /etc/nginx/logs/iojs-vi.access;
    error_log /etc/nginx/logs/iojs-vi.error error;

    # If your application is not compatible with IE <= 10, this will redirect visitors to a page advising a browser update
    # This works because IE 11 does not present itself as MSIE anymore
    if ($http_user_agent ~ "MSIE" ) {
        return 303 https://browser-update.org/update.html;
    }
    location ~* \.(js|jpg|png|css)$ {
        root /var/www/particle4dev.com/team;
        expires 30d;
    }
    location / {
        root /var/www/particle4dev.com/team;
        index index.html index.htm;
        expires 30d;
    }
}

RELOAD NGIXN
rm /etc/nginx/sites-enabled/iojs-vi
ln -s /etc/nginx/sites-available/iojs-vi /etc/nginx/sites-enabled/iojs-vi
nginx -t
nginx -s reload
