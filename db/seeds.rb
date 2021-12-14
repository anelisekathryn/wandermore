# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Place.destroy_all
User.destroy_all

@admin = User.create!(username: 'anelise', email: 'anelise@test.com', password: 'ab1234', profile_image_url: 'https://i.imgur.com/Kz4y1z2.jpg')

puts "#{User.count} users created"

Place.create!(list: 'Traveled To', country: 'United Kingdom', month: 'March', year: '2004', user: @admin)
Place.create!(list: 'Traveled To', country: 'Spain', month: 'August', year: '2007', user: @admin)
Place.create!(list: 'Traveled To', country: 'France', month: 'September', year: '2007', user: @admin)
Place.create!(list: 'Traveled To', country: 'Italy', month: 'September', year: '2007', user: @admin)
Place.create!(list: 'Traveled To', country: 'Morocco', month: 'October', year: '2007', user: @admin)
Place.create!(list: 'Traveled To', country: 'Portugal', month: 'December', year: '2007', user: @admin)
Place.create!(list: 'Traveled To', country: 'Ireland', month: 'July', year: '2013', user: @admin)
Place.create!(list: 'Traveled To', country: 'United Kingdom', month: 'March', year: '2013', user: @admin)
Place.create!(list: 'Traveled To', country: 'Iceland', month: 'July', year: '2013', user: @admin)
Place.create!(list: 'Traveled To', country: 'Colombia', month: 'May', year: '2016', user: @admin)
Place.create!(list: 'Traveled To', country: 'Canada', month: 'January', year: '2017', user: @admin)
Place.create!(list: 'Traveled To', country: 'Costa Rica', month: 'May', year: '2017', user: @admin)
Place.create!(list: 'Traveled To', country: 'Peru', month: 'August', year: '2017', user: @admin)
Place.create!(list: 'Traveled To', country: 'Mexico', month: 'December', year: '2017', user: @admin)
Place.create!(list: 'Upcoming Adventures', country: 'Switzerland', month: 'January', year: '2021', user: @admin)
Place.create!(list: 'Upcoming Adventures', country: 'Austria', month: 'January', year: '2021', user: @admin)
Place.create!(list: 'Upcoming Adventures', country: 'France', month: 'January', year: '2021', user: @admin)
Place.create!(list: 'Upcoming Adventures', country: 'Germany', month: 'January', year: '2021', user: @admin)
Place.create!(list: 'On The List', country: 'Australia', user: @admin)
Place.create!(list: 'On The List', country: 'Japan', user: @admin)
Place.create!(list: 'On The List', country: 'Israel', user: @admin)
Place.create!(list: 'On The List', country: 'Nepal', user: @admin)
Place.create!(list: 'On The List', country: 'New Zealand', user: @admin)
Place.create!(list: 'On The List', country: 'Indonesia', user: @admin)
Place.create!(list: 'On The List', country: 'Argentina', user: @admin)
Place.create!(list: 'On The List', country: 'Chile', user: @admin)

puts "#{Place.count} places created"