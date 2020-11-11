# Open Flights using Rails and React

## Creating a new app
`rails new open-flights --webpack=react --database=postgresql -T`

## Postgresql
Start manually
`pg_ctl -D /usr/local/var/postgres start`

Stop manually
`pg_ctl -D /usr/local/var/postgres stop`

Start automatically

"To have launchd start postgresql now and restart at login:"
`brew services start postgresql`

## Create a new database
`rails db:create`

## Models
`rails g model Airline name image_url slug`

`rails g model Review title description:text score:integer airline:belongs_to`

## Serializer

## Views
In javascript > packs > jsx file, get the pack tag and add it in `application.html.erb` like so:

```ruby
<%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>

<%= javascript_pack_tag 'hello_react' %>
```

## References
- https://www.youtube.com/watch?v=oyjzi837wME