d3.csv( 'data.csv' ).then(function( data ){
                            console.log( data )
                          })

let dataset = [10, 20, 30, 40, 50]

let el      = d3.select( 'body' )
    .selectAll( 'p' )
    .data( dataset )
    .enter()
    .append( 'p' )
    .text( function( d ) {
        return 'This paragraph is binded to the number ' + d;
    })
    //  .append( 'p )
    .attr( 'class', function( d ) {
        if(d > 25) {
            return 'foo';
        } else{
            return null;
          }
    } )
    //  .attr( 'class', 'bar' )
    //  .classed( 'foo', true )
    .classed( 'bar', function( d ){
        return d < 25;
    } )
    .style( 'color', function( d ) {
        if( d > 25 ){
            return 'red';
        } else{
            return 'blue';
        }

    })