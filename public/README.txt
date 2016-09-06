Ok, This was tougher than I thought it would be and I'm a long way from finished.
I ran into several issues many that I still have not resolved. I spent a couple of
days researching and learning React and how babel worked with Webkit to transpile
javascript code before I even began. When I finally set out to begin the work I decided to go with what
I know and work in AngularJS and then in refactoring slip in some React components.
I never got that far.


Currently pressing the search button before changng the date will bring back response data.
I had issues converting selected dates into a format I could
use in the http call. The bootstrap date picker would not bind to the $rootscope.
I know this is becouse its got its own "parent" scope but it was taking too long to
 resolve so I tried a datepicker directive that would bind to the scope but would not
  keep its formating. A bug I suppose.

  Finding a formula to find the "start_date" was also
   a problem. I wanted to use a formula like var d = new Date(); d.setDate(d.getDate()-5);
   but javascript didn't recognize my $scope.date as a date object.

   Next I had trouble iterating over the returned data.
  I tried both bracket and dot syntax but have yet to work that out.

  I spent about 11 hours working
  on this. I would need a full day to work out the bugs.