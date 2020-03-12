# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

user1 = User.create({email: 'jhalpert@gmail.com', password: 'bigtuna'})

video1 = Video.create({title: "Mad Max: Fury Road", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.", media_type: "movie", duration: "2h", rating: "R", year: "2015"})
    video1.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/mad_max_fury_road.mp4"), filename:"mad_max_fury_road.mp4")
    video1.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/mad_max_thumbnail.jpg"), filename:"mad_max_thumbnail.jpg")

video2 = Video.create({title: "The Grand Budapest Hotel", description: "A hotel concierge recounts his adventures at a famous European hotel, including the theft and recovery of a priceless Renaissance painting and the battle for an enormous family fortune.", media_type: "movie", duration: "1h 40m", rating: "R", year: "2014"})
    video2.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/the_grand_budapest_hotel.mp4"), filename: "the_grand_budapest_hotel.mp4")
    video2.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/grand_budapest_hotel_thumbnail.jpg"), filename:"grand_budapest_hotel_thumbnail.jpg")

video3 = Video.create({title: "Star Wars: The Force Awakens", description: "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.", media_type: "movie", duration: "2h 15m", rating: "PG-13", year: "2015"})
    video3.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/the_force_awakens.mp4"), filename: "the_force_awakens.mp4")
    video3.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/the_force_awakens_thumbnail.jpg"), filename:"the_force_awakens.jpg")

# video4 = Video.create({title: "Parasite", description: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.", media_type: "movie", duration: "2h 12m", rating: "R", year: "2019"})
#     video4.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/parasite.mp4"), filename: "parasite.mp4")
#     video4.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/parasite.jpg"), filename: "parasite.jpg")

# video5 = Video.create({title: "Avengers: Endgame", description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", media_type: "movie", duration: "3h 02m", rating: "PG-13", year: "2019"})
#     video5.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/avengers_endgame.mp4"), filename: "avengers_endgame.mp4")
#     video5.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/avengers_endgame.jpg"), filename:"avengers_endgame.jpg")

# video6 = Video.create({title: "Spider-Man: Homecoming", description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.", media_type: "movie", duration: "2h 13m", rating: "PG-13", year: "2017"})
#     video6.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/spiderman_homecoming.mp4"), filename: "spiderman_homecoming.mp4")
#     video6.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/spiderman_homecoming.jpg"), filename: "spiderman_homecoming.jpg")

# video7 = Video.create({title: "John Wick", description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.", media_type: "movie", duration: "1h 41m", rating: "R", year: "2014"})
#     video7.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/john_wick.mp4"), filename: "john_wick.mp4")
#     video7.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/john_wick.jpg"), filename: "john_wick.jpg")

# video8 = Video.create({title: "Arrival", description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.", media_type: "movie", duration: "1h 56m", rating: "PG-13", year: "2016"})
#     video8.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/arrival.mp4"), filename: "arrival.mp4")
#     video8.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/arrival.jpg"), filename: "arrival.jpg")
    
# video9 = Video.create({title: "Whiplash", description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.", media_type: "movie", duration: "1h 46m", rating: "R", year: "2014"})
#     video9.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/whiplash.mp4"), filename: "whiplash.mp4")
#     video9.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/whiplash.jpg"), filename: "whiplash.jpg")
    
# video10 = Video.create({title: "Ex Machina", description: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.", media_type: "movie", duration: "1h 48m", rating: "R", year: "2015"})
#     video10.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/ex_machina.mp4"), filename: "ex_machina.mp4")
#     video10.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/ex_machina.jpg"), filename: "ex_machina.jpg")

# video11 = Video.create({title: "Spider-Man: Into The Spider-Verse", description: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.", media_type: "movie", duration: "1h 57m", rating: "PG", year: "2018"})
#     video11.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/spiderman_into_the_spiderverse.mp4"), filename:"spiderman_into_the_spiderverse.mp4")
#     video11.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/spiderman_into_the_spiderverse.jpg"), filename: "spiderman_into_thi_spiderverse.jpg")

# video12 = Video.create({title: "Get Out", description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.", media_type: "movie", duration: "1h 44m", rating: "R", year: "2017"})
#     video12.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/get_out.mp4"), filename:"get_out.mp4")
#     video12.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/get_out.png"), filename: "get_out.png")

# video13 = Video.create({title: "Moonlight", description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.", media_type: "movie", duration: "1h 51m", rating: "R", year: "2016"})
#     video13.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/moonlight.mp4"), filename:"moonlight.mp4")
#     video13.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/moonlight.png"), filename:"moonlight.png")

# video14 = Video.create({title: "Knives Out", description: "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate.", media_type: "movie", duration: "2h 11m", rating: "PG-13", year: "2019"})
#     video14.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/knives_out.mp4"), filename:"knives_out.mp4")
#     video14.thumbnail.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/knives_out.jpg"), filename:"knives_out.jpg")

# video15 = Video.create({title: "The Wolf of Wall Street", description: "From the American dream to corporate greed, New York stockbroker Jordan Belfort goes from penny stocks and righteousness to IPOs and a life of corruption in the late 80s.", media_type: "movie", duration: "2h 59m", rating: "R", year: "2013"})
#     video15.trailer.attach(io: open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/wolf_of_wall_street.mp4"), filename:"wolf_of_wall_street.mp4")
#     video15.thumbnail.attach(io:open("https://nextflix-seeds.s3-us-west-1.amazonaws.com/wolf_of_wall_street.jpg"))


