# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


product = Product.create(
	[
		{
			title: "A new cake recipe",
            description: "Made of chocolate",
			votes: 55,
			url: '#',
      		submitterAvatarUrl: 'images/avatars/daniel.jpg',
      		productImageUrl: 'images/products/image-aqua.png'
		},
		{
			title: "A twitter client idea",
            description: "Only for replying to mention and DMs",
			votes: 52,
			url: '#',
      		submitterAvatarUrl: 'images/avatars/elliot.jpg',
      		productImageUrl: 'images/products/image-rose.png'
		},
		{
			title: "A novel set in Italy",
            description: "A mafia crime drama starring Berlusconi",
			votes: 51,
			url: '#',
      		submitterAvatarUrl: 'images/avatars/elyse.jpg',
      		productImageUrl: 'images/products/image-steel.png'
		}

	]
)