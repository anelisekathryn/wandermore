# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Place.destroy_all
User.destroy_all

@admin = User.create!(username: 'anelise', email: 'anelise@test.com', password: 'ab1234')

puts "#{User.count} users created"

Place.create!(list: 'traveled', country: 'Peru', month: 'August', year: '2017', user: @admin)

puts "#{Place.count} places created"