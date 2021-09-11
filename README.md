[Сайт](http://www.saratov-aikido.ru) Саратовской федерации Айкидо Айкикай
=========================================================================

Саратовская Федерация Айкидо Айкикай - общественная организация, созданная для развития айкидо айкикай на территории Саратова и области по инициативе Петрова Станислава в 2003 г.

-------------------------------------------------------------------------
Настройка локального сервера
=========================================================================
1) Для Apache добавить в httpd.conf:    
    - Виртуальный хост:
    ```
    <VirtualHost *:80>
        ServerName aikido_old.lh
        DocumentRoot "${SRVROOT}/htdocs/saratov-aikido/old"
    </VirtualHost>
    <VirtualHost *:80>
        ServerName aikido_new.lh
        DocumentRoot "${SRVROOT}/htdocs/saratov-aikido/new"
    </VirtualHost>
    ```
    - Добавить поддержку русских символов:
    ```
    AddDefaultCharset UTF-8
    ```
2) Для Windows описать имя сервера:
    - Открыть файл C:\Windows\System32\drivers\etc\hosts
    - Добавить в него: 
    ```
    127.0.0.1 aikido_new.lh
    127.0.0.1 aikido_old.lh
    ```