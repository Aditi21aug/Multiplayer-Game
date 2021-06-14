class Game
{
   constructor()
   {

   }

   start()
   {
      player.getCount()
      form.display()
   }

   play()
   {
       form.hide()
       textSize(40)
       text("Game Started",400,100);
       var distance = 200
       player.getPlayerInfo()
       for(var plr in allPlayers)
       {
          distance = distance + 100
          text(allPlayers[plr].name + ':' + allPlayers[plr].distance ,400,distance)
       }
   }
}